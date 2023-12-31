// src/MyPosts.tsx
import React from 'react';
import { Table, Button, Space } from 'antd';

const MyPosts: React.FC = () => {
  const columns = [
    { title: 'Post Content', dataIndex: 'content', key: 'content' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: any) => (
        <Space size="middle">
          <Button type="primary">Edit</Button>
          <Button type="link" danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      content: 'My first post',
      date: '2023-01-01',
    },
    {
      key: '2',
      content: 'Another post',
      date: '2023-02-01',
    },
    // Add more data as needed
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default MyPosts;
