/* eslint-disable import/no-named-as-default-member */
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

// eslint-disable-next-line import/no-named-as-default
import Header from '../Header'

import './index.css'

const Cart = () => {
  const accessToken = Cookies.get('jwt_token')

  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-img"
        />
      </div>
    </>
  )
}

export default Cart
