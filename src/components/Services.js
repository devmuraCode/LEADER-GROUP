import React from 'react'
import styled from 'styled-components'
import icon from '../images/icon.png'
import group1 from '../images/group1.svg'
import group2 from '../images/group2.svg'
import group3 from '../images/group3.svg'
import group4 from '../images/group4.svg'
import group5 from '../images/group5.svg'
import group6 from '../images/group6.svg'

const Services = () => {
    return (
        <Section id="values">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-4 col-sm-12">
                        <div id="two" className="d-flex align-items-center mb-lg-5">
                            <img src={icon} alt="" />
                            <h5>Values</h5>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <div className="grid">
                            <div class="grid-item">
                                <div className="cardd">
                                    <img src={group1} className="img-fluid" alt="" />
                                    <div className="card-body">
                                        <h4>Trust</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div className="cardd">
                                    <img src={group2} className="img-fluid" alt="" />
                                    <div className="card-body">
                                        <h4>Value-centricity</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div className="cardd">
                                    <img src={group3} className="img-fluid" alt="" />
                                    <div className="card-body">
                                        <h4>Value-centricity</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div className="cardd">
                                    <img src={group4} className="img-fluid" alt="" />
                                    <div className="card-body">
                                        <h4>Ingenuity</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div className="cardd">
                                    <img src={group5} className="img-fluid" alt="" />
                                    <div className="card-body">
                                        <h4>Professionalism</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div className="cardd">
                                    <img src={group6} className="img-fluid" alt="" />
                                    <div className="card-body">
                                        <h4>Improvement</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
const Section = styled.div`
    padding: 5em 0;
    h5{
        margin: 0 0 0 0.5em;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 42px;
        line-height: 51px;
        display: flex;
        align-items: center;
        color: #171717;
    }
    h4{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400 !important;
        font-size: 28px;
        line-height: 34px;
        text-align: center;
        color: #000000;
    }
    .grid {
  display: grid;
  grid-template-columns: auto auto auto;
}
.grid-item {
  padding: 20px;
  text-align: center;
}

    @media screen and (max-width: 768px){
        padding: 3em 0;
    #two{
        margin-bottom: 2em;
    }
        h5{
        margin: 0 0 0 0.5em;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 39px;
        display: flex;
        align-items: center;
        color: #171717;
    }
    h4{
        font-family: Inter;
        font-style: normal;
        font-weight: 700 !important;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        color: #000000;
    }
    .img-fluid{
        width: 60px;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 162px) !important;
        margin: 0 auto;
        text-align: center;
        }
        .grid-item {
            text-align: center;
            padding: 0;
         /* text-align: center; */
        }
    }

   
   

    @media screen and (max-width: 1094px){
        padding: 3em 0;
    #two{
        margin-bottom: 2em;
    }
        h5{
        margin: 0 0 0 0.5em;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 39px;
        display: flex;
        align-items: center;
        color: #171717;
    }
    h4{
        font-family: Inter;
        font-style: normal;
        font-weight: 700 !important;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        color: #000000;
    }
    .img-fluid{
        width: 80px;
    }
    .grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr) !important;
        margin: 0 auto;
        text-align: center;
        }
        .grid-item {
            text-align: center;
            padding: 0;
         /* text-align: center; */
        }
    }

  
    @media screen and (max-width: 725px){
        .grid{
        display: grid;
        grid-template-columns: 170px 170px 170px !important;
        margin: 0 auto;
        text-align: center;
        }
        .grid-item {
            text-align: center;
            padding: 0;
        }
    }
   
  
    @media screen and (max-width: 764px){
        .grid{
        display: grid;
        grid-template-columns: 256px 256px !important;
        margin: 0 auto;
        text-align: center;
        }
        .grid-item {
            text-align: center;
            padding: 0;
        }
        .img-fluid{
        width: 70px;
        }
    }
  

  
    @media screen and (max-width: 510px){
    padding: 3em 0;
    #two{
        margin-bottom: 2em;
    }
        h5{
        margin: 0 0 0 0.5em;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 39px;
        display: flex;
        align-items: center;
        color: #171717;
    }
    h4{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700 !important;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        color: #000000;
    }
    .img-fluid{
        width: 60px;
    }
    .grid{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr !important;
        margin: 0 auto;
        text-align: center;
        }
        .grid-item {
            text-align: center;
            padding: 0;
        }
    }
    @media screen and (max-width: 475px){
        .grid{
        display: grid;
        grid-template-columns: 1fr 1fr !important;
        margin: 0 auto;
        text-align: center;
        }
        .grid-item {
            text-align: center;
            padding: 0;
        }
    }
    @media screen and (max-width: 1465px){
        .grid{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr !important;
        margin: 0 auto;
        text-align: center;
        }
        .grid-item {
            text-align: center;
            padding: 0;
        }
        .img-fluid{
        width: 70px;
        }
    }
    @media screen and (max-width: 375px){
        .grid{
        display: grid;
        grid-template-columns: 1fr 1fr !important;
        margin: 0 auto;
        text-align: center;
        }
        .grid-item {
            text-align: center;
            padding: 0;
        }
        .img-fluid{
        width: 70px;
        }
    }

`
export default Services
