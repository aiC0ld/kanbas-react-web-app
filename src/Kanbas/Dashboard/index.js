import db from "../Database";
import { Link } from "react-router-dom";
import { RiBook2Line } from 'react-icons/ri';
import "./index.css";
import { React, useState } from "react";

function Dashboard() {
    // const courses = db.courses;
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });

    const addNewCourse = () => {
        setCourses([...courses,
        {
            ...course,
            _id: new Date().getTime()
        }]);
    };

    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };



    return (
        <div class="ms-3">
            {/* <h1> Dashboard</h1>
            <hr />
            <h2 className="ms-3">Published Courses ({courses.length})</h2>
            <hr /> */}
            <div class="ms-3">
                <h1 class=" dashboard-title pt-2">Dashboard</h1>
                <hr />
            </div>
            <div class="ms-1">
                <div class="ms-4">
                    <h4 class="published-courses-title">Published Courses ({courses.length})</h4>
                    <hr />
                </div>
            </div>

            <div class="ms-5">
                <h5>Course</h5>
                <input value={course.name} className="form-control me-1"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <input value={course.startDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                <input value={course.endDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                <button className="btn btn-success me-2 mt-2" onClick={addNewCourse} >Add</button>
                <button className="btn btn-primary mt-2" onClick={updateCourse}>Update</button>
            </div>

            <div className="d-flex flex-row flex-wrap wd-dashboard-container">
                {courses.map((course) => (
                    <div key={course._id} className="col ms-4 mt-4 mb-4" class="wd-dashboard">
                        <div className="card h-100">
                            <img src="/images/dashboard.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to={`/Kanbas/Courses/${course._id}`} className="card-title">
                                    <div><h5 className="card-title-h5">{course.name}</h5></div>
                                </Link>
                                <p className="card-text">
                                    <p>{course.number}.{course._id}</p>
                                    <p> Start Date: {course.startDate}<br />
                                        End Dtae: {course.endDate}<br /><br />
                                    </p>
                                </p>
                                <RiBook2Line className="card-icon" />
                                <button className="btn btn-danger float-end"
                                    onClick={(event) => {
                                        event.preventDefault(); deleteCourse(course._id);
                                    }}>Delete
                                </button>

                                <button className="btn btn-warning float-end mb-1 me-2"
                                    onClick={(event) => { event.preventDefault(); setCourse(course); }}>Edit
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >

    );
}
export default Dashboard;