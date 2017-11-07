# frozen_string_literal: true

class DashboardController < ApplicationController
  layout 'dashboard'

  def index
    @hello_world_props = { name: "Stranger" }
  end
end
