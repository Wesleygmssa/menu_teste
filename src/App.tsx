import React, { useMemo, useState } from "react";
import { Layout, Menu as MenuComponente } from "antd";
import { Input } from "antd";
import { Tabs } from "antd";
import { LaptopOutlined } from "@ant-design/icons";
import { Container, ContainerInte } from "./styles";
import Menu from "../src/config/menu.json";
import Favoritos from "../src/config/favoritos.json";
import { Checkbox } from "antd";

const { TabPane } = Tabs;

const { SubMenu } = MenuComponente;
const { Sider } = Layout;

function App() {
  const [search, setSearch] = useState<any>("");

  const Listafiltrada = useMemo(() => {
    const lowerBusca = search.toLowerCase();
    return Menu[0].list.filter((item: any) => {
      return item.title.toLowerCase().includes(lowerBusca);
    });
  }, [search]);

  const Listafiltrada2 = useMemo(() => {
    const lowerBusca = search.toLowerCase();
    return Menu[1].list.filter((item: any) => {
      return item.title.toLowerCase().includes(lowerBusca);
    });
  }, [search]);

  //filtra os favoritos
  const FavoritosFiltrado = useMemo(() => {
    const lowerBusca = search.toLowerCase();
    return Favoritos[0].list.filter((item: any) => {
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
                {Listafiltrada && Listafiltrada.length > 0 && (
                  <>
                    <SubMenu
                      key="sub1"
                      icon={<LaptopOutlined />}
                      title="Caixa de entrada"
                    >
                      {Listafiltrada.map((item: any) => {
                        return (
                          <>
                            <MenuComponente.Item key={item.key}>
                              <ContainerInte>
                                <div className="teste">{item.title}</div>
                                <Checkbox className="teste2" />
                              </ContainerInte>
                            </MenuComponente.Item>
                          </>
                        );
                      })}
                    </SubMenu>
                  </>
                )}

                {Listafiltrada2 && Listafiltrada2.length > 0 && (
                  <SubMenu
                    key="sub2"
                    icon={<LaptopOutlined />}
                    title="Rascunhos"
                  >
                    {Listafiltrada2.map((item: any) => {
                      return (
                        <>
                          <MenuComponente.Item key={item.key}>
                            <ContainerInte>
                              <div className="title">{item.title}</div>
                              <Checkbox className="image" />
                            </ContainerInte>
                          </MenuComponente.Item>
                        </>
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
                {FavoritosFiltrado && FavoritosFiltrado.length > 0 && (
                  <>
                    {FavoritosFiltrado.map((item: any) => {
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
