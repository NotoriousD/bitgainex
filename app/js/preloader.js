

$("#preload").load(function() {
	  $('#preload').loadgo();
  }).each(function() {
	  if(this.complete) $(this).load();
  });
