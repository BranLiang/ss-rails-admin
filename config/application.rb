require_relative 'boot'
require 'rails/all'

Bundler.require(*Rails.groups)

module SsRailsAdmin
  class Application < Rails::Application
    config.load_defaults 5.1

    config.generators do |g|
      g.javascripts false
      g.stylesheets false
      g.helper false
      g.template_engine :slim
    end
  end
end
