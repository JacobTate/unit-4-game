$(document).ready(function () {

    //variables
    var guessedNum = 0;
    var wins = 0;
    var losses = 0;

    //gets a random number 1-100 
    var random = function () {
        rand_num = Math.floor((Math.random() * 100) + 1);
        return rand_num
    };
    // gets random numbers 1-10 for the images
    function rand1() {
        num1 = Math.floor((Math.random() * 10) + 1);
        return num1
    }

    function rand2() {
        num2 = Math.floor((Math.random() * 10) + 1);
        return num2
    }

    function rand3() {
        num3 = Math.floor((Math.random() * 10) + 1);
        return num3
    }

    function rand4() {
        num4 = Math.floor((Math.random() * 10) + 1);
        return num4
    }


    //reset  function
    function reset() {
        //sets the score to 0
        guessedNum = 0;
        //resets the random number 1-100
        random_number = random();
        //resets the numbers for the images 1-10
        //diamond
        img1_num = rand1();
        //emerald
        img2_num = rand2();
        //ruby
        img3_num = rand3();
        //sapphire
        img4_num = rand4()
        //displays the new number 1-100
        $("#game_num").text(rand_num);
    }

    //displays the number (random_number)
    var random_number = random();
    $("#game_num").text(random_number);
    //calls the functions to get the random number for the images
    var img1_num = rand1();
    var img2_num = rand2();
    var img3_num = rand3();
    var img4_num = rand4();

    $(".image").on("click", function () {

        var picked_image = $(this).val();

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
            //adds to the wins variable
            wins++
            //displays the # of wins
            $("#wins").text("wins: " + wins);
            //runs the reset function
            reset();
        }
        //else if the sum if the 4 img numbers is greater than random_number ren the loss code
        else if (guessedNum > random_number) {
            //adds to the losses variable
            losses++
            //displays the # of losses
            $("#losses").text("losses: " + losses);
            //runs the reset function
            reset();
        }
        //displays the score
        $("#displayed_guess").text(guessedNum);





    });

  


});