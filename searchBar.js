/*jshint esversion: 6 */
/*globals $:false */
(function(){
    "use strict";

    $(document).ready(function(){
        let input = document.getElementById("bar");
        
        $(input).keyup(function(event) {
            if (event.keyCode === 13) {
                let class_name = input.value.toUpperCase();

                // Validates the input
                if(validateInput(class_name)){
                    // Checks if I have notes for that course.
                    if(checkValidCourse(class_name)){
                        // Goes to the notes page.
                        let class_level = class_name[3];
                        window.location.href = `https://rlqyl.github.io/${class_level}-Level/${class_name}/${class_name}.html`;
                    }
                    else{
                        document.getElementById("error").innerHTML = "Course not found";
                    }
                }else{
                    document.getElementById("error").innerHTML = "Invalid input";
                }

                // Clears the search bar.
                input.value="";
            }
        });
    });

    function validateInput(course_code){
        // Sanitizes the input
        course_code = course_code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

        // Checks if the length of the input is 6 characters exactly and
        // if it matches the utsc course code format.
        return (course_code.length === 6 && course_code.match(/^[A-Z]{4}[0-9]{2}/) !== null);
    }

    function checkValidCourse(course_code){
        // Checks if the course entered is one I have notes for.
        let classes = [
            "CSCA67", "LINA01", "MATA31", "MATA37", "MGTA01", "MGTA02", "PSYA01", "PSYA02",
            "CSCB09", "CSCB20", "CSCB63", "LINB18", "MATB24", "MATB41", "MATB44", "STAB52",
            "CSCC01", "CSCC09", "CSCC24", "CSCC37", "CSCC43", "CSCC63", "MATC44",
            "CSCD01"
        ];
        return (classes.includes(course_code));
    }
}());