class CreateSurveyMethods < ActiveRecord::Migration
  def change
    create_table :survey_methods do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
