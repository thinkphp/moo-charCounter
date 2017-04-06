charCounter Plugin MooTools
=========================

A MooTools Plugin provides a countdown of text in an input field. Inspired by the way Twitter counts down the ramaining characters in a tweet.

![Screenshot](http://thinkphp.ro/images/charCounter.PNG)

How to use
----------

Include the latest version MooTools Framework, then .js into the page:

     
##Example


    #JS
    <script src="https://ajax.googleapis.com/ajax/libs/mootools/1.5.2/mootools.min.js"></script>
    <script type="text/javascript" src="moo-charCounter-min.js"></script>
    <script type="text/javascript" src="MooTools-More-1.5.2.js"></script>

    window.addEvent('domready', function() {


     new charCounter({
      elem: 'myCounter',
      count: 140,
      target: 'myTextarea',
      warnAt: 20,
      alertAt: 10,
      stopAtLimit: true,
      description: ''        
     })  


     new charCounter({
      elem: 'myCounter2',
      count: 50,
      target: 'myTextarea2',
      warnAt: 20,
      alertAt: 10,
      stopAtLimit: true,
      description: ''        
     })  

    });


    #HTML
   
    <form>
    <div class="form-group">
      <textarea id="myTextarea" class="form-control" rows="5"></textarea>
      <span id="myCounter">0</span>  

      <textarea id="myTextarea2" class="form-control" rows="5"></textarea>
      <span id="myCounter2">0</span>  
    </div>
    </form>