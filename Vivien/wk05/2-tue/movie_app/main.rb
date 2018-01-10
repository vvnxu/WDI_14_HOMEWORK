
require 'sinatra'
require "sinatra/reloader"
require "httparty"

get '/' do
  erb :index
end

get '/search' do
  @responsee = HTTParty.get("http://omdbapi.com/?apikey=f1d22a2f&s=#{params[:title]}").parsed_response

  @info=@responsee['Search']

  erb :search
  #return @info.inspect

end
get '/result' do
  result = HTTParty.get("http://omdbapi.com/?apikey=f1d22a2f&t=#{params[:title]}").parsed_response
  @title=result['Title']
  @released=result['Released']
  @rating=result['Runtime']
  @poster=result['Poster']
  @description=result['Plot']

  file=File.open('history.txt','a')
  file.puts(@title)
  file.close
  erb :result
end

get '/history' do
  file=File.readlines('history.txt')
  @list=file
  erb:history


end
