let xogtaLocal = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = null;

// render table
function renderTable() {
  const tbody = document.getElementById("studentData");
  tbody.innerHTML = "";

  xogtaLocal.forEach((student, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${student.fullname}</td>
        <td>${student.phone}</td>
        <td>${student.gender}</td>
        <td>${student.date}</td>
        <td>${student.email}</td>
        <td>${student.parent}</td>
        <td>${student.ParentContact}</td>
        <td>${student.AdmisonNumber}</td>
        <td>${student.ClassAssigned}</td>
        <td>${student.Employee}</td>
        <td>${student.RollNumber}</td>
        <td>${student.perivous}</td>
        <td>${student.Photo}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editStudent(${index})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// add or update student
document.getElementById("add").onclick = function () {
  const student = {
    fullname: document.getElementById("fullname").value,
    phone: document.getElementById("phone").value,
    gender: document.getElementById("gender").value,
    date: document.getElementById("date").value,
    email: document.getElementById("email").value,
    Address: document.getElementById("Address").value,
    parent: document.getElementById("parent").value,
    ParentContact: document.getElementById("ParentContact").value,
    AdmisonNumber: document.getElementById("AdmisonNumber").value,
    ClassAssigned: document.getElementById("ClassAssigned").value,
    Employee: document.getElementById("Employee").value,
    RollNumber: document.getElementById("RollNumber").value,
    perivous: document.getElementById("perivous").value,
    Photo: document.getElementById("Photo").value
  };

  if (!student.fullname || !student.phone) {
    alert("Please enter fullname and phone");
    return;
  }

  if (editIndex === null) {
    xogtaLocal.push(student);
  } else {
    xogtaLocal[editIndex] = student;
    editIndex = null;
    document.getElementById("add").innerText = "Save";
  }

  localStorage.setItem("students", JSON.stringify(xogtaLocal));
  renderTable();
  clearForm();
};

// delete student
function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this record?")) {
    xogtaLocal.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(xogtaLocal));
    renderTable();
  }
}

// edit student
function editStudent(index) {
  const student = xogtaLocal[index];
  document.getElementById("fullname").value = student.fullname;
  document.getElementById("phone").value = student.phone;
  document.getElementById("gender").value = student.gender;
  document.getElementById("date").value = student.date;
  document.getElementById("email").value = student.email;
  document.getElementById("Address").value = student.Address;
  document.getElementById("parent").value = student.parent;
  document.getElementById("ParentContact").value = student.ParentContact;
  document.getElementById("AdmisonNumber").value = student.AdmisonNumber;
  document.getElementById("ClassAssigned").value = student.ClassAssigned;
  document.getElementById("Employee").value = student.Employee;
  document.getElementById("RollNumber").value = student.RollNumber;
  document.getElementById("perivous").value = student.perivous;
  document.getElementById("Photo").value = student.Photo;

  editIndex = index;
  document.getElementById("add").innerText = "Update";
}

// clear form
function clearForm() {
  document.querySelectorAll("input, select").forEach(el => el.value = "");
}

renderTable();