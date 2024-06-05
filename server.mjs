import express from 'express';
import bodyParser from 'body-parser';
import { initializeApp } from 'firebase/app'; // Import initializeApp function
import { getFirestore } from 'firebase/firestore'; // Import getFirestore function
import { getStorage } from 'firebase/storage'; // Import getStorage function
import { collection, addDoc } from 'firebase/firestore'; // Import collection and addDoc functions from Firestore
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa-AtFuPM-bhEKsXNdWkUomro4q5ygVhM",
  authDomain: "siddhesh-travels.firebaseapp.com",
  projectId: "siddhesh-travels",
  storageBucket: "siddhesh-travels.appspot.com",
  messagingSenderId: "904772354648",
  appId: "1:904772354648:web:ef0b35c57115f51aee802d",
  measurementId: "G-5T38T4E404"
};

// Initialize Firebase app
const appFirebase = initializeApp(firebaseConfig);
const dbFirebase = getFirestore(appFirebase); // Initialize Firestore
const storageFirebase = getStorage(appFirebase); // Initialize Storage

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route handler for POST /payment/success
app.post("/payment/success", async (req, res) => {
  const formData = req.body;
  const { packageName, itineraryDetails, price } = req.query;
  console.log("Form Data:", formData);
  try {
    const code = req.body.code;
    const merchantId = req.body.merchantId;
    const transactionId = req.body.transactionId;
    const amount = req.body.amount;
    const body = req.body;
    const providerReferenceId = req.body.providerReferenceId;
    
    await addDoc(collection(dbFirebase, "payments"), {
      code,
      merchantId,
      transactionId,
      amount,
      providerReferenceId,
      createdAt: new Date(),
    });

    console.log("Payment success data full:", req.body);
    console.log("Payment success data:", {
      code,
      merchantId,
      transactionId,
      amount,
    });
    if (body) {
      const redirectUrl = `http://localhost:3000/?transactionId=${transactionId}`;
      res.redirect(redirectUrl);
    } else {
      console.error("Condition not met. Not redirecting.");
      res.status(200).json({
        success: false,
        message: "Condition not met. Not redirecting.",
        body: req.body,
      });
    }
  } catch (error) {
    console.error("Error handling payment success:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
