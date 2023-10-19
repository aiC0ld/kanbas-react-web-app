import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaBook, FaCheckCircle, FaPlus, FaEllipsisV, FaSortDown } from "react-icons/fa";
import "./index.css";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );

    return (
        <div>
            <div className="d-flex col assignment-top">
                <div className="col-4 w-25">
                    <input id="text-fields-search-Assignment"
                        className="form-control" placeholder="Search to Assignments" />
                </div>
                <div className="col">
                    <button type="button"
                        className="btn btn-light float-end border border-secondary-subtle">
                        <FaEllipsisV />
                    </button>
                    <button type="button" className="btn btn-danger me-1 float-end">
                        <FaPlus className="me-1 mb-1" />Assignment
                    </button>
                    <button type="button"
                        className="btn btn-light me-1 float-end border border-secondary-subtle">
                        <FaPlus className="me-1 mb-1" />Group
                    </button>
                </div>
            </div>

            <div className="list-group">
                <div className="list-group-item list-group-item-secondary">
                    <div className="row align-items-center">
                        <div className="d-flex col-md-8 align-items-center">
                            <FaGripVertical className="me-2" />
                            <FaSortDown className="mb-2 me-2" />
                            <h5 >Assignments</h5>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-end">
                            <p class="float-end me-2 mt-3 rounded-pill assignment-border">
                                40% of Total
                            </p>
                            <FaPlus className="me-3" />
                            <FaEllipsisV className="me-3" />
                        </div>
                    </div>
                </div>

                {courseAssignments.map((assignment) => (
                    <div key={assignment._id} className="list-group-item pl-4">
                        <div className="row align-items-center">
                            <div className="col col-1">
                                <FaGripVertical className="me-1" size="1em" />
                                <FaBook style={{ color: 'green' }} size="1em" />
                            </div>

                            <div className="col col-md-10 assignment-content ">
                                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    className="text-decoration-none">
                                    <h5 >{assignment.title}</h5>
                                </Link>
                                <div className="d-flex align-items-center">
                                    <p className="text-secondary">Multiple Modules</p>
                                    <p className="text-secondary mx-2">|</p>
                                    <p className="text-secondary me-2">Due {assignment.dueDate}</p>
                                    <p className="text-secondary mx-2">|</p>
                                    <p className="text-secondary mx-2">{assignment.points} pts</p>
                                </div>
                            </div>

                            <div className="col col-md-1 text-end">
                                <div className="assignment-icon-group">
                                    <FaCheckCircle className="text-success" size="1em" style={{ marginRight: "5px" }} />
                                    <FaEllipsisV size="1em" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Assignments;