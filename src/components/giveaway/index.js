import React from "react";
import styles from "./giveaway.module.css";
import macbookair from "../../img/macbookair.png";
import ipadpro from "../../img/ipadpro.png"
import baskinrobbins from "../../img/baskinrobbins.png"

const Giveaway = ({setRes}) => {
    return(
        <div className = {styles.head}>
          <div className= {styles.body}>
            <div className = {styles.slogan}>
              <div>배달비 0원</div>
              <div>최소주문금액 0원</div>
            </div>
            <div className={styles.announcement}>
                <div>배달긱 서비스를 서울대 주변 자취지역까지 확장하기 위해</div>
                <div>서울대생들의 거주지 데이터를 수집하고 있습니다.</div>
              <div className = {styles.announcement_line}>참여해주신 서울대 학생들에게는 추첨으로 경품을 드립니다!</div>
            </div>
            <div className={styles.giveaway}>
              <div className={styles.giveaway_headline}>
                <div className={styles.giveaway_headline0}>설문에 응해주시면</div>
                <div>맥북과 아이패드를 드립니다!</div>
              </div>
              <div>
                <img src = {macbookair} width = "60%"/>
                <div className = {styles.giveaway_mac}>맥북 에어 m1 1명</div>
              </div>
              <div>
                <img src = {ipadpro} width = "35%" className = {styles.ipadimage}/>
                <img src = {baskinrobbins} width = "35%" className = {styles.baskinrobbins}/>
              </div>
              <div>
                <span className={styles.giveaway_ipad}>
                  아이패드 프로 2명
                </span>
                <span className= {styles.giveaway_baskinrobbins}>
                  <div>선착순 100명 파인트</div>
                  <div>(마감)</div>
                </span>
              </div>  
            </div>
            <div className = {styles.announcement_gift}>
              <div>단, 맥북 에어는 Apple M1 칩(8코어 CPU 및 7코어 GPU), 256GB 저장 용량 제품,
              그리고 아이패드 프로는 11형 디스플레이, Wi-Fi, 128GB 저장용량 제품이 경품으로 지급됩니다.</div>
            </div>
          </div>
          <button className = {styles.button} onClick = {() => setRes()}>사전예약 하러가기</button>
        </div>
    );
};

export default Giveaway;