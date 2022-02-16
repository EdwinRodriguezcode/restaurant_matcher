var survey  = [];
    var question = [
        'Are you a vegetarian ?',
        'Do you like to dine outdoors ?',
        'DO you drink wine with your meals ?',
        'What is you favorite meal ?',
        'Do you like fried food ?',
        'How many tiimes a week do yopu dine out ?',
        'Do you like to try new foods ?',
        'Do you eat healthy ?',
        'Do you like live entertainment  ?',
        'How far do you travel to eat ?',    ]

    // this is the score 
    for (var idx = 0; idx < 10; idx++) {
        var newQuestions = $(`<div class='questionBar id='question${idx}><h6>${questions[idx]}</h6></div>`);

        var newAnswers = $(`
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
            <input type="radio" name="options-${idx}" value='1' autocomplete="off" checked> No way!
        </label>
        <label class="btn btn-secondary">
            <input type="radio" name="options-${idx}" value='2' autocomplete="off"> I'd rather not
        </label>
        <label class="btn btn-secondary">
            <input type="radio" name="options-${idx}" value='3' autocomplete="off"> No preference
        </label>
        <label class="btn btn-secondary">
            <input type="radio" name="options-${idx}" value='4' autocomplete="off"> Yes, kinda
        </label>
        <label class="btn btn-secondary">
            <input type="radio" name="options-${idx}" value='5' autocomplete="off"> Absolutely!
        </label>
    </div>
    <br>
`);

$('#quizField').append(newQuestion);
$('#quizField').append(newAnswers);
}

$(`#submitBtn`).on('click', function(){
    var ansArr = [];
    for (var idx = 0; idx=10; idx++) {
        ansArr.push(parseInt($(`input[name=option-${idx}]:checked`).val()))
    }

    var newHungryuser = {
        name: userName,
        phone: userPhoto,
        score: ansArr,
        
    }

    $.post("/hungryUsers", newHungyuser).then(function(data){
        console.log('here is data after post')
        console.log(data)
        $('#quiuzField').empty();
        $('.bottom-row').addClass('invisible');
        $('$surveyTitle').text('Thanks for taking the survey you will be matched with another hungy user!')

        var resultCard = $(`
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${data.photo}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">It's a match!</h5>
            <p class="card-text">You were matched with ${data.name}!</p>
        </div>
    </div>
`)
$('#quizField').append(resultCard);
        

console.log("posting response data: ", data);
});
});