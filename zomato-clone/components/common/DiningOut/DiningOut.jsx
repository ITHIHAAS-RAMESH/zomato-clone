import react from 'react'
import './diningOut.css'
import ExploreSection from '../ExploreSection/ExploreSection'
import dining from '../data/dining'
import Filters from '../Filters/Filters'
import Collections from '../Collections/Collections'

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
        text:"Outdoor Seating",
        selected : false
    },
    {
        id:3,
        icon1 : null,
        text:"Serves Alcohol",
        selected : false
    },
    {
        id:4,
        text:"Open Now",
        icon1 : null,
        selected : false
    }
]

const diningCollection = [
    {
        id:1,
        img:"https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg?output-format=webp",
        topText : "22 Serene Rooftop Places",
        bottomText : "23 Places"
    },
    {
        id:2,
        img:"https://b.zmtcdn.com/data/collections/bfa5063b43c9b8f6c9c3b1a37c815d3b_1674826835.jpg?output-format=webp",
        topText : "10 Picturesque Cafes",
        bottomText : "9 Places"
    },
    {
        id:3,
        img:"https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg?output-format=webp",
        topText : "10 Trending Restaurants ",
        bottomText : "10 Places"
    },
    {
        id:4,
        img:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674825385.jpg?output-format=webp",
        topText : "12 Newly Opened Restaurants",
        bottomText : "12 Places"
    }
]

export default function DiningOut(){
    return (
        <>
            <Collections list={diningCollection}/>
            <Filters list={filtersArray}/>
            <ExploreSection list={dining} heading={"Dining out"} type={'dining'}/>
        </>

    )
}