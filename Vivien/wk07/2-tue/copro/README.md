
1.rails new copro -d=postgresql -GT --skip-coffee --skip-turbolinks

2.rails g(generate) resource user email password_digest:text

3.rails db:create

4.rails server (rails s)

5.rails db:migrate

6.root to:'pages#home'

cd controllers mkdir pages_controller
touch pages_controller.rb
(class PagesController < ApplicationController

  def home
  end
end)

cd views mkdir pages touch home.html.erb
(h1 home)

7.CSS in app/assets/stylesheets
go in  application.css (
  deleted require_tree, then add
  *= require reset
  *= require main
  )

(deleted user.css)
touch main.css and reset.css
8.reset default css
