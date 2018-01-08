require 'pry'
puts "Select a operation:Add,Subtract,Multiply,Divide"
user_input= gets.strip

if user_input == "Add"
puts "Input numbers"
num1=gets.strip
num2=gets.strip
puts "#{num1}+#{num2}=#{num1.to_i+num2.to_i}"
elsif user_input == "Subtract"
puts "Input numbers"
num1=gets.strip
num2=gets.strip
puts "#{num1}-#{num2}=#{num1.to_i-num2.to_i}"
elsif user_input == "Multiply"
puts "Input numbers"
num1=gets.strip
num2=gets.strip
puts "#{num1}x#{num2}=#{num1.to_i*num2.to_i}"
else 
puts "Input numbers"
num1=gets.strip
num2=gets.strip
puts "#{num1}/#{num2} = #{num1.to_i%num2.to_i}"
end
binding.pry