require("content-buffer.js");
define_keymap("haivl_keymap",$display_name="haivl keymap");
define_key(haivl_keymap, "tab",null,$fallthrough);
define_key(haivl_keymap, "z",null,$fallthrough);
define_key(haivl_keymap, "x",null,$fallthrough);
define_keymaps_page_mode("haivl_mode", 
       build_url_regexp($domain="haivl",
					    $allow_www = true,
					    $tlds = ["com", "tv"]),
       {normal: haivl_keymap},
       $display_name = "haivl");
//to active this mode automatically
page_mode_activate(haivl_mode);
//"#menuBar>li"
var haivl = {};
haivl.selector = {};
haivl.selector.nav = "#menuBar>li>a"
haivl.selector.seemore = "#leftColumn>.mainBox>a"
haivl.name = ["New", "Unread", "Vote","Video","Hot", "SeeMore"];
haivl.doClick = function(I, index ){
  var document = I.buffer.document;
  var button_array = document.querySelectorAll(haivl.selector.nav);
  
  if(button_array[index] != null){
	dom_node_click(button_array[index]);
  }else {	
 	I.minibuffer.message("Button: " + haivl.name[index] + " not found.");
  }
}
haivl.doClickSeeMore = function(I){
  var document = I.buffer.document;
  var button = document.querySelector(haivl.selector.seemore);
  if(button != null){
	dom_node_click(button);
  }else {	
 	I.minibuffer.message("Button: " + haivl.name[5] + " not found.");
  }
}
interactive("haivl-new","new feeds", function(I){
  haivl.doClick(I, 0);
});
interactive("haivl-unread", "unread feeds",function(I){
  haivl.doClick(I,1);
});
interactive("haivl-vote", "vote feeds", function(I){
  haivl.doClick(I,2);
});
interactive("haivl-video", "video feeds", function(I){
  haivl.doClick(I,3);
});
interactive("haivl-hot", "hot feeds", function(I){
  haivl.doClick(I,4);
});
interactive("haivl-seemore", "see more feeds",function(I){
  haivl.doClickSeeMore(I);
})
