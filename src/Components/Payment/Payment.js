import "./Payment.css";
import React from 'react';

const Payment =() => {
    return(
        <div className="payment">
            <hr />
            <h1 className="header">
                <strong>PAYMENT METHODS:</strong>
            </h1>
            <p>
                No payment method saved. <br />
                Checkout faster by saving a payment method.
            </p>
            <button>
                Add Payment Method
            </button>
            <hr />
        </div>
    );
}

export default Payment;