'use strict';

//Questions service used to communicate Quetsions REST endpoints
angular.module('questions').factory('Questions', ['$resource',
function($resource) {
		return $resource('questions/:questionID', { questionId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

'use strict';
