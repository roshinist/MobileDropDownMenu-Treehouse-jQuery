//Problem: Not responsive
//Solution: Use jQuery--> hide links and swap with a better navigation

//Create a select and append to menu
var $select = $('<select></select>');
$('#menu').append($select);

//Iterate through menu links
$('#menu a').each(function(){
	var $link = $(this);
	//Create an option
	var $option = $('<option></option>');
	
	//Deal with selecting options depending on current page
	if($link.parent().hasClass('selected')){
		$option.prop("selected", true);
	}
	
	//Option's value is href
	//Option's text == text of link
	//Append option to end of select.
	$option.val($link.attr('href'));
	$option.text($link.text());
	$select.append($option);
});

//Instead of button bind a change listener to select
$select.change(function(){
	//select's value will match option's value
		var $goTo = $select.val();
		//Change window's location
		window.location = $goTo;
});
/*
	//Create button to go to select's location onclick
	var $button = $("<button>Go</button>")
	$("#menu").append($button);
	$button.click(function(){
		//select's value will match option's value
		var $goTo = $select.val();
		//Change window's location
		window.location = $goTo;
	});
*/

/* Handled in style.css */
//Modify CSS to hide links on small width & show button and select
//Hide select and button on larger width and show links
