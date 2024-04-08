import React from 'react'
import { Card } from 'antd'
import { Button } from 'antd/es/radio'
import Avatar from 'antd/es/avatar/avatar'



const ReusableComponentThird = ({ title, data }) => {
    return (
        <>
            <h1 className=' text-red-600 font-madimi text-2xl my-3'>{title}</h1>
            <div className=' py-1 font-varela grid lg:grid-cols-5 md:grid-cols-2 gap-2 px-8'>

                {
                    data?.map((item) => {
                        return (
                            <div key={item.id} className='my-3 '>

                                <Card className='max-w-60 bg-blue-100 '>
                                    <div className='grid '>
                                        <div className='text-center gap-2'>
                                            <Avatar className='h-24 w-24' alt="example" src={item.image} />
                                          

                                                
                                                <h1 className='font-bold text-orange-700'>{item.name}</h1>

                                            



                                        </div>

                                        <h1 className='text-black flex justify-center'>{item.discription}</h1>
                                        <div>
                                            <Button className='bg-blue-800 text-white  '> Add to Card</Button>
                                        </div>
                                    </div>
                                </Card>

                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default ReusableComponentThird