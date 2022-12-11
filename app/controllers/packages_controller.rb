class PackagesController < ApplicationController
    def index
        render json: Package.all, except: [:created_at, :updated_at]
    end
end
