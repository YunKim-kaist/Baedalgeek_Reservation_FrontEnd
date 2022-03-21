import React from "react";
import styles from "./restaurant.module.css";
import { useState } from "react";
import shakeshack from "../../img/shakeshack.png"
import bhc from "../../img/bhc.jpg"
import schoolfood from "../../img/schoolfood.png"
import bossam from "../../img/bossam.jpg"
import dongdaemun from "../../img/dongdaemun.jpg"
import domino from "../../img/domino.png"
import outback from "../../img/outback.png"
import salady from "../../img/salady.png"
import subway from "../../img/subway.jpeg"

const Restaurant = ({setMap}) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = () => {
        
        console.log(value);
        setMap();
    }
    return(
        <div className = {styles.res_body}>
            <div className = {styles.image_body}>   
                <div className = {styles.header}>
                    <div className = {styles.h1}>아래 중 가장 배달시켜 먹고 싶은</div>
                    <div>음식점을 골라주세요!!</div>
                </div>
                <div className = {styles.container}>
                    <div>
                        <img src = {shakeshack} className = {styles.item}/>
                    </div>
                    <div>
                        <img src = {bossam} className = {styles.item}/>
                    </div>
                    <div>
                        <img src = {dongdaemun} className = {styles.item}/>
                    </div>
                    <div>
                        <img src = {bhc} className = {styles.item}/>
                    </div>
                    <div>
                        <img src = {outback} className = {styles.item}/>
                    </div>
                    <div>
                        <img src = {salady} className = {styles.item}/>
                    </div>
                    <div>
                        <img src = {schoolfood} className = {styles.item}/>
                    </div>
                    <div>
                        <img src = {domino} className = {styles.item}/>
                    </div>
                    <div>
                        <img src = {subway} className = {styles.item}/>
                    </div>
                </div>
                <div className={styles.textline}>
                    <div className={styles.l}>위 선택지에 없는 배달 맛집이 있다면</div>
                    <div>알려주세요!</div>
                </div>
                {/* <form onSubmit={handleSubmit}>
                    <label>
                        <textarea type = "text" className={styles.input} onChange = {(e) => handleChange(e)}/>
                    </label>
                    <input type = "submit" value = "확인" className={styles.submit}/>
                </form> */}
                <div>
                    <label>
                        <textarea type = "text" className={styles.input} onChange = {(e) => handleChange(e)}/>
                    </label>
                </div>
            </div>
            <button className = {styles.button} onClick = {() => handleSubmit()}>다음</button>
        </div>
    );
};

export default Restaurant;