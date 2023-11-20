import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId
    );

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };



    return (
        <div>
            <div className="d-flex justify-content-end align-items-center">
                <div className="me-2 text-success d-flex align-items-center">
                    <FaCheckCircle className="me-1" />
                    Published
                </div>
                <div className="me-0 d-flex align-items-center">
                    <FaEllipsisV />
                </div>
            </div>
            <hr />

            <div>
                <h5>Assignment Name</h5>
                <input value={assignment.title} className="form-control mb-2" />

                <div class="mb-3">
                    <label for="textarea1" class="col col-form-label">Assignment Description:</label>
                    <div class="col">
                        <textarea class="form-control" id="textarea1"
                            rows="3">This assignment describes...</textarea>
                    </div>
                </div>

                <div class="col-10 container-fluid">
                    <div class="mb-3 row">

                        <label for="point" class="col-4 text-end col-form-label">Points</label>
                        <div class="col">
                            <input type="text" class="form-control" id="point" value="100" />
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="group" class="col-4 text-end col-form-label">Assignments Group</label>
                        <div class="col">
                            <select class="form-select ">
                                <option selected>ASSIGNMENTS</option>
                            </select>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="grade" class="col-4 text-end col-form-label">Display Grade as</label>
                        <div class="col">
                            <select class="form-select">
                                <option selected>Percentage</option>
                            </select>
                            <br />
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="r6" />
                                <label class="form-check-label" for="r6">
                                    Do not count the assignment towards the final grade</label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="group" class="col-4 text-end col-form-label">Submission Type</label>
                        <div class="col border border-dark-subtle p-2 mb-2 ms-2">
                            <div class="mx-2 my-2">
                                <select class="form-select">
                                    <option selected>Online</option>
                                </select>
                                <div class="ms-2 pt-2">Online Entry Options</div>
                                <div class="ms-2 pt-1">
                                    <input class="form-check-input " type="checkbox" id="checkbox"
                                        checked />
                                    <label class="form-check-label" for="checkbox">Text Entry</label>
                                </div>
                                <div class="ms-2 pt-1">
                                    <input class="form-check-input" type="checkbox" id="checkbox" checked />
                                    <label class="form-check-label" for="checkbox"> Website URL</label>
                                </div>
                                <div class="ms-2 pt-1">
                                    <input class="form-check-input" type="checkbox" id="checkbox" checked />
                                    <label class="form-check-label" for="checkbox">
                                        Media Recordings</label>
                                </div>
                                <div class="ms-2 pt-1">
                                    <input class="form-check-input" type="checkbox" id="checkbox" />
                                    <label class="form-check-label" for="checkbox">
                                        Student Annotation</label>
                                </div>
                                <div class="ms-2 pt-1">
                                    <input class="form-check-input" type="checkbox" id="checkbox" />
                                    <label class="form-check-label" for="checkbox">
                                        File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="attends" class="col-4 text-end col-form-label">Submission
                            Attempts</label>
                        <div class="col">
                            <select class="form-select">
                                <option selected>Unlimited</option>
                            </select>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="review" class="col-4 text-end col-form-label">Plagiarism Review</label>
                        <div class="col">
                            <select class="form-select">
                                <option selected>None</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="group" class="col-4 text-end col-form-label">Group Assignment</label>
                        <div class="col">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="group-assignment" />
                                <label class="form-check-label" for="group-assignment">
                                    This is a group assignment</label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="review" class="col-4 text-end col-form-label">Peer Reviews</label>
                        <div class="col">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="peer-reviews" />
                                <label class="form-check-label" for="peer-reviews">
                                    Require Peer Reviews</label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="mb-3 row">
                            <label for="assign" class="col-4 text-end col-form-label">Assign</label>
                            <div class="col border border-dark-subtle p-2 mb-2 ms-2">
                                <div class="ms-3">
                                    <label class="form-label">
                                        Assign to
                                        <input type="text" class="form-control" id="name"
                                            value="Everyone" />
                                    </label>
                                </div>

                                <div class="row ms-1">
                                    <div class="col">
                                        <label class="form-label">
                                            Due<input type="date" class="form-control" id="name"
                                                value="MM/DD/YYYY" />
                                        </label>
                                    </div>
                                </div>
                                <div class="row ms-1">
                                    <div class="col">
                                        <label class="form-label">
                                            Available from<input type="date" class="form-control" id="name"
                                                value="MM/DD/YYYY" />
                                        </label>
                                    </div>
                                    <div class="col">
                                        <label class="form-label">
                                            Until<input type="date" class="form-control" id="name"
                                                value="MM/DD/YYYY" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger mt-2">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-success ms-2 mt-2">
                    Save
                </button>
            </div>
        </div>
    );
}

export default AssignmentEditor;
