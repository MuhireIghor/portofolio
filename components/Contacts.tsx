import React,{useState,useEffect,useRef} from 'react';
import Link from 'next/link';
import { data } from "../Data/contacts";
import Image from "next/image";
import nodemailer from 'nodemailer';
import { log } from 'console';
import emailjs from '@emailjs/browser';
const Contacts = () => {
    const [email,setMail] =useState<string | any>("");
    const [name,setName] =useState<string | any>("");
    const [message,setMessage] = useState<string | any>("");
    const [submitted,setSubmitted] = useState<boolean>(false);
    const form = useRef<any>();


    const handleEmail = (e)=>{
        setMail(e.target.value);   
        
    }
    const handleName = (e)=>{
        setName(e.target.value);   
        
    }
    const handleMessage = (e)=>{
        setMessage(e.target.value);
        console.log(message);
        
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        emailjs.sendForm("service_tnuazln","contact_form",form.current,"FPXekdfkm7tNM5YXF")
        .then((result)=>{
            console.log(result.text);
            setMail("");
            setName("");
            setMessage("");
            
        },
        (error)=>{
            console.log(error.text);
            
        }
        
        )
//         const data={
//             email,message
//         }
//         fetch('/api/contact',{
// method:"POST",
// headers:{
//     'Accept':'application/json,text/plain,*/*',
//     'Content-Type':'application/json',
//     },
// body:JSON.stringify(data)

// })
// .then((res)=>{
//     console.log("sending");
//     if(res.status === 200){
//         setMail("");
//         setMessage("")
//         setSubmitted((prev)=>!prev);

//     }
    
// })
}


    return (
        <div className="flex flex-col  gap-6  justify-start" id='Contacts'>
            <div className="flex flex-col items-center justify-center text-white text-xl ">
                Contact me👌😉!
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col basis-1/3 ml-12 space-y-4 h-full ">
                    {data.map((cont, index) => {
                        return (
                            <>
                                <div key={index} className="flex space-x-4">
                                
                                    <div>
                                        <Image src={`/images/${cont.iconUrl}`} width={20} height={20} alt={cont.iconUrl} />
                                    </div>
                                    {index ===1?(<div className="text-white text-sm font-light hover:text-[blue]"><Link href="https://google.com/mail/muhireighor123@gmail.com">{cont.descValue}</Link></div>):(<div className="text-white text-sm font-light hover:text-[blue]">{cont.descValue}</div>)}
                                
                                </div>
                            </>
                        )
                    })}
                </div>
                <form ref={form} className="flex flex-col gap-4 basis-2/3" onSubmit={handleSubmit}>
                    <div className="bg-white/10 w-[958px] h-[78px] rounded-[12px] flex items-center justify-start pl-12 ">
                        <input type={'text'} name="user_name" placeholder="Name eg:John Doe" className="placeholder-[gray]  outline-none bg-transparent text-[gray] " value={name} onChange = {handleName} />
                    </div>
                    <div className="bg-white/10 w-[958px] h-[78px] rounded-[12px] flex items-center justify-start pl-12 ">
                        <input type={'text'} name="user_email" placeholder="Email : e.g john@doe.com" className="placeholder-[gray] border-none bg-transparent  outline-none text-[gray]" value={email} onChange = {handleEmail} />
                    </div>
                        <textarea placeholder="Message" name='message' className="placeholder-[gray] bg-white/10 rounded-[12px] p-5 pl-12 resize-x flex items-center justify-start" value={message} onChange={handleMessage}></textarea>
                    <button className="bg-[#0364BD] h-[75px] text-white rounded-[12px] ">Send Message</button>                
                </form>
            </div>
        </div>
    )
}
export default Contacts;