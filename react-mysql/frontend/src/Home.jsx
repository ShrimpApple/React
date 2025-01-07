import "./Home.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/delete/'+id)
            .then(res => {
                location.reload();                
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div>
                <h2>Student List</h2><br/>
                <div className="d-flex justify-content-end mb-2">
                    <Link to="/create" className="btn btn-success">Create +</Link>
                </div>         
                <table className='table table-bordered table-hover text-center'>
                    <thead className='table-light'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((student, index) => (
                            <tr key={index}>
                                <td>{student.ID}</td>
                                <td>{student.Name}</td>
                                <td>{student.Email}</td>
                                <td>
                                    <div className="d-flex justify-content-evenly">
                                        <Link to={`/read/${student.ID}`} className="btn btn-sm btn-info mx-2">Read</Link>
                                        <Link to={`/edit/${student.ID}`} className="btn btn-sm btn-primary mx-2">Edit</Link>
                                        <button onClick={ () => handleDelete(student.ID)} className="btn btn-sm btn-danger mx-2">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
