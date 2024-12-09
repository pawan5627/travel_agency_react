import React from 'react';

const FormFields = ({
  address,
  onAddressChange,
  paymentMethod,
  onPaymentChange,
  isFormValid
}) => {
  return (
    <div className="form-fields-container">
      {/* Address Form */}
      <div className="address-form">
        <h3>Address Information</h3>
        <input
          type="text"
          name="address1"
          placeholder="Address Line 1"
          value={address.address1}
          onChange={onAddressChange}
        />
        <input
          type="text"
          name="address2"
          placeholder="Address Line 2 (optional)"
          value={address.address2}
          onChange={onAddressChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={address.state}
          onChange={onAddressChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={address.country}
          onChange={onAddressChange}
        />
        <input
          type="text"
          name="zip"
          placeholder="Zip Code"
          value={address.zip}
          onChange={onAddressChange}
        />
      </div>

      {/* Payment Method Form */}
      <div className="payment-form">
        <h3>Payment Method</h3>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentMethod.cardNumber}
          onChange={onPaymentChange}
        />
        <input
          type="text"
          name="cardHolderName"
          placeholder="Cardholder Name"
          value={paymentMethod.cardHolderName}
          onChange={onPaymentChange}
        />
        <input
          type="text"
          name="expDate"
          placeholder="Exp Date (MM/YY)"
          value={paymentMethod.expDate}
          onChange={onPaymentChange}
        />
        <input
          type="text"
          name="cvc"
          placeholder="CVC"
          value={paymentMethod.cvc}
          onChange={onPaymentChange}
        />
      </div>

      {/* Error Message */}
      {!isFormValid && (
        <div className="error-message">
          <p>Please fill in all required fields properly.</p>
        </div>
      )}
    </div>
  );
};

export default FormFields;
