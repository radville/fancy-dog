class CreateAccessories < ActiveRecord::Migration[6.0]
  def change
    create_table :accessories do |t|
      t.string :name
      t.string :url
      t.belongs_to :dog, null: false, foreign_key: true

      t.timestamps
    end
  end
end
