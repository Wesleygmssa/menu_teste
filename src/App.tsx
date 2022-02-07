import React, { useMemo, useState } from "react";
import { Layout, Menu as MenuComponente } from "antd";
import { Input } from "antd";
import { Tabs } from "antd";
import { LaptopOutlined, StarOutlined } from "@ant-design/icons";
import { Container, ContainerInte } from "./styles";
import Menu from "../src/config/menu.json";
import Favoritos from "../src/config/favoritos.json";
import {FilterMenu} from './utils/filterMenu';

const { TabPane } = Tabs;

const { SubMenu } = MenuComponente;
const { Sider } = Layout;

function App() {
  const [search, setSearch] = useState<any>("");
  const [active , setActive] = useState<any>(false);


  let listaFiltrada =  FilterMenu(Menu[0].list, search);
  let listaFiltrada2 = FilterMenu(Menu[1].list, search);
  let listaFiltrada3 = FilterMenu(Menu[2].list, search);
  let favoritosFiltrado = FilterMenu(Favoritos[0].list, search);

  const handleStart = (item: any, index: any) => {
    setActive(!active);
  };

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
                {listaFiltrada && listaFiltrada.length > 0 && (
                    <SubMenu
                      key={Menu[0].key}
                      icon={<LaptopOutlined />}
                      title={Menu[0].title}
                    >
                      {listaFiltrada.map((item: any, index: any) => {                        
                        return (
                          <>
                            <MenuComponente.Item key={item.id} onClick={()=>{handleStart(item, index)}}>
                              <ContainerInte >
                                <div className="title">{item.title}</div>
                                {item.favorite === true ?  <StarOutlined  style={{color:'#fceb00'}} /> : <StarOutlined/>} 
                              </ContainerInte>
                            </MenuComponente.Item>
                          </>
                        );
                      })}
                    </SubMenu>
                )}

                {listaFiltrada2 && listaFiltrada2.length > 0 && (
                  <SubMenu
                  key={Menu[1].key}
                    icon={<LaptopOutlined />}
                    title={Menu[1].title}
                  >
                    {listaFiltrada2.map((item: any) => {
                      return (
                        <>
                          <MenuComponente.Item key={item.key}>
                            <ContainerInte>
                              <div className="title">{item.title}</div>
                              <StarOutlined />
                            </ContainerInte>
                          </MenuComponente.Item>
                        </>
                      );
                    })}
                  </SubMenu>
                )}

                {listaFiltrada3 && listaFiltrada3.length > 0 && (
                  <SubMenu
                  key={Menu[2].key}
                    icon={<LaptopOutlined />}
                    title={Menu[2].title}
                  >
                    {listaFiltrada3.map((item: any) => {
                      return (
                        <>
                          <MenuComponente.Item key={item.key}>
                            <ContainerInte>
                              <div className="title">{item.title}</div>
                              <StarOutlined />
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
                {favoritosFiltrado && favoritosFiltrado.length > 0 && (
                  <>
                    {favoritosFiltrado.map((item: any) => {
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
