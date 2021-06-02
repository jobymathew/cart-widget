import './styles.scss';

const Item = (props) => {

    return(
        <div className="cart-item-details">
            <div className="cart-item-details-image">
                <img className="cart-item-details-image-img" src={props.imageURL} />
            </div>
            <div className="cart-item-details-name">
                {props.name}
            </div>
            <div className="cart-item-details-remove">
                <i class="fas fa-times"></i>
            </div>
        </div>
    )
};


const CartItem = (props) => {
    const { name, imageURL, quantity, price } = props;

    return(
        <div className="cart-item">
            <Item name={name} imageURL={imageURL} /> 
            <div className="cart-item-quantity">
                <i class="fas fa-minus"></i> 
                <span className="cart-item-quantity-number">
                    {quantity}
                </span> 
                <i class="fas fa-plus"></i>
            </div>
            <div className="cart-item-price">
                ${price}
            </div>
        </div>
    );

};

export default CartItem;