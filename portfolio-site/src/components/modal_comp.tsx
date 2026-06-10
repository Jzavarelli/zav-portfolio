/* Libraries and CSS */
import './modal.scss'

import React, { useState } from "react"

interface IProps {
    skillImage:string;
    skillAlt?:string;
    title:string | React.ReactNode;
    children:string;
}

const modal_comp: React.FC<IProps> = ({ skillImage, skillAlt, title, children }) => {
    const [ showModal, setShowModal ] = useState<boolean>(false);

    function toggleModalItem() {
        setShowModal(!showModal);
    }

    return (
        <>
            <img src={skillImage} alt={skillAlt} className="shake" onClick={toggleModalItem} />

            <div className={`${"modal-body"} ${showModal ? "modal-display-show" : "modal-display-hide"}`} >
                <article className="modal-main">
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {children}
                    </p>
                    <button type="button" onClick={toggleModalItem}>Close</button>
                </article>
            </div>
        </>
    );
}

export default modal_comp;