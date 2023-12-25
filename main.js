const loginForm = document.querySelector(".login-form");

const validateInput = (inputObj) => {
  const { username, password } = inputObj;

  // 1. ทุก input ต้องไม่เป็นค่าว่างหรือ ใส่ space มาล้วนๆ
  const trimmedUsername = username.trim(); // ตัดช่องว่างหน้า-หลัง
  const trimmedPassword = password.trim();

  // 2. username ความยาวต้องมากกว่า 3 ตัวอักษร
  //    - ตัด space หน้า-หลังก่อน validate
  //    - ห้ามนำหน้าด้วยตัวเลข
  //    (option) - ไม่มี space อยู่ในชื่อ
  const isUsernameValid =
    trimmedUsername.length > 3 && !(/^\d/.test(trimmedUsername)) && !(/\s/.test(trimmedUsername));

  // 3. password ความยาวต้องมากกว่า 4 ตัวอักษร
  //    (option) - ต้องมีทั้งตัวเลขและตัวอักษร
  const isPasswordValid = trimmedPassword.length > 4;

  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");

  // 4. ถ้า validate ไม่ผ่านให้เปลี่ยน input เป็นสีแดง
  //    ถ้า validate ผ่านให้ไปที่ https://www.example.com
  if (!isUsernameValid) {
    usernameInput.style.borderColor = "red"; // เปลี่ยนสีกรอบ input เป็นแดง
  } else {
    usernameInput.style.borderColor = ""; // รีเซ็ตสีกรอบ input ถ้า validate ผ่าน
  }

  if (!isPasswordValid) {
    passwordInput.style.borderColor = "red"; // เปลี่ยนสีกรอบ input เป็นแดง
  } else {
    passwordInput.style.borderColor = ""; // รีเซ็ตสีกรอบ input ถ้า validate ผ่าน
  }

  if (isUsernameValid && isPasswordValid) {
    alert("Login successful!");
      window.location.href = "https://www.example.com";
    // 5. ถ้า validate ผ่านให้ไปทำการ login โดยตรวจสอบ username, password กับ array
    //    แล้วแจ้ง login successful
    const users = [
      { username: "john", password: "12345" },
      { username: "emma", password: "password123" },
      // เพิ่มข้อมูลผู้ใช้เพิ่มเติมตามต้องการ
    ];
    const loggedInUser = users.find(
      (user) => user.username === trimmedUsername && user.password === trimmedPassword
    );
    if (loggedInUser) {
      // console.log("Login successful"); // แสดงข้อความ "Login successful" ใน console
    }
  }else {
    alert("Login failed. Please check your credentials.");
  }
};

const hdlLogin = (e) => {
  e.preventDefault();
  const inputObj = {};
  for (let el of loginForm.elements) {
    inputObj[el.id] = el.value;
  }
  Object.keys(inputObj).forEach((key) => {
    inputObj[key] = inputObj[key].trim();
  });
  validateInput(inputObj);
};

loginForm.addEventListener("submit", hdlLogin);
