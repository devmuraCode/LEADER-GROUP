import React from 'react'
import styled from 'styled-components'
import ourleft from '../images/257.jpg'
import img1 from '../images/image1.jpg'
import img2 from '../images/image3.jpg'
import icon from '../images/icon.png'

const Cards = () => {
    return (
        <Section id="mission">
              <div className="container">
              <div id="card-group" className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="imag">
                                <div className="text">
                                    <h5 className="mission">Mission</h5>
                                    <p>
                                        Bringing technologies and results leading our customers to achieve greater competitive position through innovate ideas and continuous improvement of talent, processes and introduction of digital solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="card-two">
                            <div className="imag">
                                <div className="text">
                                    <h5 className="mission">Vision</h5>
                                    <p>
                                        Standing by our customers to win the challenges of change, improving competitiveness and achieving results thanks to value generation
                                    </p>
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
 background: #F2F4F9;
 padding: 4em 0;

    .card{
        background: url(${img1}) no-repeat right !important;
        height: 267px;
        width: 100%;
        border: 5px solid #343D66 !important;
        box-sizing: border-box;
        transition: .5s;
        overflow: hidden;
        &:hover{
            border: 5px solid yellow !important;
        }
    }
    .card-two{
        background: url(${img2}) no-repeat right !important;
        height: 267px;
        width: 100%;
        margin: 0 0 0 2em;
        border: 5px solid #343D66 !important;
        box-sizing: border-box;
        transition: .5s;
        overflow: hidden;
        &:hover{
            border: 5px solid yellow !important;
        }
    }
    .imag{
        background: linear-gradient(90deg, #FFFFFF 55.73%, rgba(255, 255, 255, 0) 100%) !important; 
        height: 260px;
        
    }
    .text{
        padding: 2.5em 2em;
        .mission{         
            font-family: 'Inter', sans-serif;
            font-weight: bold;
            font-size: 42px;
            line-height: 51px;
            color: #171717;
        }
        p{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 135%;
            color: #171717;
            width: 80%;
        }
    }
    #card-group{
        margin: 7em 0;
        .card-two{
            margin-top: 3em;
        }
    }
    #two{
            padding: 2aem 0;
        }



        @media screen and (max-width: 500px){
        padding: 2em 0;
        #card-group{
        margin: 3em auto;
        .cardd{
            margin-top: 1em;
        }
    }
        .card{
        background: url(${img1}) no-repeat right !important;
        position: relative;
        margin: auto;
        width: 100%;
        border: 4px solid #343D66;
        box-sizing: border-box;
        
    }
    .card-two{
        background: url(${img2}) no-repeat right !important;
        width: 100%;
        margin: auto;
        position: relative;
        border: 5px solid #343D66;
        box-sizing: border-box;
        /* transform: rotate(0deg); */
        
    }
    .imag{
        background: linear-gradient(160deg, #FFFFFF 55.73%, rgba(255, 255, 255, 0) 100%) !important; 
        height: 260px;
        transform: rotate(0deg);
        position: absolute;
        overflow: hidden;
    }

    .text{
        padding: 2.5em 2em;
        .mission{         
            font-family: 'Inter', sans-serif;
            font-weight: bold;
            font-size: 26px;
            line-height: 31px;
            color: #171717;
        }
        p{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 135%;
            color: #171717;
            width: 100%;
        }
    }
        .col-lg-7{
            order: 2;
        }
            #two{
                margin: 2em 0;
            }
    }
    @media screen and (max-width: 768px){
        .text{
        padding: 2.3em 2em;
        .mission{         
            font-family: 'Inter', sans-serif;
            font-weight: bold;
            font-size: 26px;
            line-height: 31px;
            color: #171717;
        }
        p{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 135%;
            color: #171717;
            width: 100%;
        }
    }
    #two{
        margin: 1em 0 0 0;
    }
    #card-group{
        margin: 3em auto;
        .card-two{
            margin: 1em 0;
        }
    }  
    }
    @media screen and (max-width: 1024px){
        padding: 2em 0;
        .text{
        padding: 2.3em 2em;
        .mission{         
            font-family: 'Inter', sans-serif;
            font-weight: bold;
            font-size: 26px;
            line-height: 31px;
            color: #171717;
        }
        p{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 135%;
            color: #171717;
            width: 100%;
        }
    }
    #two{
            padding: 1em 0;
        }
    #card-group{
        margin: 3em auto;
        .card-two{
            margin: 0 auto;
        }
    }  

    .card{
        background: url(${img1}) no-repeat right !important;
        position: relative;
        margin: auto;
        width: 100%;
        border: 4px solid #343D66;
        box-sizing: border-box;
        
    }
    .card-two{
        background: url(${img2}) no-repeat right !important;
        width: 100%;
        margin: auto;
        position: relative;
        border: 5px solid #343D66;
        box-sizing: border-box;
        /* transform: rotate(0deg); */
        
    }
    .imag{
        background: linear-gradient(160deg, #FFFFFF 55.73%, rgba(255, 255, 255, 0) 100%) !important; 
        height: 260px;
        transform: rotate(0deg);
        position: absolute;
        overflow: hidden;
    }   
    }
    @media screen and (max-width: 475px){
        padding: 1  em 0;
    .card{
        background: url(${img1}) no-repeat right !important;
        position: relative;
        margin: auto;
        width: 100%;
        border: 4px solid #343D66;
        box-sizing: border-box;
        
    }
    .card-two{
        background: url(${img2}) no-repeat right !important;
        width: 100%;
        margin: auto;
        position: relative;
        border: 5px solid #343D66;
        box-sizing: border-box;
        /* transform: rotate(0deg); */
        
    }
    .imag{
        background: linear-gradient(160deg, #FFFFFF 55.73%, rgba(255, 255, 255, 0) 100%) !important; 
        height: 270px !important;
        transform: rotate(0deg);
        position: absolute;
        overflow: hidden;
    }   
    #card-group{
        margin: 3em auto;
        .card-two{
            margin: 1em auto;
        }
    }  
    }
    @media screen and (max-width: 385px){
        background: none !important;
        padding:  0;
        .row>* {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .0);
    padding-left: calc(var(--bs-gutter-x) * .0);
    margin-top: var(--bs-gutter-y);
}
    .card{
        background: url(${img1}) no-repeat right !important;
        position: relative;
        margin: auto;
        width: 100% !important;
        border: 4px solid #343D66;
        box-sizing: border-box;
        
    }
    .card-two{
        background: url(${img2}) no-repeat right !important;
        width: 100% !important;
        margin: auto;
        position: relative;
        border: 5px solid #343D66;
        box-sizing: border-box;
        /* transform: rotate(0deg); */
        
    }
    .imag{
        background: linear-gradient(160deg, #FFFFFF 55.73%, rgba(255, 255, 255, 0) 100%) !important; 
        height: 250px !important;
        transform: rotate(0deg);
        position: absolute;
        overflow: hidden;
    }   
    #card-group{
        margin: 40px auto !important;
        .card-two{
            margin: 1em auto;
        }
    }  
    }
    @media screen and (max-width: 991px){
        .card{
        background: url(${img1}) no-repeat right !important;
        position: relative;
        margin: auto;
        width: 100%;
        border: 4px solid #343D66;
        box-sizing: border-box;
        
    }
    .card-two{
        background: url(${img2}) no-repeat right !important;
        width: 100%;
        margin: auto;
        position: relative;
        border: 5px solid #343D66;
        box-sizing: border-box;
        /* transform: rotate(0deg); */
        
    }
    .imag{
        background: linear-gradient(160deg, #FFFFFF 55.73%, rgba(255, 255, 255, 0) 100%) !important; 
        height: 260px !important;
        transform: rotate(0deg);
        position: absolute;
        overflow: hidden;
    }   
    #card-group{
        margin: 3em auto;
        .card-two{
            margin: 1em auto;
        }
    }  
    }
`
export default Cards
