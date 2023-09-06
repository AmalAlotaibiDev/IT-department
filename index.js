

var myDate = new Date();
var hrs = myDate.getHours();



if (hrs < 12)
    document.write("Good Morning");

else if (hrs >= 12 && hrs <= 17)
    document.write("Good Afternoon");

else if (hrs >= 17 && hrs <= 24)
    document.write("Good Evening");

    const date = new Date();
    const n = date.toDateString();
    const time = date.toLocaleTimeString();


    