import './styles.scss';

const CartItem = (props) => {
    const { name, imageURL, quantity, price } = props;

    return(
        <div className="cart-item">
            <div className="cart-item-details">
                {name}
            </div>
            <div className="cart-item-quantity">
                {quantity}
            </div>
            <div className="cart-item-price">
                ${price}
            </div>
        </div>
    );

};

export default CartItem;