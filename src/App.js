import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from "./App.module.css";
import Giveaway from './components/giveaway';
import Restaurant from './components/restaurant';
import React from 'react';
import Map from './components/map';
import KakaoLink from './components/kakaoLink'
import logo from './img/logo.png'
const App = () => {
  const [data, setData] = useState("giveaway");
  const [value, setValue] = useState("");

  const setRes = () => {
    setData("restaurant")
  }
  const setMap = (restaurant) => {
    setData("map")
    setValue(restaurant)
  }
  const setKakaoLink = () =>{
    setData("kakaoLink")
  }
  
  // const fetchUsers = async () => {
  //   try{
  //     const response = await axios.get(
  //       'http://localhost:5000/text'
  //     )
  //     setData(response.data);
  //     console.log(response)
  //   }
  //   catch(e){
  //     console.log(e);
  //   }
  // }
  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // axios({
  //   method : 'get',
  //   url : 'http://localhost:5000/text'
  // }).then((res)=>{
  //   console.log(res)
  //   setData(res.data);
  // })

  return (
    <div>
      <div className={styles.headline}>
        <span>
          <img src = {logo} className = {styles.logo}/>
        </span>
        <span className={styles.header}>
          <div>서울대 자취생을 위한</div> 
          <div>배달긱 서비스 사전예약</div>
        </span>
      </div>
      {data === "giveaway" && (<Giveaway setRes = {setRes}/>)}
      {data === "restaurant" && (<Restaurant setMap = {setMap}/>)}
      {data === "map" && (<Map setKakaoLink = {setKakaoLink} value = {value}/>)}
      {data === "kakaoLink" && (<KakaoLink/>)}
    </div>
  );


}

export default App;
