import React from 'react';
import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation, Link } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { FaBars } from 'react-icons/fa';
import './index.css';
import { FaGlasses } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
    const { pathname } = useLocation();
    const pathParts = pathname.split("/");
    const lastPathPart = pathParts[pathParts.length - 1] || "Home";
    const { courseId } = useParams();
    // const course = db.courses.find((course) => course._id === courseId);
    const [course, setCourse] = useState({});
    const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
    const URL = `${API_BASE}/courses`;
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);


    return (
        <div className="row align-items-center">
            <div className="w-100 ">
                <div style={{ display: "flex", flexDirection: "col" }}>
                    <div class="col-auto courses-nav-icon-bar">
                        <FaBars className="m-lg-3 mt-3 text-danger" style={{ fontSize: "large" }} />
                    </div>
                    <div className="col ps-0 pt-1">
                        <nav style={{ "--bs-breadcrumb-divider": "'>'" }} className="mt-3" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#" className="text-danger text-decoration-none">{course.name}_{courseId}</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">{lastPathPart}</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="mt-2">
                        <button type="button"
                            className="btn btn-light border border-secondary-subtle float-end">
                            <FaGlasses className="me-2" />Student View
                        </button>
                    </div>
                </div>
                <hr />
            </div>
            <div className="d-flex flex-row ">
                <div style={{ flex: 0.5 }}>
                    <CourseNavigation />
                </div>
                <div style={{ flex: 4 }}>
                    <div>
                        <br />
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                            <Route path="Grades" element={<Grades />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;