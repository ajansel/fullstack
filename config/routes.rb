Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show]
    resource :sessions, only: [:create, :destroy]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :songs, only: [:index, :show]
    resources :posts, only: [:index, :show, :create]
    resources :likes, only: [:destroy, :create]
    resources :followers, only: [:destroy, :create]
    resources :music_searches, only: [:index]
  end
end
