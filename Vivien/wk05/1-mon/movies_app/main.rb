
require 'sinatra'
require "sinatra/reloader"
require "httparty"

get '/' do
  erb :index
end


get '/result' do
  result = HTTParty.get('http://omdbapi.com/?apikey=f1d22a2f&t='+params[:t])
  @title=result['Title']
  @released=result['Released']
  @rating=result['Runtime']
  @poster=result['Poster']
  @description=result['Plot']

  file=File.open('comparision.txt','a')
  file.puts(@title,@released,@ratings,@description)
  file.close
  erb :result
end

get '/compare' do
  file=File.readlines('comparision.txt')
  @list=file
  erb:compare


end
