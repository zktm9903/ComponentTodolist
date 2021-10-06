export default class clock{

    constructor(){
        setInterval(this.timechk, 1000); // 1초마다 실행
    }

    timechk(){

        var Ptimechk = document.getElementById('current');
        var time = new Date();

        var year = time.getFullYear();
        var month = time.getMonth();
        var date = time.getDate();
        var day = time.getDay();
        var week = ['일', '월', '화', '수', '목', '금', '토'];

        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();

        Ptimechk.innerText = 
          `${year}년 ${month + 1}월 ${date}일 ${week[day]}요일 ` +
          `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    
    }
}