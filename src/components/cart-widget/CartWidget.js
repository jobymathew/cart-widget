
import SaleItem from '../sale-item/SaleItem';
import './styles.scss';

const lastItemName = "Samsung Series 4"

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
            <SaleItem 
                discount={37} 
                name={"Samsung Series 4"} 
                imageURL={"https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90"} 
                actualPrize={13999}
                displayPrice={22500}
                />
        </div>
    )
}




export default CartWidget;