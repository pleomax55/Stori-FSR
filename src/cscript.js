document.addEventListener("DOMContentLoaded", function(event) {
	//do work
	$('body').css('opacity', '1');
	//$('[data-tt="tt"]').tooltip();
	var defaultStoriOptions = {
		fsm: false,
		ui: true,
		readMode: 0,
		fontSize: '18px',
		lineHeight: '20px',
		textIndent: '0',
		colorPreset: 'cpreset4',
		bgimgPreset: 'bgip1',
		customColorText: '',
		customBGColor: '',
		customBGImg: '',
		alignMenuB: true,
		topBar: false,
		botBar: true,
		lBar: false,
		rBar: true,
		tProgBar: true,
		bProgBar: false,
		toolsOpen: false,
		optionsOpen: false,
		slbOpen: false,
		debug: false,
		curPr: 1,
		prevGPr: 1,
		nextGPr: 1,
		prevUrlG: '',
		nextUrlG: '',
	};
	var curStoriOpt = {};
	var arOpt = [
		'fsm', 'ui', 'readMode',
		'fontSize', 'lineHeight', 'textIndent', 'colorPreset', 'bgimgPreset',
		'customColorText', 'customBGColor', 'customBGImg',
		'alignMenuB', 'topBar', 'botBar', 'lBar', 'rBar', 'tProgBar', 'bProgBar', 'toolsOpen', 'optionsOpen', 'slbOpen', 'debug',
		'curPr', 'prevGPr', 'nextGPr', 'prevUrlG', 'nextUrlG'
	];
	// localStorage.removeItem("StoriOptions");

	var isFM = "#stori-fs-mode",
		isC = "#stori-container";
	var sFM = "stori-fs-mode",
		sC = "stori-container";
	//
	var cm_c_h = 0,
		stori_c_h = 0,
		timePassed = 0;

	// functions
	function chek_size_pr() {
		if (curStoriOpt['readMode'] == 0) {
			cm_c_h = $('.c-midc').height();
			stori_c_h = $(isC).height();
			if (stori_c_h > cm_c_h) {
				$(isFM).addClass('prtobig');
				$('.c-midc').removeClass('align-items-center').addClass('mx-2');
			} else {
				$(isFM).removeClass('prtobig');
				$('.c-midc').addClass('align-items-center').removeClass('mx-2');
			}
		}
	}

	function saveOpt(opt, val) {
		curStoriOpt[opt] = val;
		var i = LZString.compressToUTF16(JSON.stringify(curStoriOpt));
		localStorage.setItem("StoriOptions", i);
	}

	function setOpt(opt, value, sid) {
		// 'fsm', 'ui', 'readMode',
		// 'fontSize', 'lineHeight', 'textIndent', 'colorPreset', 'bgimgPreset',
		// 'customColorText', 'customBGColor', 'customBGImg',
		// 'alignMenuB', 'topBar', 'botBar', 'lBar', 'rBar', 'tProgBar', 'bProgBar', 'toolsOpen', 'optionsOpen', 'slbOpen', 'debug',
		// 'curPr', 'prevGPr', 'nextGPr', 'prevUrlG', 'nextUrlG'
		if (opt == 'fsm') {
			if (value == true) { $(isFM).addClass('fs-open'), $('body').addClass('fsO'); }
			if (value == false) { $(isFM).removeClass('fs-open'), $('body').removeClass('fsO'); }
		}
		if (opt == 'ui') {
			if (value == true) { $(isFM).removeClass('h-ui').addClass('v-ui'); }
			if (value == false) { $(isFM).removeClass('v-ui').addClass('h-ui'); }
		}
		if (opt == 'readMode') {}
		if (opt == 'fontSize') {}
		if (opt == 'lineHeight') {}
		if (opt == 'textIndent') {}
		if (opt == 'colorPreset') {
			for (var cpres = 1; cpres < 7; cpres++) { $(isFM).removeClass('cpreset' + cpres); }
			if (value == 'cpreset1') { $(isFM).addClass(value); }
			if (value == 'cpreset2') { $(isFM).addClass(value); }
			if (value == 'cpreset3') { $(isFM).addClass(value); }
			if (value == 'cpreset4') { $(isFM).addClass(value); }
			if (value == 'cpreset5') { $(isFM).addClass(value); }
			if (value == 'cpreset6') { $(isFM).addClass(value); }
		}
		if (opt == 'bgimgPreset') {}
		if (opt == 'customColorText') {}
		if (opt == 'customBGColor') {}
		if (opt == 'customBGImg') {}
		if (opt == 'alignMenuB') {
			if (value == true) { $('.b-midc i, .t-midc i').addClass('float-left').removeClass('float-right'); }
			if (value == false) { $('.b-midc i, .t-midc i').removeClass('float-left').addClass('float-right'); }
		}
		if (opt == 'topBar') {
			if (value == true) {
				$(isFM).addClass('tb-open');
				$('.btn-t-tsb-off').addClass('d-none').removeClass('d-inline-block'), $('.btn-t-tsb-on').removeClass('d-none').addClass('d-inline-block');
			}
			if (value == false) {
				$(isFM).removeClass('tb-open');
				$('.btn-t-tsb-on').addClass('d-none').removeClass('d-inline-block'), $('.btn-t-tsb-off').removeClass('d-none').addClass('d-inline-block');
			}
		}
		if (opt == 'botBar') {
			if (value == true) {
				$(isFM).addClass('bb-open');
				$('.btn-t-bsb-off').addClass('d-none').removeClass('d-inline-block'), $('.btn-t-bsb-on').removeClass('d-none').addClass('d-inline-block');
			}
			if (value == false) {
				$(isFM).removeClass('bb-open');
				$('.btn-t-bsb-on').addClass('d-none').removeClass('d-inline-block'), $('.btn-t-bsb-off').removeClass('d-none').addClass('d-inline-block');
			}
		}
		if (opt == 'lBar') {
			if (value == true) {
				$(isFM).addClass('lb-open');
				$('.btn-t-lsb-off').addClass('d-none').removeClass('d-inline-block'), $('.btn-t-lsb-on').removeClass('d-none').addClass('d-inline-block');
			}
			if (value == false) {
				$(isFM).removeClass('lb-open');
				$('.btn-t-lsb-on').addClass('d-none').removeClass('d-inline-block'), $('.btn-t-lsb-off').removeClass('d-none').addClass('d-inline-block');
			}
		}
		if (opt == 'rBar') {
			if (value == true) {
				$(isFM).addClass('rb-open');
				$('.btn-t-rsb-off').addClass('d-none').removeClass('d-inline-block'), $('.btn-t-rsb-on').removeClass('d-none').addClass('d-inline-block');
			}
			if (value == false) {
				$(isFM).removeClass('rb-open');
				$('.btn-t-rsb-on').addClass('d-none').removeClass('d-inline-block'), $('.btn-t-rsb-off').removeClass('d-none').addClass('d-inline-block');
			}
		}
		if (opt == 'tProgBar') {
			if (value == true) {
				$(isFM).addClass('pb-top');
				$('.btn-t-tpb-off').addClass('d-none').removeClass('d-inline-block'), $('.btn-t-tpb-on').removeClass('d-none').addClass('d-inline-block');
			}
			if (value == false) {
				$(isFM).removeClass('pb-top');
				$('.btn-t-tpb-on').addClass('d-none').removeClass('d-inline-block'), $('.btn-t-tpb-off').removeClass('d-none').addClass('d-inline-block');
			}
		}
		if (opt == 'bProgBar') {
			if (value == true) {
				$(isFM).addClass('pb-bot');
				$('.btn-t-bpb-off').addClass('d-none').removeClass('d-inline-block'), $('.btn-t-bpb-on').removeClass('d-none').addClass('d-inline-block');
			}
			if (value == false) {
				$(isFM).removeClass('pb-bot');
				$('.btn-t-bpb-on').addClass('d-none').removeClass('d-inline-block'), $('.btn-t-bpb-off').removeClass('d-none').addClass('d-inline-block');
			}
		}
		if (opt == 'toolsOpen') {
			if (value == true) { $(isFM).addClass('tools-open'); }
			if (value == false) { $(isFM).removeClass('tools-open'); }
		}
		if (opt == 'optionsOpen') {
			if (value == true) { $(isFM).addClass('options-open'); }
			if (value == false) { $(isFM).removeClass('options-open'); }
		}
		if (opt == 'slbOpen') {
			if (value == true) { $(isFM).addClass('slb-open'); }
			if (value == false) { $(isFM).removeClass('slb-open'); }
		}
		if (opt == 'debug') {
			if (value == true) { $(isFM).addClass('debug-open'); }
			if (value == false) { $(isFM).removeClass('debug-open'); }
		}

		if (opt == 'prevUrlG') { if (value == '') { value = window.location.href; } }
		if (opt == 'nextUrlG') { if (value == '') { value = window.location.href; } }
		saveOpt(opt, value);
	}

	$('.btn-v-ui').click(function() { setOpt('ui', true, 'btn-v-ui'); });
	$('.btn-h-ui').click(function() { setOpt('ui', false, 'btn-h-ui'); });
	$('.btn-open-fs').click(function() { setOpt('fsm', true, 'btn-open-fs'); });
	$('.btn-close-fs').click(function() { setOpt('fsm', false, 'btn-close-fs'); });
	$('.btn-open-tools, .btn-closed-tools').click(function() {
		if ($(isFM + '.tools-open').length) {
			setOpt('toolsOpen', false);
		} else {
			setOpt('slbOpen', false), setOpt('toolsOpen', true), setOpt('optionsOpen', false);
		}
	});
	$('.btn-open-options, .btn-closed-options').click(function() {
		if ($(isFM + '.options-open').length) {
			setOpt('optionsOpen', false);
		} else {
			setOpt('slbOpen', false), setOpt('toolsOpen', false), setOpt('optionsOpen', true);
		}
	});
	$('.btn-save-load, .btn-closed-slb').click(function() {
		if ($(isFM + '.slb-open').length) {
			setOpt('slbOpen', false);
		} else {
			setOpt('slbOpen', true), setOpt('toolsOpen', false), setOpt('optionsOpen', false);
		}
	});
	$('.btn-reset-all-stfs').click(function() {
		localStorage.removeItem("StoriOptions");
		curStoriOpt = defaultStoriOptions;
		for (var i = 0; i < arOpt.length; i++) { setOpt(arOpt[i], curStoriOpt[arOpt[i]]); }
	});
	$('.btn-debug').click(function() { if (curStoriOpt['debug'] == true) { setOpt('debug', false); } else { setOpt('debug', true); } });
	$('.btn-preset1').click(function() { setOpt('colorPreset', 'cpreset1'); });
	$('.btn-preset2').click(function() { setOpt('colorPreset', 'cpreset2'); });
	$('.btn-preset3').click(function() { setOpt('colorPreset', 'cpreset3'); });
	$('.btn-preset4').click(function() { setOpt('colorPreset', 'cpreset4'); });
	$('.btn-preset5').click(function() { setOpt('colorPreset', 'cpreset5'); });
	$('.btn-preset6').click(function() { setOpt('colorPreset', 'cpreset6'); });
	$('.btn-al-mb').click(function() { setOpt('alignMenuB', true); });
	$('.btn-ar-mb').click(function() { setOpt('alignMenuB', false); });
	$('.btn-t-tsb-off').click(function() { setOpt('topBar', true); });
	$('.btn-t-tsb-on').click(function() { setOpt('topBar', false); });
	$('.btn-t-bsb-off').click(function() { setOpt('botBar', true); });
	$('.btn-t-bsb-on').click(function() { setOpt('botBar', false); });
	$('.btn-t-lsb-off').click(function() { setOpt('lBar', true); });
	$('.btn-t-lsb-on').click(function() { setOpt('lBar', false); });
	$('.btn-t-rsb-off').click(function() { setOpt('rBar', true); });
	$('.btn-t-rsb-on').click(function() { setOpt('rBar', false); });
	$('.btn-t-tpb-off').click(function() { setOpt('tProgBar', true); });
	$('.btn-t-tpb-on').click(function() { setOpt('tProgBar', false); });
	$('.btn-t-bpb-off').click(function() { setOpt('bProgBar', true); });
	$('.btn-t-bpb-on').click(function() { setOpt('bProgBar', false); });
	// $('').click(function() { if (curStoriOpt[''] == true) { setOpt('', false); } else { setOpt('', true); } });
	// $('').click(function() { if (curStoriOpt[''] == true) { setOpt('', false); } else { setOpt('', true); } });
	// $('').click(function() { if (curStoriOpt[''] == true) { setOpt('', false); } else { setOpt('', true); } });

	if (localStorage.getItem("StoriOptions") != null) {
		var lco = LZString.decompressFromUTF16(localStorage.getItem("StoriOptions"));
		curStoriOpt = JSON.parse(lco);
		for (var i = 0; i < arOpt.length; i++) { setOpt(arOpt[i], curStoriOpt[arOpt[i]]); }
	} else { curStoriOpt = defaultStoriOptions; }
	// localStorage only supports strings. Use JSON.stringify() and JSON.parse()
	// LZString.compressToUTF16(myData);  ---  LZString.decompressFromUTF16(localStorage.getItem("myData"));

	// LOOP
	setInterval(function() {

		chek_size_pr();
	}, 10);
	setInterval(function() { timePassed++; }, 1000);
	setInterval(function() {
		if (curStoriOpt['debug'] == true) {
			var str = JSON.stringify(curStoriOpt).split('{').join('<div>').split(':').join(':<span>').split(',').join('</span><br>').split('}').join('</span></div>');
			$('#debug-options').html('Время сессии: ' + timePassed + ' сек.' + str);
		}
	}, 1000);

});