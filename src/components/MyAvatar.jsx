import React from 'react'
import { Avatar } from 'antd'
import { useSelector } from 'react-redux'
const MyAvatar = ({ id }) => {
  const users = useSelector(state => state.users.users)
  const user = users.find(user => user.id === id)
  return (
    <Avatar.Group>
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        {user.username[0].toUpperCase()}
      </Avatar>
    </Avatar.Group>
  )
}

export default MyAvatar
