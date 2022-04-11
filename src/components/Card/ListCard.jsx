import Up from "../../assets/img/thumbs-up.svg"
import Down from "../../assets/img/thumbs-down.svg"

import { trimmer } from "../../utils/textTrimmer"

import "./ListCard.css";

export const ListCard = ({ List }) => {
    return (
        <div className="directory-list">
            {List.map((x) => (
                <div key={x.name} className="menu-item-list">
                    <div className="main-card-list">
                        <div className="card-content-list">
                            <div className="first-card-list"><img src={Down} alt="thumbs Down" /></div>
                            <img src={x.picture} height="200" alt="" />
                        </div>
                        <div className="second-card-list">
                            <h3>{x.name}</h3>
                            <p>{trimmer(x.description, 100)}</p>
                        </div>
                        <div className="third-card-list">
                            <span>{x.lastUpdated}</span>
                            <br />
                            <div className="cards-buttons">
                                <div className="btn-green">
                                    <img className="buttons-size" src={Up} alt="thumbs Up" />
                                </div>
                                <div className="btn-yellow">
                                    <img className="buttons-size" src={Down} alt="thumbs Down" />
                                </div>
                                <div className="btn-vote">
                                    <p>Vote Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="footer-left-list"><img src={Up} alt="thumbs Up" style={{ paddingRight: "10px" }} /> 25.5%</div>
                        <div className="footer-right-list">74.5% <img src={Down} alt="thumbs Down" style={{
                            paddingLeft: "15px"
                        }} /></div>
                    </div>
                </div>
            ))}
        </div>
    )
}
