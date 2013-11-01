class Indicator < ActiveRecord::Base
  #attr_accessible :name, :definition, :metric, :condition, :survey_method

  belongs_to :survey_method
  belongs_to :condition
end
