require("content-buffer.js");
define_keymap("haivl_keymap",$display_name="haivl keymap");
define_key(haivl_keymap, "tab",null,$fallthrough);

define_keymaps_page_mode("haivl_mode", 
       build_url_regexp($domain="haivl",
					    $allow_www = true,
					    $tlds = ["com"]),
       {normal: haivl_keymap},
       $display_name = "haivl");
//to active this mode automatically
page_mode_activate(haivl_mode);
