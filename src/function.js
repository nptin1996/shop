// hàm format Price
export function formatPrice(price) {
  // Chuyển đổi giá trị số thành chuỗi
  let priceString = String(price);
  // Tạo mảng để lưu các ký tự
  let formattedPrice = [];
  // Đếm biến đếm số ký tự đã được thêm vào mảng
  let count = 0;
  // Duyệt qua từng ký tự của chuỗi giá
  for (let i = priceString.length - 1; i >= 0; i--) {
    // Thêm ký tự vào mảng
    formattedPrice.unshift(priceString[i]);
    // Tăng biến đếm
    count++;
    // Nếu biến đếm đạt 3 và vị trí ký tự hiện tại không phải là ký tự đầu tiên của chuỗi
    if (count % 3 === 0 && i !== 0) {
      // Thêm dấu chấm vào mảng
      formattedPrice.unshift(".");
    }
  }
  // Kết hợp các phần tử của mảng thành một chuỗi
  return formattedPrice.join("") + " VND";
}

// Hàm format string
export function splitString(str) {
  // Sử dụng hàm split() để tách chuỗi thành mảng các phần tử
  const result = str.split(/[\r\n]+/);
  return result;
}

export function getUrl(pathUrl) {
  return new URL(`${process.env.REACT_APP_API_URL}/${pathUrl}`);
}

export async function fetchData(pathUrl, method, body) {
  return await fetch(getUrl(pathUrl), {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
    credentials: "include",
  });
}

export function getLocalStorageUser() {
  const data = JSON.parse(localStorage.getItem("currentUserAsm3"));
  if (!data || !data.name || !data.phone || !data.email || !data.expires) {
    return null;
  }
  const date = new Date();
  if (new Date(data.expires).getTime() - date.getTime() <= 0) {
    return null;
  }
  return data;
}
