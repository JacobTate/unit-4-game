$(document).ready(function () {

    //variables
    var guessedNum = 0;
    var wins = 0;
    var losses = 0;

    //gets a random number 1-100
    var random_number = Math.floor((Math.random() * 100) + 1);
    // gets random numbers 1-10 for the images
    var img1_num = Math.floor((Math.random() * 10) + 1);
    var img2_num = Math.floor((Math.random() * 10) + 1);
    var img3_num = Math.floor((Math.random() * 10) + 1);
    var img4_num = Math.floor((Math.random() * 10) + 1);

    //displays the number (random_number)

    $("#game_num").text(random_number);

    $(".image").on("click", function () {





        var picked_image = $(this).val();

        console.log(picked_image);
        //looks at the value of the image clicked on to determine what image (button) was clicked
        //image 1 (diamond)
        if (picked_image === "1") {
            console.log(img1_num);
            //adds the random number 1-10 (img1_num) number to the guessedNum variable
            guessedNum += img1_num;
        }
        //image 2 (emerald)
        else if (picked_image === "2") {
            console.log(img2_num);
            //adds the random number 1-10 (img2_num) number to the guessedNum variable
            guessedNum += img2_num;
        }
        //image 3 (ruby)
        else if (picked_image === "3") {
            console.log(img3_num);
            //adds the random number 1-10 (img3_num) number to the guessedNum variable
            guessedNum += img3_num;
        }
        //image 3 (sapphire) 
        else if (picked_image === "4") {
            console.log(img4_num);
            //adds the random number 1-10 (img4_num) number to the guessedNum variable
            guessedNum += img4_num;
        }
    // if the sum of the 4 img numbers is = to the random_number (1-100) run the win code
        if (guessedNum === random_number) {
            alert("you won")
            wins++
        }
        //else if the sum if the 4 img numbers is greater than random_number ren the loss code
        else if(guessedNum > random_number){
            alert("you lost")
            losses ++
        }

$("#displayed_guess").text(guessedNum);
        //console.log(guessedNum);




    });




});