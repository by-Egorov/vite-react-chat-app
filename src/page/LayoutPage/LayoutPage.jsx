import React from 'react'
import { Flex, Layout } from 'antd'
import style from './LayoutPage.module.css'
import MyInput from '../../components/MyInput.jsx'
import MySider from '../../components/MySider.jsx'
import UserItem from '../../components/UserItem.jsx'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout

const LayoutPage = () => {
  return (
    <Flex gap='middle' wrap>
      <Layout className={style.layout}>
        <Header className={style.header}>
          <UserItem />
        </Header>
        <Layout>
          <Sider width='25%' className={style.sider}>
            <MySider />
          </Sider>
          <Content className={style.content}>Content</Content>
        </Layout>
        <Footer className={style.footer}>
          <MyInput />
        </Footer>
      </Layout>
    </Flex>
  )
}

export default LayoutPage
