import react from 'react'
import './filters.css'



export default function Filters({list}){

    const [filtersSelected ,setFiltersSelected] = react.useState(list)
    function handleClick(id){
        setFiltersSelected((prev) => {
            return prev.map((filter) => {
                return filter.id === id ? {...filter,selected : !filter.selected} : filter
            })
        })
        
    }

    return (
        <>
            
            <div className='filter-container'>
        <div className='filter-container-inner' >
        {filtersSelected.map((filter) => {
            return<div className = 'filter'  key={filter.id} onClick={() => handleClick(filter.id)}
            style = {{
                    backgroundColor : `${filter.selected ? '#ef4f5f' : 'white' }`,
                    color : `${filter.selected ? '#ffffff' : '#696969'}`,
                    border : `${filter.selected ? '1px solid #ef4f5f' : '1px solid #9c9c9c' }`
                }}
                    
                > 
            {filter.icon1 && <img src ={`${filter.icon1}`} className='filter-image'/>}
                <p className='filter-text'>{filter.text}</p>
                {filter.icon2 && <img src ={`${filter.icon2}`} className='filter-image'/>}</div>
        })}
        </div>
        </div>
               
                
                
            
            
        </>
    )
}