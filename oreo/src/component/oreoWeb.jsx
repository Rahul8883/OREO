import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import oreoData from '../Json/oreoData'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import {InputBase} from '@material-ui/core';
const theme = createMuiTheme({
    overrides: {
        btn: {
            primary: {
                backgroundcolor: "#8c99e0",
                bordercolor: "#8c99e0"
            }
        }
    }
});
export class oreoWeb extends Component {
    render() {

        return (
            <div>
            <div>
                    <nav class="navbar p-l-5 p-r-5" style={{ background: "#8c99e0" }}>
                        <ui class="nav navbar-nav navbar-left" style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            paddingLeft: "0",
                            marginBottom: "0",
                            listStyle: "none"}}>
                            <li >
                                <div class="navbar-header">
                                    <a href="javascript:void(0);" class="bars" style={{ display: "none" }}></a>
                                    <a class="navbar-brand" style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        width: "105px"}}>
                                        <img src="https://thememakker.com/templates/oreo/html/assets/images/logo.svg" alt="oreoImg" style={{ width: "30px" }} />
                                        <span class="m-l-10" style={{ color: "#fff", textTransform: "uppercase" }}>Oreo</span>
                                    </a>
                                </div>
                            </li>
                            <li >
                                <a class="ls-toggle-btn">
                                    <img src={require('../assets/swaip.svg')} alt="drawerSwaiper" />
                                </a>
                            </li>
                            <li class="hidden-md-down" style={{padding:"0px 22px 0px 22px"}}>
                            <a>
                            <i class="zmdi zmdi-calendar">
                            <img src={require('../assets/calender.svg')} alt="calenderLogo" style={{ width: "15px" }} />
                            </i>
                            </a>
                            </li>
                            <li class="hidden-md-down" style={{padding:"0px 22px 0px 22px"}}>
                            <a>
                            <i class="zmdi zmdi-calendar">
                            <img src={require('../assets/email.svg')} alt="calenderLogo" style={{ width: "15px" }} />
                            </i>
                            </a>
                            </li>
                            <li class="hidden-md-down" style={{padding:"0px 22px 0px 22px"}}>
                            <a>
                            <i class="zmdi zmdi-calendar">
                            <img src={require('../assets/contactList.svg')} alt="calenderLogo" style={{ width: "15px" }} />
                            </i>
                            </a>
                            </li>
                            <li class="dropdown" style={{padding:"0px 22px 0px 22px"}}>
                            <i class="zmdi zmdi-calendar">
                            <img src={require('../assets/notification.svg')} alt="calenderLogo" style={{ width: "15px" }} />
                            </i>
                          <div class="notify">
                          <span class="heartbit"></span>
                          <span class="point"></span>
                          </div>
                            </li>
                            <li class="dropdown" style={{padding:"0px 22px 0px 22px"}}>
                            <i class="zmdi zmdi-calendar">
                            <img src={require('../assets/flag.svg')} alt="calenderLogo" style={{ width: "15px" }} />
                            </i>
                          <div class="notify">
                          <span class="heartbit"></span>
                          <span class="point"></span>
                          </div>
                            </li>
                            <li class="hidden-sm-down">
                            <div class="input-group">
                            <InputBase
                            type="text"
                            placeholder="search..."/>
                            <span class="input-group-addon" style={{display:"flex"}}>
                            <img src={require('../assets/search.svg')} alt="searchLogo" />
                            </span>
                            </div>
                            </li>
                            <li class="float-right">
                            <a> 
                            <img src={require('../assets/switch.svg')} alt="switchLogo" style={{padding:"0px 22px 0px 22px"}}/>
                            </a>
                            <a>
                            <img src={require('../assets/setting.svg')} alt="switchLogo" style={{padding:"0px 22px 0px 22px"}}/>
                            </a>
                            </li>
                        </ui>
                    </nav>
                </div>
                {
                    oreoData.oreo.map(key => {
                        return (
                            <div>
                                <div class="container-fluid">
                                    <div class="row clearfix" >
                                        <div class="col-lg-3 col-md-4 col-sm-12" >
                                            <div class="card product_item">
                                                <div class="body">
                                                    <div class="cp_img">
                                                        <img src={key.image} alt="product" class="img-fluid" />
                                                        <div class="hover">
                                                            <MuiThemeProvider theme={theme}>
                                                                <a href="javascript:void(0);" class="btn btn-primary btn-sm waves-effect" style={{ backgroundcolor: "#8c99e0", bordercolor: "#8c99e0" }}>
                                                                    <i class="zmdi zmdi-plus"></i>
                                                                    <img src={require('../assets/plus.svg')} alt="plusLogo" />
                                                                </a>
                                                                <a href="javascript:void(0);" class="btn btn-primary btn-sm waves-effect" style={{ backgroundcolor: "#8c99e0", bordercolor: "#8c99e0" }}>
                                                                    <i class="zmdi zmdi-shopping-cart"></i>
                                                                    <img src={require('../assets/cart.svg')} alt="cartLogo" />
                                                                </a>
                                                            </MuiThemeProvider>
                                                        </div>
                                                    </div>
                                                    <div class="product_details">
                                                        <h5 class="">
                                                            <a href="https://thememakker.com/templates/oreo/html/light/ec-product-detail.html">{key.specification}</a>
                                                        </h5>
                                                        <ui class="product_price list-unstyled">
                                                            <li class="old_price">{key.Actual_Price}</li>
                                                            <li class="new_price">{key.Discount_Price}</li>
                                                        </ui>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        )
    }

}
export default withRouter(oreoWeb)
