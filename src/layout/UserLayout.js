import React, { useState } from 'react';
import { Badge, Layout,Avatar, Drawer } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import{ConfigProvider} from 'antd'
import { Input } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import Order from '../component/user/Order';
import {useSelector} from "react-redux"


const { Search } = Input;

const { Header, Content, Footer } = Layout;

const UserLayout = () => {
  

  const iteminfo = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'AboutUs',
      link: '/aboutus'
    },
    {
      name: 'ContactUS',
      link: '/contactus'
    },
  ]
  const authinfo = [
    {
      name: 'Login',
      link: '/login'
    },
    {
      name: 'Sign Up',
      link: '/signup'
    },
   
    
  ]

  const [open, setOpen] = useState(false);
  const carditem = useSelector((state)=>state)

  const showDrawer = () => {
    if(carditem?.addtocard?.data?.length>=1)
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  console.log('dfh',carditem)
  
  return (
    <ConfigProvider  
    theme={{
      components:{
      Layout :{
        headerBg:"#a32626",
        headerColor:"black",
         fontSize: 16,
        footerBg : "black",
      },
    },
    }}
    > 
    
    <Layout>
      
      <Header className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% cursor-pointer w-full fixed z-10'>
 
      
      
        <div className='flex '>
          <div className='flex items-center'> <img src='/lion.png'alt='lion'className='h-14'/>     </div>
          <div className='gap-8 flex mx-auto'>
            {
              iteminfo?.map((item) => (
                <Link to={item.link}> 
                <div  key={item.link} >
                  {item.name}
                </div>
                </Link>
              ))
            }
           
          </div>
          
          <div className='flex items-center w-70 mx-5'>
          <Search 
      placeholder="input search text" />
      <div className=" px-3">
        
        <Badge count={carditem?.addtocard?.data?.length}>
        <Avatar  size={28} icon={<ShoppingCartOutlined/>} onClick={showDrawer}></Avatar>
        </Badge>
        <div> 
          {
            open &&(
        <Drawer title="Basic Drawer" onClose={onClose} open={open} >
       <Order/>
      </Drawer>
      )
      }
      </div>
        </div>
          </div>
          <div className=' flex gap-3 px-3'>
         {
           authinfo?.map((item) => {
            return(
            
           <Link to={item.link}> <h1  key={item.link}>
              {item.name}
            </h1>
            </Link>)
           
 } )

         }
</div>
        </div>

      </Header>

      <Content className='min-h-[535px] pt-12'>

        
        
          <Outlet />
       
      </Content>
      <Footer className='flex justify-center  text-blue-50'>
        
      
        Ishan Khanal ©{new Date().getFullYear()} Created by Ishan Khanal
      </Footer>

    </Layout>
    </ConfigProvider>
  );
};
export default UserLayout;