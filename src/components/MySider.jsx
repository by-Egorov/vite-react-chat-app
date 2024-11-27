import React, { useState } from 'react'
import MyAvatar from './MyAvatar.jsx'
import { List, Skeleton } from 'antd'
import { useSelector } from 'react-redux'
const MySider = () => {
  const users = useSelector(state => state.users.users)
  const loggedInUser = useSelector(state => state.users.loggedInUser)
  const [initLoading, setInitLoading] = useState(false)
    const otherUsers = users.filter(user => user.id !== loggedInUser?.id)

  return (
    <List
      className='demo-loadmore-list'
      loading={initLoading}
      itemLayout='horizontal'
      dataSource={otherUsers}
      renderItem={item => (
        <List.Item>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              style={{ alignItems: 'center', textAlign: 'start', padding: 5 }}
              avatar={<MyAvatar id={item.id} />}
              title={item.username}
              description={item.email}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  )
}
export default MySider
