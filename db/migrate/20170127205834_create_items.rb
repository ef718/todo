class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.text :description
      t.string :due
      t.string :person

      t.timestamps null: false
    end
  end
end
