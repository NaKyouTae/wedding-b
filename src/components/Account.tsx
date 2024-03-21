import React from "react";
import {onClick, onCopy} from "../utils/Copy";

const Account = () => {
    return (
        <div className="box">
            <h2 className="ico" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">🤍</h2>
            <ul className="account" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                <li><h3>👰🏻‍♀️ 신부측 혼주 계좌번호</h3></li>
                <li>
                    <ul>
                        <li>(부) 기업은행 658-024454-01-017</li>
                        <li>최해철</li>
                    </ul>
                    <div>
                        <a onClick={() => onCopy('65802445401017')}>계좌 복사하기</a>
                    </div>
                </li>
                <li>
                    <ul>
                        <li>(모) 농협은행 813061-56-017909</li>
                        <li>이현정</li>
                    </ul>
                    <div>
                        <a onClick={() => onCopy('81306156017909')}>계좌 복사하기</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Account
