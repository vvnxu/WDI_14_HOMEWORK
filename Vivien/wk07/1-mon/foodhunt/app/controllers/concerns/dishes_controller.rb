class DishesController < ApplicationController
	def index
		@dishes=Dish.all
	end

	def new

	end

	def create
 		dish=Dish.new
		dish.name=params[:name]
		dish.image_url=params[:url]
	
		if dish.save 
			redirect_to '/dishes'
		else
			render :new
		end
 	end

	def show
		# @secret='pudding'
		# raise "crash your crash"
		@dish=Dish.find(params[:id])
	end

	def edit
		@dish=Dish.find(params[:id])
	end

	def update
		dish=Dish.find(params[:id])
		dish.name=params[:name]
		dish.image_url=params[:url]
		if dish.save
			redirect_to 'dishes/#{params[:id]}'
		else
			render :edit
		end
	end
 	
end