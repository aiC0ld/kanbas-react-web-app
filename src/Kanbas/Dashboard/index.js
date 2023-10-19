import db from "../Database";
import { Link } from "react-router-dom";
import { RiBook2Line } from 'react-icons/ri';
import "./index.css";

function Dashboard() {
    const courses = db.courses;
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
                <div class="ms-5">
                    <h4 class="published-courses-title">Published Courses ({courses.length})</h4>
                    <hr />
                </div>
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
                                        <RiBook2Line className="card-icon" /></p>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >

    );
}
export default Dashboard;

