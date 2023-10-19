import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaCheckCircle, FaEllipsisV, FaAngleRight, FaPlus } from "react-icons/fa";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules.filter((module) => module.course === courseId);
    const [toggle, setToggle] = useState(true);
    const handleClick = () => { setToggle(!toggle); };

    return (
        <ul className="list-group">
            {modules.map((module, index) => (
                <li key={index} className="list-group-item list-group-item-secondary mb-3">
                    <div
                        className="d-flex align-items-center justify-content-between mt-3">
                        <div className="list-header-content d-flex align-items-center mb-1">
                            <FaGripVertical className="me-1" size="1em" />
                            <FaAngleRight size="1em" />
                        </div>
                        <div className="col-md-8">
                            <h4>{module.name}</h4>
                            <p>{module.description}</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <FaCheckCircle className="text-success" size="1em" />
                            <FaPlus size="1em" />
                            <FaEllipsisV size="1em" />
                        </div>
                    </div>
                </li>
            ))
            }
        </ul>
    );
}

export default ModuleList;
