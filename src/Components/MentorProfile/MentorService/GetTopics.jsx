import React from 'react';
import axios from "axios";

const TOPICS_BASE_URL = "http://localhost:8080/topic/getAllTopic";

export default class GetTopics extends React.Component {
    state = {
      topics: []
    }

    componentDidMount(){
        axios.get(TOPICS_BASE_URL).then(res =>{
            const topics = res.data;
            this.setState({topics});
        })
    }

    render(){
        return(
            <div className='container-fluid'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Course ID</th>
                            <th scope="col">Subject</th>
                        </tr>
                    </thead>
                {
                    this.state.topics
                    .map(topics=>  
                        <tbody>
                        <tr>
                            <td key={topics.courseid}>{topics.courseid}</td>
                            <td key={topics.subject}>{topics.subject}</td>
                        </tr>
                        </tbody>        
                    )
                }
                </table>
            </div>
        )
    }


}