class CreateHighs < ActiveRecord::Migration[6.0]
  def change
    create_table :highs do |t|
      t.integer :score
      t.references :difficulty, null: false, foreign_key: true

      t.timestamps
    end
  end
end
