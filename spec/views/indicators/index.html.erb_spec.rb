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

  it "renders a list of indicators" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Name".to_s, :count => 2
  end
end
