

const SaleItem = (props) => {

    const { name, discount, imageURL, actualPrice, displayPrice} = props;

    return (
        <div className="box">
            <div className="image-box">
                <div className="image-box-discount">
                    {discount}% off
                </div>
                <div className="image-box-image">
                    <img src={imageURL}></img>
                </div>
            </div>
            <div className="item">
                <div className="item-name">
                    {name}
                </div>
                <div className="item-details">
                    <div className="item-details-acutal">
                        {actualPrice}
                    </div>
                    <div className="item-details-discounted">
                        {displayPrice}
                    </div>
                    <div className="item-details-add">
                        Add to cart
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SaleItem;