Bugsnag.configure do |config|
  config.api_key = Rails.application.secrets.bugsnap_api_key
end
