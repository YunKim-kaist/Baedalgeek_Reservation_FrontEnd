import React from "react";
import styles from "./map.module.css";
import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import PopupDom from "../popupdom";
import PopupPostCode from "../popuppostcode";
import map from "../../img/map.png"
const Restaurant = () => {
    const postCodeStyle = {
        // display: "block",
        // position: "absolute",
        // top: "50%",
        width: "90%",
        height: "44vh"
      };

    const [isAddress, setIsAddress] = useState("");
    const [isZoneCode, setIsZoneCode] = useState();
    const [isPostOPen, setIsPostOpen] = useState(false);
    
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
        if (data.bname !== "") {
            extraAddress += data.bname;
        }
        if (data.buildingName !== "") {
            extraAddress +=
            extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        setIsZoneCode(data.zonecode);
        setIsAddress(fullAddress);
        setIsPostOpen(true);
        console.log(data.zonecode);
        console.log(fullAddress);
        
    };

    const [isLivingAlone, setIsLivingAlone] = useState(false);

    const OpenLivingAlone = () => {
        setIsLivingAlone(true);
    }


    const [isName, setIsName] = useState('');
    const [isNumber, setIsNumber] = useState('');
    const handleName = (e) => {
        setIsName(e.target.value)
    }
    const handleNumber = (e) => {
        setIsNumber(e.target.value);
    }

    const [isChecked, setIsChecked] = useState(false);
    const [num, setNum] = useState(0);

    const handleCheckbox = () => {
        if(num % 2 === 0){
            setIsChecked(true);
        }
        else{
            setIsChecked(false);
        }
        setNum(num + 1);
        console.log(isChecked)
    }

    const handleSubmit = () => {
        console.log(isLivingAlone);
        console.log(isAddress);
        console.log(isName);
        console.log(isNumber);
        console.log(isChecked);
        if(isChecked === false){
            alert('개인정보 제공에 동의해주시기 바랍니다.');
        }
    }

    // const [isPopupOpen, setIsPopupOpen] = useState(false);
    // const openPostCode = () => {
    //     setIsPopupOpen(true);
    // }
    // const closePostCode = () => {
    //     setIsPopupOpen(false);
    // }
    return(
        <div className = {styles.map_body}>
            <div className = {styles.header1}>현재 자취를 하고 계신가요?</div>
            <div>
                <button className={styles.b1} onClick = {OpenLivingAlone}>예</button>
                <button className={styles.b2}>아니요</button>
            </div>
            <div className = {styles.header2_1}>배달음식을 주문한다면 수령하실 주소를</div>
            <div className = {styles.header2_2}>입력해주세요!</div>
            {/* <div className = {styles.postcode}>   
                <DaumPostcode onComplete={handleComplete} style = {postCodeStyle}/>
            </div> */}
            <DaumPostcode onComplete={handleComplete} style = {postCodeStyle} className = {styles.postcode}/>
            {isPostOPen && (
                <div className = {styles.postcoderesult}>
                    <div className = {styles.address}>
                        {isAddress}
                        <div>
                        <img src = {map} className = {styles.mapimage}/>
                        </div>
                    </div>
                </div>
            )}
            <div>
                <label>
                    <div className={styles.line}>
                    <span className={styles.name}>이름:</span>
                    <textarea type = "text" className={styles.input} onChange = {(e) => handleName(e)}/>
                    </div>
                    <div>
                    <span className={styles.number}>전화번호:</span>
                    <textarea type = "text" className={styles.input} onChange = {(e) => handleNumber(e)}/>
                    </div>
                    <div>
                    <span className={styles.m2}>개인정보 제공에 동의합니다.</span>
                    <input type="checkbox" className={styles.checkbox} onChange={handleCheckbox}/>
                    </div>
                    <div className={styles.m1}>(당첨시, 알림 메세지가 갈 예정입니다.)</div>
                </label>
                <input type = "button" value = "사전예약 완료" className={styles.submit} onClick = {handleSubmit}/>
            </div>

            {/* {isLivingAlone && (
                    <div className = {styles.postcode}>
                        <div>배달음식을 주문한다면 수령하실 주소를 입력해주세요!</div>
                        <button type = 'button' onClick = {openPostCode} className = {styles.}>우편번호 검색</button>
                        <div id='popupDom'>
                        {isPopupOpen && (
                            <PopupDom>
                                <PopupPostCode onClose={closePostCode} />
                            </PopupDom>
                        )}
                        </div>
                    </div>
                )} */}
            {/* <div className = {styles.postcode}>
                <button type = 'button' onClick = {openPostCode}>우편번호 검색</button>
                <div id='popupDom'>
                {isPopupOpen && (
                    <PopupDom>
                        <PopupPostCode onClose={closePostCode} />
                    </PopupDom>
                )}
                </div>
            </div>     */}
        </div>
    );
};


export default Restaurant;