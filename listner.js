var port = chrome.runtime.connect({name: "knockknock"});
$(document).keydown(function(e){
   if ( e.ctrlKey && e.keyCode == 77 ) {
      showMeaning();
   }
});
$(document).dblclick(function(e){
	showMeaning();
});

function showMeaning(){
	$key = $.trim(window.getSelection());
	if($key.length>0){
		$key = $key.toLowerCase();
		port.postMessage({key: $key})
	}
}
