import jQuery from 'jquery';
import 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';

jQuery(function() { 
    jQuery('.watch-video').magnificPopup({
        disableOn: 100,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
})
