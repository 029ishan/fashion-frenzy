import { Card } from "antd";
import React from "react";
import { Button,  Form, Input } from 'antd';
import { ExclamationCircleOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


const SignUp = () => {
  const onFinish = (name) => {
    console.log('Success:', name);
  };
  
  return (

    <div className=" flex justify-center py-5">
      <Card className=" w-[570px] min-h-96  bg-orange-200">
        <h1 className=" font-madimi d pb-2 text-center font-bold text-base mb-3">
        <ExclamationCircleOutlined />
          SignUp</h1>
        <div >
          <div>
            <Form
             onFinish={onFinish} layout="vertical">
            <div className="grid grid-cols-12 gap-x-2">

            <div className="col-span-6">
            <Form.Item
                  name="firstname"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your firstname!',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5">* Firstname</h1>
                  <Input className=" w-64" />
                </Form.Item>
                </div>
                <div className="col-span-6">
                <Form.Item
                  name="lastname"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your lastname!',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5">* Lastname</h1>
                  <Input className=" w-64" />
                </Form.Item>
                </div>

                <div className="col-span-6">
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5">* email</h1>
                  <Input className=" w-64" />
                </Form.Item>
                </div>
                
                <div className="col-span-6">
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5">
                  <UserOutlined />
                    * Username</h1>
                  <Input className=" w-64" />
                </Form.Item>
                </div>
                
                <div className="col-span-6">
                <Form.Item
                  name="newPassword"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your newpassword!',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5">*New-Password</h1>
                  <Input.Password className=" w-64" />
                </Form.Item>
                </div>

                <div className="col-span-6">
                <Form.Item
                  name="confirmpassword"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your confirm-password!',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5">* Confirm-Password</h1>
                  <Input.Password className=" w-64" />
                </Form.Item>
                </div>

                <div className="col-span-6">
                <Form.Item
                  name="contact"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Contact!',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5">* Contact</h1>
                  <Input className=" w-64" />
                </Form.Item>
                </div>

                <div className="col-span-6">
                <Form.Item
                  name="Address"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Address !',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5">* Address</h1>
                  <Input className=" w-64" />
                </Form.Item>
                </div>
            </div>

            

             

              <section className="flex text-left gap-4">
                

                <Form.Item>
                  <Button className=" bg-black text-white border-none flex justify-center" htmlType="submit">
                    <p className=" font-varela ">Submit </p>
                  </Button>
                </Form.Item>
                <Form.Item>
                  
                  
                 
                  <Form.Item>
                  <Link to="/"> <p> <HomeOutlined /></p> </Link>
                </Form.Item>
               
                </Form.Item>
                
              </section>
            </Form>
          </div>

        </div>
      </Card>
    </div>
  )
}

export default SignUp;