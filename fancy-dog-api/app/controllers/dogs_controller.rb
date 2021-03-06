class DogsController < ApplicationController
    def index
        render json: dog_json(Dog.all)
    end

    def create
        dog = Dog.new(dog_params)

        if dog.save
            render json: dog_json(dog)
        else
            render json: {error: dog.errors.full_messages}
        end
    end

    def destroy
        dog = Dog.find(params[:id])
        dog.destroy
        render json: dog
    end

    private

    def dog_json(dog)
        dog.to_json(
            only:[:name, :id],
            include:{ accessories: {only: [:src]}}
        )
    end

    def dog_params
        params.require(:dog).permit(:name, accessories_attributes: [:src])
    end
end
