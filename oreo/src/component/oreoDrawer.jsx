import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import { withRouter } from 'react-router-dom';
import { MenuItem, MuiThemeProvider, createMuiTheme } from '@material-ui/core';

var theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper: {
                // transition: " all 0.5s",
                width: " 250px",
                height: "100vh"
            },
        }
    }
})


export class DrawerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }



    render() {

        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <div>
                        <Drawer variant="persistent" anchor="left" open={this.props.drawerOpen} drawerWidth={10}>
      <aside class="sidebar" id="leftsidebar">
                        <ui class="nav nav-tabs">
                            <li class="nav-item" >
                                <a class="nav-link active" style={{
                                    border: "1px solid rgb(140, 153, 224)",
                                    borderRadius: "59px", margin: "10px",
                                    padding: "11px 23px",
                                    display: "flex",
                                    alignItems: "center"
                                }}>
                                    <img src={require('../assets/home.svg')} alt="homeLogo" />
                                    Oreo
                    </a>
                            </li>
                            <li class="nav-item" >
                                <a class="nav-link active" style={{border: "1px solid rgb(140, 153, 224)",borderRadius: "59px", margin: "10px",padding: "11px 23px",display: "flex",alignItems: "center"
                                }}>
                                    <img src={require('../assets/user.svg')} alt="homeLogo" />
                                    User
                    </a>
                            </li>
                        </ui>

                        <div>

                        </div>
                            </aside>
                        </Drawer>

                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default withRouter(DrawerComponent)

