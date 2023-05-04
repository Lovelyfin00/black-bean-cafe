import heroVideo from '../assets/video/black-bean-hero-video.mp4';
import coffeeShopImg from '../assets/img/coffe-shop-img.webp'
import logo from '../assets/img/beanlogo.webp'

import { heroData } from '../data/HeroData';

const Hero = () => {
  return (
    <section className='hero-section mb-9'>
        <video autoPlay muted loop id="heroVideo">
            <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="overlay flex item-center justify-center">
            <p className='name-title'>-- .- -.. . / -... -.-- / .-.. --- ...- . - .... / --- -- --- -.- .- .-. ---</p>
            <div className='flex items-center justify-center logo-div'>
                <p className='logo-text leading-3 font-normal'>19</p>
                <img src={logo} alt="logo" className='mr-2 ml-2' />
                <p className='logo-text leading-3 font-normal'>92</p>
            </div>
            <div className="business-name-div flex items-center justify-center">
                <div className='box-animation flex items-center justify-center'>
                    <h2 className="business-name">BLACK BEAN</h2>
                </div>
            </div>
            <div className="coffee-shop mb-5">
                <img src={coffeeShopImg} alt="coffee shop text design" />
            </div>

            <ul className='grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 hero-links absolute text-center'>
                {
                    heroData.map(heroLink => {
                        return(
                            <li key={heroLink.id} className='flex items-center justify-center link-lists'>
                                <img src={heroLink.image} alt="links image" />
                                <a className='link-name' href={heroLink.link}>{heroLink.linkName}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}
export default Hero