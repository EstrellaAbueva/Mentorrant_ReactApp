import "./Subscription.css";
import React from 'react';
import questionMark from './assets/question-mark.png'

const Subscription =() => {
    return(
        <div className="payment">
            <hr />
            <h1 className="header">
                <strong>YOUR SUBSCRIPTIONS:</strong>
            </h1>
            <p>
                These are your current subscriptions. They will be billed in the same cycle. <br />
                You can update any subscriptions anytime.
                
            </p>
            <div class="shadow-lg p-3 mb-5 bg-body rounded">
                <img src={questionMark} alt="question mark" className="qMark"/>
                You have no active subscriptions
            </div>
            <h1 className="credit">
                SUBSCRIPTION CREDIT
            </h1>
            <p>
                When you accept a gift and you have a running subscription or accept a gift <br />
                that differs from your subscription, it will appear here as credit.
            </p>
            <div class="shadow-lg p-3 mb-5 bg-body rounded">
                <img src={questionMark} alt="question mark" className="qMark"/>
                You have no unused credits</div>
            <hr/>
        </div>
    );
}

export default Subscription;