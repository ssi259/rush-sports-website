import React, { useState,useEffect } from "react";
import axios from 'axios';
import goalpost from "./../assets/goalpost.png";
import { useNavigate } from "react-router-dom";
    
const ContactModal = () => {
    const [contactDetails, setContactDetails] = useState({})
    const navigate = useNavigate()

    const handle = (e) => {
        const newContactDetails = {...contactDetails}
        newContactDetails[e.target.id] = e.target.value
        setContactDetails(newContactDetails)
    }

    const submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/leads', contactDetails) 
        .then(res => {
            alert('Thank you for your submission,we will get back to you shortly')
            navigate('/')
            })
        .catch(err => {
            alert(err.response.data.message)
        }
        )
    }
    return(
        <div style={{
            display: 'flex',
            marginLeft:"10%",
            marginRight:"10%",
        }} >
            <div onClick={()=>navigate('/')} class="backBtn">
                <span class="line tLine"></span>
                <span class="line mLine"></span>
                <span class="label">Back</span>
                <span class="line bLine"></span>
            </div>
            <div
            style={{
                width: '70%',
                margin: 'auto',

            }}
             >
                <img width="100%" src={goalpost} alt="" />
            </div>
            <div 
            style={{
                width: '80%',
                margin: 'auto',
            }}
            >
                <h1 style={{fontWeight:700}} >Share your details,we will call you</h1>
                <p>Join Rush today and increase your reach to thousands of enrolled player on
                    our app and grow your coaching business.
                </p>
                    <div
                    style={{
                        display: 'flex',
                        gap: '10%',
                    }}
                    >
                    <input style={{ marginTop: "2%", padding: "10px" }}  width="40%" type="text" placeholder="First Name" className="form-control" id="first_name" onChange={handle} />
                    <input style={{ marginTop: "2%", padding: "10px" }}  width="40%" type="text" placeholder="Last Name" className="form-control" id="last_name" onChange={handle} />
                    </div>
                    <input style={{marginTop:"2%",padding:"10px"}} type="text" placeholder="Email ID" className="form-control" id="email_id" onChange={handle} />
                    <input style={{ marginTop: "2%",padding:"10px" }} type="text" placeholder="Phone Number" className="form-control" id="mobile_number" onChange={handle} />
                    <textarea style={{ marginTop: "2%",padding:"10px" }} type="text" placeholder="Description" className="form-control" id="description" onChange={handle} />
                <button style={{ marginTop: "2%", padding: "10px", width: "100%",color:"white",fontSize:"20px",fontWeight:500, background:"#2847CC" }} onClick={submit} className="btn btn-primary">Submit</button>
            </div>
        </div>
    )
}
export default ContactModal;