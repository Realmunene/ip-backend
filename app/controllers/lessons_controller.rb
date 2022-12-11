class LessonsController < ApplicationController
    def index
        render json: Lesson.all, except: [:created_at, :updated_at]
    end
end
