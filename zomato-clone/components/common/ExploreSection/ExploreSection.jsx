import react from 'react'
import './explore-section.css'
import ExploreCard from '../exploreCard/ExploreCard'

export default function ExploreSection({heading, list,type}){
    return(
        <div className='explore-section-wrapper'>
            <div className='explore-section-inner-wrapper'>
            <h1>{heading}</h1>
            <div className='explore-card-container'>
            {list.map((list) => {
                return <ExploreCard 
                type = {type}
                image={list.info.image.url} 
                name={list.info.name} 
                rating={list.info.rating.aggregate_rating}
                cuisin={list.info.cuisine.map((item)=>(item.name))}
                cfo = {list.info.cfo.text}
                cft = {list.info.cft?.text}
                distance = {list.distance}
                btext={list.bottomContainers[0]?.text}
                max_safety={list.bottomContainers[1]?.image.url}
                del_time = {list.order?.deliveryTime}
                has_offer = {list.checkBulkOffers}
                offer = {list.bulkOffers[0]?.text}
                is_promoted ={list.isPromoted}
                
                />
            })}
            </div>
            </div>
        </div>
        
    )
}