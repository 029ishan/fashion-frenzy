import React from 'react'
import Header from './Header'
import { Form } from 'antd'
import { AntdInput, SaveButton } from '../common'



const AdminProfile = () => {
  const handleFinish = (values) => {
    console.log('Success:', values);
  };
  
  return (

    <div>
      <div className='flex justify-center'>
        <Header name='AdminProfile' />
      </div>
      <Form className=' grid grid-cols-2 gap-3 'layout='vertical' onFinish={handleFinish}>
      <div>
        <AntdInput required name="inputa" label="First Name"/>
      </div>
      <div>
        <AntdInput required name="inputm" label="Middle Name"/>
      </div>
      <div>
        <AntdInput required name="inputb" label="Last Name"/>
      </div>
      <div>
        <AntdInput required name="inputc" label="Email" type="email"/>
      </div>
      <div>
        <AntdInput required name="inputd" label="Phone" type="number"/>
      </div>
      <div>
      <SaveButton name="save" htmlType="submit"/>
         
      
      </div>
      </Form>

      
    </div>
  )
}

export default AdminProfile
