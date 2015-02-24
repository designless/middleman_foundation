###
# Compass
###

compass_config do |config|
  # Require any additional compass plugins here.
  config.add_import_path "bower_components/foundation/scss"

  # Set this to the root of your project when deployed:
  config.http_path = "/"
  config.css_dir = "stylesheets"
  config.sass_dir = "stylesheets"
  config.images_dir = "images"
  config.javascripts_dir = "javascripts"
  fonts_dir = "fonts"

  # You can select your preferred output style here (can be overridden via the command line):
  # output_style = :expanded or :nested or :compact or :compressed
  output_style = :compressed
  set :slim, { :pretty => true, :sort_attrs => false, :format => :html }

  # To enable relative paths to assets via compass helper functions. Uncomment:
  relative_assets = true

  # To disable debugging comments that display the original location of your selectors. Uncomment:
  line_comments = false

  # To disable slim commetns
  require 'slim'
  Slim::Engine.disable_option_validator!

  # If you prefer the indented syntax, you might want to regenerate this
  # project again passing --syntax sass, or you can uncomment this:
  # preferred_syntax = :sass
  # and then run:
  # sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

end

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# activate :livereload

# Methods defined in the helpers block are available in templates
helpers do
  def breadcrumbs(resource)
    list = []
    list << content_tag(:li, resource.data.title, class: 'active fa fa-angle-right')
    unless resource.parent.nil?
      current = resource.parent
      until current.nil?
        if current.parent.nil?
          list << content_tag(:li, link_to(current.data.title, current.url), class: 'fa fa-home')
        else
          list << content_tag(:li, link_to(current.data.title, current.url), class: 'fa fa-angle-right')
        end
        current = current.parent
      end
    end
    list.reverse.join("\n").html_safe
  end

  def current_page?(path)
    current_page.url == path
  end

  def nav_link(link_text, link_path)
    class_name = current_page?(link_path) ? 'current' : ''

    content_tag(:li, :class => class_name) do
      link_to link_text, link_path
    end
  end
end


# Add bower's directory to sprockets asset path
after_configuration do
  @bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
  sprockets.append_path File.join "#{root}", @bower_config["directory"]
end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

activate :livereload

require "uglifier"

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  set :relative_links, true

  activate :relative_assets

  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript, :compressor => Uglifier.new({
    :output => {
      :comments => :all
    }
  })

  activate :minify_html, remove_http_protocol: false

  # activate :imageoptim do |options|
    # print out skipped images
    # options.verbose = true

    # Setting these to true or nil will let options determine them (recommended)
    # options.nice = true
    # options.threads = true

    # Image extensions to attempt to compress
    # options.image_extensions = %w(.png .jpg .gif)

    # compressor worker options, individual optimisers can be disabled by passing
    # false instead of a hash
    # options.pngcrush_options  = {:chunks => ['alla'], :fix => false, :brute => false}
    #options.pngout_options    = {:copy_chunks => false, :strategy => 0}
    # options.optipng_options   = {:level => 6, :interlace => false}
    # options.pngout_options = false
    # options.advpng_options    = {:level => 4}
    # options.jpegoptim_options = {:strip => ['all'], :max_quality => 100}
    # options.jpegtran_options  = {:copy_chunks => false, :progressive => true, :jpegrescan => true}
    # options.gifsicle_options  = {:interlace => false}
  # end

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
