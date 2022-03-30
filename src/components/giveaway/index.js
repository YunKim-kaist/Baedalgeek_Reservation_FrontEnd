import React from "react";
import styles from "./giveaway.module.css";
import macbookair from "../../img/macbookair.png";
import ipadpro from "../../img/ipadpro.png"
import airpod3 from "../../img/airpod3.jpg"

const Giveaway = ({setRes}) => {
    return(
        <div>
          <div className= {styles.body}>
            <div className = {styles.slogan}>
              <div>배달비 0원</div>
              <div>최소 주문금액 0원</div>
            </div>
            <div className={styles.giveaway}>
              <div className={styles.giveaway_headline}>
                <div className={styles.giveaway_headline0}>추첨에 당첨되시면</div>
                <div>맥북과 아이패드를 드립니다!</div>
              </div>
              <div>
                <img src = {macbookair} width = "60%"/>
                <div className = {styles.giveaway_mac}>맥북 에어 2세대</div>
              </div>
              <div>
                <img src = {ipadpro} width = "35%" className = {styles.ipadimage}/>
                <img src = {airpod3} width = "35%" className = {styles.airpodimage}/>
              </div>
              <div>
                <span className={styles.giveaway_ipad}>
                  아이패드 프로
                </span>
                <span className= {styles.giveaway_airpod}>
                  에어팟 3세대
                </span>
              </div>
            </div>
          </div>
          <button className = {styles.button} onClick = {() => setRes()}>사전예약 하러가기</button>
        </div>
    );
};

export default Giveaway;