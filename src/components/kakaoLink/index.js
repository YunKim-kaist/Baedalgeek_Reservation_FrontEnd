import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useScript } from "../../hooks";
import kakaoLogo from "../../img/kakao.png";
import KakaoShareButton from "../KakaoShareButton";
const KakaoLink = () => {
    // const SearchBtn = styled.button`
    //     margin: 10px;
    //     border: none;
    //     border-radius: 4px;
    //     height: 25px;
    //     font-size: 18px;
    //     background-color: #74b9ff;
    //     color: white;
    //     :hover{
    //         background-color: #99c6f5;
    //     }
    //     `;
    // const handle = () => {
    //     if (navigator.share) {
    //         navigator.share({
    //             title: '배달긱 사전예약 사이트',
    //             text: 'Hello World',
    //             url: 'https://yunkim-kaist.github.io/Reservation/',
    //         });
    //     }else{
    //         alert("공유하기가 지원되지 않는 환경 입니다.")
    //     }
    //   }
    
    // return (
    //     <SearchBtn onClick={() => {handle()}}>
    //     공유하기
    //     </SearchBtn>
    // )

    // const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
	// const KakaoShareButton = styled.a`cursor: pointer;`;
    // const KakaoIcon = styled.img`
    //     width: 48px;
    //     height: 48px;
    //     border-radius: 24px;
    // `;
    // const currentUrl = "https://yunkim-kaist.github.io/Reservation/";
    // // kakao sdk 초기화하기
	// // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
	// useEffect(() => {
	// 	if (status === "ready" && window.Kakao) {
	// 		// 중복 initialization 방지
	// 		if (!window.Kakao.isInitialized()) {
	// 			// 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
	// 			window.Kakao.init("4a4a3c7a7800e2a0af56d2d6455b429b");
	// 		}
	// 	}
	// }, [status]);	
    // const handleKakaoButton = () => {
    //     window.Kakao.Link.sendScrap({
    //         requestUrl: currentUrl,
    //     });
    // };




    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true
        document.body.appendChild(script)
    
        return () => {
          document.body.removeChild(script)
        }
      }, [])
    return(
        // <KakaoShareButton onClick={handleKakaoButton}>
        //     <KakaoIcon src={kakaoLogo}></KakaoIcon>
        // </KakaoShareButton>
        <div>
            <KakaoShareButton />
      </div>
    );
};


export default KakaoLink;