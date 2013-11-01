class AddSurveyMethodRefToIndicators < ActiveRecord::Migration
  def change
    add_column :indicators, :survey_method_id, :integer
    add_index :indicators, :survey_method_id
  end
end
