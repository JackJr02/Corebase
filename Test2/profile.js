resultsCounter = function() {
    function numberCount(el, number, time) {
        $({ value: 0 })
        .stop(true)
        .animate(
            { value: number },
            {
                duration: time,
                step: function() {
                var roundNumber = Math.round(this.value).toLocaleString('en-US');
                el.text(roundNumber);
            }
        }
        )
        .promise()
        .done(function() {
            el.text(number.toLocaleString('en-US'));
        });
    }

    numberCount($("#countOne"), 5, 1000);
    numberCount($("#countTwo"), 282, 1500);
    numberCount($("#countThree"), 112, 2000);
};

resultsCounter();

$('button').click(function() {
    resultsCounter();
});


var n = 10000;
var value = n.toLocaleString('en-US');
console.log(value)