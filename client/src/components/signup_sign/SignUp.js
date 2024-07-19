import React, { useState } from 'react';
import './signup.css';
import { Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const [udata,setUdata] = useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""
    });

    const adddata = (e)=>{
        const {name,value} = e.target;

        setUdata(()=>{
            return{
                ...udata,
                [name]:value
            }
        })
    }

    const senddata = async(e)=>{
        e.preventDefault();
        const {fname,email,mobile,password,cpassword} = udata;

        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-type": "application/json"
            },
            body:JSON.stringify({
                fname,email,mobile,password,cpassword
            })
        });
        const data = await res.json();
       // console.log(data);

       if(res.status === 422 || !data){
        //alert("no data")
        toast.warn('invalid details 👎!',{
            position:"top-center",
        })
       }else{
        //alert("data successfully added")
        toast.success('data successfully done 😃!',{
            position:"top-center",
        })
        setUdata({...udata,fname:"",email:"",mobile:"",password:"",cpassword:""});
       }
    }
    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form method='POST'>
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="name">Your name</label>
                            <input type="text" 
                            onChange={adddata}
                            value={udata.fname}
                            name="fname"

                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">email</label>
                            <input type="email" 
                            onChange={adddata}
                            value={udata.email}
                            name="email"

                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Mobile number</label>
                            <input type="number"
                            onChange={adddata}
                            value={udata.mobile}
                             name="mobile"

                                id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                            onChange={adddata}
                            value={udata.password}
                            name="password"
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="passwordg">Password again</label>
                            <input type="password"
                            onChange={adddata}
                            value={udata.cpassword}
                            name="cpassword"

                                id="password" />
                        </div>
                        <button type="submit" className="signin_btn" onClick={senddata}>Continue</button>

                        <Divider />

                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Signin</NavLink>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </section>
    )
}

export default SignUp;