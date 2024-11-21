import React from 'react'
import glucose from './ShopPictures/glucose.jpg'
import gloves from './ShopPictures/gloves.jpg'
import plant from './ShopPictures/plant.jpg'
import digital from './ShopPictures/shop4.jpg'
import sethoscope from './ShopPictures/shop5.jpg'
import sphygmomanometer from './ShopPictures/shop6.jpg'
import sphygmomanometer2 from './ShopPictures/shop7.jpg'
import handgloves from './ShopPictures/shop8.jpg'
import sphygmomanometer3 from './ShopPictures/shop9.jpg'
import glucometer from './ShopPictures/shop10.jpg'
import oxygen from './ShopPictures/shop11.jpg'
import surgical from './ShopPictures/shop12.jpg'
import ShopComponent2 from './ShopComponent2'


function ShopData() {


    const data =[
        {
            id:'Glucose monitoring',
            price:'46.00',
            rating:'4',
            image:glucose
        },
        {
            id:'single hand gloves',
            price:'58.10',
            rating:'4',
            image:gloves
        },
        {
            id:'pharmaceutical plants',
            price:'88.00',
            rating:'',
            image:plant
        },
        {
            id:'sethoscope superb',
            price:'96.00',
            rating:'4',
            image:sethoscope
        },
        {
            id:'sphygmomanometer ECO',
            price:'69.00',
            rating:'4',
            image:sphygmomanometer
        },
        {
            id:'sphygmomanometer LEO',
            price:'70.00',
            rating:'',
            image:sphygmomanometer2
        },
        {
            id:'hand gloves',
            price:'52.00',
            rating:'4',
            image:handgloves
        },
        {
            id:'sphygmomanometer',
            price:'66.00',
            rating:'4',
            image:sphygmomanometer3
        },
        {
            id:'digital thermometer',
            price:'70.00',
            rating:'4',
            image:digital
        },
        {
            id:'glucometer',
            price:'85.00',
            rating:'4',
            image:glucometer
        },
        {
            id:'oxygen breathing machine',
            price:'85.00',
            rating:'4',
            image:oxygen
        },
        {
            id:'surgical latex glove',
            price:'90.00',
            rating:'4',
            image:surgical
        },
        {
            id:'hand gloves',
            price:'52.00',
            rating:'4',
            image:handgloves
        },
        {
            id:'sphygmomanometer',
            price:'66.00',
            rating:'4',
            image:sphygmomanometer3
        },
        {
            id:'digital thermometer',
            price:'70.00',
            rating:'4',
            image:digital
        },
        {
            id:'glucometer',
            price:'85.00',
            rating:'4',
            image:glucometer
        },
        {
            id:'oxygen breathing machine',
            price:'85.00',
            rating:'4',
            image:oxygen
        },
        {
            id:'surgical latex glove',
            price:'90.00',
            rating:'4',
            image:surgical
        },
        {
            id:'single hand gloves',
            price:'58.10',
            rating:'4',
            image:gloves
        },
        {
            id:'pharmaceutical plants',
            price:'88.00',
            rating:'',
            image:plant
        },
        {
            id:'sethoscope superb',
            price:'96.00',
            rating:'4',
            image:sethoscope
        },
        {
            id:'sphygmomanometer ECO',
            price:'69.00',
            rating:'4',
            image:sphygmomanometer
        },
        {
            id:'sphygmomanometer LEO',
            price:'70.00',
            rating:'',
            image:sphygmomanometer2
        },
        {
            id:'hand gloves',
            price:'52.00',
            rating:'4',
            image:handgloves
        },
        {
            id:'sphygmomanometer',
            price:'66.00',
            rating:'4',
            image:sphygmomanometer3
        },
        {
            id:'digital thermometer',
            price:'70.00',
            rating:'4',
            image:digital
        },
        {
            id:'glucometer',
            price:'85.00',
            rating:'4',
            image:glucometer
        },
        {
            id:'oxygen breathing machine',
            price:'85.00',
            rating:'4',
            image:oxygen
        },

    ]
  return (
    <div>
        <ShopComponent2 data={data}/>

    </div>
  )
}

export default ShopData