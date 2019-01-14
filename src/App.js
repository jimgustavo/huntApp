import React, { Component } from "react";
import "./style.css";

var list = [
  {
    id: 1,
    title: "Yellow Pail",
    description: "On-demand sand castle construction expertise.",
    url: "#",
    votes: 0,
    submitterAvatarUrl: "/images/avatars/daniel.jpg",
    productImageUrl: "images/products/image-aqua.png"
  },
  {
    id: 2,
    title: "Supermajority: The Fantasy Congress League",
    description: "Earn points when your favorite politicians pass legislation.",
    url: "#",
    votes: 0,
    submitterAvatarUrl: "images/avatars/kristy.png",
    productImageUrl: "images/products/image-rose.png"
  },
  {
    id: 3,
    title: "Tinfoild: Tailored tinfoil hats",
    description: "We already have your measurements and shipping address.",
    url: "#",
    votes: 0,
    submitterAvatarUrl: "images/avatars/veronika.jpg",
    productImageUrl: "images/products/image-steel.png"
  },
  {
    id: 4,
    title: "Haught or Naught",
    description: "High-minded or absent-minded? You decide.",
    url: "#",
    votes: 0,
    submitterAvatarUrl: "images/avatars/molly.png",
    productImageUrl: "images/products/image-yellow.png"
  }
];

class ProductList extends Component {
  state = {
    products: []
  };

  //generateVoteCount() {
  //  return Math.floor(Math.random() * 50 + 15);}

  componentDidMount() {
    this.setState({ products: list });
  }

  handleProductUpVote = productId => {
    const nextProducts = this.state.products.map(product => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts
    });
  };

  render() {
    const products = this.state.products.sort((a, b) => b.votes - a.votes);
    const productComponents = products.map(product => (
      <Product
        key={"product-" + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    ));
    return <div className="container">{productComponents}</div>;
  }
}

class Product extends Component {
  handleUpVote = () => this.props.onVote(this.props.id);
  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={this.props.productImageUrl} alt="no product found!" />
        </div>
        <div className=" content">
          <div className="header">
            {this.props.votes}
            <br />
            <image onClick={this.handleUpVote}>+</image>
          </div>
          <div className="description">
            <a href={this.props.url}>{this.props.title}</a>
            <p>{this.props.description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img
              className="avatar"
              src={this.props.submitterAvatarUrl}
              alt="no avatar found!"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
