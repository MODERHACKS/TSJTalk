/* *TTM ( TSJ Text Markup Language ) - Just Simple And Basic *v0.01-alpha *Debarchito Nath ( MOD ER HACKS ) (c) Copyright 2020 | ALL RIGHTS RESERVED *Released Under MIT License Which Can Be Found At - https://moderhacks.github.io/LICENSE.md */ window.TTM = function(str) { "use strict"; function _fit(val) { if(val.trim() === "") { return true } else { false } }; function _exe(st) { if(st.charAt(0) !== " " && st.charAt(st.length - 1) !== " ") { return true } else { return false } }; function _ttm(val) { return val.replace(/\*(.*?)\*/gm, function(_, a) { if(_exe(a)) { return "<b>" + a + "</b>" } else { return _ } }).replace(/_(.*?)_/gm, function(_, a) { if(_exe(a)) { return "<em>" + a + "</em>" } else { return _ } }).replace(/~(.*?)~/gm, function(_, a) { if(_exe(a)) { return "<s>" + a + "</s>" } else { return _ } }).replace(/````(.*?)````/gm, function(_, a) { if(_exe(a)) { var clr = a.split(";"); return "<span style='" + clr[0].trim().replace(/&/gm, ";") + "'>" + clr[1].trim() + "</span>" } else { return _ } }).replace(/```(.*?)```/gm, function(_, a) { if(_exe(a)) { var clr = a.split(";"); return "<span style='font-family: " + clr[0].trim() + "'>" + clr[1].trim() + "</span>" } else { return _ } }).replace(/``(.*?)``/gm, function(_, a) { if(_exe(a)) { var clr = a.split(";"); return "<span style='color: " + clr[0].trim() + "'>" + clr[1].trim() + "</span>" } else { return _ } }) }; return _ttm(str) } /* Designed Basically For TSJTalk */