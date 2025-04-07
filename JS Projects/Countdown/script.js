let count = 0;
let timer ;


$("#start-button").on("click" , function() {

    let input = prompt("Enter a number : ");
    count = parseInt(input);


    timer = setInterval(function () {
        console.log("count");
    
        if (count >= 0) {
            $(".count").text(count);
            count--;
        }   
        else
        {
            clearInterval(timer);
        }
     
    }, 1000);
});


