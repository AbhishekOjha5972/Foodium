
 //export code for common questions


function commonquestion(){
 return `
  
 <div id="common_question_heading"> <h1> Common Question <h1></div>
  
 <div id="common_question">
     
 <div class="question">How many servings are your meals? <span><img class="arrow_image" src="data:image/png;base64,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" alt=""></span></div>
 <div class="answer">
     <p>With a selection that spans nourishing breakfasts, lunches, and dinners, the majority of our meals are
         single
         serving and perfectly sized for 1 person to enjoy at 1 sitting. We also offer multi-serve proteins and
         sides,
         which are designed to feed multiple people for extra mealtime flexibility. These delicious,
         ready-to-heat
         options can help you bulk up existing meals, simplify home cooking, or even build an entire meal—the
         choice is
         yours! ld, we do offer a 12 meal per week subscription (it’s ideal for couples or a family of 4
         looking for 3
         meals per week). Plus, you We offer anywhere from 4–12 meals per week, with meals as low as $8.99
         each—and you always have the freedom to
         flex your number of meals up each week to add on breakfast items*, which are unlocked upon your second
         order. On
         average, our meals weigh in at about 13 ounces and range from 300 to 650 calories. If you have a larger
         househocan always order multiple subscriptions. We may be biased, but there’s no better
         feeling than a fridge full of Freshly! *Each breakfast item counts towards your 12-meal maximum.
     </p>

 </div>

 <hr>


 <div class="question">Do you accommodate dietary preferences? <span><img class="arrow_image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAAC4CAMAAAAYGZMtAAAAhFBMVEX39/cAAAD////6+vr29vbv7+/n5+d1dXXy8vI+Pj5vb29jY2NeXl5VVVXq6uqenp6mpqba2tozMzNERERpaWmBgYGMjIwqKiqXl5clJSXQ0NDX19fMzMzi4uJMTExPT08NDQ3Dw8OxsbG7u7t8fHweHh6srKwSEhIZGRk/Pz+ioqIuLi4/eamoAAAGQklEQVR4nO2diVbbMBBFI00WIEBLSGlLG9KVQvn//6tNSkiIFy1vNCNH9wOcORfZSLLmeTQqFAqFQqFQKBQKhaNkTNIVhENjjovS9cwyXDcJdnZN8D8o0dqYs0yd2Jkxa7QTGp2bilmW9w7N6tovRtDiiZ6N5OnEzja1n0PHyYuRHO8de/ZSO9IJzc2WZWbjhM5eaz+H1W53jFROshondrlb+xxU+76RynVGTt7WjnFCS/MG7HOKEXp9Bm6dAErfvRe3TrD/z7hoMFL9f4gu3TYYycTJ/7nUgZPIe6fZCHzewwGNLpprj3PyMstpcKJ9EdhqJG6+2W6kWjPoHic0WrfXHr5+7TJizLVmJ0R3XbWHOrG/uq5aOdF779D4urv2X0FO7Ifuq1ZOTpQ6oZMeI8Z8CHDSb0StEwcjIU5cjBjzOFHohCaPLrX7OrE3Llc15lSfE5qcutV+4+XE1YgxC21OaLJwrd3HibsRYz7qep7QyZN77e5O7Cf3q1ZONI0Tmnz0qd3ViZ+RysmlGid06TFGaj45OfE1osiJtxE3J/5GjPk8VeGEpl53jasT+87/qkqc0PRzSO3vepyEGTHmt7wTmv4Oq73bSagRY75JO6Hpn9Dau5zY96FXrZysRJ3Q9Ft47e9bncQYEXZCqwgj7U7ijFROrsSc0Cr4rulyQvdxVxV0QldRY6TmvqF0uo29au1E5EUgwIgxt01OPNZ6rUg4sVeAwm8aB3jIvPWAL8mdQIy0zWGzdGK/AIpun9WHz9R2uE3qxAIegZ3rnOycsBupfuIv4Ce+JnNivwLK7V335eQEYuRv/+5A5Bz2mTROEhmpfih6FmvSOIEYaV/x7f1UHk4gRu5d96N/AH7sO7MT+x1Q5A/3txb6nSQ2AnLyk9GJ/Qko0McI6Cf5nIiUp9qJUHGKnYiVlvwBltRI2MNfqRPRf4dJJ0PORSEmkuETBIVOhI0kXUY4FiS/KE222HQsR8PWBWTbqm+TJqmR+E0/RU6UGGHfAvcoBPECAbMxrMSJqlcqKpyoMqLCiTIjqNeuMRMkfS+sIS/nw51gjKCjKVaAokKdQIzgD0lFHn3aENIY5NoI0wPHsbGII4OvcDVL9cF0kI6mDxJOEEYeuI4WBh+23cW30bCv6dIFxoPKgUey9/FrSO1uzHWD9Th7cifqjdTtHQAn7k3/bZEHXka4W2M826KacQ3KsQfRKf4kaCqjiXcbUIMTl1AYOgyT8ecpRZudR4tllBNqCpPxJVGDKsTJvM8J0bz/KkqMeDQnd9ETqNQY2uNLwsZuxxb2GCeZGakblAHj5MK2Vky2NaLGw0japu7egBAX7trGyXNsaCyPqeNVaNwZI+NGS6ASjQFjRCBwhkZcTiBG7iQieDoDmCIqh7hey4QSdcR0uXMwvjnvyDydQJ7bgqFvRIj/lbthZESI/+6SsZqQOebidf5AY8BaQTpoFLES2c4yISsFRHxpHG9DZiOcDMQIZp/necWK2XVQEVkM2de4JLoEGIkPuMVAgD3jpwlit06LEcyu8QIxRlTcNRsQ7xbi0fUZEsQ7uVjCAkv5kHeia4zUQE48RKBtjNTIOgk7ucIN5KzQoIxIjhOtRuTGScxZSW4gp1MHZUTGiW4jEk4QHQu8QIJyPED1+nCS1kkORtI6ycMIqCfRCWQnJS+QztVBGUk1TnIykmacoPvUuYEkA3TCkfDAC7eT/IxwO8nRCChnpAXOnCVO+JzkaoTPSb5GQEE5gzLC44Q7148bvJPcjeCd5G8EFJSzJV3iMCeQUJhBGUE6SZtezgnKyXCMgAJQBmUE42RYRhBO0n8tgxuKDMqR+c4ML3GhMHJfaOIkxskwjcQE5ch+7Y0TWgWFwvwZrpFAJ2wRNToIcDLoMVLjHaj0IP0lTX48g3JUfIOWG6+gHAVfoE2BhxP20B4tODcjLY7FiLOTIzLi2MaXJMZID3TS62SRNn5Ent5QmMSBLBrocXKERupm+o5ApVO5IAVJOmI5RAJZNNDq5O4Y75oNLYE2RztGahqjsdbCYRvCNITCXIyO2kiDE9GIGiXsOylGRm8iO8+P/a7ZsONkXoxs2DrpDYE9IjaRyMsiZIc6PKgY2ccudQQ7aaIMkUKhUCgUCoVCoQDgH1g1cEnbB9eKAAAAAElFTkSuQmCC" alt=""></span></div>
 <div class="answer">
     <p>We accommodate a variety of dietary preferences, including gluten-free, dairy-free, peanut-free,
         plant-based,
         low-calorie, and carb-conscious options. As a customer, you can set your own dietary preferences and
         easily find
         the meals that work for you (learn more here). You can also check out individual ingredient lists for
         each dish
         if you have specific concerns. <br>If you’re unable to place an order that fits your preferences now, be
         sure to check back frequently as we’re
         always adding new and exciting dishes. <br>‍Please note: We always recommend consulting your physician
         or nutritionist if you have any specific health
         concerns.
     </p>
 </div>

 <hr>

 <div class="question">How long do the meals last? <span><img class="arrow_image" src="data:image/png;base64,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" alt=""></span></div>
 <div class="answer">
     <p>Our meals are chef prepared and delivered fresh, so typically they have a refrigerated shelf life of
         about 3-5
         days. Select items (such as seafood) are best eaten first, so we’ll add a badge on the package to let
         you know.
         We usually suggest enjoying these meals within the first few days of receiving your order, but you can
         always
         check their exact use-by date on the back-of-pack nutrition label. If you’re ever unable to finish your
         meals
         within their shelf life, you can always pop them into the freezer for extended storage. Just be sure to
         microwave your meal straight from the freezer and add a few extra minutes to reach the 165° F internal
         temperature we recommend.</p>
 </div>

 <hr>

 <div class="question">How do I heat up my meals? <span><img class="arrow_image" src="data:image/png;base64,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" alt=""></span></div>
 <div class="answer">
     <p>Your meals will come to you fully prepared so you just have to heat ‘em up in the microwave. On the back
         of each
         meal, you’ll find our easy steps for heating, but generally, the meals heat up in about 3 minutes
         (depending on
         your microwave). If you’re unsure, start at 2 minutes and heat in 30–second increments until the meal
         reaches an
         inner temperature of 165° F. Our meals are packaged to be heated in the microwave (for the ultimate
         convenience), but you can heat them in the oven if you’d like. Just so you know, our current meal
         containers
         aren’t safe for the oven or stovetop, so you’ll have to transfer your food to heat it up.</p>
 </div>

 <hr>

 <div class="question">How does shipping work? <span><img class="arrow_image" src="data:image/png;base64,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" alt=""></span></div>
 <div class="answer">
     <p>To help guarantee your meals arrive in the freshest condition, there is a small shipping fee associated
         with your
         order. We deliver to all states within the continental U.S., and our shipping partners offer delivery
         every day
         of the week. The exact days that we can reach you will depend on your ZIP code and the carrier
         delivering your
         Freshly meals. Whether you're signing up or updating your typical delivery day, we'll show you all the
         days
         available to you so you can choose what's best for you.</p>
 </div>

 <hr>

 <div class="question">How does subscription work? <span><img class="arrow_image" src="data:image/png;base64,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" alt=""></span></div>
 <div class="answer">
     <p>Every week you get to pick your selection of meals from our weekly rotation of 35+ options. Choose any
         number of meals between 4 and 12 per week, with meals as low as $9.58 each. You'll pick the most convenient
         delivery day for you, and we'll ship your chef-cooked meals right to your doorstep! If you ever need to skip
         or
         cancel a week, or size your order up or down, it's easy to make changes to your upcoming delivery before the
         weekly
         deadline.</p>
 </div>



 </div>  `


}

export default commonquestion

//_____________________________________________________________________//

//functionality for common question
//put it in your js file

 
/*var acc = document.getElementsByClassName("question");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}*/

//_______________________________________________________________________//