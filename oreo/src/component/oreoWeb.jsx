import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import oreoData from '../Json/oreoData'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { InputBase } from '@material-ui/core';
import OreoDrawer from '../component/oreoDrawer'
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
    constructor(props){
        super(props);
        this.state={
            openDashboard : false
        }
    }
    opendrawer=()=>{
        this.setState({
            openDashboard:!this.state.openDashboard
        })
        console.log("object")
    }
    render() {

        return (
            <div style={{ background: "#f1efef", }}>
                <div>
                    <nav class="navbar p-l-5 p-r-5" style={{ background: "#8c99e0", marginLeft: "250px",     boxShadow: "0px 0px 6px 0px"}}>
                        <ui class="nav navbar-nav navbar-left" style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            paddingLeft: "0",
                            marginBottom: "0",
                            listStyle: "none",
                            width: "100%"
                        }}>
                            <li >
                                <div class="navbar-header">
                                    <a href="javascript:void(0);" class="bars" style={{ display: "none" }}></a>
                                    <a class="navbar-brand" style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        width: "105px"
                                    }}>
                                        <img src="https://thememakker.com/templates/oreo/html/assets/images/logo.svg" alt="oreoImg" style={{ width: "30px" }} />
                                        <span class="m-l-10" style={{ color: "#fff", textTransform: "uppercase" }}>Oreo</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                         
                                <a class="ls-toggle-btn" >
                                    <img src={require('../assets/swaip.svg')} alt="drawerSwaiper" onClick={this.opendrawer}/>
                                </a>
                            </li>
                            <li class="hidden-md-down" style={{ padding: "0px 22px 0px 22px" }}>
                                <a>
                                    <i class="zmdi zmdi-calendar">
                                        <img src={require('../assets/calender.svg')} alt="calenderLogo" style={{ width: "15px" }} />
                                    </i>
                                </a>
                            </li>
                            <li class="hidden-md-down" style={{ padding: "0px 22px 0px 22px" }}>
                                <a>
                                    <i class="zmdi zmdi-calendar">
                                        <img src={require('../assets/email.svg')} alt="calenderLogo" style={{ width: "15px" }} />
                                    </i>
                                </a>
                            </li>
                            <li class="hidden-md-down" style={{ padding: "0px 22px 0px 22px" }}>
                                <a>
                                    <i class="zmdi zmdi-calendar">
                                        <img src={require('../assets/contactList.svg')} alt="calenderLogo" style={{ width: "15px" }} />
                                    </i>
                                </a>
                            </li>
                            <li class="dropdown" style={{ padding: "0px 22px 0px 22px" }}>
                                <i class="zmdi zmdi-calendar">
                                    <img src={require('../assets/notification.svg')} alt="calenderLogo" style={{ width: "15px" }} />
                                </i>
                                <div class="notify">
                                    <span class="heartbit"></span>
                                    <span class="point"></span>
                                </div>
                            </li>
                            <li class="dropdown" style={{ padding: "0px 22px 0px 22px" }}>
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
                                        placeholder="search..." />
                                    <span class="input-group-addon" style={{ display: "flex" }}>
                                        <img src={require('../assets/search.svg')} alt="searchLogo" />
                                    </span>
                                </div>
                            </li>
                            <li class="float-right">
                                <a>
                                    <img src={require('../assets/switch.svg')} alt="switchLogo" style={{ padding: "0px 22px 0px 22px" }} />
                                </a>
                                <a>
                                    <img  src={require('../assets/setting.svg')} alt="switchLogo" style={{ padding: "0px 22px 0px 22px"}} id="loading" />
                                </a>
                            </li>
                        </ui>
                    </nav>
                    <OreoDrawer
                    drawerOpen={this.state.openDashboard}/>
                   <div class="headers" style={{    width: "s",
                    height: "150px",
                    background: "rgb(140, 153, 224)", marginLeft:"250px", display:"flex",justifyContent:"space-between", width:"81%"}}>
                    <div style={{color:"#fff",marginLeft:"20px", marginTop:"10px"}}>
                    <h4>Product</h4><p>Welcome to Oreo</p>
                    </div>
                    <div style={{color:"#fff",marginRight:"30px", marginTop:"23px", border:"1px solid grey", borderRadius:"25px", height:"48px", width:"230px", display:"flex", alignItems: "center", justifyContent :"center", background: "rgba(255,255,255,0.3)"}}><img src={require('../assets/home.svg')} alt="ecomLogo"/>Oreo/eCommerce/Product</div>
                    </div>
                   
                   
                 {/*   <aside class="sidebar" id="leftsidebar">
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
                                <a class="nav-link active" style={{
                                    border: "1px solid rgb(140, 153, 224)",
                                    borderRadius: "59px", margin: "10px",
                                    padding: "11px 23px",
                                    display: "flex",
                                    alignItems: "center"
                                }}>
                                    <img src={require('../assets/user.svg')} alt="homeLogo" />
                                    User
                    </a>
                            </li>
                        </ui>

                        <div>

                        </div>
                            </aside>*/}



                </div>
                <div class="container-fluid" >
                <div class="row clearfix" style={{
                    transition: ".5s",
                    margin: "60px 0px 15px 250px",
                    zIndex: "9",
                    position: "relative", marginTop:"-50px"}}>
                { oreoData.oreo.map(key => {
                        return (

                           
                             
                                    <div class="col-lg-3 col-md-4 col-sm-12" >
                                        <div class="card product_item" style={{ padding: "15px" }}>
                                            <div class="body">
                                                <div class="cp_img">
                                                    <img src={key.image} alt="product" class="img-fluid" />

                                                </div>
                                                <div class="hoverImg">
                                                    <MuiThemeProvider theme={theme}>
                                                        <a href="javascript:void(0);" class="btn btn-primary btn-sm waves-effect" style={{ backgroundcolor: "#8c99e0", bordercolor: "#8c99e0" }}>

                                                            <img src={require('../assets/plus.svg')} alt="plusLogo" />
                                                        </a>
                                                        <a href="javascript:void(0);" class="btn btn-primary btn-sm waves-effect" style={{ backgroundcolor: "#8c99e0", bordercolor: "#8c99e0" }}>

                                                            <img src={require('../assets/cart.svg')} alt="cartLogo" />
                                                        </a>
                                                    </MuiThemeProvider>
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
                              
                         

                        )
                    })
                }
                </div>
                </div>
             
            </div>
        )
    }

}
export default withRouter(oreoWeb)
