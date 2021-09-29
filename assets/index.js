document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var el = document.querySelectorAll('.tabs');
    var instances = M.Sidenav.init(elems);
    var instance = M.Tabs.init(el);
  });