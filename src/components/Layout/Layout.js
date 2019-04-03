import React from 'react';
import Aux1 from '../../hoc/Aux1.js';
import layoutStyleClasses from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js';

const layout = (props) => (
    <Aux1>
        <Toolbar></Toolbar>
        <SideDrawer></SideDrawer>
        <main className={layoutStyleClasses.Content}>
            {props.children}
        </main>
    </Aux1>
);

export default layout;