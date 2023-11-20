import React from "react";

const DeleteDialog = ({ assignment, handleConfirmDelete, handleCancelDelete }) => {
    return (
        <div className="modal" tabIndex="-1" style={{ display: "block", backgroundColor: "rgba(37, 35, 35, 0.2)" }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm Deletion</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleCancelDelete}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to remove {assignment.title}?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary"
                            onClick={handleCancelDelete}>No
                        </button>
                        <button type="button" className="btn btn-danger"
                            onClick={handleConfirmDelete}>Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteDialog;