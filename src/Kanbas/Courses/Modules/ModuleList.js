import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaCheckCircle, FaEllipsisV, FaAngleRight, FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    // const modules = db.modules.filter((module) => module.course === courseId);
    // const [toggle, setToggle] = useState(true);
    // const handleClick = () => { setToggle(!toggle); };
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();


    return (
        <div className="list-group">
            <div className="list-group-item d-flex align-items-start">
                <div className="flex-grow-1">
                    <input className="form-control mb-3 w-75" value={module.name}
                        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
                    <textarea className="form-control w-75 mb-2" value={module.description}
                        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} />
                </div>
                <div>
                    <button className="btn btn-primary me-2"
                        onClick={() => dispatch(updateModule(module))}>Update
                    </button>
                    <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                    >Add
                    </button>
                </div>
            </div>
            <br />

            <div>
                {modules.filter((module) => module.course === courseId).map((module, index) => (
                    <div key={index} className="list-group-item list-group-item-secondary align-items-center mb-4">
                        <div>
                            <div style={{ float: "left" }} className="mb-1 mt-4">
                                <FaGripVertical className="me-1" size="1em" />
                                <FaAngleRight size="1em" />
                            </div>
                            <div style={{ display: "inline-block" }} className="col-md-8 mt-4">
                                <h4>{module.name}</h4>
                                <p>{module.description}</p>
                                <p>{module._id}</p>
                            </div>
                            <div style={{ float: "right" }} className="mt-4">
                                <div className="d-flex align-items-center gap-2">
                                    <FaCheckCircle className="text-success" size="1em" />
                                    <FaPlus size="1em" />
                                    <FaEllipsisV size="1em" />
                                </div>
                                <div style={{ marginTop: "45px" }}>
                                    <button className="btn btn-danger"
                                        onClick={() => dispatch(deleteModule(module._id))}>Delete
                                    </button>
                                    <button className="btn btn-success"
                                        onClick={() => dispatch(setModule(module))}>Edit
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                ))}
            </div>

            {/* // <ul className="list-group">
            //     {modules.map((module, index) => (
            //         <li key={index} className="list-group-item list-group-item-secondary mb-3">
            //             <div
            //                 className="d-flex align-items-center justify-content-between mt-3">
            //                 <div className="list-header-content d-flex align-items-center mb-1">
            //                     <FaGripVertical className="me-1" size="1em" />
            //                     <FaAngleRight size="1em" />
            //                 </div>
            //                 <div className="col-md-8">
            //                     <h4>{module.name}</h4>
            //                     <p>{module.description}</p>
            //                 </div>
            //                 <div className="d-flex align-items-center gap-2">
            //                     <FaCheckCircle className="text-success" size="1em" />
            //                     <FaPlus size="1em" />
            //                     <FaEllipsisV size="1em" />
            //                 </div>
            //             </div>
            //         </li>
            //     ))
            //     }
            // </ul> */}
        </div >
    );
}

export default ModuleList;
