// ===== JAVASCRIPT BASIC EXAMPLES =====

// 1. Syntax Example
/*
comment block
ádasd
ádasd
sadasd

*/

console.log("Hello World"); // In ra Hello World

// 2. Value Examples
console.log(42); // số
console.log("Xin chào"); // chuỗi
console.log(true); // boolean
console.log(null); // giá trị rỗng
console.log(undefined); // chưa xác định

// 3. Variable Examples
var x = 10; // biến kiểu cũ
let y = 20; // biến hiện đại
const PI = 3.14; // hằng số
console.log(x, y, PI);

// 4. Data Types Examples
let age = 18; // Number
console.log("Age = ", age);
let name = "An"; // String
let isStudent = true; // Boolean
let address = null; // Null
let phone; // Undefined
let person = { name: "An", age: 18 }; // Object
let scores = [8, 9, 10]; // Array
console.log(age, name, isStudent, address, phone, person, scores);

// object example. Ánh xạ đối tượng ở ngoài cuộc sống vào trong lập trình
// object có thể là người, có thể là vật
const nhat = {
	ten: "Nhật",
	tuoi: 13,
	conDiHoc: true,
	diaChiNha: "Đà Nẵng"
}

const tuan = {
	ten: "Tuấn",
	tuoi: 14,
	conDiHoc: true,
	diaChiNha: "Đà Nẵng"
}

const nobita = {
	ten: "Nobita",
	tuoi: 10,
	conDiHoc: true,
	diaChiNha: "Tokyo"
}

const classRoom = {
	siSo: 20,
	tenLop: "Web 101",
	giaoVien: {
		ten: "Thầy A",
		tuoi: 30,
	},
	hocSinh: [
		nhat,
		tuan,
		{
			ten: "Hoa",
			tuoi: 14,
			conDiHoc: true,
			diaChiNha: "Huế"
		},
		nobita
	]
}



console.log("classRoom = ", classRoom)

//Array - Mảng là tập hợp các phần tử
let theLoai = ["Hài hước", "Hoạt hình", "Gia đình", "Tình cảm", "Hành động"]

// 5. let, const, var
var a = 1;
let b = 2;
const c = 3;
a = 5; // có thể thay đổi
b = 6; // có thể thay đổi
// c = 7; // lỗi: không thể thay đổi giá trị của const
console.log(a, b, c);

// 6. Operators
let x1 = 5;
let y1 = 2;
let sum = x1 + y1; // 7
let isEqual = x1 == y1; // false
let isStrict = x1 === y1; // false
let isGreater = x1 > y1; // true
let isOk = x1 > 0 && y1 > 0; // true
console.log(sum, isEqual, isStrict, isGreater, isOk);

// 7. Practice: Print values
let studentName = "An";
let studentAge = 18;
console.log("Tên:", studentName);
console.log("Tuổi:", studentAge);

// Xử lý nhập liệu và hiển thị kết quả thực tế
// Ví dụ cho phần 8 của javascript-basic.html
/*
	document là nguyên toàn bộ trang web của mình. Nó là một phần tử chứa toàn bộ trang web của mình
	document.addEventListener: toàn bộ trang web của mình được thêm 1 lắng nghe sự kiện
	Và cụ thể sự kiện ở đây là: DOMContentLoaded -> khi trang web được load lên.
	Vậy nguyên đoạn code document.addEventListener("DOMContentLoaded", function(){}) nghĩa là khi trang web được load lên thì sẽ chạy những đoạn code trong function
	let form = document.getElementById("infoForm");
	Tạo một biến form. Lấy thẻ form có id là "infoForm" gán vào biến form
	let resultDiv = document.getElementById("result");
	Tạo một biến resultDiv. Lấy thẻ có id là "result" gán vào biến resultDiv
	if (form && resultDiv) { -> nếu form và resultDiv có giá trị -> điều kiện này bảo vệ trang web khỏi bị lỗi
		form.addEventListener("submit", function (e) {}) -> form lắng nghe một sự kiện là submit (khi bấm nút Hiển thị)
		e.preventDefault(); -> chặn hành vi mặc định của form là load lại trang.
		e là viết tắt của event
		let name = document.getElementById("yourName").value.trim(); -> tạo biến name, lấy giá trị trong ô input có id là yourName, dùng hàm trim() để loại bỏ khoảng trắng thừa ở đầu và cuối chuỗi
		let age = document.getElementById("yourAge").value.trim();

		if (name && age) { -> nếu name và age có giá trị (không rỗng)

		resultDiv.textContent = `Xin chào ${name}! Bạn ${age} tuổi.`; -> thay thế nội dung của phần resultDiv bằng nội dung mới
	}


	Bài học là:
	document: đại diện cho toàn bộ trang web
	getElementById: lấy thẻ HTML theo id
	addEventListener: lắng nghe sự kiện
	trim(): loại bỏ khoảng trắng thừa ở đầu và cuối chuỗi
	if: câu điều kiện

	cú pháp của điều kiện là:
	cú pháp 1
	if(điều kiện){
		code chạy khi điều kiện đúng
	}

	cú pháp 2
	if(điều kiện){
		code chạy khi điều kiện đúng
	}
	else{
		code chạy khi điều kiện sai
	}

	cú pháp 3
	if(điều kiện 1){
		code chạy khi điều kiện 1 đúng
	}
	else if(điều kiện 2){
		code chạy khi điều kiện 2 đúng
	}
	else if(điều kiện 3){
		code chạy khi điều kiện 3 đúng
	}
	else{
		code chạy khi tất cả điều kiện trên đều sai
	}

*/
document.addEventListener("DOMContentLoaded", function () {
	let form = document.getElementById("infoForm");
	let resultDiv = document.getElementById("result");
	if (form && resultDiv) {
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			let name = document.getElementById("yourName").value.trim();
			let age = document.getElementById("yourAge").value.trim();
			if (name && age) {
				if(age < 13){
					resultDiv.textContent = `Xin chào em ${name}!`;
				}
				else if( age == 13){
					resultDiv.textContent = `Xin chào bạn ${name}`;
				}
				else if( age > 13 && age < 35){
					resultDiv.textContent = `Xin chào anh/chị ${name}!`;
				}
				else {
					resultDiv.textContent = `Xin chào bác ${name}!`;
				}
			} else {
				resultDiv.textContent = "Vui lòng nhập đầy đủ tên và tuổi.";
			}
		});
	}
});

// Xử lý nút cuộn lên đầu trang
// Ví dụ cho phần 9 của javascript-basic.html

	document.addEventListener('DOMContentLoaded', function() {
		var scrollBtn = document.getElementById('scrollTopBtn');
		if (scrollBtn) {
			scrollBtn.addEventListener('click', function() {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			});
		}
	});

// Floating scroll top icon

document.addEventListener('DOMContentLoaded', function() {
	var floatingBtn = document.getElementById('floatingScrollTop');
	if (floatingBtn) {
		floatingBtn.addEventListener('click', function() {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}
});

// ===== Lời giải bài tập cuối bài giảng =====

// Bài 1: Tự động chào theo giờ trong ngày
(function() {
	var greetingDiv = document.getElementById('greetingResult');
	if (greetingDiv) {
		var now = new Date();
		var hour = now.getHours();
		var greeting = '';
		if (hour < 12) greeting = 'Chào buổi sáng!';
		else if (hour < 18) greeting = 'Chào buổi trưa!';
		else greeting = 'Chào buổi tối!';
		greetingDiv.textContent = greeting;
	}
})();

// Bài 2: Image Slider
(function() {
	var images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
	var current = 0;
	var img = document.getElementById('sliderImage');
	var prevBtn = document.getElementById('prevBtn');
	var nextBtn = document.getElementById('nextBtn');
	function showImage(idx) {
		if (img) img.src = images[idx];
	}
	if (prevBtn) {
		prevBtn.addEventListener('click', function() {
			current = (current - 1 + images.length) % images.length;
			showImage(current);
		});
	}
	if (nextBtn) {
		nextBtn.addEventListener('click', function() {
			current = (current + 1) % images.length;
			showImage(current);
		});
	}
	showImage(current);
})();

// Bài 3: Nút xem thêm
(function() {
	var btn = document.getElementById('readMoreBtn');
	var moreText = document.getElementById('moreText');
	if (btn && moreText) {
		btn.addEventListener('click', function() {
			if (moreText.style.display === 'none') {
				moreText.style.display = 'inline';
				btn.textContent = 'Thu gọn';
			} else {
				moreText.style.display = 'none';
				btn.textContent = 'Xem thêm';
			}
		});
	}
})();

// Ví dụ DOM Manipulate
(function() {
	var btn = document.getElementById('changeDomBtn');
	var demo = document.getElementById('domDemo');
	if (btn && demo) {
		btn.addEventListener('click', function() {
			demo.textContent = 'Nội dung đã thay đổi bằng JavaScript!';
			demo.style.color = 'red';
			btn.disabled = true;
			btn.textContent = 'Đã thay đổi';
		});
	}
})();
