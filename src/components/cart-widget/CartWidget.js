
import SaleItem from '../sale-item/SaleItem';
import './styles.scss';
import { cartItems } from '../../constants/cartItems';

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
                </div>
            </div>

            
            
        </div>
    )
}




export default CartWidget;