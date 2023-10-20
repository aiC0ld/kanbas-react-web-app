import React from 'react';
import { FaBan, FaCheckCircle, FaBullhorn, FaFileImport, FaBullseye, FaChartLine, FaBell } from 'react-icons/fa';
import { FaCalendarDays } from "react-icons/fa6";
import Modules from "../Modules";

function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 col-sm-12 col-md-8">
                    <Modules />
                </div>

                <div className="col-4">
                    <h4>Course Status</h4>

                    <div className="d-flex mb-2 gap-2">
                        <button className="btn btn-secondary text-black" >
                            <FaBan /> Unpublish
                        </button>
                        <button className="btn btn-success text-white">
                            <FaCheckCircle /> Published
                        </button>
                    </div>
                    <br />

                    <div class="col">
                        <div class="d-flex justify-content-between list-group flex-column w-60">
                            <div>
                                <a href="#" class="list-group-item list-group-item-action btn bg-light ">
                                    <FaFileImport /> Import Existing Content
                                </a>
                            </div>
                            <div>
                                <a href="#" class="list-group-item list-group-item-action btn bg-light">
                                    <FaFileImport /> Import From Commons</a>
                            </div>
                            <div>
                                <a href="#" class="list-group-item list-group-item-action btn bg-light">
                                    <FaBullseye /> Choose Home Page
                                </a>
                            </div>
                            <div>
                                <a href="#" class="list-group-item list-group-item-action btn bg-light">
                                    <FaChartLine /> View Course Stream
                                </a>
                            </div>
                            <div>
                                <a href="#" class="list-group-item list-group-item-action btn bg-light">
                                    <FaBullhorn /> New Announcement
                                </a>
                            </div>
                            <div>
                                <a href="#" class="list-group-item list-group-item-action btn bg-light">
                                    <FaChartLine /> New Analytics
                                </a>
                            </div>
                            <div>
                                <a href="#" class="list-group-item list-group-item-action btn bg-light">
                                    <FaBell /> View Course Notifications
                                </a>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div>
                        <h4>To Do</h4>
                        <hr />
                        <div className="row">
                            <div className="col-1">

                            </div>
                            <div className="col-10">
                                <p>Grade A1 - ENV + HTML</p>
                                <p>100 points * Sep 18 at 11:59pm</p>
                            </div>
                            <div className="col-1">

                            </div>
                        </div>
                    </div>

                    <br />
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h5 style={{ marginRight: '1px' }}>Coming Up</h5>
                            <div className="ms-5 text-danger text-decoration-none">
                                <FaCalendarDays className="me-2" />View Calendar
                            </div>
                        </div>
                        <hr />

                        <div className="mb-2">
                            <p className="text-danger text-decoration-none"><FaCalendarDays className="text-danger" />  Lecture</p>
                            <p>CS5610 Web Development Fall 3 2023 - LECTURE</p>
                        </div>
                        <br />

                        <div className="mb-2">
                            <p className="text-danger text-decoration-none"><FaCalendarDays className="text-danger" />  Lecture</p>
                            <p>CS5610 Web Development Fall 3 2023 - LECTURE</p>
                        </div>
                        <br />

                        <div className="mb-2">
                            <p className="text-danger text-decoration-none"><FaCalendarDays className="text-danger" />  Lecture</p>
                            <p>CS5610 Web Development Fall 3 2023 - LECTURE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;