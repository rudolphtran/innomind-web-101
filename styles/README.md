# 📁 Hướng dẫn sử dụng CSS Files

## 🎯 Mục đích
Tách file CSS để dễ quản lý và bảo trì code theo từng chủ đề cụ thể.

## 📂 Cấu trúc thư mục styles/

```
styles/
├── main.css                 # File CSS chính (import tất cả)
├── basic-styles.css         # Styles cơ bản (body, h1, h2, p, button)
├── position-styles.css      # Styles về CSS Position
├── display-styles.css       # Styles về CSS Display
├── flexbox-styles.css       # Styles về CSS Flexbox
├── transform-styles.css     # Styles về CSS Transform
├── transition-styles.css    # Styles về CSS Transition
└── style-css.css           # File cũ (có thể xóa sau khi test)
```

## 🔗 Cách sử dụng

### 1. Sử dụng file chính (Khuyến nghị)
```html
<link rel="stylesheet" href="styles/main.css">
```

### 2. Sử dụng file riêng lẻ (nếu chỉ cần 1 tính năng)
```html
<!-- Chỉ cần basic styles -->
<link rel="stylesheet" href="styles/basic-styles.css">

<!-- Chỉ cần transform -->
<link rel="stylesheet" href="styles/transform-styles.css">

<!-- Kết hợp nhiều file -->
<link rel="stylesheet" href="styles/basic-styles.css">
<link rel="stylesheet" href="styles/flexbox-styles.css">
```

## 📄 Mô tả từng file

### 🎨 basic-styles.css
- Styles cơ bản cho body, h1, h2, p
- Button styles và hover effects
- Margin auto utilities
- **Sử dụng cho:** Tất cả các trang cơ bản

### 📍 position-styles.css
- CSS Position: static, relative, absolute, fixed, sticky
- Position container styles
- **Sử dụng cho:** position.html, các trang cần positioning

### 📱 display-styles.css
- CSS Display: block, inline, inline-block, none
- Display utilities
- **Sử dụng cho:** display.html, các trang cần display

### 🎯 flexbox-styles.css
- CSS Flexbox container và items
- Flex direction, justify-content, align-items
- **Sử dụng cho:** flex-box.html, layouts

### 🔄 transform-styles.css
- CSS Transform: translate, scale, rotate, skew
- 3D transforms và animations
- Transform origin
- **Sử dụng cho:** transform.html

### ⚡ transition-styles.css
- CSS Transition effects
- Duration, timing functions, delay
- Practical examples và advanced techniques
- **Sử dụng cho:** transition.html

## 🎯 Class namespaces

Để tránh conflict giữa các styles:

- `.transform-page`: Cho transform.html
- `.transition-page`: Cho transition.html
- Các file khác sử dụng global styles

## 🚀 Ưu điểm của cách tách này

### ✅ **Maintainability (Dễ bảo trì)**
- Mỗi file tập trung vào một chủ đề
- Dễ tìm và sửa lỗi
- Code sạch và có tổ chức

### ✅ **Performance (Hiệu suất)**
- Có thể load chỉ CSS cần thiết
- Giảm kích thước file cho từng trang
- Browser cache hiệu quả hơn

### ✅ **Scalability (Mở rộng)**
- Dễ thêm tính năng mới
- Không ảnh hưởng đến code hiện tại
- Team có thể làm việc song song

### ✅ **Reusability (Tái sử dụng)**
- Có thể sử dụng file riêng lẻ
- Dễ copy sang project khác
- Modular design

## 🔧 Cách cập nhật file HTML

### Các file đã cập nhật:
- `transform.html` ✅
- `transition.html` ✅

### Các file cần cập nhật:
```html
<!-- Thay đổi từ -->
<link rel="stylesheet" href="styles/style-css.css">

<!-- Thành -->
<link rel="stylesheet" href="styles/main.css">
```

## 📝 Lưu ý

1. **File `style-css.css` cũ** có thể giữ lại để backup hoặc xóa sau khi test
2. **Import order** trong `main.css` có thể ảnh hưởng đến CSS cascade
3. **Browser support** cho `@import` tốt nhưng có thể chậm hơn nhiều `<link>` tags
4. **Production**: Nên merge các file CSS thành 1 file để optimize performance

## 🎉 Kết luận

Cấu trúc mới này giúp:
- 📚 **Học sinh** dễ hiểu từng phần CSS
- 👨‍🏫 **Giáo viên** dễ dạy và demo
- 🔧 **Developer** dễ maintain và extend
- 🚀 **Performance** tốt hơn với selective loading
