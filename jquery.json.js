/**
* jQuery JSON
* @name jquery.json.js
* @author Mattia - http://www.matriz.it
* @version 1.0.0
* @date April 20, 2012
* @category jQuery plugin
* @copyright (c) 2012 Mattia at Matriz.it (info@matriz.it)
* @license MIT - http://opensource.org/licenses/mit-license.php
* @example Visit http://www.matriz.it/projects/jquery-json/ for more informations about this jQuery plugin
*/
(function ($) {
	$.extend({
		'stringifyJSON': function (value, replacer, space) {
			return JSON.stringify(value, replacer, space);
		}
	});
})(jQuery);