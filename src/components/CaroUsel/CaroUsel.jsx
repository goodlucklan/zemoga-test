import Up from "../../assets/img/thumbs-up.svg";
import Down from "../../assets/img/thumbs-down.svg";

import { trimmer } from "../../utils/textTrimmer";

import "./CaroUsel.css";

export const CaroUsel = ({ List }) => {
    return (
        <div className="carousel">
            {List.map((x) => (
                <div key={x.name} style={{
                    backgroundImage: `url(${x.picture})`
                }}
                    className="card-carousel">
                    <div className="first-item-carousel">
                        <div className="div-orange">
                            <img src={Down} alt="thumbs Down" />
                        </div>
                        <h2 className="title-carousel">
                            {trimmer(x.name, 21)}
                        </h2>
                    </div>
                    <div className="second-item-carousel">
                        <p style={{
                            textAlign: "center",
                        }}>
                            {trimmer(x.description, 50)}
                        </p>
                    </div>
                    <div className="third-item-carousel">
                        <div className="card-green-carousel">
                            <img src={Up} alt="thumbs Up" />
                        </div>
                        <div className="card-yellow-carousel">
                            <img src={Down} alt="thumbs Down" />
                        </div>
                        <div className="card-vote-carousel">
                            <p>Vote Now</p>
                        </div>
                    </div>
                    <div className="footer-carousel">
                        <div className="green-bar-carousel">
                            <img src={Up} alt="thumbs Up" style={{ paddingRight: "10px" }} /> 25.5%
                        </div>
                        <div className="yellow-bar-carousel">
                            <img src={Down} alt="thumbs Down" style={{ paddingRight: "10px" }} /> 74.5%
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
