import * as React from "react";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";

const Table = ({ setIsAdding, students, handleEdit, handleDelete }) => {
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-10 text-red-800 w-100 md:w-3/4">
        <h2 className="mb-4 text-2xl font-semibold leading-tight text-center ">
          Profiles Editor
        </h2>
        <div className="flex justify-start">
          <Button
            variant="contained"
            className="mt-2 mb-4 bg-red-800"
            endIcon={<Add />}
            onClick={() => setIsAdding(true)}
          >
            Add Profile
          </Button>
        </div>

        <div className="overflow-x-auto shadow-md rounded-md ">
          <table className="min-w-full text-xs rounded-t-lg ">
            <thead className="bg-red-800 text-white ">
              <tr className="text-left">
                
                <th className="p-3">First Name</th>
                <th className="p-3">Last Name</th>
                <th className="p-3 text-center">Email</th>
                <th className="p-3 text-center">Date</th>
                <th className="p-3 text-center">Edit</th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((students) => (
                  <tr
                    className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                    key={students.id}
                  >
                    
                    <td className="p-3">
                      <p>{students.firstName}</p>
                    </td>
                    <td className="p-3">
                      <p>{students.lastName}</p>
                    </td>
                    <td className="p-3 text-center">
                      <p>{students.email}</p>
                    </td>
                    <td className="p-3 text-center">
                      <p>{students.date}</p>
                    </td>
                    <td className="text-center space-x-2 space-y-2">
                      <button className="px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50"
                      onClick={() => handleEdit(students.id)}
                      >
                        <span>Edit</span>
                      </button>
                      <button className="px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50"
                      onClick={() => handleDelete(students.id)}
                      >
                        <span>Delete</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>No Information</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
