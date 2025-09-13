let xogtaLocal = JSON.parse(localStorage.getItem("teacher")) || [];
let editIndex = null;

// render table
function renderTable() {
  const tbody = document.getElementById("teacherData");
  tbody.innerHTML = "";

  xogtaLocal.forEach((teacher, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${teacher.fullname}</td>
        <td>${teacher.phone}</td>
        <td>${teacher.gender}</td>
        <td>${teacher.date}</td>
        <td>${teacher.email}</td>
        <td>${teacher.Address}</td>
        <td>${teacher.Qualicition}</td>
        <td>${teacher.Subject}</td>
        <td>${teacher.Hire}</td>
        <td>${teacher.Employee}</td>
        <td>${teacher.Salary}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editTeacher(${index})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteTeacher(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// add or update teacher
document.getElementById("add").onclick = function () {
  const teacher = {
    fullname: document.getElementById("fullname").value,
    phone: document.getElementById("phone").value,
    gender: document.getElementById("gender").value,
    date: document.getElementById("date").value,
    email: document.getElementById("email").value,
    Address: document.getElementById("Address").value,
    Qualicition: document.getElementById("Qualicition").value,
    Subject: document.getElementById("Subject").value,
    Hire: document.getElementById("Hire").value,
    Employee: document.getElementById("Employee").value,
    Salary: document.getElementById("Salary").value
  };

  if (!teacher.fullname || !teacher.phone) {
    alert("Please enter fullname and phone");
    return;
  }

  if (editIndex === null) {
    xogtaLocal.push(teacher); // add new
  } else {
    xogtaLocal[editIndex] = teacher; // update
    editIndex = null;
    document.getElementById("add").innerText = "Save";
  }

  localStorage.setItem("teacher", JSON.stringify(xogtaLocal));
  renderTable();
  clearForm();
};

// delete teacher
function deleteTeacher(index) {
  if (confirm("Are you sure you want to delete this record?")) {
    xogtaLocal.splice(index, 1);
    localStorage.setItem("teacher", JSON.stringify(xogtaLocal));
    renderTable();
  }
}

// edit teacher
function editTeacher(index) {
  const teacher = xogtaLocal[index];
  document.getElementById("fullname").value = teacher.fullname;
  document.getElementById("phone").value = teacher.phone;
  document.getElementById("gender").value = teacher.gender;
  document.getElementById("date").value = teacher.date;
  document.getElementById("email").value = teacher.email;
  document.getElementById("Address").value = teacher.Address;
  document.getElementById("Qualicition").value = teacher.Qualicition;
  document.getElementById("Subject").value = teacher.Subject;
  document.getElementById("Hire").value = teacher.Hire;
  document.getElementById("Employee").value = teacher.Employee;
  document.getElementById("Salary").value = teacher.Salary;

  editIndex = index;
  document.getElementById("add").innerText = "Update";
}

// clear form
function clearForm() {
  document.querySelectorAll("input, select").forEach(el => el.value = "");
}

// load table at start
renderTable();