zdd.include = {
  data: {
    footer: "<p>&copy; " + zdd.config.year + " " + zdd.config.title + " | Designed by <a href='http://" + zdd.config.website + "' target='_blank'>" + zdd.config.author + "</a></p>",
  },
  get: function() {
  	var
    	general = zdd.config,
    	html = "<p>&copy;2017 {{ site.title }} | Designed by <a href='http://zachdyerdesign.com' target='_blank'>Zach Dyer Design</a></p>";
  	document.write(html);
  }
};
