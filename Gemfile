source 'https://rubygems.org'

gem 'rails', '~> 4.2.7.1 '

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

group :production do
  gem 'pg'
end

group :development, :test do
  gem 'sqlite3'
end

gem "bcrypt-ruby", :require => "bcrypt"



# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 4.0.1'
  gem 'coffee-rails', '~> 4.0.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
  gem "therubyracer"
end

gem "less-rails"
gem 'twitter-bootstrap-rails'
gem 'jquery-rails', '3.1.3'


group :development do
	gem 'rspec-rails', '2.14.0'
end

group :test do
	gem 'rspec-rails', '2.14.0' 
	gem 'webrat', '0.7.1'
end

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'
