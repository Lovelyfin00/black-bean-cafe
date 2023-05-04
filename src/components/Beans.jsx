import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import '../assets/css/beans.css'
import { NavButtonsData, beansData } from "../data/BeansData";
import coffeemachine from '../assets/img/coffeemachineicon.webp';

const Beans = () => {

    const [swiper, setSwiper] = useState(beansData[0]);
    let [count, setCount] = useState(1)
    let [changeColor, setChangeColor] = useState(Array(NavButtonsData.length).fill(false));

    const nextBeansCountry = () => {
        count++;
        const nextCountry =  beansData.find((country) => {
            if(count === beansData.length + 1){
                count = 0;
                count++;
            }
            setCount(count);
            return country.id === count;
        })
        setSwiper(nextCountry);
    }

    const prevBeansCountry = () => {
        count--;
        const nextCountry =  beansData.find((country) => {
            if(count === 0){
                count = beansData.length + 1;
                count--;
            }

            setCount(count);
            return country.id === count;
        })
        setSwiper(nextCountry);
    }

    // Navigations displaying beans countries
    let handleClickCountry;
    const changeCountry = (index) => {
        beansData.map((country, i) => {
            if(index + 1  === country.id){
                handleClickCountry = country;
            }
        })
        setSwiper(handleClickCountry);

        const checkState = changeColor.map((states, i) => {
            const match = i===index ? true : false;
            return match;
        })
        setChangeColor(checkState);
    }

    const {name, backgroundImg, image, profile, profileColor, descrip, buyBtnColor} = swiper;

  return (
    <section className="bean-margin">
        <p className='name-title'>-- .- -.. . / -... -.-- / .-.. --- ...- . - .... / --- -- --- -.- .- .-. ---</p>
        <div id="beans-section" style={{backgroundImage: `url(${backgroundImg})`}} className='relative'>
            <div className='beans-content absolute flex justify-center items-center'>
                <div className="beans-text">
                    <h4 className={profileColor}>PROFILE: {profile}</h4>
                    <h2 className='pb-2'>{name}</h2>
                    <p>{descrip}</p>
                    <button className={buyBtnColor}>Buy Now</button>
                </div>
                <div className="beans-img flex items-end">
                    <img src={image} alt="kenyan bean" className='h-48 w-full object-cover md:h-full md:w-48' />
                </div>
            </div>
            <div className="next-buttons">
                <button className="forward-btn" onClick={nextBeansCountry}><FontAwesomeIcon className="fa-2xl" icon={faChevronRight} /></button>
                <button className="back-btn" onClick={prevBeansCountry}><FontAwesomeIcon className="fa-2xl" icon={faChevronLeft} /></button>
            </div>
            <div className="swiper-buttons absolute flex items-center justify-center">
                {
                    NavButtonsData.map((navBtn, index) => {
                        const selected = changeColor[index];
                        const toggleColors = selected ? "swipe-btn beans-btn selected-country-bg" : "swipe-btn beans-btn";

                        return(
                            <div key={navBtn.id}>
                                <button className={toggleColors} onClick={() => changeCountry(index)}>{navBtn.navName}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="buy-coffee-now text-center grid grid-cols-1 gap-14 md:grid-cols-1 md:gap-14 lg:grid-cols-3">
            <div className="m-auto">
                <img src={coffeemachine} alt="coffee machine" />
            </div>            
            <h4>Curated coffee equipments. Perfectly matched, perfectly priced.</h4>
            <div>
                <button>Buy Now</button>
            </div>
        </div>
    </section>
  )
}
export default Beans