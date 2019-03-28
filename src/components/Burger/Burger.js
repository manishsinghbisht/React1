import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleClasses from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
                                    .map(igKey => {
                                        return [...Array(props.ingredients[igKey])].map((_, i)=>{
                                           return(<BurgerIngredient key={igKey+i} type={igKey}/>);
                                        });
                                    }).reduce((arr, el)=>{
                                        return arr.concat(el)
                                    },[]);
    console.log(transformedIngredients);
    if (transformedIngredients.length === 0)
    {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={styleClasses.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            {/* <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" /> */}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;