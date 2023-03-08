const saat = document.getElementById("elc");
const hours = document.getElementById("hours");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const getTime = () => {
    setInterval(() => {
        let date = new Date();
        let hour = date.getHours();
        let minut = date.getMinutes();
        let second = date.getSeconds();
        saat.textContent = (`${hour}:${minut}:${second}`);
        sec.style.transform = `rotate(${180 + (second * 6)}deg)`;
        min.style.transform = `rotate(${180 + (minut * 6)}deg)`;
        hours.style.transform = `rotat(${180 + (hour * 30)}deg)`;
    }, 1000);
};
getTime();



// let d = new Date();
// let minutes = d.getMinutes();
// let hours = d.getHours();
// console.log(hours)
// console.log(minutes)


// console.log(hours*30 + minutes/2 - 360);


// class red
//class redClass
//class red-class
//class red_class
