import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Alert } from 'react-bootstrap';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [showError, setShowError] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();

    if (paymentAmount <= 0) {
      setShowError(true);
      return;
    }

    // Simulating payment success
    setIsPaymentSuccessful(true);
    setShowError(false);

    // Simulate redirecting the user after successful payment
    setTimeout(() => {
      navigate('/user-dashboard'); // Redirect to the user dashboard
    }, 1000);
  };

  return (
    <div className="payment-page">
      <h2>Unlock Advanced Yoga Classes</h2>

      {isPaymentSuccessful ? (
        <Alert variant="success">Payment Successful! You can now access advanced classes.</Alert>
      ) : (
        <Form onSubmit={handlePayment} className="payment-form">
          <Form.Group controlId="formPaymentAmount">
            <Form.Label>Amount to Pay</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter payment amount"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
            />
          </Form.Group>

          {showError && <Alert variant="danger">Please enter a valid amount greater than 0.</Alert>}

          <Button variant="primary" type="submit">
            Make Payment
          </Button>
        </Form>
      )}
    </div>
  );
};

export default PaymentPage;
