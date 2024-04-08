import React from 'react'
import ReusableComponent from './ReusableComponent'
import { hotproducts,handiCrafts } from '../../utiles/Product'
import ReusableComponentSecond from '../ReusableComponentSecond'
import ReusableComponentThird from './ReusableComponentThird'
import Carousel from './Carousel'
import LatestProduct from './LatestProduct'







const Dashboard = () => {
  return (
    <div>
      <Carousel title={"Trending"} data={handiCrafts}/>
      <LatestProduct title={"New Arrival"} data={handiCrafts}/>
      
     
      
      <ReusableComponent title={"Hot Products"} data={hotproducts} />
      <ReusableComponent title={"Handicrafts"} data={handiCrafts} />
      <ReusableComponentSecond title={"TrendingProduct"} data={handiCrafts} />
      <ReusableComponentThird title={"Most Recent Product"} data={handiCrafts} />
    </div>
  )
}

export default Dashboard