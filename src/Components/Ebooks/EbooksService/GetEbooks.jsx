import React from 'react';
import axios from "axios";

const EBOOKS_BASE_URL = "http://localhost:8080/Ebooks/get";

export default class GetEbooks extends React.Component {
    state = {
      ebooks: []
    }

    componentDidMount(){
        axios.get(EBOOKS_BASE_URL).then(res =>{
            const ebooks = res.data;
            this.setState({ebooks});
        })
    }

    render(){
        return(
            <div className='container-fluid'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Genre</th>
                            <th scope='col'>Year Publish</th>
                        </tr>
                    </thead>
                {
                    this.state.ebooks
                    .map(ebooks=>  
                        <tbody>
                        <tr>
                            <td key={ebooks.book_id}>{ebooks.book_id}</td>
                            <td key={ebooks.book_title}>{ebooks.book_title}</td>
                            <td key={ebooks.book_author}>{ebooks.book_author}</td>
                            <td key={ebooks.book_genre}>{ebooks.book_genre}</td>
                            <td key={ebooks.year_publish}>{ebooks.year_publish}</td>
                        </tr>
                        </tbody>        
                    )
                }
                </table>
            </div>
        )
    }


}