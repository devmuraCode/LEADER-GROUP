import React, { useState } from 'react'
import styled from 'styled-components'
import icon from '../images/icon.png'

const Our = () => {
    const [state, setstate] = useState(true)
    const [state2, setstate2] = useState(false)
    const [state3, setstate3] = useState(false)
    return (
        <div>
            <Section id="services">
                <div className="container">
                    <div id="two" className="d-flex align-items-center mb-lg-5 mb-sm-4">
                        <img src={icon} alt="" />
                        <h1 className="auu">Services</h1>
                    </div>
                </div>
            </Section>
            <Text>
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4"><button onClick={() => {
                            setstate(true)
                            setstate2(false)
                            setstate3(false)
                        }} className={state == false ? "nonee" : "btnn"}>System integration services</button></div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4"><button onClick={() => {
                            setstate(false)
                            setstate2(true)
                            setstate3(false)
                        }} className={state2 == false ? "nonee" : "btnn"}>Consulting services</button></div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4"><button onClick={() => {
                            setstate(false)
                            setstate2(false)
                            setstate3(true)
                        }} className={state3 == false ? "nonee" : "btnn"}>Project management</button></div>
                    </div>
                    <div className="header-text">
                        <div className={state == false ? "none" : "text-body"}>
                            <p>Enterprise integration services that help brands, their customers and employees become better connected to the digital experiences of today, and those coming tomorrow, all while delivering improved business results. Strategic business outcomes, technology optimization and ongoing organization enablement are key drivers of Leader Group’s system integration services, serving to achieve customer success. Key platform decisions, countless configuration options and far-reaching technology implications are challenges for even the most sophisticated companies. Our full-stack expertise transforms your goals into measurable results, so you choose well, navigate the landscape and avoid pitfalls. And because complexity demands flexibility, we’ll meet you where you are with a custom technology strategy based on your goals to breathe new agility into what you do. Defining KPIs and measuring how well your technology investments drive growth, attract and retain customers, protect and sustain your business and profitability long-term-that’s where we come in.
                                We facilitate new ways of thinking and working so you realize and sustain the true value of your technology. We take the complexity out of implementation with our Lean-agile principles, portable and repeatable architecture, and deployment frameworks. From mass cloud migration, to deploying AI and machine learning, to data privacy and security, together we’ll achieve your future-state today.
                            </p>
                        </div>
                        <div className={state2 == false ? "none" : "text-body"}>
                            <p>When companies need to transform their business, it takes more than technology. It takes the right people, applying the right processes, using the right data, working together to achieve shared success. We’re in it with you, creating sustainable solutions that keep your business forward-thinking and owning what’s next. We dig in deeply to understand your business, your culture, your operations and challenges. Define the metrics that matter most to your shareholders, stakeholders and customers. Then, working side by side with your internal teams, we’ll make sure your vision and goals are powered by the right technology and a clear plan to make it happen. Together, we’ll optimize your ability to sense and respond to market realities by improving end-user experiences, streamlining operations and reducing total cost of ownership. Our approach—think global, activate local. We keep deep relationships with top talent across the globe while having an intimate understanding of local market needs.
                            </p>
                        </div>
                        <div className={state3 == false ? "none" : "text-body"}>
                            <p>When companies are implementing new business solutions, reengineering processes, constructing a new building, transforming their digital systems, or undertaking any other type of project, having the right project management team at the helm can make all the difference in how smoothly the project goes and whether or not it stays on budget and timeline. We provide professional project management consulting services, so organizational projects have a much better chance of succeeding and staying on budget, on time, and achieving the desired results. Our trained project consultants provide sustainability and successful realization of the project, by following specific project management methodologies and using experience in organizing all the moving parts that go along with managing a project.
                            </p>
                        </div>
                    </div>
                </div>
            </Text>
        </div>
    )
}
const Section = styled.div`
     padding: 120px 0 30px 0;

    h4{
        font-family: 'Inter', sans-serif;
        margin: 0 0 30px 0;
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 135%;
        display: flex;
        align-items: center;
        color: #171717;
    }
    p{
        font-family: Inter;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 135%;
        display: flex;
        align-items: center;
        color: #171717;
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
    .text-body{
        line-height: 96px;
        margin: 50px 0;
    }
    @media screen and (max-width: 478px){
        padding: 2em 0;
        #two{
            padding: 0;
        }
    }
    @media screen and (max-width: 768px){
        .auu{
            font-family: 'Inter',sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 39px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-align-items: center !important;
            -webkit-box-align: center !important;
            -ms-flex-align: center !important;
            align-items: center !important;
            color: #171717;
        }
    }
`
const Text = styled.div`
        background: #F2F4F9;
        .none {
            display: none !important;
        }  
        .nonee{
                background: #EAEAEA !important;
                border: none;
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 22px;
                line-height: 135%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #171717;
                width: 100%;
                height: 60px;
        }
        .row{
            .col-4{
                padding-right: 2px !important;
            padding-left: 2px !important;
            }
        }
        .btnn{
            background: #FED652;
            border: none;
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 135%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #171717;
            width: 100%;
            height: 60px;
            
        } 
        .header-text{
            padding: 60px 0;
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 135%;
            align-items: center;
            color: #171717;
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

        @media screen and (max-width: 1024px){
            .row{
            .col-4{
                padding-right: 2px !important;
            padding-left: 2px !important;
            }
        }
            .none {
            display: none !important;
        }  
        .nonee{
                background: #EAEAEA !important;
                border: none;
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 135%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #171717;
                width: 100%;
                height: 60px;
        }
        .btnn{
            background: #FED652;
            border: none;
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 135%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #171717;
            width: 100%;
            height: 60px;
            
        } 
        }
        @media screen and (max-width: 768px){
            .row{
            .col-4{
                padding-right: 2px !important;
            padding-left: 2px !important;
            }
        }
            /* padding: 120px 0 3 0px 0; */
            .nonee{
                width: 100%;
                height: 60px;
                background: #EAEAEA !important;
                border: none;
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 135%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #171717;
            }
            .btnn{
                width: 100%;
                height: 60px;
                background: #FED652;
                border: none;
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 135%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #171717;          
        }
        .header-text{
            padding: 30px 0;
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 135%;
            align-items: center;
            color: #171717;
        }
        }     

        @media screen and (max-width: 542px){
            padding: 120px 0 3 0px 0;
            .row{
            .col-4{
                padding-right: 2px !important;
            padding-left: 2px !important;
            }
        }
            .nonee{
                width: 100%;
                height: 60px;
                background: #EAEAEA !important;
                border: none;
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 135%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #171717;
            }
            .btnn{
                width: 100%;
                height: 60px;
                background: #FED652;
                border: none;
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 135%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #171717;          
        }
        .header-text{
            padding: 30px 0;
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 135%;
            align-items: center;
            color: #171717;
        }
        }
        @media screen and (max-width: 989px){
            .row{
            .col-4{
                padding-right: 2px !important;
            padding-left: 2px !important;
            }
        }
            .nonee{
                width: 100%;
                height: 60px;
                background: #EAEAEA !important;
                border: none;
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 135%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #171717;
            }
            .btnn{
                width: 100%;
                height: 60px;
                background: #FED652;
                border: none;
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 135%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #171717;          
        }
        .header-text{
            padding: 30px 0;
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 135%;
            align-items: center;
            color: #171717;
        }
        }
        
        @media screen and (max-width: 542px){
            padding: 120px 0 3 0px 0;
            .row{
            .col-4{
                padding-right: 2px !important;
            padding-left: 2px !important;
            }
        }
            .nonee{
                width: 100%;
                height: 60px;
                background: #EAEAEA !important;
                border: none;
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 135%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #171717;
            }
            .btnn{
                width: 100%;
                height: 60px;
                background: #FED652;
                border: none;
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 135%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #171717;          
        }
        .header-text{
            padding: 30px 0;
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 135%;
            align-items: center;
            color: #171717;
        }
        }
        @media screen and (max-width: 375px){
            padding: 20px 0 0 0;
            .row{
            .col-4{
                padding-right: 2px !important;
            padding-left: 2px !important;
            }
        }
            .nonee{
                width: 100%;
                height: 60px;
                background: #EAEAEA !important;
                border: none;
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 135%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #171717;
            }
            .btnn{
                width: 100%;
                height: 60px;
                background: #FED652;
                border: none;
                font-family: 'Inter', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 135%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #171717;          
        }
        .header-text{
            padding: 30px 0;
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 135%;
            align-items: center;
            color: #171717;
        }
        }
`
export default Our
