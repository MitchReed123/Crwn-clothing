import React from "react";
import "./shop.styles.scss";
import SHOP_DATA from "./shop.data.js";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state.collections;
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
