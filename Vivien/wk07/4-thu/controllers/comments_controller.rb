class CommentsController < ApplicationController

  def create
    redirect_to '/login' unless session[:user_id]

    comment = Comment.new
    comment.content=params[:comment]
    comment.user_id=session[:user_id]
    comment.project_id=params[:project_id]
    if comment.save
      redirect_to "/projects/#{params[:project_id]}"
    else
      render :new
    end
  end

  def destroy
    comment=Comment.find(params[:id])
    comment.destroy
    redirect_to "/projects/#{params[:project_id]}"
  end
end