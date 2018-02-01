class PokemonsController < ApplicationController
	def index
		@pokemons=Pokemon.all
	end

	def create
		pokemon=Pokemon.new
		pokemon.species=params[:species]
		pokemon.nickname=params[:name]
		pokemon.level=params[:level]
		pokemon.image.url=params[:image]
		if pokemon.save
			redirect_to '/pokemons'
		else
			render :new
		
		end
	end

	def edit
		@pokemon=Pokemon.find(params[:id])
	end

	def update
		pokemon=Pokemon.find(params[:id])
		pokemon.species=params[:species]
		pokemon.nickname=params[:name]
		pokemon.level=params[:level]
		pokemon.image.url=params[:image]
		if pokemon.save
			redirect_to "/pokemons/#{params[:id]}"
		else
			render :edit
		
		end
	end

	def destroy
		pokemon=Pokemon.find(params[:id]).destroy
	end

end
