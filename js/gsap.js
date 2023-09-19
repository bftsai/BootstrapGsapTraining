//load ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

const bluebox=document.querySelector(".bluebox"); //宣告bluebox 變數
const pinkbox=document.querySelector(".pinkbox"); //宣告pinkbox 變數
const blackbox=document.querySelector(".blackbox"); //宣告blackbox 變數
const greenbox=document.querySelector(".greenbox"); //宣告greenbox 變數
//宣告timeline 變數(tl)，定義使用gsap timeline 公式
const tl=gsap.timeline();
const tl1=gsap.timeline();

//同一個時間軸(tl)，會按照程式碼先後順續運行，前者運行完畢，後者才會開始運行
tl.fromTo(bluebox,{
    backgroundColor: "red",
},{
    delay: 5,
    duration: 5,
    ease: Bounce.easeOut, //動畫速率效果
    y: -500,
    background: "purple",
    x: 200,
    rotate: 360,
}),
//let pinkbox ,blackbox move at same time 
tl.to(pinkbox,{ 
    x: 500,
    duration: 1,
}),
tl.to(blackbox,{
    y: 100,
},"-=1"), //因為pinkbox 動畫時間為1秒，故將blackbox 動畫時間減一秒開始，即可與pinkbox 同時啟動
tl1.to(greenbox,{
    delay: 5,
    x: 300,
})
const yellowbox=document.querySelector(".yellowbox"); //宣告yellowbox 變數
const lighterbox=document.querySelector(".lighterbox"); //宣告lighterbox 變數
const h1=document.querySelector("h1"); //宣告h1 變數

gsap.to(lighterbox,{ //被指定元素
    x: 500,
    rotate: 360,
    scrollTrigger: {
        trigger: yellowbox, //表示當螢幕滑到yellowbox 即可觸發此動畫效果
        //markers: true,
        start: "top center",
        endTrigger: h1, //設定結束trigger 為h1
        scrub: 3, //隨著使用者滑鼠滾輪上下滾動，動畫會慢5秒跟上
        end: "top 100px", //單位預設為px 可改為%
        /*
            toggleActions: "onEnter onLeave onEnterBack onLeaveBack"
            onEnter - scroller-start 向前越過“start”(通常在觸發器滾動到視圖時)
            onLeave - scroller-end 向前越過"end"(通常在觸發器滾動出視圖時)
            onEnterBack - scroller-end 向後過去“end”(通常當觸發器滾動回視圖時)
            onLeaveBack - scroller-start 向後過“start”(通常當觸發器向後淡出視圖時)
            "play 播放、pause 暫停、resume 繼續、reverse 倒退、restart 重新開始、reset 重置、complete 完成、none 無" state for choice 
        */
            toggleActions: "restart pause reverse pause"
    }
})  
gsap.to(yellowbox,{ //被指定元素
    x: 500,
    rotate: 360,
    scrollTrigger: {
        trigger: yellowbox, //表示當螢幕滑到yellowbox 即可觸發此動畫效果
        //markers: true,
        start: "top center",
        endTrigger: h1, //設定結束trigger 為h1
        scrub: true, //動畫隨著使用者滑鼠滾輪，上下滾動的速率來調整動畫
        end: "top 100px", //單位預設為px 可改為%
        /*
            toggleActions: "onEnter onLeave onEnterBack onLeaveBack"
            onEnter - scroller-start 向前越過“start”(通常在觸發器滾動到視圖時)
            onLeave - scroller-end 向前越過"end"(通常在觸發器滾動出視圖時)
            onEnterBack - scroller-end 向後過去“end”(通常當觸發器滾動回視圖時)
            onLeaveBack - scroller-start 向後過“start”(通常當觸發器向後淡出視圖時)
            "play 播放、pause 暫停、resume 繼續、reverse 倒退、restart 重新開始、reset 重置、complete 完成、none 無" state for choice 
        */
            toggleActions: "restart pause reverse pause"
    }
})
const tlscrolltrigger=gsap.timeline({ //定義timeline 以及 scrollTrigger 
    scrollTrigger: {
        trigger: h1, //表示當螢幕滑到yellowbox 即可觸發此動畫效果
        //markers: true,
        start: "top center",
        endTrigger: h1, //設定結束trigger 為h1
        scrub: true, //動畫隨著使用者滑鼠滾輪，上下滾動的速率來調整動畫
        pin: true,
        end: "top 100px", //單位預設為px 可改為%
        /*
            toggleActions: "onEnter onLeave onEnterBack onLeaveBack"
            onEnter - scroller-start 向前越過“start”(通常在觸發器滾動到視圖時)
            onLeave - scroller-end 向前越過"end"(通常在觸發器滾動出視圖時)
            onEnterBack - scroller-end 向後過去“end”(通常當觸發器滾動回視圖時)
            onLeaveBack - scroller-start 向後過“start”(通常當觸發器向後淡出視圖時)
            "play 播放、pause 暫停、resume 繼續、reverse 倒退、restart 重新開始、reset 重置、complete 完成、none 無" state for choice 
        */
        toggleActions: "restart pause reverse pause"
    }
})
tlscrolltrigger.from(h1,{ //被指定元素
    x: -400,
    duration: 3,
})
tlscrolltrigger.to(h1,{
    color: "pink",
})
tlscrolltrigger.to(h1,{
    x: 400,
    duration: 3,
})

const orangebox=document.querySelector(".orangebox");
const ghostbox=document.querySelector(".ghostbox")
gsap.to(orangebox,{
    x: 500,
    rotate: 360,
    duration: 3,
    ease: "none",
    scrollTrigger: {
        trigger: orangebox,
        start: "top center",
        end: "top 100px",
        scrub: true,
        //markers: true,
        //因pin 是在動畫元素外層加上div 以及padding bottom，所以被pin 的元素不能帶有position: absolute;否則被pin 的元素會直接出現在padding bottom 之後
        pin: ghostbox,
    }
})
    
const bgGroup=document.querySelector(".bg-group");
const bgPurple=document.querySelector(".bg-purple");
const bgLighter=document.querySelector(".bg-lighter");
const bgDanger=document.querySelector(".bg-danger");
const bgWarning=document.querySelector(".bg-warning");
const bgInfo=document.querySelector(".bg-info");
const tlPinSwitchPage=gsap.timeline();
gsap.defaults({
    ease: "none",
    duration: 2,
});
//鏈式寫法
tlPinSwitchPage.from(bgLighter,{xPercent: -100}).from(bgDanger,{xPercent: 100}).from(bgWarning,{yPercent:-100}).from(bgInfo,{yPercent: 100});

ScrollTrigger.create({
    animation: tlPinSwitchPage,
    start: "top top",
    end: "+=4000",
    scrub: true,
    //因pin 是在動畫元素外層加上div 以及padding bottom，所以被pin 的元素不能帶有position: absolute;否則被pin 的元素會直接出現在padding bottom 之後
    pin: bgGroup,
    markers: true,
    //scrolltrigger 監測滾動並預測固定，避免未固定內容閃爍，預設值為0
    anticipatePin: 1,
})