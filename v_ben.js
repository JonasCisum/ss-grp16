$(".enter").on("click", windBtnHandler);

function windBtnHandler() {
    console.log("Wind");


    $("#logo").removeClass("logo");
    $("#enter").removeClass("enter");
    $("#scene").removeClass("sommer_scene");

    $("#scene").addClass("dreng_sprite");

    $("#mobil_container").removeClass("mobil_start_pos");
    $("#mobil_container").addClass("mobil_start");

    $("#kontakt").removeClass("kontakt");
    $("#enter").addClass("button_hidden");




}


$(".vibrer_btn").on("click", vibrerBtnHandler);

function vibrerBtnHandler() {
    console.log("Vibrer");



    $("#mobil_sprite").addClass("mobil_vibrer");
    $("#scene").removeClass("dreng_sprite");
    $("#scene").addClass("dreng_kig_op");




}

$(".msg_btn").on("click", msgBtnHandler);

function msgBtnHandler() {
    console.log("Besked");


    $("#besked_container").removeClass("besked_start_pos");
    $("#besked_sprite").addClass("besked_one");
    $("#scene").removeClass("dreng_kig_op");
    $("#scene").addClass("dreng_kig_tlf");




}


$(".samtale_btn").on("click", samtaleBtnHandler);

function samtaleBtnHandler() {
    console.log("Samtale");


    $("#besked_container").addClass("besked_start_pos");
    $("#scene").removeClass("dreng_kig_tlf");
    $("#samtale_container").removeClass("samtale_start_pos");

    $("#mobil_container").addClass("mobil_start_pos");
    $("#samtale_container").addClass("samtale_sprite");




}


$(".chok_btn").on("click", chokBtnHandler);

function chokBtnHandler() {
    console.log("Chok");


    $("#chok_container").addClass("chok_sprite");
    $("#besked_container").addClass("besked_start_pos");
    $("#mobil_container").addClass("mobil_start_pos");
    $("#chok_container").removeClass("chok_start_pos");
    $("#samtale_container").removeClass("samtale_sprite");
    $("#samtale_container").addClass("samtale_bg");






}

$(".valg_btn").on("click", valgBtnHandler);

function valgBtnHandler() {
    console.log("valg");


    $("#chok_container").removeClass("chok_sprite");
    $("#mobil_container").removeClass("mobil_start");
    $("#samtale_container").removeClass("samtale_sprite");

    $("#samtale_container").addClass("samtale_bg");
    $("#mobil_container").addClass("mobil_start_pos");
    $("#chok_container").addClass("valg");

    $("#del").addClass("del");
    $("#kontakt").addClass("kontakt");




}

$("#del").on("click", delBtnHandler);

function delBtnHandler() {
    console.log("del");

    $("#samtale_container").removeClass("samtale_bg");
    $("#mobil_container").addClass("mobil_start_pos");
    $("#chok_container").removeClass("valg");

    $("#del").removeClass("del");
    $("#kontakt").removeClass("kontakt");

    $("#samtale_container").addClass("samtale_del");




}


$(".cracked_btn").on("click", crackedBtnHandler);

function crackedBtnHandler() {
    console.log("cracked");

    $("#mobil_container").addClass("mobil_start_pos");


    $("#samtale_container").removeClass("samtale_del");
    $("#samtale_container").addClass("samtale_cracked");




}


$(".hov_btn").on("click", hovBtnHandler);

function hovBtnHandler() {
    console.log("hov");

    $("#mobil_container").addClass("mobil_start_pos");

    $("#samtale_container").removeClass("samtale_cracked");
    $("#samtale_container").addClass("hov");
    $("#prov_igen").addClass("prov_igen");



}




$("#prov_igen").on("click", provIgenBtnHandler);

function provIgenBtnHandler() {
    console.log("prøv igen");



    $("#scene").removeClass("dreng_sprite");

    $("#mobil_container").addClass("mobil_start_pos");
    $("#mobil_container").removeClass("mobil_start");

    $("#kontakt").removeClass("kontakt");
    $("#enter").removeClass("button_hidden");

    $("#samtale_container").removeClass("hov");
    $("#prov_igen").removeClass("prov_igen");
    $("#logo").addClass("logo");
    $("#enter").addClass("enter");
    $("#scene").addClass("sommer_scene");


}








$("#kontakt").on("click", kontaktBtnHandler);

function kontaktBtnHandler() {
    console.log("kontakt");

    $("#mobil_container").addClass("mobil_start_pos");

    $("#samtale_container").removeClass("samtale_bg");
    $("#samtale_container").removeClass("samtale_del");
    $("#ps_samtale_container").addClass("ps_samtale_sprite1");

    $("#del").removeClass("del");
    $("#kontakt").removeClass("kontakt");
    $("#chok_container").removeClass("valg");

}

$(".skriv_til_ps2_btn").on("click", skrivPs2BtnHandler);

function skrivPs2BtnHandler() {
    console.log("skriv til ps2");

    $("#ps_samtale_container").removeClass("ps_samtale_sprite1");
    $("#ps_samtale_container").addClass("ps_samtale_sprite2");


}
$(".skriv_til_ps3_btn").on("click", skrivPs3BtnHandler);

function skrivPs3BtnHandler() {
    console.log("skriv til ps3");

    $("#ps_samtale_container").removeClass("ps_samtale_sprite2");
    $("#ps_samtale_container").addClass("ps_samtale_sprite3");
    $("#praemie").addClass("praemie");

}

$("#praemie").on("click", praemieBtnHandler);

function praemieBtnHandler() {
    console.log("præmie");


    $("#ps_samtale_container").removeClass("ps_samtale_sprite3");
    $("#praemie").removeClass("praemie");
    $("#ps_samtale_container").addClass("praemie_bg");
    $("#ga_til_ps").addClass("ga_til_ps");

}
