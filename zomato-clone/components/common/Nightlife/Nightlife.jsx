import react from 'react'
import './Nightlife.css'
import Collections from '../Collections/Collections'
import nightLife from '../data/nightLife'
import ExploreSection from '../ExploreSection/ExploreSection'
import Filters from '../Filters/Filters'
const nightLifeCollections = [
    {
        id:1,
        img : "https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg?output-format=webp",
        topText:"22 Finest Microbreweries",
        bottomText:"21 Places"
    },
    {
        id:2,
        img:"https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674826727.jpg?output-format=webp",
        topText:"19 Best Bars & Pubs",
        bottomText:"19 Places"
    }
]

const filtersArray = [
    {
        id:0,
        icon1 : "./images/filter.png",
        text:"Filters",
        selected : false
    },
    {
        id:1,
        icon1 : "./images/distance.png",
        text:"Distance",
        selected : false
    },
    {
        id:2,
        icon1 : null,
        text:"Rating: 4.0+",
        selected : false
    },
    {
        id:3,
        icon1 : null,
        text:"Pubs and Bars",
        selected : false
    } 
]

export default function Nightlife(){
    return (
        <>
            <Collections list={nightLifeCollections}/>
            <Filters list={filtersArray}/>
            <ExploreSection list={nightLife} heading={"Dining out"} type={'dining'}/>
        </>

    )
}