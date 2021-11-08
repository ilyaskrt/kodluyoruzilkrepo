function name() {
    let name = prompt("Lütfen adınızı giriniz : ");
	document.getElementById("myName").innerText = name;
  
  }

function learnTime() {
    let date = new Date();
    let hours = date.getHours(); 
    let minute = date.getMinutes(); 
    let seconds = date.getSeconds(); 
    let day = date.getDay(); 
	
	hours = hours < 10 ? "0" + hours : hours;
    minute = minute < 10 ? "0" + minute : minute;
    seconds = seconds < 10 ? "0" + seconds : seconds;
	// saat dakika ve saniye 10 dan küçük olması durumunda başına sıfır ekliyoruz. 
    switch (day){
		case 1:
		day = "Pazartesi";
		break;
		case 2:
		day = "Salı";
		break;
		case 3:
		day = "Çarşamba";
		break;
		case 4:
		day = "Perşembe";
		break;
		case 5:
		day = "Cuma";
		break;
		case 6:
		day = "Cumartesi";
		break;
		case 7:
		day = "Pazar";
		break;
    }
 
  
    let time = hours + ":" + minute + ":" + seconds + " " + day;
     
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = `${time}`

  }
 name(); 
 learnTime();
 