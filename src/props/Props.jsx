import React from 'react';
import './style.css';

const Materi = (props) => {
    return(
        <div className="wrraper">
            <div className="content">
                <div className="gambarpaket">
                    <img src={props.img} className="imagesliderr"/>
                    
                </div>
                <p className="desc">{props.des}</p>
            </div>
        </div>

    )
}

export default Materi;