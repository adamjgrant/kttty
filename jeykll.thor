require "stringex"
class Jekyll < Thor
  desc "new", "create a new post"
  method_option :editor, :default => "vim"
  def new(*title)
    title = title.join(" ")
    date = Time.now.strftime('%Y-%m-%d')
    filename = "_posts/#{date}-#{title.to_url}.md"

    if File.exist?(filename)
      abort("#{filename} already exists!")
    end

    puts "Creating new post: #{filename}"
    open(filename, 'w') do |post|
      post.puts "---"
      post.puts "layout: v2/post"
      post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
      post.puts "tags:"
      post.puts " -"
      post.puts "---"
      post.puts ""
      post.puts "<div class=\"frames\">"
      post.puts "  <div class=\"frame\">"
      post.puts "    <div class=\"bubble\">"
      post.puts "    </div>"
      post.puts "  </div>"
      post.puts "</div>"
      post.puts ""
      post.puts "<div data-img=\"\"></div>"
    end

    system(options[:editor], filename)
  end
end
