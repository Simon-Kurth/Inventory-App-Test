// filepath: js/app.js

define(['views/inventory', 'backbone'], function(InventoryView, Backbone) {

	    // Create sample data
	    var inventory = [
	    { component: 'Bottom Bracket', stockQty: '22', reorderQty: '20', qtyPerCrane: '1', vendorID: 'Foster Machine' },
	    { component: 'Top Bracket', stockQty: '18', reorderQty: '12', qtyPerCrane: '6', vendorID: 'Garrison Industry' },
	    { component: 'Logo Bracket', stockQty: '24', reorderQty: '42', qtyPerCrane: '1', vendorID: 'CDN Alloy' },
	    { component: 'Adjustor Strap', stockQty: '12', reorderQty: '52', qtyPerCrane: '2', vendorID: 'McMaster Carr' },
	    { component: 'Jib Handle', stockQty: '37', reorderQty: '16', qtyPerCrane: '4', vendorID: 'McMaster Carr' }
	];

// create new inventoryView collection with sample data
var InventoryView = new InventoryView(inventory);

});