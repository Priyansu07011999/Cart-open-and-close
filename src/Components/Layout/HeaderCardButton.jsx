import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCardButton.module.css'

function HeaderCardButton(props) {
  return (
    <button className= {classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className= {classes.badge}>0</span>
    </button>
  )
}

export default HeaderCardButton