Rails.application.routes.draw do
  # Authentication
  devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout'}

  # Dashboard app router config
  get 'dashboard', to: 'dashboard#index'
  get 'dashboard/*path', to: 'dashboard#index'
end
