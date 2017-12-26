require "sinatra"
require "sinatra/reloader"
require "stock_quote"

get "/" do 
@symbol=params[:stockname]
stock = StockQuote::Stock.quote(@symbol)
@op=stock.op
@hi52=stock.hi52
@iname=stock.iname
@lo=stock.lo
	erb(:index)	
end

get "/about" do

erb(:about)

end