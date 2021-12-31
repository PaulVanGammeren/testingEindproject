import React, {useState, useRef} from "react";
import "./accordion.css"
import Icon from "./icon";

function Accordion(props){

    const [active, setActive] = useState("")
    const [height, setHeight] = useState ("0px")
    const [rotate, setRotate] = useState("accordion_icon")
    
    const content = useRef(null )

    function toggleAccordion(){
        setActive(active === "" ? "active" : "")
        setHeight(active === "active" ? "0px"  : `${content.current.scrollHeight}px` );
        setRotate(active === "active" ? "accordion_icon": "accordion_icon rotate")
    }
    return(
        <div className="accordion_section">
            <button className={`accordion &{active}`} onClick={toggleAccordion}>
               <p className="accordion_title">{props.title}</p>
                <Icon className={`${rotate}`}  width={10} fill={"#777"} />
            </button>
            <div ref={props.content}
                 style={{maxHeight: `${height}`}}
                 className="accordion_content">
                <div className="accordion__text"
                     dangerouslySetInnerHTML={{__html: props.content}}/>
            </div>

        </div>
    )
}

export default Accordion;