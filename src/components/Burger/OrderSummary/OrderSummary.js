import React from 'react';
import Aux1 from '../../../hoc/Aux1.js';
import Button from '../../UI/Button/Button.js';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
                    .map(igKey => {
                            return (<li key={igKey}>
                                    <span style={{textTransform: 'captalize'}}>{igKey}</span>:{props.ingredients[igKey]}
                            </li>);
                    });
return(
    <Aux1>
        <h3>Your Order</h3>
        <p>a delicious burger with following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux1>
);
};

export default orderSummary;