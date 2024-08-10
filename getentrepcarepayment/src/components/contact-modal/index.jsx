import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import 'react-phone-number-input/style.css';
import { Wrapper, Container, Header, Body } from "./index.styled";
import PhoneInput from "react-phone-number-input/react-hook-form";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const titles = {
  "psychoanalytic-assessment": "Enter your onboarding code",
  "buy-for-myself": "Fill details to get the payment link",
  "b2b-partnership": "Contact Form for B2B Partnerships",
  "gift-for-friend": "Gift recepient's details"
};

const ContactModal = ({ setModalOpen, type, formHeader, setFormHeader }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();

  const [submitted, setSubmitted] = useState(false);
  const [title] = useState(titles[type]);
  const [isLoading, setIsLoading] = useState(false);

  const BuyForMeUi = () => {
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycby00ghf-oxnioYn_p9on_TsQmet_--qvSCeA7PcxXYiDUEWnEdPNW1X7oZlMRp8xsVS/exec"

    const onSubmit = (formData) => {
      setIsLoading(true);

      const data = new FormData();
      data.append("module", formHeader["module"])
      data.append("subModule", formHeader["subModule"])
      data.append("name", formData["name"])
      data.append("email", formData["email"])
      data.append("phone", formData["phone"])
      data.append("linkedin", formData["linkedin"])

      fetch(scriptUrl, {
        method: 'POST',
        body: data,
      }).then(res => {
        if (res.status == 200) {
          setSubmitted(true)
          setIsLoading(false)
        }
      }).catch(err => console.log(err))
    }

    if (!submitted) {
      return (
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Full Name <span style={{ color: 'red'}}>*</span></label>
            <input
              type="text" id="name" placeholder=''
              {...register("name", {
                required: {
                  value: true,
                  message: "Enter your name",
                },
              })}
            />
            {errors?.name?.type === "required" && <p>This field is required</p>}
          </div>

          <div>
            <label>Email <span style={{ color: 'red'}}>*</span></label>
            <input
              placeholder=""
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "",
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter valid email format",
                },
              })}
            />
            {errors?.email?.type === "required" && <p>This field is required</p>}
          </div>
          
          <div>
            <label>Whatsapp Number <span style={{ color: 'red'}}>*</span></label>
            <div className="phoneContainer">
              <PhoneInput
                name="phone"
                control={control}
                rules={{ required: true }}
                defaultCountry="IN" />
            </div>
            {errors?.phone?.type === "required" && <p>This is required.</p>}           
          </div>

          <div>
            <label>Your Linkedin <span style={{ color: 'red'}}>*</span></label>
            <input
              placeholder="Please share the profile link"
              type="text"
              {...register("linkedin", {
                required: {
                  value: true,
                  message: "",
                },
              })}
            />
            {errors?.linkedin?.type === "required" && <p>This field is required</p>}
          </div>
          { isLoading ? <button disabled>...Submitting</button> : <button>Submit</button> }
          
        </form>
      );
    } else {
      return <>
        <div className="thankYou">
          <h1>Thank you</h1>
          <h2>You will recieve the Payment link and Invoice to your email.</h2>
        </div>
      </> 
    }
  };

  const AssesmentUi = () => {
    return (
      <div className="psychoanalytic-assessment">
        {/* <p>Please enter your onboarding code here</p> */}
        <form>
          <input disabled></input>
          <button disabled>Submit</button>
        </form>
        {/* <FaWhatsappSquare /> */}
        <span>
          Don't have a code? 
        </span>
        <span>  
          Contact Us &nbsp;
          <FontAwesomeIcon icon={faWhatsapp} size="1x"/>&nbsp;
          +91 9002330471
        </span>
        {/* <FloatingWhatsApp
          phoneNumber="+919002330471"
          accountName="Sumedh"
        /> */}
        {/* <FaWhatsapp /> */}
      </div>
    );
  };


  const BusinessPartnershipUi = () => {
    const scriptUrl = "https://script.google.com/macros/s/AKfycby0uihYfyoO9OokI8v8MCK66RSFVURXmKABr7LXt0gZStPZBWWTVsPB2vf3gUbCFDlI/exec";

    const onSubmit = (formData) => {
      setIsLoading(true);

      console.log(formData);

      const data = new FormData();
      data.append("userType", formData["userType"])
      data.append("website", formData["website"])
      data.append("email", formData["email"])
      data.append("phone", formData["phone"])
      data.append("message", formData["message"])

      fetch(scriptUrl, {
        method: 'POST',
        body: data,
      }).then(res => {
        if (res.status == 200) {
          setSubmitted(true)
          setIsLoading(false)
        }
      }).catch(err => console.log(err))
    }

    if(!submitted) {
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Identify Yourself <span style={{ color: 'red'}}>*</span></label>
            <select
              defaultValue=""
              name="userType"
              {...register("userType", { required: true })}
            >
              <option value="" disabled>Select Option</option>
              <option value="venture-capitalist">Venture Capital Firms</option>
              <option value="government-agencies">Government Agencies & Development Programs</option>
              <option value="angels">Angels & Angel Networks</option>
              <option value="industry-associations">Industry Associations</option>
              <option value="co-working">Co-working Spaces</option>
              <option value="business-consultancy">Business Consultancies</option>
              <option value="ngos">NGOs fostering Entrepreneurship</option>
              <option value="startup-event-organisers">Startup Event Organisers</option>
              <option value="professional-networks">Professional Networks</option>
              <option value="incubators-or-accelerators">Incubators / Accelerators</option>
              <option value="students">Universities</option>
              <option value="trust-or-foundation">Trust & Foundation</option>
              <option value="corporate-innovation">Corporate Innovation Labs</option>
            </select>
            {errors?.userType?.type === "required" && <p style={{ color: 'red' }}>This field is required</p>}        
          </div>
  
          <div>
            <label>Website <span style={{ color: 'red'}}>*</span></label>
            <input
              placeholder=""
              type="text"
              {...register("website", {
                required: {
                  value: true,
                  message: "",
                },
              })}
            />
            {errors?.website?.type === "required" && <p style={{ color: 'red' }}>This field is required</p>}
          </div>
  
          <div>
            <label>Email <span style={{ color: 'red'}}>*</span></label>
            <input
              placeholder=""
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "",
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter valid email format",
                },
              })}
            />
            {errors?.email?.type === "required" && <p style={{ color: 'red' }}>This field is required</p>}
          </div>
  
          <div>
            <label>Whatsapp Number <span style={{ color: 'red'}}>*</span></label>
            <div className="phoneContainer">
              <PhoneInput
                name="phone"
                control={control}
                rules={{ required: true }}
                defaultCountry="IN" />
            </div>
            {errors?.phone?.type === "required" && <p style={{ color: 'red' }}>This is required.</p>}           
          </div>
  
          <div>
            <label>Specify the Areas of Interest for Collaboration <span style={{ color: 'red'}}>*</span></label>
            <textarea
              placeholder="Enter your message"
              className="message-input"
              type="text"
              {...register("message", {
                required: {
                  value: true,
                  message: "Enter your message",
                },
              })}
            />
            {errors?.message?.type === "required" && <p style={{ color: 'red' }}>This field is required</p>}
          </div>
          
          { isLoading ? <button disabled>...Submitting</button> : <button>Submit</button> }
        </form>
      );
    } else {
      return <>
        <div className="thankYou">
          <h1>Thank you</h1>
          <h2>Our Team will reach to you.</h2>
        </div>
      </>
    }

  };

  const GiftToFriendUi = () => {
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzdn2kU10Gidpsr_qsNUaQ65BwLBEKur57ahQw8lg5qj63oEQe5uTfg6DqckwwQW1wMeg/exec"

    const onSubmit = (formData) => {
      setIsLoading(true);

      const data = new FormData();
      data.append("module", formHeader["module"])
      data.append("subModule", formHeader["subModule"])
      data.append("beneficiaryName", formData["name"])
      data.append("beneficiaryEmail", formData["email"])
      data.append("beneficiaryPhone", formData["phone"])
      data.append("yourName", formData["yourName"])
      data.append("yourEmail", formData["yourEmail"])
      data.append("yourPhone", formData["yourPhone"])
      data.append("yourLinkedin", formData["yourLinkedin"])

      fetch(scriptUrl, {
        method: 'POST',
        body: data,
      }).then(res => {
        if (res.status == 200) {
          setSubmitted(true)
          setIsLoading(false)
        }
      }).catch(err => console.log(err))
    }

    if(!submitted) {
      return (
        <form className="giftForm" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Beneficiary's Full Name <span style={{ color: 'red'}}>*</span></label>
            <input
              type="text" id="name" placeholder=''
              {...register("name", {
                required: {
                  value: true,
                  message: "Enter your name",
                },
              })}
            />
            {errors?.name?.type === "required" && <p style={{ color: 'red' }}>This field is required</p>}
          </div>
          <div>
          <label>Beneficiary's Email <span style={{ color: 'red'}}>*</span></label>
            <input
              placeholder=""
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "",
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter valid email format",
                },
              })}
            />
            {errors?.email?.type === "required" && <p style={{ color: 'red' }}>This field is required</p>}
          </div>
  
          <div>
            <label>Beneficiary's Whatsapp Number <span style={{ color: 'red'}}>*</span></label>
            <div className="phoneContainer">
              <PhoneInput
                name="phone"
                control={control}
                rules={{ required: true }}
                defaultCountry="IN" />
            </div>
            {errors?.phone?.type === "required" && <p style={{ color: 'red' }}>This is required.</p>}    
          </div>        
          
          <h1>Please fill your details</h1>        
          <div>
            <label>Your Full Name <span style={{ color: 'red'}}>*</span></label>
            <input
              type="text" id="yourName" placeholder=''
              {...register("yourName", {
                required: {
                  value: true,
                  message: "Enter your name",
                },
              })}
            />
            {errors?.yourName?.type === "required" && <p style={{ color: 'red' }}>This field is required</p>}
          </div>
  
          <div>
            <label>Your Email <span style={{ color: 'red'}}>*</span></label>
            <input
              placeholder=""
              type="email"
              {...register("yourEmail", {
                required: {
                  value: true,
                  message: "",
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter valid email format",
                },
              })}
            />
            {errors?.yourEmail?.type === "required" && <p style={{ color: 'red' }}>This field is required</p>}
          </div>
  
          <div>
            <label>Your Whatsapp Number <span style={{ color: 'red'}}>*</span></label>
            <div className="phoneContainer">
              <PhoneInput
                name="yourPhone"beneficiary
                control={control}
                rules={{ required: true }}
                defaultCountry="IN" />
            </div>
            {errors?.yourPhone?.type === "required" && <p style={{ color: 'red' }}>This is required.</p>}           
          </div>
  
          <div>
            <label>Your Linkedin <span style={{ color: 'red'}}>*</span></label>
            <input
              placeholder="Please share the profile link"
              type="text"
              {...register("yourLinkedin", {
                required: {
                  value: true,
                  message: "",
                },
              })}
            />
            {errors?.yourLinkedin?.type === "required" && <p style={{ color: 'red' }}>This field is required</p>}
          </div>
  
          { isLoading ? <button disabled>...Submitting</button> : <button>Submit</button> }
        </form>
      );
    } else {
      return <>
        <div className="thankYou">
          <h1>Thank you</h1>
          <h2>You'll receive a Payment link and Invoice. After payment, the gift email with access will be sent to the Beneficiary.</h2>
        </div>
      </> 
    }


  };

  const renderUI = () => {
    switch (type) {
      case "psychoanalytic-assessment":
        return <AssesmentUi />;
      case "buy-for-myself":
        return <BuyForMeUi />;
      case "b2b-partnership":
        return <BusinessPartnershipUi />;
      case "gift-for-friend":
        return <GiftToFriendUi />;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <Container>
        <Header>
          { submitted ? <></>: (type === "psychoanalytic-assessment") ? <h1>{ title } <span style={{ color: 'red'}}>*</span></h1> : <h1>{ title }</h1> }
          <div className="close-button" onClick={() => setModalOpen(false)}>
            X
          </div>
        </Header>
        <Body>{renderUI()}</Body>
      </Container>
    </Wrapper>
  );
  };

export default ContactModal;
