/* Libraries and CSS */
import './modal.scss'

import React, { useState, useEffect } from "react"

interface IProps {
    title:string | React.ReactNode;
    children:string;
}

const modal_comp: React.FC<IProps> = ({ title, children }) => {
    const [ showModal, setModal ] = useState<boolean>(false);

    const toggleModalObject = () => {
        setModal(!showModal);
    };

    return (
        <>
            <div className="modal-body">
                <h2>
                    {title}
                </h2>
                <p>
                    {children}
                </p>
            </div>
        </>
    );
}

export default modal_comp;