// filepath: js/views/item.js

define(['jquery', 'underscore','backbone'], function($,_,Backbone) { 

    var ItemView = Backbone.View.extend({
        tagName: 'tr',
        className: 'itemContainer',
        template: _.template( $( '#inventoryTemplate' ).html() ),

        events: {
        'click .delete': 'deleteItem'
        },
 
        deleteItem: function() {
            //Delete model
            this.model.destroy();

            //Delete view
            this.remove();
        },

        render: function() {
            //render inventory list to '#inventoryTemplate'
            this.$el.html( this.template( this.model.attributes ) );

            return this;
        }
    });

    return ItemView;
});