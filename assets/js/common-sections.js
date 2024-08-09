$(document).ready(function() {
    $("a.dropdown-desktop").click(function(event) {
        showMenu($("div.menu.desktop"), event);
    });
    $("a.dropdown-mobile").click(function(event) {
        showMenu($("div.menu.mobile"), event);
    });
    
    // Close the menu when clicking anywhere on the screen
    $(document).click(function(event) {
        $("div.menu").removeClass("open");
    });

    // Prevent closing the menu when clicking inside it
    $("div.menu").click(function(event) {
        event.stopPropagation();
    });

    function showMenu(el, event) {
        event.preventDefault();
        event.stopPropagation(); // Stop propagation to document
        el.toggleClass("open");
    }
});