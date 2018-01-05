Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users
    resources :blog_posts

    resource :session, only: [ :new, :create, :destroy ]
  end
end
