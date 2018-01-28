class ProjectsController < ApplicationController

  def create

  redirect_to '/login' unless session[:user_id]

    pro=Project.new
    pro.title=params[:title]
    pro.user_id=session[:user_id]
    pro.preview=params[:preview]
    if pro.save
      redirect_to '/'
    else
      render :new
    end
  end

  def show
    @info=Project.find(params[:id])
    @comments=@info.comments
  end

  def edit
    @info=Project.find(params[:id])
  end


  def update
    @info=Project.find(params[:id])
    @info.title=params[:title]
    @info.preview=params[:preview]
    if @info.save
        redirect_to '/'
      else
        render :edit
    end
end

  def destroy
    pro=Project.find(params[:id]).destroy
    redirect_to '/'
  end
end
