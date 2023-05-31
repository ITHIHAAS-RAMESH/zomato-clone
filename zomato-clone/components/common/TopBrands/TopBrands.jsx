import react from 'react'
import './topbrands.css'
import Slider from "react-slick";
import SampleNextArrow from '../Arrows/SampleNextArrow';
import SamplePrevArrow from '../Arrows/SamplePrevArrow';
const brandArray =[
    {
        id:1,
        name:"Truffles",
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/239f872f52291fe253a37cc8dd16188f_1663838300.png?output-format=webp",
        time:"24 min"
    },
    {
        id:2,
        name:"Domino's Pizza",
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp",
        time:"20 min"
    },
    {
        id:3,
        name:"Empire Restaurant",
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
        time:"30 min"
    },
    {
        id:4,
        name:"McDonald's",
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp",
        time:"24 min"
    },
    {
        id:5,
        name:"FreshMenu",
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png?output-format=webp",
        time:"28 min"
    },
    {
        id:6,
        name:"KFC",
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
        time:"30 min"
    },
    {
        id:7,
        name:"Pizza Hut",
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210633.png?output-format=webp",
        time:"28 min"
    },
    {
        id:8,
        name:"Burger King",
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
        time:"26 min"
    },
    {
        id:9,
        name:"A2B",
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png?output-format=webp",
        time:"26 min"
    }
]
export default function TopBrands(){

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
            <div className='inspiration-container-outer white'>
            <div className='inspiration-container-inner'>
            <h2 className='inspiration-text'>Top Brands for you</h2> 
            <div className='dish-container' >
            <Slider {...settings}>
            {brandArray.map((brand) => {
                
                return<div><div className='brands-container'>
                <div className='image-border'><img src={brand.image} alt="brand" className='brand-image' /></div>
                <h6 className='brand-name'>{brand.name}</h6>
                <h6 className='brand-time'>{brand.time}</h6>
                </div>
            </div>
            })}
            </Slider>
            </div>
            </div>  
        </div>
            
        </>
    )
    
}