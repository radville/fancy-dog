class AccessoriesController < ApplicationController
    def index
        render json: accessory_json(Accessory.all)
    end

    private

    def accessory_json(accessory)
        accessory.to_json(
            only:[:src]
        )
    end
end
