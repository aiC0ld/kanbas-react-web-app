import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaEllipsisVertical, FaRegCalendarDays } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, setAssignment } from "./assignmentsReducer";

function AssignmentEditor() {
    const { assignmentId, courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSave = () => {
        const existingAssignment = assignments.find((assignment) => assignment._id === assignmentId);
        if (existingAssignment) {
            dispatch(updateAssignment(assignment));
        } else {
            dispatch(addAssignment({
                ...assignment, course: courseId
            }));
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div>
            <div className="col-8 mx-5 mt-2">
                <div className="d-flex justify-content-end">
                    <div className="me-2 text-success d-flex align-items-center">
                        <FaCheckCircle className="me-1" />Published
                    </div>
                    <div className="me-0 d-flex align-items-center">
                        <FaEllipsisVertical />
                    </div>
                </div>
                <hr />
                <form>
                    <div className="mb-2">
                        <label for="name" class="col col-form-label">
                            Assignments Name:
                        </label>
                        <div className="col">
                            <input
                                class="form-control w-100"
                                value={assignment.title}
                                id="name"
                                onChange={(e) =>
                                    dispatch(setAssignment({ ...assignment, title: e.target.value }))
                                } />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="textarea1" class="col col-form-label">
                            Assignment Description:
                        </label>
                        <div className="col">
                            <textarea
                                class="form-control"
                                id="textarea1"
                                rows="3"
                                value={assignment.description}
                                onChange={(e) =>
                                    dispatch(
                                        setAssignment({ ...assignment, description: e.target.value, })
                                    )
                                }
                            ></textarea>
                        </div>
                    </div>

                    <div className="col-10 container-fluid">
                        <div className="mb-3 row">
                            <label for="points" class="col-4 text-end col-form-label">
                                Points
                            </label>
                            <div className="col">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="points"
                                    value={assignment.points}
                                    onChange={(e) =>
                                        dispatch(
                                            setAssignment({ ...assignment, points: e.target.value })
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mb-3 row">
                                <label for="assign" class="col-4 text-end col-form-label">
                                    Assign
                                </label>
                                <div className="col border border-light-subtle p-2 mb-3 ms-2 mt-2">
                                    <div className="row ms-0">
                                        <label for="due" class="form-label mt-2">Due
                                        </label>
                                    </div>
                                    <div className="row ms-0">
                                        <div className="input-group mb-3">
                                            <input type="text"
                                                className="form-control" id="due" value={assignment.dueDate}
                                                onChange={(e) =>
                                                    dispatch(
                                                        setAssignment({
                                                            ...assignment,
                                                            dueDate: e.target.value,
                                                        })
                                                    )
                                                }
                                            />
                                            <span class="input-group-text" id="due">
                                                <FaRegCalendarDays />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row ms-0">
                                        <div className="col">
                                            <label for="ava" class="form-label">
                                                Available from
                                            </label>
                                            <div className="row">
                                                <div className="input-group mb-3">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        aria-label="ava"
                                                        aria-describedby="basic-addon2"
                                                        value={assignment.available}
                                                        onChange={(e) =>
                                                            dispatch(
                                                                setAssignment({
                                                                    ...assignment,
                                                                    available: e.target.value,
                                                                })
                                                            )
                                                        }
                                                    />
                                                    <span class="input-group-text" id="basic-addon2">
                                                        <FaRegCalendarDays />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <label for="until" class="form-label">
                                                Until
                                            </label>
                                            <div className="row">
                                                <div className="input-group mb-3">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        aria-label="until"
                                                        aria-describedby="basic-addon1"
                                                        value={assignment.until}
                                                        onChange={(e) =>
                                                            dispatch(
                                                                setAssignment({
                                                                    ...assignment,
                                                                    until: e.target.value,
                                                                })
                                                            )
                                                        }
                                                    />
                                                    <span class="input-group-text" id="basic-addon1">
                                                        <FaRegCalendarDays />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="mb-3 row ms-1">
                        <div className="col d-flex justify-content-end mb-3">
                            <Link
                                to={`/Kanbas/Courses/${courseId}/Assignments`}
                                className="btn btn-light me-2"
                            >
                                Cancel
                            </Link>
                            <button onClick={handleSave} className="btn btn-danger me-2">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AssignmentEditor;