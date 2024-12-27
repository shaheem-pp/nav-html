function toggleNavbar() {
	// Toggle the visibility of the navbar menu and apply animation effects
	$('#navbarMenu').toggleClass('active');

	// Toggle the hamburger button animation
	$('#navbarToggler').toggleClass('active');

	// Add animation delay for menu items on mobile view
	$('#navbarMenu .navbar-item').each(function (index) {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			setTimeout(() => {
				$(this).addClass('active');
			}, index * 100);
		}
	});
}