//////////////////////////////////////////////////////////////////////////////////
//		Header for plugins
//////////////////////////////////////////////////////////////////////////////////
var Github	= Github	|| require('./github.main.js')

//////////////////////////////////////////////////////////////////////////////////
//		Plugin itself
//////////////////////////////////////////////////////////////////////////////////
/**
 * get all repositories for this user
 * 
 * @param  {function} onLoad - callback called on load
 */
Github.prototype.getRepos	= function(onLoad){
	var urlGet	= '/user/repos'
	var github	= this
	github.get(urlGet, onLoad)
};


/**
 * Create a repository
 * - see details at https://developer.github.com/v3/repos/#create
 */
Github.prototype.createRepo = function(repoName, onLoad){
	var github	= this

	// build stuff to make the api call
	var dataToPost	= {
		name		: repoName,
		description	: 'silly repository description',
  	}

	var path	= '/user/repos'
	github.post(path, dataToPost, function(data){
		onLoad(data)
	})
}

/**
 * https://developer.github.com/v3/repos/#delete-a-repository
 *
 * - require scope 'delete_repo'
 */
Github.prototype.deleteRepo = function(repoName, onLoad){
	var github	= this

	// build stuff to make the api call
	var dataToPost	= {}

	var path	= '/repos/'+github.profile.username+'/'+repoName
	github.delete(path, dataToPost, function(data){
		onLoad(data)
	})
}
