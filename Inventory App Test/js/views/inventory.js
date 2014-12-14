// filepath: js/views/inventory.js

define(['jquery', 
        'backbone', 
        'collections/inventory', 
        'models/Item', 
        'views/item'], function($,Backbone, Inventory, Item, ItemView) { 

        var InventoryView = Backbone.View.extend({
        el: '#items',

        
        // initialize inventory view, load up sample data from app.js, call render function
        initialize: function( initialInventory ) {
            this.collection = new Inventory( initialInventory );
            this.listenTo( this.collection, 'add', this.renderItem );
            this.render();
        },
        
        // call 'addItem' function if form data is valid when submitted
        events:{
        'submit':'addItem'
        },

        // add validated form data to model
        addItem: function( e ) {
            e.preventDefault();

            var formData = {};

            $( '#addItem li' ).children( 'input' ).each( function( i, el ) {
                if( $( el ).val() != '' )
                {
                    formData[ el.id ] = $( el ).val();
                }
            });

            this.collection.add( new Item( formData ) );

            // clear html5 form 
             $('#addItem').trigger('reset');

        },

        // render inventory by rendering each book in its collection
        render: function() {
            this.collection.each(function( item ) {
                this.renderItem( item );
            }, this );
        },

        // render an item by creating an ItemView and appending the
        // element it renders to the inventory's element
        renderItem: function( item ) {
            var itemView = new ItemView({
                model: item
            });
            this.$el.find('#inventory-holder').append( itemView.render().el );
        }
    });

    return InventoryView;
});