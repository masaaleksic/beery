import React from "react";
import "../common/scss/style.scss";

export default function Contact() {
    return (
        <>
            <div className="container-fluid bg-beige height-250">
            </div>
            <div className="d-flex justify-content-evenly">
                <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45485.688442740626!2d20.648417449999997!3d44.55906125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4750a3707b343901%3A0xb5f5fcef7d7ceb2d!2z0JzQsNC70Lgg0J_QvtC20LDRgNC10LLQsNGG!5e0!3m2!1ssr!2srs!4v1655908506970!5m2!1ssr!2srs"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                />
                </div>
                <div>

                </div>
                
            </div>
        </>
    );
}