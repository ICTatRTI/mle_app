require 'spec_helper'

describe "indicators/index" do
  before(:each) do
    assign(:indicators, [
      stub_model(Indicator,
        :name => "Name"
      ),
      stub_model(Indicator,
        :name => "Name"
      )
    ])
  end


end
