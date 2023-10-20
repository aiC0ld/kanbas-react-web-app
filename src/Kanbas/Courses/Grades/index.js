import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaCog, FaFilter, FaFileImport, FaFileExport } from 'react-icons/fa';
import React, { useState } from "react";

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <div className="d-flex justify-content-end">
                <button type="button"
                    className="btn btn-light border border-secondary-subtle me-2">
                    <FaFileImport className="me-2" /> Import
                </button>
                <button type="button"
                    className="btn btn-light border border-secondary-subtle me-2">
                    <FaFileExport className="me-1" />Export
                </button>
                <button className="btn btn-light border border-secondary-subtle ms-1">
                    <FaCog />
                </button>
            </div>
            <br />

            <div className="row">
                <div className="col-md-5">
                    <label htmlFor="studentName"><h5>Student Names</h5></label>
                    <input
                        type="text" id="studentName" className="form-control" placeholder="Search Students" />
                </div>
                <div className="col-md-5">
                    <label htmlFor="assignmentsName"><h5>Assignment Names</h5></label>
                    <input type="text" id="assignmentsName" className="form-control" placeholder="Search Assignments" />
                </div>
            </div>
            <br />

            <div className="row mt-1 padding-bottom-10">
                <div className="col-12">
                    <button className="btn btn-secondary-subtle border">
                        <FaFilter /> Apply Filters
                    </button>
                </div>
            </div>
            <br />

            <div className="table-responsive padding-top-20">
                <table className="table table-striped table-bordered">
                    <thead className="text-center">
                        <th>Student Name</th>
                        {assignments.map((assignment) => (
                            <th>{assignment.title}</th>
                        ))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find(
                                (user) => user._id === enrollment.user
                            );
                            return (
                                <tr>
                                    <td className="text-center text-danger">
                                        {user.firstName} {user.lastName}
                                    </td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) =>
                                                grade.student === enrollment.user &&
                                                grade.assignment === assignment._id
                                        );
                                        return (
                                            <td className="text-center">{grade?.grade || ""}</td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Grades;


