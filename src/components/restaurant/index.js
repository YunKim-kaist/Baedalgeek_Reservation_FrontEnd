import React from "react";
import styles from "./restaurant.module.css";
import { useState, useEffect, useRef } from "react";
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
import crofflefactory from "../../img/restaurants/crofflefactory.jpg"
import italypapa from "../../img/restaurants/italypapa.png"
import diethouse from "../../img/restaurants/diethouse.png"
import casafiesta from "../../img/restaurants/casafiesta.png"

const Restaurant = ({setMap}) => {
    const [value, setValue] = useState('');
    const [currentClick, setCurrentClick] = useState(null);
    const [prevClick, setPrevClick] = useState(null);

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = () => {
        console.log(value);
        // axios.post("/restaurant",{
        //     restaurant: value,
        // })
        if(value === ''){
            alert("음식점을 선택 혹은 입력해주세요")
        }
        else{
            setMap(value);
        }
    }
    const click1 = (e) => {
        setValue(e.target.id)
        setCurrentClick(e.target.id);
    }
    const click2 = (e) => {
        setValue(e.target.id)
        setCurrentClick(e.target.id);
    }
    const click3 = (e) => {
        setValue(e.target.id)
        setCurrentClick(e.target.id);
    }
    const click4 = (e) => {
        setValue(e.target.id)
        setCurrentClick(e.target.id);
    }
    const click5 = (e) => {
        setValue(e.target.id)
        setCurrentClick(e.target.id);
    }
    const click6 = (e) => {
        setValue(e.target.id)
        setCurrentClick(e.target.id);
    }
    const click7 = (e) => {
        setValue(e.target.id)
        setCurrentClick(e.target.id);
    }
    const click8 = (e) => {
        setValue(e.target.id)
        setCurrentClick(e.target.id);
    }
    const click9 = (e) => {
        setValue(e.target.id)
        setCurrentClick(e.target.id);
    }

    useEffect(
        (e) => {
            if (currentClick !== null) {
                let current = document.getElementById(currentClick);
                current.style.border = "1.5vw solid gray"
                current.style.boxShadow = "0px 0px 3vw 2vw gray";
              }
        
              if (prevClick !== null) {
                let prev = document.getElementById(prevClick);
                prev.style.border = "0.6vw solid gray"
                prev.style.boxShadow = "0px 0px 1vw 0.5vw gray";
              }
              setPrevClick(currentClick);
            },
            [currentClick]
    );

    var inputRef = useRef();
    const onPress = (e) => {
        if(e.key === 'Enter'){
            inputRef.focus();
        }
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
                        <img id = "홍콩반점" src = {hongkongbanjum0410} className = {styles.item} onClick = {(e) => click1(e)}/>
                    </div>
                    <div>
                        <img id = "미스사이공" src = {miss420} className = {styles.item} onClick = {(e) => click2(e)}/>
                    </div>
                    <div>
                        <img id = "밥한끼" src = {bab1ggi} className = {styles.item} onClick = {(e) => click3(e)}/>
                    </div>
                    <div>
                        <img id = "홍대돈부리" src = {hddonburi} className = {styles.item} onClick = {(e) => click4(e)}/>
                    </div>
                    <div>
                        <img id = "마라테이블" src = {maratable} className = {styles.item} onClick = {(e) => click5(e)}/>
                    </div>
                    <div>
                        <img id = "레드선" src = {redspicy} className = {styles.item} onClick = {(e) => click6(e)}/>
                    </div>
                    <div>
                        <img id = "치킨더샵" src = {chickentheshop} className = {styles.item} onClick = {(e) => click7(e)}/>
                    </div>
                    <div>
                        <img id = "크로플팩토리" src = {crofflefactory} className = {styles.item} onClick = {(e) => click8(e)}/>
                    </div>
                    <div>
                        <img  id = "까사피에스타" src = {casafiesta} className = {styles.item} onClick = {(e) => click9(e)}/>
                    </div>
                </div>
                <div className={styles.textline}>
                    <div className={styles.l}>위 선택지에 없는 배달 맛집이 있다면</div>
                    <div>알려주세요!</div>
                </div>
                <div>
                    <label>
                        <textarea type = "text" className={styles.input} onChange = {(e) => handleChange(e)} onKeyPress = {(e) => onPress(e)}/>
                    </label>
                </div>
            </div>
            <button className = {styles.button} onClick = {() => handleSubmit()} ref = {(ref) => {inputRef = ref;}}>다음</button>
        </div>
    );
};

export default Restaurant;