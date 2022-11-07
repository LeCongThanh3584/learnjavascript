let date = new Date();  //tạo đối tượng date
let year = date.getFullYear(); //lấy ra năm
let month = date.getMonth() + 1; //do month trả về từ 0-11
let day = date.getDate();  //lấy ra ngày
let hour = date.getHours();  //lấy ra giờ
let min = date.getMinutes();  //lấy ra phút
let sec = date.getSeconds();  //lấy ra giây
console.log(`${sec}-${min}-${hour}  ${day}/${month}/${year}`);

//object math

console.log(Math.PI); //in ra số PI trong js
console.log(Math.round(1.5)); // đây là hàm làm tròn số -> 2
console.log(Math.abs(-1.55)); //Đây là hàm lấy giá trị tuyệt đối -> 1.55
console.log(Math.ceil(4.21)); //Đây là hàm làm tròn lên -> 5
console.log(Math.floor(4.21)); //Đây là hàm làm tròn dưới -> 4
console.log(Math.random()); // in ra 1 số bất kì nằm trong khoảng (0, 1)
Math.floor(Math.random() * 10); //đây là công thức làm tròn số trong khoảng (0, 10)
console.log(Math.min(67, -9, 2, 5, 7)); // tìm số nhỏ nhất -> -9
console.log(Math.max(67, -9, 2, 5, 7)); // tìm số lớn nhất -> 67






