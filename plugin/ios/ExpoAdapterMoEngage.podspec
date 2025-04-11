Pod::Spec.new do |s|
  s.name           = 'ExpoAdapterMoEngage'
  s.version        = '1.0.0'
  s.summary        = 'summary'
  s.description    = 'description'
  s.license        = 'license'
  s.author         = 'author'
  s.homepage       = 'homepage'
  s.platform       = :ios, '13.0'
  s.swift_version  = '5.4'
  s.source         = { git: 'https://github.com/expo/config-plugins.git' }
  s.static_framework = true
  s.source_files = "#{s.name}/**/*.{h,m,swift}"

  s.dependency 'ExpoModulesCore'
  s.dependency 'React-Core'

  # Swift/Objective-C compatibility
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES'
  }
end