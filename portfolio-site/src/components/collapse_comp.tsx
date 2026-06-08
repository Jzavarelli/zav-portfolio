/* Tool Item Images */
import collapseUp from '/parts/chevron-up-32.png'
import collapseDw from '/parts/chevron-dn-32.png'

/* Libraries and CSS */
import './collapse.scss'

import React, { useState, useRef, useEffect } from "react"

interface IProps {
    open?:boolean;
    title:string | React.ReactNode;
    timeline:string;
    children:string;
}

const collapse_comp: React.FC<IProps> = ({ open, title, timeline, children }) => {
    
    const [ aOpen, setOpen ] = useState(!open);
    const [ height, setHeight ] = useState<number | undefined>(open ? undefined: 0);

    const reference = useRef<HTMLDivElement>(null);
    const handleFilterOpen = () => {
        setOpen((prev) => !prev);
    };

    useEffect(() => {
        if (!height || !aOpen || !reference.current) {
            return undefined;
        }

        const resizeObs = new ResizeObserver((sight) => {
            setHeight(sight[0].contentRect.height);
        });

        resizeObs.observe(reference.current);
        return () => {
            resizeObs.disconnect();
        };
    }, [ height, aOpen ]);

    useEffect(() => {
        if (aOpen) {
            setHeight(reference.current?.getBoundingClientRect().height);
        }
        else {
            setHeight(0);
        }
    }, [ aOpen ]);

    return (
        <>
            <div className="collapse-card">
                <div>
                    <div className="card-body">
                        <section>
                            <h3>{title}</h3>
                            <p>
                                <b>{timeline}</b>
                            </p>
                        </section>
                        <button type="button" className="card-button" onClick={handleFilterOpen}>
                            {aOpen ? (
                                <img src={collapseDw} />
                            ):(
                                <img className="set-up" src={collapseUp} />
                            )}
                         </button>
                    </div>
                </div>

                <div className="content-border" style={{ height }}>
                    <section ref={reference}>
                        <p className="content-text">{children}</p>
                    </section>
                </div>
            </div>
        </>
    );
}

export default collapse_comp;