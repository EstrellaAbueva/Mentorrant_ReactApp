import React from 'react';
import axios from "axios";

const EBOOKS_BASE_URL = "http://localhost:8080/Ebooks/get";

export default class GetMentees extends React.Component {
    state = {
      mentees: []
    }

    componentDidMount(){
        axios.get(EBOOKS_BASE_URL).then(res =>{
            const mentees = res.data;
            this.setState({mentees});
        })
    }

    render(){
        return(
            <div className='container-fluid'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Student ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Course ID</th>
                            <th scope="col">Mentee ID</th>
                        </tr>
                    </thead>
                {
                    this.state.mentees
                    .map(mentees=>  
                        <tbody>
                        <tr>
                            <td key={mentees.studentId}>{mentees.studentId}</td>
                            <td key={mentees.name}>{mentees.name}</td>
                            <td key={mentees.courseId}>{mentees.courseId}</td>
                            <td key={mentees.menteeId}>{mentees.menteeId}</td>
                        </tr>
                        </tbody>        
                    )
                }
                </table>
            </div>
        )
    }


}