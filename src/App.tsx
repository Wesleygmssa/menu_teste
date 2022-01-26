import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

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
  {
    key: "3",
    title: "Carrinho",
    url: "/carrinho",
  },
  {
    key: "4",
    title: "Contato",
    url: "/contato",
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
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              {menu.map((item, i) => {
                return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
              })}
            </SubMenu>

            {/* <SubMenu key="sub12" icon={<UserOutlined />} title="subnav 2">
              {menu.map((item, i) => {
                return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
              })}
            </SubMenu> */}
          </Menu>
        </Sider>
      </Layout>
    </>
  );
}

export default App;
