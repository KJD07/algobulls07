// src/SignIn.tsx
import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  const onFinish = (values: any) => {
    // Handle signin logic here
    console.log('Received values:', values);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sign In</h2>
      <Form name="signin" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
      <div>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignIn;
