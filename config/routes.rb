MleApp::Application.routes.draw do

  get "sessions/new"

  get "pages/home"
  resources :indicators
  root :to => 'pages#home'
  
  get "sign_up" => "users#new", :as => "sign_up"
  resources :users

  get "log_in" => "sessions#new", :as => "log_in"
  get "log_out" => "sessions#destroy", :as => "log_out"
  resources :sessions

end
