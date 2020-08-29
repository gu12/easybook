import React,{Component} from 'react'
import {Input,Button,List} from 'antd'

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

class Antdtodo extends Component{
    render(){
        return (
            <div>
                <div>
                    <Input placeholder='请输入' style={{width:'300px',padding:'10px',marginRight:'20px'}}></Input>
                    <Button type='primary'>点击</Button>
                </div>
                <List
                style={{width:'300px',marginTop:'20px'}}
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}

                />
            </div>
        )
    }
}

export default Antdtodo