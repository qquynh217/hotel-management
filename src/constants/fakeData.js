export const rooms = [
  {
    name: "101",
    type: "Phòng đơn",
    description: "Phòng có 1 giường ngủ",
    price: 100000,
    service: [
      { name: "Ăn sáng", price: 50000, quantity: 1 },
      { name: "Dọn dẹp", price: 50000, quantity: 1 },
    ],
  },
  {
    name: "102",
    type: "Phòng đôi",
    description: "Phòng có 2 giường ngủ",
    price: 120000,
    service: [
      { name: "Ăn sáng", price: 50000, quantity: 2 },
      { name: "Dọn dẹp", price: 50000, quantity: 1 },
    ],
  },
];
export const service = [
  {
    id: 1,
    name: "Ăn sáng",
    price: 50000,
    description: "Phục vụ bữa sáng tại phòng",
  },
  {
    id: 2,
    name: "Dọn dẹp",
    price: 50000,
    description: "Dọn dẹp phòng 1 lần/ngày",
  },
  {
    id: 3,
    name: "Hồ bơi",
    price: 40000,
    description: "Sử dụng hồ bơi trong phòng",
  },
];
export const customers = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    phone: "0123456789",
    note: "Ghi chú",
  },
  {
    id: 2,
    name: "Nguyễn Văn A",
    phone: "0123456789",
    note: "Ghi chú",
  },
];
export const employees = [
  {
    id: 1,
    name: "Nhân viên 1",
    salary: 8000000,
    position: "Nhân viên lễ tân",
    contact: "0123456789",
    hotelId: "KS001",
  },
  {
    id: 2,
    name: "Nhân viên 2",
    salary: 6000000,
    position: "Bảo vệ",
    contact: "0123456789",
    hotelId: "KS001",
  },
];
