/*Country Code CC - Form*/
var countryindex= {AF: 93,AL: 355,DZ: 213,AS: 1684,AD: 376,AO: 244,AI: 1264,AQ: 672,AG: 1268,AR: 54,AM: 374,AW: 297,AU: 61,AT: 43,AZ: 994,BS: 1242,BH: 973,BD: 880,BB: 1246,BY: 375,BE: 32,BZ: 501,BJ: 229,BM: 1441,BT: 975,BO: 591,BA: 387,BW: 267,BR: 55,VG: 1284,BN: 673,BG: 359,BF: 226,MM: 95,BI: 257,KH: 855,CM: 237,CA: 1,CV: 238,KY: 1345,CF: 236,TD: 235,CL: 56,CN: 86,CX: 61,CC: 61,CO: 57,KM: 269,CK: 682,CR: 506,HR: 385,CU: 53,CY: 357,CZ: 420,CD: 243,DK: 45,DJ: 253,DM: 1767,DO: 1809,EC: 593,EG: 20,SV: 503,GQ: 240,ER: 291,EE: 372,ET: 251,FK: 500,FO: 298,FJ: 679,FI: 358,FR: 33,PF: 689,GA: 241,GM: 220,GE: 995,DE: 49,GH: 233,GI: 350,GR: 30,GL: 299,GD: 1473,GU: 1671,GT: 502,GN: 224,GW: 245,GY: 592,HT: 509,VA: 39,HN: 504,HK: 852,HU: 36,IS: 354,IN: 91,ID: 62,IR: 98,IQ: 964,IE: 353,IM: 44,IL: 972,IT: 39,CI: 225,JM: 1876,JP: 81,JO: 962,KZ: 7,KE: 254,KI: 686,KW: 965,KG: 996,LA: 856,LV: 371,LB: 961,LS: 266,LR: 231,LY: 218,LI: 423,LT: 370,LU: 352,MO: 853,MK: 389,MG: 261,MW: 265,MY: 60,MV: 960,ML: 223,MT: 356,MH: 692,MR: 222,MU: 230,YT: 262,MX: 52,FM: 691,MD: 373,MC: 377,MN: 976,ME: 382,MS: 1664,MA: 212,MZ: 258,NA: 264,NR: 674,NP: 977,NL: 31,AN: 599,NC: 687,NZ: 64,NI: 505,NE: 227,NG: 234,NU: 683,KP: 850,MP: 1670,NO: 47,OM: 968,PK: 92,PW: 680,PA: 507,PG: 675,PY: 595,PE: 51,PH: 63,PN: 870,PL: 48,PT: 351,PR: 1,QA: 974,CG: 242,RO: 40,RU: 7,RW: 250,BL: 590,SH: 290,KN: 1869,LC: 1758,MF: 1599,PM: 508,VC: 1784,WS: 685,SM: 378,ST: 239,SA: 966,SN: 221,RS: 381,SC: 248,SL: 232,SG: 65,SK: 421,SI: 386,SB: 677,SO: 252,ZA: 27,KR: 82,ES: 34,LK: 94,SD: 249,SR: 597,SZ: 268,SE: 46,CH: 41,SY: 963,TW: 886,TJ: 992,TZ: 255,TH: 66,TL: 670,TG: 228,TK: 690,TO: 676,TT: 1868,TN: 216,TR: 90,TM: 993,TC: 1649,TV: 688,UG: 256,UA: 380,AE: 971,GB: 44,US: 1,UY: 598,VI: 1340,UZ: 998,VU: 678,VE: 58,VN: 84,WF: 681,YE: 967,ZM: 260,ZW: 263}
var countryredirect = {AF: "en",AL: "en",DZ: "ar",AS: "en",AD: "en",AO: "en",AI: "en",AQ: "en",AG: "en",AR: "es-AR",AM: "en",AW: "en",AU: "en-AU",AT: "de-AT",AZ: "en",BS: "en",BH: "ar",BD: "en",BB: "en",BY: "en",BE: "fr-BE",BZ: "en",BJ: "en",BM: "en",BT: "en",BO: "en",BA: "en",BW: "en",BR: "pt-BR",VG: "en",BN: "en",BG: "bg",BF: "en",MM: "en",BI: "en",KH: "en",CM: "en",CA: "en-CA",CV: "en",KY: "en",CF: "en",TD: "ar",CL: "es-CL",CN: "en",CX: "en",CC: "en",CO: "es-CO",KM: "ar",CK: "en",CR: "en",CU: "en",CY: "en",CZ: "cs-CZ",CD: "en",DK: "da",DJ: "ar",DM: "en",DO: "en",EC: "en",EG: "ar",SV: "en",GQ: "en",ER: "en",EE: "en",ET: "en",FK: "en",FO: "en",FJ: "en",FI: "fi",FR: "fr",PF: "en",GA: "en",GM: "en",GE: "en",DE: "de",GH: "en",GI: "en",GR: "el",GL: "en",GD: "en",GU: "en",GT: "en",GN: "en",GW: "en",GY: "en",HT: "en",VA: "en",HN: "en",HK: "zh-HK",HU: "en",IS: "en",IN: "en",ID: "en",IR: "en",IQ: "ar",IE: "en",IM: "en",IL: "en",IT: "it",CI: "en",JM: "en",JP: "en",JO: "ar",KZ: "en",KE: "en",KI: "en",KW: "ar",KG: "en",LA: "en",LV: "en",LB: "ar",LS: "en",LR: "en",LY: "ar",LI: "en",LT: "en",LU: "fr-LU",MO: "en",MK: "en",MG: "en",MW: "en",MY:"en",MV: "en",ML: "en",MT: "en",MH: "en",MR: "ar",MU: "en",YT: "en",MX: "es-MX",FM: "en",MD: "en",MC: "en",MN: "en",ME: "en",MA: "ar",MZ: "en",NA: "en",NR: "en",NP: "en",NL: "nl",AN: "en",NC: "en",NZ: "en-NZ",NI: "en",NE: "en",NG: "en",NU: "en",KP: "en",MP: "en",NO: "no",OM: "ar",PK: "en",PW: "en",PA: "en",PG: "en",PY: "en",PE: "es-PE",PH: "en-PH",PN: "en",PL: "pl",PT: "pt",PR: "en",QA: "ar",CG: "en",RO: "ro",RU: "ru",RW: "en",BL: "en",SH: "en",KN: "en",LC: "en",MF: "en",PM: "en",VC: "en",WS: "en",SM: "en",ST: "en",SA: "ar",SN: "en",RS: "en",SC: "en",SL: "en",SG: "en",SK: "sk",SI: "en",SB: "en",SO: "en",ZA: "en",KR: "ko",ES: "es",LK: "en",SD: "ar",SR: "en",SZ: "en",SE: "sv",CH: "de-CH" ,SY: "ar",TW: "zh-TW",TJ: "en",TZ: "en",TH: "th",TL: "en",TG: "en",TK: "en",TO: "en",TT: "en",TN: "ar",TR: "tr",TM: "en",TC: "en",TV: "en",UG: "en",UA: "en",AE: "ar",GB: "en-GB",US: "en-US",UY: "en",VI: "en",UZ: "en",VU: "en",VE: "en",VN: "en",WF: "en",YE: "ar",ZM: "en",ZW: "en"}

$(document).ready(function(){
    // russian_regions(1);
    // russian_regions(2);
    // indexchanges("#country", "#countrycode");
    // indexchanges("#center_country", "#center_countrycode");
	// indexchanges2("#pages_lenguage");

    // $('input.js-select-all').on('change', function() {
    //     //console.log($(this).attr('checked'));
    //     if (this.checked) {
    //         $(this).closest('form').find('input[type="checkbox"]').each(function(){
    //             $(this).prop('checked',true);
    //         });
    //     } else {
    //         $(this).closest('form').find('input[type="checkbox"]').each(function(){
    //             $(this).prop('checked',false);
    //         });
    //     }
    // });

});

//Tooltip is not visible on mobile
if(!(isMobile())) {
    var break770 = $(window).width() >= 770;
    var mytt= "left top";
    var attt= "right+25 top";
    mycc= "right top";
    atcc= "left-25 top";

    if(!(break770)){
       mytt= "center center";
       attt= "center top-30";
       mycc= "center center";
       atcc= "left+130 top-30";
    }

    $(function() {
        $( document ).tooltip(
            {
                position: {
                    my: mytt,
                    at: attt
                }
            }
        );
        $("#center_countrycode").tooltip({
            position: {
                my: mycc,
                at: atcc
            }
        });
    });
}


// function checkSubmit(id){

//     document.getElementById(id).disabled = true;
//     setTimeout(function(){
//         document.getElementById(id).removeAttribute('disabled');
//     }, 2000);	
//     return true;
// }


function open_form(elem){

    if(elem.hasClass("contemplate")){
        $("#or_text").slideUp().delay(200);
        $("#facebook_button").slideUp({
            complete: function(){

                $("#principal_form .elem").each(function(index, element){
                    setTimeout(function(){
                        value = $(element).attr("id") == "center_region_record";
                        if(value){
                            value = $("#center_country").val() == "RU";
                            if(value){
                                $("#center_region_record").css({display: "block"});
                            }
                            else{
                                $("#center_region_record").css({display: "none"});
                            }
                        }
                        else{
                            $(element).slideDown(450);
                        }
                    }, 50*index);
                });

                $("#principal_form").attr("state", "opened");
                $("#closed_x").css({display:"block"});
            }
        });
    }
    else{
        var wheight = $(window).height();
        var headerH = $("#principal_container .header").outerHeight(true);
        var visible = $(".cookie_container").css("display") == "block";
        var isvisibleCanvas = $("#canvas").css("display") == "block";
        var formTop = 15;
        var total;
        var cookieHeight = 0;


        if (isvisibleCanvas)
            activateAnimation.pauseAnimation();

        if(visible){
            cookieHeight =  $(".cookie_container").outerHeight(true);
        }
        else{
            if(wheight < 400)
                formTop = 30;
        }

          if(isMobile()){
            $("#principal_message").css({display: "none"});
            $("#progress_bar").css({display: "none"});
            $("#or_text").css({display: "none"});
            $("#facebook_button").css({display: "none"});

            $("#callofvalue").css({position: "absolute", left: 0, right: 0, top: ( headerH + cookieHeight + 30)+"px"});

            $("#principal_form .elem").each(function(index, element){

                    value = $(element).attr("id") == "center_region_record";
                    if(value){
                        value = $("#center_country").val() == "RU";
                        if(value){
                            $("#center_region_record").css({display: "block"});
							$("select#center_region").removeClass('ignore');
							$("select#center_region").addClass('required');
							$("select#center_region").prop('required',true);
                        }
                        else{
                            $("#center_region_record").css({display: "none"});
							$("select#center_region").removeClass('required');
							$("select#center_region").addClass('ignore');
							$("select#center_region").prop('required',false);
                        }
                    }
                    else{
                        $(element).css({display: "block"});
                    }

            });

            $("#principal_form").attr("state", "opened");
            $("#closed_x").css({display:"block"});

        }
        else{
            $("#principal_message").slideUp().delay(200);
            $("#progress_bar").slideUp().delay(200);
            $("#or_text").slideUp().delay(200);
            $("#facebook_button").slideUp({
                complete: function(){

                    $("#principal_form").css({position: "absolute", left: 0, right: 0}).animate({
                        top: (formTop + cookieHeight)+"px"
                    }, 1200, 'easeOutExpo', function(){
                        if(isvisibleCanvas){
                            activateAnimation.playAnimation();
                        }
                    });

                    $("#principal_form .elem").each(function(index, element){
                        setTimeout(function(){
                            value = $(element).attr("id") == "center_region_record";
                            if(value){
                                value = $("#center_country").val() == "RU";
                                if(value){
                                    $("#center_region_record").css({display: "block"});
									$("select#center_region").removeClass('ignore');
									$("select#center_region").addClass('required');
									$("select#center_region").prop('required',true);
                                }
                                else{
                                    $("#center_region_record").css({display: "none"});
									$("select#center_region").removeClass('required');
									$("select#center_region").addClass('ignore');
									$("select#center_region").prop('required',false);
                                }
                            }
                            else{
                                $(element).slideDown(450);
                            }
                        }, 50*index);
                    });

                    $("#principal_form").attr("state", "opened");
                    $("#closed_x").css({display:"block"});
                }
            });
        }
    }
}

$( "#center_email" ).bind( "click", function(){
    open_form($(this));
});

// $("#facebook_button").bind("click", function(){
//     open_form($(this));
// });

$("#closed_x").bind("click", function(){
    if($(this).hasClass("contemplate")){
        $(".elem").each(function(index, element){
            setTimeout(function(){
                $(element).slideUp({
                    duration: 400,
                    complete: function(){
                        $("#or_text").slideDown();
                        $("#facebook_button").slideDown();
                    }
                });
            }, 50*index);
        });
        $("#principal_form").attr("state", "closed");
        $("#closed_x").css({display:"none"});
    }
    else{
        var etotal= $("#principal_form .elem").length;
        var headerH = $("#principal_container .header").outerHeight(true);
        var isvisibleCanvas = $("#canvas").css("display") == "block";
        var visible = $(".cookie_container").css("display") == "block";
        var wheight = $(window).height();
        var fheight = $("#principal_form").outerHeight(true);
        var cookieHeight = 0;
        var finalMarginTop;

        if(isvisibleCanvas)
            activateAnimation.pauseAnimation();

        if(visible)
            cookieHeight = $(".cookie_container").outerHeight(true);

          if(isMobile()){
            $("#principal_form .elem").css({display: "none"});
            $("#principal_form").css({position: "relative", top:0});

            if(wheight <= 640){
                $("#callofvalue").css({top: (headerH + cookieHeight + 13)+"px"});
            }
            else{
                $("#callofvalue").css({top: (wheight * 0.19) + cookieHeight});
            }

            $("#principal_message").css({display: "block"});
            $("#progress_bar").css({display: "block"});
            $("#or_text").css({display: "block"});
            $("#facebook_button").css({display: "block"});

            $("#principal_form").attr("state", "closed");
            $("#closed_x").css({display:"none"});

        }
        else{
            $("#principal_form .elem").each(function(index, element){
                setTimeout(function(){
                    if(index == etotal-1){
                        $(element).slideUp({
                            duration: 400,
                            complete: function(){
                                $("#principal_form").css({position: "relative", top:0});
                                $("#callofvalue").animate({top: (wheight * 0.19) + cookieHeight },1200, "easeOutExpo", function(){
                                    if(isvisibleCanvas){
                                        activateAnimation.playAnimation();
                                    }
                                });

                                $("#principal_message").slideDown();
                                $("#progress_bar").slideDown();
                                $("#or_text").slideDown();
                                $("#facebook_button").slideDown();
                            }
                        });
                    }
                    else {
                        $(element).slideUp(450);
                    }

                }, 50*index);

            });
            $("#principal_form").attr("state", "closed");
            $("#closed_x").css({display:"none"});
        }
    }
});

// function russian_regions(form){
//     var value
//     switch(form){
//         case 1:
//             value = $("#center_country").val();
//             var state = $("#principal_form").attr("state");
//             if(isMobile()){
//                 if ((value == "RU")&& (state == "opened")){
//                     $("#center_region_record").css({display: "block"});
//                 }
//                 else{
//                     $("#center_region_record").css({display: "none"});
//                 }
//             }
//             else{
//                 if ((value == "RU")&& (state == "opened")){
//                     $("#center_region_record").slideDown(450);
//                 }
//                 else{
//                     $("#center_region_record").slideUp(450);
//                 }
//             }
//             break;

//         case 2:
//             value = $("#country").val();
//             if(isMobile()){
//                 if (value == "RU"){
//                     $("#region_record").css({display: "block"});
//                 }
//                 else{
//                     $("#region_record").css({display: "none"});
//                 }
//             }
//             else{
//                 if (value == "RU"){
//                     $("#region_record").slideDown(450);
//                 }
//                 else{
//                     $("#region_record").slideUp(450);
//                 }
//             }
//             break;
//     }
// }

// function takeurl(index, opt){
//     var currentProtocol= window.location.protocol;
//     var currentHost = window.location.host;
// 	var fn = encodeURIComponent(document.getElementsByName("first_name")[0].value);
// 	var ln = encodeURIComponent(document.getElementsByName("last_name")[0].value);
// 	var em = encodeURIComponent(document.getElementsByName("email")[0].value);
	
// 	if (document.getElementsByName("sln")[0]!= undefined) var sln = encodeURIComponent(document.getElementsByName("sln")[0].value);
// 	else var sln='';
	
// 	if (document.getElementsByName("birth_date")[0]!= undefined) var bd = encodeURIComponent(document.getElementsByName("birth_date")[0].value);	
// 	else var bd='';
	
// 	if (document.getElementsByName("birth_year")[0]!= undefined) var by = encodeURIComponent(document.getElementsByName("birth_year")[0].value);
// 	else var by='';
	
// 	if (document.getElementsByName("nid")[0]!= undefined) var ni = encodeURIComponent(document.getElementsByName("nid")[0].value);
// 	else var ni='';
	
// 	if (document.getElementsByName("age")[0]!= undefined) var ag = encodeURIComponent(document.getElementsByName("age")[0].value);
// 	else var ag='';
	
// 	if (document.getElementsByName("postcode")[0]!= undefined) var pc = encodeURIComponent(document.getElementsByName("postcode")[0].value);
// 	else var pc='';
	
// 	if (document.getElementsByName("phone")[0]!= undefined) var ph = encodeURIComponent(document.getElementsByName("phone")[0].value);
// 	else var ph='';

// 	var curUrl = document.URL;
// 	var n = curUrl.indexOf("cultureKey");
//     if (n > 2) curUrl= curUrl.substr(0, n-2);
// 	window.location.href = curUrl + ((curUrl.indexOf('?') == -1) ? '?' : '&') + 'cultureKey=' + index + '&country=' + opt + '&em=' + em + '&fn=' + fn + '&ln=' + ln + '&bd=' + bd + '&by=' + by + '&ni=' + ni + '&ag=' + ag + '&pc=' + pc + '&ph=' + ph + '&sln=' + sln;
// }

// function getUrlParameters(parameter, staticURL, decode){
//    /*
//     Function: getUrlParameters
//     Description: Get the value of URL parameters either from 
//                  current URL or static URL
//     Author: Tirumal
//     URL: www.code-tricks.com
//    */
//    var currLocation = (staticURL.length)? staticURL : window.location.search;
//    if (currLocation.indexOf('?') == -1) return false;
   
//    var parArr = currLocation.split("?")[1].split("&"),
//        returnBool = true;
   
//    for(var i = 0; i < parArr.length; i++){
//         parr = parArr[i].split("=");
//         if(parr[0] == parameter){
//             return (decode) ? decodeURIComponent(parr[1]) : parr[1];
//             returnBool = true;
//         }else{
//             returnBool = false;            
//         }
//    }
   
//    if(!returnBool) return false;  
// }

// function indexchanges(country, countrycode, formchange){
// //    var opt = $(country + " option:selected").val();
//       formchange = formchange || false;
//       var index;
//       var opt = $(country + " option:selected").val();
// 	  $(countrycode).val(countryindex[opt]);
//       /*if(opt == "CA" || opt == "CH" || opt =="BE"){
//         index =  navigator.language || navigator.userLanguage;
//         if(index == "undefined" || index == "null" || index == null || index == ""){
//           index = countryredirect[opt];
//         }
//       }
//       else{*/
//           index = countryredirect[opt];
//       /*}*/
//       if (index && formchange) {
//         takeurl(index, opt);
//       }
// }

// function indexchanges2(country, formchange){
		
//       formchange = formchange || false;
//       var index;
//       var opt = $(country + " option:selected").val();
	  
//       if (formchange) {
// 		var curUrl = document.URL;
// 		var newCulture = opt;
		
// 		var curCulture = getUrlParameters("cultureKey", "", true);
// 			if (curCulture) {					
// 				var newUrl = curUrl.replace(/(cultureKey=).*?(&|$)/,'cultureKey=' + newCulture + '$2');
// 				}
// 			else {
// 				var newUrl = curUrl + ((curUrl.indexOf('?') == -1) ? '?' : '&') + 'cultureKey=' + newCulture;
// 				}
		
// 		window.location.href = newUrl;
//       }
// }

// $("#center_country.mainpet_country").change(function () {
//     indexchanges("#center_country", "#center_countrycode", true);
//     //russian_regions(1);
// });

// $("#country.mainpet_country").change(function () {
//     indexchanges("#country", "#countrycode", true);
//     //russian_regions(2);
// });

// $("#pages_lenguage").change(function () {
//     indexchanges2("#pages_lenguage", true);
// });

// /*Slide text-area*/
// $(".expand_email_text").bind("click", function(){

//     var arrow_down =$(".expand_email_text .arrow_down").css("display")== "block";
//     if(arrow_down){
//         $(".arrow_down").css({display: "none"});
//         $(".arrow_up").css({display: "block"});
//         $(".text_box").slideDown().delay(200);
//     }
//     else{
//         $(".arrow_up").css({display: "none"});
//         $(".arrow_down").css({display: "block"});
//         $(".text_box").slideUp().delay(200);
//     }
// });

// jQuery.validator.addMethod("mail",
//     function(value, element) {
//         return this.optional(element) || /^[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}$/.test(value);
//          });

// jQuery.validator.addMethod("select_validation",
//     function(value, element) {
//         return this.optional(element) || !(value == "-1");
//     });


// jQuery.validator.addMethod("russian_format",
//     function(value, element) {
// 		element.value = value.trim().toLowerCase().replace(/\d/g, '').replace(/(^|-|\s)([a-zа-яё])/g, function(a, b, c) { return b + c.toUpperCase() });
//         return this.optional(element) || /(^[^0-9]*)$/.test(value);
//     });


// jQuery.validator.addMethod("dateFormat",
//     function(value, element) {
//         return this.optional(element) || /^^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/.test(value);
//     });

// jQuery.validator.addMethod("nid_es", function(value, element) {
//     return this.optional(element) || (valida_nif_cif_nie( value.toUpperCase() ) >= 1 && valida_nif_cif_nie( value.toUpperCase() ) != 2);
// });

// jQuery.validator.addMethod("phone_es", function(value, element) {
//     return this.optional(element) || /^^[6789]\d{8}$/.test(value);
// });

// jQuery.validator.addMethod("nid_es_AR", function(value, element) {
//     return this.optional(element) || /^^[a-zA-Z0-9]{7,10}$/.test(value);
// });

// jQuery.validator.addMethod("phone_es_AR", function(value, element) {
//     return this.optional(element) || /^^[0-9]{6,13}$/.test(value);
// });

// jQuery.validator.addMethod("phone_zh_TW", function(value, element) {
//     return this.optional(element) || /^^[0-9]{8,10}$/.test(value);
// });

// jQuery.validator.addMethod("phone_en_AU", function(value, element) {
//     return this.optional(element) || /^^([2][0-9]{8}$)|([4][0-9]{8}$)/.test(value);
// });

// jQuery.validator.addMethod("phone_general", function(value, element) {
//     return this.optional(element) || /^^[0-9]{4,18}$/.test(value);
// });
// jQuery.validator.addMethod("phone_mandatory", function(value, element) {
//     return /^^[0-9]{4,18}$/.test(value);
// });
// jQuery.validator.addMethod("phone_es_MX", function(value, element) {
//     return this.optional(element) || /^^[0-9]{10}$/.test(value);
// });

// jQuery.validator.addMethod("phone_pt_BR", function(value, element) {
//     // return this.optional(element) || /^^[0-9]{10}$/.test(value);
// 	return this.optional(element) || /^^(\()([0-9]{2})(\))(\ )([1-6]{1}[0-9]{3})(\-)([0-9]{4})(?!0|1|2|3|4|5|6|7|8|9)|(\()([1][1]|[1][2]|[1][3]|[1][4]|[1][5]|[1][6]|[1][7]|[1][8]|[1][9]|[2][1]|[2][2]|[2][4]|[2][7]|[2][8]|[9][1]|[9][2]|[9][3]|[9][4]|[9][5]|[9][6]|[9][7]|[9][8]|[9][9]{1})(\))(\ )([9]{1}[0-9]{3})(\-)([0-9]{5})|(\()([1][1]|[1][2]|[1][3]|[1][4]|[1][5]|[1][6]|[1][7]|[1][8]|[1][9]|[2][1]|[2][2]|[2][4]|[2][7]|[2][8]|[9][1]|[9][2]|[9][3]|[9][4]|[9][5]|[9][6]|[9][7]|[9][8]|[9][9]{1})(\))(\ )([7,8]{1}[0-9]{3})(\-)([0-9]{4})(?!0|1|2|3|4|5|6|7|8|9)|(\()(?!11|12|13|14|15|16|17|18|19|21|22|24|27|28|91|92|93|94|95|96|97|98|99)([0-9]{2})(\))(\ )([7-9]{1}[0-9]{3})(\-)([0-9]{4})(?!0|1|2|3|4|5|6|7|8|9)/.test(value);
// });

// jQuery.validator.addMethod("birth_year_mandatory", function(value, element) {
//     return /^^[0-9]{4}$/.test(value);
// });

// jQuery.validator.addMethod("postcode_en_AU", function(value, element) {
//     if ( $("#center_country").val()=='AU' ) return /^^[0-9]{3,4}$/.test(value);
//     else return true;
// });


// jQuery.validator.addClassRules("salutation_de", { select_validation: true });

// jQuery.validator.addClassRules("name_ru", { russian_format: true });
// jQuery.validator.addClassRules("nid_es", { nid_es: true });
// jQuery.validator.addClassRules("phone_es", { phone_es: true });
// jQuery.validator.addClassRules("nid_es-AR", { nid_es_AR: true });
// jQuery.validator.addClassRules("phone_es-AR", { phone_es_AR: true });
// jQuery.validator.addClassRules("phone_es-MX", { phone_es_MX: true });
// jQuery.validator.addClassRules("phone_pt-BR", { phone_pt_BR: true });

// jQuery.validator.addClassRules("phone_ar", { phone_general: true });
// jQuery.validator.addClassRules("phone_bg", { phone_general: true });
// jQuery.validator.addClassRules("phone_cs-CZ", { phone_general: true });
// jQuery.validator.addClassRules("phone_da", { phone_general: true });
// jQuery.validator.addClassRules("phone_de", { phone_general: true });
// jQuery.validator.addClassRules("phone_de-AT", { phone_general: true });
// jQuery.validator.addClassRules("phone_de-CH", { phone_general: true });
// jQuery.validator.addClassRules("phone_el", { phone_general: true });
// jQuery.validator.addClassRules("phone_en", { phone_general: true });
// jQuery.validator.addClassRules("phone_en-AU", { phone_en_AU: true });
// jQuery.validator.addClassRules("phone_en-CA", { phone_general: true });
// jQuery.validator.addClassRules("phone_en-GB", { phone_general: true });
// jQuery.validator.addClassRules("phone_en-HK", { phone_mandatory: true });
// jQuery.validator.addClassRules("phone_en-NZ", { phone_general: true });
// jQuery.validator.addClassRules("phone_en-PH", { phone_general: true });
// jQuery.validator.addClassRules("phone_en-US", { phone_general: true });
// jQuery.validator.addClassRules("phone_es-CL", { phone_general: true });
// jQuery.validator.addClassRules("phone_es-CO", { phone_general: true });
// jQuery.validator.addClassRules("phone_fi", { phone_general: true });
// jQuery.validator.addClassRules("phone_fr", { phone_general: true });
// jQuery.validator.addClassRules("phone_fr-BE", { phone_general: true });
// jQuery.validator.addClassRules("phone_fr-CA", { phone_general: true });
// jQuery.validator.addClassRules("phone_fr-CH", { phone_general: true });
// jQuery.validator.addClassRules("phone_fr-LU", { phone_general: true });
// jQuery.validator.addClassRules("phone_he", { phone_general: true });
// jQuery.validator.addClassRules("phone_hi-IN", { phone_general: true });
// jQuery.validator.addClassRules("phone_hu", { phone_general: true });
// jQuery.validator.addClassRules("phone_id", { phone_general: true });
// jQuery.validator.addClassRules("phone_it", { phone_general: true });
// jQuery.validator.addClassRules("phone_jp", { phone_general: true });
// jQuery.validator.addClassRules("phone_ko", { phone_general: true });
// jQuery.validator.addClassRules("phone_nl", { phone_general: true });
// jQuery.validator.addClassRules("phone_nl-BE", { phone_general: true });
// jQuery.validator.addClassRules("phone_no", { phone_general: true });
// jQuery.validator.addClassRules("phone_pl", { phone_general: true });
// jQuery.validator.addClassRules("phone_pt", { phone_general: true });
// jQuery.validator.addClassRules("phone_ro", { phone_general: true });
// jQuery.validator.addClassRules("phone_ru", { phone_general: true });
// jQuery.validator.addClassRules("phone_sk", { phone_general: true });
// jQuery.validator.addClassRules("phone_sl", { phone_general: true });
// jQuery.validator.addClassRules("phone_sv", { phone_general: true });
// jQuery.validator.addClassRules("phone_th", { phone_general: true });
// jQuery.validator.addClassRules("phone_tr", { phone_general: true });
// jQuery.validator.addClassRules("phone_zh-CN", { phone_general: true });
// jQuery.validator.addClassRules("phone_zh-HK", { phone_mandatory: true });
// jQuery.validator.addClassRules("phone_zh-TW", { phone_zh_TW: true });

// jQuery.validator.addClassRules("birthyear_en-HK", { birth_year_mandatory: true });
// jQuery.validator.addClassRules("birthyear_zh-HK", { birth_year_mandatory: true });
// jQuery.validator.addClassRules("birthyear_zh-TW", { birth_year_mandatory: true });

// jQuery.validator.addClassRules("postcode_en-AU", { postcode_en_AU: true });

// /*Form Validation*/
// $("#sign-form").validate({
//     ignore: ".ignore",
//     rules:{
//         email:{
//             mail: true
//         },
//         birth_date: {
//             dateFormat: true
//         },
//         age: {
//             digits: true
//         }
//     }
// });


// $("#center_sign-form").validate({
//     highlight: function(element, errorClass, validClass) {
//       if ( ($(element).attr('type')=='checkbox') && (dataLayer[0].country=='ko')) {
//         $(element).addClass(errorClass).removeClass(validClass);
//         $(element).parent().find('span.error_checkbox').fadeIn();
//       } else $(element).addClass(errorClass).removeClass(validClass);
//     },
//     unhighlight: function(element, errorClass, validClass) {
//       if ( ($(element).attr('type')=='checkbox') && (dataLayer[0].country=='ko')) {
//         $(element).removeClass(errorClass).addClass(validClass);
//         $(element).parent().find('span.error_checkbox').fadeOut();  
//       } else $(element).removeClass(errorClass).addClass(validClass);
//     },
//     ignore: ".ignore",
//     rules:{
//         email:{
//             mail: true
//         },
//         birth_date: {
//             dateFormat: true
//         },
//         age: {
//             digits: true
//         }
//     }
// });



/*Date format in form*/
jQuery(function($){
    $("#center_dateofbirth").mask("99/99/9999");
    // $("#center_yearofbirth").mask("9999");
    $("#dateofbirth").mask("99/99/9999");
    $("#yearofbirth").mask("9999");
	$(".phone_pt-BR").mask("(99) 9999-9999?9");
});

$(document).ready(function(){
			var indice;
			var options = $('select#center_country option');
			var arr = options.map(function(_, o) {
				return {
					d: $(o).attr('disabled'),
					s: $(o).attr('selected'),
					t: $(o).text(),
					v: o.value,
				};
			}).get();

			arr.sort(function(o1, o2) {
				return o1.t > o2.t ? 1 : o1.t < o2.t ? -1 : 0;
			});
			options.each(function(i, o) {
				o.value = arr[i].v;
				$(o).text(arr[i].t);
				$(o).removeAttr('disabled');
				$(o).removeAttr('selected');
				$(o).attr('selected', arr[i].s);
				$(o).attr('disabled', arr[i].d);
				if (arr[i].s == 'selected') indice=i;
			});

			// $("#center_country")[0].selectedIndex = indice;
			
	if ((document.getElementById("country"))!= undefined) {		
			var indice2;
			var options = $('select#country option');
			var arr = options.map(function(_, o) {
				return {
					d: $(o).attr('disabled'),
					s: $(o).attr('selected'),
					t: $(o).text(),
					v: o.value,
				};
			}).get();

			arr.sort(function(o1, o2) {
				return o1.t > o2.t ? 1 : o1.t < o2.t ? -1 : 0;
			});
			options.each(function(i, o) {
				o.value = arr[i].v;
				$(o).text(arr[i].t);
				$(o).removeAttr('disabled');
				$(o).removeAttr('selected');
				if (arr[i].s == 'selected') indice2=i;
			});
			// $("#country")[0].selectedIndex = indice2;
		}
});

// -- VALIDAZIONE NID SPAGNOLA
 
//Retorna: 1 = NIF ok, 2 = CIF ok, 3 = NIE ok, -1 = NIF error, -2 = CIF error, -3 = NIE error, 0 = ??? error
function valida_nif_cif_nie(a) 
{
	var temp=a.toUpperCase();
	var cadenadni="TRWAGMYFPDXBNJZSQVHLCKE";
 
	if (temp!==''){
		//si no tiene un formato valido devuelve error
		if ((!/^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$/.test(temp) && !/^[T]{1}[A-Z0-9]{8}$/.test(temp)) && !/^[0-9]{8}[A-Z]{1}$/.test(temp))
		{
			return 0;
		}
 
		//comprobacion de NIFs estandar
		if (/^[0-9]{8}[A-Z]{1}$/.test(temp))
		{
			posicion = a.substring(8,0) % 23;
			letra = cadenadni.charAt(posicion);
			var letradni=temp.charAt(8);
			if (letra == letradni)
			{
			   	return 1;
			}
			else
			{
				return -1;
			}
		}
 
		//algoritmo para comprobacion de codigos tipo CIF
		suma = parseInt(a[2])+parseInt(a[4])+parseInt(a[6]);
		for (i = 1; i < 8; i += 2)
		{
			temp1 = 2 * parseInt(a[i]);
			temp1 += '';
			temp1 = temp1.substring(0,1);
			temp2 = 2 * parseInt(a[i]);
			temp2 += '';
			temp2 = temp2.substring(1,2);
			if (temp2 == '')
			{
				temp2 = '0';
			}
 
			suma += (parseInt(temp1) + parseInt(temp2));
		}
		suma += '';
		n = 10 - parseInt(suma.substring(suma.length-1, suma.length));
 
		//comprobacion de NIFs especiales (se calculan como CIFs)
		if (/^[KLM]{1}/.test(temp))
		{
			if (a[8] == String.fromCharCode(64 + n))
			{
				return 1;
			}
			else
			{
				return -1;
			}
		}
 
		//comprobacion de CIFs
		if (/^[ABCDEFGHJNPQRSUVW]{1}/.test(temp))
		{
			temp = n + '';
			if (a[8] == String.fromCharCode(64 + n) || a[8] == parseInt(temp.substring(temp.length-1, temp.length)))
			{
				return 2;
			}
			else
			{
				return -2;
			}
		}
 
		//comprobacion de NIEs
		//T
		if (/^[T]{1}/.test(temp))
		{
			if (a[8] == /^[T]{1}[A-Z0-9]{8}$/.test(temp))
			{
				return 3;
			}
			else
			{
				return -3;
			}
		}
 
		//XYZ
		if (/^[XYZ]{1}/.test(temp))
		{
			pos = str_replace(['X', 'Y', 'Z'], ['0','1','2'], temp).substring(0, 8) % 23;
			if (a[8] == cadenadni.substring(pos, pos + 1))
			{
				return 3;
			}
			else
			{
				return -3;
			}
		}
	}
 
	return 0;
}
 
function str_replace(search, replace, subject) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Gabriel Paderni
    // +   improved by: Philip Peterson
    // +   improved by: Simon Willison (http://simonwillison.net)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   bugfixed by: Anton Ongson
    // +      input by: Onno Marsman
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    tweaked by: Onno Marsman
    // *     example 1: str_replace(' ', '.', 'Kevin van Zonneveld');
    // *     returns 1: 'Kevin.van.Zonneveld'
    // *     example 2: str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
    // *     returns 2: 'hemmo, mars'
 
    var f = search, r = replace, s = subject;
    var ra = r instanceof Array, sa = s instanceof Array, f = [].concat(f), r = [].concat(r), i = (s = [].concat(s)).length;
 
    while (j = 0, i--) {
        if (s[i]) {
            while (s[i] = s[i].split(f[j]).join(ra ? r[j] || "" : r[0]), ++j in f){};
        }
    };
 
    return sa ? s : s[0];
}