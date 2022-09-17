function newTab(){
    window.open("https://www.espn.com/soccer/player/_/id/125824/robert-lewandowski", "_blank");
}
function newTab2(){
    window.open("https://www.bundesliga.com/en/bundesliga/player/marco-reus", "_black");
}
function newTab3(){
    window.open("https://www.transfermarkt.co.in/mesut-ozil/profil/spieler/35664", "_blank")
}
function clubcheck(){
    let text;
    let club1 = document.getElementById("club1").value;
    let club2 = document.getElementById("club2").value;
    let club3 = document.getElementById("club3").value;
    if(club1.length === 0){
        text = "input can't be left blank!!";
    }
    if(club2.length === 0){
        text = "input can't be left blank!!";
    }
    if(club3.length === 0){
        text = "input can't be left blank!!";
    }
    club1 = club1.toUpperCase();
    club2 = club2.toUpperCase();
    club3 = club3.toUpperCase();
    while(club1.length !=0 && club2.length !=0 && club3.length !=0){
        if(club1 === club2){
            text = "clubs can't be repeated";
            break
            }
        if(club1 === club3){
            text = "clubs can't be repeated";
            break
        }
        if(club2===club3){
            text = "clubs can't be repeated";
            break
        }
        else{
            text="Good choice";
            break
        }
    }
    document.getElementById("check").innerHTML = text;
}
function result(){
    let InputName = document.getElementById("name").value;
    document.getElementById("results").innerHTML =InputName;
    
}
result();
