import react from 'react'
import './header.css'

export default function Header(){
    return(
        <>
            <div className='max-width header-container'>
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="zomato" className='zomato-logo'/>
                <div className='search-location-container'>
                    <div className='location'>
                        <img src='./images/location-pin.png' alt='pin' className='search-pin'/>
                        <input type='text' placeholder='Bengaluru' className='location-name' />
                        <img src="./images/caret.png" alt='caret' className='caret'/>
                    </div>
                    <div className='separator'></div>
                    <div className='search-container'>
                        <img src='./images/search-icon.png'
                         alt='search' className='search-icon'/>
                        <input type='text' placeholder='Search for restaurant, cuisine or a dish' 
                        className='search-text'/> 
                    </div>
                </div>
                <div className='buttons'>
                    <a className='ls-button' >Log in</a>
                    <a className='ls-button'>Sign up</a>
                </div>
            </div>
        </>
    )
}