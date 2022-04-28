import React from "react";
import { useEffect } from "react";
import styles from "./kakaoLink.module.css";
import styled from "styled-components";
import { useScript } from "../../hooks";
import kakaoLogo from "../../img/kakaologo.png";
import macbookair from "../../img/macbookair2.jpg";
import axios from "axios";

const KakaoLink = ({num, name, number, setNum}) => {
    useEffect(() => {
        window.Kakao.init("4a4a3c7a7800e2a0af56d2d6455b429b");
    }, []);
  
    const shareKakao = () => {
        window.Kakao.Link.sendDefault({
            objectType: 'feed',
                content: {
                title: "배달긱 사전예약하고 맥북에어 받자!!",
                description: "서울대학교 배달긱 사전예약",
                imageUrl: 'https://i.ibb.co/QFptS8v/img-up.png',
                link: {
                    mobileWebUrl: "https://www.snubaedalgeek.com",
                    androidExecParams: "test",
                },
                },
                buttons: [
                {
                    title: "웹으로 이동",
                    link: {
                    mobileWebUrl: 'https://www.snubaedalgeek.com'
                    },
                },
                ],
            });
        // if (navigator.share) {
        //     navigator.share({
        //         title: '배달긱 사전예약하고 맥북에어 받자!!',
        //         text: '서울대학교 배달긱 사전예약',
        //         url: 'https://www.snubaedalgeek.com',
        //     });
        // }
        // else{
        //     window.Kakao.Link.sendDefault({
        //         objectType: 'feed',
        //             content: {
        //             title: "배달긱 사전예약하고 맥북에어 받자!!",
        //             description: "서울대학교 배달긱 사전예약",
        //             imageUrl: 'https://i.ibb.co/QFptS8v/img-up.png',
        //             link: {
        //                 mobileWebUrl: "https://www.snubaedalgeek.com",
        //                 androidExecParams: "test",
        //             },
        //             },
        //             buttons: [
        //             {
        //                 title: "웹으로 이동",
        //                 link: {
        //                 mobileWebUrl: 'https://www.snubaedalgeek.com'
        //                 },
        //             },
        //             ],
        //         });
        // }
        axios.get("https://www.snubaedalgeek.com:8080/share",{
            params:{
                name: name,
                number: number
            }
        }).then((res) => {
            setNum(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    
    return (
        <div className = {styles.main}>
            <div className={styles.h1}>
                카카오톡 공유해서 맥북에어
            </div>
            <div className = {styles.h2}>
                당첨 확률 배로 만들자!!
            </div>
            <div className = {styles.description}>
                <span>(공유를 통해 참여하는 친구가 N명이라면, 당첨확률이 N+1배가 됩니다.</span>
                <span className = {styles.important}> 단, 반드시 추천인 이름을 기입하셔야 합니다</span>
                <span>)</span>
            </div>
            <img src = {macbookair} className = {styles.macbookair}/>
            {/* <div className = {styles.curr}>
                <span>현재 공유한 사람은 총 </span>
                <span className={styles.curr_num}>{num}</span>
                <span>명입니다.</span>
            </div>
            <div className = {styles.event}>
                <div>
                    공유해주시는 선착순 100분께
                </div>
                <div>베스킨라빈스 파인트 아이스크림 기프티콘을 드립니다!!</div>
            </div> */}
            {/* <div className={styles.event_end}>
                <div>베스킨라빈스 이벤트는 마감되었습니다ㅠㅠ</div>
            </div> */}
            <div className = {styles.line}>공유하러 가기</div>
            <div className = {styles.line0}>(서울대 학생 혹은 관련된 분들에게만 공유 부탁드립니다)</div>
            <button onClick={shareKakao} className = {styles.kakaobutton}>
                <img src = {kakaoLogo} className = {styles.image}/>
            </button>
            
            <div className = {styles.final_announcement}>
                <div>사전예약 이벤트는 4월 18일부터 5월 1일까지 2주간 진행되며 중복참여는 불가능합니다.
                    또한, 종료 후 1주일 내 추첨을 통해 경품을 지급하며 연락처가 잘못 기입되었거나 부적절할 경우, 경품 지급이 취소되는 점 유의바랍니다.</div>
            </div>
            <div className={styles.tel}>Tel. 0506-545-5614</div>
        </div>
    )
};


export default KakaoLink;