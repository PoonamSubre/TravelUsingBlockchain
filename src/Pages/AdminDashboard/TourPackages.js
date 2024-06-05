import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; 
import { db, storage } from '../firebase'; 

const TourPackages = () => {
  const [formData, setFormData] = useState({
    packageName: '',
    itineraryDetails: '',
    price: '',
    startDate: '',
    endDate: '',
    duration: '',
    accommodation: '',
    description: '',
    itineraryDayWise: '', 
    image: null, 
    imageURL: '' 
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0], 
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setSubmitting(true);
        const docRef = await addDoc(collection(db, 'tourPackages'), {
          ...formData, 
          paymentDetails: { 
            amount: formData.price,
          }
        });
        console.log('Form data stored successfully with ID: ', docRef.id);
        setFormData({
          packageName: '',
          itineraryDetails: '',
          price: '',
          startDate: '',
          endDate: '',
          duration: '',
          accommodation: '',
          description: '',
          itineraryDayWise: '', 
          image: null,
          imageURL: ''
        });
      } catch (error) {
        console.error('Error storing form data: ', error);
      } finally {
        setSubmitting(false);
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.packageName.trim()) {
      newErrors.packageName = 'Package Name is required';
      isValid = false;
    }

    // Add more validations as needed

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="container mx-auto">
      <div className="border border-gray-300 rounded p-6">
        <form onSubmit={handleSubmit}>
          {/* Display form-wide errors */}
          {submitting && !Object.keys(errors).length && (
            <p className="text-red-500 mb-4">Failed to submit the form. Please check the fields and try again.</p>
          )}

          {/* Individual input fields */}
          <div className="mb-4">
            <label className="block mb-1" htmlFor="packageName">Package Name</label>
            <input
              type="text"
              id="packageName"
              name="packageName"
              value={formData.packageName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            {errors.packageName && <p className="text-red-500">{errors.packageName}</p>}
          </div>

          {/* Include other input fields similarly */}

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TourPackages;
