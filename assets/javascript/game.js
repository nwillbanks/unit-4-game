$(function() {
	let targetNumber;
  	let currentScore;
	const resetRandomNumber = function() {
  	targetNumber = Math.floor(Math.random() * 30 + 30);
  	currentScore = 0;
    $("#randomNumber").text(targetNumber);
    $('#currentScore').text(currentScore);
  };
  resetRandomNumber();
  
  $("img").click(function() {
  	currentScore += $(this).data('score');
    $('#currentScore').text(currentScore);
    
    if (currentScore === targetNumber) {
    	$("#wins").text(+$("#wins").text() + 1);
      alert('You won!');
      resetRandomNumber();
    } else if (currentScore > targetNumber) {
    	$("#losses").text(+$("#losses").text() + 1);
      alert('You lose!');
      resetRandomNumber();
    }
  });
});