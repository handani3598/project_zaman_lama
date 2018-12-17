(function() {                            
  var $imgs = $('#gallery div');          
  var $search = $('#filter-search');      
  var cache = [];                         

  $imgs.each(function() {                 
    cache.push({                         
      element: this,                      
      text: this.id.trim().toLowerCase()
    });
  });

  function filter() {                     
    var query = this.value.trim().toLowerCase();  
    cache.forEach(function(div) {         
      var index = 0;                      

      if (query) {                       
        index = div.text.indexOf(query);  
      }

      div.element.style.display = index === -1 ? 'none' : '';  // Show / hide
    });
  }

  if ('oninput' in $search[0]) {          
    $search.on('input', filter);          
  } else {                                
    $search.on('keyup', filter);          
  }

}());
