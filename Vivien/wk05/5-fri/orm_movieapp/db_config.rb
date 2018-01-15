require "pg"
require "active_record"

task={
  adapter:'postgresql',
  database:'moviesdb'
}

ActiveRecord::Base.establish_connection(task)
