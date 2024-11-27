import React from 'react'
import { Avatar } from "antd";
import {useSelector} from "react-redux";
const MyAvatar = () => {
    const users = useSelector(state => state.users.users)
  return (
    <Avatar.Group>
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
    </Avatar.Group>
  )
}

export default MyAvatar
