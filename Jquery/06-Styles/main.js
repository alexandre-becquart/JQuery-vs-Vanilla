
/* -------------------------------------------------------------------------- */
/*                                   JQuery                                   */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- Style --------------------------------- */

(function ($) {
    $(document).ready(function () {



        /* -------------------- Manipuler le CSS avec Vanilla JS -------------------- */

        //document.querySelector('.class1').style.border = "2px solid blue";
        // $('.class1').css('border', "2px solid blue");
        // $('.class2').css({
        //     'border': "3px dashed green",
        //     'border-radius': "20px"
        // })

        /* ---------------------------- AJOUTER UNE CLASS --------------------------- */


        /* ------------------------------- Vanilla JS ------------------------------- */

        //document.querySelector('.class1').classList.add('border')

        /* -------------------------------------------------------------------------- */

        /* --------------------------------- jQuery --------------------------------- */

        $('.class1').addClass('border')

        /* -------------------------------------------------------------------------- */
        /* -------------------------------------------------------------------------- */


        /* -------------------------- SUPPRIMER UNE CLASSE -------------------------- */


        /* ------------------------------- Vanilla JS ------------------------------- */

        //document.querySelector('.class1').classList.remove('border') 

        /* -------------------------------------------------------------------------- */

        /* --------------------------------- jQuery --------------------------------- */

        $('.class1').removeClass('border')

        /* -------------------------------------------------------------------------- */
        /* -------------------------------------------------------------------------- */


        /* -------------------------------- CONTIENT -------------------------------- */

        /* ------------------------------- Vanilla JS ------------------------------- */

        //document.querySelector('.class1').classList.contains('border')

        /* -------------------------------------------------------------------------- */


        /* --------------------------------- jQuery --------------------------------- */

        $('.class1').hasClass('border')

        /* -------------------------------------------------------------------------- */
        /* -------------------------------------------------------------------------- */



        /* -------------------------- AJOUTER OU SUPPRIMER -------------------------- */

        /* ------------------------------- Vanilla JS ------------------------------- */

        // for (var i = 0; i < document.querySelectorAll('div').length; i++) {  
        // // si la classe existe -> remove / sinon inverve -> ajoute
        //     document.querySelectorAll('div')[i].classList.toggle('toggle')
        // }

        /* -------------------------------------------------------------------------- */

        /* --------------------------------- jQuery --------------------------------- */

        $('div').toggleClass('toggle')

        $('div').each(function (i, el) { // (index - element)
            if ($(el).hasClass('toggle')) {
                console.log("La div n° " + (i + 1) + " possède la classe Toggle");
            } else {
                console.log("La div n° " + (i + 1) + " ne possède pas la classe Toggle");
            }
        })

        /* -------------------------------------------------------------------------- */
        /* -------------------------------------------------------------------------- */



    })

})(jQuery)