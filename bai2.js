function numberOneTriangle(){
    const number = Number(document.getElementById('number').value);
    if(number < 1 || number > 10){
        alert('Xin thử lại');
    }
    else{
        for(let i = 0 ; i <= number ; i++){
            for(let j = 0 ; j < i ; j++){
                document.getElementById('result').append('*')
            }
            const br = document.createElement('br')
            document.getElementById('result').appendChild(br)
        }
    }
}