#ARRAYS
planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

planteers[1]

planteers.push("Heart")

planteers -=["Captain Planet"]

rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

heroes= planeteers+rangers
heroes.sort
heroes.shuffle
heroes.sample
#heroes.select{|elem| elem[0]=="B"} 


#HASHES
ninja_turtle={name:"Michelangelo",
			  weapon:"Nunchuks",
			  radical:true}

ninja_turtle[:age]=5000
ninja_turtle.delete(:radical)
ninja_turtle[pizza_topping]=["cheese", "pepperoni", "peppers"]
ninja_turtle[pizza_topping].first
ninja_turtle.keys
ninja_turtle.each do |key,value|
	puts "#{key} is equal to #{value}"