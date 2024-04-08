import { Card } from "antd";
import { React } from "react";
import { Button, Checkbox, Form, Input,Modal } from 'antd';
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { useState } from "react";





const LogIn = () => {
  const onFinish = (name) => {
    console.log('Success:', name);
  };
  const [isModalOpen,setIsModalOpen] =useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

 

  return (
    <div className=" flex justify-center py-5">
      <Card className=" w-[540px] min-h-80 font-varela border-none 
   bg-gradient-to-r from-purple-600 to-black">
    
        <h1 className=" text-lg pb-4 font-bold">Login</h1>
        <div className=" flex">
          <div>
            <Form
              onFinish={onFinish} layout="vertical">
              <section className=" text-left">
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5">* Username</h1>
                  <Input className=" w-64" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]} className=" my-2">
                  <h1 className=" font-varela py-1.5">* Password</h1>
                  <Input.Password className=" w-64 " />
                </Form.Item>
              </section>

              <section className=" text-left ">
                <Form.Item className=" my-2">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <section className="flex gap-2">
                  <Form.Item>
                    <Button className=" bg-black text-white border-none " htmlType="submit">
                      <p className=" font-varela">Submit</p>
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <Button className=" bg-black text-white border-none " htmlType="submit">
                      <Link to="/signup"> <p className=" font-varela">SignUp</p></Link>
                    </Button>
                  </Form.Item>

                  <Form.Item>
                    <Link to="/"> <p> <HomeOutlined /></p> </Link>
                  </Form.Item>
                </section>
                <section>
                  <div className='cursor-pointer underline text-white' onClick={showModal}> ForgetPassword   </div>
                </section>
              </section>
            </Form>
          </div>

          <Modal title="Get a code"  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        
      </Modal>
        </div>
      </Card>

    </div>

  )
}

export default LogIn;