/*
---
description: 

authors:
- Adrian Statescu (http://thinkphp.ro)

license:
- MIT-style license

requires:
 core/1.6.0: '*'

provides: [charCounter]
...
*/
var charCounter = new Class({

    /*Implements*/
    Implements: [Events, Options],  

    defaults: {

     count: 140,

     target: 'myTextarea',

     alertAt: 20,

     warnAt: 0,

     stopAtLimit: false,

     description: ''  
    }, 

    /* constructor */
    initialize: function( options ) {

          this.options = Object.merge( {} , this.defaults, options )
          
          this._countsDown(options)

        return this  
    },

    _countsDown: function( o ) {

                  var $el = document.id(o.elem),

                  $target = document.id(o.target)
 
                  //predefined count minus existing content
                  $el.set('html', o.count - $target.get('length') + o.description)


                  $target.addEvent("keydown",function(event){

                    var counter = this.value.length

                    if(counter <= (o.count - o.alertAt)) {

                       $el.removeClass('atWarn').removeClass('atAlert');
                    }

                    if(counter >= (o.count - o.warnAt)) {

                       $el.removeClass('atAlert').addClass('atWarn');   

                    } else {

                       $el.removeClass('atWarn');   
                    }

                    if(counter >= (o.count - o.alertAt)) {

                       $el.removeClass('atWarn').addClass('atAlert');   
                    }

                    $el.set('html', o.count - $target.get('value').length + 1 + o.description)
             
                    if( o.stopAtLimit ) this.value = this.value.substring(0, o.count)
                  
                })
    }

});