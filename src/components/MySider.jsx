import React, { useEffect, useState } from 'react'
import MyAvatar from './MyAvatar.jsx'
import { List, Skeleton } from 'antd'
import { useSelector } from 'react-redux'
const count = 3
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`
const MySider = () => {
  const users = useSelector(state => state.users.users)
  const [initLoading, setInitLoading] = useState(false)
  // const [loading, setLoading] = useState(false)
  // const [data, setData] = useState([])
  // const [list, setList] = useState([])
  return (
    <List
      className='demo-loadmore-list'
      loading={initLoading}
      itemLayout='horizontal'
      dataSource={users}
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
