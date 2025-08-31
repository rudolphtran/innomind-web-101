// ===== JAVASCRIPT BASIC EXAMPLES =====

// 1. Syntax Example
/*
comment block
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

document.addEventListener("DOMContentLoaded", function () {
	let form = document.getElementById("infoForm");
	let resultDiv = document.getElementById("result");
	if (form && resultDiv) {
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			let name = document.getElementById("yourName").value.trim();
			let age = document.getElementById("yourAge").value.trim();
	if (name && age) {
		resultDiv.textContent = `Xin chào ${name}! Bạn ${age} tuổi.`;
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
