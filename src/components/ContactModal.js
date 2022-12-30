import React, { useState,useEffect } from "react";
function ContactModal({closeModal}){
    const initialValues = { 
        name: "",
        phone_number: "",
        message: "",
        email: "",
    };
    const [data,setData] = useState(initialValues)
    useEffect(()=>{
    },[])
    function handle(e){
        const newData = {...data}
        newData[e.target.name] = e.target.value
        setData(newData)
    }
    async function submit(e){
        e.preventDefault();
        const contact_data = {
                name: data.name,
                phone_number: data.phone_number,
                message: data.message,
                email: data.email,
            }
            console.log(contact_data,"contact submitted successfully")
            {closeModal(false)} 
        
    }
    return(
        
        <div  className = "modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={()=>{closeModal(false)}}>X</button>
                </div>
                <form>
                    <div className="overlay">
                        <div className="form-group row">
                            <label htmlFor="name" className="col-sm-2 label">Name</label>
                            <div className="col-sm-10">
                            <input onChange={(e)=>handle(e)} id = "name" className="form-control" value= {data.name} name = "name" placeholder="Name"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-2 label">Email</label>
                            <div className="col-sm-10">
                            <input onChange={(e)=>handle(e)} id = "email" className="form-control" value= {data.email} name = "email" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="phone_number" className="col-sm-2 label">phone_number</label>
                            <div className="col-sm-10">
                            <input onChange={(e)=>handle(e)} id = "phone" className="form-control" value= {data.phone_number} name = "phone_number" placeholder="Phone Number"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="message" className="col-sm-2 label">message</label>
                            <div className="col-sm-10">
                            <textarea onChange={(e)=>handle(e)} name="message" className="form-control" id="about-coach" placeholder="Message"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary"  onClick={ (e)=> submit(e)}>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactModal;