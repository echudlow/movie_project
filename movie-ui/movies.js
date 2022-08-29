const movies={template:
`
<div>
<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()>
Add Movie
</button>
</div>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            MovieID
        </th>
        <th>
            MovieName
        </th>
        <th>
            MovieDescription
        </th>
        <th>
            MovieReleaseYear
        </th>
        <th>
            Options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="movie in movies">
        <td>{{movie.MovieID}}</td>
        <td>{{movie.MovieName}}</td>
        <td>{{movie.MovieDescription}}</td>
        <td>{{movie.MovieReleaseYear}}</td>
        <td>
            <button type="button"
            class="btn-light mr-1" data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(movie)>>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(movie.MovieId)"
            class="btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>
        </td>
    </tr>
</tbody>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModal" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-cenetered">
<div class="modal-context">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="input-group mb-3">
            <span class="input-group-text"> Movie Name</span>
            <input type="text" class="form-control" v-model="MovieName">
        </div>

        <button type="button" @click="createClick()"
        v-if="MovieId==0" class="btn btn-primary">
        Create
        </button>
        <button type="button" @click="updateClick()"
        v-if="MovieId!=0" class="btn btn-primary">
        Update
        </button>
    </div>
</div>
</div>
`
,

data(){
    return{
        movies:[],
        modalTitle:"",
        MovieName:"",
        MovieId:0,
        MovieDescription:"",
        MovieReleaseYear:0
    }
},
methods:{
    refreshData(){
        axios.get(variable.API_URL+"movies")
        .then((response)=>{
            this.movies=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Movie";
        this.MovieId=0;
        this.MovieName="";
        this.MovieDescription="";
        this.MovieReleaseYear=0;
    },
    editClick(movie){
        this.modalTitle="Edit Movie";
        this.MovieId=movie.MovieId;
        this.MovieName=movie.MovieName;
        this.MovieDescription=movie.MovieDescription;
        this.MovieReleaseYear=movie.MovieReleaseYear;
    },
    createClick(){
        axios.post(variable.API_URL+"movies",{
            MovieName:this.MovieName,
            MovieDescription:this.MovieDescription,
            MovieReleaseYear:this.MovieReleaseYear
        })
        .then((response)=>{
            this.refreshData;
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variable.API_URL+"movies",{
            MovieId:this.MovieId,
            MovieName:this.MovieName,
            MovieDescription:this.MovieDescription,
            MovieReleaseYear:this.MovieReleaseYear
        })
        .then((response)=>{
            this.refreshData;
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variable.API_URL+"movies/"+id)
        .then((response)=>{
            this.refreshData;
            alert(response.data);
        });
    }

    
},
mounted:function(){
    this.refreshData();
}


}