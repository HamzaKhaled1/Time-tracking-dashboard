import { useState, useEffect } from 'react';
import axios from 'axios'; 
import "./card.css"
import work from "./images/icon-work.svg";
import play from "./images/icon-play.svg";
import study from "./images/icon-study.svg";
import social from "./images/icon-social.svg";
import self from "./images/icon-self-care.svg";
import exercise from "./images/icon-exercise.svg";

function Card({ timeframe ,type}) {
    const [Cards, setCards] = useState([]);
    
    const imagePaths = {
        Work: work,
        Play: play,
        Study: study,
        Social: social,
        "Self Care": self,
        Exercise:exercise
        
    };

    useEffect(() => {
        const gd = async () => {
            const response = await axios.get("http://localhost:3003/data")
            setCards(response.data);
        }
        gd();
    }, []);

    return (
        <>
            <div className="cards">
                {
                    Cards.map((item, index) => {
                    return (<>
                        <div className="card"   key={index} style={{backgroundColor: item.color}}>
                                <div className='icon'>
                                        <img src={imagePaths[item.title]} alt='logo'/>
                                </div>
                                    <div className='bottomcard'>
                                <p className='type'>{item.title}
                                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                                </p>
                                <div className='c-p'>
                                            <span className='current'> {item.timeframes[timeframe].current}hrs</span><br/>
                                            <span className='perivous'>Last {type} - {item.timeframes[timeframe].previous}</span>
                                </div>
                            </div>
                        </div></>
                    )
                })}
            </div>
        </>
    );
}

export default Card;
