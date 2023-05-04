import { useState } from 'react'

import { shopData } from '../data/shopData'

const Shop = () => {

    const firstSlide = shopData.slice(0, 3);
    const [product, setProducts] = useState(firstSlide); 
    const [selectedButton, setSelectedButton] = useState(1);

    const secondSlide = () => {
        const secondSlideData = shopData.slice(3, 6);
        setProducts(secondSlideData);
    }

    const thirdSlide = () => {
        const secondSlideData = shopData.slice(6, 9);
        setProducts(secondSlideData);
    }

  return (
    <section className='shop-padding' id='shop-section'>
        <p className='name-title'>-- .- -.. . / -... -.-- / .-.. --- ...- . - .... / --- -- --- -.- .- .-. ---</p>
        <div className='card-section-padding m-auto card-div grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-14 lg:grid-cols-3'>
            {
                product.map((productDetails) => {
                    const {id, productName, price, image} = productDetails;
                    return(
                        <div className="products-card" key={id}>
                            <div className="img-div">
                                <img src={image} alt="coffe products" />
                            </div>
                            <div className="product-details text-center">
                                <h4 className='product-title'>{productName}</h4>
                                <p className='product-price'>{price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="swiper-btn-div flex justify-center">
            <button className={selectedButton === 1 ? "selected-btn" : ""} onClick={() => {
                setProducts(firstSlide);
                setSelectedButton(1);
            }}
            ></button>
            <button className={selectedButton === 2 ? "selected-btn slide-btn" : "slide-btn"} onClick={() => {
                secondSlide();
                setSelectedButton(2);
            }}></button>
            <button className={selectedButton === 3 ? "selected-btn slide-btn" : "slide-btn"} onClick={() => {
                thirdSlide();
                setSelectedButton(3);
            }}></button>
        </div>
    </section>
  )
}

export default Shop;