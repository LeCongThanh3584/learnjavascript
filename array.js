//làm việc với mảng
let languages_1 = [
    'javascript', 'java', 'PHP'
];
let languages_2 =  [
    'react JS', 'Node JS', 'Laravel'
]
console.log(Array.isArray());
// typeof thì sẽ trả về kiểu object, và khi truyền 1 object vào thì cũng 
// là kiểu object nên muốn kiểm tra mảng thì dùng Array.isArray(ten_mang)
console.log(languages_1.length); //lấy độ dài của mảng => 3
console.log(languages_1.toString()); //chuyển các phần tử của mảng sang string =>
//javascript,java,PHP
console.log(languages_1.join(", ")); //có thể ngăn cách các phần tử của mảng bằng cách 
//điền bất kì cái gì vào trong hàm join
console.log(languages_1.pop()); //xóa phần tử ở cuối mảng và trả về giá trị vừa xỏa =>PHP
languages_1.push('C++', 'nodejs'); //hàm push là hàm thêm 1 or nhiều phần tử vào cuối mảng
//và trả về độ dài mới của mảng
console.log(languages_1.shift()); //xỏa đi phần tử ở đầu mảng và trả về phần tử đã xóa
//=>javascript, nếu mà xóa hết phần tử của mảng thì sẽ trả vầ undefined
languages_1.unshift('Ruby', 'golang'); //Thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về 
//độ dài mới của mảng
languages_1.splice(1, 1); //đặt con trỏ vào vị trí 0 và xóa đi 2 phần tử
languages_1.splice(1, 0, 'C#'); // con trở nằm ở vị trí 1, k xóa phần tử nào, và chèn thêm
//phần tử C# vào vị trí 1
console.log(languages_1);
languages_1.concat(languages_2); //hợp nhất mảng language_2 vào language_1
languages_1.slice(1, 2); //dùng để cắt phần tửm, vị trí con trở là vị trí 1, vị trí kết thúc là vị trí 2
languages_1.slice(1); //copy phần tử từ con trỏ 1 đến hết mảng
languages_1.slice(0)//dùng để copy mảng






