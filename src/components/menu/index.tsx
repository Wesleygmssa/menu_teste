import { useEffect, useState } from "react";
import { Layout, Menu as MenuComponente } from "antd";
import { Input } from "antd";
import { Tabs } from "antd";
// import { LaptopOutlined, StarOutlined } from "@ant-design/icons";
import { Container, ContainerInte , Icon, Title} from "./styles";
import { StarOutlined, StarFilled,  LaptopOutlined} from '@ant-design/icons';

import {FilterMenu} from './utils/filterMenu';

const { TabPane } = Tabs;
const { SubMenu } = MenuComponente;
const { Sider } = Layout;

export function MenuComponent({data, favorite, roles}: any) {
  const [search, setSearch] = useState<any>("");
  const [active , setActive] = useState<any>(Boolean);
  const [positionStorage, setPositionStorage] = useState<any>();

  const NewList1 = JSON.parse(localStorage.getItem(`@menu0`) as any) // obtiene la lista de favoritos
  const NewList2 = JSON.parse(localStorage.getItem(`@menu1`) as any) // obtiene la lista de favoritos
  const NewList3 = JSON.parse(localStorage.getItem(`@menu2`) as any) // obtiene la lista de favoritos
  
  let listaFiltrada1 =  FilterMenu(NewList1, search); // filtra la lista de favoritos
  let listaFiltrada2 = FilterMenu(data[1].list, search); // filtra la lista de favoritos
  let listaFiltrada3 = FilterMenu(data[2].list, search); // filtra la lista de favoritos
  let favoritosFiltrado = FilterMenu(favorite[0].list, search); // filtra la lista de favoritos

  const handleStart = () => {
    setActive(!active);
  };

  const handleAddFavorite = (id: any, index: any, data: any, position: any): void => {
    let lista = data[position].list; // lista de favoritos
      lista[index].favorite = !active; // cambia el estado del favorito
      data[position].list = lista; // actualiza la lista de favoritos
      localStorage.setItem(`@menu${position}`, JSON.stringify([...lista])); // actualiza el localStorage
      setPositionStorage(position); // actualiza la posicion del localStorage
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
                {listaFiltrada1 && listaFiltrada1.length > 0 && (
                    <SubMenu
                      key={data[0].key}
                      icon={<LaptopOutlined />}
                      title={data[0].title}
                    >
                      {listaFiltrada1.map((item: any, index: any) => {    
                        return (
                            <MenuComponente.Item key={item.id} >
                              <ContainerInte >
                                <Title >{item.title}</Title>
                                <Icon onClick={()=>{
                                  handleStart()
                                  handleAddFavorite(item.id, index, data, 0)
                                  }}>
                                    {item.favorite  ?  <StarFilled   style={{ color:"#fceb00",  fontSize: '16px'}} /> : <StarOutlined style={{ fontSize: '14px'}} />} 
                              </Icon>
                              </ContainerInte>
                            </MenuComponente.Item>
                        );
                      })}
                    </SubMenu>
                )}

                {listaFiltrada2 && listaFiltrada2.length > 0 && (
                  <SubMenu
                  key={data[1].key}
                    icon={<LaptopOutlined />}
                    title={data[1].title}

                  >
                    {listaFiltrada2.map((item: any, index: any) => {
                      return (
                        <>
                          <MenuComponente.Item key={item.key} >
                            <ContainerInte>
                              <Title >{item.title}</Title>
                              <Icon onClick={()=>{
                                handleAddFavorite(item.id, index, data, 1)
                                handleStart()
                                }}>
                                    {item.favorite  ?  <StarFilled   style={{ color:"#fceb00",  fontSize: '16px'}} /> : <StarOutlined style={{ fontSize: '14px'}} />} 
                              </Icon>
                            </ContainerInte>
                          </MenuComponente.Item>
                        </>
                      );
                    })}
                  </SubMenu>
                )}

                {listaFiltrada3 && listaFiltrada3.length > 0 && (
                  <SubMenu
                  key={data[2].key}
                    icon={<LaptopOutlined />}
                    title={data[2].title}
                  >
                    {listaFiltrada3.map((item: any, index: any) => {
                      return (
                        <>
                          <MenuComponente.Item key={item.key} >
                            <ContainerInte>
                              <Title >{item.title}</Title>
                              <Icon onClick={()=>{
                                handleAddFavorite(item.id, index, data, 2)
                                handleStart()
                                }}>
                                    {item.favorite  ?  <StarFilled   style={{ color:"#fceb00",  fontSize: '16px'}} /> : <StarOutlined style={{ fontSize: '14px'}} />} 
                              </Icon>
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


