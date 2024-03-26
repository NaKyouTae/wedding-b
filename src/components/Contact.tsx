import React from "react";
import {onClick, onCall, sendSms, onCopy} from "../utils/Copy";

const Contact = () => {
    return (
        <div className="box">
            <h2 className="ico" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">🤍</h2>
            <ul className="contact">
                <li data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                    <h3>👰🏻‍♀️ 신부측 혼주</h3>
                </li>
                <li data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                    <h4>신부 아버지 최해철</h4>
                    <ul>
                        <li>
                            <p>기업은행 658-024454-01-017</p>
                            <a onClick={() => onCopy('65802445401017')}>복사하기</a>
                        </li>
                        <li>
                            <button onClick={() => sendSms('01086414957')}>문자 보내기</button>
                            <button onClick={() => onCall('01086414957')}>전화 걸기</button>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4>신부 어머니 이현정</h4>
                    <ul>
                        <li>
                            <p>농협은행 813061-56-017909</p>
                            <a onClick={() => onCopy('81306156017909')}>복사하기</a>
                        </li>
                        <li>
                            <button onClick={() => sendSms('01048171423')}>문자 보내기</button>
                            <button onClick={() => onCall('01048171423')}>전화 걸기</button>
                        </li>
                    </ul>
                    <div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Contact
