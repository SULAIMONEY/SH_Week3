document.getElementById('increase').addEventListener('click', function myFunction(){
    var digit = parseInt(document.getElementById('digit').innerHTML)
    if(digit >= 50){
        var newDigit = digit
        document.getElementById('digit').innerHTML = newDigit
    }else{
        var newDigit = digit + 1
        document.getElementById('digit').innerHTML = newDigit
    }
})

document.getElementById('decrease').addEventListener('click', function myFunction(){
    var digit = parseInt(document.getElementById('digit').innerHTML)
    if(digit <= 0){
        var newDigit = digit
        document.getElementById('digit').innerHtml = newDigit
    }else{
    var newDigit = digit - 1
    document.getElementById('digit').innerHTML = newDigit
    }
})