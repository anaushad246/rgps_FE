import React, { useState } from 'react';

const TrustDonation = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Donate</h1>
      <p className="text-gray-600 mb-8 text-center">Support our mission to [insert mission]. Please choose your preferred payment method below to see the details.</p>
      <div className="donation-form bg-white p-6 shadow-md rounded-lg">
        <div className="form-field mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="paymentMethod">
            Payment Method
          </label>
          <div className="flex items-center justify-center">
            <input
              type="radio"
              id="account"
              name="paymentMethod"
              value="account"
              className="mr-2"
              onChange={handlePaymentChange}
            />
            <label className="text-gray-700 mr-4" htmlFor="account">
              Bank Account
            </label>
            <input
              type="radio"
              id="upi"
              name="paymentMethod"
              value="upi"
              className="mr-2"
              onChange={handlePaymentChange}
            />
            <label className="text-gray-700 mr-4" htmlFor="upi">
              UPI
            </label>
          </div>
        </div>
      </div>
      <div className="payment-details mt-8">
        {paymentMethod === 'account' && (
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Bank Account Details</h2>
            <p className="text-gray-600">Account Number: 1234567890</p>
            <p className="text-gray-600">Bank Name: XYZ Bank</p>
            <p className="text-gray-600">IFSC Code: XYZ1234</p>
          </div>
        )}
        {paymentMethod === 'upi' && (
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">UPI Details</h2>
            <p className="text-gray-600">UPI ID: example@upi</p>
          </div>
        )}
      </div>
      <div className="recognition-wall mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Donors</h2>
        <ul className="list-disc list-inside">
          <li className="text-gray-600 mb-2">Donor 1</li>
          <li className="text-gray-600 mb-2">Donor 2</li>
          <li className="text-gray-600 mb-2">Donor 3</li>
        </ul>
      </div>
    </div>
  );
};

export default TrustDonation;
