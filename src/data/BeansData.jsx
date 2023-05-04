import kenyanBgImg from '../assets/img/kenyan-bg.webp';
import kenyanImg from '../assets/img/kenyan-black-bean.webp'
import nicaraguanBgImg from '../assets/img/nicaraguan-bg.webp';
import nicaraguanImg from '../assets/img/nicaraguan-black-bean.webp'
import ethiopianBgImg from '../assets/img/ethiopian-bg.webp';
import ethiopianImg from '../assets/img/ethiopian-black-bean.webp'

export const beansData = [
    {
        id: 1,
        name: "KENYAN",
        backgroundImg: kenyanBgImg,
        image: kenyanImg,
        profile: "CHERRY & CHOCOLATE",
        profileColor: "green-profile",
        buyBtnColor: "buy-now-btn beans-btn mt-6",
        descrip: "This coffee uses the twin virtues of balance and sweetness as our guide when creating the roast, keeping those two characteristics paramount. Bright, clean, sweet and harmonious."
    },
    {
        id: 2,
        name: "NICARAGUAN",
        backgroundImg: nicaraguanBgImg,
        image: nicaraguanImg,
        profile: "BLACK TEA & LEMON",
        profileColor: "green-profile",
        buyBtnColor: "buy-now-btn beans-btn mt-6",
        descrip: "It is thought to be related to early Typica based on its shape, and similar to Ethiopian Longberry due to its taste profile – tea-like, lemon candy and a silky body."
    },
    {
        id: 3,
        name: "ETHIOPIAN",
        backgroundImg: ethiopianBgImg,
        image: ethiopianImg,
        profile: "STRAWBERRY & VANILLA",
        profileColor: "red-profile",
        buyBtnColor: "ethiopia-buy mt-6",
        descrip: "This coffee exemplified what naturals should be and defied all the typical expectations: syrupy, fruit-forward, but clean and crisp and with no hints of overferment."
    }
]

export const NavButtonsData = [
    {id:1, navName: "KENYAN"},
    {id:2, navName: "NICARAGUAN"},
    {id:3, navName: "ETHIOPIAN"},
]