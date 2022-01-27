import React, { useMemo, useState } from "react";
import { Layout, Menu as MenuComponente } from "antd";
import { Input } from "antd";
import { Tabs } from "antd";
import { LaptopOutlined } from "@ant-design/icons";
import { Container } from "./styles";
import Menu from "../src/config/menu.json";
import Favoritos from "../src/config/favoritos.json";

const { TabPane } = Tabs;

const { SubMenu } = MenuComponente;
const { Sider } = Layout;

function App() {
  const [search, setSearch] = useState<any>("");

  const menufiltrado = useMemo(() => {
    const lowerBusca = search.toLowerCase();
    return Menu[0].list.filter((item: any) => {
      return item.title.toLowerCase().includes(lowerBusca);
    });
  }, [search]);

  const menufiltrado2 = useMemo(() => {
    const lowerBusca = search.toLowerCase();
    return Menu[1].list.filter((item: any) => {
      return item.title.toLowerCase().includes(lowerBusca);
    });
  }, [search]);

  return (
    <Container>
      <div className="card-container">
        <Input.Search
          type={search}
          placeholder="Pesquisar"
          value={search}
          onChange={(event: any) => setSearch(event.target.value)}
        />
        <Tabs type="card">
          <TabPane tab="Pasta" key="1">
            <Sider width={200} className="site-layout-background">
              <MenuComponente
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                {menufiltrado && menufiltrado.length > 0 && (
                  <>
                    <SubMenu
                      key="sub1"
                      icon={<LaptopOutlined />}
                      title="Caixa de entrada"
                    >
                      {menufiltrado.map((item: any) => {
                        return (
                          <MenuComponente.Item key={item.key}>
                            {item.title}
                          </MenuComponente.Item>
                        );
                      })}
                    </SubMenu>
                  </>
                )}

                {menufiltrado2 && menufiltrado2.length > 0 && (
                  <SubMenu
                    key="sub2"
                    icon={<LaptopOutlined />}
                    title="Rascunhos"
                  >
                    {menufiltrado2.map((item: any) => {
                      return (
                        <MenuComponente.Item key={item.key}>
                          {item.title}
                        </MenuComponente.Item>
                      );
                    })}
                  </SubMenu>
                )}
              </MenuComponente>
            </Sider>
          </TabPane>
          <TabPane tab="Favoritos" key="2">
            <Sider width={200} className="site-layout-background">
              <MenuComponente
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                {Favoritos && Favoritos.length > 0 && (
                  <>
                    {Favoritos.map((item: any) => {
                      return (
                        <MenuComponente.Item key={item.key}>
                          {item.title}
                        </MenuComponente.Item>
                      );
                    })}
                  </>
                )}
              </MenuComponente>
            </Sider>
          </TabPane>
        </Tabs>
      </div>
    </Container>
  );
}

export default App;
