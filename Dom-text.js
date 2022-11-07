let get_h1 = document.querySelector('h1');
//Để lấy ra được text trong các thẻ thì ta dùng 2 phương thức đó là innnerText và
//textContent
console.log(get_h1.innerText);  // => Đây là code js
console.log(get_h1.textContent); //Đây là code js
console.log(get_h1.innerText = 'congthanh'); // => in ra congthanh
console.log(get_h1.textContent = 'congthanh'); // => in ra congthanh
// => chúng ta có thể chỉnh sửa nội dung văn bản thống qua innerText và textContent
//cả 2 đều in ra kết quả giống nhau, vậy sự khác biệt ở đây là gì
//Với innerText là in ra những gì hiển thị trên màn hình
//Còn textContent thì sẽ in ra y hệt những gì có bên trong thẻ, kể cả khoảng trắng

//thuộc tinh innerHTML và outerHTML 
//innerHTML là thêm phần tử (bao gồm attribute và text)vào trong các element được lấy ra
let getBox = document.querySelector('.box_1');
getBox.innerHTML = '<h1>Thành iu Tâm</h1>'; //ta đã thêm phần tử h1 vào trong thẻ div
getBox.innerHTML = '<h2 title = "iuuuu" >Tâm iu Thành</h2>'; //ta đã thêm phần tử 
//h2 với attribute là title vào trong thẻ div
console.log(getBox.innerHTML); // => sẽ in ra '<h2 title="iuuuu">Tâm iu Thành</h2>'
//Tức là nó sẽ lấy ra tất cả các phần tử chứa bên trong nó


