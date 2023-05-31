import react,{ Component }  from 'react'
import './delivery.css'
import Filters from '../Filters/Filters'
import Categories from '../Categories/Categories'
import TopBrands from '../topBrands/Topbrands';
import ExploreSection from '../ExploreSection/ExploreSection';
import restaurants from '../data/restaurants';
/* 2:26:38 */

const filtersArray = [
    {
        id:0,
        icon1 : "./images/filter.png",
        text:"Filters",
        selected : false
    },
    {
        id:1,
        icon1 : null,
        text:"Rating: 4.0+",
        selected : false
    },
    {
        id:2,
        icon1 : null,
        text:"Pure Veg",
        selected : false
    },
    {
        id:3,
        icon1 : null,
        text:"Cuisines",
        icon2 : "./images/caret2.png",
        selected : false
    },
    {
        id:4,
        text:"More filters",
        icon1 : null,
        icon2:"./images/caret2.png",
        selected : false
    }
]

export default function Delivery(){
    return (
        <>
        <div className='filter-container'>
            <Filters list={filtersArray}/>
        </div>  
        <Categories/>
        <TopBrands/>
        <ExploreSection heading = {"Delivery Restaurants in Bengaluru"} list={restaurants} type={'delivery'}/>
        </>

    )
}