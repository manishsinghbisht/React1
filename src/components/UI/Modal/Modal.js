import React from 'react';
import classes from './Modal.module.css'
import Aux1 from '../../../hoc/Aux1.js'
import Backdrop from '../Backdrop/Backdrop.js'

const modal = (props) => (
    <Aux1>
        <Backdrop show={props.show} clicked = {props.modalClosed}></Backdrop>
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    </Aux1>
);

export default modal;