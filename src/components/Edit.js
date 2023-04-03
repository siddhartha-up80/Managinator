import React, { useState } from "react";
import Swal from "sweetalert2";

function Edit({ students, selectedStudent, setStudents, setIsEditing }) {
  const id = selectedStudent.id;

  const [firstName, setFirstName] = useState(selectedStudent.firstName);
  const [lastName, setLastName] = useState(selectedStudent.lastName);
  const [email, setEmail] = useState(selectedStudent.email);

  const [date, setDate] = useState(selectedStudent.date);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const student = {
      id,
      firstName,
      lastName,
      email,

      date,
    };

    for (let i = 0; i < students.length; i++) {
      if (students[i].id === id) {
        students.splice(i, 1, student);
        break;
      }
    }

    setStudents(students);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${student.firstName} ${student.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <div>
        <section className="p-6 bg-gray-100 text-gray-900">
          <form
            onSubmit={handleUpdate}
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-md bg-red-50 md:p-40">
              <div className="space-y-2 col-span-full lg:col-span-1 text-xl">
                <p className="font-medium">Student Profile Information</p>
                <p className="text-base">
                  Edit student information individually to the following spaces
                </p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    First name
                  </label>
                  {/* ref={textInput} */}
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-pink-600 border-gray-300 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-pink-600 border-gray-300 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-pink-600 border-gray-300 text-gray-900"
                  />
                </div>

                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="Date" className="text-sm">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-pink-600 border-gray-300 text-gray-900"
                  />
                </div>
              </div>

              <div style={{ marginTop: "30px" }} className="flex flex-row">
                <input
                  type="submit"
                  value="Update"
                  className="px-8 py-3 font-semibold rounded bg-red-800 text-gray-100"
                />
                <input
                  style={{ marginLeft: "12px" }}
                  className="px-8 py-3 font-semibold rounded bg-red-400 text-gray-100"
                  type="button"
                  value="Cancel"
                  onClick={() => setIsEditing(false)}
                />
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Edit;
