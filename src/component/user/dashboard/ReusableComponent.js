import React from 'react'
import { Card } from 'antd'
import {   useNavigate } from 'react-router-dom'
import { useAppContext } from '../../ContextApi'
import {useDispatch ,useSelector} from "react-redux"
import { updataCard } from '../../../Redux/Slices/AddtoCart'



const ReusableComponent = ({ title, data }) => {
  const { appState, updateState } = useAppContext()
  const navigate = useNavigate()
  const dispatch= useDispatch()
  const carditem = useSelector((state)=>state)
  
  const handleDetail = (item) => {

    updateState({
      ...appState,
      data: item
    })
    navigate('/detail')
  }
  const addToCart=(item)=>{
      
    dispatch(updataCard([...new Set([...carditem?.addtocard?.data, ...[item]]) ]))
  }
 
  return (
    <>
      <h1 className=' text-red-600 font-madimi text-2xl my-3'>{title}</h1>
      <div className=' py-1 font-varela grid lg:grid-cols-5 md:grid-cols-2 gap-1 px-8'>

        {
          data?.map((item) => {
            return (
             
              <div key={item.id} className='my-3 text-center'  >
                <section onClick={() => handleDetail(item)}> 
                <h1 className=' text-lg'>{item.name}</h1 >
                <Card hoverable className=' max-w-52 mx-auto bg-black text-white 
              font-varela border-none'
                  cover={<img alt="example" src={item.image} className=' h-44' />}>
                    
                  <h1>Price: {item.price} Rs</h1>
                  <h1>{item.description}</h1>
                  <h1>Brand: {item.brand}</h1>
                 
                </Card>
                </section>
                
                <button className=' bg-indigo-500 w-36 mx-auto rounded-md mt-1 py-1.5
              flex items-center justify-center gap-x-2' onClick={()=>addToCart(item)}> 
              Add to Card</button>
                
              </div>
            )
          })
        }
        

      </div>
    </>
  )
}

export default ReusableComponent