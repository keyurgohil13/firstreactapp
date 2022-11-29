import React from "react";
import './Title.css';

function Gallery(){

    let images = ["images/g1.jpg", "images/g2.jpg", "images/g1.jpg",  "images/g1.jpg",  "images/g1.jpg"]

    return (
        <div className="gallery">
            {
                images.map((image)=>{
                    
                   return( <div className="item">
                        <div>
                            <img src={image}/>
                        </div>
                        <div>
                            <p>
                                XYZ
                            </p>
                        </div>
                    </div>
                   )
                })
            }
        </div>
    )
}

export default Gallery;