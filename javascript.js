//  $("enCssSelector").on("click", etFunktionsNavn);

//  function etFunktionsNavn() {
/* Hvad der skal ske */
//  }

// $ fanger en #selector med ("")
// .addClass tilføjer en classe til selector/div id med ("")


// Comments end //

$("#btn_startposition").on("click", btn_startposition_klik);
$("#btn_louis_ind").on("click", btn_louis_ind_klik);
$("#btn_louis_ankommer").on("click", btn_louis_ankommer_klik);
$("#btn_louis_kigger_fra_A_til_B").on("click", btn_louis_kigger_fra_A_til_B_klik);
$("#btn_brugeren_klikker_paa_B").on("click", btn_brugeren_klikker_paa_B_klik);
$("#btn_reset").on("click", btn_reset_klik);


function btn_startposition_klik() {
    $("#store_A").addClass("startpos_store_A");
    $("#store_B").addClass("startpos_store_B");
    $("#louis_container").addClass("startpos_louis_container");
}

function btn_louis_ind_klik() {
    $("#louis_container").addClass("louis_container_kommer_ind");
    $("#louis_walkcycle").addClass("louis_walkcycle_row2_5frames");
}

function btn_louis_ankommer_klik() {
    $("#louis_container").removeClass("louis_container_kommer_ind");
    $("#louis_walkcycle").removeClass("louis_walkcycle_row2_5frames");

    $("#louis_container").addClass("louis_container_er_kommet_ind");
    $("#louis_walkcycle").addClass("louis_walkcycle_row1_1frames");

}

function btn_louis_kigger_fra_A_til_B_klik() {
    $("#store_B").addClass("bogstav_kommer_ned_forsinket");
    $("#store_A").addClass("bogstav_kommer_ned");
    $("#louis_container").addClass("louis_kigger_A_B");

}

function btn_brugeren_klikker_paa_B_klik() {
    $("#louis_container").removeClass("louis_kigger_A_B");

    $("#louis_container").addClass("louis_flyver_gennem_B");

}

function btn_reset_klik() {
    $("#store_B").removeClass();
    $("#store_A").removeClass();
    $("#louis_container").removeClass();
    $("#louis_walkcycle").removeClass();

    $("#store_A").addClass("startpos_store_A");
    $("#store_B").addClass("startpos_store_B");
    $("#louis_container").addClass("startpos_louis_container");


}
