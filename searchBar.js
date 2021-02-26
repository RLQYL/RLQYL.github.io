"use strict"
$(document).ready(function(){
    let input = document.getElementById("bar");
    let a_level_classes = ["CSCA67", "LINA01", "MATA31", "MATA37", "MGTA01", "MGTA02", "PSYA01", "PSYA02"];
    let b_level_classes = ["CSCB09", "CSCB20", "CSCB63", "LINB18", "MATB24", "MATB41", "MATB44", "STAB52"];
    let c_level_classes = ["CSCC01", "CSCC09", "CSCC24", "CSCC37", "CSCC43", "CSCC63", "MATC44"];
    let d_level_classes = ["CSCD01"];
    
    
    $(input).keyup(function(event) {
        if (event.keyCode === 13) {
            let class_name = input.value;
            if(class_name[3].toUpperCase() === "A" || class_name[3] === "1"){
                if(a_level_classes.includes(class_name.toUpperCase())){
                    window.location.href = `https://rlqyl.github.io/A-Level/${class_name.toUpperCase()}/${class_name.toUpperCase()}.html`;
                }
                else{
                    alert("Couldn't find the course you inputted.");
                }
            }
            else if(class_name[3].toUpperCase() === "B" || class_name[3] === "2"){
                if(b_level_classes.includes(class_name.toUpperCase())){
                    window.location.href = `https://rlqyl.github.io/B-Level/${class_name.toUpperCase()}/${class_name.toUpperCase()}.html`;
                }
                else{
                    alert("Couldn't find the course you inputted.");
                }
            }
            else if(class_name[3].toUpperCase() === "C" || class_name[3] === "3"){
                if(c_level_classes.includes(class_name.toUpperCase())){
                    window.location.href = `https://rlqyl.github.io/C-Level/${class_name.toUpperCase()}/${class_name.toUpperCase()}.html`;
                }
                else{
                    alert("Couldn't find the course you inputted.");
                }
            }
            else if(class_name[3].toUpperCase() === "D" || class_name[3] === "4"){
                if(d_level_classes.includes(class_name.toUpperCase())){
                    window.location.href = `https://rlqyl.github.io/D-Level/${class_name.toUpperCase()}/${class_name.toUpperCase()}.html`;
                }
                else{
                    alert("Couldn't find the course you inputted.");
                }
            }
            else{
                alert("Couldn't find the course you inputted.");
            }
        }
    });
});