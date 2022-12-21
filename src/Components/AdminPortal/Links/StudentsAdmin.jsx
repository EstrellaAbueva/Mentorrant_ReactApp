import React from 'react';
const StudentsAdmin = () =>{
    return(
        <div class="container-fluid">
            <figure class="text-center">
                 <center><h1 class="display-1">Student Admin Access</h1></center>
            </figure>
            <div class="container">  
                <div class="row">
                    <div class="col">
                        <button type="button" class="btn btn-outline-success btn-sm">Add Student</button>
                        <button type="button" class="btn btn-outline-danger btn-sm">Delete Student</button>    
                    </div>
                </div> 
                <div class="row">
                    <div class="col">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Search Students</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                    </div>
                    <div class="col">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Sort by...</span>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentsAdmin;