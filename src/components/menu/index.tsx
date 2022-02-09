import { useState } from "react";
import { Layout, Menu as MenuComponente } from "antd";
import { Input } from "antd";
import { Tabs } from "antd";
// import { LaptopOutlined, StarOutlined } from "@ant-design/icons";
import { Container, ContainerInte } from "./styles";
import { StarOutlined, StarFilled, StarTwoTone , LaptopOutlined} from '@ant-design/icons';



import {FilterMenu} from './utils/filterMenu';

const { TabPane } = Tabs;
const { SubMenu } = MenuComponente;
const { Sider } = Layout;

export function MenuComponent({data, favorite, roles}: any) {
  const [search, setSearch] = useState<any>("");
  const [active , setActive] = useState<any>(false);


  let listaFiltrada1 =  FilterMenu(data[0].list, search);
  let listaFiltrada2 = FilterMenu(data[1].list, search);
  let listaFiltrada3 = FilterMenu(data[2].list, search);
  let favoritosFiltrado = FilterMenu(favorite[0].list, search);

  const handleStart = (item: any, index: any) => {
    setActive(!active);
  };

  const handleAddFavorite = (id: any, index: any, data: any): void => {

    console.log('teste', id,  data[0].list[index].id);
  
 
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
                          <>
                            <MenuComponente.Item key={item.id} onClick={()=>{handleStart(item, index)}}>
                              <ContainerInte >
                                <div className="title">{item.title}</div>
                                <div onClick={()=>{handleAddFavorite(item.id, index, data)}}>
                                    {item.favorite  ?  <StarFilled   style={{ color:"#fceb00",  fontSize: '16px'}} /> : <StarOutlined style={{ fontSize: '14px'}} />} 
                              </div>
                              </ContainerInte>
                            </MenuComponente.Item>
                          </>
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
                    {listaFiltrada2.map((item: any) => {
                      return (
                        <>
                          <MenuComponente.Item key={item.key}>
                            <ContainerInte>
                              <div className="title">{item.title}</div>
                              {item.favorite  ?  <StarFilled   style={{ color:"#fceb00",  fontSize: '16px'}} /> : <StarOutlined style={{ fontSize: '14px'}} />} 
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
                    {listaFiltrada3.map((item: any) => {
                      return (
                        <>
                          <MenuComponente.Item key={item.key}>
                            <ContainerInte>
                              <div className="title">{item.title}</div>
                              {item.favorite  ?  <StarFilled   style={{ color:"#fceb00",  fontSize: '16px'}} /> : <StarOutlined style={{ fontSize: '14px'}} />} 
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


