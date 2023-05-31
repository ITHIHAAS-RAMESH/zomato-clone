import react from 'react'
import './collections.css'



export default function Collections({list}){
    return(
        <>
        <div className='collections-outer-container'>
            <div className='collections-inner-container'>
                <h2>Collections</h2>
                <div className='collection-desc'>
                    <span className='collection-desc-text'>Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends</span>
                    <a className='collection-desc-link'href='https://www.zomato.com/bangalore/collections' target='_blank'>All collections in Bengaluru<i class="fi fi-rr-caret-right c"></i> </a>    
                </div>
                <div className='collection-image-outer'>
                {list.map((place) => {
                    return <div className='collection-image-container'>
                    <img src={place.img}/>
                    <section className='bottom-image-text'></section>
                    <p>{place.topText}</p>
                    <h6>23 Places {`>`}</h6>
                    
                    </div>
                })}
                </div>
            </div>
        </div>
        </>
    )
}