console.log('hello'+100);

console.log("manish"+100);

console.log('hello'+[10,20]);

console.log('hello',[10,20]);

console.log("my name is manish",{id:1,name:'ram'});

console.log("hello"+{id:2,name:'kumar'});


function show(){
    var sum =0;

    for(var i =0;i<arguments.length;i++){
        sum +=isNaN(parseInt(arguments[i])) ? 0 : parseInt(arguments[i]);
    }

    return sum;
}

console.log(show(1,2,3,4,"m",4,4));
function arrSum(arr){

    let newArr =  new Array(arr.length).fill(0);


let sums =0;
    for(let  j =0;j<arr.length ;j++){
        newArr[j] = isNaN(parseInt(arr[j])) ? 0 : parseInt(arr[j]);
        sums += isNaN(parseInt(arr[j])) ? 0 : parseInt(arr[j]);

    }


    return [newArr,"Array sum is ",sums];
}

var arr = [1,2,3,4,5];

console.log("array sum is",arrSum(arr));


function arrSumm(arr) {

    let newArr = new Array(arr.length).fill(0);
    let sums = 0;

    for (let j = 0; j < arr.length; j++) {
        let num = isNaN(parseInt(arr[j])) ? 0 : parseInt(arr[j]);

        newArr[j] = num;
        sums += num;
    }

    return [newArr, "Array sum is", sums];
}

var arr = [1, 2, 3, 4, 5];
console.log("array sum is", arrSumm(arr));


function agrs(){
    let sum = 0;

    for(let k =0;k<arguments.length;k++){
        sum+= arguments[k];
    }

    return sum;
}


console.log(agrs(1,2,3,4,5,[1,2,3,4],[1,2,3,4,5,6]));


const fruit = ['apple','banana','orange', 'apple','apple','orange'];

const count  =  fruit.reduce((acc,acv)=>{
    acc[acv] = (acc[acv] || 0) + 1;
    return acc;
},{});
console.log(count);