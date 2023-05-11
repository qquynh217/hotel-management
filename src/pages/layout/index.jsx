import {
  MenuFoldOutlined,
  TeamOutlined,
  UserOutlined,
  FileDoneOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ROUTE_URL } from "../../routes/routes";
const { Header, Sider, Content } = Layout;
import "./layout.scss";
import bed from "../../assets/bed-icon.png";

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="main-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <img src={bed} style={{ width: 16 }} />,
              label: <Link to={ROUTE_URL.ROOM}>Phòng</Link>,
            },
            {
              key: "2",
              icon: <BellOutlined />,
              label: <Link to={ROUTE_URL.SERVICE}>Dịch vụ</Link>,
            },
            {
              key: "3",
              icon: <UserOutlined />,
              label: <Link to={ROUTE_URL.CUSTOMER}>Khách hàng</Link>,
            },
            {
              key: "4",
              icon: <FileDoneOutlined />,
              label: <Link to={ROUTE_URL.RESERVATION}>Đặt phòng</Link>,
            },
            {
              key: "5",
              icon: <TeamOutlined />,
              label: <Link to={ROUTE_URL.EMPLOYEE}>Nhân viên</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
export default MainLayout;
