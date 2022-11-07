let element_2 = document.querySelector('h1');
let element_1 = document.querySelector('a');
element_2.id = 'Seed 1'; // thêm attribute id cho h1
element_2.className = 'seed 1'; // thêm attribute class cho h1
element_2.title = 'Thành Tâm'; //thêm attribute title
element_1.href = 'thanhtam'; //trên attribute href cho thẻ a
/* Nếu ta muốn thêm attribute vào thẻ mà nó không có attribute đó thì
   ta sử dụng thuộc tính setAttribute('tên_attribute','giá_trị_attribute')
   Ta cũng có thể sử dụng setAttribute để cài attribute cho thẻ vốn đã có
   attribute đó 
*/
//ví dụ thẻ h1 không có atttribute là href, nếu cho h1 có thuộc tính là
//href thì ta làm như sau
element_2.setAttribute('href', 'thanhtam');
//-> vậy là thẻ h1 đã có attribute là href

/*cách để lấy ra giá trị của attribute, ta sử dụng phương thức getAttribute
  phương thức getAttribute là phương thức lấy ra giá trị của attribute, 
  cho dù atttribute đó là có sẵn hay là tự người dùng định nghĩa
  getAttribute('tên_attribute_cần_lấy_giá_trị')

*/
console.log(element_2.getAttribute('class')); // => seed 1
//khi mà phần tử cần lấy ra giá trị của attribute mà attribute đó là có sẵn
//trong phần tử đó thì ta chỉ cần sử dụng dấu chấm để lấy ra giá trị mà thôi
console.log(element_2.title); // => Thành Tâm