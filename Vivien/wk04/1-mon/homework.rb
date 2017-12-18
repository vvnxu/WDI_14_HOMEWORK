#GUESS THE NUMBER

number=rand(10)+1

puts 'Make a guess please'

user_guess = gets.strip

while user_guess.to_i != number do

	puts"Guess again"

	user_guess=gets.strip
end

puts "Congrats!you guessed it!"


require "pry"
#DAYS OF THE WEEK
days_of_the_week=["Mon","Tues","Wednes","Thurs","Fri","Sat","Sun"]

days_of_the_week.pop

puts days_of_the_week.unshift(days_of_the_week.pop)

new_calendar=[["Sat","Sun"],["Mon","Tues","Wednes","Thurs","Fri"]]

weekend= new_calendar.shift

puts new_calendar[0].sort

#lINE OF CODE
puts "enter filename"
file_name = gets.strip
content=File.readlines(file_name)
content.each do |line|
puts line
end
puts content.length
