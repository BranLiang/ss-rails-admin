Rails.application.routes.draw do
  # Dashboard app router config
  get 'dashboard', to: 'dashboard#index'
  get 'dashboard/*path', to: 'dashboard#index'
end
