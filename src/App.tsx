import React, { useMemo, useState } from "react";
import { Layout, Menu } from "antd";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

const menu: any = [
  {
    title: "Home",
    key: "1",
    icon: <UserOutlined />,
    list: [
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
    ],
  },
  {
    title: "Home",
    key: "1",
    icon: <UserOutlined />,
    list: [
      {
        key: "5",
        title: "Login",
        url: "/login",
      },
      {
        key: "6",
        title: "Cadastro",
        url: "/cadastro",
      },
    ],
  },
];

function App() {
  const [search, setSearch] = useState<any>("");

  const menufiltrado = useMemo(() => {
    const lowerBusca = search.toLowerCase();
    return menu[0].list.filter((item: any) => {
      return item.title.toLowerCase().includes(lowerBusca);
    });
  }, [search]);

  const menufiltrado2 = useMemo(() => {
    const lowerBusca = search.toLowerCase();
    return menu[1].list.filter((item: any) => {
      return item.title.toLowerCase().includes(lowerBusca);
    });
  }, [search]);

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
            {menufiltrado && menufiltrado.length > 0 && (
              <>
                <SubMenu key="sub1" title="subnav 1">
                  {menufiltrado.map((item: any) => {
                    return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
                  })}
                </SubMenu>
              </>
            )}

            {menufiltrado2 && menufiltrado2.length > 0 && (
              <SubMenu key="sub2" title="subnav 2">
                {menufiltrado2.map((item: any) => {
                  return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
                })}
              </SubMenu>
            )}
          </Menu>
        </Sider>
      </Layout>
    </>
  );
}

export default App;
