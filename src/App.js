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
  
  const setRes = () => {
    setData("restaurant")
  }
  const setMap = () => {
    setData("map")
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
          <span>"배달의 혁신, </span>
          <span className = {styles.name}>배달긱</span>
          <span>"</span>
        </span>
      </div>
      {data === "giveaway" && (<Giveaway setRes = {setRes}/>)}
      {data === "restaurant" && (<Restaurant setMap = {setMap}/>)}
      {data === "map" && (<Map setKakaoLink = {setKakaoLink}/>)}
      {data === "kakaoLink" && (<KakaoLink/>)}
    </div>
  );


}

export default App;
