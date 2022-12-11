class CreateTutors < ActiveRecord::Migration[7.0]
  def change
    create_table :tutors do |t|
      t.string :name
      t.string :image
      t.string :description
      t.integer :rating
      t.integer :review
      t.string :no_of_student

      t.timestamps
    end
  end
end
