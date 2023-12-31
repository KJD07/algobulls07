// src/SignUp.tsx
import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  const onFinish = (values: any) => {
    // Handle signup logic here
    console.log('Received values:', values);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sign Up</h2>
      <Form name="signup" onFinish={onFinish}>
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
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <div>
        Already have an account? <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUp;
