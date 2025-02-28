console.log("Train Area");

console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba boling", // 0-20
    "togri boshliq tanlang va koproq xato qiling", // 21-30
    "uzingizga ishlashingizni boshlang", // 31-40
    "siz kuchli bolgan narsalarni qiling",  // 41-50
    "yoshlarga investitsiya qiling",    // 51-60    
    "endi dam oling, foydasi yoq endi"  // 60
];

// B Task Area
console.log("B Task Area");
function countDigits(string) {
    return string.split('').filter(numbers => '0123456789'.includes(numbers)).length;
}

// Test qilish
console.log("Raqamlar soni", countDigits("ad2a54y79wet0sfgb9")); // 7
console.log("Raqamlar soni", countDigits("MIT25GROUP.TONY")); // 2

// A Task Area

function countLetter(letter, word) {
    let count = 0;
    for(i = 0; i < word.length; i++) {
        if(word[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log("A Task Area answer: ", countLetter("e", "engineering"));
console.log("A Task Area answer: ", countLetter("i", "engineering"));

// 22 lesson

async function maslahatBering(a) {
    if(typeof a !== "number") throw new Error("Insert a number");
    else if(a <= 20) return list[0];
    else if(a > 20 && a <= 30) return list[1]; 
    else if(a > 30 && a <= 40) return list[2]; 
    else if(a > 40 && a <= 50) return list[3];
    else if(a > 50 && a <= 60) return list[4];
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 1000);
        });

        // setTimeout(function() {
        // }, 5000);
    }
}
 // Then/Catch function

// console.log('passed here 0');
// maslahatBering(25)
//    .then((data) => {
//         console.log("Javob: ", data)
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
//     console.log('passed here 1');

// Async/Await function
async function run() {
    let javob = await maslahatBering(74);
    console.log("Javob: ", javob);
 }
run();

// 21 Lesson
// function maslahatBering(a, callback) {
//     if(typeof a !== "number") callback("Insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]); 
//     else if(a > 30 && a <= 40) callback(null, list[2]); 
//     else if(a > 40 && a <= 50) callback(null, list[3]);  
//     else if(a > 50 && a <= 60) callback(null, list[4]);  
//     else {
//         setTimeout(function() {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }
// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else {
//         console.log("Javob: ", data);
//     }
// });

// console.log('passed here 1');