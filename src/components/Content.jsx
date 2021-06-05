import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import ProductDetails from './productDetails';
import SearchBar from './SearchBar';
import ShopCart from './ShopCart';
import PayForm from './PayForms';

class Content extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ SearchBar } />
          <Route exact path="/shopping-cart" component={ ShopCart } />
          <Route exact path="/product-details/:id" component={ ProductDetails } />
          <Route exact path="/pay-forms" component={ PayForm } />
          <Route />
        </Switch>
      </main>
    );
  }
}

export default Content;
