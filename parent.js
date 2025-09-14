let xogtaLocal = JSON.parse(localStorage.getItem("parents")) || [];
let editIndex = null;

// renderTable
function renderTable() {
  document.getElementById("parentsdata").innerHTML = "";

  xogtaLocal.forEach((parents, index) => {
    document.getElementById("parentsdata").innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${parents.fullname}</td>
        <td>${parents.phone}</td>
        <td>${parents.email}</td>
        <td>${parents.adders}</td>
        <td>${parents.gender}</td>
        <td>${parents.action}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editTeacher(${index})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteTeacher(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// add parents
document.getElementById("add").onclick = function () {
  const fullname = document.getElementById("fullname").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const adders = document.getElementById("adders").value;
  const gender = document.getElementById("gender").value;
  const action = document.getElementById("action").value;

  // check if not null
  if (!fullname || !phone || !email || !adders || !gender || !action) {
    alert("Please full information");
    return;
  }

  if (editIndex !== null) {
    // update xogta
    xogtaLocal[editIndex] = { fullname, phone, email, adders, gender, action };
    editIndex = null;
  } else {
    // add xog cusub
    xogtaLocal.push({ fullname, phone, email, adders, gender, action });
  }

  localStorage.setItem("parents", JSON.stringify(xogtaLocal));
  renderTable();

  // clear inputs
  document.getElementById("fullname").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("adders").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("action").value = "";
};

// delete parents
function deleteTeacher(index) {
  if (confirm("Ma hubtaa inaad tirtirayso xogtan?")) {
    xogtaLocal.splice(index, 1);
    localStorage.setItem("parents", JSON.stringify(xogtaLocal));
    renderTable();
  }
}

// edit parents
function editTeacher(index) {
  const parents = xogtaLocal[index];
  document.getElementById("fullname").value = parents.fullname;
  document.getElementById("phone").value = parents.phone;
  document.getElementById("email").value = parents.email;
  document.getElementById("adders").value = parents.adders;
  document.getElementById("gender").value = parents.gender;
  document.getElementById("action").value = parents.action;

  editIndex = index;
}

renderTable();
