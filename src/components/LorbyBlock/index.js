import React from "react"
import "./LorbyBlock.css"
import Lorby from "../../media/Lorby-img.jpg";

function LorbyBlock() {
    return(
        <div className="lorby-block">
            <img src={Lorby} alt="#" />
            <div className="lorby__text-block">
                <h2 className="f-w-500 lorby__title">Lorby</h2>
                <p className="f-w-400 lorby__subtitle">Твой личный репетитор</p>
            </div>
        </div>
    )
}

export default LorbyBlock