var config = {}

// Update to have your correct username and password
config.mongoURI = {
	production: 'mongodb+srv://kajuju:6jX9YhWWrL7gvdd4@gallery.clusterms-wk2-project.zlftvug.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Clusterms-wk2-project',
	development: 'mongodb+srv://kajuju:6jX9YhWWrL7gvdd4@gallery.clusterms-wk2-project.zlftvug.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=Clusterms-wk2-project',
	test: 'mongodb+srv://kajuju:6jX9YhWWrL7gvdd4@gallery.clusterms-wk2-project.zlftvug.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=Clusterms-wk2-project',
}
module.exports = config;
