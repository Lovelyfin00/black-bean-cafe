import '../assets/css/cafes.css'
import { addressData } from '../data/CafeData'
import { coffeeShopImages } from '../data/CafeData';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Cafes = () => {
    const defaultImages = coffeeShopImages.slice(0, 3)
    const [shopImages, setShopImages] = useState(defaultImages)

    const nextShop = () => {
        let lastImageId = shopImages.slice(-1)[0].id;
        let nextImages = coffeeShopImages.slice(lastImageId - 2, lastImageId + 1);
        if(lastImageId === 10){
            lastImageId = 0;
            nextImages = coffeeShopImages.slice(lastImageId, lastImageId + 3)
        }

        setShopImages(nextImages)
    }

    const prevShop = () => {
        let lastImageId = shopImages.slice(-1)[0].id;
        const currentImageId = shopImages.slice(0)[0].id;

        if (currentImageId === 1 || currentImageId === 4) {
            lastImageId = 10;
        }
        let prevImages = coffeeShopImages.slice(lastImageId - 3, lastImageId);
        setShopImages(prevImages.reverse());
    }

  return (
    <section id='cafe-section'>
        <div className="address-section text-center grid grid-cols-1  md:grid-cols-2 md:gap-14 lg:grid-cols-4">
            {
                addressData.map(address => {
                    const {id, heading, text} = address;
                    return(
                        <div key={id} className='mb-8 mt-6'>
                            <h4>{heading}</h4>
                            <p>{text}</p>
                        </div>
                    )
                })
            }
        </div>
        <div className="cafe-shop-images m-auto relative">
            <div className="m-auto shop-images grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-14 lg:grid-cols-3">
                {
                    shopImages.map((shopImages) => {
                        const {id, image} = shopImages;

                        return(
                            <div key={id}>
                                <img src={image} alt="cafe shop" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="shop-images-buttons">
                <button className="next-shop-img-btn" onClick={() => nextShop()}><FontAwesomeIcon className="fa-2xl" icon={faChevronRight} /></button>
                <button className="prev-shop-img-btn" onClick={() => prevShop()}><FontAwesomeIcon className="fa-2xl" icon={faChevronLeft} /></button>
            </div>
        </div>
    </section>
  )
}
export default Cafes