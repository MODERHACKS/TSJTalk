/*
  *TSJCSS JS - The javascript superset of TSJCSS ( https://moderhacks.github.io )
  *v0.1
  *February 2020 ( 1st Update )
  *By MOD ER HACKS ( Debarchito Nath ) (c) 2020 | ALL RIGHTS RESERVED
  *Released Under MIT License
*/

"use strict";

window.TSJCSS = function(val) {
  if(val === undefined) { val = {}; console.log("TSJCSS | Your TSJCSS instance is undefined, hence the output is null.") }
  document.getElementsByTagName("head")[0].innerHTML += "<style type='text/css' id='TSJCSS-CSS-Output'></style>"
  if(val.css) { if(val.css.vars === undefined) { val.css.vars = {} }; var fin; if(typeof val.css === "string") { fin = val.css } else if(val.css instanceof Object) { if(val.css.el === undefined) { val.css.el = "style" }; if(val.css.type === undefined) { val.css.type = "text/tsjcss" }; fin = document.querySelector(val.css.el+"[type='"+val.css.type+"']").innerHTML }; fin = fin.replace(/if\((.*?)\)/gm, function(_, a) { var b = a.split(","); if( TSJCSS.antiString(b[0].trim())) { return b[1].trim() } else { return b[2].trim() } }).replace(/math\(([\S\s]*?)\)/gm, function(_, a) { var b = a.replace(/px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax/gm, '').trim(), val = TSJCSS.antiString(b), unit = a.replace(/-|\+|\*|0|1|2|3|4|5|6|7|8|9\//gm, '').split(/\s/)[0]; return val.toString() + unit; }).replace(/\<\(([\S\s]*?)\)\>/gm, function (_, mat) { return TSJCSS.antiString(mat)+";"; }).replace(/\<v\(([\S\s]*?)\)\>/gm, function(_, a) { var y = "{" + a.trim().replace(/(\r\n|\n|\r)/gm,' ') + "}"; Object.assign(val.css.vars, TSJCSS.antiString(y)); return "" }).replace(/!imp/gm, "!important").replace(/\$(\w+)/gm, function(a, b) { var arg = val.css.vars; return arg[b.trim()] || a }); document.querySelector("#TSJCSS-CSS-Output").innerHTML += fin.replace(/^\s*\n/gm, "") }
  if(val.pesudo === true) {
    var all = document.querySelectorAll("*");
    for(var al = 0; al < all.length; ++al) {
      if(all[al].hasAttribute(":c")) {
        var v = all[al].getAttribute(":c")
        v.replace(/h\{([\S\s]*?)\}/, function(_, a1) {
            val.ccmc.t2 = true
            all[al].setAttribute(val.ccmc.attr, a1)
        })
      }
    }
  }
  var propertyGallery = { color : "color" , padding : "padding" , margin :"margin" , overflow : "overflow" , background : "background" , display : "display" , visibility : "visibility" , resize : "resize" , border : "border" , outline : "outline" , none : "none" , height : "height" , width : "width" , font : "font" , position : "position" , float : "float" , left : "left" , right : "right" , top : "top" , bottom :"bottom" , text : "text" , opacity : "opacity" , content : "content" , quotes : "quotes" , flex : "flex" , order : "order" , columns : "columns" , direction : "direction" , animation : "animation" , transform : "transform" , perspective : "perspective" , transition : "transition" , clear : "clear" , clip : "clip" , cursor : "cursor", clr: "color", cl : "color" , pd : "padding" , mr :"margin" , of : "overflow" , bg : "background" , dis : "display" , vis : "visibility" , res : "resize" , bd : "border" , ot : "outline" , ol : "outline", hg : "height" , wd : "width" , pos : "position" , flt : "float" , R : "right" , B :"bottom" , op : "opacity" , cnt : "content" , qt : "quotes" , ord: "order" , col : "columns", dir : "direction", anim : "animation" , trf : "transform" , per : "perspective" , tri : "transition" , cle : "clear" , cur : "cursor", fs: "font-size", tt: "text-transform", td: "text-decoration", to: "text-overflow", rad: "border-radius", br: "border-radius", bs: "box-shadow", ta: "text-align", ff: "font-family", fst: "font-style" };
  if(val.ccmc === undefined) { val.ccmc = {} } else if(val.ccmc === true) { val.ccmc = { both: true } };
  if(val.ccmc.attr) { var a = document.querySelectorAll("*"); for ( var b = 0; b < a.length; b++ ) { if( a[b].hasAttribute(val.ccmc.attr) ) { a[b].setAttribute("data-c", a[b].getAttribute(val.ccmc.attr).toString() ); }; }; };
  if(val.ccmc.extend !== undefined && val.ccmc.extend instanceof Object) { Object.assign(propertyGallery, val.ccmc.extend) }
  if(val.ccmc.execute || val.ccmc.both === true) { val.ccmc.t1 = true; val.ccmc.t2 = true };
  if(val.ccmc.t1 === true) { function applyStyle(element, style, value) { var properStyle = propertyGallery[style] || style; element.style[properStyle] = value; }; var elements = document.querySelectorAll("[class^='c:'],[class*='c:']"); elements.forEach(function (element) { var matches = element.className.matchAll(/c:(\w+)-([^\s]*)/gm); var _iteratorNormalCompletion = true; var _didIteratorError = false; var _iteratorError = undefined; try { for (var _iterator = matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) { var match = _step.value; applyStyle(element, match[1], match[2]) } } catch (err) { _didIteratorError = true; _iteratorError = err } finally { try { if (!_iteratorNormalCompletion && _iterator.return != null) { _iterator.return() } } finally { if (_didIteratorError) { throw _iteratorError } } } }) }; if(val.ccmc.t2 === true) { function applyStyle2(element, style, value) { var properStyle = propertyGallery[style] || style; element.style[properStyle] = value; }; var elements = document.querySelectorAll('[data-c]'); elements.forEach(function (element) { var matches = element.dataset.c.matchAll(/(\w+)-([^\s]*)/gm); var _iteratorNormalCompletion = true; var _didIteratorError = false; var _iteratorError = undefined; try { for (var _iterator = matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) { var match = _step.value; applyStyle2(element, match[1], match[2]); } } catch (err) { _didIteratorError = true; _iteratorError = err } finally { try { if (!_iteratorNormalCompletion && _iterator.return != null) { _iterator.return() } } finally { if (_didIteratorError) { throw _iteratorError } } } }) }
  
} 

/* TSJCSS - Helpers */
TSJCSS.antiString = function(obj) { return Function('"use strict";return (' + obj + ')')() }; TSJCSS.random = function(length) { var result = ''; var characters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$#:()=,.!?¿¡~{}[]<>&_%`^\|/*+-¢π¤ΦΔβα°•'; var charactersLength = characters.length; for (var i = 0; i < length; ++i) { result += characters.charAt(Math.floor(Math.random() * charactersLength)); }; return result }; TSJCSS.assign = function(target) { for (var i = 1; i < arguments.length; ++i) { var source = arguments[i]; for (var key in source) { if(source.hasOwnProperty(key)) { target[key] = source[key]; }; }; }; return target; }; TSJCSS.cElement = function(sel, att, val, app) { if(val===undefined){val=null}; var a = document.createElement(sel); if (sel === "input") { a.value = val; } else { a.innerHTML = val; }; if(app) { return document.getElementsByTagName(app)[0].appendChild(a) } else { document.documentElement.appendChild(a) }; Object.entries(att).forEach(function (_ref) { var _ref2 = TSJCSS.sliced(_ref, 2), key = _ref2[0], val = _ref2[1]; if ( typeof val === 'object') { TSJCSS.assign(a[key], val); } else { a[key] = val; }; }); return a; }; TSJCSS.arrayWithHoles = function(arr) { if (Array.isArray(arr)) return arr; }; TSJCSS.sliced = function(arr, i) { return TSJCSS.arrayWithHoles(arr) || TSJCSS.iterableToArrayLimit(arr, i); }; TSJCSS.iterableToArrayLimit = function(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }; TSJCSS.isBalanced = function(str) { return !str.split('').reduce(function (uptoPrevChar, thisChar) { if (thisChar === '(' || thisChar === '{' || thisChar === '[') { return ++uptoPrevChar } else if (thisChar === ')' || thisChar === '}' || thisChar === ']') { return --uptoPrevChar }; return uptoPrevChar }, 0) }; TSJCSS.consumable = function(arr) { return TSJCSS.arrayWithoutHoles(arr) || TSJCSS.iterableToArray(arr); }; TSJCSS.iterableToArray = function(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }; TSJCSS.arrayWithoutHoles =function(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }; TSJCSS.getTextInParens = function(text, index) { if (index === undefined) { index = 0 }; var result = [], level = 0, innerText = ''; for (var i = index; i < text.length; i++) { if (text[i] == '(' && level++ == 0) { result.push.apply(result, TSJCSS.consumable(TSJCSS.getTextInParens(text, i + 1)))} else if (level > 0) { if (text[i] == ')' && --level == 0) { result.push(innerText); innerText = '' } else { innerText += text[i] } } else if (text[i] == ')') break }; return result };

// End 