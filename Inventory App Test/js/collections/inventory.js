// filepath: js/collections/inventory.js

define(['jquery','backbone', 'models/item'], function($,Backbone, Item) { 

	var Inventory = Backbone.Collection.extend({
	    model: Item
	});
		
	return Inventory;
});
