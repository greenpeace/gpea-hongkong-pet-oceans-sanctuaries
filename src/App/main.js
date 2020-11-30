const {$, anime, autosize, Cookies, Highcharts, dataLayer} = window

const donateUrl = "https://supporter.ea.greenpeace.org/hk/s/donate?campaign=oceans&ref=2020-oceans_sanctuaries_thankyou_page";
const shareUrl = "https://cloud.greenhk.greenpeace.org/petition-oceans-sanctuaries?utm_campaign=2020-ocean_sanctuaries&utm_source=facebook&utm_medium=socialorganic&utm_content=2020-ocean_sanctuaries_petition_tkpage";
const shareFBUrl = "https://cloud.greenhk.greenpeace.org/petition-oceans-sanctuaries?utm_campaign=2020-ocean_sanctuaries&utm_source=facebook&utm_medium=socialorganic&utm_content=2020-ocean_sanctuaries_petition_tkpage";
const shareLineUrl = "https://cloud.greenhk.greenpeace.org/petition-oceans-sanctuaries?utm_campaign=2020-ocean_sanctuaries&utm_source=facebook&utm_medium=socialorganic&utm_content=2020-ocean_sanctuaries_petition_tkpage";
const redirectDonateLink = "https://supporter.ea.greenpeace.org/hk/s/donate?campaign=oceans&ref=2020-oceans_sanctuaries_thankyou_page"

// definitions
let phoneRules = {
	"852": {
		"country":"+852",
		"code":"+852",
		"pattern":"^[2,3,5,6,8,9]{1}[0-9]{7}$",
		"help":"Mobile number should be 8 digits and start with 2, 3, 5, 6, 8 or 9",
		"maxlength":8

	},
	"853": {
		"country":"+853",
		"code":"+853",
		"pattern":"^[6]{1}[0-9]{7}$",
		"maxlength":8

	}
}

window.donate = () => {
	window.open(
        donateUrl,
        "_blank"
    );
}
window.share = () => {

	if (navigator.share) {
		// we can use web share!
		navigator
			.share({
				title: "我守護漁工人權，支持海洋永續！",
				text: "身為遠洋漁業強權，我們更應該帶領改變，守護漁工人權，現在就加入連署，用您的行動，督促產業進步、守護漁工人權，成為其他國家的典範。",
				url: shareUrl
			})			
			.catch(error => console.log("Error sharing:", error));
	} else {
		
		var baseURL = "https://www.facebook.com/sharer/sharer.php";
		
		//console.log('open', baseURL + "?u=" + encodeURIComponent(shareFBUrl))
		window.open(
			baseURL + "?u=" + encodeURIComponent(shareFBUrl),
			"_blank"
		);
	}
}

/**
 * Send the tracking event to the ga
 * @param  {string} eventLabel The ga trakcing name, normally it will be the short campaign name. ex 2019-plastic_retailer
 * @param  {[type]} eventValue Could be empty
 * @return {[type]}            [description]
 */
function sendPetitionTracking(eventLabel, eventValue) {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
	    'event': 'gaEvent',
	    'eventCategory': 'petitions',
	    'eventAction': 'signup',
	    'eventLabel': eventLabel,
	    'eventValue' : eventValue
	});

	window.dataLayer.push({
	    'event': 'fbqEvent',
	    'contentName': eventLabel,
	    'contentCategory': 'Petition Signup'
	});
}

var pageInit = function(){
    //console.log('init')
    var _ = this;
    _.$container = $('#form');

    _.$container.find('input, select').bind('change blur', function(){
        if($(this).val() !== ''){
            $(this).addClass('filled');
        }
        else{
            $(this).removeClass('filled');
        }
    });

    $('#center_sign-submit').click(function(e){
        e.preventDefault();
        $("#center_sign-form").submit();
        //console.log("center_sign-form submitting")
    }).end()
    
    // create the year options
    let currYear = new Date().getFullYear()
    for (var i = 0; i < 80; i++) {
        
        let option = `<option value="${currYear-i}-01-01">${currYear-i}</option>`;
        $("#center_yearofbirth").append(option);
        //$('#en__field_supporter_NOT_TAGGED_6').append(option);
    }

    $.validator.addMethod( //override email with django email validator regex - fringe cases: "user@admin.state.in..us" or "name@website.a"
        'email',
        function(value, element){
            return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/i.test(value);
        },
        '請填上有效電郵地址'
    );

	$.validator.addClassRules({ // connect it to a css class
		"email": {email: true},
	});

	$.validator.addMethod( "hk-phone", function (value, element) {
		//const phoneReg1 = new RegExp(/^[5,6,9]{1}[0-9]{7}$/).test(value);            
		let target = $('#center_countrycode').val();
		//console.log('use', phoneRules[target].pattern)			
		if ((new RegExp(phoneRules[target].pattern)).test(value)) {
			return true
		}
		//console.log('phone testing')
		return false
	}, "請填上有效手提號碼")

	// checking if is DD page
	const urlParams = new URLSearchParams(window.location.search);
	const utm_source = urlParams.get('utm_source');
	
	if (utm_source === "dd") {
		$(".is-hidden-at-dd-page-only").hide();
		
		$('#center_phone').removeAttr("required"); //移除電話欄位 required Attr
		$.validator.addClassRules({ 
			"hk-phone" : { "hk-phone" : false }
		});

		$("#center_phone").change(function(){
			if ($(this).val()) {
				$.validator.addClassRules({ 
					"hk-phone" : { "hk-phone" : true }
				});
			} else {
				$.validator.addClassRules({ 
					"hk-phone" : { "hk-phone" : false }
				});
			}
		})
		
	} else {
		$.validator.addClassRules({ 
			"hk-phone" : { "hk-phone" : true }
		});
	}
    
    $("#center_sign-form").validate({
        errorPlacement: function(error, element) {
			// console.log(error)
			// console.log(element.parents())
            element.parents("div.form-field:first").after( error );
        },
        submitHandler: function(form) {
            showFullPageLoading();
            // These are scripts for MC version
			// mc forms
			$('#mc-form [name="FirstName"]').val($('#center_name').val());
			$('#mc-form [name="LastName"]').val($('#center_lastname').val());
			$('#mc-form [name="Email"]').val($('#center_email').val());
			$('#mc-form [name="MobileCountryCode"]').val($('#center_countrycode').val());

			if (!$('#center_phone').prop('required') && !$('#center_phone').val()) {
			 	$('#mc-form [name="MobilePhone"]').val('20000000');
			} else {
			 	$('#mc-form [name="MobilePhone"]').val($('#center_phone').val());
			}
			//console.log($('#mc-form [name="MobileCountryCode"]').val());
			//console.log($('#mc-form [name="MobilePhone"]').val());
			$('#mc-form [name="Birthdate"]').val($('#center_yearofbirth').val());
			
			$('#mc-form [name="OptIn"]').eq(0).prop("checked", $('#center_rememberme').prop('checked')); 
			
			// collect values in the mc form
			let formData = new FormData();
			$("#mc-form input").each(function (idx, el) {
				let v = null
				if (el.type==="checkbox") {
					v = el.checked
				} else {
					v = el.value
				}

				formData.append(el.name, v)
				//console.log("Use", el.name, v)
			});
            
            // send the request			
			let postUrl = $("#mc-form").prop("action");
			fetch(postUrl, {
				method: 'POST',
				body: formData
			})
			.then(response => response.json())
			.then(response => {				
				//console.log('fetch response', response);
				if (response) {
					if (response.Supporter) { // ok, go to next page
						sendPetitionTracking("2020-sanctuaries");
					}

					hideFullPageLoading();
					$('#page-1').hide();
					$('#page-2').show();

					// window.location.href = redirectDonateLink;
					
			  	}
			})
			.catch(error => {
				hideFullPageLoading();
				//alert("抱歉，聯署時發生問題，請您稍後再嘗試一次。");
				//console.warn("fetch error");
				console.error(error);
			});
        },
        invalidHandler: function(event, validator) {
            // 'this' refers to the form
            var errors = validator.numberOfInvalids();
            if (errors) {
                // console.log(errors)
                var message = errors == 1
                    ? 'You missed 1 field. It has been highlighted'
                    : 'You missed ' + errors + ' fields. They have been highlighted';
                $("div.error").show();
            } else {
                $("div.error").hide();
            }
        }
	});
	
	//email suggestion
	// for email correctness
	let domains = [
		"me.com",
		"outlook.com",
		"netvigator.com",
		"cloud.com",
		"live.hk",
		"msn.com",
		"gmail.com",
		"hotmail.com",
		"ymail.com",
		"yahoo.com",
		"yahoo.com.tw",
		"yahoo.com.hk"
	];
	let topLevelDomains = ["com", "net", "org"];

	var Mailcheck = require('mailcheck');
	//console.log(Mailcheck);
	$("#center_email").on('blur', function() {
		//console.log('center_email on blur - ',  $("#center_email").val());		
		Mailcheck.run({
			email: $("#center_email").val(),
			domains: domains, // optional
			topLevelDomains: topLevelDomains, // optional
			suggested: (suggestion) => {
				$('#emailSuggestion')[0].innerHTML = suggestion.full;
				$('.email-suggestion').show();
				//console.log(suggestion.full);
			},
			empty: () => {
				this.emailSuggestion = null
			}
		});
	});
	$(".email-suggestion").click(function() {
		$("#center_email").val($('#emailSuggestion')[0].innerHTML);
		$('.email-suggestion').hide();
	});
}

/**
 * Show the full page loading
 */
const showFullPageLoading = () => {
	if ($("#page-loading").length===0) {
		$("body").append(
			`<div id="page-loading" class="hide">
			  <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
			</div>`)
	}

	setTimeout(() => { // to enable the transition
		$("#page-loading").removeClass("hide")
	}, 0)
}

/**
 * Hide the full page loading
 */
const hideFullPageLoading = () => {
	$("#page-loading").addClass("hide")

	setTimeout(() => {
		$("#page-loading").remove()
	}, 1100)
}

const resolveEnPagePetitionStatus = () => {
	let status = "FRESH";
	// console.log(window);
	if (window.pageJson.pageNumber === 2) {
		status = "SUCC"; // succ page
	} else {
		status = "FRESH"; // start page
	}

	return status;
};

$(function(){

    const EN_PAGE_STATUS = resolveEnPagePetitionStatus()
	//console.log("EN_PAGE_STATUS", EN_PAGE_STATUS)
	if (EN_PAGE_STATUS==="FRESH") {
	
        pageInit();
        $("#page-2").hide();

	} else if (EN_PAGE_STATUS==="SUCC") {
        
        $('#page-1').hide();
        $('#page-2').show();
        // window.location.href = redirectDonateLink;
        //console.log("go to thank you page")

	}
})