import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from "./App.module.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Giveaway from './components/giveaway';
import Restaurant from './components/restaurant';
import Map from './components/map';
const App = () => {
  const [data, setData] = useState("giveaway");
  
  const setRes = () => {
    setData("restaurant")
  }
  const setMap = () => {
    setData("map")
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
    // <BrowserRouter>
    //   <Routes>
    //     <Route path = '/' element = {<Giveaway/>}/>
    //     <Route exact path = '/restaurant' element= {<Restaurant/>}/>
    //   </Routes>
    // </BrowserRouter>
    <div>
    <header className={styles.header}>"배달의 혁신, 배달긱"</header>
      {data === "giveaway" && (<Giveaway setRes = {setRes}/>)}
      {data === "restaurant" && (<Restaurant setMap = {setMap}/>)}
      {data === "map" && (<Map/>)}
    </div>
  );


}

export default App;
