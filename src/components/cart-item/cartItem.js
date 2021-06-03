import './styles.scss';

const Item = (props) => {

    const { id, name, imageURL, removeItemFromCart } = props;

    return(
        <div className="cart-item-details">
            <div className="cart-item-details-image">
                <img className="cart-item-details-image-img" src={imageURL} />
            </div>
            <div className="cart-item-details-name">
                {name}
            </div>
            <div className="cart-item-details-remove">
                <i className="fas fa-times custom-remove" onClick={() => removeItemFromCart(id)}></i>
            </div>
        </div>
    )
};


const CartItem = (props) => {
    const { id, name, imageURL, quantity, price, incrementQuantity, decrementQuantity, removeItemFromCart } = props;

    const totalItemPrice = price*quantity;

    return(
        <div className="cart-item">
            <Item id={id} name={name} imageURL={imageURL} removeItemFromCart={removeItemFromCart} /> 
            <div className="cart-item-quantity">
                <i className="fas fa-minus custom-minus" onClick={() => decrementQuantity(id)}></i> 
                <span className="cart-item-quantity-number">
                    {quantity}
                </span> 
                <i className="fas fa-plus custom-plus" onClick={() => incrementQuantity(id)}></i>
            </div>
            <div className="cart-item-price">
                ${totalItemPrice}
            </div>
        </div>
    );

};

export default CartItem;