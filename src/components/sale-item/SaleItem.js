import './styles.scss';

const SaleItem = (props) => {

    const { id, name, discount, imageURL, actualPrice, displayPrice, addItemToCart } = props;

    return (
        <div className="box">
            <div className="image-box">
                <div className="image-box-discount">
                    {discount}% off
                </div>
                <div className="image-box-image">
                    <img className="image-box-image-image" src={imageURL} />
                </div>
            </div>
            <div className="item">
                <div className="item-name">
                    {name}
                </div>
                <div className="item-details">
                    <div className="item-details-price">
                        <div className="item-details-price-display">
                            ${displayPrice}
                        </div>
                        <div className="item-details-price-actual">
                            ${actualPrice}
                        </div>
                    </div>
                    <div className="item-details-add" onClick={() => addItemToCart(id)}>
                        Add to cart
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SaleItem;