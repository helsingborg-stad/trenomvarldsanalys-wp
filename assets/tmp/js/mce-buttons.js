!function(){console.log(mce_hbg_buttons),"undefined"!=typeof tinymce&&tinymce.PluginManager.add("mce_hbg_buttons",function(t,n){t.addButton("mce_hbg_buttons",{text:"Button",icon:"",context:"insert",tooltip:"Add button",cmd:"mce_hbg_buttons"}),t.addCommand("mce_hbg_buttons",function(){t.windowManager.open({title:"Add button",url:mce_hbg_buttons.themeUrl+"/library/Admin/TinyMce/MceButtons/mce-buttons-template.php",width:500,height:420,buttons:[{text:"Insert",onclick:function(n){var e=jQuery(".mce-container-body.mce-window-body.mce-abs-layout iframe").contents(),o=e.find("#preview a").attr("class"),c=e.find("#btnText").val(),i=e.find("#btnLink").val(),a='<a href="'+i+'" class="'+o+'">'+c+"</a>";return t.insertContent(a),t.windowManager.close(),!0}}]},{stylesSheet:mce_hbg_buttons.styleSheet})})})}();