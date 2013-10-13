class AddDescriptionToIndicators < ActiveRecord::Migration
  
  def change
    add_column :indicators, :definition, :string
    add_column :indicators, :metric, :string
  end

end
