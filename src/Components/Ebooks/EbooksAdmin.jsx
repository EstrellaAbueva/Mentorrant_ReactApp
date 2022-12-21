import React from 'react';
import Get from './EbooksService/GetEbooks';
const Ebooks = () =>{
    return(
        <div class="container-fluid">
            <figure class="text-center">
                 <h1 class="display-1">Ebooks Admins</h1>
            </figure>
            <div class="container">  
                <div class="row">
                    <div class="col">
                        <button type="button" class="btn btn-outline-success btn-sm">Add Ebooks</button>
                        <button type="button" class="btn btn-outline-danger btn-sm">Delete Ebooks</button>    
                    </div>
                </div> 
                <div class="row">
                    <div class="col">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Search Books</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                    </div>
                    <div class="col">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Search Genre</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                    </div>
                </div>
                <Get/>
            </div>
        </div>
    );
}

export default Ebooks;