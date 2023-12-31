// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
import MyLikes from './MyLikes';
import MyBookmarks from './MyBookmarks';
import MyPosts from './MyPosts';
import MyProfile from './MyProfile';
import {
  HomeOutlined,
  HeartOutlined,
  BookOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider, Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" Component={SignUp} />
        <Route path="/signin" Component={SignIn} />
        <Route path="/">
          <ProLayout
            layout="side"
            fixedHeader
            navTheme="realDark"
            headerRender={() => null}
            menuItemRender={(itemProps, defaultDom) => (
              <Link to={itemProps.path || '/'}>{defaultDom}</Link>
            )}
          >
            <Sider width={200}>
              <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<HeartOutlined />}>
                  <Link to="/my-likes">My Likes</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<BookOutlined />}>
                  <Link to="/my-bookmarks">My Bookmarks</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<FileOutlined />}>
                  <Link to="/my-posts">My Posts</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<UserOutlined />}>
                  <Link to="/my-profile">My Profile</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <PageContainer>
              <Content>
                <Routes>
                  <Route path="/my-likes" Component={MyLikes} />
                  <Route path="/my-bookmarks" Component={MyBookmarks} />
                  <Route path="/my-posts" Component={MyPosts} />
                  <Route path="/my-profile" Component={MyProfile} />
                  <Route path="/" Component={Home} />
                </Routes>
              </Content>
            </PageContainer>
          </ProLayout>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
