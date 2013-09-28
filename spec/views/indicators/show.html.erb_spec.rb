require 'spec_helper'

describe "indicators/show" do
  before(:each) do
    @indicator = assign(:indicator, stub_model(Indicator,
      :name => "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Name/)
  end
end
