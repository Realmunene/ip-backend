class CreateLessons < ActiveRecord::Migration[7.0]
  def change
    create_table :lessons do |t|
      t.string :title
      t.string :image
      t.string :description
      t.integer :price
      t.string :tutor_name

      t.timestamps
    end
  end
end
