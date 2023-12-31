// src/Home.tsx
import React from 'react';
import { Card, Button, Input, Avatar } from 'antd';
// import { Comment } from '@ant-design/compatible';

const Home: React.FC = () => {
  return (
    <div>
      <Card title="Create a new post">
        <Input.TextArea rows={4} placeholder="Write your post..." />
        <Button type="primary" style={{ marginTop: '10px' }}>
          Post
        </Button>
      </Card>

      <Card title="Posts">
        {/* Render posts here */}
        {/* Use the Ant Design Pro Card component and customize it */}
      </Card>
    </div>
  );
};

export default Home;
