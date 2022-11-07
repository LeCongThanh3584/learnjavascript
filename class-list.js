//ClassList property

// add  - dùng để thêm class vào element
// contains  - dùng để kiểm tra element đó có class cần kiểm tra hay không
// remove  - dùng để xóa bỏ class của element
/*  toggle - kiểm tra xem nếu element của bạn có class cần thêm vào rồi thì nó
   sẽ gỡ bở còn nếu chưa có thì nó sẽ thêm vào */
// replace - là thay thế class cũ bởi 1 class mới, cú pháp 

let boxElement = document.querySelector('.box_2');
boxElement.classList.add('red'); //đã thêm 1 class vào trong phần tử box_2
//Sẽ thấy văn bản heading chuyển sang màu đỏ
boxElement.classList.contains('red'); // sẽ trả về true nếu có class cần kiểm tra
//nếu không có sẽ trả về false
console.log(boxElement.classList.contains('red'));  // => in ra true
//do là đã thêm class red ở trên, nếu k có thì sẽ trả về là false
boxElement.classList.remove('red'); //xóa bỏ class red ra khỏi element
//nếu class cần xóa mà k có thì sẽ k có chuyện gì xảy ra hết cả
 setInterval(function(){
    boxElement.classList.toggle('red');
 }, 500)  // => code áp dụng phương thức title, làm cho chữ nhấp nháy



document.write('Thanh iu Tam')



