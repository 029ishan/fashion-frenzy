import React from 'react'
import { useAppContext } from '../ContextApi'
import {  Button, Rate } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import ReusableComponent from './dashboard/ReusableComponent'


const Detail = () => {
  const {appState}=useAppContext()
  console.log(appState)
  const discount=(appState?.data?.price *appState?.data?.discount )/100
  return (
    <div> 
    <div className='flex justify-evenly'>
      
      
       
        <div >
          <img src={appState?.data?.image}alt='no ' className='h-80' />
        
        
        </div>
        <section className='mt-3'> 
          <div>{appState?.data?.name} </div>

         <h1 className='text-red-600 '><span className='line-through'>Rs: {appState?.data?.price -discount} </span>  Rs:{appState?.data?.price}  {appState?.data?.discount} %  </h1> 
         

          <div className='text-blue-300 font-bold'>{appState?.data?.discription} </div>
          <div className='font-bold'>{appState?.data?.brand} </div>
          <div className='gap-x-2'> stock: {appState?.data?.stock} </div>
          <div className='gap-x-2' >view: {appState?.data?.view} </div>
          <div>  <Rate allowHalf defaultValue={2.5} /></div>
          <TextArea/>
          <Button className='bg-blue-800 text-white '> Buy Now</Button>
         
       <Button className='bg-black text-white '> Add to Card</Button>
                                        
          </section>
           
          
    </div >
    <div > <ReusableComponent data= {appState?.data?.relatedProduct} title={"Related Product"}/> </div>
    </div>
  )
}

export default Detail
