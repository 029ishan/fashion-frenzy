import React from 'react'
import ReusableComponent from './ReusableComponent'
import { handiCrafts } from '../../utiles/Product'
import ReusableComponentSecond from '../ReusableComponentSecond'
import ReusableComponentThird from './ReusableComponentThird'
import Carousel from './Carousel'
import LatestProduct from './LatestProduct'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCarousal, fetchData } from '../../../services/AllProduct'




const Dashboard = () => {
  const dispatch=useDispatch();
 
  const {products}=useSelector((state)=>state.allproduct)
  const {data}=useSelector((state)=>state.carousalslice)
  
  React.useEffect(() => {
   dispatch (fetchData());
  }, [dispatch])

  React.useEffect(() => {
   dispatch (fetchCarousal());
  }, [dispatch])
  console.log('sdads',data.data);

  return (
    <div>
      <Carousel title={"Trending"} data={data.data}/>
      <LatestProduct title={"New Arrival"} data={handiCrafts}/> 
      <ReusableComponent title={"Hot Products"} data={products.data.map((item)=>{
        return{
          ...item,
          qty:1
        }
      })} />
      
      <ReusableComponent title={"Handicrafts"} data={handiCrafts} />
      <ReusableComponentSecond title={"TrendingProduct"} data={handiCrafts} />
      <ReusableComponentThird title={"Most Recent Product"} data={handiCrafts} />
    </div>
  )
}

export default Dashboard