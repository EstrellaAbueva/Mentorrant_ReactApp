import React from 'react';

const Ebooks = () =>{
    return(
        <div class="container-fluid">
            <figure class="text-center">
                 <h1 class="display-1">Ebooks</h1>
            </figure>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Search Books</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                        </div>
                    </div>
                    <div class="col">
                    </div>
                    <div class="col">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Search Genre</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ebooks;