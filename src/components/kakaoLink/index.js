import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

const KakaoLink = () => {
    const SearchBtn = styled.button`
        margin: 10px;
        border: none;
        border-radius: 4px;
        height: 25px;
        font-size: 18px;
        background-color: #74b9ff;
        color: white;
        :hover{
            background-color: #99c6f5;
        }
        `;
    const handle = () => {
        if (navigator.share) {
            navigator.share({
                title: '배달긱 사전예약 사이트',
                text: 'Hello World',
                url: 'https://yunkim-kaist.github.io/Reservation/',
            });
        }else{
            alert("공유하기가 지원되지 않는 환경 입니다.")
        }
      }
    
    return (
        <SearchBtn onClick={() => {handle()}}>
        공유하기
        </SearchBtn>
    )
};


export default KakaoLink;