import React from 'react'
import { Button, Input, Space } from 'antd'
import { LuSendHorizonal } from 'react-icons/lu'

const MyInput = ({props}) => {
  return (
    <Space.Compact style={{ width: '100%' }}>
      <Input {...props} style={{height: 35}}/>
        <Button type='primary' style={{height: 35}}>
        <LuSendHorizonal size={21} />
      </Button>
    </Space.Compact>
  )
}

export default MyInput
