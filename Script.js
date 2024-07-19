var amt = 0
function scroll(){
    try{
    if (window.scrollY > 600){
        document.getElementById("Band_aid").style.visibility = "visible"
    }else{
    document.getElementById("Band_aid").style.visibility = "hidden"
    }
    document.getElementById("caption").style.top = window.scrollY*0.05+35+"vh"
    document.getElementById("water_w").style.top = -window.scrollY*0.07+10+"vh"
    // console.log(window.scrollY)
    document.getElementById("title").style.fontSize = window.scrollY*0.005+7+"vw"
    if (window.scrollY > 15){
        // document.getElementById("open").style.position="fixed"
        // document.getElementById("background").style.position="fixed"
        // document.getElementById("title").style.position="fixed"
        // document.getElementById("background").style.top="0px"
        document.getElementById("indicator").style.scale = 0
        document.getElementById("title").style.color = "transparent"

        document.getElementById("title").style.backgroundColor = "transparent"
        document.getElementById("title").style.position = "absoloute"
        document.getElementById("title").style.top = 30+"vw"
        document.getElementById("title").style.color = "#ffffff"
    } if (window.scrollY < 15){
        // document.getElementById("body").style.top=window.scrollY+60
        // document.getElementById("open").style.position="absolute"
        // document.getElementById("background").style.position="absolute"
        // document.getElementById("title").style.position="absolute"
        document.getElementById("background").style.top="11vw"
        document.getElementById("indicator").style.scale = 1
        document.getElementById("title").style.color = "#23001E"

        document.getElementById("title").style.backgroundColor = "transparent"
        document.getElementById("title").style.top = 0+"px"
        document.getElementById("title").style.position = "relative"
        document.getElementById("title").style.color = "#23001E"
    }
    document.getElementById("open").style.gap = window.scrollY*3+"px"
    }
    catch(TypeError){
        console.log("")
    }
    if (window.scrollY > 50){
        document.getElementById("navbar").style.scale = "1"
        document.getElementById("navbar").style.rotate = "0deg"
        document.getElementById("navbar").style.width = "100vw"
    }
    if (window.scrollY < 50){
        document.getElementById("navbar").style.scale = "0.9"
        document.getElementById("navbar").style.rotate = "0deg"
        document.getElementById("navbar").style.width = "100vw"
    }
}
function mm() {
    try{
        console.log("x: "+document.getElementById("button").getBoundingClientRect().x)
        console.log("y: "+document.getElementById("button").getBoundingClientRect().y)
        document.getElementById("redirect2").style.top = document.getElementById("button").getBoundingClientRect().y+"px"
        document.getElementById("redirect2").style.left = document.getElementById("button").getBoundingClientRect().x+"px"
    }catch(TypeError){
        console.log("")
    }
    }
// document.addEventListener("DOMContentLoaded",mm);
document.addEventListener("scroll",scroll);
function link(link){
    window.location.href = link
}
function clicked_nav (num){
    document.getElementById("button_"+num).style.boxShadow = "2px 2px 1px rgb(0, 0, 0, 0.5)"
    document.getElementById("button_"+num).style.backgroundColor = "rgb(70, 70, 70)"
    document.getElementById("button_"+num).style.scale = "0.9"
    setTimeout(reset,200,num)
  }
  function reset (num){
    document.getElementById("button_"+num).style.boxShadow = "5px 5px 2px rgba(0, 0, 0, 0.5)"
    document.getElementById("button_"+num).style.backgroundColor = "rgb(119, 119, 119)"
    document.getElementById("button_"+num).style.scale = "1"
    setTimeout(redirect,200,num)
  }
  
  function redirect (num) {
    console.log(num)
    if (num==1){
        window.location.href = "News2.html";
        page = 1
    }
    if (num==7){
        window.location.href = "Home.html";
        page = 1
    }
  }
function home () {
setTimeout(home2,100)
}
function home2 () {
window.location.href = "Home.html";
}

function play(num) {
    if (document.getElementById("pip").style.scale == "0") {
        if (num == 0) {
        document.getElementById("pip").style.scale = "1"
        document.getElementById("video").currentTime = "0"
        }
    }else{
        if (num == 1) {
            document.getElementById("pip").style.scale = "0"
            document.getElementById("video").currentTime = "0"
            document.getElementById("video").pause()
            }
    }
}
function redirect2(){
    // console.log("now")
    window.location.href = "News2.html";
}