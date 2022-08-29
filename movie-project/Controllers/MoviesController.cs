using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using movie_project.Models;

namespace movie_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        public MoviesController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select * from motionpictures.motionpictures";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using(SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand=new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Movies movie)
        {
            string query = @"
                            insert into motionpictures.motionpictures(movie_name, movie_description, movie_realeaseYear)
                            values (@movie_name, @movie_description, @movie_realeaseYear)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@movie_name", movie.movie_name);
                    myCommand.Parameters.AddWithValue("@movie_description", movie.movie_description);
                    myCommand.Parameters.AddWithValue("@movie_realeaseYear", movie.movieRY);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully!");
        }


        [HttpPut]
        public JsonResult Put(Movies movie)
        {
            string query = @"
                            update motionpictures.motionpictures
                            set movie_name=@movie_name, 
                                movie_description=@movie_description, 
                                movie_realeaseYear=@movie_realeaseYear 
                            where movie_id=@movie_id";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@movie_id", movie.movie_id);
                    myCommand.Parameters.AddWithValue("@movie_name", movie.movie_name);
                    myCommand.Parameters.AddWithValue("@movie_description", movie.movie_description);
                    myCommand.Parameters.AddWithValue("@movie_realeaseYear", movie.movieRY);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Successfully Updated!");
        }

        [HttpDelete]
        public JsonResult Delete(int id)
        {
            string query = @"
                            delete from motionpictures.motionpictures
                            where movie_id=@movie_id";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon)) 
                {
                    myCommand.Parameters.AddWithValue("@movie_id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Successfully Deleted!");
        }

    }
}
