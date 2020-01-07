$(document).ready(function () {

    //variables


    var img1_num = Math.floor((Math.random() * 10) + 1);
    var img2_num = Math.floor((Math.random() * 10) + 1);
    var img3_num = Math.floor((Math.random() * 10) + 1);
    var img4_num = Math.floor((Math.random() * 10) + 1);
    //gets a random number 1-100
    var random_number = Math.floor((Math.random() * 100) + 1);
    //displays the number

    $("#game_num").text(random_number);

    $(".image").on("click", function () {





        var picked_image = $(this).val();

        console.log(picked_image);
        //if the image clicked is equal to the value of the image (button)
        if (picked_image === "1") {
            console.log(img1_num);
        } else if (picked_image === "2") {
            console.log(img2_num);
        } else if (picked_image === "3") {
            console.log(img3_num);
        } else if (picked_image === "4") {
            console.log(img4_num);
        }




    });




});