
import SaleItem from '../sale-item/SaleItem';
import './styles.scss';
import { cartItems } from '../../constants/cartItems';
import CartItem from '../cart-item/CartItem';
import { useState } from 'react';


const CartWidget = () => {


    const [ checkoutItems, setCheckoutItems ] = useState([]);

    // Reducer function to compute the total amount
    const computeTotalAmount = (accumulator, item) => accumulator + item.price.display*item.quantity;

    // Compute the total discount
    const computeTotalDiscount = (accumulator, item) => accumulator + (item.price.display-item.price.actual)*item.quantity;

    // Compute the final amount
    const computeFinalAmount = (accumulator, item) => accumulator + item.price.actual*item.quantity;

    // Compute the total number of items
    const computeTotalItems = (accumulator, item) => accumulator + item.quantity;


    const totalAmount = checkoutItems.reduce(computeTotalAmount, 0);

    const totalDiscount = checkoutItems.reduce(computeTotalDiscount, 0);

    const finalAmount = checkoutItems.reduce(computeFinalAmount, 0);

    const numberOfItems = checkoutItems.reduce(computeTotalItems, 0);

    const [ lastItem, setLastItem ] = useState("Add items to the cart");


    const incrementQuantity = (itemID) => {

        const newCheckoutItems = checkoutItems.map((item) => {
            if(item.id === itemID) {
                return {
                    ...item, 
                    quantity : item.quantity+1
                };
            }

            return item;
        });

        setCheckoutItems(newCheckoutItems);

    }

    const decrementQuantity = (itemID) => {
        let updateCheckoutList = true;

        const newCheckoutItems = checkoutItems.map((item) => {
            if(item.id === itemID) {
                if(item.quantity-1 === 0) {
                    removeItemFromCart(itemID);
                    updateCheckoutList = false; 
                }
                else {
                    return {
                        ...item, 
                        quantity : item.quantity-1
                    };
                }
            }
            return item;
        });

        if(updateCheckoutList) {
            setCheckoutItems(newCheckoutItems);
        }

    }

    const removeItemFromCart = (itemID) => {

        const newCheckoutItems = checkoutItems.filter((item) => item.id !== itemID);

        setCheckoutItems(newCheckoutItems);
    }




    const addItemToCart = (itemID) => {
        // Creating a copy of the existing list
        const newCheckoutItems = checkoutItems.slice();

        // Checking if the item is already in the cart
        if(newCheckoutItems.some((item) => item.id === itemID)) {
            incrementQuantity(itemID);
        }
        else {
                newCheckoutItems.push({...cartItems.items[itemID-1],
                "quantity": 1
            });

            setCheckoutItems(newCheckoutItems);
        }

        setLastItem(`${cartItems.items[itemID-1].name} is added to cart`);
        

    }

    return (
        <div className="wrapper">
            <div className="header">
                <div className="divider"></div>
                <div className="contents">
                    <div className="contents-allItems">All Items</div>
                    <div className="contents-addedToCart">{lastItem}</div>
                </div>
                <div className="divider"></div>
            </div>

            <div className="cart-section">
                <div className="sale-items">
                    {cartItems.items.map((item) => (
                        <SaleItem 
                        key={item.id}
                        id={item.id}
                        discount={item.discount} 
                        name={item.name} 
                        imageURL={item.image} 
                        actualPrice={item.price.actual}
                        displayPrice={item.price.display}
                        addItemToCart={addItemToCart}
                        />
                    ))}
                </div>
                <div className="checkout">
                    <div className="checkout-header">
                        <div className="divider"></div>
                            <div className="checkout-header-items">
                                <div className="checkout-header-items-name">Items ({numberOfItems})</div>
                                <div className="checkout-header-items-qty">Qty</div>
                                <div className="checkout-header-items-price">Price</div>
                            </div>
                        <div className="divider"></div>
                    </div>

                    <div className="checkout-content">
                    {checkoutItems.map((item) => (
                            <CartItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            imageURL={item.image}
                            quantity={item.quantity}
                            price={item.price.display}
                            incrementQuantity={incrementQuantity}
                            decrementQuantity={decrementQuantity}
                            removeItemFromCart={removeItemFromCart}
                            />
                    ))}
                    <div className="divider"></div>
                    </div>

                    <div className="checkout-price">
                        <div className="checkout-price-header">
                            Total
                        </div>

                        <div className="checkout-price-items">
                            <div className="checkout-price-items-title silver-color">
                                <div>
                                    Items ({numberOfItems})
                                </div>
                                <div>
                                :
                                </div>
                            </div>
                            
                            <div className="checkout-price-items-amount silver-color">
                                ${totalAmount}
                            </div>
                        </div>

                        <div className="checkout-price-discount">
                            <div className="checkout-price-discount-title silver-color">
                                <div>
                                    Discount
                                </div>
                                <div>
                                :
                                </div>
                            </div>
                            <div className="checkout-price-discount-amount silver-color">
                                -${totalDiscount}
                            </div>
                        </div>

                        <div className="checkout-price-type">
                            <div className="checkout-price-type-title silver-color">
                                <div>
                                    Type Discount
                                </div>
                                <div>
                                :
                                </div>
                            </div>
                            <div className="checkout-price-type-amount silver-color">
                                -$0
                            </div>
                        </div>

                        <div className="checkout-price-total">
                        <div className="checkout-price-total-title silver-color">
                                <div>
                                    Order Total
                                </div>
                                <div>
                                :
                                </div>
                            </div>
                            <div className="checkout-price-total-amount silver-color">
                                ${finalAmount}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            
            
        </div>
    )
}




export default CartWidget;