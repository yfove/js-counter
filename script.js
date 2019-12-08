$(document).ready(() => {
	// need to create a counter variable
	let counter = 0;

	// when user clicks on the add button, add a number to the counter
	// link the counter variable to the counter HTML
	$('#add').on('click', () => {
		counter = counter + 1;
		$('.counter').text(counter);
		checkGoal(counter);
	});
});