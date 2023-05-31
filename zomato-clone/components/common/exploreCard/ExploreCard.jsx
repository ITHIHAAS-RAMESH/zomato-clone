import react from 'react'
import './explore-card.css'


export default function ExploreCard({image,name,rating,cuisin,cfo,cft,type,btext,max_safety,del_time,has_offer,offer,is_promoted,distance}){

    cuisin = cuisin.map((item) => item).join(", ")
    console.log(offer)
    return(
    <div className='explore-cards'>
                <div className='explore-card-image-container'>
                    <img src={image} className='card-image'/>
                    <div className='card-time'>{type == 'delivery' ? del_time : distance}</div>
                    
                    {has_offer && <div className='card-offer'>{offer}</div>}
                    {is_promoted && <div className='promoted-container'>Promoted</div>}
                    
                </div>
                <div className='name-rating-container'>
                    <h2 className='card-name'>{name}</h2>
                    <div className='card-rating'>
                        <h6 className='rating-text'>{rating}</h6>
                        <img src="./images/star.png"/>
                    </div>
                </div>
                <div className='cuisin-cfo-container'>
                    <div className='cuisins-text'>{cuisin}</div>
                    {type == 'delivery' && <div className='cfo-text'>{cfo}</div>}
                    {type == 'dining' && <div className='cfo-text'>{cft}</div>}
                </div>
                {type == 'delivery' && <div className='explore-card-hr'/>}
                {type == 'delivery' && <div className='bottom-container'>
                    <img src="https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png" alt='trending' className='trending-icon'/>
                    <h6 className='bottom-text'>{btext}</h6>
                    {max_safety && <img src={max_safety} className='safety-img'/>}
                </div>}
                
            </div>
    )
}