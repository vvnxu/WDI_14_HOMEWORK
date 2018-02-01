class Pokemon < ApplicationRecord
	mount_uploader :image, ImageUploader
	
end
