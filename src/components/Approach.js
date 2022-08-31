import React from 'react'
import styled from 'styled-components'
import ourleft from '../images/257.jpg'
import img1 from '../images/image1.jpg'
import img2 from '../images/image3.jpg'
import icon from '../images/icon.png'

const Approach = () => {
    return (
        <Section id="approach">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center" id="header">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <img src={ourleft} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-5 col-md-12 col-12 mt-md-4">
                        <div id="two" className="d-flex align-items-center  mb-lg-2">
                            <img src={icon} alt="" />
                            <h5 className="auu">Our Approach:</h5>
                        </div>
                        <div className="lyrics">
                            <p>Knowing the local situation - by allocating time and resources to gather and gain information about the context and communities in which our services will be delivered.</p>
                            <p>Rely on real data – sometimes projects face insurmountable obstacles because lack of necessary information which is not collected on time. In our projects we gather and analyze existing data at the inception phase to make informed decisions and adjust the project plan so that it matches community needs.</p>
                            <p>Open technologies – we offer solutions that are open for further development and enhancement, and that have the potential for scalability without the risk of solution lock-in.</p>
                        </div>
                    </div>
                </div>

             
            </div>
        </Section>
    )
}
const Section = styled.div`
    padding: 5em 0;
    .card{
        background: url(${img1}) no-repeat right !important;
        height: 267px;
        width: 661px;
        border: 4px solid #343D66;
        box-sizing: border-box;
        transition: .5s;
        &:hover{
            border: 4px solid yellow;
        }
    }
    .cardd{
        background: url(${img2}) no-repeat right !important;
        height: 267px;
        width: 661px;
        margin: 0 0 0 2em;
        border: 4px solid #343D66;
        box-sizing: border-box;
        transition: .5s;
        &:hover{
            border: 4px solid yellow;
        }
    }
    .imag{
        background: linear-gradient(90deg, #FFFFFF 55.73%, rgba(255, 255, 255, 0) 100%) !important; 
        height: 260px;
    }
    .auu{
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
    .lyrics{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 135%;
        color: #171717;
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
        .cardd{
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
        width: 302px;
        border: 4px solid #343D66;
        box-sizing: border-box;
        
    }
    .cardd{
        background: url(${img2}) no-repeat right !important;
        width: 302px;
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
            font-size: 15px;
            line-height: 135%;
            color: #171717;
            width: 100%;
        }
    }
        .auu{
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
    .lyrics{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 135%;
        color: #171717;
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
        .auu{
        margin: 0 0 0 0.5em;
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 32px;
        line-height: 39px;
        display: flex;
        align-items: center;
        color: #171717;
    }
    .lyrics{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 135%;
        color: #171717;
    }
    #two{
        margin: 1em 0 0 0;
    }
    #card-group{
        margin: 3em auto;
        .cardd{
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
        .auu{
        margin: 0 0 0 0.5em;
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 32px;
        line-height: 39px;
        display: flex;
        align-items: center;
        color: #171717;
    }
    .lyrics{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 135%;
        color: #171717;
    }
    #two{
            padding: 1em 0;
        }
    #card-group{
        margin: 3em auto;
        .cardd{
            margin: 0 auto;
        }
    }  

    .card{
        background: url(${img1}) no-repeat right !important;
        position: relative;
        margin: auto;
        width: 450px;
        border: 4px solid #343D66;
        box-sizing: border-box;
        
    }
    .cardd{
        background: url(${img2}) no-repeat right !important;
        width: 450px;
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
    }   
    }
    @media screen and (max-width: 475px){
        padding: 1  em 0;
    .card{
        background: url(${img1}) no-repeat right !important;
        position: relative;
        margin: auto;
        width: 302px;
        border: 4px solid #343D66;
        box-sizing: border-box;
        
    }
    .cardd{
        background: url(${img2}) no-repeat right !important;
        width: 302px;
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
    }   
    #card-group{
        margin: 3em auto;
        .cardd{
            margin: 1em auto;
        }
    }  
    }
    @media screen and (max-width: 385px){
        padding: 1em 0;
    .card{
        background: url(${img1}) no-repeat right !important;
        position: relative;
        margin: auto;
        width: 272px !important;
        border: 4px solid #343D66;
        box-sizing: border-box;
        
    }
    .cardd{
        background: url(${img2}) no-repeat right !important;
        width: 272px !important;
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
    }   
    #card-group{
        margin: 3em auto;
        .cardd{
            margin: 1em auto;
        }
    }  
    }
    @media screen and (max-width: 991px){
        .card{
        background: url(${img1}) no-repeat right !important;
        position: relative;
        margin: auto;
        width: 450px;
        border: 4px solid #343D66;
        box-sizing: border-box;
        
    }
    .cardd{
        background: url(${img2}) no-repeat right !important;
        width: 450px;
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
    }   
    #card-group{
        margin: 3em auto;
        .cardd{
            margin: 1em auto;
        }
    }  
    }
`
export default Approach
