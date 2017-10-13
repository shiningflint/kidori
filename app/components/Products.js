import React from 'react';
import ReactDOM from 'react-dom';
import PageTitle from './PageTitle';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="products-item">
        <p><img src={this.props.image}/></p>
        <p className="products-price">販売価格￥{this.props.price}(税込)</p>
      </li>
    );
  }
}

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="products-wrap">
        <PageTitle title="PRODUCTS"/>
        <ul className="products-ul">
          <Product
            image={require('../../assets/bonsai/bonsai1.jpg')}
            price="162,000"
            />
          <Product
            image={require('../../assets/bonsai/bonsai2.jpg')}
            price="91,800"
            />
          <Product
            image={require('../../assets/bonsai/bonsai3.jpg')}
            price="3,240"
            />
          <Product
            image={require('../../assets/bonsai/bonsai4.jpg')}
            price="91,800"
            />
          <Product
            image={require('../../assets/bonsai/bonsai5.jpg')}
            price="16,200"
            />
          <Product
            image={require('../../assets/bonsai/bonsai6.jpg')}
            price="162,000"
            />
        </ul>
      </div>
    );
  }
}

module.exports = Products;
