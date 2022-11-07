//        FOR ... OF TRONG JAVASCRIPT
let person = {
    name : 'Thanh',
    age : 20,
    career : 'coder',
    'my-email': 'thanh232002@gamil.com'
}

//       làm quen với mảng 2
let array = [
    5, 1, 'thanh', 'tam', 7, 9, 4
]

let array_2 = [
    {
        id: 1,
        name: 'công'
    },
    {
        id: 2,
        name: 'thành',
        point: 500
    },
    {
        id: 3,
        name: 'thanh'
    },
    {
        id: 4,
        name: 'tâm',
        point: 650
    }
    
]

function edit(array_2, index){
    console.log(index);
    return{
        id: array_2.id + 1,
        name: `Toi ten la: ${array_2.name}`,
        point: array_2.point + 50
    };
}

let newArray = array_2.map(edit); //trả về 1 cái mảng mới và dùng 1 biến để nhận cái mảng đó
    

console.log(newArray);
// array.forEach(function(element, index){ 
//     console.log(element, index);
// })
// /*có hai phần tử trong function đó là element lần lượt là các phần tử của mảng, còn
//  index là chỉ số của các phần tử trong mảng, nó giống như là duyệt qua các phần tử của
//  mảng, forEach không trả về cái gì hết cả
// */
// let check_1 = array.every(function(element, index){ //trả về kiểu boolean
//     console.log(index); //=> in ra chỉ mục của phần tử mảng, kiểm trả lần lượt các ptu trong mảng
//     return element === 4;
// })
// console.log(check_1); //=> false
// /* method every là phương thức kiểm tra xem tất cả các phần tử của mảng có cùng chung 1 cái
// gì đó hay không, chỉ cần 1 phần tử không thỏa mãn điều kiện thì sẽ trả về là false
// */

// let check_2 = array.some(function(element, index){  //=> some thì ngược lại với every
//     console.log(index);
//     return element === 4;
// })
// console.log(check_2);
// /*some thì ngược lại với every tức là chỉ lần 1 trong các phần tử của mảng thỏa mãn điều kiện
// thì sẽ trả về là đúng */

// let object_1 = array.find(function(element, index){
//     console.log(index);
//     return element === 4;
// })
// console.log(object_1);
// /*find là phương thức tìm phần tử trong mảng thỏa mãn yêu cầu nào đó nhưng chỉ trả về 1 và chỉ một
// phần tử đầu tiên thỏa mãn mà thôi, nếu không có thì sẽ trả về undefined*/

// let object_2 = array.filter(function(element, index){
//     console.log(index);
//     return element === 4;
// })
// console.log(object_2);
// /*filter là phương thức tìm phần từ giống với find nhưng filter trả về nhiều phần tử thỏa mãn yêu cầu*/


















const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]



console.log(object);



// Kỳ vọng
// console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]


















/*
for(let key of array){ 
    console.log(key);
}


//hàm for...of không sử dụng được với object, nếu muốn dùng với obj thì ta sử dụng
//cách sau
console.log(Object.values(person)); //sẽ trả về 1 mảng các value
console.log(Object.keys(person)); //sẽ trả về 1 mảng các value
//sử dụng dòng lệnh 20 or 21 đều được
//và khi đã là 1 mảng rồi thì ta có thể sử dụng nó với for ... of một cách bình thường
for(let key of Object.values(person)){
    console.log(key);
} */


















// console.log(person['name']); //in ra value của name của person
// console.log(person['my-email']); //in ra thanh232002@gmail.com
// for(let key in person){
//     console.log(key);  //in ra các chỉ mục là nam age career email, kiểu là kiểu string
//     console.log(person[key]); //in ra value của object person
// }

// for(let key in array){
//     console.log(key);  //in ra các hệ số của mảng, kiểu kiểu string
//     console.log(array[key]); // in ra các phần tử của mảng
// }
