class AddDescriptionToIndicators < ActiveRecord::Migration
  
  def change
    add_column :indicators, :definition, :text
    add_column :indicators, :metric, :text
  end

end
