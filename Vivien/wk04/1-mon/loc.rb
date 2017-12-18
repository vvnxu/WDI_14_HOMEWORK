puts "enter filename"
file_name = gets.strip
content=File.readlines(file_name)
content.each do |line|
puts line
end
puts content.length
