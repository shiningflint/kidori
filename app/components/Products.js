import React from 'react';
import ReactDOM from 'react-dom';
import PageTitle from './PageTitle';

const PRODUCTS = [
  {
    image: "https://ki-do-ri.jp/upload/save_image/08241916_599ea799d0107.jpg",
    price: "162,000"
  },
  {
    image: "https://ki-do-ri.jp/upload/save_image/08241636_599e81e0c93cf.jpg",
    price: "91,800"
  },
  {
    image: "https://ki-do-ri.jp/upload/save_image/08241540_599e74e293c1f.jpg",
    price: "3,240"
  },
  {
    image: "https://ki-do-ri.jp/upload/save_image/08242110_599ec24ce4174.jpg",
    price: "91,800"
  },
  {
    image: "https://ki-do-ri.jp/upload/save_image/08242109_599ec1efb2c26.jpg",
    price: "16,200"
  },
  {
    image: "https://ki-do-ri.jp/upload/save_image/08242107_599ec17c91505.jpg",
    price: "162,000"
  },
]

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.setActive = this.setActive.bind(this);
    this.setImage = this.setImage.bind(this);
    this.theTimeout = this.theTimeout.bind(this);
  }

  componentDidMount() {
    setTimeout(this.setImage, this.theTimeout());
  }

  setActive() {
    this.setState({
      active: true,
    });
  }

  setImage() {
    let bgImg = new Image();
    bgImg.src = this.props.image;
    bgImg.onload = this.setActive;
  }

  theTimeout() {
    return ((this.props.id+1) * 100 + 300);
  }

  render() {
    return(
      <li className={"products-item"+(this.state.active ? ' active' : '' )}>
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
          {
            PRODUCTS.map((x, index) => {
              return <Product
                image={x.image}
                price={x.price}
                key={index}
                id={index}/>
            })
          }
        </ul>
      </div>
    );
  }
}

module.exports = Products;
