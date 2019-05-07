'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "ZanoPool",
		api_url : 'http://localhost:8001',
		api_refresh_interval: 5000
	};
});