function initNav() {
  $('a').click(function(e) {
    var cp = PROVIDER.getCurrentPageName();
    TODD_UTILITY.trace('initNav ', cp);
    var btnID = e.currentTarget.id;
    if (cp != btnID) {
      loadContent(btnID);
    }
  });
}

function loadContent(pageName) {
  var pageContent = PROVIDER.getPageContent(pageName);
  TODD_UTILITY.trace('app.js line 14', pageContent);
  $('.content').html(pageContent);

  initNav();
}

function populateNav() {
  var nav = PROVIDER.getMainNav();

  $.each(nav, function(idx, link) {
    // $('nav').append('<a href="' + link.path + '">' + link.linkName + '</a>');
    $('nav').append(`<a id="${link.path}" href="#">${link.linkName}</a>`);
  });

  loadContent('home');
}

function dataIsLoaded() {
  populateNav();
}

$(document).ready(function() {
  PROVIDER.getData(dataIsLoaded);
});
