import Up from "../../assets/img/thumbs-up.svg"
import Down from "../../assets/img/thumbs-down.svg"

import { trimmer } from "../../utils/textTrimmer"

import "./GridCard.css"

export const GridCard = ({ List }) => {
  return (
    <div className="directory-grid">
      {List.map((x) => (
        <div key={x.name} style={{
          backgroundImage: `url(${x.picture})`
        }} className="container-items-grid">
          <div className="gradient-grid">
            <div style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center"
            }}>
              <div style={{
                background: "rgba(249, 173, 29, 0.6)",
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}><img src={Down} alt="thumbs Down" />
              </div>
              <h2 style={{
                color: "#FFF",
                textAlign: "center",
                fontWeight: "400",
                fontSize: "36px",
                lineHeight: "43px",
                paddingTop: "30px"
              }}>{trimmer(x.name, 21)}</h2>
            </div>
            <div style={{
              padding: 10,
              color: "#FFF",
            }}>
              <p>
                {trimmer(x.description, 50)}
              </p>
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              marginLeft: 50
            }}>
              <div style={{
                margin: 5,
                width: 20,
                backgroundColor: "rgba(60, 187, 180, 0.6)",
                padding: 10,
              }}><img src={Up} alt="thumbs Up" /></div>
              <div style={{
                margin: 5,
                width: 20,
                backgroundColor: "rgba(249, 173, 29, 0.6)",
                padding: 10,
              }}><img src={Down} alt="thumbs Down" /></div>
              <div style={{
                height: 48,
                width: 107,
                margin: 5,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFF",
                border: "1px solid #FFF",
                borderColor: "#FFF"
              }}>
                <p>Vote Now</p>
              </div>
            </div>
            <div style={{
              display: "flex",
              height: 36,
              width: "100%",
              color: "#FFF"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                width: "30%",
                backgroundColor: "rgba(60, 187, 180, 0.6)",
              }}><img src={Up} alt="thumbs Up" style={{ paddingRight: "10px" }} /> 25.5%</div>
              <div style={{
                display: "flex",
                alignContent: "end",
                justifyContent: "flex-end",
                padding: "10px",
                width: "70%",
                textAlign: "end",
                backgroundColor: "rgba(249, 173, 29, 0.6)"
              }}>74.5% <img src={Down} alt="thumbs Down" style={{
                paddingLeft: "15px"
              }} /></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
