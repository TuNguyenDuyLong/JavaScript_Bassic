console.log("Helllo Word")
let name = "Long" // this is a variable
// js is case-sensitive: Có phân biệt hoa thường
let Name = "Jony"
console.log("name:" + name + ", name:" + Name)
/**
 * commet nhiều dòng
 * 
 */
let x = 10
console.log("x:" + x)
// const: gán cho 1 cá thể độc lập
// Ví dụ:
const conguoiyeu = false
console.log(conguoiyeu)

let car = [
    'Mercedes',
    'MC',
    , // empty item
    'Lambor',
    'Fera'
]
console.log(car[1])
let message = "I like these car\
And many other\
Please buy and buy\
"
console.log(message)
// \n\ xuống dòng khi viết văn bản
let i = 0
while (i < 10) {
    i = i + 1 // nếu để i++ vẫn được
    console.log(`i = ${i}`) // dòng i= thay bằng item vẫn được
}
// Câu lệnh if/else if/else:
let marks = 8.5
if (marks >= 0 && marks < 4) { console.log("Bad") }
else if (marks >= 4 && marks < 6) { console.log("Normal") }
else if (marks >= 6 && marks < 8) { console.log("Good") }
else if (marks >= 8 && marks < 10) { console.log("Excellent") }
else { console.log("Mark is underfined") }

//Vòng lặp for/ for loot 
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) { // có thể thay đổi điều kiện khác
        continue // có thể dùng câu lệnh break thì se thoát khỏi vòng lặp mà chạy thẳng đến dòng 54
    }
    console.log(`i=${i}`) // nhớ câu lệnh này khi xuất 1 biến trong vòng lặp
}
// Ví dụ 2 về hàm for loot 
let cars = [
    'Mercedes',
    'MC',
    'Vin',
    'Toyota',
    'Lambor',
    'Fera'
]
for (let i = 0; i < cars.length - 1; i++) {
    console.log(cars[i])
}
// Cách 2 sử dụng hàm FOR EACH
cars.forEach(function (car) {
    console.log(car)
})
// Cách 3 rút gọn từ cách 2:
cars.forEach((car) => {
    console.log(car)
})
// Cách 4: dùng "FOR OF"
for (let dem of cars) {
    console.log(`name: ${dem}`)
}
//Cách 5: dùng "FOR IN"
for (let dem in cars) {
    console.log(`name: ${dem}`)
    //console.log("name:" +dem) giống như dòng trên
}
cars.forEach((car, index, array) => {
    console.log(`${index + 1}-${car}`)
})
/////////////////
cars.push("EQS Mercedes Sedan")
console.log(cars)
let filtered_Cars = cars.filter(function (car) {
    return car.includes("Mer")
})
console.log(`filteredCars = ${filtered_Cars}`)
console.log(`Chúng ta tìm thấy được ${filtered_Cars.length} car`) // Câu lệnh cho biết được số index mà mình tìm (không trả kết quả về tên)
///////////////
let someNumbers = [3, 2, 4, 6, 7, 8]
someNumbers[0] = 5
let AnhXa = someNumbers.map(so => {
    return so ** 3
})
console.log(`SomeNumbers ${someNumbers}`)
console.log(`AnhXa ${AnhXa}`)
// Xóa tất cả các số nhỏ hơn 5 
// Dùng lệnh after Deleted
console.log("After Deleted: Dùng để xóa phần tử mình muốn xóa")
console.log("Muốn xóa các phần tử nhỏ hơn 5 ta cần thay đổi điều kiện là xuất ra các số >=5")
someNumbers = someNumbers.filter(so => so >= 5)
console.log("someNumbers: " + `${someNumbers}`)
// function:
function sayhello(name) {
    console.log(`Hello ${name}`)
}
sayhello('Long ')
const multiply = function (x, y) {
    return x * y
}
console.log(`Multiply 5 and 7 = ${multiply(5, 7)}`)

// gán cho 1 biến:
const divide = (a, b) => (a / b).toFixed(3) // toFixed là hàm làm tròn số
console.log(`8 chia cho 4 ta được ${divide(8, 4)}`)
////////////////////////////
// Destructuring: Tách các thuộc tính từ đối tượng
let ketqua = {}
ketqua.a = 4
ketqua.b = 6
ketqua.c = 13
ketqua.d = 23
let { a, b } = ketqua
a = 100
console.log(`a= ${a}, b= ${b}`)
console.log(ketqua.a)
ketqua.a = 111 // hoặc ketqua['a'] = 111
console.log(ketqua)
console.log(typeof ketqua) // Trả về kiểu dữ liệu 
console.log(typeof ketqua.b) // Trả về kiểu dữ liệu 
const myDreamCar = {
    maker: 'Mer',
    model: 'G63',
    year: 2023
}
console.log(myDreamCar.color === undefined)
console.log(myDreamCar)
for (let key in myDreamCar) {
    console.log(`key = ${key}`)
}
for (let gia_tri of Object.values(myDreamCar)) {
    console.log(`value = ${gia_tri}`)
}
const myDreamCar2 = { ...myDreamCar }
myDreamCar.year = 2021
console.log(myDreamCar)
console.log(myDreamCar2)
// Tạo mới 1 đối tượng từ hàm khởi tạo

function Car(maker, model, year, color) {
    this.maker = maker
    this.model = model
    this.year = year
    this.color = color
}
let car1 = new Car('McLaren', '720s Spider', 2021, 'Orange')
let car2 = new Car('Toyota', 'Camry', 2022, 'Black')
let car3 = new Car('Mazda', 'Mazda 6', 2022, 'White')
let car4 = new Car('Honda', 'Civic Type R', 2023, 'Red')
car1.run = function (speed) {
    console.log(`This car run at speed ${speed} km/h`)
}
car1.run(236)
// Thuộc tính describe được định nghĩa để in ra các thuộc tính của đối tượng.
car1.describe = function () {
    console.log(`maker: ${this.maker}, \
                 model: ${this.model}, \
                 year: ${this.year}, \
                 color: ${this.color},`)
}
car1.describe()
car2.describe = car1.describe
// Gán giá trị describe của car1 cho car2
car2.describe()

car3.describe = car1.describe
// Gán giá trị describe của car1 cho car3
car3.describe()

car4.describe = car1.describe
// Gán giá trị describe của car1 cho car4
car4.describe()
/////////////
console.log(car1)
delete car1.color
console.log('After delete color')
console.log(car1)

//Lớp đối tượng, hàm khởi tạo(constructor)
////// Tính kế thừa trong class 
class Person {
    constructor(name, email, age) {
        this.name = name ?? ''
        this.email = email ?? 'Chưa cập nhật emaill !!!'
        this.age = age || 18
    }
}
// Lớp Employee kế thừa các thuộc tính của lớp Person
class Employee extends Person {
    // constructor(){
    //     this.name = name
    //     this.departmentName = 'No department'
    // }
    // constructor with arguments
    constructor(name, email, age, department) {
        super(name, email, age)
        this.name = name ?? ''
        this.department = department ?? 'No department'
    }
}
let employee_A = new Employee()
console.log(employee_A)

let employee_B = new Employee()
console.log(`employee c: ${JSON.stringify(employee_B)}`)

let employee_C = new Employee()
console.log(employee_C)

let employee_D = new Employee('Từ Nguyễn Duy Long', 'tndragon01@gmail.com', 21, 'Web developer')
console.log(employee_D)
// Hiển thị hộp thoại cảnh báo theo dạng pop-up
//1: Theo dạng "alert"
// let fullName = 'Xin chào, đây là một thông báo cảnh báo đơn giản !!!'
// alert(fullName)
//2: Theo dạng confirm:
confirm('Xác nhận rằng bạn đã đủ tuổi')
//3: Theo dạng prompt:
prompt('Thêm bình luận của bạn tại đây !!!')
// Tìm hiểu thêm về Object - array - DOM:
//1: OBJECT trong JS:
let emailKey = 'email' // Biến emailKey dùng để gán cho tên "email"
let = myInfo = {
    name: 'Long',
    age: 21,
    address: 'Đà Nẵng',
    [emailKey]: 'tndragon01@mail.com'
}
console.log(myInfo.email)
///////// Object contructor:
console.log("Object contructor !!!")
function User(firstname, lastname, age, address, email) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
    this.address = address
    this.email = email

    this.HoTenDayDu = function () {

        // Nếu retrun HoTenDayDu(`${this.firstname} ${this.lastname}`) là sai !!!
        return (`${this.firstname} ${this.lastname}`)
        // Từ khóa this. trong hàm return được gọi cho phương thức (function) HoTenDayDu
        // khác với this. trong phương thức(function) User 
    }
}
// Thêm thuộc tính "occupation'cho phương thức User
//User.prototype.occupation = 'Sinh viên' // Nếu thêm trực tiếp như thế này các thuộc tính không nằm trong phương thức
// Dùng Function 
User.prototype.get_occupation = function () {
    return this.get_occupation = 'Sinh viên'
}
let sever = new User('Từ Nguyễn Duy', 'Long', 21, 'Đà Nẵng', 'tndragon01@gmail.com')
let client = new User('Nguyễn Anh', 'Quân', 22, 'Quảng Nam', 'quan051@gmail.com')
///////
sever.title = 'Chào mừng bạn đã đến với trang web !!!'
client.comment = 'Đánh giá để được nhận các phần quà hấp dẫn từ nhà tài trợ !!!'
console.log(sever.HoTenDayDu()) // Lưu ý phần phương thức cần có đủ cặp ngoặc tròn //
console.log(client.HoTenDayDu()) // Lưu ý phần phương thức cần có đủ cặp ngoặc tròn //
//////////
console.log(sever)
console.log(client)
//////////
console.log(sever.get_occupation())
console.log(client.get_occupation())
//////////////////
var LyLich = [
    {
        HoVaTen: 'Trương Công Hoàng',
        Diachi: 'Hà Nội',
        NgheNghiep: 'Quản lý'
    },
    {
        HoVaTen: 'Nguyễn Thị Hồng Anh',
        Diachi: 'Đà Nẵng',
        NgheNghiep: 'Nhân viên'
    },
    {
        HoVaTen: 'Phan Trung Kiên',
        Diachi: 'Bình Dương',
        NgheNghiep: 'Nhân viên '
    },
    {
        HoVaTen: 'Huỳnh Công Lý',
        Diachi: 'Huế',
        NgheNghiep: 'Nhân viên'
    },
    {
        HoVaTen: 'Lê Thị Thanh Mai',
        Diachi: 'Quảng Nam',
        NgheNghiep: 'Nhân viên'
    }
]
// Tạo function
function TongHop(DS) {
    return {
        TenPhong: '001',
        HoVaTen: DS.HoVaTen,
        Diachi: DS.Diachi,
        NgheNghiep: `DS.NgheNghiep`
    }
}
var LyLichMoi = LyLich.map(TongHop)
console.log(LyLichMoi)

