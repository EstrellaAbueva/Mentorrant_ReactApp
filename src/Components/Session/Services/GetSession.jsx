import React from 'react';
import axios from "axios";

const SESSION_BASE_URL = "http://localhost:8080/session/getAllSession";

export default class GetSessions extends React.Component {
    state = {
      session: []
    }

    componentDidMount(){
        axios.get(SESSION_BASE_URL).then(res =>{
            const session = res.data;
            this.setState({session});
        })
    }

    render(){
        return(
            <div className='container-fluid'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Session ID</th>
                            <th scope="col">Date Time</th>
                            <th scope="col">Session Description</th>
                        </tr>
                    </thead>
                {
                    this.state.session
                    .map(session=>  
                        <tbody>
                        <tr>
                            <td key={session.sessionId}>{session.sessionId}</td>
                            <td key={session.dateTime}>{session.dateTime}</td>
                            <td key={session.sessionDescription}>{session.sessionDescription}</td>
                        </tr>
                        </tbody>        
                    )
                }
                </table>
            </div>
        )
    }


}