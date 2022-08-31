import React, {useRef} from 'react'
import styled from 'styled-components'
import logo from '../images/logofooter.jpg'
import emailjs from 'emailjs-com';

const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o91ddys', 'template_zszsw6e', form.current, 'user_ywtgbqpjSqZql3o6RcgOi')
            .then((result) => {
                console.log(result.text);
                document.getElementById("form").reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-1 col-md-6 col-sm-6" id="contact">
                        <img src={logo} alt="logo" className="img-fluid"/>
                        <h1 className="block ms-3">Contact whith us</h1>
                    </div>
                    <div id="locate" className="col-lg-3 col-md-6 col-sm-6">
                        <h4 className="title">Location</h4>
                        <p>29 Bulgaria str., Ravda, Burgas, Bulgaria</p>
                    </div>
                    <div id="email" className="col-lg-3 col-md-6 col-sm-6">
                        <h4 className="title">E-mail</h4>
                        <a className="meil" href="mailto:info@leader-group.org">info@leader-group.org</a>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-6">
                        <h1 className="dnone">Contact whith us</h1>
                            <form ref={form} id="form" className="input-group d-flex" onSubmit={sendEmail}>
                                <input type="email" name='email' className="form-control" placeholder="E-mail"/>
                                <button type='submit' className="btn">Send</button>
                            </form>
                    </div>
                </div>
            </div>
        </Section>
    )
}
const Section = styled.div`
  background: linear-gradient(2.83deg, #F2F3F9 2.35%, rgba(255, 255, 255, 0) 97.65%);
  padding: 2em 0;

  .block {
    display: none;
  }

  .row {
    display: flex;
    /* height: 221px; */
    /* justify-content: center !important;  */
    align-items: center;
  }

  .btn {
    background-color: #343D66; /* Green */
    border-bottom: 2px solid yellow;
    width: 230px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 139.18%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    box-shadow: none !important;
    box-shadow: none !important;
    &:hover{
      background: #FED652 !important;
    }
  }

  .col-md-6 {
    .form-control {
      border: 1px solid #F0F0F0;
      box-sizing: border-box;
      box-shadow: none;
      width: 290px;
    }

    .none {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 28px !important;
      line-height: 44px;
      display: flex;
      align-items: center;
      color: #171717;
    }

    .title {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 28px;
      line-height: 34px;
      display: flex;
      align-items: center;
      color: #343D66;
    }

    p {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 135%;
      display: flex;
      margin: 0 auto;
      align-items: center;
      color: #171717;
    }
    a{
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 135%;
      display: flex;
      align-items: center;
      color: #171717;
      text-decoration: none !important;
    }
  }

  @media screen and (max-width: 655px) {
    /* .dnone {
      display: none;
    } */

    /* .block {
      display: block;
      font-size: 26px !important;
    } */

    #contact {
      display: flex !important;
      order: -1;
    }

    h1 {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 28px !important;
      line-height: 44px;
      display: flex;
      align-items: center;
      color: #171717;
    }

    .title {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      color: #343D66;
    }

    p {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 135%;
      display: flex;
      margin: 0 auto;
      align-items: center;
      color: #171717;
    }
    a{
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 135%;
      margin: 0 59px !important;
      display: flex;
      color: #171717;
      text-decoration: none !important;
    }

    .col-lg-3 {
      display: flex;
      /* justify-content: space-between; */

      h1 {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 28px !important;
        line-height: 44px;
        display: flex;
        align-items: center;
        color: #171717;
      }

      .title {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #343D66;
      }

      p {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 135%;
        display: flex;
        margin: 0 auto;
        align-items: center;
        color: #171717;
      }
      a{
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 135%;
      display: flex;
      margin: 0 auto;
      align-items: center;
      color: #171717;
      text-decoration: none !important;
    }
    }

    #email {
      order: -1 !important;
    }

    #locate {
      order: 0;
    }

    .btn {
      width: 100%;
      margin-top: 0.5em;
    }

    .col-sm-6 {
      margin: 10px 0;
    }
    .btn {
    background-color: #343D66; /* Green */
    border-bottom: 2px solid yellow;
    /* width: 230px; */
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 139.18%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }
  .img-fluid{
    
  }
  }


  @media screen and (max-width: 350px) {
    padding: 2em 0 !important;
   
    h1 {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 26px !important;
      line-height: 44px;
      display: flex;
      justify-content: start;
      align-items: center;
      color: #171717;
    }
    .title {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 28px !important;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #343D66;
      }
    p{
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px !important;
      line-height: 135% !important;
      margin: 0 0 0 3em !important;
      display: flex;
      justify-content: end !important;
      /* align-items: center; */
      color: #171717;
      width: 327px;
    }
      a{
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 135%;
      display: flex;
      justify-content: space-evenly;
      margin: 0 37px !important;
      color: #171717;
      text-decoration: none !important;
    }
     .dnone {
      display: none !important;
    }

    .block {
      display: block !important;
    }
  }
  @media screen and (max-width: 989px) {
    /* height: 410px;     */
    padding: 2em 0;
    h1 {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      line-height: 44px;
      display: flex;
      align-items: center;
      color: #171717;
    }
  }
  @media screen and (max-width: 375px){
    p{
      margin-left: 2.5em !important;
    }
  }
`
export default Footer
