require "pry"
class Phone
  def initialize(str)
    @str=str.gsub(/[^0-9]/,'').sub(/^11/,'1')
  end

  def number
    if @str.length < 10 || @str[0] != '1'
      return '0000000000'
    else
      @str
    end
  end

  def area_code
    @str[0,3]
  end

  def to_s
    "(" + @str[0,3] + ") " + @str[3,3] + "-" + @str[6,5]
  end
end
