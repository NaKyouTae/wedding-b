import React from "react";
import {onCall, sendSms} from "../utils/Copy";

const Contact = () => {
    return (
        <div className="box">
            <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">contact</h2>
            <ul className="contact" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                <li><h3>👰🏻‍♀️ 신부측 혼주 연락처</h3></li>
                <li>
                    <h4>(부) 최해철</h4>
                    <div>
                        <a onClick={() => sendSms('01086414957')}>문자 보내기</a>
                        <a onClick={() => onCall('01086414957')}>전화 걸기</a>
                    </div>
                </li>
                <li>
                    <h4>(모) 이현정</h4>
                    <div>
                        <a onClick={() => sendSms('01048171423')}>문자 보내기</a>
                        <a onClick={() => onCall('01048171423')}>전화 걸기</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Contact
