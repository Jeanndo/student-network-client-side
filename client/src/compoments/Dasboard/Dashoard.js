import React from "react";
import { Layout, Menu} from 'antd';
import QUESTIONS from "./DashboardItems";
import {Avatar,Button,Typography}from '@material-ui/core';
import { useHistory,useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux'

const { Header, Content, Footer } = Layout;


const Dashoard = () => {
    const history=useHistory();
    const dispatch = useDispatch();
    const [user,setUser] = React.useState(JSON.parse(localStorage.getItem('profile')))

    const handleLogout = ()=>{
        dispatch({type:'LOGOUT'})
        history.push('/')
        setUser(null)
        // localStorage.clear()
      }

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%"}}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} style={{color:'#000'}}>
          <Menu.Item key="1"style={{marginRight:'700px'}}>Student connect</Menu.Item>
          <Menu.Item key="2">
          {user&&(<>
        <Avatar alt={user?.result?.familyName} src={user?.result?.imageUrl} />
        </>
        )}
          </Menu.Item>
          <Menu.Item key="3">
          {user&&(<>
        <Typography style={{color:'white',marginLeft:'10px'}}>
         {user?.result?.familyName}
        </Typography>
        </>
        )}
          </Menu.Item>
          <Menu.Item key="4">
          <Button variant="outlined" color="secondary"onClick={handleLogout} > 
              Logout
          </Button>
              </Menu.Item>
        </Menu>
       
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div style={{ padding: 24, minHeight: 380,textAlign:'center'}}>
         <QUESTIONS/>
        </div>
      </Content>
      {/* <Footer style={{ textAlign: "center" }}>
        Codemoon ©2021 Created by Jeanndo a Software Developer||No Limit
      </Footer> */}
    </Layout>
   
  )
};

export default Dashoard;
