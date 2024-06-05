import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import sha256 from "crypto-js/sha256";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Payment = () => {
  const [data, setData] = useState({ name: "", mobile: "" });
  const [price, setPrice] = useState(0);
  const [packageId, setPackageId] = useState('');

  // Parse query parameters from the URL
  const searchParams = new URLSearchParams(useLocation().search);
  const priceFromQuery = parseFloat(searchParams.get('price')) || 0;
  const packageIdFromQuery = searchParams.get('packageId') || '';

  useEffect(() => {
    setPrice(priceFromQuery);
    setPackageId(packageIdFromQuery);
  }, [priceFromQuery, packageIdFromQuery]);

  const handleFormData = (e) => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  };

  const makePayment = async (e) => {
    e.preventDefault();

    const transactionId = "Tr-" + uuidv4().toString(36).slice(-6);
    const payload = {
      merchantId: "PGTESTPAYUAT",
      merchantTransactionId: transactionId,
      merchantUserId: "MUID-" + uuidv4().toString(36).slice(-6),
      amount: price * 100,
      redirectUrl: `http://localhost:3001/payment/success`,
      redirectMode: "POST",
      callbackUrl: `http://localhost:3000/payment/callback`,
      mobileNumber: data.mobile,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const dataPayload = JSON.stringify(payload);
    const dataBase64 = btoa(dataPayload);
    const fullURL = dataBase64 + "/pg/v1/pay099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
    const dataSha256 = sha256(fullURL);
    const checksum = dataSha256 + "###1";

    const UAT_PAY_API_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

    try {
      const response = await axios.post(
        UAT_PAY_API_URL,
        {
          request: dataBase64,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "X-VERIFY": checksum,
          },
        }
      );

      const redirect = response.data.data.instrumentResponse.redirectInfo.url;
      window.location.replace(redirect);
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                value={data.name}
                onChange={handleFormData}
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="Mobile" className="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
            <div className="mt-2">
              <input
                id="Mobile"
                name="mobile"
                value={data.mobile}
                onChange={handleFormData}
                type="tel"
                autoComplete="mobile"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="Amount" className="block text-sm font-medium leading-6 text-gray-900">Amount</label>
            <div className="mt-2">
              <input
                id="Amount"
                name="amount"
                value={price}
                readOnly
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              onClick={makePayment}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
