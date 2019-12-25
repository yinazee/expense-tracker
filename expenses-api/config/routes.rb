Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :accounts do
        resources :transations
        end
      end
    end

  end
