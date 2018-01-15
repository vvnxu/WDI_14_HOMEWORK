
require 'sinatra'
require "sinatra/reloader"
require "httparty"
require "pg"

get '/' do
  erb :index
end

get '/search' do
  responsee = HTTParty.get("http://omdbapi.com/?apikey=f1d22a2f&s=#{params[:title]}").parsed_response

  @info=responsee['Search']

  if @info.length == 1
    
    erb :result
  else
    erb :search
   end
end

get '/result' do
  conn=PG.connect(dbname:'moviesdb')

  sql= "SELECT * FROM searched WHERE title='#{conn.escape_string(params[:t])}';"
  print sql
  @print =conn.exec(sql)

  conn.close

  if @print.cmd_tuples> 0 && @print[0]['title']
    @print = @print[0]
    erb :result
  else
    result = HTTParty.get("http://omdbapi.com/?apikey=f1d22a2f&t=#{params[:t]}").parsed_response
    @print={
      'title' =>result['Title'],
      'released' =>result['Released'],
      'poster'=>result['Poster'],
      'description'=>result['Plot']
    }
    conn=PG.connect(dbname:'moviesdb')
    sql="INSERT INTO searched (title, poster,released,description) VALUES ('#{conn.escape_string(@print['title'])}','#{@print['poster']}','#{@print['released']}','#{conn.escape_string(@print['description'])}');"
    conn.exec(sql)
    print sql 
    conn.close

    erb :result
  end
end

get '/history' do
  conn=PG.connect(dbname:'moviesdb')
  sql="SELECT title, poster, released, description FROM searched;"
  @history=conn.exec(sql)
  conn.close

  erb :history
end
