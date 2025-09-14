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
      const fullname = document.getElementById("fullname").value;
      const phone = document.getElementById("phone").value;
      const gender = document.getElementById("gender").value;
      const date = document.getElementById("date").value;
      const email = document.getElementById("email").value;
      const Address = document.getElementById("Address").value;
      const Qualicition = document.getElementById("Qualicition").value;
      const Subject = document.getElementById("Subject").value;
      const Hire = document.getElementById("Hire").value;
      const Employee = document.getElementById("Employee").value;
      const Salary = document.getElementById("Salary").value;

      if (!fullname || !phone) {
        alert("Please enter fullname and phone");
        return;
      }

      const teacher = { fullname, phone, gender, date, email, Address, Qualicition, Subject, Hire, Employee, Salary };

      if (editIndex !== null) {
        xogtaLocal[editIndex] = teacher; // update
        editIndex = null;
      } else {
        xogtaLocal.push(teacher); // add new
      }

      localStorage.setItem("teacher", JSON.stringify(xogtaLocal));
      renderTable();

      // clear form
      document.querySelectorAll("input, select").forEach(el => el.value = "");
    };

   // delete parents
function deleteTeacher(index) {
  if (confirm("Ma hubtaa inaad tirtirayso xogtan?")) {
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
    }

    // load table at start
    renderTable();