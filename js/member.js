// 初始化数组
var member = [
  { "phone": "No.0001", "name": "No.0001" },
  { "phone": "No.0002", "name": "No.0002" },
  { "phone": "No.0003", "name": "No.0003" },
  { "phone": "No.0800", "name": "No.0800" }
];

// 修改数组
member = Array.from({ length: 800 }, (_, i) => ({
  phone: (i + 1).toString(), // phone 为阿拉伯数字 1-800
  name: "奖券"              // name 统一为 "奖券"
}));

// 输出结果
console.log(member);
