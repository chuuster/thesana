Rails.application.routes.draw do
  namespace :api, defaults: {format: :json}  do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :teams, only: [:create, :index]
    resources :projects, except: [:new, :edit] do 
      resources :tasks, only: [:create]
    end 
    resources :tasks, only: [:index, :update, :destroy, :show]
  end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
end
