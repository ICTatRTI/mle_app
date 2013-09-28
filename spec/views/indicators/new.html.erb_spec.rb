require 'spec_helper'

describe "indicators/new" do
  before(:each) do
    assign(:indicator, stub_model(Indicator,
      :name => "MyString"
    ).as_new_record)
  end

  it "renders new indicator form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", indicators_path, "post" do
      assert_select "input#indicator_name[name=?]", "indicator[name]"
    end
  end
end
