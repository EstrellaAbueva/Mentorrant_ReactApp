import React from 'react';
const CoursesAdmin = () =>{
    return(
        <div class="container-fluid">
            <figure class="text-center">
                 <center><h1 class="display-1">Courses Admin Access</h1></center>
            </figure>
            <div class="container">  
                <div class="row">
                    <div class="col">
                        <button type="button" class="btn btn-outline-success btn-sm">Add Course</button>
                        <button type="button" class="btn btn-outline-danger btn-sm">Delete Course</button>    
                    </div>
                </div> 
                <div class="row">
                    <div class="col">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Search Courses</span>
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

export default CoursesAdmin;