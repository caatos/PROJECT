let classesLocal = JSON.parse(localStorage.getItem("classes")) || [];
let editIndex = null;

// render table
function renderTable() {
  const tbody = document.getElementById("classData");
  tbody.innerHTML = "";

  classesLocal.forEach((cls, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${cls.ClassNamed}</td>
        <td>${cls.Classcode}</td>
        <td>${cls.Section}</td>
        <td>${cls.ClassTeacher}</td>
        <td>${cls.Totalstudents}</td>
        <td>${cls.SubjectAssigned}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editClass(${index})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteClass(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// add or update class
document.getElementById("add").onclick = function () {
  const ClassNamed = document.getElementById("ClassNamed").value;
  const Classcode = document.getElementById("Classcode").value;
  const Section = document.getElementById("Section").value;
  const ClassTeacher = document.getElementById("ClassTeacher").value;
  const Totalstudents = document.getElementById("Totalstudents").value;
  const SubjectAssigned = document.getElementById("SubjectAssigned").value;

  if (!ClassNamed || !Classcode) {
    alert("Please enter Class Name and Class Code");
    return;
  }

  const newClass = { ClassNamed, Classcode, Section, ClassTeacher, Totalstudents, SubjectAssigned };

  if (editIndex !== null) {
    classesLocal[editIndex] = newClass; // update
    editIndex = null;
  } else {
    classesLocal.push(newClass); // add new
  }

  localStorage.setItem("classes", JSON.stringify(classesLocal));
  renderTable();

  // clear form
  document.querySelectorAll("input, select").forEach(el => el.value = "");
};

// delete class
function deleteClass(index) {
  classesLocal.splice(index, 1);
  localStorage.setItem("classes", JSON.stringify(classesLocal));
  renderTable();
}

// edit class
function editClass(index) {
  const cls = classesLocal[index];
  document.getElementById("ClassNamed").value = cls.ClassNamed;
  document.getElementById("Classcode").value = cls.Classcode;
  document.getElementById("Section").value = cls.Section;
  document.getElementById("ClassTeacher").value = cls.ClassTeacher;
  document.getElementById("Totalstudents").value = cls.Totalstudents;
  document.getElementById("SubjectAssigned").value = cls.SubjectAssigned;

  editIndex = index;
}

// load at start
renderTable();