class AddConditionRefToIndicators < ActiveRecord::Migration
  def change
    add_column :indicators, :condition_id, :integer
    add_index :indicators, :condition_id
  end
end
