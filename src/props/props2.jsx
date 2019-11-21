import React from 'react';
import './style.css';

const Materi2 = (props) => {
    return(
        <div className="wrraper2">
            <div className="content2">
                <div className="gambarpaket2">
                    <img src={props.img2} className="imagesliderr2"/>
                    
                </div>
                <p className="desc2">{props.des2}</p>
            </div>
        </div>

    )
}

export default Materi2;