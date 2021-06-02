
import SaleItem from '../sale-item/SaleItem';
import './styles.scss';
import { cartItems } from '../../constants/cartItems';
import CartItem from '../cart-item/CartItem';

const lastItemName = "Samsung Series 4"

const itemsInCart = 0;

const items = cartItems.items.map((item, index) => {

    return (
        <SaleItem 
        key={item.id}
        discount={item.discount} 
        name={item.name} 
        imageURL={item.image} 
        actualPrice={item.price.actual}
        displayPrice={item.price.display}
        />
    )

});

const sample = cartItems.items.slice(0,2);


const checkoutItems = sample.map((item, index) => {
    return (
        <CartItem
        key={item.id}
        name={item.name}
        imageURL={item.image}
        quantity={index+1}
        price={item.price.actual}
        />
    )
});

const CartWidget = () => {
    return (
        <div className="wrapper">
            <div className="header">
                <div className="divider"></div>
                <div className="contents">
                    <div className="contents-allItems">All Items</div>
                    <div className="contents-addedToCart">{lastItemName} is added to cart</div>
                </div>
                <div className="divider"></div>
            </div>

            <div className="cart-section">
                <div className="sale-items">
                    {items}
                </div>
                <div className="checkout">
                    <div className="checkout-header">
                        <div className="divider"></div>
                            <div className="checkout-header-items">
                                <div className="checkout-header-items-name">Items ({itemsInCart})</div>
                                <div className="checkout-header-items-qty">Qty</div>
                                <div className="checkout-header-items-price">Price</div>
                            </div>
                        <div className="divider"></div>
                    </div>
                    <div className="checkout-content">
                        {checkoutItems}
                    </div>
                </div>
            </div>

            
            
        </div>
    )
}




export default CartWidget;