import react from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'
import TabOptions from '../../components/common/tabOptions/TabOptions'
import Delivery from '../../components/common/Delivery/Delivery'
import DiningOut from '../../components/common/DiningOut/DiningOut'
import Nightlife from '../../components/common/Nightlife/Nightlife'
export default function Homepage(){
    const [activeTab,setActiveTab] = react.useState(1)
    return(
        <>
            <Header/>
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
            {getCorrectscreen(activeTab)}
            <Footer/>
        </>
    )
}

const getCorrectscreen = (tab) =>{
    switch(tab){
        case 1 : return <Delivery/>
        case 2 : return <DiningOut/>
        case 3 : return <Nightlife/>
        default : return <Delivery/>
    }
}