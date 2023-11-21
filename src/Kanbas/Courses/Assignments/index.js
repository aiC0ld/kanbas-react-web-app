import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaEllipsisV, FaSortDown, FaPlus, FaGripVertical, FaClipboardList, FaCheckCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, setAssignment, setAssignments } from "./assignmentsReducer";
import DeleteDialog from "./DeleteDialog.js";
import "./index.css";
import { findAssignmentsForCourse } from "./client";
import * as client from "./client";

function Assignments() {
    const { courseId } = useParams();
    const assignments = useSelector(
        (state) => state.assignmentsReducer.assignments
    );
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );

    const dispatch = useDispatch();

    useEffect(() => {
        findAssignmentsForCourse(courseId)
            .then((assignments) => {
                dispatch(setAssignments(assignments));
            })
    }, [courseId]);

    const [toggle, setToggle] = useState(true);

    const handleClick = () => { setToggle(!toggle); };
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const handleDelete = (assignment) => {
        setSelectedAssignment(assignment);
        setShowDeleteDialog(true);
    };

    // const handleConfirmDelete = () => {
    //     dispatch(deleteAssignment(selectedAssignment._id));
    //     setShowDeleteDialog(false);
    // };

    const handleConfirmDelete = (assignmentId) => {
        client.deleteAssignment(assignmentId).then((status) => {
            dispatch(deleteAssignment(assignmentId));
            setShowDeleteDialog(false);
        });
    };

    const handleCancelDelete = () => {
        setShowDeleteDialog(false);
    };

    const navigate = useNavigate();

    const initialState = {
        title: "New Assignment",
        description: "New Assignment Description",
        points: 100,
        dueDate: "",
        available: "",
        until: "",
    };

    const handleAddAssignment = () => {
        client.createAssignment(courseId, initialState).then((assignment) => {
            dispatch(addAssignment(assignment));
            navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`);
        });
    };

    return (
        <div className="col-10 mx-5">
            <div>
                <div className="row">
                    <div className="col-5 w-25">
                        <input
                            id="text-fields-search-Assignment"
                            className="form-control"
                            placeholder="Search to Assignments" />
                    </div>
                    <div className="col">
                        <button type="button"
                            className="btn float-end border-secondary-subtle me-2">
                            <FaEllipsisV />
                        </button>
                        <button onClick={handleAddAssignment} type="button" className="btn btn-danger me-2 float-end">
                            <FaPlus className="me-2 mb-1" />
                            Assignment
                        </button>
                        <button type="button"
                            className="btn me-1 float-end border-secondary-subtle me-2">
                            <FaPlus className="me-2 mb-1" />Group
                        </button>
                    </div>
                </div>
            </div>

            <div className="list-group my-4">
                <div
                    className="list-group-item list-group-item-secondary d-flex align-items-center justify-content-between fw-bold"
                    onClick={handleClick}>
                    <div className="d-flex align-items-center">
                        <FaGripVertical className="me-2" />
                        <FaSortDown className="mb-2 me-2" />
                        Assignments
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                        <input
                            id="text-fields-search"
                            className="form-control form-control-sm w-50 me-2 rounded rounded-pill text-center bg-light"
                            placeholder="40% of total"
                            readOnly
                        />
                        <FaPlus className="me-2 mx-2" />
                        <FaEllipsisV />
                    </div>
                </div>
                {toggle &&
                    courseAssignments.map((assignment) => (
                        <div
                            className="list-group-item d-flex align-items-center"
                            style={{ borderLeft: "5px solid green" }}
                            key={assignment._id}>
                            <FaGripVertical className="me-2" />
                            <FaClipboardList
                                className="me-3"
                                style={{ color: "green", fontSize: "20px" }} />
                            <div style={{ flex: 1 }} className="ms-2">
                                <div className="d-flex justify-content-between align-items-center my-2 ">
                                    <Link
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                        className="text-decoration-none text-black fw-bold"
                                        onClick={() => dispatch(setAssignment(assignment))} >
                                        <h6 style={{ margin: "0" }}>{assignment.title}</h6>
                                    </Link>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        color: "grey",
                                        fontSize: "15px",
                                    }}>
                                    <p style={{ margin: "0" }}>{assignment.description}</p>
                                    {assignment.dueDate && (
                                        <p style={{ margin: "0", paddingLeft: "5px" }}>| Due {assignment.dueDate}</p>
                                    )}
                                    <p style={{ margin: "0", paddingLeft: "5px" }}>
                                        | {assignment.points} points
                                    </p>
                                </div>
                            </div>
                            <button
                                class="btn btn-danger me-3"
                                onClick={() => handleDelete(assignment)}>Delete
                            </button>
                            {showDeleteDialog && (
                                <DeleteDialog
                                    assignment={selectedAssignment}
                                    handleConfirmDelete={handleConfirmDelete}
                                    handleCancelDelete={handleCancelDelete} />
                            )}
                            <FaCheckCircle className="text-success me-2" /><FaEllipsisV />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Assignments;