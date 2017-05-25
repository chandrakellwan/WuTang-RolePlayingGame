
//declare variables

$(function(){
	var images = ['assets/images/shaolintemple7.jpg']
	var heroAttackPower = 0;
	var enemyAttackPower = 0;
	var heroHP = 0;
	var enemyHP = 0;
	var heroBaseAttack = 0;
	var fightAudio = new Audio("assets/sounds/fightsounds.mp3");
	var winSound = new Audio ("assets/sounds/winsound.mp3");
	var imagePlace = 0;
	var loseSound = new Audio ("assets/sounds/losesound.mp3");
	
//create function to pick character

	$(".pickCharacter").on("click", "div", function(){
		heroHP = $(this).find(".HP").text();
		heroAttackPower = parseInt($(this).attr("data-attack"));
		heroBaseAttack = heroAttackPower;
		$(this).fadeOut("slow", function(){
			$(".YourChar").append(this);
			$("h3").toggle();  
			var children = $(".pickCharacter").children();
			for (var i = 0; i < children.length; i++){
				
				$(".EnemiesToAttack").append(children[i]);
			}
			$(this).fadeIn("slow");
		});
	});

//function to pick ememies to attack	

	$(".EnemiesToAttack").on("click", "div", function(){
		if ($(".Defender div").length === 0){
			enemyHP = $(this).find(".HP").text();
			enemyAttackPower = $(this).attr("data-counter");
			$(this).fadeOut("slow", function(){
				$(".Defender").append(this);
				$(".attackButton").show();
				$(this).fadeIn("slow");
			});

		}
		});

	//function to load images

	function preload(arrayOfImages) {
	    $(arrayOfImages).each(function(){
	        $('<img/>')[0].src = this;
	       
	    });
	}

	preload(images)

	//create onclick function for attack button

	$(".attackButton").on("click", function(){
		$(".textArea").show();

		enemyHP -= heroAttackPower;
		heroAttackPower += heroBaseAttack;
		$fightText = $(".fightInfo");

		if (enemyHP > 0){
			fightAudio.play();
			$(".Defender div").find(".HP").text(enemyHP);
			heroHP -= enemyAttackPower;
			$(".YourChar div").find(".HP").text(heroHP);

			$($fightText).html("<p>Your Kung Fu strikes caused " + (heroAttackPower - heroBaseAttack) + " damages.</p><p>" + $(".Defender div").find(".name").text() + " injured you with " + 
				enemyAttackPower + " damages.</p>");
			// play sound effect when lose
			if (heroHP <= 0){
				loseSound.play();
				$($fightText).text("Your Kung Fu is not good enough for Shaolin. Go home.");
				$(".YourChar div").fadeOut("slow");
				$(".attackButton").hide();
				$(".restartButton").show();
			}
		//create else statement for defeated character

		} else {
			if ($(".Defender div").length > 0){
				fightAudio.play();
				$($fightText).text("You have defeated " + $(".Defender div").find(".name").text() + ".");
				$(".Defender div").fadeOut("slow", function(){
					$(".Defender").empty();
				});


			}
		//create sound effect when wins			
			if ($(".EnemiesToAttack div").length === 0){
				winSound.play();
				$($fightText).text("Your Kung Fu is invincible!")
				$(".attackButton").hide();
				$(".restartButton").show();
			}

		}

		});
	//create restart button (or restart from nav bar)
	$(".restartButton").on("click", function(){

		location.reload();

		});

// move image to fight area when chicked

	$(".right").on("click", function(){
		imagePlace += 1;
		$("body").css("background-image", "url(" +images[imagePlace % images.length] + ")");

	});

	$("h2").on("click", function(){
		$(".abs").show();
		$("h2").hide();
	});

	$(".rightRight").on("click", function(){
		$(".abs").hide();
		$("h2").show();
	});


});












