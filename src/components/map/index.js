import React from "react";
import axios from "axios";
import styles from "./map.module.css";
import DaumPostcode from "react-daum-postcode";
import { useState, useEffect, useRef } from "react";
import map from "../../img/map.png"
const Map = ({setKakaoLink, value}) => {

    const postCodeStyle = {
        // display: "block",
        // position: "absolute",
        // top: "50%",
        width: "90%",
        height: "73vw"
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

    const [currentClick, setCurrentClick] = useState('');
    const [prevClick, setPrevClick] = useState('');

    const GetClick = (e) => {
        setCurrentClick(e.target.id);
        console.log(e.target.id);
      };

    useEffect(
        (e) => {
            if (currentClick !== '') {
                let current = document.getElementById(currentClick);
                current.style.backgroundColor = "#96A0FF";
                current.style.border = "#754581"
                current.style.boxShadow = "0px 0px 1.8vw 0.9vw gray";
              }
        
              if (prevClick !== '') {
                let prev = document.getElementById(prevClick);
                prev.style.backgroundColor = "#CDD1FF";
                prev.style.border = "#96A0FF"
                prev.style.boxShadow = "0px 0px 0.8vw 0.4vw gray";
              }
              setPrevClick(currentClick);
            },
            [currentClick]
    );




    const [isName, setIsName] = useState('');
    const [isNumber, setIsNumber] = useState('');
    const [isRecommend, setIsRecommend] = useState('');

    const handleName = (e) => {
        setIsName(e.target.value)
    }
    const handleNumber = (e) => {
        setIsNumber(e.target.value);
    }
    const handleRecommend = (e) => {
        setIsRecommend(e.target.value);
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
        console.log(value);
        console.log(currentClick)
        console.log(isAddress);
        console.log(isName);
        console.log(isNumber);
        console.log(isRecommend);
        console.log(isChecked);
        if(isChecked === false){
            alert('???????????? ????????? ?????????????????? ????????????.');
        }
        else if(currentClick === ''){
            alert('??????????????? ??????????????????')
        }
        else if(isAddress === ""){
            alert('???????????? ??????????????????')
        }
        else if(isName === ''){
            alert("????????? ??????????????????")
        }
        else if(isNumber === ''){
            alert("??????????????? ??????????????????")
        }
        else{
            axios.get("https://www.snubaedalgeek.com:8080/map",{
                params: {
                    restaurant: value,
                    livingAlone: currentClick,
                    address: isAddress,
                    name: isName,
                    number: isNumber,
                    recommend: isRecommend,
                }
            }).then((res) => {
                console.log(res);
                console.log(res.data);
                if(res.data.exist === '1'){
                    alert("?????? ????????? ??????????????????. ???????????? ???????????? ??????????????? ??????????????? ??????????????? ???????????????.")
                }
                setKakaoLink(res.data.num, isName, isNumber);
            }).catch((err) => {
                console.log(err)
            })
        }   
    }

    var inputRef = useRef([3]);
    const pressEnter0 = (e) => {
        if(e.key === 'Enter'){
            inputRef.current[0].focus();
        }
    }
    const pressEnter1 = (e) => {
        if(e.key === 'Enter'){
            inputRef.current[1].focus();
        }
    }
    const pressEnter2 = (e) => {
        if(e.key === 'Enter'){
            inputRef.current[2].focus();
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
            <div className = {styles.header1}>?????? ????????? ?????? ?????????????</div>
            <div>
                <button id = "???" className={styles.b1} onClick = {GetClick}>???</button>
                <button id = "?????????" className={styles.b2} onClick = {GetClick}>?????????</button>
            </div>
            <div className = {styles.header2}>?????? ???????????? ??????????????????!</div>
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
                    <div className={styles.name}>??????:</div>
                    <textarea type = "text" onKeyPress={(e) => pressEnter0(e)} className={styles.input} onChange = {(e) => handleName(e)} style={{ resize: 'none' }}/>
                    </div>
                    <div>
                    <div className={styles.number}>????????????:</div>
                    <textarea type = "text" 
                    ref={(ref) => {inputRef.current[0] = ref;}}
                    onKeyPress={(e) => pressEnter1(e)} className={styles.input} onChange = {(e) => handleNumber(e)}/>
                    </div>
                    <div>
                    <div className={styles.recommend}>????????? ??????:</div>
                    <textarea placeholder="????????? ???????????????." type = "text" ref={(ref) => {inputRef.current[1] = ref;}}
                    onKeyPress={(e) => pressEnter2(e)} className={styles.input} onChange = {(e) => handleRecommend(e)}/>
                    </div>
                    <div>
                    <span className={styles.m1}>???????????? ????????? ???????????????.</span>
                    <input type="checkbox" className={styles.checkbox} onChange={handleCheckbox} ref = {(ref) => {inputRef.current[2] = ref;}}/>
                    </div>
                    <div className={styles.m2}>(????????? ?????? ???????????? ??? ???????????? ????????? ????????? ??????????????? ?????? ???????????????)</div>
                </label>
                <input type = "button" value = "???????????? ??????" className={styles.submit} onClick = {handleSubmit}/>
            </div>

            {/* {isLivingAlone && (
                    <div className = {styles.postcode}>
                        <div>??????????????? ??????????????? ???????????? ????????? ??????????????????!</div>
                        <button type = 'button' onClick = {openPostCode} className = {styles.}>???????????? ??????</button>
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
                <button type = 'button' onClick = {openPostCode}>???????????? ??????</button>
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


export default Map;