$(document).ready(function(){

	// Creates more rows in the table.
	$('#assessments').change(function(){
		let num_of_assessments = document.getElementById("assessments").value;

		// Clears the table.
		$(".table").empty();

		// Appends the header.
		$(".table").append(`
				<div class="th" id="table">
					<input class="td_left" type="text" placeholder="Assessments" disabled>
					<input class="td" type="number" placeholder="Marks" disabled>
					<input class="td" type="number" placeholder="Weight" disabled>
				</div>
			`);

		// Appends the other rows.
		for (let i=1; i<=num_of_assessments; i++){
			$(".table").append(`
				<div class="tr" id="table">
					<input class="td_left" type="text" value="Assessment">
					<input class="mark" type="number" value=0 min="0" max="100">
					<input class="weight" type="number" value=0 min="0" max="100">
				</div>
			`);
		}

	});

	// Calculates their mark.
	$("#calculate_mark").click(function(){

		// An array to store the user's marks.
		let totalMark = [];

		// Appends all the user's marks to the totalmark array.
		$(".mark").each(function(index) {
			totalMark.push(Number(this.value));
		});

		// An array to store the weights of the marks.
		let totalWeight = [];

		// Appends all the weights of the marks to the totalweight array.
		$(".weight").each(function(index) {
			totalWeight.push(Number(this.value));
		});
		
		// Used to store the user's final mark.
		let finalMark = Number(0);

		// Calculates the user's final mark.
		for (i = 0; i < totalMark.length; i++){
			finalMark += Number(totalMark[i]) * Number(totalWeight[i]);
		}

		// Divides the final mark by 100.
		finalMark /= 100;

		// Prints out the user's final mark.
		alert("Your final mark is " + finalMark + ".")
	});
});