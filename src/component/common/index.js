import { Button,Form,Input } from 'antd';
import React from 'react'





export const FormItem = (props) => {
    
  return (
    <Form.Item  {...props}>
       {props.children}
    </Form.Item>
  );
};


export const AntdInput=(props)=>{
    const tempRule=[
        {
          required:props.required,
          message:`Please Enter ${props.label}`,
        },
    ];


const localrules=
props.rules instanceof Array?[...tempRule,...props.rules]:tempRule;
return(
    <FormItem {...props} rules={localrules}>
        <Input onClick={props.onClick} onChange={props.onChange} type={props.type}/>


        
    </FormItem>
)
};

export const SaveButton=(props)=>{
    return(
        <Button className="bg-emerald-400 "{...props}>
            {props.name}
        </Button>
    )
}

export const EditButton =(props)=>{
  return(
    <Button className='bg-yellow-500'{...props}>
        Edit
    </Button>
  )
}