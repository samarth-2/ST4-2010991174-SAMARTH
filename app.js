let t=document.getElementById("timer");
var time=30;
counter=setInterval(Time,1000);
function Time(){
	if(time==0){
		showResult();
		clearInterval(counter);
	}
	t.innerHTML=time;
	time--;
}
var quiz = { "JS" : [
	
	{
		"id" : 1,
		"question" : "what is the national animal of Australia",
		"options" : [
			{"a": "Kangaroo", 
			 "b":"Lion", 
			 "c":"Tiger"}
			],
		"answer":"Kangaroo",
	},
	{
		"id" : 2,
		"question" : "In which year python was developed?",
		"options" : [
			{"a": "1991", 
			 "b":"1998", 
			 "c":"1980", 
			 "d":"2005"}
			],
		"answer":"1991",
	},
	{
		"id" : 3,
		"question" : "Which is the third planet in solar system",
		"options" : [
			{"a": "Earth", 
			 "b":"Mars", 
			 "c":"Saturn"}
			],
		"answer":"Earth",
	},
	{
		"id" : 4,
		"question" : "Is Range Rover owned by Tata",
		"options" : [
			{"a": "True", 
			 "b":"False"
			}
			],
		"answer":"True",
	},
	{
		"id" : 5,
		"question" : "Which is the name of largest fish",
		"options" : [
			{"a": "blue whale", 
			 "b":"shark", 
			 "c":"dolphin"}
			],
		"answer":"blue whale",
	},
	]
}
var score = 0;		
var qno = 1;
var currentque = 0;
var totalque = quiz.JS.length;
function displayQuiz(cque) {
		currentque = cque;
		if(currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[currentque].id + '.');
			$("#question").html(quiz.JS[currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[currentque].options[0]) {
			  if (quiz.JS[currentque].options[0].hasOwnProperty(key)) {
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(currentque >= totalque) {
				$('#next').attr('disabled', true);
			  return showResult();	
		}
	}
function showResult() {
		$("#result").addClass('result');
		document.getElementById("qq").style.display='none';
		time=0;
		$("#result").html("<h1>Score: &nbsp;" + score  + '/' + totalque + "</h1>"+"<br>"+"<h1> BETTER LUCK NEXT TIME<h1/>");
	}
function checkAnswer(option) {
		var answer = quiz.JS[currentque].answer;
		if(option == answer) {
		score++;
		}
	}	
function changeQuestion(cque) {
			currentque = currentque + cque;
			displayQuiz(currentque);	
			
	}


$(document).ready(function() {
			displayQuiz(0);		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {
			//var radio = $().find('input:radio');
			$(this).prop("checked", true);
				var selectedopt = $(this).val();
				checkAnswer(selectedopt);
		});
	});
	$('#next').click(function(e) {
			e.preventDefault();
			changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();	
			changeQuestion(-1);
	});	



