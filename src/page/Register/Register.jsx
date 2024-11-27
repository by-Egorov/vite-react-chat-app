import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Flex } from 'antd'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";
const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const register = values => {
    dispatch({
      type: 'ADD_USER',
      payload: {
        ...values,
        id: Date.now()
      }
    })
    navigate('/')
    console.log('Received values of form: ', values)
  }
  return (
    <Form
      name='login'
      initialValues={{
        remember: true,
      }}
      style={{
        margin: '25% auto',
        maxWidth: 360,
      }}
      onFinish={location.pathname === '/register' ? register : login}
    >
      <Form.Item
        name='username'
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder='Username' />
      </Form.Item>
      {location.pathname === '/register' && (
        <Form.Item
          name='email'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder='E-mail' />
        </Form.Item>
      )}
      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type='password'
          placeholder='Password'
        />
      </Form.Item>
      <Form.Item>
        <Flex justify='space-between' align='center'>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          {location.pathname === '/login' && <Link to=''>Forgot password</Link>}
        </Flex>
      </Form.Item>
      <Form.Item>
        <Button block type='primary' htmlType='submit'>
          {location.pathname === '/login' ? 'Log In' : 'Sign In'}
        </Button>
        or{' '}
        {location.pathname === '/login' ? (
          <Link to='/register'>Register now!</Link>
        ) : (
          <Link to='/login'>Log In</Link>
        )}
      </Form.Item>
    </Form>
  )
}
export default Register
