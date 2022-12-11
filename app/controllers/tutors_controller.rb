class TutorsController < ApplicationController
    def index
        render json: Tutor.all, except: [:created_at, :updated_at]
    end
end
