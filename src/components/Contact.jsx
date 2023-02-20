import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact(){
    const formRef = useRef();

    // const handleRefresh = () => {
    //     formRef.current.reset();
    // };

    function sendMessage(e){
        e.preventDefault();

        const form = formRef.current;

        emailjs.sendForm(
            'service_cumdh3d', 
            'template_l4652jm', 
            e.target, 
            'SDZohGDw-Cj-V1YPz'
        ).then(res=> {
            console.log(res)
            form.reset();
        }).catch(err=> console.log(err))
    }
    return(
        <section className="contact">
            <h3 className="contact-heading"><span>Con</span>tact Me</h3>
            <div className="contact-container">
                <div className="contact-details">
                    <h4 className="contact-details-heading">Get in touch</h4>
                    <p className="contact-details-email"><strong>Email: williamsmomoh@gmail.com</strong></p>
                    <p className="contact-details-phone"><strong>Phone: +234-8146314939</strong></p>
                    <p className="contact-details-message">Do well to leave a message</p>
                </div>
                <form ref={formRef} onSubmit={sendMessage}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' />

                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' />

                    <label htmlFor="message">Message</label>
                    <textarea name='message' rows='4'/>

                    <button className="contact-button" type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}