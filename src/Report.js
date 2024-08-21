import { useState } from "react";
import "./Report.css";
import Card from "./card";
import imageJeremy from './images/image-jeremy.png';


function Report() {
    const [timeframe, settimeFrame] = useState("weekly");
    const [type, settype] = useState("day");

    const handlefetch = (classname, type) => { 
        settimeFrame(classname);
        settype(type);
    }

    return (
        <>
            <div className="contanier">
                <div className="left">
                    <div className="upper-report">
                        <img src={imageJeremy} alt="p.p"
                            style={{ width: "85px", borderStyle: "solid", borderColor: "white", borderRadius: "50%" }} />
                        <br />
                        <br />
                        <small>Report for</small><br />
                        <span>Jeremy Robson</span>
                    </div>
                    <div className="ul">
                        <span className={`daily ${timeframe === "daily" ? "Active" : ""}`} onClick={() => handlefetch("daily", "Day")}>
                            Daily
                        </span>
                        <span className={`weekly ${timeframe === "weekly" ? "Active" : ""}`} onClick={() => handlefetch("weekly", "Week")}>
                            Weekly
                        </span>
                        <span className={`monthly ${timeframe === "monthly" ? "Active" : ""}`} onClick={() => handlefetch("monthly", "Month")}>
                            Monthly
                        </span>
                    </div>
                </div>
                <div className="right">
                    <Card timeframe={timeframe} type={type} />
                </div>
            </div>
        </>
    );
}

export default Report;
