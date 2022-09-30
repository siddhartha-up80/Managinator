import React, { useState } from "react";
import Swal from "sweetalert2";
import "../App.css";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import Add from "../components/Add";
import Edit from "../components/Edit";

import studentData from "./data";

const Main = () => {
  const [students, setStudents] = useState(studentData);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const [student] = students.filter((student) => student.id === id);

    setSelectedStudent(student);
    setIsEditing(true);
  };
  const handleDelete = (id) => {Swal.fire({
    icon: 'warning',
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
}).then(result => {
    if (result.value) {
        const [student] = students.filter(student => student.id === id);

        Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: `${student.firstName} ${student.lastName}'s data has been deleted.`,
            showConfirmButton: false,
            timer: 1500,
        });

        setStudents(students.filter(student => student.id !== id));
    }
});};

  return (
    <div className="App">
      <Navbar />

      {/* for table */}
      {!isAdding && !isEditing && (
        <div className="mt-10">
          <Table
            students={students}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            setIsAdding={setIsAdding}
          />
        </div>
      )}
      {/* for Adding Students */}
      {isAdding && (
        <Add
          students={students}
          setStudents={setStudents}
          setIsAdding={setIsAdding}
        />
      )}

      {/* for Editing Students */}
      {isEditing && (
        <Edit
          students={students}
          selectedStudent={selectedStudent}
          setStudents={setStudents}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Main;
