// filepath: js/models/item.js

define(['jquery','backbone'], function($,Backbone) { 

	var Item = Backbone.Model.extend({
	    defaults: {
	        component: 'no component',
	        stockQty: 'no stock qty',
	        reorderQty: 'NA',
	        qtyPerCrane: 'no qty per crane',
	        vendorID: 'NA'
	    }
	});
	
	return Item;
});