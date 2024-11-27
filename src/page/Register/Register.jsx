import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Flex } from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const Register = () => {
  const [isLogin, setIsLogin] = useState(false)
  const users = useSelector(state => state.users.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const register = values => {
    const userId = Date.now()
    const user = { ...values, id: userId }
    dispatch({
      type: 'ADD_USER',
      payload: {
        ...values,
        id: userId,
      },
    })
    dispatch({
      type: 'SET_LOGGED_IN_USER',
      payload: user,
    })
    setIsLogin(true)
    navigate(`/${userId}`)
  }
  const login = values => {
    const user = users.find(user => user.email === values.email)
    if (user) {
      dispatch({
        type: 'SET_LOGGED_IN_USER',
        payload: user,
      })
      setIsLogin(true)
      navigate(`/${user.id}`)
    } else {
      setIsLogin(false)
      console.log('user is not de find')
    }
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
      {location.pathname === '/register' && (
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
      )}
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
          {
            validator: async (_, value) => {
              if (!value) {
                return Promise.reject('Please input your E-mail!')
              }

              // Проверка, если это не логин (isLogin) и пользователь не существует

              const userExists = users.some(user => user.email === value) // Проверка на существование пользователя
              if (!userExists) {
                return Promise.reject(
                  'Пользователь с таким email не зарегистрирован',
                )
              }

              return Promise.resolve() // Все в порядке
            },
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder='E-mail' />
      </Form.Item>
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
          {location.pathname === '/login' ? 'Log In' : 'Sign Up'}
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
