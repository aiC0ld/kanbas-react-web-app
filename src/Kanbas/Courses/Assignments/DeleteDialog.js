import React from "react";

const DeleteDialog = ({ assignment, handleConfirmDelete, handleCancelDelete }) => {
    return (
        <div className="modal" tabIndex="-1" style={{ display: "block" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm Deletion</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleCancelDelete}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to remove {assignment.title}?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger"
                            onClick={() => handleConfirmDelete(assignment._id)}>Yes
                        </button>
                        <button type="button" className="btn btn-secondary"
                            onClick={handleCancelDelete}>No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteDialog;