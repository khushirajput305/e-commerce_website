import React from 'react'
import './banner.css'
import Carousel from 'react-material-ui-carousel'
  

const data=[
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/3000X1200_New_Launch_March_hero1._CB580055456_.jpg",
"https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/revised/final/Skincare-PC_3000_1200._CB560068220_.jpg",
"https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",
"https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/GATEWAY/April/CML/CML-GW_HERO_pc_2x._CB561612246_.jpg",
"https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/revised/final/Makeup-PC_3000_1500._CB560068220_.jpg",
"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/ATFGW/MHS_GW_Candle-holders_PC-under._CB560634205_.jpg",
"https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/GW/Unrec/Baby-PC_GW_Hero_3000x1200_01._CB578900765_.jpg"
]
const Banner = () => {
  return (
<Carousel
 className='carasouel'
 autoPlay={true}
 animation='slide'
 indicators={false}
 navButtonsAlwaysVisible={true}
 cycleNavigation={true}
 navButtonsProps={{
  style:{
    backgroundColor:'#fff',
    color:'#494949',
    borderRadius:0,
    marginTop:-22,
    height:"104px"

  }
 }}
 >
  {
    data.map((imag,i)=>{
      return (
        <>
        <img src={imag} alt="" className='banner_img'/>
        </>
      )
    })
  }
</Carousel>
  )
}

export default Banner
