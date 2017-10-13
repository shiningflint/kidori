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
            image="https://ki-do-ri.jp/upload/save_image/08241916_599ea799d0107.jpg"
            price="162,000"
            />
          <Product
            image="https://ki-do-ri.jp/upload/save_image/08241636_599e81e0c93cf.jpg"
            price="91,800"
            />
          <Product
            image="https://ki-do-ri.jp/upload/save_image/08241540_599e74e293c1f.jpg"
            price="3,240"
            />
          <Product
            image="https://ki-do-ri.jp/upload/save_image/08242110_599ec24ce4174.jpg"
            price="91,800"
            />
          <Product
            image="https://ki-do-ri.jp/upload/save_image/08242109_599ec1efb2c26.jpg"
            price="16,200"
            />
          <Product
            image="https://ki-do-ri.jp/upload/save_image/08242107_599ec17c91505.jpg"
            price="162,000"
            />
        </ul>
      </div>
    );
  }
}

module.exports = Products;
