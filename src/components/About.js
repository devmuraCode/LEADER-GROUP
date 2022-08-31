import React from 'react'
import icon from '../images/icon.png'
import plus from '../images/pluse.svg'
import aboutright from '../images/aboutright.jpg'
import styled from 'styled-components'

const About = () => {
    return (
        <Section id="about">
            <div className="container">
                <div className="d-flex align-items-center my-5">
                    <img src={icon} alt="" />
                    <h5>About Us</h5>
                </div>
                <div id="row" className="row d-flex justify-content-between align-items-center">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Who are we?
                                        <div className="pluse"></div>
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Leader Group EU LLC is a consulting, project leadership and know-how hub company which develops quality technology solutions, provide reliable support and offer exclusive project management services for many different types of organization. We offer complete systems integration in areas such as networking, remote communications, web application development, custom training and Internet solutions.

                                            We oversee the project throughout its’ entire life span and implement leading international methodologies and tools to achieve best results and to create a single point of accountability for the entire project realization process, by which we guarantee the quality and continuity of results at any stage of the work process.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Our team
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Leader Group EU LLC is a consulting, project leadership and know-how hub company which develops quality technology solutions, provide reliable support and offer exclusive project management services for many different types of organization. We offer complete systems integration in areas such as networking, remote communications, web application development, custom training and Internet solutions.

                                            We oversee the project throughout its’ entire life span and implement leading international methodologies and tools to achieve best results and to create a single point of accountability for the entire project realization process, by which we guarantee the quality and continuity of results at any stage of the work process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                        <div className="bac ms-lg-5">
                            <img src={aboutright} className="img-fluid" alt="" />
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
    .accordion-item{
        border-left: none;
        border-right: none;
        
    }
.accordion-header{   
   button{
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 32px;
        line-height: 39px;
        display: flex;
        align-items: center !important;
        color: #171717;
        box-shadow: none !important;
    }   
}
.accordion-body{
    p {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 16px !important;
        display: flex;
        line-height: 135%;
        color: #7D7D7D;
        align-items: center;
    }
   }
   .accordion-button::after {
    flex-shrink: 0;
    width: 1.50rem;
    height: 1.50rem;
    margin-left: auto;
    content: "";
    background-image: url(${plus});
    background-repeat: no-repeat;
    background-size: 1.25rem;
    transition: transform .2s ease-in-out;
}
.accordion-button:not(.collapsed) {
    background-color: white !important;
}
.accordion-button:not(.collapsed)::after {
    background: yellow;
    width: 30px;
    height: 2px;
    transform: rotate(
180deg);
}

/* Media для телефона */
    @media screen and (max-width: 500px){
        padding: 1em 0;
        h5{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 39px;
            display: flex;
            align-items: center !important;
            color: #171717;
        }
        .bac{
            margin-top: 1.5em;
        }
    }
/* media для iPad */
    @media screen and (max-width: 768px){
        padding: 1em 0;
        h5{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 39px;
            display: flex;
            align-items: center !important;
            color: #171717;
        }
        h1{            
            /* font-family: Inter;
            font-style: normal; */
            font-weight: 500;
            font-size: 24px;
            line-height: 110%;
            color: #171717;
        }
        .sistem{
            margin: 0 0 0 15px;
        }
        .lyrics{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 135%;
            color: #7D7D7D;
        }
        .bac{
            margin: 1.5em 0;
            text-align: center;
        }
    }
/* Media для iPad pro */
@media screen and (max-width: 1077px){
    padding: 2em 0;
    #row{
        display: block !important;
        width: 100% !important;
    }
    .bac{
            margin: 1.5em auto;
            text-align: center;
        }
}
@media screen and (max-width: 475px){
    .accordion-header{   
   button{
        outline: none !important;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 39px;
        display: flex;
        align-items: center !important;
        color: #171717;
        color: black;
    }   
}
.accordion-body{
    p {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 15px !important;
        display: flex;
        line-height: 135%;
        color: #7D7D7D;
        align-items: center;
    }
   }
   .bac{
       width: 100%;
       padding: 0;
   }
}
`
export default About
