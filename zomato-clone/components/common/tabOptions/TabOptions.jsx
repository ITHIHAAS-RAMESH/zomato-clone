import react from 'react'
import './tabOptions.css'

const tabs = [
    {
        id:1,
        name:"Delivery",
        active_img : "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
        backdrop : "#FCEEC0",
        inactive_img : "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",

    },
    {
        id:2,
        name:"Dining Out",
        active_img:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
        inactive_img:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
        backdrop:"#E5F3F3"
    },
    {
        id:3,
        name:"Nightlife",
        inactive_img:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
        active_img:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
        backdrop:"#EDF4FF"
    }
]

export default function TabOptions({activeTab,setActiveTab}){
    
    const handleClick = (id) =>{
        setActiveTab(id)
    }
    return(
        <>
        <div className='taboptions-outer-container'>
            <div className='tabs-inner-container'>
                {tabs.map((tab) =>{
                    return (
                        
                        <div className={`tabs ${tab.id === activeTab && "active-tab"} ` }
                        key={tab.id} 
                        onClick={() => handleClick(tab.id)}
                        
                        >
                            <div className='tabs-image-container'
                            style={{
                                backgroundColor :`${activeTab === tab.id ? tab.backdrop : "#f8f8f8" }`,
                                
                            }}>
                            <img src={activeTab === tab.id ? tab.active_img : tab.inactive_img} 
                            alt={tab.name} className='tabs-image'
                            /></div>
                            <div className='tabs-text' 
                            style = {{color :  `${activeTab === tab.id ? '#ef5f4f' : "#696969"}`}}>
                                {tab.name}</div>
                                
                        </div>
                        
                    )
                }  ) }
              
            </div>
            
            </div>
            
        </>
    )
}