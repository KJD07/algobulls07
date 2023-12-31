// src/MyProfile.tsx
import React from 'react';
import { Card, Form, Input, Button } from 'antd';

const MyProfile: React.FC = () => {
  const onFinish = (values: any) => {
    // Handle form submission, e.g., update user details
  };

  return (
    <Card title="My Profile">
      <Form onFinish={onFinish}>
        {/* Add form fields for user details */}
        {/* Example: <Form.Item label="Username" name="username"><Input /></Form.Item> */}
        <Button type="primary" htmlType="submit">
          Save Changes
        </Button>
      </Form>
    </Card>
  );
};

export default MyProfile;
