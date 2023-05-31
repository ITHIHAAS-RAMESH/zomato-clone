import react from 'react'
import './categories.css'
import Slider from "react-slick";
import SampleNextArrow from '../Arrows/SampleNextArrow';
import SamplePrevArrow from '../Arrows/SamplePrevArrow';
const inspirationsArray = [
    {
        id:0,
        img:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
        text:"Biryani",
        
    },{
        id:1,
        img:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        text:"Pizza"
    },{
        id:2,
        img:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
        text:"Chicken"
    },
    {
        id:3,
        img:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        text:"Burger"
    },
    {
        id:4,
        img:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
        text:"Rolls"
    },
    {
        id:5,
        img:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
        text:"Thali"
    },{
        id:6,
        img:"https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
        text:"Fried Rice"
    },
    {
        id:7,
        img:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
        text:"Dosa"
    },
    {
        id:8,
        img:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
        text:"Paratha"
    },
    {
        id:9,
        img:"https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
        text:"Noodles"
    },
    {
        id:10,
        img:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
        text:"Cake"
    }
    ,{
        id:11,
        img:"https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
        text:"Paneer"
    }
]

export default function Categories(){

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <>
            <div className='inspiration-container-outer'>
            <div className='inspiration-container-inner'>
            <h2 className='inspiration-text'>Inspiration for your first order</h2> 
            <div className='dish-container' >
            <Slider {...settings}>
            {inspirationsArray.map((dish) => {
                
                return<div> <div className='categories-container'>
                <img src={dish.img} alt="dish" className='dish-image' />
                <p className='dish-name'>{dish.text}</p>
                
            </div></div>})}
            </Slider>
            </div>
            </div>  
        </div>


           
        </>
    )
    
}