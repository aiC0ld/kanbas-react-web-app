import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const signin = async () => {
        try {
            await client.signin(credentials);
            navigate("/project/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <div className="row w-25">
            <h1>Signin</h1>
            <input className="form-control mt-3" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />

            <input className="form-control mt-3" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />

            <button className="btn btn-primary mt-3" onClick={signin}> Signin </button>
        </div>
    );
}
export default Signin;