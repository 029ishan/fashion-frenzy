import React from 'react'
import { Link } from 'react-router-dom';
import { DeleteFilled, MinusOutlined, PlusCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { updataCard } from '../../Redux/Slices/AddtoCart';
import { useDispatch, useSelector } from 'react-redux'


const Order = () => {
  const dispatch = useDispatch()
  const carditem = useSelector((state) => state)
  const [orderData, setOrderData] = React.useState([]);
  const handleAdd = (id) => {
    const addtoqty = orderData.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      } else {
        return {
          ...item,
        }
      }


    });

    dispatch(updataCard(addtoqty));
  };
  const handleMinus = (id, qty) => {
    if (qty > 1) {
      const minusqty = orderData?.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        } else {
          return {
            ...item,
          }
        }
      });
      dispatch(updataCard(minusqty))
    };
  }



  const handleDelete = (id) => {
    dispatch(updataCard(carditem?.addtocard?.data?.filter((item) => item.id !== id)))

  }
  React.useEffect(() => {
    setOrderData(carditem?.addtocard?.data);

  }, [carditem?.addtocard?.data]);

  const GrossPrice = carditem.addtocard.data.reduce((previous, item) => {
    return (
      (item.price * item.qty) + previous
    )
  }, 0)
  
  return (
    <div>
      <h1>Ordered</h1>
      {
        orderData.map((item) => {
          return (
            <div key={item.id} className=' flex font-varela text-md 
                 items-center px-2 my-2 justify-between border-b-2 border-b-slate-400'>
              <div className='flex'>
                <img src={item.image} alt="items" className=' h-16 w-16'></img>

                <section className='px-2'>
                  <h1 className='text-blue-500 font-bold flex justify-center'>{item.name}</h1>
                  <h2 className='text-red-500'>Price:${item.price * item.qty}</h2>
                  <h1>QTY:{item.qty}</h1>
                </section>
              </div>
              <div>

                <h1 className='text-green-500'><PlusCircleFilled onClick={() => handleAdd(item.id)} /></h1>

                <h1 ><MinusOutlined onClick={() => handleMinus(item.id, item.qty)} /></h1>
                <h1 className='text-red-500'><DeleteFilled onClick={() => handleDelete(item.id)} /></h1>
              </div>

            </div>
          )
        })
      }
      <div>
        <h1 className='bg-red-200 w-32'>Gross price: ${GrossPrice}  </h1>
        <Link to ='/ordernow'> 
        <Button className=' bg-green-500 text-white w-full'>Buy Now</Button>
        </Link>
      </div>
    </div>
  )
}

export default Order