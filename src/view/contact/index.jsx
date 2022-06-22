import React from "react";
import "../common/scss/style.scss";
import Phone from "../../img/phone.png";
import Beer from "../../img/nature-and-beer.jpg";
import "./scss/index.scss";

export default function Contact() {
    return (
        <>
            <div className="bg-img">
                <img src={Beer} alt="beer" className="w-100 h-100"/>
            </div>
            <div className="d-flex justify-content-center text-center pb-5">
                <div className="contact-layout me-2">
                    <img src={Phone} className="mt-4" />
                    <h4 className="mt-3 mb-4"><b>Talk with our Team!</b></h4>
                    <p className="px-5">Interested in our Beers? Just pick up the phone to chat with a member of our sales team. We are here!</p>
                    <h5 className="txt-darker-blue">+381 38 381381</h5>
                    <p className="mt-4">Or you can email us any time!</p>
                    <h5 className="txt-darker-blue">mail@email.com</h5>
                </div>
                <div className="contact-layout ms-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45485.688442740626!2d20.648417449999997!3d44.55906125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4750a3707b343901%3A0xb5f5fcef7d7ceb2d!2z0JzQsNC70Lgg0J_QvtC20LDRgNC10LLQsNGG!5e0!3m2!1ssr!2srs!4v1655908506970!5m2!1ssr!2srs"
                        width="600"
                        height="380"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </div>
            </div>
        </>
    );
}