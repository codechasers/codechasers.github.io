 console.log("hello  its chinku");
 let clickme=document.getElementsByClassName("clickme");
 function play()
 {
        let clickme=document.getElementById("clickme");
        console.log(" click me fired");
        let para= document.getElementById("paragraph");
        let centerdiv =document.getElementById("center_div");
        let header= document.getElementById("header")
        const music = new Audio('party sound.mp3');
        //  para.style.display="block";
        centerdiv.style.cssText = "background-image: url(birthdaygif2.gif);  background-: no-repeat ; background-size: cover;  ";
        clickme.style.display="none";
        header.style.display="block";
        music.play();
        confetti.start();
      
        const start = () => {
      setTimeout(function() {
        confetti.start()
       
    }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

//  Stop

const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};

start();
stop();
 }


 