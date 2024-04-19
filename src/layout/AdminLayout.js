import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { adminItems } from '../component/utiles/Product';
const { Header, Content, Sider } = Layout;

const AdminLayout= () => {
const navigate=useNavigate()
  const handleRoute=(e)=>{
    navigate(`${e.key}`)
  }

  return (
    <Layout className=' font-varela'>
      <Header className=' flex items-center bg-slate-900'>
        <h1 className=' text-white'>Login</h1>
      </Header>

      <Layout>
        <Sider className=' max-w-52 bg-gray-600'>
         <Menu mode="inline" className=' min-h-full bg-indigo-400 font-varela' 
         items={adminItems} onClick={handleRoute}/>
         
        </Sider>
          
          <Content className=' min-h-[500px] px-5 py-1'>
           <Outlet/>
          </Content>
      
      </Layout>
    </Layout>
  );
};
export default AdminLayout;