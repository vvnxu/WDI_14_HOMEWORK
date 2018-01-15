
require 'sinatra'
require "sinatra/reloader"
require "httparty"
require "pg"
require_relative 'db_config'
require_relative 'models/search'
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

  @searched = Search.where(title: params[:title])

 if @searched
    erb :result
  else
    result = HTTParty.get("http://omdbapi.com/?apikey=f1d22a2f&t=#{params[:t]}").parsed_response

      title =result['Title'],
      released =result['Released'],
      poster=result['Poster'],
      description=result['Plot']
      @searched= Search.create(title: title, released:released, poster: poster,description:description)

    erb :result
  end
end

get '/history' do
@history=@Search.all

  erb :history
end
