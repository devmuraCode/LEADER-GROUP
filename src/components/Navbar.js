import React from 'react'
import logo from '../images/logo.svg'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Nav>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="#"><img src={logo} className="navbar-brend img-fluid" alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span> 
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="#about">About us</a>
                            <a class="nav-link" href="#services">Services</a>
                            <a class="nav-link" href="#approach">Approach</a>
                            <a class="nav-link" href="#values">Values</a>
                            <a class="nav-link bottom" href="#contact">Contacts</a>
                        </div>
                    </div>
                </div>
            </nav>
        </Nav>
    )
}
const Nav = styled.div`
.navbar{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    line-height: 10px;
}
.navbar-nav{
    width: 100%;
    display: flex;
    justify-content: end !important;
}
    .nav-link{
        margin: 0 0 0 35px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 53px;
        display: flex;
        align-items: center;
        color: #343D66 !important;
        &:hover{
            color: #FED652 !important;
        }
    }
        
        @media screen and (max-width: 1024px){
            .navbar-nav{
                width: 100%;
                display: flex;
                justify-content: end !important;
            }
                .nav-link{
                    margin: 10px 25px 0 0;
                    font-family: 'Inter', sans-serif;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 53px;
                    display: flex;
                    align-items: center;
                    color: #343D66 !important;
                }
                .img-fluid{
                    width: 12rem;
                }
        }
        @media screen and (max-width: 991px){
            .container{
                max-width:100% !important;
                padding-left:0px;
                padding-right:0px;
                .navbar-brend{
                    padding-left:10px;
                    padding-right:0px;
                }
                button{
                    margin-left:10px;
                    margin-right:10px;
                }
            }
            .navbar-nav{
                background: #F2F3F9; 
                margin-top: 10px;
                /* width: 100%;
                padding: 0 0 0 10px; */
            }
            .nav-link{
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 22px;
                line-height: 27px;
                display: flex;
                align-items: center;
                color: #343D66 !important;
                border-bottom: 1px solid #343D66 !important;  
                width: 100%;
                padding: 15px 10px;
            }
            .bottom{
                    border-bottom: none !important;
            }
        }
        @media screen and (max-width: 370px){
           
            .container{
                max-width:100% !important;
                padding-left:0px;
                padding-right:0px;
                .navbar-brend{
                    padding-left:10px;
                    padding-right:0px;
                }
                .nav-link{
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 22px;
                line-height: 27px;
                display: flex;
                align-items: center;
                color: #343D66 !important;
                border-bottom: 2px solid gray;  
                width: 100%;
                padding: 15px 10px;
            }
                button{
                    margin-left:10px;
                    margin-right:10px;
                }
            }
            .navbar-nav{
                background: #F2F3F9; 
                margin: 15px 0 0 0;
                /* width: 100%;
                padding: 0 0 0 10px; */
            }
            .nav-link{
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 22px;
                line-height: 27px;
                display: flex;
                align-items: center;
                color: #343D66 !important;
                border-bottom: 2px solid gray;  
                width: 100%;
                padding: 15px 10px;
            }
            .bottom{
                border: none;
            }
        }
`
export default Navbar
