class DashboardController < ApplicationController
  def new
  end

  def main

  	respond_to do |format|
      format.html {render :layout => 'authenticated'}
    end

  end

  # drill downs
  def behavior

  end

end
