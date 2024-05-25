let userPrompt = prompt("Enter Your Name");
let user_name = document.getElementById("user_name");
let userHeading = ("User: 👋" + userPrompt);
user_name.innerHTML = userHeading;

let list = document.getElementById("list");
let typing = document.getElementById("typing");
let input = document.getElementById("input");
let myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function() {
    sendMessage();
});

function checkEnterKey(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    var value = input.value.trim();
    if (value === "") {
        console.log(value);
        return;
    }
    list.innerHTML += "<li class='right-side'>" + value + "</li>";
    typing.style.display = "block";

    if (
        [
            "Salam",
            "salam",
            "assalam o alikum",
            "salam bhai",
            "asalamoalikum ",
        ].indexOf(value.toLowerCase()) !== -1
    ) {
        setTimeout(function() {
            list.innerHTML +=
                "<li class='left-side'><img src='images/aiImage.png' alt='' width='20px' height='20px'><br> Walikum as salam</li>";
        }, 2000);
        setTimeout(function() {
            list.innerHTML +=
                "<li class='right-side'><img src = 'images/aiImage.png' width='20px' height='20px'<br> Kese HOo ?? ";
            typing.style.display = "none";
        }, 4000);
        input.value = "";
    } else if (
        [
            "ma thek ho",
            "thek ho",
            "thik ho",
            " sahi ho",
            "thek thak",
            "alhumdulillah",
            "hek ho ap sunao",
            "set ho",
            " acha ho",
            " fine",
            "i am fine ",
        ].indexOf(value.toLowerCase()) !== -1
    ) {
        setTimeout(function() {
            list.innerHTML +=
                "<li class='left-side'><img src = 'images/aiImage.png' width='20px' height='20px'<br> Ma Apki Kya Madat Krskta HOo?? </li>";
            typing.style.display = "none";
        }, 2000);
        input.value = "";
    } else if (
        [
            "ma addmsission lena chata ho",
            "kya mjhe addmission mil sakta ha",
            "admission lena hai",
            "admission lena tha",
            "mujhe smit mein admission chaiye",
            "admission chaiye",
            "admission chaiye hai",
            "admission chaiye tha",
        ].indexOf(value.toLowerCase()) !== -1
    ) {
        setTimeout(function() {
            list.innerHTML +=
                "<li class = 'left-side'><img src = 'images/aiImage.png' width='20px' height='20px' <br> Apko kis Field mein lena hai Admission Web and Mobile App Development, Graphic Designing, Digital Marketing ya phir Cloud Generative AI.</li>";
            typing.style.display = "none";
        }, 2000);
        input.value = "";
    } else if (
        [
            "web and mobile app development",
            "web & mobile app development",
            "web and mobile app development",
            "web developemet",
            "graphic designing ",
            "digital marketing",
            "cloud generative ai",
        ].indexOf(value.toLowerCase()) !== -1
    ) {
        setTimeout(function() {
            list.innerHTML +=
                "<li class = 'left-side'><img src = 'images/aiImage.png' width='20px' height='20px' <br>Apna Name Btyein??</li>";
            typing.style.display = "none";
        }, 2000);
        input.value = "";
    } else if (
        [
            "umar",
            "umar hasnain",
            "umer",
            "wasii",
            "muhammad fareed",
            "islam",
            "muzammil",
            "arif",
            "ahmed",
            "sufan",
            "ali",
            "haris",
            "aqib",
            "salman",
            "hassan",
            "hamza",
            "danial",
            "dani",
        ].indexOf(value.toLowerCase()) !== -1
    ) {
        setTimeout(function() {
            list.innerHTML +=
                "<li class = 'left-side'><img src = 'images/aiImage.png' width='20px' height='20px' <br>Apni Qualification Btayein??</li>";
            typing.style.display = "none";
        }, 2000);
        input.value = "";
    } else if (
        [
            "matric",
            "middle",
            "inter",
            "graduation",
            "master",
            "underinter",
            "matriculation",
            "intermediate",
            "prhta he nh ho",
            "school ki shakal he nhi dkhe kabhi",
        ].indexOf(value.toLowerCase()) !== -1
    ) {
        setTimeout(function() {
            list.innerHTML +=
                "<li class = 'left-side'><img src = 'images/aiImage.png' width='20px' height='20px' <br>Apni Birthday Month Batein Counting Numbering Ma Like:1,2,3,4,....??</li>";
            typing.style.display = "none";
        }, 2000);
        input.value = "";
    } else if (
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].indexOf(
            value.toLowerCase()
        ) !== -1
    ) {
        setTimeout(function() {
            list.innerHTML +=
                "<li class='left-side'><img src='images/aiImage.png' alt='' width='20px' height='20px'><br> Mene Apki Saari Details Save Krli hain main yeh Roll Number bana kr derha hon apko, Admission hogya hai aapka mubarak ho " +
                Math.random().toFixed(5).replace(".", "") +
                "</li>";
            typing.style.display = "none";
        }, 2000);
        input.value = "";
    } else if (
        [
            "thanks",
            "thnx",
            "thank you so much",
            "jazakallah",
            "shukriya",
            "mehrbani",
        ].indexOf(value.toLowerCase()) !== -1
    ) {
        setTimeout(function() {
            list.innerHTML +=
                "<li class='left-side'><img src='images/aiImage.png' width='20px' height='20px'><br> Koi baat nhi koi aur kaam ho tou btayega🤝</li>";
            typing.style.display = "none";
        }, 2000);
        input.value = "";
    } else {
        setTimeout(function() {
            list.innerHTML +=
                "<li class='left-side'><img src = 'images/aiImage.png' width='20px' heigth='20px' <br> Sorry! May Apki Baat Samjha Nhii...";
            typing.style.display = "none";
        }, 2000);
        input.value = "";
    }
}