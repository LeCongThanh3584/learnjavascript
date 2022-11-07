//object in javascript
let my_Infor = {
    name : 'Thanh',  //cặp key-value, thuộc tính trong object
    'full-name': 'cong thanh', //muốn đặt tên key có dấu gạch ngang thì phải để vào trong ngoặc kép
    age: 18,
    address: 'Thanh hoa',
    getName : function (){   //phương thức trong object
        return this.name;
    }
}
my_Infor.email = 'thanh232002@gmail.com'; //thêm key mới vào object
my_Infor['my-email'] = 'thanh.lc203584@sis.hust.edu.vn'; //thêm key với key có dấu gạch ngang
var my_key = 'address';
console.log(my_Infor.age); //lấy phần tử age ra ngoài
console.log(my_Infor['my-email']); //cách lấy key, nếu key không có sẽ trả về undefined
console.log(my_Infor[my_key]);  //in ra màn hình là Thanh hoa
delete my_Infor.address; //xóa phần tử address
console.log(my_Infor.getName()); //gọi đến phương thức trong object


//obj constructor

function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function (){
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = "12A4";  //sử dụng prototype để thêm thuộc tính ở ngoài hàm tạo
//Cú pháp ten_ham_tao.prototype.ten_thuoc_tinh
User.prototype.getClassName = function(){  //sử dụng prototype để thêm phương thức
    return this.className;
}

let lecturer = new User('Cong', 'Thanh', 'avatar'); //tạo object 1
let user = new User('Thanh', 'Tam', 'avatar'); //tạo object 2

lecturer.title = 'Xin chao cac ban';  //thêm title vào object 1
user.comment = 'i love you 3000'; //thêm comment vào object 2
console.log(lecturer);  //in tất cả về object lecturer
console.log(lecturer.className);  //lấy thuộc tính avatar của object lecturer
console.log(user.getName());  //gọi đến phương thức getName của object user
console.log(user.className);
