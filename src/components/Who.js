import React from 'react'
import styled from 'styled-components'
import whoright from '../images/whoright.jpg'
import ourleft from '../images/ourleft.jpg'
import icon from '../images/icon.png'

const Who = () => {
    return (
        <Section>
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div id="two" className="d-flex align-items-center">
                            <img src={icon} alt="" />
                            <h5>Who are we?</h5>
                        </div>
                        <div className="lyrics">
                            <p>
                                Leader Group EU LLC is a consulting, project leadership and know-how hub company which develops quality technology solutions, provide reliable support and offer exclusive project management services for many different types of organization. We offer complete systems integration in areas such as networking, remote communications, web application development, custom training and Internet solutions.
                            </p>
                            <p>
                                We oversee the project throughout its’ entire life span and implement leading international methodologies and tools to achieve best results and to create a single point of accountability for the entire project realization process, by which we guarantee the quality and continuity of results at any stage of the work process.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img src={whoright} id="pere" className="img-fluid" alt="" />
                        <img src={ourleft} id="perem" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </Section>
    )
}
const Section = styled.div`
    padding: 5em 0;
    #perem{
        display: none;
    }
   
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
    .lyrics{
        width: 80%;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 135%;
        color: #171717;
    }
    #two{
            padding: 2em 0;
        }
    @media screen and (max-width: 500px){
        padding: 2em 0;
        #perem{
            display: block;
        }
        #pere{
        display: none;
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
    .lyrics{
        width: 100%;
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
        padding: 2em 0;
        #perem{
            display: block;
        }
        #pere{
        display: none;
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
    .lyrics{
        width: 100%;
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
    @media screen and (max-width: 1024px){
        h5{
        margin: 0 0 0 0.5em;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        line-height: 39px;
        display: flex;
        align-items: center;
        color: #171717;
    }
    .lyrics{
        width: 100%;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 135%;
        color: #171717;
    }
    }
    @media screen and (max-width: 475px){
        padding: 1em 0;
        #two{
            margin: 0;
        }
    }
`
export default Who
