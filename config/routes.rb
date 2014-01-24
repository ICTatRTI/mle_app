MleApp::Application.routes.draw do

  get "dashboard/new"
  get "sessions/new"

  get "pages/home"
  resources :indicators
  root :to => 'pages#home'
  
  get "sign_up" => "users#new", :as => "sign_up"
  resources :users

  get "log_in" => "sessions#new", :as => "log_in"
  get "log_out" => "sessions#destroy", :as => "log_out"

  get 'nigeria', to: "pages#nigeria_profile"
  get 'reports', to: "pages#reports"
  
  get 'baseline_survey', to: "pages#baseline_survey"

  # Dashboard stuff
  get 'behavior', to: "pages#behavior"
  get 'community', to: "pages#community"
  get 'nigeria/dashboard', to: "dashboard#main"
  get 'nigeria/care_seeking', to: "pages#care_seeking"
  get 'nigeria/behavior', to: "pages#behavior"
  get 'nigeria/community', to: "pages#community"
  get 'nigeria/treatment_coverage', to: "pages#treatment_coverage"
  
  get 'dashboard', to: "dashboard#main"

  resources :sessions

end
