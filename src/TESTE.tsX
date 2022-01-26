import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Input } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { markAsUntransferable } from "worker_threads";

const { SubMenu } = Menu;
const { Sider } = Layout;

const menu = [
  {
    key: "1",
    title: "Home",
    url: "/",
  },
  {
    key: "2",
    title: "Produtos",
    url: "/produtos",
  },
];

function App() {
  const [search, setSearch] = useState<any>("");
  console.log("teste", search);
  return (
    <>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Input.Search
            type={search}
            placeholder="Pesquisar"
            value={search}
            onChange={(event: any) => setSearch(event.target.value)}
          />
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="menu 1">
              {menu.map((item, i) => {
                return (
                  <div key={item.key}>
                    <Menu.Item key="1">
                      <a href={item.url}>{item.title}</a>
                    </Menu.Item>
                  </div>
                );
              })}
            </SubMenu>
            <SubMenu key="sub2" icon={<UserOutlined />} title="menu 2">
              {menu.map((item, i) => {
                return (
                  <div key={item.key}>
                    <Menu.Item key={`${i + 1}`}>
                      <a href={item.url}>{item.title}</a>
                    </Menu.Item>
                  </div>
                );
              })}
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
    </>
  );
}

export default App;
