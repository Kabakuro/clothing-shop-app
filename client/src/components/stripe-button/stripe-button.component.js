import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HAEzlAQAr0oNZHrw3oYK4t38GGD3kyv2At1dZXkDivkmoM6YpwLKNb2RaoyqtpaLFfKYmabXswhu7BIpDz09JRK00QJPvedPP';
    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error))
            alert('There was an issue with your payment. Please make sure you use the provided test credit card')
        })
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
           currency="GBP"
        />
    )
}

export default StripeCheckoutButton;