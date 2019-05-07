'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "XMRPool.net",
		api_url : 'https://api.xmrpool.net',
		api_refresh_interval: 5000
	};
});