import React from 'react'
import header from '../images/header.jpg'
import headersm from '../images/headersm.jpg'
import styled from 'styled-components'

const Header = () => {
    return (
        <Head>
            <div className="container-xl">
                <div className="card-border">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Leader Group</h4>
                            <p class="card-text">Enterprise integration services that help brands, their customers and employees become better connected to the digital experiences of today, and those coming tomorrow, all while delivering improved business results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Head>
    )
}
const Head = styled.div`
    background: url(${header}) no-repeat center center/cover;
    height: 85vh;
    display: flex;
    align-items: center;

    .card{
        width: 731px;
        position: relative;
        background: #353E67 !important;
        padding: 3em 2em;
        opacity: 0.7;
        border-right: 4rem solid #5d6aa6;
        /* opacity: 0.5; */
        h4{
            font-family: 'Inter', sans-serif;
            font-weight: normal;
            font-size: 72px;
            line-height: 87px;
            display: flex;
            align-items: center;
            color: #FFFFFF;
        }
        .card-text{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 135%;
            display: flex;
            align-items: center;
            color: #FFFFFF;
        }
    }
    .card-border{
        /* position: absolute; */
        width: 731px;
        border-bottom: 1em solid yellow;
    }
    @media screen and (max-width: 500px) {
        background: url(${headersm}) no-repeat center center/cover fixed;
        /* height: 80vh !important; */
        display: flex;
        align-items: flex-end !important;
        .card-border{
        width: 100% !important;
        border-bottom: 0.5em solid yellow;
        }
        .card{
        width: 100% !important;
        position: relative;
        background: #353E67 !important;
        padding: 1em 0.5em !important;
        border: none !important; 
        opacity: none !important;
        h4{
            font-family: 'Inter', sans-serif;
            font-weight: normal;
            font-size: 44px !important;
            line-height: 53px;
            display: flex;
            align-items: center;
            color: #FFFFFF !important;
        }
        .card-text{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 16px !important;
            line-height: 135%;
            display: flex;
            align-items: center;
            color: #FFFFFF;
        }
        }
    }
    @media screen and (max-width: 768px){
        background: url(${headersm}) no-repeat center center/cover fixed;
        /* height: 95vh !important; */
        display: flex;
        align-items: flex-end !important;
        .card-border{
        /* position: absolute; */
        width: 100% !important;
        border-bottom: 0.5em solid yellow;
        }
        .card{
        width: 100% !important;
        /* height: 270px; */
        position: relative;
        background: #353E67 !important;
        padding: 1em 0.5em !important;
        border: none !important; 
        opacity: none !important;
        h4{
            font-family: 'Inter', sans-serif;
            font-weight: normal;
            font-size: 44px !important;
            line-height: 53px;
            display: flex;
            align-items: center;
            color: #FFFFFF !important;
        }
        p{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 20px !important;
            line-height: 135%;
            display: flex;
            align-items: center;
            color: #FFFFFF;
        }
        }
    }
    @media screen and (max-width: 1024px){
        background: url(${headersm}) no-repeat center center/cover;
        width: 100%;
        height: 70vh !important;
        display: flex;
        align-items: flex-end !important;
        
    .card{
        width: 100% !important;
        position: relative;
        background: #353E67 !important;
        padding: 3em 2em;
        opacity: 0.7;
        border-right: 4rem solid #5d6aa6;
        /* opacity: 0.5; */
        h5{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 72px;
            line-height: 87px;
            display: flex;
            align-items: center;
            color: #FFFFFF;
        }
        p{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 135%;
            display: flex;
            align-items: center;
            color: #FFFFFF;
        }
    }
    .card-border{
        /* position: absolute; */
        width: 100% !important;
        border-bottom: 1em solid yellow;
    }
    }
    @media screen and (max-width: 368px){
        .card{
        width: 100% !important;
        position: relative;
        background: #353E67 !important;
        padding: 2em 1em;
        opacity: 0.7;
        border-right: 4rem solid #5d6aa6;
        /* opacity: 0.5; */
        .card-title{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 26px !important;
            display: flex;
            align-items: center;
            color: #FFFFFF;
        }
        .card-text{
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 135%;
            display: flex;
            align-items: center;
            color: #FFFFFF;
        }
    }
    }
`
export default Header
