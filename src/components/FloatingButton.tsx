import { log } from "console";
import React, {useEffect, useState} from "react";

const isMobile = /Mobi/i.test(window.navigator.userAgent); // "Mobi" 가 User agent에 포함되어 있으면 모바일

const FloatingButton = () => {
    let lastScrollY = window.scrollY;
    const audioUrl = 'https://firebasestorage.googleapis.com/v0/b/wedding-9b3cb.appspot.com/o/Ordinary_Confession.mp3?alt=media&token=3a07d846-1c0d-4d9d-bd61-af2f39f48be6'

    // UP 버튼
    const [topBtnBottom, setTopBtnBottom] = useState(-5.2);
    const [rotation, setRotation] = useState(0);

    // 오디오 플레이어
    const audioEle = new Audio(audioUrl);
    const [audio] = useState<HTMLAudioElement>(audioEle);
    const [isPlaying, setIsPlaying] = useState(false);

    // 재생 정지 버튼 스타일
    const [muteBtnTop, setMuteBtnTop] = useState(2);

    // 상단으로
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const togglePlay = () => {
        if(audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.volume = 0.3;
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const initAudio = () => {
        if(isMobile) {
            console.log('aa', window.navigator.userAgent)
            togglePlay()
        }
    }

    useEffect(() => {
        initAudio();
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const bottomPosition = document.documentElement.scrollHeight - window.innerHeight;

            if (window.scrollY === 0 || window.scrollY >= bottomPosition) {
                // 최상단 또는 최하단에 도달했을 때
                setMuteBtnTop(2); // 상단 버튼 노출
                setTopBtnBottom(4.8); // 하단 버튼 노출
            } else if (window.scrollY > lastScrollY) {
                // 스크롤 내릴 때
                setMuteBtnTop(-5.2);
                setTopBtnBottom(4.8);
            } else {
                // 스크롤 올릴 때
                setMuteBtnTop(2);
                setTopBtnBottom(-5.2);
            }

            lastScrollY = window.scrollY;

            // 현재 스크롤 위치에 따라 회전 각도 계산
            const rotation = window.scrollY % 360;
            setRotation(rotation);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id="toast" className="toast">
                <p>클립보드에 복사되었습니다.</p>
            </div>
            <button className="audio" style={{ top: `${muteBtnTop}rem` }} onClick={togglePlay}>
                {!isPlaying ? <i className="ic-mute" /> : <i className="ic-unmute" />}
            </button>
            <button className="top" style={{ bottom: `${topBtnBottom}rem`, transform: `rotate(${rotation}deg)` }} onClick={scrollToTop}>UP</button>
        </>
    )
}

export default FloatingButton