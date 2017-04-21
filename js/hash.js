var hash = window.location.hash;
$(document).scrollTop($('.' + hash.split('#')[1]).offset().top - $('.menu-fix').height());