require 'spec_helper'

describe "indicators/edit" do
  before(:each) do
    @indicator = assign(:indicator, stub_model(Indicator,
      :name => "MyString"
    ))
  end

  it "renders the edit indicator form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", indicator_path(@indicator), "post" do
      assert_select "input#indicator_name[name=?]", "indicator[name]"
    end
  end
end
