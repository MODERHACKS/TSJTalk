/*

 TSJ Talk 11 - Node.js

*/

const fs = require('fs');
const express = require('express');
const bp = require('body-parser');
const app = express();

var Jske=Jske||function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.super.init.apply(this,arguments)});c.init.prototype=c;c.super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r=l.WordArray=t.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=p?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,e=a.words,j=this.sigBytes;a=a.sigBytes;this.clamp();if(j%4)for(var k=0;k<a;k++)c[j+k>>>2]|=(e[k>>>2]>>>24-8*(k%4)&255)<<24-8*((j+k)%4);else if(65535<e.length)for(k=0;k<a;k+=4)c[j+k>>>2]=e[k>>>2];else c.push.apply(c,e);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4)c.push(4294967296*u.random()|0);return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2)e[j>>>3]|=parseInt(a.substr(j,
2),16)<<24-4*(j%8);return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++)e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255));return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++)e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4);return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=t.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this._minBufferSize,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k)this._doProcessBlock(e,q);q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},_createHmacHelper:function(a){return function(b,e){return(new n.HMAC.init(a,
e)).finalize(b)}}});var n=d.algo={};return d}(Math);
(function(){var u=Jske,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this._map;d.clamp();d=[];for(var r=0;r<p;r+=3)for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++)d.push(t.charAt(w>>>6*(3-v)&63));if(l=t.charAt(64))for(;d.length%4;)d.push(l);return d.join("")},parse:function(d){var l=d.length,s=this._map,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<
l;w++)if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}return p.create(t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=Jske,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;r=r.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this._hash.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),
f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,
m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,
E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},_doFinalize:function(){var b=this._data,n=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/
4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this._process();b=this._hash;n=b.words;for(a=0;4>a;a++)c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});t.MD5=v._createHelper(r);t.HmacMD5=v._createHmacHelper(r)})(Math);
(function(){var u=Jske,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++)n=s.finalize(n),s.reset();b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,
l)}})();
Jske.lib.Cipher||function(u){var p=Jske,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this._ENC_XFORM_MODE,e,a)},createDecryptor:function(e,a){return this.create(this._DEC_XFORM_MODE,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this._xformMode=e;this._key=a;this.reset()},reset:function(){t.reset.call(this);this._doReset()},process:function(e){this._append(e);return this._process()},
finalize:function(e){e&&this._append(e);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var d=0;d<b;d++)e[a+d]^=
c[d]},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this._cipher=e;this._iv=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this._prevBlock=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,
e,a,c);this._prevBlock=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4)l.push(d);c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;this._mode=c.call(a,
this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,
1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},
decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,
b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this._parse(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();
(function(){for(var u=Jske,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++)a[c]=128>c?c<<1:c<<1^283;for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,
16,32,64,128,27,54],d=d.AES=p.extend({_doReset:function(){for(var a=this._key,c=a.words,d=a.sigBytes/4,a=4*((this._nRounds=d+6)+1),e=this._keySchedule=[],j=0;j<a;j++)if(j<d)e[j]=c[j];else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}c=this._invKeySchedule=[];for(d=0;d<a;d++)j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>
8&255]]^n[l[k&255]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this._doCryptBlock(a,c,this._invKeySchedule,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},_doCryptBlock:function(a,b,c,d,e,j,l,f){for(var m=this._nRounds,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++)var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=
d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t;q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p._createHelper(d)})();

function encrypt(content, password) {
  var vpass = Jske.MD5(Buffer.from(password).toString('base64')).toString()
  return Jske.AES.encrypt(content, vpass).toString()
}

function decrypt(content, password) {
  var vpass = Jske.MD5(Buffer.from(password).toString('base64')).toString()
  return Jske.AES.decrypt(content, vpass).toString(Jske.enc.Utf8)
}

const user = "R:tsjtalk-11{user90%2}??+=)(IU(N$UDU(BY@*&$U(@*U#)(D@UJ#N&Y*U@HD*&#TB))))"
const tm = "td@JJgwnnn27638%720_@083747DU8zmow45678%$%*&#)()-032i1r08494u980-(<)*(Y&^&)"
const dt = "td*m0i(*_&YNM(U#S*(#&Y*&M)(*MS#())))9328u2m-98*&H&^%^&*Bn87h83nY*&Y76b7n7883"
const mes = "&m{wge44}341266y5)(**N9ih8un9*Y(_)(in*(U&*b8*&Y(N(*)0m9-0I9I(*u809n)(M(I)))"

function decryptStorage() {
var data = fs.readFileSync("public/storage-and-state/tsjtalk11-storage.enc.txt", { encoding: "utf8", flag: "r" })
if(data.includes("<username>") && data.includes("<message>") && data.includes("<time>") && data.includes("<date>")) {
data = data.replace(/<username>([\S\s]*?)<\/username>/gm, (_, val) => {
  return decrypt(val, user)
}).replace(/<message>([\S\s]*?)<\/message>/gm, (_, val) => {
  return decrypt(val, mes)
}).replace(/<time>([\S\s]*?)<\/time>/gm, (_, val) => {
  return decrypt(val, tm)
}).replace(/<date>([\S\s]*?)<\/date>/gm, (_, val) => {
  return decrypt(val, dt)
})
return data
}}

function GetTime() {
 var d = new Date(),
 nhour  = d.getHours(),
 nmin   = d.getMinutes(),
 ap;
 if(nhour ==  0) { ap = " AM"; nhour = 12 }
 else if(nhour <= 11) { ap = " AM" }
 else if(nhour == 12) { ap = " PM" }
 else if(nhour >= 13) { ap = " PM"; nhour -= 12 }
 if(nmin <= 9) { nmin = "0" +nmin }
 return nhour + ":" + nmin + " " + ap;
}

function GetDateDay() {
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  var mymonth = new Array(12);
  mymonth[0] = " Jan ";
  mymonth[1] = " Feb ";
  mymonth[2] = " Mar ";
  mymonth[3] = " Apr ";
  mymonth[4] = " May ";
  mymonth[5] = " Jun ";
  mymonth[6] = " Jul ";
  mymonth[7] = " Aug ";
  mymonth[8] = " Sep ";
  mymonth[9] = " Oct ";
  mymonth[10] = " Nov ";
  mymonth[11] = " Dec ";
  var dy = weekday[d.getDay()];
  var dt = d.getDate();
  var mn = mymonth[d.getMonth()];
  var yr = d.getFullYear();
  return dy + ", " + dt + mn + yr;
}

function Store(u, m) {
  fs.appendFileSync("public/storage-and-state/tsjtalk11-storage.enc.txt", `
<div class='tsj-container mes-container'>
<span id='username' class='w3-leftbar select-off'><username>${encrypt(u, user)}</username></span>
<br><br>
<div id='message' class='font-U'><message>${encrypt(m, mes)}</message></div>
<br><br>
<span id='date' class='float-L font-U select-off'><date>${encrypt(GetDateDay(), dt)}</date></span>
<span id='time' class='float-R font-U select-off'><time>${encrypt(GetTime(), tm)}</time></span>
<br>
</div>
  `)
}

var verify = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
 <title>TSJTalk 11 - Verify Yourself</title>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
 <link rel="stylesheet" href="/resources/tsj.css" />
 <link rel="stylesheet" href="/resources/animate.css" />
 <style>
   .rsubmit { color: white; background: #1370DE; outline: none; border-radius: 10px; text-shadow: 0px 0px 0.5px #FFB4F7 }
   .rsubmit:hover { background: #FF5C5C!important; color: white!important }
 </style>
</head>
<body style="background:black">
<center>
<img class="tsj-animate fadeIn" src="/images/logo_name.png" width="250" height="250" />
<form action="/verification" method="POST">
  <input type="text" autocomplete="off" name="vi" placeholder="Type verification id..." class="tsj-animate fadeIn" style="padding:10px; border-radius:10px; outline:none; color:white; border:2px solid #1370DE; background:transparent;" />
  <br><br>
  <button type="submit" class="tsj-button tsj-animate fadeIn rsubmit" name="enter" id="enter"><strong class="font-O">Verify</strong></button>
</form>
<br><br><br>
</center>
</body>
</html>`

var intruder = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
 <title>TSJTalk 11 - Invalid Verification ID</title>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
 <link rel="stylesheet" href="/resources/tsj.css" />
 <link rel="stylesheet" href="/resources/animate.css" />
 <style>
 hr {
   color: white !important;
   width: 60vw !important;
   font-weight: 800 !important;
 }
 </style>
</head>
<body class="bg-red text-white">
 <center>
 <br><br><br>
 <div class="tsj-container tsj-animate heartBeat">
   <h2>Invalid Verification ID | FATAL ERROR</h2>
   <hr>
   <br>
   <em><h4>The verification id passed was incorrect. This site can be accessed by registered users with correct verifiction id only.</h4></em>
   <br>
   <p>TSJTalk 11 (c) Debarchito Nath, 2018-${new Date().getFullYear()} | ALL RIGHTS RESERVED</p>
   <br>
 </div>
 </center>
</body>
</html>`

var username = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
 <title>TSJTalk 11 - Enter Username</title>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
 <link rel="stylesheet" href="/resources/tsj.css" />
 <link rel="stylesheet" href="/resources/animate.css" />
 <style>
   .rsubmit { color: white; background: #1370DE; outline: none; border-radius: 10px; text-shadow: 0px 0px 0.5px #FFB4F7 }
   .rsubmit:hover { background: #FF5C5C!important; color: white!important }
 </style>
</head>
<body style="background:black">
<center>
<img class="tsj-animate fadeIn" src="/images/logo_name.png" width="250" height="250" />
<form action="/register" method="POST">
  <input type="text" autocomplete="off" name="username" placeholder="Type your username..." class="tsj-animate fadeIn" style="padding:10px; border-radius:10px; outline:none; color:white; border:2px solid #1370DE; background:transparent;" />
  <br><br>
  <button type="submit" class="tsj-button tsj-animate fadeIn rsubmit" name="enter" id="enter"><strong class="font-O">Enter Discussion</strong></button>
</form>
<br><br><br>
</center>
</body>
</html>`

var iuser = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
 <title>TSJTalk 11 - Invalid Username</title>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
 <link rel="stylesheet" href="/resources/tsj.css" />
 <link rel="stylesheet" href="/resources/animate.css" />
 <style>
 hr {
   color: white !important;
   width: 60vw !important;
   font-weight: 800 !important;
 }
 </style>
</head>
<body class="bg-red text-white">
 <center>
 <br><br><br>
 <div class="tsj-container tsj-animate heartBeat">
   <h2>Invalid Username | FATAL ERROR</h2>
   <hr>
   <br>
   <em><h4>The username entered was invalid. Answer me, how can a username be nothing ?</h4></em>
   <br>
   <p>TSJTalk 11 (c) Debarchito Nath, 2018-${new Date().getFullYear()} | ALL RIGHTS RESERVED</p>
   <br>
 </div>
 </center>
</body>
</html>`


app.use(express.static('public'))
app.use(bp.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(verify)
})

app.post('/verification', (req, res) => {
  var a = req.body.vi.trim()
  if(a !== "A07042018") {
    res.send(intruder)
  } else {
    res.send(username)
  }
})

var us;

app.post('/register', (req, res) => {
  var a = req.body.username.trim()
  us = a
  if(a === "") {
    res.send(iuser)
  } else {
    fs.appendFileSync("public/storage-and-state/tsjtalk11-storage.enc.txt", `<center><div class='msgln'><span id='left' class='font-U'><username>${encrypt(a, user)}</username> joined</span><br></div></center><br>`)
    res.send(`<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
 <title>Welcome - ${a}</title>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
 <link rel="stylesheet" href="/resources/tsj.css" />
 <link rel="stylesheet" href="/resources/w3.css" />
 <link rel="stylesheet" href="/resources/animate.css" />
 <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
 <link rel="stylesheet" href="/resources/emojione.min.css" />
 <link rel="stylesheet" href="/resources/emojione.sprites.css" />
 <link rel="stylesheet" href="/resources/emojionearea.min.css" />
 <style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Oxanium|PT+Sans|Playfair+Display|Spartan|Ubuntu');
  .font-M { font-family: 'Montserrat', sans-serif; } .font-O { font-family: 'Oxanium', cursive; } .font-PS { font-family: 'PT Sans', sans-serif; } .font-PD { font-family: 'Playfair Display', serif; } .font-S { font-family: 'Spartan', sans-serif; } .font-U { font-family: 'Ubuntu', sans-serif; } .button, .submit { color: white; background: #1370DE; outline: none; border-radius: 10px; text-shadow: 0px 0px 0.5px #FFB4F7 } .button:hover, .submit:hover { background: #FF5C5C!important; color: white!important } .hide { display: none } .emoji-one { background: #e3e3e3; height: 56px; border-radius: 10px; overflow: scroll } .spinner-wrapper { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: black; z-index: 999999 } .sk-folding-cube { width: 40px; height: 40px; top:47%; left:44.5%; position: relative; -webkit-transform: rotateZ(45deg); transform: rotateZ(45deg) } @media screen and (min-width: 768px) { .sk-folding-cube { left: 47.6% } } .sk-folding-cube .sk-cube { float: left; width: 50%; height: 50%; position: relative; -webkit-transform: scale(1.1); -ms-transform: scale(1.1); transform: scale(1.1) } .sk-folding-cube .sk-cube:before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: #e3e3e3; -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both; animation: sk-foldCubeAngle 2.4s infinite linear both; -webkit-transform-origin: 100% 100%; -ms-transform-origin: 100% 100%; transform-origin: 100% 100% } .sk-folding-cube .sk-cube2 { -webkit-transform: scale(1.1) rotateZ(90deg); transform: scale(1.1) rotateZ(90deg) } .sk-folding-cube .sk-cube3 { -webkit-transform: scale(1.1) rotateZ(180deg); transform: scale(1.1) rotateZ(180deg) } .sk-folding-cube .sk-cube4 { -webkit-transform: scale(1.1) rotateZ(270deg); transform: scale(1.1) rotateZ(270deg) } .sk-folding-cube .sk-cube2:before { -webkit-animation-delay: 0.3s; animation-delay: 0.3s } .sk-folding-cube .sk-cube3:before { -webkit-animation-delay: 0.6s; animation-delay: 0.6s } .sk-folding-cube .sk-cube4:before { -webkit-animation-delay: 0.9s; animation-delay: 0.9s } @-webkit-keyframes sk-foldCubeAngle { 0%, 10% { -webkit-transform: perspective(140px) rotateX(-180deg); transform: perspective(140px) rotateX(-180deg); opacity: 0 } 25%, 75% { -webkit-transform: perspective(140px) rotateX(0deg); transform: perspective(140px) rotateX(0deg); opacity: 1 } 90%, 100% { -webkit-transform: perspective(140px) rotateY(180deg); transform: perspective(140px) rotateY(180deg); opacity: 0 } } @keyframes sk-foldCubeAngle { 0%, 10% { -webkit-transform: perspective(140px) rotateX(-180deg); transform: perspective(140px) rotateX(-180deg); opacity: 0; } 25%, 75% { -webkit-transform: perspective(140px) rotateX(0deg); transform: perspective(140px) rotateX(0deg); opacity: 1; } 90%, 100% { -webkit-transform: perspective(140px) rotateY(180deg); transform: perspective(140px) rotateY(180deg); opacity: 0 } }
  body::-webkit-scrollbar { display: none }
  .chatbox { overflow: scroll; -ms-overflow-style: none; scrollbar-width: none; margin: 1em; } .chatbox::-webkit-scrollbar { display: none } #left { text-align: center; background: #1370DE; padding: 8px; border-radius: 10px; font-size: 0.85em; } .msgln { margin: 0.5em; padding: 12px; border-radius: 10px; } .mes-container { min-width: 0px; max-width: 80%; background: #f3f3f3; border-radius: 20px; color: black; padding: 10px; border-bottom-left-radius: 0px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; margin: 2px; margin-bottom: 20px!important; } #message { font-size: 0.95em; color: #1370DE } #username, #date, #time { font-size: 0.89em; color: #777 } #username { padding: 5px; margin: 2px; border-color: green!important; color: green; border-radius: 2px }
  .emojionearea { height: 54px; border-radius: none; border-top-left-radius: 10px; color: grey; }
  #send { border-top-left-radius: 10px }
 </style>
</head>
<body class="bg-black">

<div class="spinner-wrapper">
<div class="sk-folding-cube">
  <div class="sk-cube1 sk-cube"></div>
  <div class="sk-cube2 sk-cube"></div>
  <div class="sk-cube4 sk-cube"></div>
  <div class="sk-cube3 sk-cube"></div>
</div>
</div>

<div class="tsj-conatiner c:bg-black c:clr-#e3e3e3 c:padding-10px c:position-fixed c:width-100vw nav-user" style="border: 2px solid black; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-bottom-color: #333">
 <img class="float-L c:br-50%" src="/images/logo.png" width="30" height="30" />
 <span class="float-L c:ml-5px c:mt-5px font-O select-off">TSJTalk 11</span>
 <a class="material-icons float-R c:clr-#FF282F c:mt-4px exit-session select-off">close</a>
 <a class="material-icons float-R c:mt-4px c:mr-25px ad select-off">arrow_downward</a>
 <a class="material-icons float-R c:mt-4px c:mr-25px ac select-off">account_circle</a>
</div>

<br><br><br>

<div class="chatbox">
 ${decryptStorage()}
</div>

<div id="mybox" class="w3-bottom bg-transparent">
<button id="send" class="w3-right tsj-button bg-blue text-white hover:bg-blue hover:text-white outline-none"><i class="material-icons test-white" style="width: 12vw;">send</i></button>
<textarea class="w3-left emojionearea" style="resize: none; width: 100vw; padding: 5px;" placeholder="Type in a message..." id="usermsg"></textarea>
</div>

<div class="tsj-modal tsj-animate exit-window">
<div class="w3-modal-content w3-animate-top tsj-card-4">
<header class="tsj-container bg-black w3-center w3-padding-32" style="border: 2px solid #e3e3e3">
<h3 class="w3-wide font-O c:clr-#e3e3e3 select-off">Exit Session</h3>
</header>
<br>
<div class="w3-container text-black select-off">
 <p class="font-O">Do you want to exit the session ? Don't worry, your messages won't get deleted. The next time you will be required to re-enter you username to continue disscussing, nothing more !</p><br>
 <button class="tsj-button w3-left bg-grey text-red hover:text-white hover:bg-red outline-none radius-l text-white" id="ew-e">Exit</button>
 <button class="tsj-button w3-right bg-blue hover:bg-green hover:text-white outline-none radius-l" id="ew-c">Cancel</button>
 <br><br><br>
</div>
</div>
</div>

<div class="tsj-modal tsj-animate account-window">
<div class="w3-modal-content w3-animate-top tsj-card-4">
<header class="tsj-container bg-black w3-center w3-padding-32" style="border: 2px solid #e3e3e3">
<h3 class="w3-wide font-O c:clr-#e3e3e3 select-off">Account</h3>
</header>
<br>
<div class="w3-container text-black font-O select-off">
 <b class="font-O">Your Username : </b> ${a}<br>
 <b class="font-O">TSJTalk Version : </b> v11.2.0 Make 1<br><hr>
 <center class="font-O">Made by <b class="font-O">Debarchito Nath</b><br><br><i class="font-O">Powered By Node.js</i></center>
 <br>
 <center><button class="tsj-button bg-red outline-none radius-l" id="aw-c">Close</button></center>
 <br>
</div>
</div>
</div>

<script src="/resources/jquery-3.5.0.js"></script>
<script src="/resources/jquery-2.1.0.js"></script>
<script>var $j = jQuery.noConflict(true);</script> <script> $(document).ready(function(){ console.log($().jquery); console.log($j().jquery); })</script>
<script src="/resources/jske.js"></script>
<script src="/resources/ttm.js"></script>
<script src="/resources/tsjcss.js"></script>
<script src="/resources/emojione.min.js"></script>
<script src="/resources/emojionearea.min.js"></script>

<script>
var tsjcss = new TSJCSS({ ccmc: { t1: true, extend: { pl: "padding-left", pr: "padding-right", pt: "padding-top", pb: "padding-bottom", mb: "margin-bottom", mr: "margin-right", mt: "margin-top", ml: "margin-left" } } })

document.querySelector(".chatbox").style.height = window.innerHeight - 143 + "px"

function decrypt(content, password) {
  var vpass = Jske.MD5(btoa(password)).toString()
  return Jske.AES.decrypt(content, vpass).toString(Jske.enc.Utf8)
}

var user = "${user}",
tm = "${tm}",
dt = "${dt}",
mes = "${mes}"

function loadLog() {
  var oldscrollHeight = $(".chatbox").prop("scrollHeight") - 20;
  $.ajax({
    url: "/storage-and-state/tsjtalk11-storage.enc.txt",
    cache: false,
    success: function(html){
      function decryptStorage(data) {
      data = data.replace(/<username>([\\S\\s]*?)<\\/username>/gm, (_, val) => {
        return decrypt(val, user)
      }).replace(/<message>([\\S\\s]*?)<\\/message>/gm, (_, val) => {
        return decrypt(val, mes)
      }).replace(/<time>([\\S\\s]*?)<\\/time>/gm, (_, val) => {
        return decrypt(val, tm)
      }).replace(/<date>([\\S\\s]*?)<\\/date>/gm, (_, val) => {
        return decrypt(val, dt)
      })
      return data
      }
       $(".chatbox").html(emojione.toImage(TTM(decryptStorage(html))))
       var newscrollHeight = $(".chatbox").prop("scrollHeight") - 20;
       if(newscrollHeight > oldscrollHeight) {
         $(".chatbox").animate({ scrollTop: newscrollHeight }, 'normal')
       }
    },
    error: function() {
      console.log("Failed to load and decrypt data.")
    }
  }); };

setInterval("loadLog()", 1000)

$("#usermsg").emojioneArea({ pickerPosition: "top", filtersPosition: "bottom", tonesStyle: "radio", autocomplete: true, searchPlaceholder: "TSJTalk10 Search...", searchPosition: "bottom", shortnames: true });

$("#send").click(function() {
  $.ajax({
    type: "POST",
    url: "/post",
    data: { post: $("#usermsg").val() }
  })
  $("#usermsg").data("emojioneArea").setText("");
  return false
})

$(".exit-session").click(function() {
  $(".exit-window").show()
})

$("#ew-e").click(function() {
 window.location = "http://localhost:8080?logout=true"
 $.ajax({
   type: "POST",
   url: "/user-out",
   data: { out: "${a}" }
 })
})

$("#ew-c").click(function() {
  $(".exit-window").slideUp(200)
})

$(".ac").click(function() {
  $(".account-window").show()
})

$("#aw-c").click(function() {
  $(".account-window").slideUp(200)
})

$(".chatbox").animate({ scrollTop: $('.chatbox').prop("scrollHeight")}, 200);

$(".ad").click(function() {
  $(".chatbox").animate({ scrollTop: $('.chatbox').prop("scrollHeight")}, 200);
})

$j(document).ready(function() { $j(window).on("load", function() { preloaderFadeOutTime = 1000; function hidePreloader() { var preloader = $j('.spinner-wrapper'); preloader.fadeOut(preloaderFadeOutTime); } hidePreloader(); }); });
</script>
</body>
</html>`)
  }
})

app.post('/post', (req, res) => {
  var dat = req.body.post
  if(dat.trim() !== "") {
    Store(us, dat.replace(/</gm, "&lt;"))
  }
})

app.post("/user-out", (req, res) => {
  var dat = req.body.out
  fs.appendFileSync("public/storage-and-state/tsjtalk11-storage.enc.txt", `<center><div class='msgln'><span id='left' class='font-U'><username>${encrypt(us, user)}</username> left</span><br></div></center><br>`)
})

app.all('/storage-and-state', (req, res, next) => {
  res.status(403).send({
    message: 'Access Forbidden'
  })
})

app.listen(8080, () => {
  console.log("Running TSJTalk 11 Server...")
})










// End
