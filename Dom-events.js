//Dom-events

let getElements = document.querySelectorAll('h1');
for(let key of getElements){
    key.onclick = function(e){ 
        e.target.style.color = 'red';
    }
}

/* e là mouseEvent, sử dụng e sẽ không gây ra lỗi, nếu sử dụng
tên các phần tử luôn thì trong nhiều trường hợp sẽ không như ý 
muốn
  target là lấy ra chính phần tử mà đang được chọn
    và còn nhiều các phương thức khác nữa

*/

