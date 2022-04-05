import React from "react";
import styles from "./restaurant.module.css";
import { useState } from "react";
import axios from "axios";
import shakeshack from "../../img/shakeshack.png"
import bhc from "../../img/bhc.jpg"
import schoolfood from "../../img/schoolfood.png"
import bossam from "../../img/bossam.jpg"
import dongdaemun from "../../img/dongdaemun.jpg"
import domino from "../../img/domino.png"
import outback from "../../img/outback.png"
import salady from "../../img/salady.png"
import subway from "../../img/subway.jpeg"

import hongkongbanjum0410 from "../../img/restaurants/hongkongbanjum0410.png"
import miss420 from "../../img/restaurants/miss420.png"
import bab1ggi from "../../img/restaurants/bab1ggi.png"
import hddonburi from "../../img/restaurants/hddonburi.png"
import maratable from "../../img/restaurants/maratable.png"
import redspicy from "../../img/restaurants/redspicy.png"
import chickentheshop from "../../img/restaurants/chickentheshop.png"
import crofflefactory from "../../img/restaurants/crofflefactory.png"
import italypapa from "../../img/restaurants/italypapa.png"
import diethouse from "../../img/restaurants/diethouse.png"

const Restaurant = ({setMap}) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = () => {
        console.log(value);
        // axios.post("/restaurant",{
        //     restaurant: value,
        // })
        setMap(value);
    }
    const click1 = () => {
        setValue("홍콩반점")
    }
    const click2 = () => {
        setValue("미스사이공")
    }
    const click3 = () => {
        setValue("밥한끼")
    }
    const click4 = () => {
        setValue("홍대돈부리")
    }
    const click5 = () => {
        setValue("마라테이블")
    }
    const click6 = () => {
        setValue("레드신")
    }
    const click7 = () => {
        setValue("치킨더샵")
    }
    const click8 = () => {
        setValue("다이어트하우스")
    }
    const click9 = () => {
        setValue("이태리파파")
    }


    // const fetchUsers = async () => {
    //     try{
    //     const response = await axios.get(
    //         'http://52.78.178.207/restaurant'
    //     )
    //     setData(response.data);
    //     console.log(response)
    //     }
    //     catch(e){
    //     console.log(e);
    //     }
    // }
    // useEffect(() => {
    //     fetchUsers();
    // }, []);

    // axios({
    //     method : 'get',
    //     url : 'http://52.78.178.207/restaurant',
    //     data:{
    //         restaurant: value
    //     }
    // }).then(function(response){
    //     console.log(response);
    // });


    return(
        <div className = {styles.res_body}>
            <div className = {styles.image_body}>   
                <div className = {styles.header}>
                    <div className = {styles.h1}>아래 중 가장 배달시켜 먹고 싶은</div>
                    <div>음식점을 골라주세요!!</div>
                </div>
                <div className = {styles.container}>
                    <div>
                        <img src = {hongkongbanjum0410} className = {styles.item} onClick = {click1}/>
                    </div>
                    <div>
                        <img src = {miss420} className = {styles.item} onClick = {click2}/>
                    </div>
                    <div>
                        <img src = {bab1ggi} className = {styles.item} onClick = {click3}/>
                    </div>
                    <div>
                        <img src = {hddonburi} className = {styles.item} onClick = {click4}/>
                    </div>
                    <div>
                        <img src = {maratable} className = {styles.item} onClick = {click5}/>
                    </div>
                    <div>
                        <img src = {redspicy} className = {styles.item} onClick = {click6}/>
                    </div>
                    <div>
                        <img src = {chickentheshop} className = {styles.item} onClick = {click7}/>
                    </div>
                    <div>
                        <img src = {diethouse} className = {styles.item} onClick = {click8}/>
                    </div>
                    <div>
                        <img src = {italypapa} className = {styles.item} onClick = {click9}/>
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