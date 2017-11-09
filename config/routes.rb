Rails.application.routes.draw do
  get 'sessions/new'

  # Dashboard app router config
  get 'dashboard', to: 'dashboard#index'
  get 'dashboard/*path', to: 'dashboard#index'
end
