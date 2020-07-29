import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HAEzlAQAr0oNZHrw3oYK4t38GGD3kyv2At1dZXkDivkmoM6YpwLKNb2RaoyqtpaLFfKYmabXswhu7BIpDz09JRK00QJPvedPP';
    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
           label='Pay Now'
           name='HAL Clothing Ltd.'
           billingAddress
           shippingAddress
           image='https://svgshare.com/i/CUz.svg' 
           description={`Your total is £${price}`}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;