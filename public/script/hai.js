const questions = [
    "If you could vacation anywhere in the world, where would it be?",
    "What is your go-to board game?",
    "What are two things still on your bucket list?",
    "What was the make and model of your first car?",
    "What sports did you play growing up?",
    "Do you currently live in the same place where you were born?",
    "Which grade in school did you think was the most difficult? What year was your favorite?",
    "Where is your favorite place in the world?",
    "If you are cooking for only yourself - what is your favorite dish to make?",
    "What are two things you never leave the house without?",
    "Which snacks are your must-haves for a road trip?",
    "What is your most valuable possession?",
    "Do you often remember your dreams?",
    "When you were a child, what did you want to be when you grew up?",
    "What does your ideal day look like?",
    "Who inspires you?",
    "Where do you go when you want to be alone?",
    "Are you named after anyone? If not, how did your parents think of your name?",
    "Do you have a treasured piece of clothing you are not willing to give up?",
    "Do you remember any of the addresses of the places you’ve lived?",
    "What is one rule you live by?",
    "What national/international event had the most impact on your life?",
    "What is the hardest thing you’ve ever had to do?",
    "What is “your” song?",
    "If you could only watch one movie for the rest of your life, which one would it be?",
    "You are stranded on a desert island, which three people (dead or alive) are you bringing with you?",
    "What is your favorite Olympic event?",
    "Do you have any bad habits?",
    "What occupation other than your own would you like to try?",
    "Where are you in your family birth order?",
    "If you could rename yourself, what name would you choose?",
    "Which holiday is your favorite?",
    "If you had to spend the rest of your life as a TV character, who would it be?",
    "What DOES NOT belong on a pizza?",
    "What is the best gift you have ever received?",
    "What is the best gift you have ever given?",
    "What are two things that every person should do before they die?",
    "What is your go-to karaoke song?",
    "Which food could you never get sick of eating?",
    "What does everyone else seem to like that you can’t stand?",
    "Do you have a party trick?",
    "What is the biggest lie you’ve ever told?",
    "How much money is enough?",
    "Are you more likely to be early or late?",
    "What do you collect?",
    "What’s the best way to spend an hour?",
    "Have you been told you resemble an actor or actress?",
    "If your life were a song, what would the title be?",
    "What is the best live event you have ever been to?",
    "What is the perfect age?",
  ];

let buttonAppear = () => {
    if(document.getElementById('question').value) {
        document.getElementById('submitButton').style.display = 'block'; // Change send button to be visible
    } else {
        document.getElementById('submitButton').style.display = 'none';
    }
}

let randomQuestion = () => {
    document.getElementById('question').value = questions[Math.floor(Math.random() * 51)];
    buttonAppear();
}

document.getElementById('question').addEventListener("input", buttonAppear);
document.getElementById('dice-button').addEventListener("click", randomQuestion);
