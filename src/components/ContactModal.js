import React, { useState,useEffect } from "react";
function ContactModal({closeModal}){
    const initialValues = { 
        first_name: "",
        last_name: "",
        mobile_number: "",
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
                first_name: data.first_name,
                last_name: data.last_name,
                mobile_number: data.mobile_number,
                description: data.description,
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
                            <input onChange={(e)=>handle(e)} id = "first_name" className="form-control" value= {data.name} name = "first_name" placeholder="first_Name"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="last_name" className="col-sm-2 label">last_name</label>
                            <div className="col-sm-10">
                            <input onChange={(e)=>handle(e)} id = "last_name" className="form-control" value= {data.email} name = "last_name" placeholder="last_name"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-2 label">Email</label>
                            <div className="col-sm-10">
                            <input onChange={(e)=>handle(e)} id = "email" className="form-control" value= {data.email} name = "email" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="mobile_number" className="col-sm-2 label">mobile_number</label>
                            <div className="col-sm-10">
                            <input onChange={(e)=>handle(e)} id = "mobile" className="form-control" value= {data.mobile_number} name = "mobile_number" placeholder="mobile Number"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="description" className="col-sm-2 label">description</label>
                            <div className="col-sm-10">
                            <textarea onChange={(e)=>handle(e)} name="description" className="form-control" id="about-coach" placeholder="description"/>
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