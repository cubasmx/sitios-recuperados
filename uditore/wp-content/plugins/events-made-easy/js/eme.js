function htmlDecode(value){ 
   return jQuery('<div/>').html(value).text(); 
}

jQuery(document).ready( function($) {
	function loadCalendar(tableDiv, fullcalendar, htmltable, htmldiv, showlong_events, month, year, cat_chosen, author_chosen, contact_person_chosen, location_chosen, not_cat_chosen,template_chosen,holiday_chosen,weekdays,language) {
		if (fullcalendar === undefined) {
			fullcalendar = 0;
		}

		if (showlong_events === undefined) {
			showlong_events = 0;
		}
		fullcalendar = (typeof fullcalendar == 'undefined')? 0 : fullcalendar;
		showlong_events = (typeof showlong_events == 'undefined')? 0 : showlong_events;
		month = (typeof month == 'undefined')? 0 : month;
		year = (typeof year == 'undefined')? 0 : year;
		cat_chosen = (typeof cat_chosen == 'undefined')? '' : cat_chosen;
		not_cat_chosen = (typeof not_cat_chosen == 'undefined')? '' : not_cat_chosen;
		author_chosen = (typeof author_chosen == 'undefined')? '' : author_chosen;
		contact_person_chosen = (typeof contact_person_chosen == 'undefined')? '' : contact_person_chosen;
		location_chosen = (typeof location_chosen == 'undefined')? '' : location_chosen;
		template_chosen = (typeof template_chosen == 'undefined')? 0 : template_chosen;
		holiday_chosen = (typeof template_chosen == 'undefined')? 0 : holiday_chosen;
		weekdays = (typeof weekdays == 'undefined')? '' : weekdays;
		$.post(emebasic.translate_ajax_url, {
			action: 'eme_calendar',
			calmonth: parseInt(month,10),
			calyear: parseInt(year,10),
			full : fullcalendar,
			long_events: showlong_events,
			htmltable: htmltable,
			htmldiv: htmldiv,
			category: cat_chosen,
			notcategory: not_cat_chosen,
			author: author_chosen,
			contact_person: contact_person_chosen,
			location_id: location_chosen,
			template_id: template_chosen,
			holiday_id: holiday_chosen,
			weekdays: weekdays,
			lang: language
		}, function(data){
			$('#'+tableDiv).replaceWith(data);
			// replaceWith removes all event handlers, so we need to re-add them
			$('a.eme-cal-prev-month').on('click',function(e) {
				e.preventDefault();
				$(this).html('<img src="'+emebasic.translate_plugin_url+'images/spinner.gif">');
				loadCalendar($(this).data('calendar_divid'), $(this).data('full'), $(this).data('htmltable'), $(this).data('htmldiv'), $(this).data('long_events'), $(this).data('month'), $(this).data('year'), $(this).data('category'), $(this).data('author'), $(this).data('contact_person'), $(this).data('location_id'), $(this).data('notcategory'),$(this).data('template_id'),$(this).data('holiday_id'),$(this).data('weekdays'),$(this).data('language'));
			});
			$('a.eme-cal-next-month').on('click',function(e) {
				e.preventDefault();
				$(this).html('<img src="'+emebasic.translate_plugin_url+'images/spinner.gif">');
				loadCalendar($(this).data('calendar_divid'), $(this).data('full'), $(this).data('htmltable'), $(this).data('htmldiv'), $(this).data('long_events'), $(this).data('month'), $(this).data('year'), $(this).data('category'), $(this).data('author'), $(this).data('contact_person'), $(this).data('location_id'), $(this).data('notcategory'),$(this).data('template_id'),$(this).data('holiday_id'),$(this).data('weekdays'),$(this).data('language'));
			});
		});
        }

	$('a.eme-cal-prev-month').on('click',function(e) {
                e.preventDefault();
		$(this).html('<img src="'+emebasic.translate_plugin_url+'images/spinner.gif">');
		loadCalendar($(this).data('calendar_divid'), $(this).data('full'), $(this).data('htmltable'), $(this).data('htmldiv'), $(this).data('long_events'), $(this).data('month'), $(this).data('year'), $(this).data('category'), $(this).data('author'), $(this).data('contact_person'), $(this).data('location_id'), $(this).data('notcategory'),$(this).data('template_id'),$(this).data('holiday_id'),$(this).data('weekdays'),$(this).data('language'));
	});
	$('a.eme-cal-next-month').on('click',function(e) {
                e.preventDefault();
		$(this).html('<img src="'+emebasic.translate_plugin_url+'images/spinner.gif">');
		loadCalendar($(this).data('calendar_divid'), $(this).data('full'), $(this).data('htmltable'), $(this).data('htmldiv'), $(this).data('long_events'), $(this).data('month'), $(this).data('year'), $(this).data('category'), $(this).data('author'), $(this).data('contact_person'), $(this).data('location_id'), $(this).data('notcategory'),$(this).data('template_id'),$(this).data('holiday_id'),$(this).data('weekdays'),$(this).data('language'));
	});

        // the next code adds an "X" to input fields of class clearable if not empty
        function tog(v){return v?'addClass':'removeClass';}
        $(document).on('input', '.clearableRW', function(){
                $(this)[tog(this.value)]('x');
        }).on('mousemove', '.x', function( e ){
                $(this)[tog(this.offsetWidth-18 < e.clientX-this.getBoundingClientRect().left)]('onX');
        }).on('touchstart click', '.onX', function( ev ){
                ev.preventDefault();
                $(this).removeClass('x onX').val('').change();
                $(this).attr('readonly', false);
        });
        $(document).on('input', '.clearable', function(){
                $(this)[tog(this.value)]('x');
        }).on('mousemove', '.x', function( e ){
                $(this)[tog(this.offsetWidth-18 < e.clientX-this.getBoundingClientRect().left)]('onX');
        }).on('touchstart click', '.onX', function( ev ){
                ev.preventDefault();
                $(this).removeClass('x onX').val('').change();
        });

	if ($('#MassMailDialog').length) {
	     $('#MassMailDialog').dialog({
		autoOpen: false,
		modal: true,
		minWidth: 200,
		title: emebasic.translate_mailingpreferences,
		buttons: [
			{ text: emebasic.translate_yessure,
			  click: function() {
				$(this).dialog('close');
			  }
			},
			{ text: emebasic.translate_iwantmails,
			  click: function() {
				$('#massmail').val(1);
				$(this).dialog('close');
			  }
			}
			]
	     });
	}

	// datepicker defaults, used in other frontend and backend javascript files
        $.datepicker.setDefaults({
                changeMonth: true,
                changeYear: true,
		yearRange: '-99:+10',
                showOn: 'focus',
                altFormat: 'yy-mm-dd',
                dateFormat: emebasic.translate_dateformat,
                firstDay: parseInt(emebasic.translate_firstDayOfWeek),
                showButtonPanel: true,
                beforeShow: function( input ) {
                        setTimeout(function() {
                                var buttonPane = $( input ).datepicker( "widget" ).find( ".ui-datepicker-buttonpane" );
                                $( "<button>", {
                                        text: emebasic.translate_clear,
                                        click: function() {
                                                $.datepicker._clearDate( input );
                                        }
                                }).appendTo( buttonPane ).addClass("ui-datepicker-clear ui-state-default ui-priority-primary ui-corner-all");
                        }, 1 );
                },
                onChangeMonthYear: function( year, month, instance ) {
                        setTimeout(function() {
                                var buttonPane = $( instance ).datepicker( "widget" ).find( ".ui-datepicker-buttonpane" );
                                $( "<button>", {
                                        text: emebasic.translate_clear,
                                        click: function() {
                                                $.datepicker._clearDate( instance.input );
                                        }
                                }).appendTo( buttonPane ).addClass("ui-datepicker-clear ui-state-default ui-priority-primary ui-corner-all");
                        }, 1 );
                }

        });

	function eme_subscribe_json() {
		$('#subscribe_loading_gif').show();
		$('#eme-subscribe-form').find(':submit').hide();
		var alldata = new FormData($('#eme-subscribe-form')[0]);
		alldata.append('action', 'eme_subscribe');
		$.ajax({url: emebasic.translate_ajax_url, data: alldata, cache: false, contentType: false, processData: false, type: 'POST', dataType: 'json'})
		.done(function(data){
			$('#subscribe_loading_gif').hide();
			if (data.Result=='OK') {
				$('div#eme-subscribe-message-ok').html(data.htmlmessage);
				$('div#eme-subscribe-message-ok').show();
				$('div#eme-subscribe-message-error').hide();
				$('div#div_eme-subscribe-form').hide();
				$(document).scrollTop( $('div#eme-subscribe-message-ok').offset().top - $(window).height()/2 + $('div#eme-subscribe-message-ok').height()/2);  
			} else {
				$('div#eme-subscribe-message-error').html(data.htmlmessage);
				$('div#eme-subscribe-message-ok').hide();
				$('div#eme-subscribe-message-error').show();
				$('#eme-subscribe-form').find(':submit').show();
				$(document).scrollTop( $('div#eme-subscribe-message-error').offset().top - $(window).height()/2 + $('div#eme-subscribe-message-error').height()/2);  
			}
		})
		.fail(function(xhr, textStatus, error){
			$('div#eme-subscribe-message-error').html(emebasic.translate_error);
			$('div#eme-subscribe-message-ok').hide();
			$('div#eme-subscribe-message-error').show();
			$('#subscribe_loading_gif').hide();
			$('#eme-subscribe-form').find(':submit').show();
			$(document).scrollTop( $('div#eme-subscribe-message-error').offset().top - $(window).height()/2 + $('div#eme-subscribe-message-error').height()/2);  
		});
	}
	function eme_unsubscribe_json() {
		$('#unsubscribe_loading_gif').show();
		$('#eme-unsubscribe-form').find(':submit').hide();
		var alldata = new FormData($('#eme-unsubscribe-form')[0]);
		alldata.append('action', 'eme_unsubscribe');
		$.ajax({url: emebasic.translate_ajax_url, data: alldata, cache: false, contentType: false, processData: false, type: 'POST', dataType: 'json'})
		.done(function(data){
			$('#unsubscribe_loading_gif').hide();
			if (data.Result=='OK') {
				$('div#eme-unsubscribe-message-ok').html(data.htmlmessage);
				$('div#eme-unsubscribe-message-ok').show();
				$('div#eme-unsubscribe-message-error').hide();
				$('div#div_eme-unsubscribe-form').hide();
				$(document).scrollTop( $('div#eme-unsubscribe-message-ok').offset().top - $(window).height()/2 + $('div#eme-unsubscribe-message-ok').height()/2);  
			} else {
				$('div#eme-unsubscribe-message-error').html(data.htmlmessage);
				$('div#eme-unsubscribe-message-ok').hide();
				$('div#eme-unsubscribe-message-error').show();
				$('#eme-unsubscribe-form').find(':submit').show();
				$(document).scrollTop( $('div#eme-unsubscribe-message-error').offset().top - $(window).height()/2 + $('div#eme-unsubscribe-message-error').height()/2);  
			}
		})
		.fail(function(xhr, textStatus, error){
			$('div#eme-unsubscribe-message-error').html(emebasic.translate_error);
			$('div#eme-unsubscribe-message-ok').hide();
			$('div#eme-unsubscribe-message-error').show();
			$('#unsubscribe_loading_gif').hide();
			$('#eme-unsubscribe-form').find(':submit').show();
			$(document).scrollTop( $('div#eme-unsubscribe-message-error').offset().top - $(window).height()/2 + $('div#eme-unsubscribe-message-error').height()/2);  
		});
	}
	function eme_cancel_payment_json() {
		$('#rsvp_cancel_loading_gif').show();
		$('#eme-cancel-payment-form').find(':submit').hide();
		var alldata = new FormData($('#eme-cancel-payment-form')[0]);
		alldata.append('action', 'eme_cancel_payment');
		$.ajax({url: emebasic.translate_ajax_url, data: alldata, cache: false, contentType: false, processData: false, type: 'POST', dataType: 'json'})
		.done(function(data){
			$('#rsvp_cancel_loading_gif').hide();
			if (data.Result=='OK') {
				$('div#eme-rsvp-delmessage-ok').html(data.htmlmessage);
				$('div#eme-rsvp-delmessage-ok').show();
				$('div#eme-rsvp-delmessage-error').hide();
				$('div#div_payment-cancel-form').hide();
				$(document).scrollTop( $('div#eme-rsvp-delmessage-ok').offset().top - $(window).height()/2 + $('div#eme-rsvp-delmessage-ok').height()/2);  
			} else {
				$('div#eme-rsvp-delmessage-error').html(data.htmlmessage);
				$('div#eme-rsvp-delmessage-ok').hide();
				$('div#eme-rsvp-delmessage-error').show();
				$('#eme-cancel-payment-form').find(':submit').show();
				$(document).scrollTop( $('div#eme-rsvp-delmessage-error').offset().top - $(window).height()/2 + $('div#eme-rsvp-delmessage-error').height()/2);  
			}
		})
		.fail(function(xhr, textStatus, error){
			$('div#eme-rsvp-delmessage-error').html(emebasic.translate_error);
			$('div#eme-rsvp-delmessage-ok').hide();
			$('div#eme-rsvp-delmessage-error').show();
			$('#rsvp_cancel_loading_gif').hide();
			$('#eme-cancel-payment-form').find(':submit').show();
			$(document).scrollTop( $('div#eme-rsvp-delmessage-error').offset().top - $(window).height()/2 + $('div#eme-rsvp-delmessage-error').height()/2);  
		});
	}
	function eme_cancel_bookings_json() {
		$('#rsvp_cancel_loading_gif').show();
		$('#eme-cancel-bookings-form').find(':submit').hide();
		var alldata = new FormData($('#eme-cancel-bookings-form')[0]);
		alldata.append('action', 'eme_cancel_bookings');
		$.ajax({url: emebasic.translate_ajax_url, data: alldata, cache: false, contentType: false, processData: false, type: 'POST', dataType: 'json'})
		.done(function(data){
			$('#rsvp_cancel_loading_gif').hide();
			if (data.Result=='OK') {
				$('div#eme-rsvp-delmessage-ok').html(data.htmlmessage);
				$('div#eme-rsvp-delmessage-ok').show();
				$('div#eme-rsvp-delmessage-error').hide();
				$('div#div_bookings-cancel-form').hide();
				$(document).scrollTop( $('div#eme-rsvp-delmessage-ok').offset().top - $(window).height()/2 + $('div#eme-rsvp-delmessage-ok').height()/2);  
			} else {
				$('div#eme-rsvp-delmessage-error').html(data.htmlmessage);
				$('div#eme-rsvp-delmessage-ok').hide();
				$('div#eme-rsvp-delmessage-error').show();
				$('#eme-cancel-bookings-form').find(':submit').show();
				$(document).scrollTop( $('div#eme-rsvp-delmessage-error').offset().top - $(window).height()/2 + $('div#eme-rsvp-delmessage-error').height()/2);  
			}
		})
		.fail(function(xhr, textStatus, error){
			$('div#eme-rsvp-delmessage-error').html(emebasic.translate_error);
			$('div#eme-rsvp-delmessage-ok').hide();
			$('div#eme-rsvp-delmessage-error').show();
			$('#rsvp_cancel_loading_gif').hide();
			$('#eme-cancel-bookings-form').find(':submit').show();
			$(document).scrollTop( $('div#eme-rsvp-delmessage-error').offset().top - $(window).height()/2 + $('div#eme-rsvp-delmessage-error').height()/2);  
		});
	}

	function eme_add_member_json() {
		$('#member_loading_gif').show();
		$('#eme-member-form').find(':submit').hide();
		alldata = new FormData($('#eme-member-form')[0]);
		alldata.append('action', 'eme_add_member');
		$.ajax({url: emebasic.translate_ajax_url, data: alldata, cache: false, contentType: false, processData: false, type: 'POST', dataType: 'json'})
		.done(function(data){
			$('#member_loading_gif').hide();
			if (data.Result=='OK') {
				$('div#eme-member-addmessage-ok').html(data.htmlmessage);
				$('div#eme-member-addmessage-ok').show();
				$('div#eme-member-addmessage-error').hide();
				$('div#div_eme-member-form').hide();
				if (typeof data.paymentform !== 'undefined') {
					$('div#div_eme-payment-form').html(data.paymentform);
					$('div#div_eme-payment-form').show();
				}
				$(document).scrollTop( $('div#eme-member-addmessage-ok').offset().top - $(window).height()/2 + $('div#eme-member-addmessage-ok').height()/2);  
			} else {
				$('div#eme-member-addmessage-error').html(data.htmlmessage);
				$('div#eme-member-addmessage-ok').hide();
				$('div#eme-member-addmessage-error').show();
				$('#eme-member-form').find(':submit').show();
				$(document).scrollTop( $('div#eme-member-addmessage-error').offset().top - $(window).height()/2 + $('div#eme-member-addmessage-error').height()/2);  
			}
		})
		.fail(function(xhr, textStatus, error){
			$('div#eme-member-addmessage-error').html('An error has occurred');
			$('div#eme-member-addmessage-error').append(xhr.responseText+' : '+error);
			$('div#eme-member-addmessage-ok').hide();
			$('div#eme-member-addmessage-error').show();
			$('#member_loading_gif').hide();
			$('#eme-member-form').find(':submit').show();
			$(document).scrollTop( $('div#eme-member-addmessage-error').offset().top - $(window).height()/2 + $('div#eme-member-addmessage-error').height()/2);  
		});
	}

	function eme_add_booking_json() {
		$('#rsvp_add_loading_gif').show();
		$('#eme-rsvp-form').find(':submit').hide();
		alldata = new FormData($('#eme-rsvp-form')[0]);
		alldata.append('action','eme_add_bookings');
		$.ajax({url: emebasic.translate_ajax_url, data: alldata, cache: false, contentType: false, processData: false, type: 'POST', dataType: 'json' })
		.done(function(data){
			if (data.Result=='OK') {
				$('div#eme-rsvp-addmessage-ok').html(data.htmlmessage);
				$('div#eme-rsvp-addmessage-ok').show();
				$('div#eme-rsvp-addmessage-error').hide();
				if (data.keep_form==1) {
					// we are requested to show the form again, so let's just reset it to the initial state
					$('#eme-rsvp-form').trigger('reset');
					eme_dynamic_bookingdata_json('#eme-rsvp-form');
					if ($('#eme_captcha_img').length) {
						src=$('#eme_captcha_img').attr('src');
						// the booking is ok and the form needs to be presented again, so refresh the captcha
						// we need a new captcha, we take the src and add a timestamp to it, so the browser won't cache it
						// also: remove possible older timestamps, to be clean
						src=src.replace(/&ts=.*/,'');
						var timestamp = new Date().getTime();
						$('#eme_captcha_img').attr('src',src+'&ts='+timestamp);
					}
					$('#eme-rsvp-form').find(':submit').show();
					$('#rsvp_add_loading_gif').hide();
				} else {
					$('div#div_eme-rsvp-form').hide();
					if (typeof data.paymentform !== 'undefined') {
						$('div#div_eme-payment-form').html(data.paymentform);
						$('div#div_eme-payment-form').show();
					}
				}
				// scroll to the message shown, with an added offset of half the screen height, so the message doesn't start at the high top of the screen
				$(document).scrollTop( $('div#eme-rsvp-addmessage-ok').offset().top - $(window).height()/2 + $('div#eme-rsvp-addmessage-ok').height()/2);  
			} else {
				$('div#eme-rsvp-addmessage-error').html(data.htmlmessage);
				$('div#eme-rsvp-addmessage-ok').hide();
				$('div#eme-rsvp-addmessage-error').show();
				// scroll to the message shown, with an added offset of half the screen height, so the message doesn't start at the high top of the screen
				$(document).scrollTop( $('div#eme-rsvp-addmessage-error').offset().top - $(window).height()/2 + $('div#eme-rsvp-addmessage-error').height()/2);  
				$('#eme-rsvp-form').find(':submit').show();
				$('#rsvp_add_loading_gif').hide();
			}
		})
		.fail(function(xhr, textStatus, error){
			$('div#eme-rsvp-addmessage-error').html(emebasic.translate_error);
			$('div#eme-rsvp-addmessage-ok').hide();
			$('div#eme-rsvp-addmessage-error').show();
			// scroll to the message shown, with an added offset of half the screen height, so the message doesn't start at the high top of the screen
			$(document).scrollTop( $('div#eme-rsvp-addmessage-error').offset().top - $(window).height()/2 + $('div#eme-rsvp-addmessage-error').height()/2);  
			$('#eme-rsvp-form').find(':submit').show();
			$('#rsvp_add_loading_gif').hide();
		});
	}

	function eme_dynamic_bookingprice_json(formname,admin_first) {
		if (admin_first === undefined) {
			admin_first = 0;
		}
		var alldata = new FormData($(formname)[0]);
		if (admin_first == 1) {
			alldata.append('eme_rsvp_adminform_first','1');
		}
		// now calculate the price, but only do it if we have a "full" form
		if ($('span#eme_calc_bookingprice').length) {
			alldata.append('eme_override_eventAction', 'calc_bookingprice');
			$('span#eme_calc_bookingprice').html('<img src="'+emebasic.translate_plugin_url+'images/spinner.gif">');
		        $.ajax({url: self.location.href, data: alldata, cache: false, contentType: false, processData: false, type: 'POST', dataType: 'json'})
			.done(function(data){
				$('span#eme_calc_bookingprice').html(data.total);
			})
			.fail(function(xhr, textStatus, error){
				$('span#eme_calc_bookingprice').html('Invalid reply');
			});
		}
	}
	function eme_dynamic_bookingdata_json(formname,admin_first) {
		if (admin_first === undefined) {
			admin_first = 0;
		}
		var alldata = new FormData($(formname)[0]);
		if (admin_first == 1) {
			alldata.append('eme_rsvp_adminform_first','1');
		}
		if ($('div#eme_dyndata').length) {
			$('div#eme_dyndata').html('<img src="'+emebasic.translate_plugin_url+'images/spinner.gif">');
			alldata.append('eme_override_eventAction', 'dynbookingdata');
		        $.ajax({url: self.location.href, data: alldata, cache: false, contentType: false, processData: false, type: 'POST', dataType: 'json'})
			.done(function(data){
				$('div#eme_dyndata').html(data.Result);
				// make sure to init select2 for dynamic added fields
				if ($('.eme_select2_class').length) {
					$('.eme_select2_class').select2({width: 'computedstyle'});
				}
				// make sure to init the datapicker for dynamic added fields
				if ($('.eme_formfield_date').length) {
					$('.eme_formfield_date').datepicker();
					$.each($('.eme_formfield_date'), function() {
						if ($(this).is('.dynamicfield')) {
							$(this).datepicker('option', 'dateFormat', $(this).data('dateformat') );
							$(this).datepicker('option', 'altField', $('input[name="'+$(this).data('altfield')+'"]') );
							$(this).datepicker('option', 'altFormat', 'yy-mm-dd' );
							if ($(this).data('date') == '0000-00-00' || $(this).data('date') == '') {
								$(this).datepicker('setDate',null);
							} else {
								$(this).datepicker('setDate', new Date($(this).data('date')));
							}
						}
					});
				}
				eme_dynamic_bookingprice_json(formname,admin_first);
			});
		} else {
			eme_dynamic_bookingprice_json(formname,admin_first);
		}
	}
	function eme_dynamic_memberprice_json(formname) {
		var alldata = new FormData($(formname)[0]);
		// calculate the price, but only do it if we have a "full" form
		if ($('span#eme_calc_memberprice').length) {
			$('span#eme_calc_memberprice').html('<img src="'+emebasic.translate_plugin_url+'images/spinner.gif">');
			alldata.append('eme_override_eventAction', 'calc_memberprice');
		        $.ajax({url: self.location.href, data: alldata, cache: false, contentType: false, processData: false, type: 'POST', dataType: 'json'})
			.done(function(data){
				$('span#eme_calc_memberprice').html(data.total);
			})
			.fail(function(xhr, textStatus, error){
				$('span#eme_calc_bookingprice').html('Invalid reply');
			});
		}
	}
	function eme_dynamic_memberdata_json(formname) {
		var alldata = new FormData($(formname)[0]);
		if ($('div#eme_dyndata').length) {
			$('div#eme_dyndata').html('<img src="'+emebasic.translate_plugin_url+'images/spinner.gif">');
			alldata.append('eme_override_eventAction', 'dynmemberdata');
			$.ajax({url: self.location.href, data: alldata, cache: false, contentType: false, processData: false, type: 'POST', dataType: 'json'})
			.done(function(data){
				$('div#eme_dyndata').html(data.Result);
				// make sure to init select2 for dynamic added fields
				if ($('.eme_select2_class').length) {
					$('.eme_select2_class').select2({width: 'computedstyle'});
				}
				// make sure to init the datapicker for dynamic added fields
				if ($('.eme_formfield_date').length) {
					$('.eme_formfield_date').datepicker();
					$.each($('.eme_formfield_date'), function() {
						if ($(this).is('.dynamicfield')) {
							$(this).datepicker('option', 'dateFormat', $(this).data('dateformat') );
							$(this).datepicker('option', 'altField', $('input[name="'+$(this).data('altfield')+'"]') );
							$(this).datepicker('option', 'altFormat', 'yy-mm-dd' );
							if ($(this).data('date') == '0000-00-00' || $(this).data('date') == '') {
								$(this).datepicker('setDate',null);
							} else {
								$(this).datepicker('setDate', new Date($(this).data('date')));
							}
						}
					});
				}
				eme_dynamic_memberprice_json(formname);
			});
		} else {
			eme_dynamic_memberprice_json(formname);
		}
   }


	// using the below on-syntax propagates the onchange from the form to all elements below, also those dynamically added
	// some basic rsvp and member form validation
	// normally required fields are handled by the browser, but not always (certainly not datepicker fields)
	$('.eme_submit_button').on('click', function(event) {
		var valid=true;
		$.each($('.eme_formfield_date.required'), function() {
			//if ($(this).prop('required') && $(this).val() == '') {
			if ($(this).val() == '') {
				// $(this).css('border', '2px solid red');
				$(this).addClass('eme_required');
				$(document).scrollTop($(this).offset().top - $(window).height()/2 );
				valid=false;
			} else {
				$(this).removeClass('eme_required');
			}
		});
		$.each($('div.checkbox-group.required'), function() {
			number_checked=0;
			$.each($(this).children("input:checkbox"), function() {
				if ($(this).is(':checked')) {
				   number_checked = number_checked+1;
				}
			});
			if (number_checked == 0) {
				//$(this).css('border', '2px solid red');
				$(this).addClass('eme_required');
				$(document).scrollTop($(this).offset().top - $(window).height()/2 );
				valid=false;
			} else {
				$(this).removeClass('eme_required');
			}
		});
		if (!valid) {
			return false;
		}
	});
	$('#eme-rsvp-form').on('submit', function(event) {
		event.preventDefault();
		if ($('#massmail').length && $('#massmail').val()!=1 && $('#MassMailDialog').hasClass('ui-dialog-content')) {
			$('#MassMailDialog').dialog( "open" );
			$('#MassMailDialog').on('dialogclose', function(event, ui) {
				eme_add_booking_json();
			});	
		} else {
			eme_add_booking_json();
		}
	});
	$('#eme-member-form').on('submit', function(event) {
		event.preventDefault();
		if ($('#massmail').length && $('#massmail').val()!=1 && $('#MassMailDialog').hasClass('ui-dialog-content')) {
			$('#MassMailDialog').dialog( "open" );
			$('#MassMailDialog').on('dialogclose', function(event, ui) {
				eme_add_member_json();
			});	
		} else {
			eme_add_member_json();
		}
	});
	$('#eme-cancel-payment-form').on('submit', function(event) {
		event.preventDefault();
		eme_cancel_payment_json();
	});
	$('#eme-cancel-bookings-form').on('submit', function(event) {
		event.preventDefault();
		eme_cancel_bookings_json();
	});
	$('#eme-subscribe-form').on('submit', function(event) {
		event.preventDefault();
		eme_subscribe_json();
	});
	$('#eme-unsubscribe-form').on('submit', function(event) {
		event.preventDefault();
		eme_unsubscribe_json();
	});

	// when doing form changes, we set a small delay to avoid calling the json function too many times
	var timer;
	var delay = 1000; // 1 seconds delay after last input
	if ($('#eme-rsvp-form').length) {
		// the on-syntax helps to propagate the event handler to dynamic created fields too
		// IE browsers don't react on on-input for select fields, so we define the on-change too
		// and check the type of formfield, so as not to trigger multiple events for a field
		$('#eme-rsvp-form').on('input', function(event) {
			if ($(event.target).is('select')) {
				return;
			}
			if ($(event.target).is('.dynamicprice') && ($(event.target).is('.nodynamicupdates') || $(event.target).is('.dynamicfield')) ) {
				window.clearTimeout(timer);
				timer = window.setTimeout(function(){
					eme_dynamic_bookingprice_json('#eme-rsvp-form');
				}, delay);
				return;
			}
			// for dynamic fields, we only consider a possible price change
			// but that is handled above already, so skipping the rest
			if ($(event.target).is('.dynamicfield') || $(event.target).is('.nodynamicupdates')) {
				return;
			}
			window.clearTimeout(timer);
			timer = window.setTimeout(function(){
				eme_dynamic_bookingdata_json('#eme-rsvp-form');
			}, delay);
		});
		$('#eme-rsvp-form').on('change', function(event) {
			if (!$(event.target).is('select')) {
				return;
			}
			if ($(event.target).is('.dynamicprice') && ($(event.target).is('.nodynamicupdates') || $(event.target).is('.dynamicfield')) ) {
				eme_dynamic_bookingprice_json('#eme-rsvp-form');
				return;
			}
			// for dynamic fields, we only consider a possible price change
			// but that is handled above already, so skipping the rest
			if ($(event.target).is('.dynamicfield') || $(event.target).is('.nodynamicupdates')) {
				return;
			}
			eme_dynamic_bookingdata_json('#eme-rsvp-form');
		});
		eme_dynamic_bookingdata_json('#eme-rsvp-form');
	}
	if ($('#eme-rsvp-adminform').length) {
		// the on-syntax helps to propagate the event handler to dynamic created fields too
		// IE browsers don't react on on-input for select fields, so we define the on-change too
		// and check the type of formfield, so as not to trigger multiple events for a field
		$('#eme-rsvp-adminform').on('input', function(event) {
			if ($(event.target).is('select')) {
				return;
			}
			if ($(event.target).is('.dynamicprice') && ($(event.target).is('.nodynamicupdates') || $(event.target).is('.dynamicfield')) ) {
				window.clearTimeout(timer);
				timer = window.setTimeout(function(){
					eme_dynamic_bookingprice_json('#eme-rsvp-adminform');
				}, delay);
				return;
			}
			// for dynamic fields, we only consider a possible price change
			// but that is handled above already, so skipping the rest
			if ($(event.target).is('.dynamicfield') || $(event.target).is('.nodynamicupdates')) {
				return;
			}
			window.clearTimeout(timer);
			timer = window.setTimeout(function(){
				eme_dynamic_bookingdata_json('#eme-rsvp-adminform');
			}, delay);
		});
		$('#eme-rsvp-adminform').on('change', function(event) {
			if (!$(event.target).is('select')) {
				return;
			}
			if ($(event.target).is('.dynamicprice') && ($(event.target).is('.nodynamicupdates') || $(event.target).is('.dynamicfield')) ) {
				eme_dynamic_bookingprice_json('#eme-rsvp-adminform');
				return;
			}
			// for dynamic fields, we only consider a possible price change
			// but that is handled above already, so skipping the rest
			if ($(event.target).is('.dynamicfield') || $(event.target).is('.nodynamicupdates')) {
				return;
			}
			eme_dynamic_bookingdata_json('#eme-rsvp-adminform');
		});
		// the next variable is used to see if this is the first time the admin form is shown
		// that way we know if we can get the already filled out answers for a booking when first editing it
		eme_dynamic_bookingdata_json('#eme-rsvp-adminform',1);
	}

	if ($('#eme-member-form').length) {
		// the on-syntax helps to propagate the event handler to dynamic created fields too
		// IE browsers don't react on on-input for select fields, so we define the on-change too
		// and check the type of formfield, so as not to trigger multiple events for a field
		$('#eme-member-form').on('input', function(event) {
			if ($(event.target).is('select') || $(event.target).is('.dynamicfield') || $(event.target).is('.nodynamicupdates')) {
				return;
			}
			window.clearTimeout(timer);
			timer = window.setTimeout(function(){
				eme_dynamic_memberdata_json('#eme-member-form');
			}, delay);
		});
		$('#eme-member-form').on('change', function(event) {
			if (!$(event.target).is('select') || $(event.target).is('.dynamicfield') || $(event.target).is('.nodynamicupdates')) {
				return;
			}
			eme_dynamic_memberdata_json('#eme-member-form');
		});
		eme_dynamic_memberdata_json('#eme-member-form');
	}
	if ($('#eme-member-adminform').length) {
		// the on-syntax helps to propagate the event handler to dynamic created fields too
		// IE browsers don't react on on-input for select fields, so we define the on-change too
		// and check the type of formfield, so as not to trigger multiple events for a field
		$('#eme-member-adminform').on('input', function(event) {
			if ($(event.target).is('select') || $(event.target).is('.dynamicfield') || $(event.target).is('.nodynamicupdates') || $(event.target).is('.clearable') ) {
				return;
			}
			window.clearTimeout(timer);
			timer = window.setTimeout(function(){
				eme_dynamic_memberdata_json('#eme-member-adminform');
			}, delay);
		});
		$('#eme-member-adminform').on('change', function(event) {
			if (!$(event.target).is('select') || $(event.target).is('.dynamicfield') || $(event.target).is('.nodynamicupdates')) {
				return;
			}
			eme_dynamic_memberdata_json('#eme-member-adminform');
		});
		eme_dynamic_memberdata_json('#eme-member-adminform');
	}
        if ($('.eme_formfield_date').length) {
                $('.eme_formfield_date').datepicker();
                $.each($('.eme_formfield_date'), function() {
                        $(this).datepicker('option', 'dateFormat', $(this).data('dateformat') );
                        $(this).datepicker('option', 'altField', $('input[name="'+$(this).data('altfield')+'"]') );
                        $(this).datepicker('option', 'altFormat', 'yy-mm-dd' );
			if ($(this).data('date') == '0000-00-00' || $(this).data('date') == '') {
				$(this).datepicker('setDate',null);
			} else {
				$(this).datepicker('setDate', new Date($(this).data('date')));
			}
                });
        }
        if ($('.eme_select2_class').length) {
		$('.eme_select2_class').select2({width: 'computedstyle'});
        }
        if ($('#country_code.eme_select2_country_class').length) {
		$('#country_code.eme_select2_country_class').select2({
			width: '100%',
			ajax: {
				url: emebasic.translate_ajax_url,
				type: 'POST',
				dataType: 'json',
				delay: 500,
				data: function (params) {
					return {
						q: params.term, // search term
						page: params.page,
						pagesize: 30,
						action: 'eme_select_country',
						eme_frontend_nonce: emebasic.translate_frontendnonce
					};
				},
				processResults: function (data, params) {
					// parse the results into the format expected by Select2
					// since we are using custom formatting functions we do not need to
					// alter the remote JSON data, except to indicate that infinite
					// scrolling can be used
					params.page = params.page || 1;
					return {
						results: data.Records,
						pagination: {
							more: (params.page * 30) < data.TotalRecordCount
						}
					};
				},
				cache: true
			},
			placeholder: emebasic.translate_selectcountry
		});
		// if the country_code changes, clear the state_code if present
		$('#country_code.eme_select2_country_class').on('change', function (e) {
			// Do something
			if ($('#state_code.eme_select2_state_class').length) {
				$('#state_code.eme_select2_state_class').val(null).trigger('change');
			}
		});
	}
        if ($('#state_code.eme_select2_state_class').length) {
		$('#state_code.eme_select2_state_class').select2({
			width: '100%',
			ajax: {
				url: emebasic.translate_ajax_url,
				type: 'POST',
				dataType: 'json',
				delay: 500,
				data: function (params) {
					return {
						q: params.term, // search term
						page: params.page,
						pagesize: 30,
						country_code: $('#country_code').val(),
						action: 'eme_select_state',
						eme_frontend_nonce: emebasic.translate_frontendnonce
					};
				},
				processResults: function (data, params) {
					// parse the results into the format expected by Select2
					// since we are using custom formatting functions we do not need to
					// alter the remote JSON data, except to indicate that infinite
					// scrolling can be used
					params.page = params.page || 1;
					return {
						results: data.Records,
						pagination: {
							more: (params.page * 30) < data.TotalRecordCount
						}
					};
				},
				cache: true
			},
			placeholder: emebasic.translate_selectstate
		});
	}
});
