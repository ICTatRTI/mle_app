class PagesController < ApplicationController
  def home
  end

  def nigeria_profile
  end

    def india_profile
  end

  def reports
  end

  def dashboard

  	respond_to do |format|
      format.html {render :layout => 'authenticated'}
    end

  end

end
