HighVoltage.configure do |config|
  config.home_page = 'home'
  config.route_drawer = HighVoltage::RouteDrawers::Root
  config.parent_engine = :slim
end
