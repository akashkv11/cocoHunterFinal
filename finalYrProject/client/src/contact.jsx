import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import {useFormik} from 'formik';
import toast,{Toaster} from "react-hot-toast"
export default function Contact(){
    const formik = useFormik({
        initialValues:{
           name:"",
           email:"",
        },
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit : values => {
            const messageElement = document.getElementById('textareaa');
            if (messageElement.value == '') {
                toast.error("Please Insert Message")
            }
            else if (values.name == '') {
                toast.error("Please Insert Name")
            }
            else if(values.email == ''){
                toast.error("Please Insert Email")
            }else{
                toast.success("Submitted Succesfully");
            }
            //send to server
        }
    })
    return(
        <div className="contactContainer" id="contact">
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <div className="HContainer">
                <div className="left">
                    <span className="ico"><MailIcon sx={"scale:6"}/></span>
                    <span className="con">
                        If you have questions or just want to get in touch, use the form. We look forward to hearing from you!
                    </span>
                </div>
                <div className="right">
                    <h1>Contact Us</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <input {...formik.getFieldProps("name")} type="text" placeholder="Your Name"/>
                        <input {...formik.getFieldProps("email")} type="text" placeholder="Your Email"/>
                        <textarea placeholder="Message" id="textareaa"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}





