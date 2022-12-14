import React from 'react';
import axios from "axios";

const MENTOR_BASE_URL = "http://localhost:8080/mentors/getAllMentors";

export default class GetMentors extends React.Component {
    state = {
      mentors: []
    }

    componentDidMount(){
        axios.get(MENTOR_BASE_URL).then(res =>{
            const mentors = res.data;
            this.setState({mentors});
        })
    }

    render(){
        return(
            <div className='container-fluid'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Student ID</th>
                            <th scope="col">Mentor ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Course ID</th>
                            <th scope="col">Rating</th>
                        </tr>
                    </thead>
                {
                    this.state.mentors
                    .map(mentors=>  
                        <tbody>
                        <tr>
                            <td key={mentors.studentId}>{mentors.studentId}</td>
                            <td key={mentors.mentorId}>{mentors.mentorId}</td>
                            <td key={mentors.name}>{mentors.name}</td>
                            <td key={mentors.courseId}>{mentors.courseId}</td>
                            <td key={mentors.rating}>{mentors.rating}</td>
                        </tr>
                        </tbody>        
                    )
                }
                </table>
            </div>
        )
    }


}