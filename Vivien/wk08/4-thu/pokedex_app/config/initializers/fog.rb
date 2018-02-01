CarrierWave.configure do |config|

  config.fog_provider = 'fog/aws'
  config.fog_credentials = {
    provider:              'AWS',
    aws_access_key_id:     ENV['S3_KEY'],
    aws_secret_access_key: ENV['S3_SECRET'],
    region:                'us-west-1',
    # host:                  's3.example.com',
    # endpoint:              'https://s3.example.com:8080'
  }
  config.fog_directory  = 'sherryberry'#(HAS TO MATCH BUCKET NAME)
  # config.fog_public     = false
  # config.fog_attributes = { cache_control: "public, max-age=#{365.days.to_i}" }
end