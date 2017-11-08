$(".fox_in_btn").on("click", foxInBtnHandler);

function foxInBtnHandler() {
    console.log("fox kommer ind");

    $("#fox_container").removeClass("fox_start_pos");
    $("#fox_container").addClass("fox_move_left");

    $("#fox_sprite").addClass("fox_walkcycle");
}

$(".fox_sit_btn").on("click", foxSitBtnHandler);

function foxSitBtnHandler() {
    console.log("Fox sætter sig");


    $("#fox_sprite").removeClass("fox_walkcycle");
    $("#fox_sprite").removeClass("fox_move_left");
    $("#fox_sprite_sit").addClass("fox_sit");


}

$(".fox_blink_btn").on("click", foxBlinkBtnHandler);

function foxBlinkBtnHandler() {
    console.log("Fox blinker");


    $("#fox_sprite").removeClass("fox_sit");
    $("#fox_sprite").addClass("fox_blink");


}

$(".squirrel_nut_btn").on("click", squirrelNutBtnHandler);

function squirrelNutBtnHandler() {
    console.log("Squirrel kaster nut");


    $("#squirrel_sprite").addClass("squirrel_nut");


}


$(".fox_angry_btn").on("click", foxAngryBtnHandler);

function foxAngryBtnHandler() {
    console.log("Fox er sur");

    $("#fox_sprite").removeClass("fox_blink");
    $("#fox_sprite").addClass("fox_angry");


}

$(".rain_btn").on("click", rainBtnHandler);

function rainBtnHandler() {
    console.log("Rain");

    $("#fox_sprite").removeClass("fox_angry");
    $("#scene").removeClass("sommer_scene");

    $("#fox_sprite").addClass("fox_sad");
    $("#rain_container").addClass("rain_sprite");
    $("#scene").addClass("regn_scene");
    $("#squirrel_sprite").addClass("squirrel_happy");
}


$(".wind_btn").on("click", windBtnHandler);

function windBtnHandler() {
    console.log("Wind");



    $("#fox_sprite").removeClass("fox_sad");
    $("#rain_container").removeClass("rain_sprite");
    $("#squirrel_sprite").removeClass("squirrel_happy");

    $("#wind_container").addClass("wind_sprite");
    $("#scene").addClass("wind_scene");
    $("#squirrel_sprite").addClass("squirrel_windy");
    $("#squirrel_container").addClass("squirrel_move_right");
}


$(".wrickle_btn").on("click", wrickleBtnHandler);

function wrickleBtnHandler() {
    console.log("Wrickle");



    $("#fox_sprite").removeClass("fox_sad");
    $("#rain_container").removeClass("rain_sprite");
    $("#squirrel_sprite").removeClass("squirrel_happy");
    $("#squirrel_container").removeClass("squirrel_move_right");
    $("#squirrel_container").removeClass("squirrel_start_pos");
    $("#squirrel_sprite").removeClass("squirrel_windy");

    $("#wind_container").addClass("wind_sprite");
    $("#scene").addClass("wind_scene");
    $("#squirrel_sprite").addClass("squirrel_wrickle");
    $("#squirrel_container").addClass("squirrel_wrickle_pos");
}
