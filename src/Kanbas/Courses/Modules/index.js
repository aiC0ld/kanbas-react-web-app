import React from "react";
import ModuleList from "./ModuleList";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";

function Modules() {
    return (
        <div className="row">
            <div className="co1-lg-6 col-md col-sm-10">
                <div className="row justify-content-end">
                    <div className="col-auto ms-5">
                        <button type="button"
                            className="btn btn-light border-secondary-subtle">Collapse All
                        </button>
                    </div>

                    <div className="col-auto">
                        <button
                            type="button"
                            className="btn btn-light border-secondary-subtle">View progress
                        </button>
                    </div>

                    <div className="col-auto">
                        <button class="btn btn-light dropdown-toggle border-secondary-subtle" type="button" data-bs-toggle="dropdown"
                            id="publish"> <FaCheckCircle className="text-success mb-1" /> Publish All
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="publish">
                            <li><a class="dropdown-item" href="#">Publish All modules and items</a></li>
                            <li><a class="dropdown-item" href="#">Publish modules only</a></li>
                            <li><a class="dropdown-item" href="#">Unpublish All</a></li>
                        </ul></div>

                    <div className="col-auto">
                        <button type="button" className="btn btn-danger">+ Module
                        </button>
                    </div>

                    <div className="col-auto">
                        <button className="btn btn-light border-secondary-subtle">
                            <FaEllipsisV />
                        </button>
                    </div>
                    <br />
                    <hr />
                </div>

                <div className="row padding-top-20">
                    <ModuleList />
                </div>
            </div>
        </div>
    );
}

export default Modules;