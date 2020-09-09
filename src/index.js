import './index.scss';
import * as serviceWorker from './serviceWorker';
import app from './App/main' // bootstrap

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const {$, document} = window

$(window).load(function () {
	$('.flexslider').flexslider({
		animation: "fade",
		slideshow: true,
		slideshowSpeed: 5000,
		animationSpeed: 2000,
		selector: ".slides > .slide",
		controlNav: false
	});
});

$(document).ready(function () {	
	/*var numSignupTarget = parseInt(document.querySelector('input[name="numSignupTarget"]').value, 10) || 0,
		numResponses = parseInt(document.querySelector('input[name="numResponses"]').value, 10) || 0*/
	var numSignupTarget = 0;
	var numResponses = parseInt(document.querySelector('input[name="numResponses"]').value, 10) || 0;
	/* Get Petition Count */
    $.ajax({
        type: 'GET',
        url: 'https://global-petition-counter-v2.appspot.com/api/campaign/protect-oceans-2019',
        dataType: 'json',
        success: function(response) {            			
			numResponses += response.unique_count;
			
			switch (true) {
				case numResponses < 1000:
					numSignupTarget = 5000
					break
				case numResponses >= 1000 && numResponses < 5000:
					numSignupTarget = 10000
					break
				case numResponses >= 5000 && numResponses < 10000:
					numSignupTarget = 20000
					break
				case numResponses >= 10000 && numResponses < 50000:
					numSignupTarget = 100000
					break
				case numResponses >= 50000 && numResponses < 150000:
					numSignupTarget = 200000
					break
				case numResponses >= 150000 && numResponses < 200000:
					numSignupTarget = 250000
					break
				case numResponses >= 200000 && numResponses < 300000:
					numSignupTarget = 350000
					break
				case numResponses >= 300000 && numResponses < 400000:
					numSignupTarget = 450000
					break
				case numResponses >= 400000 && numResponses < 500000:
					numSignupTarget = 550000
					break
				case numResponses >= 500000 && numResponses < 1000000:
					numSignupTarget = 1000000
					break
				case numResponses >= 1000000 && numResponses < 2000000:
					numSignupTarget = 2000000
					break
				case numResponses >= 2000000 && numResponses < 3000000:
					numSignupTarget = 3000000
					break
				case numResponses >= 3000000 && numResponses < 4000000:
					numSignupTarget = 4000000
					break
				case numResponses >= 4000000 && numResponses < 5000000:
					numSignupTarget = 5000000
					break
				case numResponses >= 5000000 && numResponses < 6000000:
					numSignupTarget = 6000000
					break
				case numResponses >= 6000000 && numResponses < 7000000:
					numSignupTarget = 7000000
					break
				case numResponses >= 8000000 && numResponses < 9000000:
					numSignupTarget = 9000000
					break
				case numResponses >= 9000000 && numResponses < 10000000:
					numSignupTarget = 10000000
					break
				default:
					numSignupTarget = 20000000
			}
			document.getElementById('targetNumber').innerHTML = numSignupTarget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

			/*Bar Animation*/
			var value = numResponses;	
			var target = numSignupTarget;
			var size = (value / target) * 100;
			var width_container = $("#progress_container").width();
			var position = ((width_container) - 90) * size / 100;

			$("#content_bar").animate({
				width: size + "%"
			}, {
				duration: 3000,
				easing: 'easeOutCubic',
				complete: function () {

				}
			});
			$("#down_content_bar").animate({
				width: size + "%"
			}, {
				duration: 3000,
				easing: 'easeOutCubic',
				complete: function () {

				}
			});

			/*Number Animation*/

			var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
			$("#number").animateNumber({
				number: value,
				numberStep: comma_separator_number_step
			}, 3000);
			$("#down_number").animateNumber({
				number: value,
				numberStep: comma_separator_number_step
			}, 3000);
        }
    });
});

$(document).ready(function () {
	if (document.body.clientWidth < 640) {
		$(".container_left").empty();
		$(".container_left").empty();
		//$("#sta").detach().appendTo(".menu_container .container_left");
		$("#sign").remove();
		$("#sta").remove();
		$(".menu_container").on("click", function () {
			$('html, body').animate({
				scrollTop: 0
			}, 'slow');
		});
		// $("<img src='https://secured-static.greenpeace.org/taiwan/Global/taiwan/code/2019/polarBear2.png' class='polarBear' />")
		// 	.appendTo(".menu_container .container_right");
		$("<h2>立即連署</h2>").appendTo(".menu_container .container_left");
	}

	$('.phoneExample').appendTo($('.normal.phone'));
});


const createBirthYearList = function() {
	const yearBegin = 1900
	const birthYear = document.getElementById('en__field_supporter_NOT_TAGGED_6')
	if (birthYear) {
		let c = document.createDocumentFragment()
		let cLabel = document.createElement('option')
		for (let i = new Date().getFullYear(); i > yearBegin; i--) {
			let opt = document.createElement('option')
			opt.value = '01/01/' + i.toString()
			opt.innerHTML = i.toString()
			c.appendChild(opt)
		}
		birthYear.append(c)
	}
}
const enFormType = function() {
	const email = document.getElementById('en__field_supporter_emailAddress')
	const phone = document.getElementById('en__field_supporter_phoneNumber')
	const formFields = document.querySelectorAll('.en__field--text')
	if (email && phone) {
		email.setAttribute('type', 'email')
		phone.setAttribute('type', 'tel')
	}
	// init keyboard type
	if (formFields) {
		formFields.forEach(field => {
			let textField = field.querySelector('.en__field__input--text')
			let label = field.querySelector('.en__field__label').textContent
			textField.placeholder = label
		})
	}
	// init form label
}

createBirthYearList();
enFormType();
