import mo from"https://cdn.jsdelivr.net/npm/lil-gui@0.19/+esm";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mr="148",Rn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Dn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qo=0,Vr=1,Xo=2,go=1,jo=2,gi=3,Sn=0,ht=1,on=2,Pi=3,ln=0,$n=1,vn=2,Hr=3,Wr=4,Yo=5,jn=100,Zo=101,Jo=102,qr=103,Xr=104,$o=200,Ko=201,Qo=202,el=203,xo=204,_o=205,tl=206,nl=207,il=208,sl=209,rl=210,al=0,ol=1,ll=2,lr=3,cl=4,hl=5,ul=6,dl=7,Sr=0,fl=1,pl=2,en=0,ml=1,gl=2,xl=3,_l=4,vl=5,vo=300,ei=301,ti=302,as=303,cr=304,cs=306,hr=1e3,Gt=1001,ur=1002,vt=1003,jr=1004,Ss=1005,Nt=1006,yl=1007,yi=1008,bn=1009,Ml=1010,Sl=1011,yo=1012,bl=1013,xn=1014,_n=1015,Mi=1016,wl=1017,El=1018,Kn=1020,Tl=1021,Al=1022,Vt=1023,Cl=1024,Ll=1025,yn=1026,ni=1027,Pl=1028,Rl=1029,Dl=1030,Il=1031,Fl=1033,bs=33776,ws=33777,Es=33778,Ts=33779,Yr=35840,Zr=35841,Jr=35842,$r=35843,zl=36196,Kr=37492,Qr=37496,ea=37808,ta=37809,na=37810,ia=37811,sa=37812,ra=37813,aa=37814,oa=37815,la=37816,ca=37817,ha=37818,ua=37819,da=37820,fa=37821,pa=36492,wn=3e3,$e=3001,Nl=3200,Ol=3201,br=0,Ul=1,kt="srgb",Si="srgb-linear",As=7680,Bl=519,ma=35044,Ri=35048,ga="300 es",dr=1035;class Ln{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cs=Math.PI/180,xa=180/Math.PI;function si(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[r&255]+pt[r>>8&255]+pt[r>>16&255]+pt[r>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function mt(r,e,t){return Math.max(e,Math.min(t,r))}function kl(r,e){return(r%e+e)%e}function Ls(r,e,t){return(1-t)*r+t*e}function _a(r){return(r&r-1)===0&&r!==0}function fr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Di(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ct(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],v=n[8],p=i[0],f=i[3],M=i[6],y=i[1],g=i[4],_=i[7],S=i[2],A=i[5],L=i[8];return s[0]=o*p+a*y+c*S,s[3]=o*f+a*g+c*A,s[6]=o*M+a*_+c*L,s[1]=l*p+h*y+u*S,s[4]=l*f+h*g+u*A,s[7]=l*M+h*_+u*L,s[2]=d*p+m*y+v*S,s[5]=d*f+m*g+v*A,s[8]=d*M+m*_+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,v=t*u+n*d+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=u*p,e[1]=(i*l-h*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(h*t-i*c)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ps.makeScale(e,t)),this}rotate(e){return this.premultiply(Ps.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ps.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ps=new Dt;function Mo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function bi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function is(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Rs={[kt]:{[Si]:Mn},[Si]:{[kt]:is}},xt={legacyMode:!0,get workingColorSpace(){return Si},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Rs[e]&&Rs[e][t]!==void 0){const n=Rs[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},So={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},Ot={h:0,s:0,l:0},Ii={h:0,s:0,l:0};function Ds(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Fi(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=xt.workingColorSpace){if(e=kl(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ds(o,s,e+1/3),this.g=Ds(o,s,e),this.b=Ds(o,s,e-1/3)}return xt.toWorkingColorSpace(this,i),this}setStyle(e,t=kt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,xt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,xt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,xt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,xt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=kt){const n=So[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return xt.fromWorkingColorSpace(Fi(this,rt),e),mt(rt.r*255,0,255)<<16^mt(rt.g*255,0,255)<<8^mt(rt.b*255,0,255)<<0}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(Fi(this,rt),t);const n=rt.r,i=rt.g,s=rt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(Fi(this,rt),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=kt){return xt.fromWorkingColorSpace(Fi(this,rt),e),e!==kt?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${rt.r*255|0},${rt.g*255|0},${rt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ot),Ot.h+=e,Ot.s+=t,Ot.l+=n,this.setHSL(Ot.h,Ot.s,Ot.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ot),e.getHSL(Ii);const n=Ls(Ot.h,Ii.h,t),i=Ls(Ot.s,Ii.s,t),s=Ls(Ot.l,Ii.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ve.NAMES=So;let In;class bo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{In===void 0&&(In=bi("canvas")),In.width=e.width,In.height=e.height;const n=In.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=In}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Mn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mn(t[n]/255)*255):t[n]=Mn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class wo{constructor(e=null){this.isSource=!0,this.uuid=si(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Is(i[o].image)):s.push(Is(i[o]))}else s=Is(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Is(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gl=0;class St extends Ln{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Gt,i=Gt,s=Nt,o=yi,a=Vt,c=bn,l=St.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=si(),this.name="",this.source=new wo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hr:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hr:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=vo;St.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],v=c[9],p=c[2],f=c[6],M=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(v+f)<.1&&Math.abs(l+m+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(l+1)/2,_=(m+1)/2,S=(M+1)/2,A=(h+d)/4,L=(u+p)/4,x=(v+f)/4;return g>_&&g>S?g<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(g),i=A/n,s=L/n):_>S?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=A/i,s=x/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=L/s,i=x/s),this.set(n,i,s,t),this}let y=Math.sqrt((f-v)*(f-v)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-v)/y,this.y=(u-p)/y,this.z=(d-h)/y,this.w=Math.acos((l+m+M-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class En extends Ln{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Eo extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vl extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],m=s[o+1],v=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=p;return}if(u!==p||c!==d||l!==m||h!==v){let f=1-a;const M=c*d+l*m+h*v+u*p,y=M>=0?1:-1,g=1-M*M;if(g>Number.EPSILON){const S=Math.sqrt(g),A=Math.atan2(S,M*y);f=Math.sin(f*A)/S,a=Math.sin(a*A)/S}const _=a*y;if(c=c*f+d*_,l=l*f+m*_,h=h*f+v*_,u=u*f+p*_,f===1-a){const S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+h*u+c*m-l*d,e[t+1]=c*v+h*d+l*u-a*m,e[t+2]=l*v+h*m+a*d-c*u,e[t+3]=h*v-a*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),m=c(i/2),v=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*v,this._y=l*m*u-d*h*v,this._z=l*h*v+d*m*u,this._w=l*h*u-d*m*v;break;case"YXZ":this._x=d*h*u+l*m*v,this._y=l*m*u-d*h*v,this._z=l*h*v-d*m*u,this._w=l*h*u+d*m*v;break;case"ZXY":this._x=d*h*u-l*m*v,this._y=l*m*u+d*h*v,this._z=l*h*v+d*m*u,this._w=l*h*u-d*m*v;break;case"ZYX":this._x=d*h*u-l*m*v,this._y=l*m*u+d*h*v,this._z=l*h*v-d*m*u,this._w=l*h*u+d*m*v;break;case"YZX":this._x=d*h*u+l*m*v,this._y=l*m*u+d*h*v,this._z=l*h*v-d*m*u,this._w=l*h*u-d*m*v;break;case"XZY":this._x=d*h*u-l*m*v,this._y=l*m*u-d*h*v,this._z=l*h*v+d*m*u,this._w=l*h*u+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(va.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(va.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,h=c*n+a*t-s*i,u=c*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=l*c+d*-s+h*-a-u*-o,this.y=h*c+d*-o+u*-s-l*-a,this.z=u*c+d*-a+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fs.copy(this).projectOnVector(e),this.sub(Fs)}reflect(e){return this.sub(Fs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fs=new F,va=new Tn;class Ai{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],u=e[c+1],d=e[c+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),u=e.getY(c),d=e.getZ(c);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)un.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(un)}else n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox),zs.applyMatrix4(e.matrixWorld),this.union(zs);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oi),zi.subVectors(this.max,oi),Fn.subVectors(e.a,oi),zn.subVectors(e.b,oi),Nn.subVectors(e.c,oi),nn.subVectors(zn,Fn),sn.subVectors(Nn,zn),dn.subVectors(Fn,Nn);let t=[0,-nn.z,nn.y,0,-sn.z,sn.y,0,-dn.z,dn.y,nn.z,0,-nn.x,sn.z,0,-sn.x,dn.z,0,-dn.x,-nn.y,nn.x,0,-sn.y,sn.x,0,-dn.y,dn.x,0];return!Ns(t,Fn,zn,Nn,zi)||(t=[1,0,0,0,1,0,0,0,1],!Ns(t,Fn,zn,Nn,zi))?!1:(Ni.crossVectors(nn,sn),t=[Ni.x,Ni.y,Ni.z],Ns(t,Fn,zn,Nn,zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return un.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(un).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jt=[new F,new F,new F,new F,new F,new F,new F,new F],un=new F,zs=new Ai,Fn=new F,zn=new F,Nn=new F,nn=new F,sn=new F,dn=new F,oi=new F,zi=new F,Ni=new F,fn=new F;function Ns(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){fn.fromArray(r,s);const a=i.x*Math.abs(fn.x)+i.y*Math.abs(fn.y)+i.z*Math.abs(fn.z),c=e.dot(fn),l=t.dot(fn),h=n.dot(fn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Hl=new Ai,li=new F,Os=new F;class hs{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hl.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;li.subVectors(e,this.center);const t=li.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(li,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Os.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(li.copy(e.center).add(Os)),this.expandByPoint(li.copy(e.center).sub(Os))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yt=new F,Us=new F,Oi=new F,rn=new F,Bs=new F,Ui=new F,ks=new F;class wr{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.direction).multiplyScalar(t).add(this.origin),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Us.copy(e).add(t).multiplyScalar(.5),Oi.copy(t).sub(e).normalize(),rn.copy(this.origin).sub(Us);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Oi),a=rn.dot(this.direction),c=-rn.dot(Oi),l=rn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,v;if(h>0)if(u=o*c-a,d=o*a-c,v=s*h,u>=0)if(d>=-v)if(d<=v){const p=1/h;u*=p,d*=p,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-v?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=v?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Oi).multiplyScalar(d).add(Us),m}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const n=Yt.dot(this.direction),i=Yt.dot(Yt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,n,i,s){Bs.subVectors(t,e),Ui.subVectors(n,e),ks.crossVectors(Bs,Ui);let o=this.direction.dot(ks),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rn.subVectors(this.origin,e);const c=a*this.direction.dot(Ui.crossVectors(rn,Ui));if(c<0)return null;const l=a*this.direction.dot(Bs.cross(rn));if(l<0||c+l>o)return null;const h=-a*rn.dot(ks);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,h,u,d,m,v,p,f){const M=this.elements;return M[0]=e,M[4]=t,M[8]=n,M[12]=i,M[1]=s,M[5]=o,M[9]=a,M[13]=c,M[2]=l,M[6]=h,M[10]=u,M[14]=d,M[3]=m,M[7]=v,M[11]=p,M[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/On.setFromMatrixColumn(e,0).length(),s=1/On.setFromMatrixColumn(e,1).length(),o=1/On.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,m=o*u,v=a*h,p=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+v*l,t[5]=d-p*l,t[9]=-a*c,t[2]=p-d*l,t[6]=v+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,m=c*u,v=l*h,p=l*u;t[0]=d+p*a,t[4]=v*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-v,t[6]=p+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,m=c*u,v=l*h,p=l*u;t[0]=d-p*a,t[4]=-o*u,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*h,t[9]=p-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,m=o*u,v=a*h,p=a*u;t[0]=c*h,t[4]=v*l-m,t[8]=d*l+p,t[1]=c*u,t[5]=p*l+d,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,v=a*c,p=a*l;t[0]=c*h,t[4]=p-d*u,t[8]=v*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+v,t[10]=d-p*u}else if(e.order==="XZY"){const d=o*c,m=o*l,v=a*c,p=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+p,t[5]=o*h,t[9]=m*u-v,t[2]=v*u-m,t[6]=a*h,t[10]=p*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wl,e,ql)}lookAt(e,t,n){const i=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),an.crossVectors(n,Lt),an.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),an.crossVectors(n,Lt)),an.normalize(),Bi.crossVectors(Lt,an),i[0]=an.x,i[4]=Bi.x,i[8]=Lt.x,i[1]=an.y,i[5]=Bi.y,i[9]=Lt.y,i[2]=an.z,i[6]=Bi.z,i[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],v=n[2],p=n[6],f=n[10],M=n[14],y=n[3],g=n[7],_=n[11],S=n[15],A=i[0],L=i[4],x=i[8],E=i[12],P=i[1],N=i[5],O=i[9],I=i[13],R=i[2],G=i[6],Y=i[10],te=i[14],X=i[3],re=i[7],ee=i[11],B=i[15];return s[0]=o*A+a*P+c*R+l*X,s[4]=o*L+a*N+c*G+l*re,s[8]=o*x+a*O+c*Y+l*ee,s[12]=o*E+a*I+c*te+l*B,s[1]=h*A+u*P+d*R+m*X,s[5]=h*L+u*N+d*G+m*re,s[9]=h*x+u*O+d*Y+m*ee,s[13]=h*E+u*I+d*te+m*B,s[2]=v*A+p*P+f*R+M*X,s[6]=v*L+p*N+f*G+M*re,s[10]=v*x+p*O+f*Y+M*ee,s[14]=v*E+p*I+f*te+M*B,s[3]=y*A+g*P+_*R+S*X,s[7]=y*L+g*N+_*G+S*re,s[11]=y*x+g*O+_*Y+S*ee,s[15]=y*E+g*I+_*te+S*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],v=e[3],p=e[7],f=e[11],M=e[15];return v*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*m-n*c*m)+p*(+t*c*m-t*l*d+s*o*d-i*o*m+i*l*h-s*c*h)+f*(+t*l*u-t*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+M*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],v=e[12],p=e[13],f=e[14],M=e[15],y=u*f*l-p*d*l+p*c*m-a*f*m-u*c*M+a*d*M,g=v*d*l-h*f*l-v*c*m+o*f*m+h*c*M-o*d*M,_=h*p*l-v*u*l+v*a*m-o*p*m-h*a*M+o*u*M,S=v*u*c-h*p*c-v*a*d+o*p*d+h*a*f-o*u*f,A=t*y+n*g+i*_+s*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=y*L,e[1]=(p*d*s-u*f*s-p*i*m+n*f*m+u*i*M-n*d*M)*L,e[2]=(a*f*s-p*c*s+p*i*l-n*f*l-a*i*M+n*c*M)*L,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*m-n*c*m)*L,e[4]=g*L,e[5]=(h*f*s-v*d*s+v*i*m-t*f*m-h*i*M+t*d*M)*L,e[6]=(v*c*s-o*f*s-v*i*l+t*f*l+o*i*M-t*c*M)*L,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*m+t*c*m)*L,e[8]=_*L,e[9]=(v*u*s-h*p*s-v*n*m+t*p*m+h*n*M-t*u*M)*L,e[10]=(o*p*s-v*a*s+v*n*l-t*p*l-o*n*M+t*a*M)*L,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*m-t*a*m)*L,e[12]=S*L,e[13]=(h*p*i-v*u*i+v*n*d-t*p*d-h*n*f+t*u*f)*L,e[14]=(v*a*i-o*p*i-v*n*c+t*p*c+o*n*f-t*a*f)*L,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,v=s*u,p=o*h,f=o*u,M=a*u,y=c*l,g=c*h,_=c*u,S=n.x,A=n.y,L=n.z;return i[0]=(1-(p+M))*S,i[1]=(m+_)*S,i[2]=(v-g)*S,i[3]=0,i[4]=(m-_)*A,i[5]=(1-(d+M))*A,i[6]=(f+y)*A,i[7]=0,i[8]=(v+g)*L,i[9]=(f-y)*L,i[10]=(1-(d+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=On.set(i[0],i[1],i[2]).length();const o=On.set(i[4],i[5],i[6]).length(),a=On.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ut.copy(this);const l=1/s,h=1/o,u=1/a;return Ut.elements[0]*=l,Ut.elements[1]*=l,Ut.elements[2]*=l,Ut.elements[4]*=h,Ut.elements[5]*=h,Ut.elements[6]*=h,Ut.elements[8]*=u,Ut.elements[9]*=u,Ut.elements[10]*=u,t.setFromRotationMatrix(Ut),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,c=1/(t-e),l=1/(n-i),h=1/(o-s),u=(t+e)*c,d=(n+i)*l,m=(o+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const On=new F,Ut=new nt,Wl=new F(0,0,0),ql=new F(1,1,1),an=new F,Bi=new F,Lt=new F,ya=new nt,Ma=new Tn;class Ci{constructor(e=0,t=0,n=0,i=Ci.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ya.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ya,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ci.DefaultOrder="XYZ";Ci.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Er{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xl=0;const Sa=new F,Un=new Tn,Zt=new nt,ki=new F,ci=new F,jl=new F,Yl=new Tn,ba=new F(1,0,0),wa=new F(0,1,0),Ea=new F(0,0,1),Zl={type:"added"},Ta={type:"removed"};class bt extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DefaultUp.clone();const e=new F,t=new Ci,n=new Tn,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new Dt}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=bt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=bt.DefaultMatrixWorldAutoUpdate,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.multiply(Un),this}rotateOnWorldAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.premultiply(Un),this}rotateX(e){return this.rotateOnAxis(ba,e)}rotateY(e){return this.rotateOnAxis(wa,e)}rotateZ(e){return this.rotateOnAxis(Ea,e)}translateOnAxis(e,t){return Sa.copy(e).applyQuaternion(this.quaternion),this.position.add(Sa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ba,e)}translateY(e){return this.translateOnAxis(wa,e)}translateZ(e){return this.translateOnAxis(Ea,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ki.copy(e):ki.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt(ci,ki,this.up):Zt.lookAt(ki,ci,this.up),this.quaternion.setFromRotationMatrix(Zt),i&&(Zt.extractRotation(i.matrixWorld),Un.setFromRotationMatrix(Zt),this.quaternion.premultiply(Un.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ta)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ta)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,e,jl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,Yl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DefaultUp=new F(0,1,0);bt.DefaultMatrixAutoUpdate=!0;bt.DefaultMatrixWorldAutoUpdate=!0;const Bt=new F,Jt=new F,Gs=new F,$t=new F,Bn=new F,kn=new F,Aa=new F,Vs=new F,Hs=new F,Ws=new F;class Qt{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bt.subVectors(e,t),i.cross(Bt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Bt.subVectors(i,t),Jt.subVectors(n,t),Gs.subVectors(e,t);const o=Bt.dot(Bt),a=Bt.dot(Jt),c=Bt.dot(Gs),l=Jt.dot(Jt),h=Jt.dot(Gs),u=o*l-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,m=(l*c-a*h)*d,v=(o*h-a*c)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$t),$t.x>=0&&$t.y>=0&&$t.x+$t.y<=1}static getUV(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,$t),c.set(0,0),c.addScaledVector(s,$t.x),c.addScaledVector(o,$t.y),c.addScaledVector(a,$t.z),c}static isFrontFacing(e,t,n,i){return Bt.subVectors(n,t),Jt.subVectors(e,t),Bt.cross(Jt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),Bt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Qt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Bn.subVectors(i,n),kn.subVectors(s,n),Vs.subVectors(e,n);const c=Bn.dot(Vs),l=kn.dot(Vs);if(c<=0&&l<=0)return t.copy(n);Hs.subVectors(e,i);const h=Bn.dot(Hs),u=kn.dot(Hs);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Bn,o);Ws.subVectors(e,s);const m=Bn.dot(Ws),v=kn.dot(Ws);if(v>=0&&m<=v)return t.copy(s);const p=m*l-c*v;if(p<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(kn,a);const f=h*v-m*u;if(f<=0&&u-h>=0&&m-v>=0)return Aa.subVectors(s,i),a=(u-h)/(u-h+(m-v)),t.copy(i).addScaledVector(Aa,a);const M=1/(f+p+d);return o=p*M,a=d*M,t.copy(n).addScaledVector(Bn,o).addScaledVector(kn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Jl=0;class Pn extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=si(),this.name="",this.type="Material",this.blending=$n,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=xo,this.blendDst=_o,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$n&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rt extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new F,Gi=new ge;class Mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ma,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gi.fromBufferAttribute(this,t),Gi.applyMatrix3(e),this.setXY(t,Gi.x,Gi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ma&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class To extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ao extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $l=0;const zt=new nt,qs=new bt,Gn=new F,Pt=new Ai,hi=new Ai,ct=new F;class Et extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mo(e)?Ao:To)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return qs.lookAt(e),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gn).negate(),this.translate(Gn.x,Gn.y,Gn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Pt.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];hi.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(Pt.min,hi.min),Pt.expandByPoint(ct),ct.addVectors(Pt.max,hi.max),Pt.expandByPoint(ct)):(Pt.expandByPoint(hi.min),Pt.expandByPoint(hi.max))}Pt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ct.fromBufferAttribute(a,l),c&&(Gn.fromBufferAttribute(e,l),ct.add(Gn)),i=Math.max(i,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let P=0;P<a;P++)l[P]=new F,h[P]=new F;const u=new F,d=new F,m=new F,v=new ge,p=new ge,f=new ge,M=new F,y=new F;function g(P,N,O){u.fromArray(i,P*3),d.fromArray(i,N*3),m.fromArray(i,O*3),v.fromArray(o,P*2),p.fromArray(o,N*2),f.fromArray(o,O*2),d.sub(u),m.sub(u),p.sub(v),f.sub(v);const I=1/(p.x*f.y-f.x*p.y);isFinite(I)&&(M.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(I),y.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(I),l[P].add(M),l[N].add(M),l[O].add(M),h[P].add(y),h[N].add(y),h[O].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let P=0,N=_.length;P<N;++P){const O=_[P],I=O.start,R=O.count;for(let G=I,Y=I+R;G<Y;G+=3)g(n[G+0],n[G+1],n[G+2])}const S=new F,A=new F,L=new F,x=new F;function E(P){L.fromArray(s,P*3),x.copy(L);const N=l[P];S.copy(N),S.sub(L.multiplyScalar(L.dot(N))).normalize(),A.crossVectors(x,N);const I=A.dot(h[P])<0?-1:1;c[P*4]=S.x,c[P*4+1]=S.y,c[P*4+2]=S.z,c[P*4+3]=I}for(let P=0,N=_.length;P<N;++P){const O=_[P],I=O.start,R=O.count;for(let G=I,Y=I+R;G<Y;G+=3)E(n[G+0]),E(n[G+1]),E(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new F,s=new F,o=new F,a=new F,c=new F,l=new F,h=new F,u=new F;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let m=0,v=0;for(let p=0,f=c.length;p<f;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*h;for(let M=0;M<h;M++)d[v++]=l[m++]}return new Mt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ca=new nt,Vn=new wr,Xs=new hs,ui=new F,di=new F,fi=new F,js=new F,Vi=new F,Hi=new ge,Wi=new ge,qi=new ge,Ys=new F,Xi=new F;class Ze extends bt{constructor(e=new Et,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Vi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(js.fromBufferAttribute(u,e),o?Vi.addScaledVector(js,h):Vi.addScaledVector(js.sub(t),h))}t.add(Vi)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),e.ray.intersectsSphere(Xs)===!1)||(Ca.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(Ca),n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,u=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,v=u.length;m<v;m++){const p=u[m],f=i[p.materialIndex],M=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let g=M,_=y;g<_;g+=3){const S=a.getX(g),A=a.getX(g+1),L=a.getX(g+2);o=ji(this,f,e,Vn,l,h,S,A,L),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=m,f=v;p<f;p+=3){const M=a.getX(p),y=a.getX(p+1),g=a.getX(p+2);o=ji(this,i,e,Vn,l,h,M,y,g),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,v=u.length;m<v;m++){const p=u[m],f=i[p.materialIndex],M=Math.max(p.start,d.start),y=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let g=M,_=y;g<_;g+=3){const S=g,A=g+1,L=g+2;o=ji(this,f,e,Vn,l,h,S,A,L),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let p=m,f=v;p<f;p+=3){const M=p,y=p+1,g=p+2;o=ji(this,i,e,Vn,l,h,M,y,g),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Kl(r,e,t,n,i,s,o,a){let c;if(e.side===ht?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Sn,a),c===null)return null;Xi.copy(a),Xi.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Xi);return l<t.near||l>t.far?null:{distance:l,point:Xi.clone(),object:r}}function ji(r,e,t,n,i,s,o,a,c){r.getVertexPosition(o,ui),r.getVertexPosition(a,di),r.getVertexPosition(c,fi);const l=Kl(r,e,t,n,ui,di,fi,Ys);if(l){i&&(Hi.fromBufferAttribute(i,o),Wi.fromBufferAttribute(i,a),qi.fromBufferAttribute(i,c),l.uv=Qt.getUV(Ys,ui,di,fi,Hi,Wi,qi,new ge)),s&&(Hi.fromBufferAttribute(s,o),Wi.fromBufferAttribute(s,a),qi.fromBufferAttribute(s,c),l.uv2=Qt.getUV(Ys,ui,di,fi,Hi,Wi,qi,new ge));const h={a:o,b:a,c,normal:new F,materialIndex:0};Qt.getNormal(ui,di,fi,h.normal),l.face=h}return l}class Li extends Et{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,m=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function v(p,f,M,y,g,_,S,A,L,x,E){const P=_/L,N=S/x,O=_/2,I=S/2,R=A/2,G=L+1,Y=x+1;let te=0,X=0;const re=new F;for(let ee=0;ee<Y;ee++){const B=ee*N-I;for(let V=0;V<G;V++){const K=V*P-O;re[p]=K*y,re[f]=B*g,re[M]=R,l.push(re.x,re.y,re.z),re[p]=0,re[f]=0,re[M]=A>0?1:-1,h.push(re.x,re.y,re.z),u.push(V/L),u.push(1-ee/x),te+=1}}for(let ee=0;ee<x;ee++)for(let B=0;B<L;B++){const V=d+B+G*ee,K=d+B+G*(ee+1),oe=d+(B+1)+G*(ee+1),he=d+(B+1)+G*ee;c.push(V,K,he),c.push(K,oe,he),X+=6}a.addGroup(m,X,E),m+=X,d+=te}}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ii(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function _t(r){const e={};for(let t=0;t<r.length;t++){const n=ii(r[t]);for(const i in n)e[i]=n[i]}return e}function Ql(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Co(r){return r.getRenderTarget()===null&&r.outputEncoding===$e?kt:Si}const ec={clone:ii,merge:_t};var tc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tc,this.fragmentShader=nc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ii(e.uniforms),this.uniformsGroups=Ql(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Lo extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yt extends Lo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hn=-90,Wn=1;class ic extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new yt(Hn,Wn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new yt(Hn,Wn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new yt(Hn,Wn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new yt(Hn,Wn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new yt(Hn,Wn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new yt(Hn,Wn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=en,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Po extends St{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ei,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sc extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Po(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Li(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ht,blending:ln});s.uniforms.tEquirect.value=t;const o=new Ze(i,s),a=t.minFilter;return t.minFilter===yi&&(t.minFilter=Nt),new ic(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Zs=new F,rc=new F,ac=new Dt;class pn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Zs.subVectors(n,t).cross(rc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Zs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ac.getNormalMatrix(e),i=this.coplanarPoint(Zs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new hs,Yi=new F;class Tr{constructor(e=new pn,t=new pn,n=new pn,i=new pn,s=new pn,o=new pn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],m=n[9],v=n[10],p=n[11],f=n[12],M=n[13],y=n[14],g=n[15];return t[0].setComponents(a-i,u-c,p-d,g-f).normalize(),t[1].setComponents(a+i,u+c,p+d,g+f).normalize(),t[2].setComponents(a+s,u+l,p+m,g+M).normalize(),t[3].setComponents(a-s,u-l,p-m,g-M).normalize(),t[4].setComponents(a-o,u-h,p-v,g-y).normalize(),t[5].setComponents(a+o,u+h,p+v,g+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Yi.x=i.normal.x>0?e.max.x:e.min.x,Yi.y=i.normal.y>0?e.max.y:e.min.y,Yi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ro(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function oc(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,u,d),l.onUploadCallback();let v;if(u instanceof Float32Array)v=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(u instanceof Int16Array)v=5122;else if(u instanceof Uint32Array)v=5125;else if(u instanceof Int32Array)v=5124;else if(u instanceof Int8Array)v=5120;else if(u instanceof Uint8Array)v=5121;else if(u instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){const d=h.array,m=h.updateRange;r.bindBuffer(u,l),m.count===-1?r.bufferSubData(u,0,d):(t?r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class us extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,m=[],v=[],p=[],f=[];for(let M=0;M<h;M++){const y=M*d-o;for(let g=0;g<l;g++){const _=g*u-s;v.push(_,-y,0),p.push(0,0,1),f.push(g/a),f.push(1-M/c)}}for(let M=0;M<c;M++)for(let y=0;y<a;y++){const g=y+l*M,_=y+l*(M+1),S=y+1+l*(M+1),A=y+1+l*M;m.push(g,_,A),m.push(_,S,A)}this.setIndex(m),this.setAttribute("position",new It(v,3)),this.setAttribute("normal",new It(p,3)),this.setAttribute("uv",new It(f,2))}static fromJSON(e){return new us(e.width,e.height,e.widthSegments,e.heightSegments)}}var lc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,cc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,uc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pc="vec3 transformed = vec3( position );",mc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,xc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_c=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,yc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ec=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ac=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Cc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Dc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ic=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fc="gl_FragColor = linearToOutputTexel( gl_FragColor );",zc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Oc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$c=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Kc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,th=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ih=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ah=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,oh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ch=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,uh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ph=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_h=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Sh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Th=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ah=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ch=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Lh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ph=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ih=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bh=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,kh=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gh=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Vh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,qh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$h=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Kh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Qh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,eu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,tu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,nu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,iu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,su=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ru=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const au=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ou=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,du=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_u=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yu=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Su=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Eu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Au=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ru=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ou=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Uu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ge={alphamap_fragment:lc,alphamap_pars_fragment:cc,alphatest_fragment:hc,alphatest_pars_fragment:uc,aomap_fragment:dc,aomap_pars_fragment:fc,begin_vertex:pc,beginnormal_vertex:mc,bsdfs:gc,iridescence_fragment:xc,bumpmap_pars_fragment:_c,clipping_planes_fragment:vc,clipping_planes_pars_fragment:yc,clipping_planes_pars_vertex:Mc,clipping_planes_vertex:Sc,color_fragment:bc,color_pars_fragment:wc,color_pars_vertex:Ec,color_vertex:Tc,common:Ac,cube_uv_reflection_fragment:Cc,defaultnormal_vertex:Lc,displacementmap_pars_vertex:Pc,displacementmap_vertex:Rc,emissivemap_fragment:Dc,emissivemap_pars_fragment:Ic,encodings_fragment:Fc,encodings_pars_fragment:zc,envmap_fragment:Nc,envmap_common_pars_fragment:Oc,envmap_pars_fragment:Uc,envmap_pars_vertex:Bc,envmap_physical_pars_fragment:$c,envmap_vertex:kc,fog_vertex:Gc,fog_pars_vertex:Vc,fog_fragment:Hc,fog_pars_fragment:Wc,gradientmap_pars_fragment:qc,lightmap_fragment:Xc,lightmap_pars_fragment:jc,lights_lambert_fragment:Yc,lights_lambert_pars_fragment:Zc,lights_pars_begin:Jc,lights_toon_fragment:Kc,lights_toon_pars_fragment:Qc,lights_phong_fragment:eh,lights_phong_pars_fragment:th,lights_physical_fragment:nh,lights_physical_pars_fragment:ih,lights_fragment_begin:sh,lights_fragment_maps:rh,lights_fragment_end:ah,logdepthbuf_fragment:oh,logdepthbuf_pars_fragment:lh,logdepthbuf_pars_vertex:ch,logdepthbuf_vertex:hh,map_fragment:uh,map_pars_fragment:dh,map_particle_fragment:fh,map_particle_pars_fragment:ph,metalnessmap_fragment:mh,metalnessmap_pars_fragment:gh,morphcolor_vertex:xh,morphnormal_vertex:_h,morphtarget_pars_vertex:vh,morphtarget_vertex:yh,normal_fragment_begin:Mh,normal_fragment_maps:Sh,normal_pars_fragment:bh,normal_pars_vertex:wh,normal_vertex:Eh,normalmap_pars_fragment:Th,clearcoat_normal_fragment_begin:Ah,clearcoat_normal_fragment_maps:Ch,clearcoat_pars_fragment:Lh,iridescence_pars_fragment:Ph,output_fragment:Rh,packing:Dh,premultiplied_alpha_fragment:Ih,project_vertex:Fh,dithering_fragment:zh,dithering_pars_fragment:Nh,roughnessmap_fragment:Oh,roughnessmap_pars_fragment:Uh,shadowmap_pars_fragment:Bh,shadowmap_pars_vertex:kh,shadowmap_vertex:Gh,shadowmask_pars_fragment:Vh,skinbase_vertex:Hh,skinning_pars_vertex:Wh,skinning_vertex:qh,skinnormal_vertex:Xh,specularmap_fragment:jh,specularmap_pars_fragment:Yh,tonemapping_fragment:Zh,tonemapping_pars_fragment:Jh,transmission_fragment:$h,transmission_pars_fragment:Kh,uv_pars_fragment:Qh,uv_pars_vertex:eu,uv_vertex:tu,uv2_pars_fragment:nu,uv2_pars_vertex:iu,uv2_vertex:su,worldpos_vertex:ru,background_vert:au,background_frag:ou,backgroundCube_vert:lu,backgroundCube_frag:cu,cube_vert:hu,cube_frag:uu,depth_vert:du,depth_frag:fu,distanceRGBA_vert:pu,distanceRGBA_frag:mu,equirect_vert:gu,equirect_frag:xu,linedashed_vert:_u,linedashed_frag:vu,meshbasic_vert:yu,meshbasic_frag:Mu,meshlambert_vert:Su,meshlambert_frag:bu,meshmatcap_vert:wu,meshmatcap_frag:Eu,meshnormal_vert:Tu,meshnormal_frag:Au,meshphong_vert:Cu,meshphong_frag:Lu,meshphysical_vert:Pu,meshphysical_frag:Ru,meshtoon_vert:Du,meshtoon_frag:Iu,points_vert:Fu,points_frag:zu,shadow_vert:Nu,shadow_frag:Ou,sprite_vert:Uu,sprite_frag:Bu},xe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Dt},uv2Transform:{value:new Dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}}},Wt={basic:{uniforms:_t([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:_t([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:_t([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:_t([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:_t([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:_t([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:_t([xe.points,xe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:_t([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:_t([xe.common,xe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:_t([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:_t([xe.sprite,xe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:_t([xe.common,xe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:_t([xe.lights,xe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Wt.physical={uniforms:_t([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ge(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Zi={r:0,b:0,g:0};function ku(r,e,t,n,i,s,o){const a=new Ve(0);let c=s===!0?0:1,l,h,u=null,d=0,m=null;function v(f,M){let y=!1,g=M.isScene===!0?M.background:null;g&&g.isTexture&&(g=(M.backgroundBlurriness>0?t:e).get(g));const _=r.xr,S=_.getSession&&_.getSession();S&&S.environmentBlendMode==="additive"&&(g=null),g===null?p(a,c):g&&g.isColor&&(p(g,1),y=!0),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),g&&(g.isCubeTexture||g.mapping===cs)?(h===void 0&&(h=new Ze(new Li(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ii(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:ht,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,L,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=g.encoding!==$e,(u!==g||d!==g.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=g,d=g.version,m=r.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new Ze(new us(2,2),new An({name:"BackgroundMaterial",uniforms:ii(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=g.encoding!==$e,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||d!==g.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,u=g,d=g.version,m=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,M){f.getRGB(Zi,Co(r)),n.buffers.color.setClear(Zi.r,Zi.g,Zi.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(f,M=1){a.set(f),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(a,c)},render:v}}function Gu(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=f(null);let l=c,h=!1;function u(R,G,Y,te,X){let re=!1;if(o){const ee=p(te,Y,G);l!==ee&&(l=ee,m(l.object)),re=M(R,te,Y,X),re&&y(R,te,Y,X)}else{const ee=G.wireframe===!0;(l.geometry!==te.id||l.program!==Y.id||l.wireframe!==ee)&&(l.geometry=te.id,l.program=Y.id,l.wireframe=ee,re=!0)}X!==null&&t.update(X,34963),(re||h)&&(h=!1,x(R,G,Y,te),X!==null&&r.bindBuffer(34963,t.get(X).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function v(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,G,Y){const te=Y.wireframe===!0;let X=a[R.id];X===void 0&&(X={},a[R.id]=X);let re=X[G.id];re===void 0&&(re={},X[G.id]=re);let ee=re[te];return ee===void 0&&(ee=f(d()),re[te]=ee),ee}function f(R){const G=[],Y=[],te=[];for(let X=0;X<i;X++)G[X]=0,Y[X]=0,te[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:te,object:R,attributes:{},index:null}}function M(R,G,Y,te){const X=l.attributes,re=G.attributes;let ee=0;const B=Y.getAttributes();for(const V in B)if(B[V].location>=0){const oe=X[V];let he=re[V];if(he===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;ee++}return l.attributesNum!==ee||l.index!==te}function y(R,G,Y,te){const X={},re=G.attributes;let ee=0;const B=Y.getAttributes();for(const V in B)if(B[V].location>=0){let oe=re[V];oe===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),X[V]=he,ee++}l.attributes=X,l.attributesNum=ee,l.index=te}function g(){const R=l.newAttributes;for(let G=0,Y=R.length;G<Y;G++)R[G]=0}function _(R){S(R,0)}function S(R,G){const Y=l.newAttributes,te=l.enabledAttributes,X=l.attributeDivisors;Y[R]=1,te[R]===0&&(r.enableVertexAttribArray(R),te[R]=1),X[R]!==G&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,G),X[R]=G)}function A(){const R=l.newAttributes,G=l.enabledAttributes;for(let Y=0,te=G.length;Y<te;Y++)G[Y]!==R[Y]&&(r.disableVertexAttribArray(Y),G[Y]=0)}function L(R,G,Y,te,X,re){n.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(R,G,Y,X,re):r.vertexAttribPointer(R,G,Y,te,X,re)}function x(R,G,Y,te){if(n.isWebGL2===!1&&(R.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const X=te.attributes,re=Y.getAttributes(),ee=G.defaultAttributeValues;for(const B in re){const V=re[B];if(V.location>=0){let K=X[B];if(K===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(K=R.instanceColor)),K!==void 0){const oe=K.normalized,he=K.itemSize,W=t.get(K);if(W===void 0)continue;const be=W.buffer,ue=W.type,Se=W.bytesPerElement;if(K.isInterleavedBufferAttribute){const me=K.data,ve=me.stride,$=K.offset;if(me.isInstancedInterleavedBuffer){for(let Z=0;Z<V.locationSize;Z++)S(V.location+Z,me.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Z=0;Z<V.locationSize;Z++)_(V.location+Z);r.bindBuffer(34962,be);for(let Z=0;Z<V.locationSize;Z++)L(V.location+Z,he/V.locationSize,ue,oe,ve*Se,($+he/V.locationSize*Z)*Se)}else{if(K.isInstancedBufferAttribute){for(let me=0;me<V.locationSize;me++)S(V.location+me,K.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let me=0;me<V.locationSize;me++)_(V.location+me);r.bindBuffer(34962,be);for(let me=0;me<V.locationSize;me++)L(V.location+me,he/V.locationSize,ue,oe,he*Se,he/V.locationSize*me*Se)}}else if(ee!==void 0){const oe=ee[B];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(V.location,oe);break;case 3:r.vertexAttrib3fv(V.location,oe);break;case 4:r.vertexAttrib4fv(V.location,oe);break;default:r.vertexAttrib1fv(V.location,oe)}}}}A()}function E(){O();for(const R in a){const G=a[R];for(const Y in G){const te=G[Y];for(const X in te)v(te[X].object),delete te[X];delete G[Y]}delete a[R]}}function P(R){if(a[R.id]===void 0)return;const G=a[R.id];for(const Y in G){const te=G[Y];for(const X in te)v(te[X].object),delete te[X];delete G[Y]}delete a[R.id]}function N(R){for(const G in a){const Y=a[G];if(Y[R.id]===void 0)continue;const te=Y[R.id];for(const X in te)v(te[X].object),delete te[X];delete Y[R.id]}}function O(){I(),h=!0,l!==c&&(l=c,m(l.object))}function I(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:O,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:g,enableAttribute:_,disableUnusedAttributes:A}}function Vu(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,h){r.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,u){if(u===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=c}function Hu(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),v=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),M=r.getParameter(36348),y=r.getParameter(36349),g=d>0,_=o||e.has("OES_texture_float"),S=g&&_,A=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:f,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:_,floatVertexTextures:S,maxSamples:A}}function Wu(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new pn,a=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,m){const v=u.length!==0||d||n!==0||i;return i=d,t=h(u,m,0),n=u.length,v},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(u,d,m){const v=u.clippingPlanes,p=u.clipIntersection,f=u.clipShadows,M=r.get(u);if(!i||v===null||v.length===0||s&&!f)s?h(null):l();else{const y=s?0:n,g=y*4;let _=M.clippingState||null;c.value=_,_=h(v,d,g,m);for(let S=0;S!==g;++S)_[S]=t[S];M.clippingState=_,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,v){const p=u!==null?u.length:0;let f=null;if(p!==0){if(f=c.value,v!==!0||f===null){const M=m+p*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<M)&&(f=new Float32Array(M));for(let g=0,_=m;g!==p;++g,_+=4)o.copy(u[g]).applyMatrix4(y,a),o.normal.toArray(f,_),f[_+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function qu(r){let e=new WeakMap;function t(o,a){return a===as?o.mapping=ei:a===cr&&(o.mapping=ti),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===as||a===cr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new sc(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Xu extends Lo{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yn=4,La=[.125,.215,.35,.446,.526,.582],gn=20,Js=new Xu,Pa=new Ve;let $s=null;const mn=(1+Math.sqrt(5))/2,Xn=1/mn,Ra=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,mn,Xn),new F(0,mn,-Xn),new F(Xn,0,mn),new F(-Xn,0,mn),new F(mn,Xn,0),new F(-mn,Xn,0)];class Da{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$s=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($s),e.scissorTest=!1,Ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ei||e.mapping===ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$s=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Mi,format:Vt,encoding:wn,depthBuffer:!1},i=Ia(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ia(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ju(s)),this._blurMaterial=Yu(s,e,t)}return i}_compileMaterial(e){const t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,Js)}_sceneToCubeUV(e,t,n,i){const a=new yt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Pa),h.toneMapping=en,h.autoClear=!1;const m=new Rt({name:"PMREM.Background",side:ht,depthWrite:!1,depthTest:!1}),v=new Ze(new Li,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Pa),p=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(a.up.set(0,c[M],0),a.lookAt(l[M],0,0)):y===1?(a.up.set(0,0,c[M]),a.lookAt(0,l[M],0)):(a.up.set(0,c[M],0),a.lookAt(0,0,l[M]));const g=this._cubeSize;Ji(i,y*g,M>2?g:0,g,g),h.setRenderTarget(i),p&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ei||e.mapping===ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=za()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ji(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Js)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ra[(i-1)%Ra.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ze(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*gn-1),p=s/v,f=isFinite(s)?1+Math.floor(h*p):gn;f>gn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${gn}`);const M=[];let y=0;for(let L=0;L<gn;++L){const x=L/p,E=Math.exp(-x*x/2);M.push(E),L===0?y+=E:L<f&&(y+=2*E)}for(let L=0;L<M.length;L++)M[L]=M[L]/y;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=M,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-n;const _=this._sizeLods[i],S=3*_*(i>g-Yn?i-g+Yn:0),A=4*(this._cubeSize-_);Ji(t,S,A,3*_,2*_),c.setRenderTarget(t),c.render(u,Js)}}function ju(r){const e=[],t=[],n=[];let i=r;const s=r-Yn+1+La.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Yn?c=La[o-r+Yn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,p=3,f=2,M=1,y=new Float32Array(p*v*m),g=new Float32Array(f*v*m),_=new Float32Array(M*v*m);for(let A=0;A<m;A++){const L=A%3*2/3-1,x=A>2?0:-1,E=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];y.set(E,p*v*A),g.set(d,f*v*A);const P=[A,A,A,A,A,A];_.set(P,M*v*A)}const S=new Et;S.setAttribute("position",new Mt(y,p)),S.setAttribute("uv",new Mt(g,f)),S.setAttribute("faceIndex",new Mt(_,M)),e.push(S),i>Yn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ia(r,e,t){const n=new En(r,e,t);return n.texture.mapping=cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ji(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Yu(r,e,t){const n=new Float32Array(gn),i=new F(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ar(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Fa(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ar(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function za(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ar(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Ar(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zu(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===as||c===cr,h=c===ei||c===ti;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Da(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Da(r));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ju(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $u(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const v in d)e.update(d[v],34962);const m=u.morphAttributes;for(const v in m){const p=m[v];for(let f=0,M=p.length;f<M;f++)e.update(p[f],34962)}}function l(u){const d=[],m=u.index,v=u.attributes.position;let p=0;if(m!==null){const y=m.array;p=m.version;for(let g=0,_=y.length;g<_;g+=3){const S=y[g+0],A=y[g+1],L=y[g+2];d.push(S,A,A,L,L,S)}}else{const y=v.array;p=v.version;for(let g=0,_=y.length/3-1;g<_;g+=3){const S=g+0,A=g+1,L=g+2;d.push(S,A,A,L,L,S)}}const f=new(Mo(d)?Ao:To)(d,1);f.version=p;const M=s.get(u);M&&e.remove(M),s.set(u,f)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ku(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,m){r.drawElements(s,m,a,d*c),t.update(m,s,1)}function u(d,m,v){if(v===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,d*c,v),t.update(m,s,v)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function Qu(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ed(r,e){return r[0]-e[0]}function td(r,e){return Math.abs(e[1])-Math.abs(r[1])}function nd(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Qe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u,d){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=v!==void 0?v.length:0;let f=s.get(h);if(f===void 0||f.count!==p){let G=function(){I.dispose(),s.delete(h),h.removeEventListener("dispose",G)};f!==void 0&&f.texture.dispose();const g=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],x=h.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),S===!0&&(E=3);let P=h.attributes.position.count*E,N=1;P>e.maxTextureSize&&(N=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const O=new Float32Array(P*N*4*p),I=new Eo(O,P,N,p);I.type=_n,I.needsUpdate=!0;const R=E*4;for(let Y=0;Y<p;Y++){const te=A[Y],X=L[Y],re=x[Y],ee=P*N*4*Y;for(let B=0;B<te.count;B++){const V=B*R;g===!0&&(o.fromBufferAttribute(te,B),O[ee+V+0]=o.x,O[ee+V+1]=o.y,O[ee+V+2]=o.z,O[ee+V+3]=0),_===!0&&(o.fromBufferAttribute(X,B),O[ee+V+4]=o.x,O[ee+V+5]=o.y,O[ee+V+6]=o.z,O[ee+V+7]=0),S===!0&&(o.fromBufferAttribute(re,B),O[ee+V+8]=o.x,O[ee+V+9]=o.y,O[ee+V+10]=o.z,O[ee+V+11]=re.itemSize===4?o.w:1)}}f={count:p,texture:I,size:new ge(P,N)},s.set(h,f),h.addEventListener("dispose",G)}let M=0;for(let g=0;g<m.length;g++)M+=m[g];const y=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(r,"morphTargetBaseInfluence",y),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{const v=m===void 0?0:m.length;let p=n[h.id];if(p===void 0||p.length!==v){p=[];for(let _=0;_<v;_++)p[_]=[_,0];n[h.id]=p}for(let _=0;_<v;_++){const S=p[_];S[0]=_,S[1]=m[_]}p.sort(td);for(let _=0;_<8;_++)_<v&&p[_][1]?(a[_][0]=p[_][0],a[_][1]=p[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(ed);const f=h.morphAttributes.position,M=h.morphAttributes.normal;let y=0;for(let _=0;_<8;_++){const S=a[_],A=S[0],L=S[1];A!==Number.MAX_SAFE_INTEGER&&L?(f&&h.getAttribute("morphTarget"+_)!==f[A]&&h.setAttribute("morphTarget"+_,f[A]),M&&h.getAttribute("morphNormal"+_)!==M[A]&&h.setAttribute("morphNormal"+_,M[A]),i[_]=L,y+=L):(f&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),M&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}const g=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(r,"morphTargetBaseInfluence",g),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function id(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);return i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Do=new St,Io=new Eo,Fo=new Vl,zo=new Po,Na=[],Oa=[],Ua=new Float32Array(16),Ba=new Float32Array(9),ka=new Float32Array(4);function ri(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Na[i];if(s===void 0&&(s=new Float32Array(i),Na[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function at(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ot(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ds(r,e){let t=Oa[e];t===void 0&&(t=new Int32Array(e),Oa[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function sd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function rd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;r.uniform2fv(this.addr,e),ot(t,e)}}function ad(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;r.uniform3fv(this.addr,e),ot(t,e)}}function od(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;r.uniform4fv(this.addr,e),ot(t,e)}}function ld(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(at(t,n))return;ka.set(n),r.uniformMatrix2fv(this.addr,!1,ka),ot(t,n)}}function cd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(at(t,n))return;Ba.set(n),r.uniformMatrix3fv(this.addr,!1,Ba),ot(t,n)}}function hd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(at(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(at(t,n))return;Ua.set(n),r.uniformMatrix4fv(this.addr,!1,Ua),ot(t,n)}}function ud(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;r.uniform2iv(this.addr,e),ot(t,e)}}function fd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;r.uniform3iv(this.addr,e),ot(t,e)}}function pd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;r.uniform4iv(this.addr,e),ot(t,e)}}function md(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function gd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;r.uniform2uiv(this.addr,e),ot(t,e)}}function xd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;r.uniform3uiv(this.addr,e),ot(t,e)}}function _d(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;r.uniform4uiv(this.addr,e),ot(t,e)}}function vd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Do,i)}function yd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fo,i)}function Md(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||zo,i)}function Sd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Io,i)}function bd(r){switch(r){case 5126:return sd;case 35664:return rd;case 35665:return ad;case 35666:return od;case 35674:return ld;case 35675:return cd;case 35676:return hd;case 5124:case 35670:return ud;case 35667:case 35671:return dd;case 35668:case 35672:return fd;case 35669:case 35673:return pd;case 5125:return md;case 36294:return gd;case 36295:return xd;case 36296:return _d;case 35678:case 36198:case 36298:case 36306:case 35682:return vd;case 35679:case 36299:case 36307:return yd;case 35680:case 36300:case 36308:case 36293:return Md;case 36289:case 36303:case 36311:case 36292:return Sd}}function wd(r,e){r.uniform1fv(this.addr,e)}function Ed(r,e){const t=ri(e,this.size,2);r.uniform2fv(this.addr,t)}function Td(r,e){const t=ri(e,this.size,3);r.uniform3fv(this.addr,t)}function Ad(r,e){const t=ri(e,this.size,4);r.uniform4fv(this.addr,t)}function Cd(r,e){const t=ri(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ld(r,e){const t=ri(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Pd(r,e){const t=ri(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Rd(r,e){r.uniform1iv(this.addr,e)}function Dd(r,e){r.uniform2iv(this.addr,e)}function Id(r,e){r.uniform3iv(this.addr,e)}function Fd(r,e){r.uniform4iv(this.addr,e)}function zd(r,e){r.uniform1uiv(this.addr,e)}function Nd(r,e){r.uniform2uiv(this.addr,e)}function Od(r,e){r.uniform3uiv(this.addr,e)}function Ud(r,e){r.uniform4uiv(this.addr,e)}function Bd(r,e,t){const n=this.cache,i=e.length,s=ds(t,i);at(n,s)||(r.uniform1iv(this.addr,s),ot(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Do,s[o])}function kd(r,e,t){const n=this.cache,i=e.length,s=ds(t,i);at(n,s)||(r.uniform1iv(this.addr,s),ot(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Fo,s[o])}function Gd(r,e,t){const n=this.cache,i=e.length,s=ds(t,i);at(n,s)||(r.uniform1iv(this.addr,s),ot(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||zo,s[o])}function Vd(r,e,t){const n=this.cache,i=e.length,s=ds(t,i);at(n,s)||(r.uniform1iv(this.addr,s),ot(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Io,s[o])}function Hd(r){switch(r){case 5126:return wd;case 35664:return Ed;case 35665:return Td;case 35666:return Ad;case 35674:return Cd;case 35675:return Ld;case 35676:return Pd;case 5124:case 35670:return Rd;case 35667:case 35671:return Dd;case 35668:case 35672:return Id;case 35669:case 35673:return Fd;case 5125:return zd;case 36294:return Nd;case 36295:return Od;case 36296:return Ud;case 35678:case 36198:case 36298:case 36306:case 35682:return Bd;case 35679:case 36299:case 36307:return kd;case 35680:case 36300:case 36308:case 36293:return Gd;case 36289:case 36303:case 36311:case 36292:return Vd}}class Wd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=bd(t.type)}}class qd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Hd(t.type)}}class Xd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ks=/(\w+)(\])?(\[|\.)?/g;function Ga(r,e){r.seq.push(e),r.map[e.id]=e}function jd(r,e,t){const n=r.name,i=n.length;for(Ks.lastIndex=0;;){const s=Ks.exec(n),o=Ks.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ga(t,l===void 0?new Wd(a,r,e):new qd(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Xd(a),Ga(t,u)),t=u}}}class ss{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);jd(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Va(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Yd=0;function Zd(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Jd(r){switch(r){case wn:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Ha(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Zd(r.getShaderSource(e),o)}else return i}function $d(r,e){const t=Jd(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Kd(r,e){let t;switch(e){case ml:t="Linear";break;case gl:t="Reinhard";break;case xl:t="OptimizedCineon";break;case _l:t="ACESFilmic";break;case vl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qd(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xi).join(`
`)}function ef(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tf(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function xi(r){return r!==""}function Wa(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qa(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nf=/^[ \t]*#include +<([\w\d./]+)>/gm;function pr(r){return r.replace(nf,sf)}function sf(r,e){const t=Ge[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return pr(t)}const rf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xa(r){return r.replace(rf,af)}function af(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ja(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function of(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===go?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===jo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function lf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ei:case ti:e="ENVMAP_TYPE_CUBE";break;case cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ti:e="ENVMAP_MODE_REFRACTION";break}return e}function hf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Sr:e="ENVMAP_BLENDING_MULTIPLY";break;case fl:e="ENVMAP_BLENDING_MIX";break;case pl:e="ENVMAP_BLENDING_ADD";break}return e}function uf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function df(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=of(t),l=lf(t),h=cf(t),u=hf(t),d=uf(t),m=t.isWebGL2?"":Qd(t),v=ef(s),p=i.createProgram();let f,M,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[v].filter(xi).join(`
`),f.length>0&&(f+=`
`),M=[m,v].filter(xi).join(`
`),M.length>0&&(M+=`
`)):(f=[ja(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xi).join(`
`),M=[m,ja(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==en?"#define TONE_MAPPING":"",t.toneMapping!==en?Ge.tonemapping_pars_fragment:"",t.toneMapping!==en?Kd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.encodings_pars_fragment,$d("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xi).join(`
`)),o=pr(o),o=Wa(o,t),o=qa(o,t),a=pr(a),a=Wa(a,t),a=qa(a,t),o=Xa(o),a=Xa(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["#define varying in",t.glslVersion===ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const g=y+f+o,_=y+M+a,S=Va(i,35633,g),A=Va(i,35632,_);if(i.attachShader(p,S),i.attachShader(p,A),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const E=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(S).trim(),N=i.getShaderInfoLog(A).trim();let O=!0,I=!0;if(i.getProgramParameter(p,35714)===!1){O=!1;const R=Ha(i,S,"vertex"),G=Ha(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+R+`
`+G)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(P===""||N==="")&&(I=!1);I&&(this.diagnostics={runnable:O,programLog:E,vertexShader:{log:P,prefix:f},fragmentShader:{log:N,prefix:M}})}i.deleteShader(S),i.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new ss(i,p)),L};let x;return this.getAttributes=function(){return x===void 0&&(x=tf(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Yd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=A,this}let ff=0;class pf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mf(e),t.set(e,n)),n}}class mf{constructor(e){this.id=ff++,this.code=e,this.usedTimes=0}}function gf(r,e,t,n,i,s,o){const a=new Er,c=new pf,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,E,P,N,O){const I=N.fog,R=O.geometry,G=x.isMeshStandardMaterial?N.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),te=Y&&Y.mapping===cs?Y.image.height:null,X=v[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const re=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ee=re!==void 0?re.length:0;let B=0;R.morphAttributes.position!==void 0&&(B=1),R.morphAttributes.normal!==void 0&&(B=2),R.morphAttributes.color!==void 0&&(B=3);let V,K,oe,he;if(X){const ve=Wt[X];V=ve.vertexShader,K=ve.fragmentShader}else V=x.vertexShader,K=x.fragmentShader,c.update(x),oe=c.getVertexShaderID(x),he=c.getFragmentShaderID(x);const W=r.getRenderTarget(),be=x.alphaTest>0,ue=x.clearcoat>0,Se=x.iridescence>0;return{isWebGL2:h,shaderID:X,shaderName:x.type,vertexShader:V,fragmentShader:K,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:he,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:d,outputEncoding:W===null?r.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:wn,map:!!x.map,matcap:!!x.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:te,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Ul,tangentSpaceNormalMap:x.normalMapType===br,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===$e,clearcoat:ue,clearcoatMap:ue&&!!x.clearcoatMap,clearcoatRoughnessMap:ue&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!x.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!x.iridescenceMap,iridescenceThicknessMap:Se&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===$n,alphaMap:!!x.alphaMap,alphaTest:be,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:u,skinning:O.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:B,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:en,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===on,flipSided:x.side===ht,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(M(E,x),y(E,x),E.push(r.outputEncoding)),E.push(x.customProgramCacheKey),E.join()}function M(x,E){x.push(E.precision),x.push(E.outputEncoding),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.combine),x.push(E.vertexUvs),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function y(x,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),x.push(a.mask)}function g(x){const E=v[x.type];let P;if(E){const N=Wt[E];P=ec.clone(N.uniforms)}else P=x.uniforms;return P}function _(x,E){let P;for(let N=0,O=l.length;N<O;N++){const I=l[N];if(I.cacheKey===E){P=I,++P.usedTimes;break}}return P===void 0&&(P=new df(r,E,x,s),l.push(P)),P}function S(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),x.destroy()}}function A(x){c.remove(x)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:g,acquireProgram:_,releaseProgram:S,releaseShaderCache:A,programs:l,dispose:L}}function xf(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function _f(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ya(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Za(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,m,v,p,f){let M=r[e];return M===void 0?(M={id:u.id,object:u,geometry:d,material:m,groupOrder:v,renderOrder:u.renderOrder,z:p,group:f},r[e]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=m,M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=p,M.group=f),e++,M}function a(u,d,m,v,p,f){const M=o(u,d,m,v,p,f);m.transmission>0?n.push(M):m.transparent===!0?i.push(M):t.push(M)}function c(u,d,m,v,p,f){const M=o(u,d,m,v,p,f);m.transmission>0?n.unshift(M):m.transparent===!0?i.unshift(M):t.unshift(M)}function l(u,d){t.length>1&&t.sort(u||_f),n.length>1&&n.sort(d||Ya),i.length>1&&i.sort(d||Ya)}function h(){for(let u=e,d=r.length;u<d;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function vf(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Za,r.set(n,[o])):i>=s.length?(o=new Za,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function yf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ve};break;case"SpotLight":t={position:new F,direction:new F,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function Mf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Sf=0;function bf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function wf(r,e){const t=new yf,n=Mf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new F);const s=new F,o=new nt,a=new nt;function c(h,u){let d=0,m=0,v=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let p=0,f=0,M=0,y=0,g=0,_=0,S=0,A=0,L=0,x=0;h.sort(bf);const E=u!==!0?Math.PI:1;for(let N=0,O=h.length;N<O;N++){const I=h[N],R=I.color,G=I.intensity,Y=I.distance,te=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=R.r*G*E,m+=R.g*G*E,v+=R.b*G*E;else if(I.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],G);else if(I.isDirectionalLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const re=I.shadow,ee=n.get(I);ee.shadowBias=re.bias,ee.shadowNormalBias=re.normalBias,ee.shadowRadius=re.radius,ee.shadowMapSize=re.mapSize,i.directionalShadow[p]=ee,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=I.shadow.matrix,_++}i.directional[p]=X,p++}else if(I.isSpotLight){const X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(R).multiplyScalar(G*E),X.distance=Y,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[M]=X;const re=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,re.updateMatrices(I),I.castShadow&&x++),i.spotLightMatrix[M]=re.matrix,I.castShadow){const ee=n.get(I);ee.shadowBias=re.bias,ee.shadowNormalBias=re.normalBias,ee.shadowRadius=re.radius,ee.shadowMapSize=re.mapSize,i.spotShadow[M]=ee,i.spotShadowMap[M]=te,A++}M++}else if(I.isRectAreaLight){const X=t.get(I);X.color.copy(R).multiplyScalar(G),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=X,y++}else if(I.isPointLight){const X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*E),X.distance=I.distance,X.decay=I.decay,I.castShadow){const re=I.shadow,ee=n.get(I);ee.shadowBias=re.bias,ee.shadowNormalBias=re.normalBias,ee.shadowRadius=re.radius,ee.shadowMapSize=re.mapSize,ee.shadowCameraNear=re.camera.near,ee.shadowCameraFar=re.camera.far,i.pointShadow[f]=ee,i.pointShadowMap[f]=te,i.pointShadowMatrix[f]=I.shadow.matrix,S++}i.point[f]=X,f++}else if(I.isHemisphereLight){const X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(G*E),X.groundColor.copy(I.groundColor).multiplyScalar(G*E),i.hemi[g]=X,g++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=v;const P=i.hash;(P.directionalLength!==p||P.pointLength!==f||P.spotLength!==M||P.rectAreaLength!==y||P.hemiLength!==g||P.numDirectionalShadows!==_||P.numPointShadows!==S||P.numSpotShadows!==A||P.numSpotMaps!==L)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=y,i.point.length=f,i.hemi.length=g,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=A+L-x,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=x,P.directionalLength=p,P.pointLength=f,P.spotLength=M,P.rectAreaLength=y,P.hemiLength=g,P.numDirectionalShadows=_,P.numPointShadows=S,P.numSpotShadows=A,P.numSpotMaps=L,i.version=Sf++)}function l(h,u){let d=0,m=0,v=0,p=0,f=0;const M=u.matrixWorldInverse;for(let y=0,g=h.length;y<g;y++){const _=h[y];if(_.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(M),d++}else if(_.isSpotLight){const S=i.spot[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(M),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(M),v++}else if(_.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(M),a.identity(),o.copy(_.matrixWorld),o.premultiply(M),a.extractRotation(o),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(_.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(M),m++}else if(_.isHemisphereLight){const S=i.hemi[f];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(M),f++}}}return{setup:c,setupView:l,state:i}}function Ja(r,e){const t=new wf(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Ef(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Ja(r,e),t.set(s,[c])):o>=a.length?(c=new Ja(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Tf extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Af extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pf(r,e,t){let n=new Tr;const i=new ge,s=new ge,o=new Qe,a=new Tf({depthPacking:Ol}),c=new Af,l={},h=t.maxTextureSize,u={0:ht,1:Sn,2:on},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Cf,fragmentShader:Lf}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Et;v.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ze(v,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=go,this.render=function(_,S,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||_.length===0)return;const L=r.getRenderTarget(),x=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),P=r.state;P.setBlending(ln),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let N=0,O=_.length;N<O;N++){const I=_[N],R=I.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const G=R.getFrameExtents();if(i.multiply(G),s.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/G.x),i.x=s.x*G.x,R.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/G.y),i.y=s.y*G.y,R.mapSize.y=s.y)),R.map===null){const te=this.type!==gi?{minFilter:vt,magFilter:vt}:{};R.map=new En(i.x,i.y,te),R.map.texture.name=I.name+".shadowMap",R.camera.updateProjectionMatrix()}r.setRenderTarget(R.map),r.clear();const Y=R.getViewportCount();for(let te=0;te<Y;te++){const X=R.getViewport(te);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),P.viewport(o),R.updateMatrices(I,te),n=R.getFrustum(),g(S,A,R.camera,I,this.type)}R.isPointLightShadow!==!0&&this.type===gi&&M(R,A),R.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(L,x,E)};function M(_,S){const A=e.update(p);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,m.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new En(i.x,i.y)),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,r.setRenderTarget(_.mapPass),r.clear(),r.renderBufferDirect(S,null,A,d,p,null),m.uniforms.shadow_pass.value=_.mapPass.texture,m.uniforms.resolution.value=_.mapSize,m.uniforms.radius.value=_.radius,r.setRenderTarget(_.map),r.clear(),r.renderBufferDirect(S,null,A,m,p,null)}function y(_,S,A,L,x,E){let P=null;const N=A.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(N!==void 0)P=N;else if(P=A.isPointLight===!0?c:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const O=P.uuid,I=S.uuid;let R=l[O];R===void 0&&(R={},l[O]=R);let G=R[I];G===void 0&&(G=P.clone(),R[I]=G),P=G}return P.visible=S.visible,P.wireframe=S.wireframe,E===gi?P.side=S.shadowSide!==null?S.shadowSide:S.side:P.side=S.shadowSide!==null?S.shadowSide:u[S.side],P.alphaMap=S.alphaMap,P.alphaTest=S.alphaTest,P.map=S.map,P.clipShadows=S.clipShadows,P.clippingPlanes=S.clippingPlanes,P.clipIntersection=S.clipIntersection,P.displacementMap=S.displacementMap,P.displacementScale=S.displacementScale,P.displacementBias=S.displacementBias,P.wireframeLinewidth=S.wireframeLinewidth,P.linewidth=S.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(A.matrixWorld),P.nearDistance=L,P.farDistance=x),P}function g(_,S,A,L,x){if(_.visible===!1)return;if(_.layers.test(S.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&x===gi)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,_.matrixWorld);const N=e.update(_),O=_.material;if(Array.isArray(O)){const I=N.groups;for(let R=0,G=I.length;R<G;R++){const Y=I[R],te=O[Y.materialIndex];if(te&&te.visible){const X=y(_,te,L,A.near,A.far,x);r.renderBufferDirect(A,null,N,X,_,Y)}}}else if(O.visible){const I=y(_,O,L,A.near,A.far,x);r.renderBufferDirect(A,null,N,I,_,null)}}const P=_.children;for(let N=0,O=P.length;N<O;N++)g(P[N],S,A,L,x)}}function Rf(r,e,t){const n=t.isWebGL2;function i(){let w=!1;const z=new Qe;let j=null;const se=new Qe(0,0,0,0);return{setMask:function(de){j!==de&&!w&&(r.colorMask(de,de,de,de),j=de)},setLocked:function(de){w=de},setClear:function(de,Re,Ue,He,Ye){Ye===!0&&(de*=He,Re*=He,Ue*=He),z.set(de,Re,Ue,He),se.equals(z)===!1&&(r.clearColor(de,Re,Ue,He),se.copy(z))},reset:function(){w=!1,j=null,se.set(-1,0,0,0)}}}function s(){let w=!1,z=null,j=null,se=null;return{setTest:function(de){de?be(2929):ue(2929)},setMask:function(de){z!==de&&!w&&(r.depthMask(de),z=de)},setFunc:function(de){if(j!==de){switch(de){case al:r.depthFunc(512);break;case ol:r.depthFunc(519);break;case ll:r.depthFunc(513);break;case lr:r.depthFunc(515);break;case cl:r.depthFunc(514);break;case hl:r.depthFunc(518);break;case ul:r.depthFunc(516);break;case dl:r.depthFunc(517);break;default:r.depthFunc(515)}j=de}},setLocked:function(de){w=de},setClear:function(de){se!==de&&(r.clearDepth(de),se=de)},reset:function(){w=!1,z=null,j=null,se=null}}}function o(){let w=!1,z=null,j=null,se=null,de=null,Re=null,Ue=null,He=null,Ye=null;return{setTest:function(ze){w||(ze?be(2960):ue(2960))},setMask:function(ze){z!==ze&&!w&&(r.stencilMask(ze),z=ze)},setFunc:function(ze,Je,tt){(j!==ze||se!==Je||de!==tt)&&(r.stencilFunc(ze,Je,tt),j=ze,se=Je,de=tt)},setOp:function(ze,Je,tt){(Re!==ze||Ue!==Je||He!==tt)&&(r.stencilOp(ze,Je,tt),Re=ze,Ue=Je,He=tt)},setLocked:function(ze){w=ze},setClear:function(ze){Ye!==ze&&(r.clearStencil(ze),Ye=ze)},reset:function(){w=!1,z=null,j=null,se=null,de=null,Re=null,Ue=null,He=null,Ye=null}}}const a=new i,c=new s,l=new o,h=new WeakMap,u=new WeakMap;let d={},m={},v=new WeakMap,p=[],f=null,M=!1,y=null,g=null,_=null,S=null,A=null,L=null,x=null,E=!1,P=null,N=null,O=null,I=null,R=null;const G=r.getParameter(35661);let Y=!1,te=0;const X=r.getParameter(7938);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=te>=2);let re=null,ee={};const B=r.getParameter(3088),V=r.getParameter(2978),K=new Qe().fromArray(B),oe=new Qe().fromArray(V);function he(w,z,j){const se=new Uint8Array(4),de=r.createTexture();r.bindTexture(w,de),r.texParameteri(w,10241,9728),r.texParameteri(w,10240,9728);for(let Re=0;Re<j;Re++)r.texImage2D(z+Re,0,6408,1,1,0,6408,5121,se);return de}const W={};W[3553]=he(3553,3553,1),W[34067]=he(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),be(2929),c.setFunc(lr),fe(!1),De(Vr),be(2884),ce(ln);function be(w){d[w]!==!0&&(r.enable(w),d[w]=!0)}function ue(w){d[w]!==!1&&(r.disable(w),d[w]=!1)}function Se(w,z){return m[w]!==z?(r.bindFramebuffer(w,z),m[w]=z,n&&(w===36009&&(m[36160]=z),w===36160&&(m[36009]=z)),!0):!1}function me(w,z){let j=p,se=!1;if(w)if(j=v.get(z),j===void 0&&(j=[],v.set(z,j)),w.isWebGLMultipleRenderTargets){const de=w.texture;if(j.length!==de.length||j[0]!==36064){for(let Re=0,Ue=de.length;Re<Ue;Re++)j[Re]=36064+Re;j.length=de.length,se=!0}}else j[0]!==36064&&(j[0]=36064,se=!0);else j[0]!==1029&&(j[0]=1029,se=!0);se&&(t.isWebGL2?r.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function ve(w){return f!==w?(r.useProgram(w),f=w,!0):!1}const $={[jn]:32774,[Zo]:32778,[Jo]:32779};if(n)$[qr]=32775,$[Xr]=32776;else{const w=e.get("EXT_blend_minmax");w!==null&&($[qr]=w.MIN_EXT,$[Xr]=w.MAX_EXT)}const Z={[$o]:0,[Ko]:1,[Qo]:768,[xo]:770,[rl]:776,[il]:774,[tl]:772,[el]:769,[_o]:771,[sl]:775,[nl]:773};function ce(w,z,j,se,de,Re,Ue,He){if(w===ln){M===!0&&(ue(3042),M=!1);return}if(M===!1&&(be(3042),M=!0),w!==Yo){if(w!==y||He!==E){if((g!==jn||A!==jn)&&(r.blendEquation(32774),g=jn,A=jn),He)switch(w){case $n:r.blendFuncSeparate(1,771,1,771);break;case vn:r.blendFunc(1,1);break;case Hr:r.blendFuncSeparate(0,769,0,1);break;case Wr:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case $n:r.blendFuncSeparate(770,771,1,771);break;case vn:r.blendFunc(770,1);break;case Hr:r.blendFuncSeparate(0,769,0,1);break;case Wr:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}_=null,S=null,L=null,x=null,y=w,E=He}return}de=de||z,Re=Re||j,Ue=Ue||se,(z!==g||de!==A)&&(r.blendEquationSeparate($[z],$[de]),g=z,A=de),(j!==_||se!==S||Re!==L||Ue!==x)&&(r.blendFuncSeparate(Z[j],Z[se],Z[Re],Z[Ue]),_=j,S=se,L=Re,x=Ue),y=w,E=!1}function ye(w,z){w.side===on?ue(2884):be(2884);let j=w.side===ht;z&&(j=!j),fe(j),w.blending===$n&&w.transparent===!1?ce(ln):ce(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.premultipliedAlpha),c.setFunc(w.depthFunc),c.setTest(w.depthTest),c.setMask(w.depthWrite),a.setMask(w.colorWrite);const se=w.stencilWrite;l.setTest(se),se&&(l.setMask(w.stencilWriteMask),l.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),l.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Ae(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?be(32926):ue(32926)}function fe(w){P!==w&&(w?r.frontFace(2304):r.frontFace(2305),P=w)}function De(w){w!==qo?(be(2884),w!==N&&(w===Vr?r.cullFace(1029):w===Xo?r.cullFace(1028):r.cullFace(1032))):ue(2884),N=w}function Pe(w){w!==O&&(Y&&r.lineWidth(w),O=w)}function Ae(w,z,j){w?(be(32823),(I!==z||R!==j)&&(r.polygonOffset(z,j),I=z,R=j)):ue(32823)}function ke(w){w?be(3089):ue(3089)}function Le(w){w===void 0&&(w=33984+G-1),re!==w&&(r.activeTexture(w),re=w)}function C(w,z,j){j===void 0&&(re===null?j=33984+G-1:j=re);let se=ee[j];se===void 0&&(se={type:void 0,texture:void 0},ee[j]=se),(se.type!==w||se.texture!==z)&&(re!==j&&(r.activeTexture(j),re=j),r.bindTexture(w,z||W[w]),se.type=w,se.texture=z)}function b(){const w=ee[re];w!==void 0&&w.type!==void 0&&(r.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function H(){try{r.compressedTexImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ae(){try{r.compressedTexImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function le(){try{r.texSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function pe(){try{r.texSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function D(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function q(){try{r.texStorage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function _e(){try{r.texStorage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function we(){try{r.texImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Me(){try{r.texImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ee(w){K.equals(w)===!1&&(r.scissor(w.x,w.y,w.z,w.w),K.copy(w))}function Te(w){oe.equals(w)===!1&&(r.viewport(w.x,w.y,w.z,w.w),oe.copy(w))}function Ie(w,z){let j=u.get(z);j===void 0&&(j=new WeakMap,u.set(z,j));let se=j.get(w);se===void 0&&(se=r.getUniformBlockIndex(z,w.name),j.set(w,se))}function Oe(w,z){const se=u.get(z).get(w);h.get(z)!==se&&(r.uniformBlockBinding(z,se,w.__bindingPointIndex),h.set(z,se))}function ie(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},re=null,ee={},m={},v=new WeakMap,p=[],f=null,M=!1,y=null,g=null,_=null,S=null,A=null,L=null,x=null,E=!1,P=null,N=null,O=null,I=null,R=null,K.set(0,0,r.canvas.width,r.canvas.height),oe.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:be,disable:ue,bindFramebuffer:Se,drawBuffers:me,useProgram:ve,setBlending:ce,setMaterial:ye,setFlipSided:fe,setCullFace:De,setLineWidth:Pe,setPolygonOffset:Ae,setScissorTest:ke,activeTexture:Le,bindTexture:C,unbindTexture:b,compressedTexImage2D:H,compressedTexImage3D:ae,texImage2D:we,texImage3D:Me,updateUBOMapping:Ie,uniformBlockBinding:Oe,texStorage2D:q,texStorage3D:_e,texSubImage2D:le,texSubImage3D:pe,compressedTexSubImage2D:D,compressedTexSubImage3D:Q,scissor:Ee,viewport:Te,reset:ie}}function Df(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const f=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,b){return M?new OffscreenCanvas(C,b):bi("canvas")}function g(C,b,H,ae){let le=1;if((C.width>ae||C.height>ae)&&(le=ae/Math.max(C.width,C.height)),le<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const pe=b?fr:Math.floor,D=pe(le*C.width),Q=pe(le*C.height);p===void 0&&(p=y(D,Q));const q=H?y(D,Q):p;return q.width=D,q.height=Q,q.getContext("2d").drawImage(C,0,0,D,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+D+"x"+Q+")."),q}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function _(C){return _a(C.width)&&_a(C.height)}function S(C){return a?!1:C.wrapS!==Gt||C.wrapT!==Gt||C.minFilter!==vt&&C.minFilter!==Nt}function A(C,b){return C.generateMipmaps&&b&&C.minFilter!==vt&&C.minFilter!==Nt}function L(C){r.generateMipmap(C)}function x(C,b,H,ae,le=!1){if(a===!1)return b;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe=b;return b===6403&&(H===5126&&(pe=33326),H===5131&&(pe=33325),H===5121&&(pe=33321)),b===33319&&(H===5126&&(pe=33328),H===5131&&(pe=33327),H===5121&&(pe=33323)),b===6408&&(H===5126&&(pe=34836),H===5131&&(pe=34842),H===5121&&(pe=ae===$e&&le===!1?35907:32856),H===32819&&(pe=32854),H===32820&&(pe=32855)),(pe===33325||pe===33326||pe===33327||pe===33328||pe===34842||pe===34836)&&e.get("EXT_color_buffer_float"),pe}function E(C,b,H){return A(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==vt&&C.minFilter!==Nt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function P(C){return C===vt||C===jr||C===Ss?9728:9729}function N(C){const b=C.target;b.removeEventListener("dispose",N),I(b),b.isVideoTexture&&v.delete(b)}function O(C){const b=C.target;b.removeEventListener("dispose",O),G(b)}function I(C){const b=n.get(C);if(b.__webglInit===void 0)return;const H=C.source,ae=f.get(H);if(ae){const le=ae[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&R(C),Object.keys(ae).length===0&&f.delete(H)}n.remove(C)}function R(C){const b=n.get(C);r.deleteTexture(b.__webglTexture);const H=C.source,ae=f.get(H);delete ae[b.__cacheKey],o.memory.textures--}function G(C){const b=C.texture,H=n.get(C),ae=n.get(b);if(ae.__webglTexture!==void 0&&(r.deleteTexture(ae.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)r.deleteFramebuffer(H.__webglFramebuffer[le]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[le]);else{if(r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let le=0;le<H.__webglColorRenderbuffer.length;le++)H.__webglColorRenderbuffer[le]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[le]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let le=0,pe=b.length;le<pe;le++){const D=n.get(b[le]);D.__webglTexture&&(r.deleteTexture(D.__webglTexture),o.memory.textures--),n.remove(b[le])}n.remove(b),n.remove(C)}let Y=0;function te(){Y=0}function X(){const C=Y;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),Y+=1,C}function re(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.encoding),b.join()}function ee(C,b){const H=n.get(C);if(C.isVideoTexture&&ke(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const ae=C.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(H,C,b);return}}t.bindTexture(3553,H.__webglTexture,33984+b)}function B(C,b){const H=n.get(C);if(C.version>0&&H.__version!==C.version){ue(H,C,b);return}t.bindTexture(35866,H.__webglTexture,33984+b)}function V(C,b){const H=n.get(C);if(C.version>0&&H.__version!==C.version){ue(H,C,b);return}t.bindTexture(32879,H.__webglTexture,33984+b)}function K(C,b){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Se(H,C,b);return}t.bindTexture(34067,H.__webglTexture,33984+b)}const oe={[hr]:10497,[Gt]:33071,[ur]:33648},he={[vt]:9728,[jr]:9984,[Ss]:9986,[Nt]:9729,[yl]:9985,[yi]:9987};function W(C,b,H){if(H?(r.texParameteri(C,10242,oe[b.wrapS]),r.texParameteri(C,10243,oe[b.wrapT]),(C===32879||C===35866)&&r.texParameteri(C,32882,oe[b.wrapR]),r.texParameteri(C,10240,he[b.magFilter]),r.texParameteri(C,10241,he[b.minFilter])):(r.texParameteri(C,10242,33071),r.texParameteri(C,10243,33071),(C===32879||C===35866)&&r.texParameteri(C,32882,33071),(b.wrapS!==Gt||b.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,10240,P(b.magFilter)),r.texParameteri(C,10241,P(b.minFilter)),b.minFilter!==vt&&b.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===vt||b.minFilter!==Ss&&b.minFilter!==yi||b.type===_n&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Mi&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(C,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function be(C,b){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",N));const ae=b.source;let le=f.get(ae);le===void 0&&(le={},f.set(ae,le));const pe=re(b);if(pe!==C.__cacheKey){le[pe]===void 0&&(le[pe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),le[pe].usedTimes++;const D=le[C.__cacheKey];D!==void 0&&(le[C.__cacheKey].usedTimes--,D.usedTimes===0&&R(b)),C.__cacheKey=pe,C.__webglTexture=le[pe].texture}return H}function ue(C,b,H){let ae=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=35866),b.isData3DTexture&&(ae=32879);const le=be(C,b),pe=b.source;t.bindTexture(ae,C.__webglTexture,33984+H);const D=n.get(pe);if(pe.version!==D.__version||le===!0){t.activeTexture(33984+H),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);const Q=S(b)&&_(b.image)===!1;let q=g(b.image,Q,!1,h);q=Le(b,q);const _e=_(q)||a,we=s.convert(b.format,b.encoding);let Me=s.convert(b.type),Ee=x(b.internalFormat,we,Me,b.encoding,b.isVideoTexture);W(ae,b,_e);let Te;const Ie=b.mipmaps,Oe=a&&b.isVideoTexture!==!0,ie=D.__version===void 0||le===!0,w=E(b,q,_e);if(b.isDepthTexture)Ee=6402,a?b.type===_n?Ee=36012:b.type===xn?Ee=33190:b.type===Kn?Ee=35056:Ee=33189:b.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===yn&&Ee===6402&&b.type!==yo&&b.type!==xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=xn,Me=s.convert(b.type)),b.format===ni&&Ee===6402&&(Ee=34041,b.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Kn,Me=s.convert(b.type))),ie&&(Oe?t.texStorage2D(3553,1,Ee,q.width,q.height):t.texImage2D(3553,0,Ee,q.width,q.height,0,we,Me,null));else if(b.isDataTexture)if(Ie.length>0&&_e){Oe&&ie&&t.texStorage2D(3553,w,Ee,Ie[0].width,Ie[0].height);for(let z=0,j=Ie.length;z<j;z++)Te=Ie[z],Oe?t.texSubImage2D(3553,z,0,0,Te.width,Te.height,we,Me,Te.data):t.texImage2D(3553,z,Ee,Te.width,Te.height,0,we,Me,Te.data);b.generateMipmaps=!1}else Oe?(ie&&t.texStorage2D(3553,w,Ee,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,we,Me,q.data)):t.texImage2D(3553,0,Ee,q.width,q.height,0,we,Me,q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Oe&&ie&&t.texStorage3D(35866,w,Ee,Ie[0].width,Ie[0].height,q.depth);for(let z=0,j=Ie.length;z<j;z++)Te=Ie[z],b.format!==Vt?we!==null?Oe?t.compressedTexSubImage3D(35866,z,0,0,0,Te.width,Te.height,q.depth,we,Te.data,0,0):t.compressedTexImage3D(35866,z,Ee,Te.width,Te.height,q.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage3D(35866,z,0,0,0,Te.width,Te.height,q.depth,we,Me,Te.data):t.texImage3D(35866,z,Ee,Te.width,Te.height,q.depth,0,we,Me,Te.data)}else{Oe&&ie&&t.texStorage2D(3553,w,Ee,Ie[0].width,Ie[0].height);for(let z=0,j=Ie.length;z<j;z++)Te=Ie[z],b.format!==Vt?we!==null?Oe?t.compressedTexSubImage2D(3553,z,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(3553,z,Ee,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(3553,z,0,0,Te.width,Te.height,we,Me,Te.data):t.texImage2D(3553,z,Ee,Te.width,Te.height,0,we,Me,Te.data)}else if(b.isDataArrayTexture)Oe?(ie&&t.texStorage3D(35866,w,Ee,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,we,Me,q.data)):t.texImage3D(35866,0,Ee,q.width,q.height,q.depth,0,we,Me,q.data);else if(b.isData3DTexture)Oe?(ie&&t.texStorage3D(32879,w,Ee,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,we,Me,q.data)):t.texImage3D(32879,0,Ee,q.width,q.height,q.depth,0,we,Me,q.data);else if(b.isFramebufferTexture){if(ie)if(Oe)t.texStorage2D(3553,w,Ee,q.width,q.height);else{let z=q.width,j=q.height;for(let se=0;se<w;se++)t.texImage2D(3553,se,Ee,z,j,0,we,Me,null),z>>=1,j>>=1}}else if(Ie.length>0&&_e){Oe&&ie&&t.texStorage2D(3553,w,Ee,Ie[0].width,Ie[0].height);for(let z=0,j=Ie.length;z<j;z++)Te=Ie[z],Oe?t.texSubImage2D(3553,z,0,0,we,Me,Te):t.texImage2D(3553,z,Ee,we,Me,Te);b.generateMipmaps=!1}else Oe?(ie&&t.texStorage2D(3553,w,Ee,q.width,q.height),t.texSubImage2D(3553,0,0,0,we,Me,q)):t.texImage2D(3553,0,Ee,we,Me,q);A(b,_e)&&L(ae),D.__version=pe.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Se(C,b,H){if(b.image.length!==6)return;const ae=be(C,b),le=b.source;t.bindTexture(34067,C.__webglTexture,33984+H);const pe=n.get(le);if(le.version!==pe.__version||ae===!0){t.activeTexture(33984+H),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);const D=b.isCompressedTexture||b.image[0].isCompressedTexture,Q=b.image[0]&&b.image[0].isDataTexture,q=[];for(let z=0;z<6;z++)!D&&!Q?q[z]=g(b.image[z],!1,!0,l):q[z]=Q?b.image[z].image:b.image[z],q[z]=Le(b,q[z]);const _e=q[0],we=_(_e)||a,Me=s.convert(b.format,b.encoding),Ee=s.convert(b.type),Te=x(b.internalFormat,Me,Ee,b.encoding),Ie=a&&b.isVideoTexture!==!0,Oe=pe.__version===void 0||ae===!0;let ie=E(b,_e,we);W(34067,b,we);let w;if(D){Ie&&Oe&&t.texStorage2D(34067,ie,Te,_e.width,_e.height);for(let z=0;z<6;z++){w=q[z].mipmaps;for(let j=0;j<w.length;j++){const se=w[j];b.format!==Vt?Me!==null?Ie?t.compressedTexSubImage2D(34069+z,j,0,0,se.width,se.height,Me,se.data):t.compressedTexImage2D(34069+z,j,Te,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+z,j,0,0,se.width,se.height,Me,Ee,se.data):t.texImage2D(34069+z,j,Te,se.width,se.height,0,Me,Ee,se.data)}}}else{w=b.mipmaps,Ie&&Oe&&(w.length>0&&ie++,t.texStorage2D(34067,ie,Te,q[0].width,q[0].height));for(let z=0;z<6;z++)if(Q){Ie?t.texSubImage2D(34069+z,0,0,0,q[z].width,q[z].height,Me,Ee,q[z].data):t.texImage2D(34069+z,0,Te,q[z].width,q[z].height,0,Me,Ee,q[z].data);for(let j=0;j<w.length;j++){const de=w[j].image[z].image;Ie?t.texSubImage2D(34069+z,j+1,0,0,de.width,de.height,Me,Ee,de.data):t.texImage2D(34069+z,j+1,Te,de.width,de.height,0,Me,Ee,de.data)}}else{Ie?t.texSubImage2D(34069+z,0,0,0,Me,Ee,q[z]):t.texImage2D(34069+z,0,Te,Me,Ee,q[z]);for(let j=0;j<w.length;j++){const se=w[j];Ie?t.texSubImage2D(34069+z,j+1,0,0,Me,Ee,se.image[z]):t.texImage2D(34069+z,j+1,Te,Me,Ee,se.image[z])}}}A(b,we)&&L(34067),pe.__version=le.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function me(C,b,H,ae,le){const pe=s.convert(H.format,H.encoding),D=s.convert(H.type),Q=x(H.internalFormat,pe,D,H.encoding);n.get(b).__hasExternalTextures||(le===32879||le===35866?t.texImage3D(le,0,Q,b.width,b.height,b.depth,0,pe,D,null):t.texImage2D(le,0,Q,b.width,b.height,0,pe,D,null)),t.bindFramebuffer(36160,C),Ae(b)?d.framebufferTexture2DMultisampleEXT(36160,ae,le,n.get(H).__webglTexture,0,Pe(b)):(le===3553||le>=34069&&le<=34074)&&r.framebufferTexture2D(36160,ae,le,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function ve(C,b,H){if(r.bindRenderbuffer(36161,C),b.depthBuffer&&!b.stencilBuffer){let ae=33189;if(H||Ae(b)){const le=b.depthTexture;le&&le.isDepthTexture&&(le.type===_n?ae=36012:le.type===xn&&(ae=33190));const pe=Pe(b);Ae(b)?d.renderbufferStorageMultisampleEXT(36161,pe,ae,b.width,b.height):r.renderbufferStorageMultisample(36161,pe,ae,b.width,b.height)}else r.renderbufferStorage(36161,ae,b.width,b.height);r.framebufferRenderbuffer(36160,36096,36161,C)}else if(b.depthBuffer&&b.stencilBuffer){const ae=Pe(b);H&&Ae(b)===!1?r.renderbufferStorageMultisample(36161,ae,35056,b.width,b.height):Ae(b)?d.renderbufferStorageMultisampleEXT(36161,ae,35056,b.width,b.height):r.renderbufferStorage(36161,34041,b.width,b.height),r.framebufferRenderbuffer(36160,33306,36161,C)}else{const ae=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let le=0;le<ae.length;le++){const pe=ae[le],D=s.convert(pe.format,pe.encoding),Q=s.convert(pe.type),q=x(pe.internalFormat,D,Q,pe.encoding),_e=Pe(b);H&&Ae(b)===!1?r.renderbufferStorageMultisample(36161,_e,q,b.width,b.height):Ae(b)?d.renderbufferStorageMultisampleEXT(36161,_e,q,b.width,b.height):r.renderbufferStorage(36161,q,b.width,b.height)}}r.bindRenderbuffer(36161,null)}function $(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ee(b.depthTexture,0);const ae=n.get(b.depthTexture).__webglTexture,le=Pe(b);if(b.depthTexture.format===yn)Ae(b)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ae,0,le):r.framebufferTexture2D(36160,36096,3553,ae,0);else if(b.depthTexture.format===ni)Ae(b)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ae,0,le):r.framebufferTexture2D(36160,33306,3553,ae,0);else throw new Error("Unknown depthTexture format")}function Z(C){const b=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");$(b.__webglFramebuffer,C)}else if(H){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(36160,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]=r.createRenderbuffer(),ve(b.__webglDepthbuffer[ae],C,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),ve(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function ce(C,b,H){const ae=n.get(C);b!==void 0&&me(ae.__webglFramebuffer,C,C.texture,36064,3553),H!==void 0&&Z(C)}function ye(C){const b=C.texture,H=n.get(C),ae=n.get(b);C.addEventListener("dispose",O),C.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=b.version,o.memory.textures++);const le=C.isWebGLCubeRenderTarget===!0,pe=C.isWebGLMultipleRenderTargets===!0,D=_(C)||a;if(le){H.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)H.__webglFramebuffer[Q]=r.createFramebuffer()}else{if(H.__webglFramebuffer=r.createFramebuffer(),pe)if(i.drawBuffers){const Q=C.texture;for(let q=0,_e=Q.length;q<_e;q++){const we=n.get(Q[q]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ae(C)===!1){const Q=pe?b:[b];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let q=0;q<Q.length;q++){const _e=Q[q];H.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(36161,H.__webglColorRenderbuffer[q]);const we=s.convert(_e.format,_e.encoding),Me=s.convert(_e.type),Ee=x(_e.internalFormat,we,Me,_e.encoding,C.isXRRenderTarget===!0),Te=Pe(C);r.renderbufferStorageMultisample(36161,Te,Ee,C.width,C.height),r.framebufferRenderbuffer(36160,36064+q,36161,H.__webglColorRenderbuffer[q])}r.bindRenderbuffer(36161,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(le){t.bindTexture(34067,ae.__webglTexture),W(34067,b,D);for(let Q=0;Q<6;Q++)me(H.__webglFramebuffer[Q],C,b,36064,34069+Q);A(b,D)&&L(34067),t.unbindTexture()}else if(pe){const Q=C.texture;for(let q=0,_e=Q.length;q<_e;q++){const we=Q[q],Me=n.get(we);t.bindTexture(3553,Me.__webglTexture),W(3553,we,D),me(H.__webglFramebuffer,C,we,36064+q,3553),A(we,D)&&L(3553)}t.unbindTexture()}else{let Q=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?Q=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Q,ae.__webglTexture),W(Q,b,D),me(H.__webglFramebuffer,C,b,36064,Q),A(b,D)&&L(Q),t.unbindTexture()}C.depthBuffer&&Z(C)}function fe(C){const b=_(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ae=0,le=H.length;ae<le;ae++){const pe=H[ae];if(A(pe,b)){const D=C.isWebGLCubeRenderTarget?34067:3553,Q=n.get(pe).__webglTexture;t.bindTexture(D,Q),L(D),t.unbindTexture()}}}function De(C){if(a&&C.samples>0&&Ae(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,ae=C.height;let le=16384;const pe=[],D=C.stencilBuffer?33306:36096,Q=n.get(C),q=C.isWebGLMultipleRenderTargets===!0;if(q)for(let _e=0;_e<b.length;_e++)t.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,Q.__webglFramebuffer),r.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,Q.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Q.__webglFramebuffer);for(let _e=0;_e<b.length;_e++){pe.push(36064+_e),C.depthBuffer&&pe.push(D);const we=Q.__ignoreDepthValues!==void 0?Q.__ignoreDepthValues:!1;if(we===!1&&(C.depthBuffer&&(le|=256),C.stencilBuffer&&(le|=1024)),q&&r.framebufferRenderbuffer(36008,36064,36161,Q.__webglColorRenderbuffer[_e]),we===!0&&(r.invalidateFramebuffer(36008,[D]),r.invalidateFramebuffer(36009,[D])),q){const Me=n.get(b[_e]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Me,0)}r.blitFramebuffer(0,0,H,ae,0,0,H,ae,le,9728),m&&r.invalidateFramebuffer(36008,pe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let _e=0;_e<b.length;_e++){t.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+_e,36161,Q.__webglColorRenderbuffer[_e]);const we=n.get(b[_e]).__webglTexture;t.bindFramebuffer(36160,Q.__webglFramebuffer),r.framebufferTexture2D(36009,36064+_e,3553,we,0)}t.bindFramebuffer(36009,Q.__webglMultisampledFramebuffer)}}function Pe(C){return Math.min(u,C.samples)}function Ae(C){const b=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ke(C){const b=o.render.frame;v.get(C)!==b&&(v.set(C,b),C.update())}function Le(C,b){const H=C.encoding,ae=C.format,le=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===dr||H!==wn&&(H===$e?a===!1?e.has("EXT_sRGB")===!0&&ae===Vt?(C.format=dr,C.minFilter=Nt,C.generateMipmaps=!1):b=bo.sRGBToLinear(b):(ae!==Vt||le!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),b}this.allocateTextureUnit=X,this.resetTextureUnits=te,this.setTexture2D=ee,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=ce,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ae}function If(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===bn)return 5121;if(s===wl)return 32819;if(s===El)return 32820;if(s===Ml)return 5120;if(s===Sl)return 5122;if(s===yo)return 5123;if(s===bl)return 5124;if(s===xn)return 5125;if(s===_n)return 5126;if(s===Mi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Tl)return 6406;if(s===Vt)return 6408;if(s===Cl)return 6409;if(s===Ll)return 6410;if(s===yn)return 6402;if(s===ni)return 34041;if(s===Al)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===dr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Pl)return 6403;if(s===Rl)return 36244;if(s===Dl)return 33319;if(s===Il)return 33320;if(s===Fl)return 36249;if(s===bs||s===ws||s===Es||s===Ts)if(o===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===bs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Es)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===bs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ws)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Es)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ts)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yr||s===Zr||s===Jr||s===$r)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Yr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$r)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Kr||s===Qr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Kr)return o===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Qr)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ea||s===ta||s===na||s===ia||s===sa||s===ra||s===aa||s===oa||s===la||s===ca||s===ha||s===ua||s===da||s===fa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ea)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ta)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===na)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ia)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sa)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ra)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===aa)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===oa)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===la)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ca)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ha)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ua)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===da)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fa)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===pa)return o===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Kn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Ff extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zn extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zf={type:"move"};class Qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n),M=this._getHandJoint(l,p);f!==null&&(M.matrix.fromArray(f.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.jointRadius=f.radius),M.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,v=.005;l.inputState.pinching&&d>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zf)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Nf extends St{constructor(e,t,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:yn,h!==yn&&h!==ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===yn&&(n=xn),n===void 0&&h===ni&&(n=Kn),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vt,this.minFilter=c!==void 0?c:vt,this.flipY=!1,this.generateMipmaps=!1}}class Of extends Ln{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=null,l=null,h=null,u=null,d=null,m=null;const v=t.getContextAttributes();let p=null,f=null;const M=[],y=[],g=new Set,_=new Map,S=new yt;S.layers.enable(1),S.viewport=new Qe;const A=new yt;A.layers.enable(2),A.viewport=new Qe;const L=[S,A],x=new Ff;x.layers.enable(1),x.layers.enable(2);let E=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let V=M[B];return V===void 0&&(V=new Qs,M[B]=V),V.getTargetRaySpace()},this.getControllerGrip=function(B){let V=M[B];return V===void 0&&(V=new Qs,M[B]=V),V.getGripSpace()},this.getHand=function(B){let V=M[B];return V===void 0&&(V=new Qs,M[B]=V),V.getHandSpace()};function N(B){const V=y.indexOf(B.inputSource);if(V===-1)return;const K=M[V];K!==void 0&&K.dispatchEvent({type:B.type,data:B.inputSource})}function O(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",I);for(let B=0;B<M.length;B++){const V=y[B];V!==null&&(y[B]=null,M[B].disconnect(V))}E=null,P=null,e.setRenderTarget(p),d=null,u=null,h=null,i=null,f=null,ee.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",O),i.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:d}),f=new En(d.framebufferWidth,d.framebufferHeight,{format:Vt,type:bn,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let V=null,K=null,oe=null;v.depth&&(oe=v.stencil?35056:33190,V=v.stencil?ni:yn,K=v.stencil?Kn:xn);const he={colorFormat:32856,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(he),i.updateRenderState({layers:[u]}),f=new En(u.textureWidth,u.textureHeight,{format:Vt,type:bn,depthTexture:new Nf(u.textureWidth,u.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const W=e.properties.get(f);W.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(B){for(let V=0;V<B.removed.length;V++){const K=B.removed[V],oe=y.indexOf(K);oe>=0&&(y[oe]=null,M[oe].disconnect(K))}for(let V=0;V<B.added.length;V++){const K=B.added[V];let oe=y.indexOf(K);if(oe===-1){for(let W=0;W<M.length;W++)if(W>=y.length){y.push(K),oe=W;break}else if(y[W]===null){y[W]=K,oe=W;break}if(oe===-1)break}const he=M[oe];he&&he.connect(K)}}const R=new F,G=new F;function Y(B,V,K){R.setFromMatrixPosition(V.matrixWorld),G.setFromMatrixPosition(K.matrixWorld);const oe=R.distanceTo(G),he=V.projectionMatrix.elements,W=K.projectionMatrix.elements,be=he[14]/(he[10]-1),ue=he[14]/(he[10]+1),Se=(he[9]+1)/he[5],me=(he[9]-1)/he[5],ve=(he[8]-1)/he[0],$=(W[8]+1)/W[0],Z=be*ve,ce=be*$,ye=oe/(-ve+$),fe=ye*-ve;V.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(fe),B.translateZ(ye),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const De=be+ye,Pe=ue+ye,Ae=Z-fe,ke=ce+(oe-fe),Le=Se*ue/Pe*De,C=me*ue/Pe*De;B.projectionMatrix.makePerspective(Ae,ke,Le,C,De,Pe)}function te(B,V){V===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(V.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;x.near=A.near=S.near=B.near,x.far=A.far=S.far=B.far,(E!==x.near||P!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,P=x.far);const V=B.parent,K=x.cameras;te(x,V);for(let he=0;he<K.length;he++)te(K[he],V);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),B.matrix.copy(x.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const oe=B.children;for(let he=0,W=oe.length;he<W;he++)oe[he].updateMatrixWorld(!0);K.length===2?Y(x,S,A):x.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(B){u!==null&&(u.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.getPlanes=function(){return g};let X=null;function re(B,V){if(l=V.getViewerPose(c||o),m=V,l!==null){const K=l.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let oe=!1;K.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let he=0;he<K.length;he++){const W=K[he];let be=null;if(d!==null)be=d.getViewport(W);else{const Se=h.getViewSubImage(u,W);be=Se.viewport,he===0&&(e.setRenderTargetTextures(f,Se.colorTexture,u.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(f))}let ue=L[he];ue===void 0&&(ue=new yt,ue.layers.enable(he),ue.viewport=new Qe,L[he]=ue),ue.matrix.fromArray(W.transform.matrix),ue.projectionMatrix.fromArray(W.projectionMatrix),ue.viewport.set(be.x,be.y,be.width,be.height),he===0&&x.matrix.copy(ue.matrix),oe===!0&&x.cameras.push(ue)}}for(let K=0;K<M.length;K++){const oe=y[K],he=M[K];oe!==null&&he!==void 0&&he.update(oe,V,c||o)}if(X&&X(B,V),V.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let K=null;for(const oe of g)V.detectedPlanes.has(oe)||(K===null&&(K=[]),K.push(oe));if(K!==null)for(const oe of K)g.delete(oe),_.delete(oe),n.dispatchEvent({type:"planeremoved",data:oe});for(const oe of V.detectedPlanes)if(!g.has(oe))g.add(oe),_.set(oe,V.lastChangedTime),n.dispatchEvent({type:"planeadded",data:oe});else{const he=_.get(oe);oe.lastChangedTime>he&&(_.set(oe,oe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:oe}))}}m=null}const ee=new Ro;ee.setAnimationLoop(re),this.setAnimationLoop=function(B){X=B},this.dispose=function(){}}}function Uf(r,e){function t(p,f){f.color.getRGB(p.fogColor.value,Co(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,M,y,g){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),u(p,f),f.isMeshPhysicalMaterial&&d(p,f,g)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),v(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,M,y):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===ht&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===ht&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const M=e.get(f).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const _=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*_}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let y;f.map?y=f.map:f.specularMap?y=f.specularMap:f.displacementMap?y=f.displacementMap:f.normalMap?y=f.normalMap:f.bumpMap?y=f.bumpMap:f.roughnessMap?y=f.roughnessMap:f.metalnessMap?y=f.metalnessMap:f.alphaMap?y=f.alphaMap:f.emissiveMap?y=f.emissiveMap:f.clearcoatMap?y=f.clearcoatMap:f.clearcoatNormalMap?y=f.clearcoatNormalMap:f.clearcoatRoughnessMap?y=f.clearcoatRoughnessMap:f.iridescenceMap?y=f.iridescenceMap:f.iridescenceThicknessMap?y=f.iridescenceThicknessMap:f.specularIntensityMap?y=f.specularIntensityMap:f.specularColorMap?y=f.specularColorMap:f.transmissionMap?y=f.transmissionMap:f.thicknessMap?y=f.thicknessMap:f.sheenColorMap?y=f.sheenColorMap:f.sheenRoughnessMap&&(y=f.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let g;f.aoMap?g=f.aoMap:f.lightMap&&(g=f.lightMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uv2Transform.value.copy(g.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,M,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=y*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let g;f.map?g=f.map:f.alphaMap&&(g=f.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let M;f.map?M=f.map:f.alphaMap&&(M=f.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,M){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===ht&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Bf(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function c(y,g){const _=g.program;n.uniformBlockBinding(y,_)}function l(y,g){let _=i[y.id];_===void 0&&(v(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",f));const S=g.program;n.updateUBOMapping(y,S);const A=e.render.frame;s[y.id]!==A&&(d(y),s[y.id]=A)}function h(y){const g=u();y.__bindingPointIndex=g;const _=r.createBuffer(),S=y.__size,A=y.usage;return r.bindBuffer(35345,_),r.bufferData(35345,S,A),r.bindBuffer(35345,null),r.bindBufferBase(35345,g,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const g=i[y.id],_=y.uniforms,S=y.__cache;r.bindBuffer(35345,g);for(let A=0,L=_.length;A<L;A++){const x=_[A];if(m(x,A,S)===!0){const E=x.__offset,P=Array.isArray(x.value)?x.value:[x.value];let N=0;for(let O=0;O<P.length;O++){const I=P[O],R=p(I);typeof I=="number"?(x.__data[0]=I,r.bufferSubData(35345,E+N,x.__data)):I.isMatrix3?(x.__data[0]=I.elements[0],x.__data[1]=I.elements[1],x.__data[2]=I.elements[2],x.__data[3]=I.elements[0],x.__data[4]=I.elements[3],x.__data[5]=I.elements[4],x.__data[6]=I.elements[5],x.__data[7]=I.elements[0],x.__data[8]=I.elements[6],x.__data[9]=I.elements[7],x.__data[10]=I.elements[8],x.__data[11]=I.elements[0]):(I.toArray(x.__data,N),N+=R.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,E,x.__data)}}r.bindBuffer(35345,null)}function m(y,g,_){const S=y.value;if(_[g]===void 0){if(typeof S=="number")_[g]=S;else{const A=Array.isArray(S)?S:[S],L=[];for(let x=0;x<A.length;x++)L.push(A[x].clone());_[g]=L}return!0}else if(typeof S=="number"){if(_[g]!==S)return _[g]=S,!0}else{const A=Array.isArray(_[g])?_[g]:[_[g]],L=Array.isArray(S)?S:[S];for(let x=0;x<A.length;x++){const E=A[x];if(E.equals(L[x])===!1)return E.copy(L[x]),!0}}return!1}function v(y){const g=y.uniforms;let _=0;const S=16;let A=0;for(let L=0,x=g.length;L<x;L++){const E=g[L],P={boundary:0,storage:0},N=Array.isArray(E.value)?E.value:[E.value];for(let O=0,I=N.length;O<I;O++){const R=N[O],G=p(R);P.boundary+=G.boundary,P.storage+=G.storage}if(E.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=_,L>0){A=_%S;const O=S-A;A!==0&&O-P.boundary<0&&(_+=S-A,E.__offset=_)}_+=P.storage}return A=_%S,A>0&&(_+=S-A),y.__size=_,y.__cache={},this}function p(y){const g={boundary:0,storage:0};return typeof y=="number"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=48,g.storage=48):y.isMatrix4?(g.boundary=64,g.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),g}function f(y){const g=y.target;g.removeEventListener("dispose",f);const _=o.indexOf(g.__bindingPointIndex);o.splice(_,1),r.deleteBuffer(i[g.id]),delete i[g.id],delete s[g.id]}function M(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:c,update:l,dispose:M}}function kf(){const r=bi("canvas");return r.style.display="block",r}function fs(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:kf(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,d=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=wn,this.physicallyCorrectLights=!1,this.toneMapping=en,this.toneMappingExposure=1;const p=this;let f=!1,M=0,y=0,g=null,_=-1,S=null;const A=new Qe,L=new Qe;let x=null,E=e.width,P=e.height,N=1,O=null,I=null;const R=new Qe(0,0,E,P),G=new Qe(0,0,E,P);let Y=!1;const te=new Tr;let X=!1,re=!1,ee=null;const B=new nt,V=new ge,K=new F,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return g===null?N:1}let W=t;function be(T,k){for(let J=0;J<T.length;J++){const U=T[J],ne=e.getContext(U,k);if(ne!==null)return ne}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mr}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),W===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),W=be(k,T),W===null)throw be(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ue,Se,me,ve,$,Z,ce,ye,fe,De,Pe,Ae,ke,Le,C,b,H,ae,le,pe,D,Q,q,_e;function we(){ue=new Ju(W),Se=new Hu(W,ue,r),ue.init(Se),Q=new If(W,ue,Se),me=new Rf(W,ue,Se),ve=new Qu,$=new xf,Z=new Df(W,ue,me,$,Se,Q,ve),ce=new qu(p),ye=new Zu(p),fe=new oc(W,Se),q=new Gu(W,ue,fe,Se),De=new $u(W,fe,ve,q),Pe=new id(W,De,fe,ve),le=new nd(W,Se,Z),b=new Wu($),Ae=new gf(p,ce,ye,ue,Se,q,b),ke=new Uf(p,$),Le=new vf,C=new Ef(ue,Se),ae=new ku(p,ce,ye,me,Pe,h,o),H=new Pf(p,Pe,Se),_e=new Bf(W,ve,Se,me),pe=new Vu(W,ue,ve,Se),D=new Ku(W,ue,ve,Se),ve.programs=Ae.programs,p.capabilities=Se,p.extensions=ue,p.properties=$,p.renderLists=Le,p.shadowMap=H,p.state=me,p.info=ve}we();const Me=new Of(p,W);this.xr=Me,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(T){T!==void 0&&(N=T,this.setSize(E,P,!1))},this.getSize=function(T){return T.set(E,P)},this.setSize=function(T,k,J){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=T,P=k,e.width=Math.floor(T*N),e.height=Math.floor(k*N),J!==!1&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(E*N,P*N).floor()},this.setDrawingBufferSize=function(T,k,J){E=T,P=k,N=J,e.width=Math.floor(T*J),e.height=Math.floor(k*J),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,k,J,U){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,k,J,U),me.viewport(A.copy(R).multiplyScalar(N).floor())},this.getScissor=function(T){return T.copy(G)},this.setScissor=function(T,k,J,U){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,k,J,U),me.scissor(L.copy(G).multiplyScalar(N).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(T){me.setScissorTest(Y=T)},this.setOpaqueSort=function(T){O=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(T=!0,k=!0,J=!0){let U=0;T&&(U|=16384),k&&(U|=256),J&&(U|=1024),W.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),Le.dispose(),C.dispose(),$.dispose(),ce.dispose(),ye.dispose(),Pe.dispose(),q.dispose(),_e.dispose(),Ae.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",se),Me.removeEventListener("sessionend",de),ee&&(ee.dispose(),ee=null),Re.stop()};function Ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const T=ve.autoReset,k=H.enabled,J=H.autoUpdate,U=H.needsUpdate,ne=H.type;we(),ve.autoReset=T,H.enabled=k,H.autoUpdate=J,H.needsUpdate=U,H.type=ne}function Ie(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Oe(T){const k=T.target;k.removeEventListener("dispose",Oe),ie(k)}function ie(T){w(T),$.remove(T)}function w(T){const k=$.get(T).programs;k!==void 0&&(k.forEach(function(J){Ae.releaseProgram(J)}),T.isShaderMaterial&&Ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,J,U,ne,Ce){k===null&&(k=oe);const Fe=ne.isMesh&&ne.matrixWorld.determinant()<0,Ne=tn(T,k,J,U,ne);me.setMaterial(U,Fe);let Be=J.index,Xe=1;U.wireframe===!0&&(Be=De.getWireframeAttribute(J),Xe=2);const We=J.drawRange,qe=J.attributes.position;let Ke=We.start*Xe,ut=(We.start+We.count)*Xe;Ce!==null&&(Ke=Math.max(Ke,Ce.start*Xe),ut=Math.min(ut,(Ce.start+Ce.count)*Xe)),Be!==null?(Ke=Math.max(Ke,0),ut=Math.min(ut,Be.count)):qe!=null&&(Ke=Math.max(Ke,0),ut=Math.min(ut,qe.count));const Tt=ut-Ke;if(Tt<0||Tt===1/0)return;q.setup(ne,U,Ne,J,Be);let Ft,it=pe;if(Be!==null&&(Ft=fe.get(Be),it=D,it.setIndex(Ft)),ne.isMesh)U.wireframe===!0?(me.setLineWidth(U.wireframeLinewidth*he()),it.setMode(1)):it.setMode(4);else if(ne.isLine){let je=U.linewidth;je===void 0&&(je=1),me.setLineWidth(je*he()),ne.isLineSegments?it.setMode(1):ne.isLineLoop?it.setMode(2):it.setMode(3)}else ne.isPoints?it.setMode(0):ne.isSprite&&it.setMode(4);if(ne.isInstancedMesh)it.renderInstances(Ke,Tt,ne.count);else if(J.isInstancedBufferGeometry){const je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,_s=Math.min(J.instanceCount,je);it.renderInstances(Ke,Tt,_s)}else it.render(Ke,Tt)},this.compile=function(T,k){function J(U,ne,Ce){U.transparent===!0&&U.side===Pi?(U.side=ht,U.needsUpdate=!0,tt(U,ne,Ce),U.side=Sn,U.needsUpdate=!0,tt(U,ne,Ce),U.side=Pi):tt(U,ne,Ce)}d=C.get(T),d.init(),v.push(d),T.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(p.physicallyCorrectLights),T.traverse(function(U){const ne=U.material;if(ne)if(Array.isArray(ne))for(let Ce=0;Ce<ne.length;Ce++){const Fe=ne[Ce];J(Fe,T,U)}else J(ne,T,U)}),v.pop(),d=null};let z=null;function j(T){z&&z(T)}function se(){Re.stop()}function de(){Re.start()}const Re=new Ro;Re.setAnimationLoop(j),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(T){z=T,Me.setAnimationLoop(T),T===null?Re.stop():Re.start()},Me.addEventListener("sessionstart",se),Me.addEventListener("sessionend",de),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(k),k=Me.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,k,g),d=C.get(T,v.length),d.init(),v.push(d),B.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),te.setFromProjectionMatrix(B),re=this.localClippingEnabled,X=b.init(this.clippingPlanes,re,k),u=Le.get(T,m.length),u.init(),m.push(u),Ue(T,k,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(O,I),X===!0&&b.beginShadows();const J=d.state.shadowsArray;if(H.render(J,T,k),X===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(u,T),d.setupLights(p.physicallyCorrectLights),k.isArrayCamera){const U=k.cameras;for(let ne=0,Ce=U.length;ne<Ce;ne++){const Fe=U[ne];He(u,T,Fe,Fe.viewport)}}else He(u,T,k);g!==null&&(Z.updateMultisampleRenderTarget(g),Z.updateRenderTargetMipmap(g)),T.isScene===!0&&T.onAfterRender(p,T,k),q.resetDefaultState(),_=-1,S=null,v.pop(),v.length>0?d=v[v.length-1]:d=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function Ue(T,k,J,U){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||te.intersectsSprite(T)){U&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(B);const Fe=Pe.update(T),Ne=T.material;Ne.visible&&u.push(T,Fe,Ne,J,K.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==ve.render.frame&&(T.skeleton.update(),T.skeleton.frame=ve.render.frame),!T.frustumCulled||te.intersectsObject(T))){U&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(B);const Fe=Pe.update(T),Ne=T.material;if(Array.isArray(Ne)){const Be=Fe.groups;for(let Xe=0,We=Be.length;Xe<We;Xe++){const qe=Be[Xe],Ke=Ne[qe.materialIndex];Ke&&Ke.visible&&u.push(T,Fe,Ke,J,K.z,qe)}}else Ne.visible&&u.push(T,Fe,Ne,J,K.z,null)}}const Ce=T.children;for(let Fe=0,Ne=Ce.length;Fe<Ne;Fe++)Ue(Ce[Fe],k,J,U)}function He(T,k,J,U){const ne=T.opaque,Ce=T.transmissive,Fe=T.transparent;d.setupLightsView(J),Ce.length>0&&Ye(ne,k,J),U&&me.viewport(A.copy(U)),ne.length>0&&ze(ne,k,J),Ce.length>0&&ze(Ce,k,J),Fe.length>0&&ze(Fe,k,J),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Ye(T,k,J){const U=Se.isWebGL2;ee===null&&(ee=new En(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Mi:bn,minFilter:yi,samples:U&&s===!0?4:0})),p.getDrawingBufferSize(V),U?ee.setSize(V.x,V.y):ee.setSize(fr(V.x),fr(V.y));const ne=p.getRenderTarget();p.setRenderTarget(ee),p.clear();const Ce=p.toneMapping;p.toneMapping=en,ze(T,k,J),p.toneMapping=Ce,Z.updateMultisampleRenderTarget(ee),Z.updateRenderTargetMipmap(ee),p.setRenderTarget(ne)}function ze(T,k,J){const U=k.isScene===!0?k.overrideMaterial:null;for(let ne=0,Ce=T.length;ne<Ce;ne++){const Fe=T[ne],Ne=Fe.object,Be=Fe.geometry,Xe=U===null?Fe.material:U,We=Fe.group;Ne.layers.test(J.layers)&&Je(Ne,k,J,Be,Xe,We)}}function Je(T,k,J,U,ne,Ce){T.onBeforeRender(p,k,J,U,ne,Ce),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ne.onBeforeRender(p,k,J,U,T,Ce),ne.transparent===!0&&ne.side===Pi?(ne.side=ht,ne.needsUpdate=!0,p.renderBufferDirect(J,k,U,ne,T,Ce),ne.side=Sn,ne.needsUpdate=!0,p.renderBufferDirect(J,k,U,ne,T,Ce),ne.side=Pi):p.renderBufferDirect(J,k,U,ne,T,Ce),T.onAfterRender(p,k,J,U,ne,Ce)}function tt(T,k,J){k.isScene!==!0&&(k=oe);const U=$.get(T),ne=d.state.lights,Ce=d.state.shadowsArray,Fe=ne.state.version,Ne=Ae.getParameters(T,ne.state,Ce,k,J),Be=Ae.getProgramCacheKey(Ne);let Xe=U.programs;U.environment=T.isMeshStandardMaterial?k.environment:null,U.fog=k.fog,U.envMap=(T.isMeshStandardMaterial?ye:ce).get(T.envMap||U.environment),Xe===void 0&&(T.addEventListener("dispose",Oe),Xe=new Map,U.programs=Xe);let We=Xe.get(Be);if(We!==void 0){if(U.currentProgram===We&&U.lightsStateVersion===Fe)return Ht(T,Ne),We}else Ne.uniforms=Ae.getUniforms(T),T.onBuild(J,Ne,p),T.onBeforeCompile(Ne,p),We=Ae.acquireProgram(Ne,Be),Xe.set(Be,We),U.uniforms=Ne.uniforms;const qe=U.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qe.clippingPlanes=b.uniform),Ht(T,Ne),U.needsLights=Xt(T),U.lightsStateVersion=Fe,U.needsLights&&(qe.ambientLightColor.value=ne.state.ambient,qe.lightProbe.value=ne.state.probe,qe.directionalLights.value=ne.state.directional,qe.directionalLightShadows.value=ne.state.directionalShadow,qe.spotLights.value=ne.state.spot,qe.spotLightShadows.value=ne.state.spotShadow,qe.rectAreaLights.value=ne.state.rectArea,qe.ltc_1.value=ne.state.rectAreaLTC1,qe.ltc_2.value=ne.state.rectAreaLTC2,qe.pointLights.value=ne.state.point,qe.pointLightShadows.value=ne.state.pointShadow,qe.hemisphereLights.value=ne.state.hemi,qe.directionalShadowMap.value=ne.state.directionalShadowMap,qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,qe.spotShadowMap.value=ne.state.spotShadowMap,qe.spotLightMatrix.value=ne.state.spotLightMatrix,qe.spotLightMap.value=ne.state.spotLightMap,qe.pointShadowMap.value=ne.state.pointShadowMap,qe.pointShadowMatrix.value=ne.state.pointShadowMatrix);const Ke=We.getUniforms(),ut=ss.seqWithValue(Ke.seq,qe);return U.currentProgram=We,U.uniformsList=ut,We}function Ht(T,k){const J=$.get(T);J.outputEncoding=k.outputEncoding,J.instancing=k.instancing,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function tn(T,k,J,U,ne){k.isScene!==!0&&(k=oe),Z.resetTextureUnits();const Ce=k.fog,Fe=U.isMeshStandardMaterial?k.environment:null,Ne=g===null?p.outputEncoding:g.isXRRenderTarget===!0?g.texture.encoding:wn,Be=(U.isMeshStandardMaterial?ye:ce).get(U.envMap||Fe),Xe=U.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,We=!!U.normalMap&&!!J.attributes.tangent,qe=!!J.morphAttributes.position,Ke=!!J.morphAttributes.normal,ut=!!J.morphAttributes.color,Tt=U.toneMapped?p.toneMapping:en,Ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,it=Ft!==void 0?Ft.length:0,je=$.get(U),_s=d.state.lights;if(X===!0&&(re===!0||T!==S)){const At=T===S&&U.id===_;b.setState(U,T,At)}let lt=!1;U.version===je.__version?(je.needsLights&&je.lightsStateVersion!==_s.state.version||je.outputEncoding!==Ne||ne.isInstancedMesh&&je.instancing===!1||!ne.isInstancedMesh&&je.instancing===!0||ne.isSkinnedMesh&&je.skinning===!1||!ne.isSkinnedMesh&&je.skinning===!0||je.envMap!==Be||U.fog===!0&&je.fog!==Ce||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==b.numPlanes||je.numIntersection!==b.numIntersection)||je.vertexAlphas!==Xe||je.vertexTangents!==We||je.morphTargets!==qe||je.morphNormals!==Ke||je.morphColors!==ut||je.toneMapping!==Tt||Se.isWebGL2===!0&&je.morphTargetsCount!==it)&&(lt=!0):(lt=!0,je.__version=U.version);let cn=je.currentProgram;lt===!0&&(cn=tt(U,k,ne));let kr=!1,ai=!1,vs=!1;const gt=cn.getUniforms(),hn=je.uniforms;if(me.useProgram(cn.program)&&(kr=!0,ai=!0,vs=!0),U.id!==_&&(_=U.id,ai=!0),kr||S!==T){if(gt.setValue(W,"projectionMatrix",T.projectionMatrix),Se.logarithmicDepthBuffer&&gt.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,ai=!0,vs=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const At=gt.map.cameraPosition;At!==void 0&&At.setValue(W,K.setFromMatrixPosition(T.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&gt.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||ne.isSkinnedMesh)&&gt.setValue(W,"viewMatrix",T.matrixWorldInverse)}if(ne.isSkinnedMesh){gt.setOptional(W,ne,"bindMatrix"),gt.setOptional(W,ne,"bindMatrixInverse");const At=ne.skeleton;At&&(Se.floatVertexTextures?(At.boneTexture===null&&At.computeBoneTexture(),gt.setValue(W,"boneTexture",At.boneTexture,Z),gt.setValue(W,"boneTextureSize",At.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ys=J.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0&&Se.isWebGL2===!0)&&le.update(ne,J,U,cn),(ai||je.receiveShadow!==ne.receiveShadow)&&(je.receiveShadow=ne.receiveShadow,gt.setValue(W,"receiveShadow",ne.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(hn.envMap.value=Be,hn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ai&&(gt.setValue(W,"toneMappingExposure",p.toneMappingExposure),je.needsLights&&ft(hn,vs),Ce&&U.fog===!0&&ke.refreshFogUniforms(hn,Ce),ke.refreshMaterialUniforms(hn,U,N,P,ee),ss.upload(W,je.uniformsList,hn,Z)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ss.upload(W,je.uniformsList,hn,Z),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&gt.setValue(W,"center",ne.center),gt.setValue(W,"modelViewMatrix",ne.modelViewMatrix),gt.setValue(W,"normalMatrix",ne.normalMatrix),gt.setValue(W,"modelMatrix",ne.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const At=U.uniformsGroups;for(let Ms=0,Wo=At.length;Ms<Wo;Ms++)if(Se.isWebGL2){const Gr=At[Ms];_e.update(Gr,cn),_e.bind(Gr,cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cn}function ft(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Xt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(T,k,J){$.get(T.texture).__webglTexture=k,$.get(T.depthTexture).__webglTexture=J;const U=$.get(T);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=J===void 0,U.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){const J=$.get(T);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,J=0){g=T,M=k,y=J;let U=!0,ne=null,Ce=!1,Fe=!1;if(T){const Be=$.get(T);Be.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),U=!1):Be.__webglFramebuffer===void 0?Z.setupRenderTarget(T):Be.__hasExternalTextures&&Z.rebindTextures(T,$.get(T.texture).__webglTexture,$.get(T.depthTexture).__webglTexture);const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Fe=!0);const We=$.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ne=We[k],Ce=!0):Se.isWebGL2&&T.samples>0&&Z.useMultisampledRTT(T)===!1?ne=$.get(T).__webglMultisampledFramebuffer:ne=We,A.copy(T.viewport),L.copy(T.scissor),x=T.scissorTest}else A.copy(R).multiplyScalar(N).floor(),L.copy(G).multiplyScalar(N).floor(),x=Y;if(me.bindFramebuffer(36160,ne)&&Se.drawBuffers&&U&&me.drawBuffers(T,ne),me.viewport(A),me.scissor(L),me.setScissorTest(x),Ce){const Be=$.get(T.texture);W.framebufferTexture2D(36160,36064,34069+k,Be.__webglTexture,J)}else if(Fe){const Be=$.get(T.texture),Xe=k||0;W.framebufferTextureLayer(36160,36064,Be.__webglTexture,J||0,Xe)}_=-1},this.readRenderTargetPixels=function(T,k,J,U,ne,Ce,Fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ne=Ne[Fe]),Ne){me.bindFramebuffer(36160,Ne);try{const Be=T.texture,Xe=Be.format,We=Be.type;if(Xe!==Vt&&Q.convert(Xe)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=We===Mi&&(ue.has("EXT_color_buffer_half_float")||Se.isWebGL2&&ue.has("EXT_color_buffer_float"));if(We!==bn&&Q.convert(We)!==W.getParameter(35738)&&!(We===_n&&(Se.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-U&&J>=0&&J<=T.height-ne&&W.readPixels(k,J,U,ne,Q.convert(Xe),Q.convert(We),Ce)}finally{const Be=g!==null?$.get(g).__webglFramebuffer:null;me.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(T,k,J=0){const U=Math.pow(2,-J),ne=Math.floor(k.image.width*U),Ce=Math.floor(k.image.height*U);Z.setTexture2D(k,0),W.copyTexSubImage2D(3553,J,0,0,T.x,T.y,ne,Ce),me.unbindTexture()},this.copyTextureToTexture=function(T,k,J,U=0){const ne=k.image.width,Ce=k.image.height,Fe=Q.convert(J.format),Ne=Q.convert(J.type);Z.setTexture2D(J,0),W.pixelStorei(37440,J.flipY),W.pixelStorei(37441,J.premultiplyAlpha),W.pixelStorei(3317,J.unpackAlignment),k.isDataTexture?W.texSubImage2D(3553,U,T.x,T.y,ne,Ce,Fe,Ne,k.image.data):k.isCompressedTexture?W.compressedTexSubImage2D(3553,U,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,Fe,k.mipmaps[0].data):W.texSubImage2D(3553,U,T.x,T.y,Fe,Ne,k.image),U===0&&J.generateMipmaps&&W.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(T,k,J,U,ne=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=T.max.x-T.min.x+1,Fe=T.max.y-T.min.y+1,Ne=T.max.z-T.min.z+1,Be=Q.convert(U.format),Xe=Q.convert(U.type);let We;if(U.isData3DTexture)Z.setTexture3D(U,0),We=32879;else if(U.isDataArrayTexture)Z.setTexture2DArray(U,0),We=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,U.flipY),W.pixelStorei(37441,U.premultiplyAlpha),W.pixelStorei(3317,U.unpackAlignment);const qe=W.getParameter(3314),Ke=W.getParameter(32878),ut=W.getParameter(3316),Tt=W.getParameter(3315),Ft=W.getParameter(32877),it=J.isCompressedTexture?J.mipmaps[0]:J.image;W.pixelStorei(3314,it.width),W.pixelStorei(32878,it.height),W.pixelStorei(3316,T.min.x),W.pixelStorei(3315,T.min.y),W.pixelStorei(32877,T.min.z),J.isDataTexture||J.isData3DTexture?W.texSubImage3D(We,ne,k.x,k.y,k.z,Ce,Fe,Ne,Be,Xe,it.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(We,ne,k.x,k.y,k.z,Ce,Fe,Ne,Be,it.data)):W.texSubImage3D(We,ne,k.x,k.y,k.z,Ce,Fe,Ne,Be,Xe,it),W.pixelStorei(3314,qe),W.pixelStorei(32878,Ke),W.pixelStorei(3316,ut),W.pixelStorei(3315,Tt),W.pixelStorei(32877,Ft),ne===0&&U.generateMipmaps&&W.generateMipmap(We),me.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Z.setTextureCube(T,0):T.isData3DTexture?Z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Z.setTexture2DArray(T,0):Z.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){M=0,y=0,g=null,me.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Gf extends fs{}Gf.prototype.isWebGL1Renderer=!0;class Cr extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class os extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $a=new F,Ka=new F,Qa=new nt,er=new wr,$i=new hs;class mr extends bt{constructor(e=new Et,t=new os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)$a.fromBufferAttribute(t,i-1),Ka.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$a.distanceTo(Ka);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(i),$i.radius+=s,e.ray.intersectsSphere($i)===!1)return;Qa.copy(i).invert(),er.copy(e.ray).applyMatrix4(Qa);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new F,h=new F,u=new F,d=new F,m=this.isLineSegments?2:1,v=n.index,f=n.attributes.position;if(v!==null){const M=Math.max(0,o.start),y=Math.min(v.count,o.start+o.count);for(let g=M,_=y-1;g<_;g+=m){const S=v.getX(g),A=v.getX(g+1);if(l.fromBufferAttribute(f,S),h.fromBufferAttribute(f,A),er.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const M=Math.max(0,o.start),y=Math.min(f.count,o.start+o.count);for(let g=M,_=y-1;g<_;g+=m){if(l.fromBufferAttribute(f,g),h.fromBufferAttribute(f,g+1),er.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Vf extends St{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,m=(o-h)/d;return(i+m)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=t||(o.isVector2?new ge:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new F,i=[],s=[],o=[],a=new F,c=new nt;for(let m=0;m<=e;m++){const v=m/e;i[m]=this.getTangentAt(v,new F)}s[0]=new F,o[0]=new F;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(mt(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,v))}o[m].crossVectors(i[m],s[m])}if(t===!0){let m=Math.acos(mt(s[0].dot(s[e]),-1,1));m/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let v=1;v<=e;v++)s[v].applyMatrix4(c.makeRotationAxis(i[v],m*v)),o[v].crossVectors(i[v],s[v])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ps extends qt{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new ge,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Hf extends ps{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Lr(){let r=0,e=0,t=0,n=0;function i(s,o,a,c){r=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,m*=h,i(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Ki=new F,tr=new Lr,nr=new Lr,ir=new Lr;class Wf extends qt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(Ki.subVectors(i[0],i[1]).add(i[0]),l=Ki);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Ki.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Ki),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(u),m),p=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);p<1e-4&&(p=1),v<1e-4&&(v=p),f<1e-4&&(f=p),tr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,v,p,f),nr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,v,p,f),ir.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,v,p,f)}else this.curveType==="catmullrom"&&(tr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),nr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ir.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(tr.calc(c),nr.calc(c),ir.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function eo(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,c=r*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*r+t}function qf(r,e){const t=1-r;return t*t*e}function Xf(r,e){return 2*(1-r)*r*e}function jf(r,e){return r*r*e}function _i(r,e,t,n){return qf(r,e)+Xf(r,t)+jf(r,n)}function Yf(r,e){const t=1-r;return t*t*t*e}function Zf(r,e){const t=1-r;return 3*t*t*r*e}function Jf(r,e){return 3*(1-r)*r*r*e}function $f(r,e){return r*r*r*e}function vi(r,e,t,n,i){return Yf(r,e)+Zf(r,t)+Jf(r,n)+$f(r,i)}class No extends qt{constructor(e=new ge,t=new ge,n=new ge,i=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ge){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(vi(e,i.x,s.x,o.x,a.x),vi(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kf extends qt{constructor(e=new F,t=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(vi(e,i.x,s.x,o.x,a.x),vi(e,i.y,s.y,o.y,a.y),vi(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pr extends qt{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new ge;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qf extends qt{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oo extends qt{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(_i(e,i.x,s.x,o.x),_i(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ep extends qt{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(_i(e,i.x,s.x,o.x),_i(e,i.y,s.y,o.y),_i(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uo extends qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(eo(a,c.x,l.x,h.x,u.x),eo(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ge().fromArray(i))}return this}}var Bo=Object.freeze({__proto__:null,ArcCurve:Hf,CatmullRomCurve3:Wf,CubicBezierCurve:No,CubicBezierCurve3:Kf,EllipseCurve:ps,LineCurve:Pr,LineCurve3:Qf,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:ep,SplineCurve:Uo});class tp extends qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Pr(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Bo[i.type]().fromJSON(i))}return this}}class gr extends tp{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Pr(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Oo(this.currentPoint.clone(),new ge(e,t),new ge(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new No(this.currentPoint.clone(),new ge(e,t),new ge(n,i),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Uo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,o,a,c),this}absellipse(e,t,n,i,s,o,a,c){const l=new ps(e,t,n,i,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class rs extends gr{constructor(e){super(e),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new gr().fromJSON(i))}return this}}const np={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=ko(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,m;if(n&&(s=op(r,e,s,t)),r.length>80*t){a=l=r[0],c=h=r[1];for(let v=t;v<i;v+=t)u=r[v],d=r[v+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return wi(s,o,t,a,c,m,0),o}};function ko(r,e,t,n,i){let s,o;if(i===_p(r,e,t,n)>0)for(s=e;s<t;s+=n)o=to(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=to(s,r[s],r[s+1],o);return o&&ms(o,o.next)&&(Ti(o),o=o.next),o}function Cn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(ms(t,t.next)||et(t.prev,t,t.next)===0)){if(Ti(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wi(r,e,t,n,i,s,o){if(!r)return;!o&&s&&dp(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?sp(r,n,i,s):ip(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Ti(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=rp(Cn(r),e,t),wi(r,e,t,n,i,s,2)):o===2&&ap(r,e,t,n,i,s):wi(Cn(r),e,t,n,i,s,1);break}}}function ip(r){const e=r.prev,t=r,n=r.next;if(et(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=i>s?i>o?i:o:s>o?s:o,m=a>c?a>l?a:l:c>l?c:l;let v=n.next;for(;v!==e;){if(v.x>=h&&v.x<=d&&v.y>=u&&v.y<=m&&Jn(i,a,s,c,o,l,v.x,v.y)&&et(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function sp(r,e,t,n){const i=r.prev,s=r,o=r.next;if(et(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,h=i.y,u=s.y,d=o.y,m=a<c?a<l?a:l:c<l?c:l,v=h<u?h<d?h:d:u<d?u:d,p=a>c?a>l?a:l:c>l?c:l,f=h>u?h>d?h:d:u>d?u:d,M=xr(m,v,e,t,n),y=xr(p,f,e,t,n);let g=r.prevZ,_=r.nextZ;for(;g&&g.z>=M&&_&&_.z<=y;){if(g.x>=m&&g.x<=p&&g.y>=v&&g.y<=f&&g!==i&&g!==o&&Jn(a,h,c,u,l,d,g.x,g.y)&&et(g.prev,g,g.next)>=0||(g=g.prevZ,_.x>=m&&_.x<=p&&_.y>=v&&_.y<=f&&_!==i&&_!==o&&Jn(a,h,c,u,l,d,_.x,_.y)&&et(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;g&&g.z>=M;){if(g.x>=m&&g.x<=p&&g.y>=v&&g.y<=f&&g!==i&&g!==o&&Jn(a,h,c,u,l,d,g.x,g.y)&&et(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;_&&_.z<=y;){if(_.x>=m&&_.x<=p&&_.y>=v&&_.y<=f&&_!==i&&_!==o&&Jn(a,h,c,u,l,d,_.x,_.y)&&et(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function rp(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!ms(i,s)&&Go(i,n,n.next,s)&&Ei(i,s)&&Ei(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ti(n),Ti(n.next),n=r=s),n=n.next}while(n!==r);return Cn(n)}function ap(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mp(o,a)){let c=Vo(o,a);o=Cn(o,o.next),c=Cn(c,c.next),wi(o,e,t,n,i,s,0),wi(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function op(r,e,t,n){const i=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=ko(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(pp(l));for(i.sort(lp),s=0;s<i.length;s++)t=cp(i[s],t);return t}function lp(r,e){return r.x-e.x}function cp(r,e){const t=hp(r,e);if(!t)return e;const n=Vo(t,r);return Cn(n,n.next),Cn(t,t.next)}function hp(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&Jn(o<l?s:n,o,c,l,o<l?n:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),Ei(t,r)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&up(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function up(r,e){return et(r.prev,r,e.prev)<0&&et(e.next,r,r.next)<0}function dp(r,e,t,n){let i=r;do i.z===0&&(i.z=xr(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,fp(i)}function fp(r){let e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function xr(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function pp(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Jn(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function mp(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!gp(r,e)&&(Ei(r,e)&&Ei(e,r)&&xp(r,e)&&(et(r.prev,r,e.prev)||et(r,e.prev,e))||ms(r,e)&&et(r.prev,r,r.next)>0&&et(e.prev,e,e.next)>0)}function et(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ms(r,e){return r.x===e.x&&r.y===e.y}function Go(r,e,t,n){const i=es(et(r,e,t)),s=es(et(r,e,n)),o=es(et(t,n,r)),a=es(et(t,n,e));return!!(i!==s&&o!==a||i===0&&Qi(r,t,e)||s===0&&Qi(r,n,e)||o===0&&Qi(t,r,n)||a===0&&Qi(t,e,n))}function Qi(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function es(r){return r>0?1:r<0?-1:0}function gp(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Go(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ei(r,e){return et(r.prev,r,r.next)<0?et(r,e,r.next)>=0&&et(r,r.prev,e)>=0:et(r,e,r.prev)<0||et(r,r.next,e)<0}function xp(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Vo(r,e){const t=new _r(r.i,r.x,r.y),n=new _r(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function to(r,e,t,n){const i=new _r(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ti(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function _r(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _p(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Qn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Qn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];no(e),io(n,e);let o=e.length;t.forEach(no);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,io(n,t[c]);const a=np.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function no(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function io(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Rr extends Et{constructor(e=new rs([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new It(i,3)),this.setAttribute("uv",new It(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:m-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3;const M=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:vp;let g,_=!1,S,A,L,x;M&&(g=M.getSpacedPoints(h),_=!0,d=!1,S=M.computeFrenetFrames(h,!1),A=new F,L=new F,x=new F),d||(f=0,m=0,v=0,p=0);const E=a.extractPoints(l);let P=E.shape;const N=E.holes;if(!Qn.isClockWise(P)){P=P.reverse();for(let $=0,Z=N.length;$<Z;$++){const ce=N[$];Qn.isClockWise(ce)&&(N[$]=ce.reverse())}}const I=Qn.triangulateShape(P,N),R=P;for(let $=0,Z=N.length;$<Z;$++){const ce=N[$];P=P.concat(ce)}function G($,Z,ce){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(ce).add($)}const Y=P.length,te=I.length;function X($,Z,ce){let ye,fe,De;const Pe=$.x-Z.x,Ae=$.y-Z.y,ke=ce.x-$.x,Le=ce.y-$.y,C=Pe*Pe+Ae*Ae,b=Pe*Le-Ae*ke;if(Math.abs(b)>Number.EPSILON){const H=Math.sqrt(C),ae=Math.sqrt(ke*ke+Le*Le),le=Z.x-Ae/H,pe=Z.y+Pe/H,D=ce.x-Le/ae,Q=ce.y+ke/ae,q=((D-le)*Le-(Q-pe)*ke)/(Pe*Le-Ae*ke);ye=le+Pe*q-$.x,fe=pe+Ae*q-$.y;const _e=ye*ye+fe*fe;if(_e<=2)return new ge(ye,fe);De=Math.sqrt(_e/2)}else{let H=!1;Pe>Number.EPSILON?ke>Number.EPSILON&&(H=!0):Pe<-Number.EPSILON?ke<-Number.EPSILON&&(H=!0):Math.sign(Ae)===Math.sign(Le)&&(H=!0),H?(ye=-Ae,fe=Pe,De=Math.sqrt(C)):(ye=Pe,fe=Ae,De=Math.sqrt(C/2))}return new ge(ye/De,fe/De)}const re=[];for(let $=0,Z=R.length,ce=Z-1,ye=$+1;$<Z;$++,ce++,ye++)ce===Z&&(ce=0),ye===Z&&(ye=0),re[$]=X(R[$],R[ce],R[ye]);const ee=[];let B,V=re.concat();for(let $=0,Z=N.length;$<Z;$++){const ce=N[$];B=[];for(let ye=0,fe=ce.length,De=fe-1,Pe=ye+1;ye<fe;ye++,De++,Pe++)De===fe&&(De=0),Pe===fe&&(Pe=0),B[ye]=X(ce[ye],ce[De],ce[Pe]);ee.push(B),V=V.concat(B)}for(let $=0;$<f;$++){const Z=$/f,ce=m*Math.cos(Z*Math.PI/2),ye=v*Math.sin(Z*Math.PI/2)+p;for(let fe=0,De=R.length;fe<De;fe++){const Pe=G(R[fe],re[fe],ye);be(Pe.x,Pe.y,-ce)}for(let fe=0,De=N.length;fe<De;fe++){const Pe=N[fe];B=ee[fe];for(let Ae=0,ke=Pe.length;Ae<ke;Ae++){const Le=G(Pe[Ae],B[Ae],ye);be(Le.x,Le.y,-ce)}}}const K=v+p;for(let $=0;$<Y;$++){const Z=d?G(P[$],V[$],K):P[$];_?(L.copy(S.normals[0]).multiplyScalar(Z.x),A.copy(S.binormals[0]).multiplyScalar(Z.y),x.copy(g[0]).add(L).add(A),be(x.x,x.y,x.z)):be(Z.x,Z.y,0)}for(let $=1;$<=h;$++)for(let Z=0;Z<Y;Z++){const ce=d?G(P[Z],V[Z],K):P[Z];_?(L.copy(S.normals[$]).multiplyScalar(ce.x),A.copy(S.binormals[$]).multiplyScalar(ce.y),x.copy(g[$]).add(L).add(A),be(x.x,x.y,x.z)):be(ce.x,ce.y,u/h*$)}for(let $=f-1;$>=0;$--){const Z=$/f,ce=m*Math.cos(Z*Math.PI/2),ye=v*Math.sin(Z*Math.PI/2)+p;for(let fe=0,De=R.length;fe<De;fe++){const Pe=G(R[fe],re[fe],ye);be(Pe.x,Pe.y,u+ce)}for(let fe=0,De=N.length;fe<De;fe++){const Pe=N[fe];B=ee[fe];for(let Ae=0,ke=Pe.length;Ae<ke;Ae++){const Le=G(Pe[Ae],B[Ae],ye);_?be(Le.x,Le.y+g[h-1].y,g[h-1].x+ce):be(Le.x,Le.y,u+ce)}}}oe(),he();function oe(){const $=i.length/3;if(d){let Z=0,ce=Y*Z;for(let ye=0;ye<te;ye++){const fe=I[ye];ue(fe[2]+ce,fe[1]+ce,fe[0]+ce)}Z=h+f*2,ce=Y*Z;for(let ye=0;ye<te;ye++){const fe=I[ye];ue(fe[0]+ce,fe[1]+ce,fe[2]+ce)}}else{for(let Z=0;Z<te;Z++){const ce=I[Z];ue(ce[2],ce[1],ce[0])}for(let Z=0;Z<te;Z++){const ce=I[Z];ue(ce[0]+Y*h,ce[1]+Y*h,ce[2]+Y*h)}}n.addGroup($,i.length/3-$,0)}function he(){const $=i.length/3;let Z=0;W(R,Z),Z+=R.length;for(let ce=0,ye=N.length;ce<ye;ce++){const fe=N[ce];W(fe,Z),Z+=fe.length}n.addGroup($,i.length/3-$,1)}function W($,Z){let ce=$.length;for(;--ce>=0;){const ye=ce;let fe=ce-1;fe<0&&(fe=$.length-1);for(let De=0,Pe=h+f*2;De<Pe;De++){const Ae=Y*De,ke=Y*(De+1),Le=Z+ye+Ae,C=Z+fe+Ae,b=Z+fe+ke,H=Z+ye+ke;Se(Le,C,b,H)}}}function be($,Z,ce){c.push($),c.push(Z),c.push(ce)}function ue($,Z,ce){me($),me(Z),me(ce);const ye=i.length/3,fe=y.generateTopUV(n,i,ye-3,ye-2,ye-1);ve(fe[0]),ve(fe[1]),ve(fe[2])}function Se($,Z,ce,ye){me($),me(Z),me(ye),me(Z),me(ce),me(ye);const fe=i.length/3,De=y.generateSideWallUV(n,i,fe-6,fe-3,fe-2,fe-1);ve(De[0]),ve(De[1]),ve(De[3]),ve(De[1]),ve(De[2]),ve(De[3])}function me($){i.push(c[$*3+0]),i.push(c[$*3+1]),i.push(c[$*3+2])}function ve($){s.push($.x),s.push($.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return yp(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Bo[i.type]().fromJSON(i)),new Rr(n,e.options)}}const vp={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new ge(s,o),new ge(a,c),new ge(l,h)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],m=e[i*3+1],v=e[i*3+2],p=e[s*3],f=e[s*3+1],M=e[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ge(o,1-c),new ge(l,1-u),new ge(d,1-v),new ge(p,1-M)]:[new ge(a,1-c),new ge(h,1-u),new ge(m,1-v),new ge(f,1-M)]}};function yp(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class dt extends Et{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new F,d=new F,m=[],v=[],p=[],f=[];for(let M=0;M<=n;M++){const y=[],g=M/n;let _=0;M==0&&o==0?_=.5/t:M==n&&c==Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){const A=S/t;u.x=-e*Math.cos(i+A*s)*Math.sin(o+g*a),u.y=e*Math.cos(o+g*a),u.z=e*Math.sin(i+A*s)*Math.sin(o+g*a),v.push(u.x,u.y,u.z),d.copy(u).normalize(),p.push(d.x,d.y,d.z),f.push(A+_,1-g),y.push(l++)}h.push(y)}for(let M=0;M<n;M++)for(let y=0;y<t;y++){const g=h[M][y+1],_=h[M][y],S=h[M+1][y],A=h[M+1][y+1];(M!==0||o>0)&&m.push(g,_,A),(M!==n-1||c<Math.PI)&&m.push(_,S,A)}this.setIndex(m),this.setAttribute("position",new It(v,3)),this.setAttribute("normal",new It(p,3)),this.setAttribute("uv",new It(f,2))}static fromJSON(e){return new dt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vr extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=br,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pi extends Pn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=br,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ls={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Mp{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const m=l[u],v=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null}}}const Sp=new Mp;class gs{constructor(e){this.manager=e!==void 0?e:Sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Kt={};class bp extends Error{constructor(e,t){super(e),this.response=t}}class wp extends gs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ls.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Kt[e]!==void 0){Kt[e].push({onLoad:t,onProgress:n,onError:i});return}Kt[e]=[],Kt[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Kt[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,v=m!==0;let p=0;const f=new ReadableStream({start(M){y();function y(){u.read().then(({done:g,value:_})=>{if(g)M.close();else{p+=_.byteLength;const S=new ProgressEvent("progress",{lengthComputable:v,loaded:p,total:m});for(let A=0,L=h.length;A<L;A++){const x=h[A];x.onProgress&&x.onProgress(S)}M.enqueue(_),y()}})}}});return new Response(f)}else throw new bp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(v=>m.decode(v))}}}).then(l=>{ls.add(e,l);const h=Kt[e];delete Kt[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=Kt[e];if(h===void 0)throw this.manager.itemError(e),l;delete Kt[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ep extends gs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ls.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=bi("img");function c(){h(),ls.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class wt extends gs{constructor(e){super(e)}load(e,t,n,i){const s=new St,o=new Ep(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ho extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const sr=new nt,so=new F,ro=new F;class Tp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;so.setFromMatrixPosition(e.matrixWorld),t.position.copy(so),ro.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ro),t.updateMatrixWorld(),sr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ao=new nt,mi=new F,rr=new F;class Ap extends Tp{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),mi.setFromMatrixPosition(e.matrixWorld),n.position.copy(mi),rr.copy(n.position),rr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(rr),n.updateMatrixWorld(),i.makeTranslation(-mi.x,-mi.y,-mi.z),ao.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ao)}}class Dr extends Ho{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ap}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ir extends Ho{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=oo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=oo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function oo(){return(typeof performance>"u"?Date:performance).now()}class Lp{constructor(e,t,n=0,i=1/0){this.ray=new wr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return yr(e,this,n,t),n.sort(lo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)yr(e[i],this,n,t);return n.sort(lo),n}}function lo(r,e){return r.distance-e.distance}function yr(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)yr(i[s],e,t,!0)}}class co{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Pp{constructor(){this.type="ShapePath",this.color=new Ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new gr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(M){const y=[];for(let g=0,_=M.length;g<_;g++){const S=M[g],A=new rs;A.curves=S.curves,y.push(A)}return y}function n(M,y){const g=y.length;let _=!1;for(let S=g-1,A=0;A<g;S=A++){let L=y[S],x=y[A],E=x.x-L.x,P=x.y-L.y;if(Math.abs(P)>Number.EPSILON){if(P<0&&(L=y[A],E=-E,x=y[S],P=-P),M.y<L.y||M.y>x.y)continue;if(M.y===L.y){if(M.x===L.x)return!0}else{const N=P*(M.x-L.x)-E*(M.y-L.y);if(N===0)return!0;if(N<0)continue;_=!_}}else{if(M.y!==L.y)continue;if(x.x<=M.x&&M.x<=L.x||L.x<=M.x&&M.x<=x.x)return!0}}return _}const i=Qn.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new rs,c.curves=a.curves,l.push(c),l;let h=!i(s[0].getPoints());h=e?!h:h;const u=[],d=[];let m=[],v=0,p;d[v]=void 0,m[v]=[];for(let M=0,y=s.length;M<y;M++)a=s[M],p=a.getPoints(),o=i(p),o=e?!o:o,o?(!h&&d[v]&&v++,d[v]={s:new rs,p},d[v].s.curves=a.curves,h&&v++,m[v]=[]):m[v].push({h:a,p:p[0]});if(!d[0])return t(s);if(d.length>1){let M=!1,y=0;for(let g=0,_=d.length;g<_;g++)u[g]=[];for(let g=0,_=d.length;g<_;g++){const S=m[g];for(let A=0;A<S.length;A++){const L=S[A];let x=!0;for(let E=0;E<d.length;E++)n(L.p,d[E].p)&&(g!==E&&y++,x?(x=!1,u[E].push(L)):M=!0);x&&u[g].push(L)}}y>0&&M===!1&&(m=u)}let f;for(let M=0,y=d.length;M<y;M++){c=d[M].s,l.push(c),f=m[M];for(let g=0,_=f.length;g<_;g++)c.holes.push(f[g].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mr);const ho={type:"change"},ar={type:"start"},uo={type:"end"};class Fr extends Ln{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rn.ROTATE,MIDDLE:Rn.DOLLY,RIGHT:Rn.PAN},this.touches={ONE:Dn.ROTATE,TWO:Dn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",ke),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ke),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ho),n.update(),s=i.NONE},this.update=function(){const D=new F,Q=new Tn().setFromUnitVectors(e.up,new F(0,1,0)),q=Q.clone().invert(),_e=new F,we=new Tn,Me=2*Math.PI;return function(){const Te=n.object.position;D.copy(Te).sub(n.target),D.applyQuaternion(Q),a.setFromVector3(D),n.autoRotate&&s===i.NONE&&E(L()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ie=n.minAzimuthAngle,Oe=n.maxAzimuthAngle;return isFinite(Ie)&&isFinite(Oe)&&(Ie<-Math.PI?Ie+=Me:Ie>Math.PI&&(Ie-=Me),Oe<-Math.PI?Oe+=Me:Oe>Math.PI&&(Oe-=Me),Ie<=Oe?a.theta=Math.max(Ie,Math.min(Oe,a.theta)):a.theta=a.theta>(Ie+Oe)/2?Math.max(Ie,a.theta):Math.min(Oe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),D.setFromSpherical(a),D.applyQuaternion(q),Te.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||_e.distanceToSquared(n.object.position)>o||8*(1-we.dot(n.object.quaternion))>o?(n.dispatchEvent(ho),_e.copy(n.object.position),we.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",b),n.domElement.removeEventListener("pointerdown",ce),n.domElement.removeEventListener("pointercancel",fe),n.domElement.removeEventListener("wheel",Ae),n.domElement.removeEventListener("pointermove",ye),n.domElement.removeEventListener("pointerup",fe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ke),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new co,c=new co;let l=1;const h=new F;let u=!1;const d=new ge,m=new ge,v=new ge,p=new ge,f=new ge,M=new ge,y=new ge,g=new ge,_=new ge,S=[],A={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function E(D){c.theta-=D}function P(D){c.phi-=D}const N=function(){const D=new F;return function(q,_e){D.setFromMatrixColumn(_e,0),D.multiplyScalar(-q),h.add(D)}}(),O=function(){const D=new F;return function(q,_e){n.screenSpacePanning===!0?D.setFromMatrixColumn(_e,1):(D.setFromMatrixColumn(_e,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(q),h.add(D)}}(),I=function(){const D=new F;return function(q,_e){const we=n.domElement;if(n.object.isPerspectiveCamera){const Me=n.object.position;D.copy(Me).sub(n.target);let Ee=D.length();Ee*=Math.tan(n.object.fov/2*Math.PI/180),N(2*q*Ee/we.clientHeight,n.object.matrix),O(2*_e*Ee/we.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(q*(n.object.right-n.object.left)/n.object.zoom/we.clientWidth,n.object.matrix),O(_e*(n.object.top-n.object.bottom)/n.object.zoom/we.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(D){n.object.isPerspectiveCamera?l/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(D){n.object.isPerspectiveCamera?l*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(D){d.set(D.clientX,D.clientY)}function te(D){y.set(D.clientX,D.clientY)}function X(D){p.set(D.clientX,D.clientY)}function re(D){m.set(D.clientX,D.clientY),v.subVectors(m,d).multiplyScalar(n.rotateSpeed);const Q=n.domElement;E(2*Math.PI*v.x/Q.clientHeight),P(2*Math.PI*v.y/Q.clientHeight),d.copy(m),n.update()}function ee(D){g.set(D.clientX,D.clientY),_.subVectors(g,y),_.y>0?R(x()):_.y<0&&G(x()),y.copy(g),n.update()}function B(D){f.set(D.clientX,D.clientY),M.subVectors(f,p).multiplyScalar(n.panSpeed),I(M.x,M.y),p.copy(f),n.update()}function V(D){D.deltaY<0?G(x()):D.deltaY>0&&R(x()),n.update()}function K(D){let Q=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),Q=!0;break}Q&&(D.preventDefault(),n.update())}function oe(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const D=.5*(S[0].pageX+S[1].pageX),Q=.5*(S[0].pageY+S[1].pageY);d.set(D,Q)}}function he(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const D=.5*(S[0].pageX+S[1].pageX),Q=.5*(S[0].pageY+S[1].pageY);p.set(D,Q)}}function W(){const D=S[0].pageX-S[1].pageX,Q=S[0].pageY-S[1].pageY,q=Math.sqrt(D*D+Q*Q);y.set(0,q)}function be(){n.enableZoom&&W(),n.enablePan&&he()}function ue(){n.enableZoom&&W(),n.enableRotate&&oe()}function Se(D){if(S.length==1)m.set(D.pageX,D.pageY);else{const q=pe(D),_e=.5*(D.pageX+q.x),we=.5*(D.pageY+q.y);m.set(_e,we)}v.subVectors(m,d).multiplyScalar(n.rotateSpeed);const Q=n.domElement;E(2*Math.PI*v.x/Q.clientHeight),P(2*Math.PI*v.y/Q.clientHeight),d.copy(m)}function me(D){if(S.length===1)f.set(D.pageX,D.pageY);else{const Q=pe(D),q=.5*(D.pageX+Q.x),_e=.5*(D.pageY+Q.y);f.set(q,_e)}M.subVectors(f,p).multiplyScalar(n.panSpeed),I(M.x,M.y),p.copy(f)}function ve(D){const Q=pe(D),q=D.pageX-Q.x,_e=D.pageY-Q.y,we=Math.sqrt(q*q+_e*_e);g.set(0,we),_.set(0,Math.pow(g.y/y.y,n.zoomSpeed)),R(_.y),y.copy(g)}function $(D){n.enableZoom&&ve(D),n.enablePan&&me(D)}function Z(D){n.enableZoom&&ve(D),n.enableRotate&&Se(D)}function ce(D){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",ye),n.domElement.addEventListener("pointerup",fe)),H(D),D.pointerType==="touch"?Le(D):De(D))}function ye(D){n.enabled!==!1&&(D.pointerType==="touch"?C(D):Pe(D))}function fe(D){ae(D),S.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",ye),n.domElement.removeEventListener("pointerup",fe)),n.dispatchEvent(uo),s=i.NONE}function De(D){let Q;switch(D.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case Rn.DOLLY:if(n.enableZoom===!1)return;te(D),s=i.DOLLY;break;case Rn.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;X(D),s=i.PAN}else{if(n.enableRotate===!1)return;Y(D),s=i.ROTATE}break;case Rn.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;Y(D),s=i.ROTATE}else{if(n.enablePan===!1)return;X(D),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ar)}function Pe(D){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;re(D);break;case i.DOLLY:if(n.enableZoom===!1)return;ee(D);break;case i.PAN:if(n.enablePan===!1)return;B(D);break}}function Ae(D){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(D.preventDefault(),n.dispatchEvent(ar),V(D),n.dispatchEvent(uo))}function ke(D){n.enabled===!1||n.enablePan===!1||K(D)}function Le(D){switch(le(D),S.length){case 1:switch(n.touches.ONE){case Dn.ROTATE:if(n.enableRotate===!1)return;oe(),s=i.TOUCH_ROTATE;break;case Dn.PAN:if(n.enablePan===!1)return;he(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Dn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;be(),s=i.TOUCH_DOLLY_PAN;break;case Dn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ue(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ar)}function C(D){switch(le(D),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Se(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;me(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Z(D),n.update();break;default:s=i.NONE}}function b(D){n.enabled!==!1&&D.preventDefault()}function H(D){S.push(D)}function ae(D){delete A[D.pointerId];for(let Q=0;Q<S.length;Q++)if(S[Q].pointerId==D.pointerId){S.splice(Q,1);return}}function le(D){let Q=A[D.pointerId];Q===void 0&&(Q=new ge,A[D.pointerId]=Q),Q.set(D.pageX,D.pageY)}function pe(D){const Q=D.pointerId===S[0].pointerId?S[1]:S[0];return A[Q.pointerId]}n.domElement.addEventListener("contextmenu",b),n.domElement.addEventListener("pointerdown",ce),n.domElement.addEventListener("pointercancel",fe),n.domElement.addEventListener("wheel",Ae,{passive:!1}),this.update()}}class Rp extends gs{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new wp(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const c=s.parse(JSON.parse(a));t&&t(c)},n,i)}parse(e){return new Dp(e)}}class Dp{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=Ip(e,t,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function Ip(r,e,t){const n=Array.from(r),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,c=0;for(let l=0;l<n.length;l++){const h=n[l];if(h===`
`)a=0,c-=s;else{const u=Fp(h,i,a,c,t);a+=u.offsetX,o.push(u.path)}}return o}function Fp(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new Pp;let a,c,l,h,u,d,m,v;if(s.o){const p=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let f=0,M=p.length;f<M;)switch(p[f++]){case"m":a=p[f++]*e+t,c=p[f++]*e+n,o.moveTo(a,c);break;case"l":a=p[f++]*e+t,c=p[f++]*e+n,o.lineTo(a,c);break;case"q":l=p[f++]*e+t,h=p[f++]*e+n,u=p[f++]*e+t,d=p[f++]*e+n,o.quadraticCurveTo(u,d,l,h);break;case"b":l=p[f++]*e+t,h=p[f++]*e+n,u=p[f++]*e+t,d=p[f++]*e+n,m=p[f++]*e+t,v=p[f++]*e+n,o.bezierCurveTo(u,d,m,v,l,h);break}}return{offsetX:s.ha*e,path:o}}class fo extends Rr{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}class po extends Ze{constructor(e,t,n=!1,i=!1,s=1e4){const o=new Et;super(o,t),this.isMarchingCubes=!0;const a=this,c=new Float32Array(12*3),l=new Float32Array(12*3),h=new Float32Array(12*3);this.enableUvs=n,this.enableColors=i,this.init=function(y){this.resolution=y,this.isolation=80,this.size=y,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const g=s*3;this.positionArray=new Float32Array(g*3);const _=new Mt(this.positionArray,3);_.setUsage(Ri),o.setAttribute("position",_),this.normalArray=new Float32Array(g*3);const S=new Mt(this.normalArray,3);if(S.setUsage(Ri),o.setAttribute("normal",S),this.enableUvs){this.uvArray=new Float32Array(g*2);const A=new Mt(this.uvArray,2);A.setUsage(Ri),o.setAttribute("uv",A)}if(this.enableColors){this.colorArray=new Float32Array(g*3);const A=new Mt(this.colorArray,3);A.setUsage(Ri),o.setAttribute("color",A)}};function u(y,g,_){return y+(g-y)*_}function d(y,g,_,S,A,L,x,E,P,N){const O=(_-x)/(E-x),I=a.normal_cache;c[g+0]=S+O*a.delta,c[g+1]=A,c[g+2]=L,l[g+0]=u(I[y+0],I[y+3],O),l[g+1]=u(I[y+1],I[y+4],O),l[g+2]=u(I[y+2],I[y+5],O),h[g+0]=u(a.palette[P*3+0],a.palette[N*3+0],O),h[g+1]=u(a.palette[P*3+1],a.palette[N*3+1],O),h[g+2]=u(a.palette[P*3+2],a.palette[N*3+2],O)}function m(y,g,_,S,A,L,x,E,P,N){const O=(_-x)/(E-x),I=a.normal_cache;c[g+0]=S,c[g+1]=A+O*a.delta,c[g+2]=L;const R=y+a.yd*3;l[g+0]=u(I[y+0],I[R+0],O),l[g+1]=u(I[y+1],I[R+1],O),l[g+2]=u(I[y+2],I[R+2],O),h[g+0]=u(a.palette[P*3+0],a.palette[N*3+0],O),h[g+1]=u(a.palette[P*3+1],a.palette[N*3+1],O),h[g+2]=u(a.palette[P*3+2],a.palette[N*3+2],O)}function v(y,g,_,S,A,L,x,E,P,N){const O=(_-x)/(E-x),I=a.normal_cache;c[g+0]=S,c[g+1]=A,c[g+2]=L+O*a.delta;const R=y+a.zd*3;l[g+0]=u(I[y+0],I[R+0],O),l[g+1]=u(I[y+1],I[R+1],O),l[g+2]=u(I[y+2],I[R+2],O),h[g+0]=u(a.palette[P*3+0],a.palette[N*3+0],O),h[g+1]=u(a.palette[P*3+1],a.palette[N*3+1],O),h[g+2]=u(a.palette[P*3+2],a.palette[N*3+2],O)}function p(y){const g=y*3;a.normal_cache[g]===0&&(a.normal_cache[g+0]=a.field[y-1]-a.field[y+1],a.normal_cache[g+1]=a.field[y-a.yd]-a.field[y+a.yd],a.normal_cache[g+2]=a.field[y-a.zd]-a.field[y+a.zd])}function f(y,g,_,S,A){const L=S+1,x=S+a.yd,E=S+a.zd,P=L+a.yd,N=L+a.zd,O=S+a.yd+a.zd,I=L+a.yd+a.zd;let R=0;const G=a.field[S],Y=a.field[L],te=a.field[x],X=a.field[P],re=a.field[E],ee=a.field[N],B=a.field[O],V=a.field[I];G<A&&(R|=1),Y<A&&(R|=2),te<A&&(R|=8),X<A&&(R|=4),re<A&&(R|=16),ee<A&&(R|=32),B<A&&(R|=128),V<A&&(R|=64);const K=zp[R];if(K===0)return 0;const oe=a.delta,he=y+oe,W=g+oe,be=_+oe;K&1&&(p(S),p(L),d(S*3,0,A,y,g,_,G,Y,S,L)),K&2&&(p(L),p(P),m(L*3,3,A,he,g,_,Y,X,L,P)),K&4&&(p(x),p(P),d(x*3,6,A,y,W,_,te,X,x,P)),K&8&&(p(S),p(x),m(S*3,9,A,y,g,_,G,te,S,x)),K&16&&(p(E),p(N),d(E*3,12,A,y,g,be,re,ee,E,N)),K&32&&(p(N),p(I),m(N*3,15,A,he,g,be,ee,V,N,I)),K&64&&(p(O),p(I),d(O*3,18,A,y,W,be,B,V,O,I)),K&128&&(p(E),p(O),m(E*3,21,A,y,g,be,re,B,E,O)),K&256&&(p(S),p(E),v(S*3,24,A,y,g,_,G,re,S,E)),K&512&&(p(L),p(N),v(L*3,27,A,he,g,_,Y,ee,L,N)),K&1024&&(p(P),p(I),v(P*3,30,A,he,W,_,X,V,P,I)),K&2048&&(p(x),p(O),v(x*3,33,A,y,W,_,te,B,x,O)),R<<=4;let ue,Se,me,ve=0,$=0;for(;ts[R+$]!=-1;)ue=R+$,Se=ue+1,me=ue+2,M(c,l,h,3*ts[ue],3*ts[Se],3*ts[me]),$+=3,ve++;return ve}function M(y,g,_,S,A,L){const x=a.count*3;if(a.positionArray[x+0]=y[S],a.positionArray[x+1]=y[S+1],a.positionArray[x+2]=y[S+2],a.positionArray[x+3]=y[A],a.positionArray[x+4]=y[A+1],a.positionArray[x+5]=y[A+2],a.positionArray[x+6]=y[L],a.positionArray[x+7]=y[L+1],a.positionArray[x+8]=y[L+2],a.material.flatShading===!0){const E=(g[S+0]+g[A+0]+g[L+0])/3,P=(g[S+1]+g[A+1]+g[L+1])/3,N=(g[S+2]+g[A+2]+g[L+2])/3;a.normalArray[x+0]=E,a.normalArray[x+1]=P,a.normalArray[x+2]=N,a.normalArray[x+3]=E,a.normalArray[x+4]=P,a.normalArray[x+5]=N,a.normalArray[x+6]=E,a.normalArray[x+7]=P,a.normalArray[x+8]=N}else a.normalArray[x+0]=g[S+0],a.normalArray[x+1]=g[S+1],a.normalArray[x+2]=g[S+2],a.normalArray[x+3]=g[A+0],a.normalArray[x+4]=g[A+1],a.normalArray[x+5]=g[A+2],a.normalArray[x+6]=g[L+0],a.normalArray[x+7]=g[L+1],a.normalArray[x+8]=g[L+2];if(a.enableUvs){const E=a.count*2;a.uvArray[E+0]=y[S+0],a.uvArray[E+1]=y[S+2],a.uvArray[E+2]=y[A+0],a.uvArray[E+3]=y[A+2],a.uvArray[E+4]=y[L+0],a.uvArray[E+5]=y[L+2]}a.enableColors&&(a.colorArray[x+0]=_[S+0],a.colorArray[x+1]=_[S+1],a.colorArray[x+2]=_[S+2],a.colorArray[x+3]=_[A+0],a.colorArray[x+4]=_[A+1],a.colorArray[x+5]=_[A+2],a.colorArray[x+6]=_[L+0],a.colorArray[x+7]=_[L+1],a.colorArray[x+8]=_[L+2]),a.count+=3}this.addBall=function(y,g,_,S,A,L){const x=Math.sign(S);S=Math.abs(S);const E=L!=null;let P=new Ve(y,g,_);if(E)try{P=L instanceof Ve?L:Array.isArray(L)?new Ve(Math.min(Math.abs(L[0]),1),Math.min(Math.abs(L[1]),1),Math.min(Math.abs(L[2]),1)):new Ve(L)}catch{P=new Ve(y,g,_)}const N=this.size*Math.sqrt(S/A),O=_*this.size,I=g*this.size,R=y*this.size;let G=Math.floor(O-N);G<1&&(G=1);let Y=Math.floor(O+N);Y>this.size-1&&(Y=this.size-1);let te=Math.floor(I-N);te<1&&(te=1);let X=Math.floor(I+N);X>this.size-1&&(X=this.size-1);let re=Math.floor(R-N);re<1&&(re=1);let ee=Math.floor(R+N);ee>this.size-1&&(ee=this.size-1);let B,V,K,oe,he,W,be,ue,Se,me,ve;for(K=G;K<Y;K++)for(he=this.size2*K,ue=K/this.size-_,Se=ue*ue,V=te;V<X;V++)for(oe=he+this.size*V,be=V/this.size-g,me=be*be,B=re;B<ee;B++)if(W=B/this.size-y,ve=S/(1e-6+W*W+me+Se)-A,ve>0){this.field[oe+B]+=ve*x;const $=Math.sqrt((B-R)*(B-R)+(V-I)*(V-I)+(K-O)*(K-O))/N,Z=1-$*$*$*($*($*6-15)+10);this.palette[(oe+B)*3+0]+=P.r*Z,this.palette[(oe+B)*3+1]+=P.g*Z,this.palette[(oe+B)*3+2]+=P.b*Z}},this.addPlaneX=function(y,g){const _=this.size,S=this.yd,A=this.zd,L=this.field;let x,E,P,N,O,I,R,G=_*Math.sqrt(y/g);for(G>_&&(G=_),x=0;x<G;x++)if(I=x/_,N=I*I,O=y/(1e-4+N)-g,O>0)for(E=0;E<_;E++)for(R=x+E*S,P=0;P<_;P++)L[A*P+R]+=O},this.addPlaneY=function(y,g){const _=this.size,S=this.yd,A=this.zd,L=this.field;let x,E,P,N,O,I,R,G,Y=_*Math.sqrt(y/g);for(Y>_&&(Y=_),E=0;E<Y;E++)if(I=E/_,N=I*I,O=y/(1e-4+N)-g,O>0)for(R=E*S,x=0;x<_;x++)for(G=R+x,P=0;P<_;P++)L[A*P+G]+=O},this.addPlaneZ=function(y,g){const _=this.size,S=this.yd,A=this.zd,L=this.field;let x,E,P,N,O,I,R,G,Y=_*Math.sqrt(y/g);for(Y>_&&(Y=_),P=0;P<Y;P++)if(I=P/_,N=I*I,O=y/(1e-4+N)-g,O>0)for(R=A*P,E=0;E<_;E++)for(G=R+E*S,x=0;x<_;x++)L[G+x]+=O},this.setCell=function(y,g,_,S){const A=this.size2*_+this.size*g+y;this.field[A]=S},this.getCell=function(y,g,_){const S=this.size2*_+this.size*g+y;return this.field[S]},this.blur=function(y=1){const g=this.field,_=g.slice(),S=this.size,A=this.size2;for(let L=0;L<S;L++)for(let x=0;x<S;x++)for(let E=0;E<S;E++){const P=A*E+S*x+L;let N=_[P],O=1;for(let I=-1;I<=1;I+=2){const R=I+L;if(!(R<0||R>=S))for(let G=-1;G<=1;G+=2){const Y=G+x;if(!(Y<0||Y>=S))for(let te=-1;te<=1;te+=2){const X=te+E;if(X<0||X>=S)continue;const re=A*X+S*Y+R,ee=_[re];O++,N+=y*(ee-N)/O}}}g[P]=N}},this.reset=function(){for(let y=0;y<this.size3;y++)this.normal_cache[y*3]=0,this.field[y]=0,this.palette[y*3]=this.palette[y*3+1]=this.palette[y*3+2]=0},this.update=function(){this.count=0;const y=this.size-2;for(let g=1;g<y;g++){const _=this.size2*g,S=(g-this.halfsize)/this.halfsize;for(let A=1;A<y;A++){const L=_+this.size*A,x=(A-this.halfsize)/this.halfsize;for(let E=1;E<y;E++){const P=(E-this.halfsize)/this.halfsize,N=L+E;f(P,x,S,N,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>s&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const zp=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),ts=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);let zr=document.getElementById("space-system-button"),Nr=document.getElementById("solar-system-button"),Or=document.getElementById("earth-system-button");document.getElementById("topography-system-button");window.onload=function(){xs()};function Ur(){const r=66743e-15,e=198847e25,t=1496e8,n=3154e4,i=200/t;document.querySelectorAll("#composition-chart-container, .simulation-time").forEach(ie=>{ie.style.display="block"}),document.getElementById("cut-earth-button").style.display="none",document.getElementById("exit-clipping-button").style.display="none";let s=null;window.addEventListener("click",()=>{const ie=document.getElementById("bg-music");ie&&ie.play()},{once:!0});const o=document.querySelector(".webgl"),a=new fs({canvas:o,antialias:!0});a.setSize(window.innerWidth,window.innerHeight),a.setClearColor(16),a.setPixelRatio(window.devicePixelRatio);const c=new Cr,l=new yt(70,window.innerWidth/window.innerHeight,.1,5e3);l.position.set(0,400,800);const h=new Fr(l,a.domElement);h.enableDamping=!0,h.autoRotate=!0,h.autoRotateSpeed=.03;const d=new wt().load("Texture_planets/Milkyway.jpg",()=>{a.setClearColor(0,1)});d.mapping=as,d.colorSpace=kt,c.background=d,window.addEventListener("resize",()=>{a.setSize(window.innerWidth,window.innerHeight),l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix()});let m=e;const v=new wt().load("Texture_planets/Sun-texture.jpg"),p=new dt(60,64,64),f=new vr({map:v,emissive:16763955,emissiveMap:v,emissiveIntensity:1.5,metalness:.2,roughness:.5}),M=new Ze(p,f);c.add(M);const y=new Dr(16768392,10,0,2);y.position.set(0,0,0),c.add(y);const g=new dt(90,64,64),_=new Rt({color:16755251,transparent:!0,opacity:.15,blending:vn,side:ht,depthWrite:!1}),S=new Ze(g,_),A=new Ir(3355494,.6);c.add(A);function L(){const ie=Date.now()*.001;M.rotation.y-=.002,S.rotation.y-=.001,S.material.opacity=.12+.03*Math.sin(ie*2),requestAnimationFrame(L)}L();const x=document.createElement("div");x.id="composition-chart-container",x.innerHTML=`
    <div id="chart-header">
        <select id="chart-mode">
        <option value="average">Average composition</option>
        <option value="planet">Selected planet</option>
        </select>
        <button id="toggle-chart">Hide graphs</button>
    </div>
    <div id="charts">
        <canvas id="chart-h2o"></canvas>
        <canvas id="chart-fe"></canvas>
        <canvas id="chart-sio2"></canvas>
    </div>
    `,document.body.appendChild(x);let E=0;const P=document.createElement("div");P.classList.add("simulation-time"),P.style.cssText=`
    position: absolute;
    top: 100px;         /* ⬇ move up a bit if it's too low */
    right: 360px;       /* ⬅ move left so it's not hidden behind GUI */
    color: #99aaff;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    background: rgba(0,0,30,0.6);
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid rgba(120,120,255,0.3);
    width: 220px;
    text-align: right;
    z-index: 101;
    opacity: 0;         /* start hidden */
    transition: opacity 0.3s ease;
    `,P.innerText="Time: 0.00 Myr",document.body.appendChild(P),setTimeout(()=>P.style.opacity=1,100);let N=r,O=2e5,I=1e9,R=0,G=1.5,Y=0;const te=3e3,X=.02*t;let re=4e3;const ee=10;let B={rMin:.5*t,rMax:5*t,thickness:.05*t},V=300;const K=[],oe=new Rt({color:16777215,transparent:!0,opacity:.9});function he(){const ie=B.rMin+Math.random()*(B.rMax-B.rMin),w=Math.random()*Math.PI*2,z=(Math.random()-.5)*(2*B.thickness),j=new F(ie*Math.cos(w),z,ie*Math.sin(w)),se=Math.sqrt(N*m/ie),de=new F(-se*Math.sin(w),(Math.random()-.5)*.01*se,se*Math.cos(w)),Re=1e21+Math.random()*9e21,Ue=Math.cbrt(3*Re/(4*Math.PI*te)),He=3*t,Ye=ie>He?Math.random()*.3+.1:Math.random()*.05,ze=ie<1.5*t?Math.random()*.4+.2:Math.random()*.1,Je=Math.max(0,1-Ye-ze),tt=new Ve().setHSL(.6-.4*Ye,1,.55),Ht=new dt(Math.max(Ue*i*re,.5),16,16),tn=new vr({color:tt,emissive:tt.clone().multiplyScalar(.3)}),ft=new Ze(Ht,tn);ft.position.copy(j.clone().multiplyScalar(i)),c.add(ft);const Xt=new Et,T=new Float32Array(ee*3);Xt.setAttribute("position",new Mt(T,3));const k=new os({color:tt,transparent:!0,opacity:.9,linewidth:3,depthTest:!1,blending:vn}),J=new mr(Xt,k);return c.add(J),{pos:j,vel:de,mass:Re,radius:Ue,mesh:ft,active:!0,trail:J,composition:{H2O:Ye,Fe:ze,SiO2:Je},trailIndex:0}}function W(ie){for(const w of K)w.mesh&&c.remove(w.mesh),w.trail&&c.remove(w.trail);K.length=0;for(let w=0;w<ie;w++)K.push(he())}W(V);const be=new Zn;c.add(be);function ue(ie){const w=new dt(3,8,8),z=new Ze(w,oe.clone());if(z.position.copy(ie),z.scale.setScalar(1),be.add(z),window.TWEEN)new TWEEN.Tween(z.scale).to({x:15,y:15,z:15},400).easing(TWEEN.Easing.Quadratic.Out).onUpdate(()=>z.material.opacity*=.95).onComplete(()=>be.remove(z)).start();else{let j=1;const se=()=>{j*=.85,z.scale.multiplyScalar(1.15),z.material.opacity=j,j>.05?requestAnimationFrame(se):be.remove(z)};se()}}const Se={H2O:0,Fe:0,SiO2:0};function me(){let ie=0,w=0,z=0,j=0;for(const se of K)se.active&&(ie+=se.mass,w+=se.composition.H2O*se.mass,z+=se.composition.Fe*se.mass,j+=se.composition.SiO2*se.mass);ie!==0&&(Se.H2O=(w/ie).toFixed(3),Se.Fe=(z/ie).toFixed(3),Se.SiO2=(j/ie).toFixed(3))}let ve={name:"None",mass:0,radius:0,density:0,H2O:0,Fe:0,SiO2:0};const $=document.getElementById("chart-mode"),Z=document.getElementById("toggle-chart"),ce=document.getElementById("charts"),ye=(ie,w)=>({type:"line",data:{datasets:[{label:ie,data:[],borderColor:w,fill:!1,tension:.2}]},options:{animation:!1,plugins:{legend:{labels:{color:"#fff"}}},scales:{x:{type:"linear",min:0,ticks:{color:"#ccc",callback:z=>z.toFixed(2)},title:{text:"Time (Myr)",color:"#ccc",display:!0}},y:{ticks:{color:"#ccc"},beginAtZero:!0,title:{text:"%",color:"#ccc",display:!0}}}}}),fe=new Chart(document.getElementById("chart-h2o"),ye("H₂O (%)","#44aaff")),De=new Chart(document.getElementById("chart-fe"),ye("Fe (%)","#ffaa44")),Pe=new Chart(document.getElementById("chart-sio2"),ye("SiO₂ (%)","#88ff88"));Z.addEventListener("click",()=>{ce.style.display==="none"?(ce.style.display="block",Z.textContent="Hide graphs"):(ce.style.display="none",Z.textContent="Show graphs")});function Ae(){requestAnimationFrame(Ae),window.TWEEN&&TWEEN.update(),E+=O*n;const ie=E/n/1e6;P.innerText=`Time: ${ie.toFixed(2)} Myr`;for(const w of K){if(!w.active)continue;const z=w.pos.clone().multiplyScalar(-1),j=z.lengthSq()+I,se=Math.sqrt(j),de=z.normalize().multiplyScalar(N*m/j);w.vel.addScaledVector(de,O),se<X&&(w.active=!1,c.remove(w.mesh),c.remove(w.trail))}for(let w=0;w<K.length;w++){const z=K[w];if(z.active)for(let j=w+1;j<K.length;j++){const se=K[j];if(!se.active)continue;const de=se.pos.clone().sub(z.pos),Re=de.lengthSq()+I;if(Math.sqrt(Re)<G*(z.radius+se.radius)){const ze=z.mass+se.mass;for(const ft of Object.keys(z.composition))z.composition[ft]=(z.composition[ft]*z.mass+se.composition[ft]*se.mass)/ze;if(z.vel.multiplyScalar(z.mass/ze).addScaledVector(se.vel,se.mass/ze),Y>0){const ft=new F(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(Y*z.vel.length());z.vel.add(ft)}z.mass=ze;const Je=z.radius;z.radius=Math.cbrt(ze);const tt=z.radius/Je;z.mesh.scale.multiplyScalar(tt);const Ht=z.composition.H2O,tn=new Ve().setHSL(.6-.4*Ht,1,.55);z.mesh.material.color.copy(tn),z.mesh.material.emissive.copy(tn.clone().multiplyScalar(.3)),ue(z.pos),se.active=!1,c.remove(se.mesh),c.remove(se.trail);continue}const He=N*se.mass/Re,Ye=de.normalize().multiplyScalar(He*O);z.vel.add(Ye),se.vel.addScaledVector(Ye,-(z.mass/se.mass))}}for(const w of K){if(!w.active)continue;w.vel.multiplyScalar(1-R),w.pos.addScaledVector(w.vel,O),w.mesh.position.copy(w.pos.clone().multiplyScalar(i));const z=w.trail.geometry.attributes.position.array,j=w.trailIndex%ee*3;z[j]=w.pos.x*i,z[j+1]=w.pos.y*i,z[j+2]=w.pos.z*i,w.trailIndex++,w.trail.geometry.attributes.position.needsUpdate=!0;const se=Math.min(w.trailIndex,ee);w.trail.geometry.setDrawRange(0,se)}if(me(),Math.floor(E*10)%5===0){const w=E/n/1e6,z=$.value==="average"?Se:ve;[fe,De,Pe].forEach((j,se)=>{const de=se===0?z.H2O*100:se===1?z.Fe*100:z.SiO2*100;j.data.datasets[0].data.push({x:w,y:de}),j.data.datasets[0].data.length>500&&j.data.datasets[0].data.shift(),j.options.scales.x.min=0,j.options.scales.x.max=w;const Re=j.data.datasets[0].data.map(He=>He.y),Ue=Math.max(...Re)*1.2;j.options.scales.y.max=Math.max(100,Ue),j.update()})}h.update(),a.render(c,l)}Ae(),window.addEventListener("resize",()=>{sizes.width=window.innerWidth,sizes.height=window.innerHeight,l.updateProjectionMatrix(),l.aspect=sizes.width/sizes.height,a.setSize(sizes.width,sizes.height)});const ke=ie=>{if(ie===0)return{m:0,e:0};const w=Math.floor(Math.log10(Math.abs(ie)));return{m:ie/Math.pow(10,w),e:w}},Le=(ie,w)=>ie*Math.pow(10,w);function C(){for(const ie of K){if(!ie.active)continue;const w=Math.max(1e-6,Math.sqrt(ie.pos.x*ie.pos.x+ie.pos.z*ie.pos.z)),z=Math.atan2(ie.pos.z,ie.pos.x),j=Math.sqrt(Math.max(0,N*m/w));ie.vel.set(-j*Math.sin(z),0,j*Math.cos(z)),ie.vel.addScaledVector(new F(Math.random()-.5,(Math.random()-.5)*.1,Math.random()-.5).normalize(),j*.05)}}function b(ie){V=Math.round(ie),W(V),E=0,P.innerText="Time: 0.00 Myr"}const H=new mo({width:320});H.domElement.style.cssText=`
        position: absolute;
        top: 160px;
        right: 20px;
        z-index: 100;
        background: rgba(0,0,0,0.6);
        border-radius: 8px;
    `;const ae=H.addFolder("Physics");ae.add({sunMass:m},"sunMass",1e28,1e32,1e28).name("Sun mass (kg)").onChange(ie=>{m=ie});const le=ke(N),pe={mantissa:le.m,exponent:le.e},D=ae.addFolder("G (scientific)");D.add(pe,"mantissa",.1,9.99,.01).name("mantissa").onChange(()=>{N=Le(pe.mantissa,pe.exponent)}),D.add(pe,"exponent",-11,-1,1).name("exponent (10^e)").onChange(()=>{N=Le(pe.mantissa,pe.exponent)}),ae.add({dt:O},"dt",1,1e6,100).name("Time step (yr)").onChange(ie=>{O=ie}),ae.add({softening:I},"softening",0,1e10,1e8).name("Softening (m)").onChange(ie=>{I=ie});const Q={sunSwallowAU:X/t};ae.add(Q,"sunSwallowAU",.001,.2,.001).name("Sun swallow R (AU)").onChange(ie=>{X=ie*t}),ae.add({drag:R},"drag",0,.01,1e-4).name("Gas drag").onChange(ie=>{R=ie}),ae.add({mergeFactor:G},"mergeFactor",.8,3,.05).name("Merge factor").onChange(ie=>{G=ie}),ae.add({collisionNoise:Y},"collisionNoise",0,.5,.01).name("Collision noise").onChange(ie=>{Y=ie});const q=H.addFolder("Disk / Particles");q.add({N:V},"N",50,5e3,50).name("# Planetesimals").onFinishChange(ie=>b(ie)),q.add(B,"rMin",.1,10,.1).name("Inner radius (AU)").onChange(ie=>{B.rMin=ie*t}),q.add(B,"rMax",.5,30,.1).name("Outer radius (AU)").onChange(ie=>{B.rMax=ie*t}),q.add(B,"thickness",0,1,.01).name("Half-thickness (AU)").onChange(ie=>{B.thickness=ie*t}),H.addFolder("Visual Settings").add({visualSizeFactor:re},"visualSizeFactor",1,1e4,10).name("Planet size ×").onChange(ie=>{re=ie;for(const w of K)if(w.mesh&&w.active){const z=Math.max(w.radius*i*re,.5)/(w.mesh.geometry.parameters.radius||1);w.mesh.scale.setScalar(z)}});const we=H.addFolder("Actions");we.add({reseed:()=>b(V)},"reseed").name("Reseed disk"),we.add({reinit:()=>C()},"reinit").name("Re-init velocities");const Me=H.addFolder("Average Composition");Me.add(Se,"H2O").name("Water").listen(),Me.add(Se,"Fe").name("Iron").listen(),Me.add(Se,"SiO2").name("Silicates").listen();const Ee=H.addFolder("Selected Planet");Ee.add(ve,"name").name("Name").listen(),Ee.add(ve,"mass").name("Mass (kg)").listen(),Ee.add(ve,"radius").name("Radius (m)").listen(),Ee.add(ve,"density").name("Density (kg/m³)").listen(),Ee.add(ve,"H2O").name("H₂O (%)").listen(),Ee.add(ve,"Fe").name("Fe (%)").listen(),Ee.add(ve,"SiO2").name("SiO₂ (%)").listen();const Te=new Lp,Ie=new ge;window.addEventListener("click",ie=>{Ie.x=ie.clientX/window.innerWidth*2-1,Ie.y=-(ie.clientY/window.innerHeight)*2+1,Te.setFromCamera(Ie,l);const w=Te.ray;let z=null,j=1/0;const se=80;for(const de of K){if(!de.active)continue;const Ue=new F().subVectors(de.pos,w.origin).dot(w.direction);if(Ue<0)continue;w.origin.clone().addScaledVector(w.direction,Ue).distanceTo(de.pos)<de.radius+se&&Ue<j&&(z=de,j=Ue)}if(z){const de=z,Re=4/3*Math.PI*Math.pow(de.radius,3),Ue=de.mass/Re,He=de.composition;ve.name=`Planet ${K.indexOf(de)}`,ve.mass=de.mass.toExponential(2)+" kg",ve.radius=(de.radius/1e3).toFixed(1)+" km",ve.density=Ue.toFixed(0)+" kg/m³",ve.H2O=(He.H2O*100).toFixed(1),ve.Fe=(He.Fe*100).toFixed(1),ve.SiO2=(He.SiO2*100).toFixed(1),s&&c.remove(s);const Ye=new dt(de.radius*1.4,32,32),ze=new Rt({color:16777215,transparent:!0,opacity:.25,blending:vn,depthWrite:!1});s=new Ze(Ye,ze),s.position.copy(de.pos),c.add(s),infoBox.innerHTML=`
        <b>Planet Info</b><br>
        Mass: ${de.mass.toFixed(2)}<br>
        Radius: ${de.radius.toFixed(2)}<br>
        Density: ${Ue}<br>
        H₂O: ${(He.H2O*100).toFixed(1)}%<br>
        Fe: ${(He.Fe*100).toFixed(1)}%<br>
        SiO₂: ${(He.SiO2*100).toFixed(1)}%
        `,infoBox.style.display="block"}else s&&c.remove(s),s=null,infoBox.style.display="none",ve.name="None",ve.mass=0,ve.radius=0,ve.density=0,ve.H2O=0,ve.Fe=0,ve.SiO2=0});function Oe(){var ie;document.querySelectorAll("#composition-chart-container, .simulation-time").forEach(w=>w.remove()),H&&((ie=H.destroy)==null||ie.call(H)),c.traverse(w=>{w.geometry&&w.geometry.dispose(),w.material&&w.material.dispose()}),a.dispose()}zr.onclick=()=>{Oe(),Ur()},Nr.onclick=()=>{Oe(),Br()},Or.onclick=()=>{Oe(),xs()}}function Br(){window.addEventListener("click",()=>{document.getElementById("bg-music").play()}),zr.addEventListener("click",function(){r(),Ur()}),Nr.addEventListener("click",function(){r(),Br()}),Or.addEventListener("click",function(){r(),xs()});function r(){for(let he=n.children.length-1;he>=0;he--){let W=n.children[he];W instanceof Ze&&(W.geometry.dispose(),W.material.dispose(),n.remove(W))}}let e=document.getElementById("cut-earth-button");e.style.display="none";let t=document.getElementById("exit-clipping-button");t.style.display="none";var n=new Cr,i=new yt(75,window.innerWidth/window.innerHeight,.005,1e3);const s=document.querySelector(".webgl");var o=new fs({canvas:s});o.setPixelRatio(2);const a={width:innerWidth,height:innerHeight};var c=new Fr(i,o.domElement);c.enableZoom=!0,c.enableRotate=!0,c.minDistance=0,c.maxDistance=50,c.rotateSpeed=.5,c.zoomSpeed=.5,c.enableDamping=!0,c.autoRotate=!0,c.autoRotateSpeed=.1;var f=[],l=new Zn,h=[],u=new Cp,d=new wt().load("Texture_planets/Milkyway.jpg"),m=new dt(100,64,64),v=new Rt({map:d});v.side=ht,v.renderOrder=-1;var p=new Ze(m,v);n.add(p),n.add(l);var f=[],M=[[],[],[],[],[],[],[],[],[]],y=[{name:"Sun",radius:3,distance:0,color:16763955,info:"Hot sun.",rotationSpeed:.01,orbitSpeed:0},{name:"Mercury",radius:.05,distance:5.8,color:12171705,info:"Mercury is the closest planet to the sun and is known for its extreme temperatures.",rotationSpeed:.02,orbitSpeed:.03},{name:"Venus",radius:.1,distance:6.2,color:16750899,info:"Venus is the second planet from the sun and is known for its thick atmosphere.",rotationSpeed:.03,orbitSpeed:.02},{name:"Earth",radius:.1,distance:6.5,color:3381759,info:"Earth is the third planet from the sun and is the only known planet to support life.",rotationSpeed:.04,orbitSpeed:.01},{name:"Mars",radius:.1,distance:9.5,color:16729344,info:"Mars is the fourth planet from the sun and is known as the Red Planet due to its reddish appearance.",rotationSpeed:.05,orbitSpeed:.009},{name:"Jupiter",radius:.25,distance:10.7,color:16113232,info:"Jupiter is the fifth planet from the sun and is the largest planet in our solar system.",rotationSpeed:.06,orbitSpeed:.008},{name:"Saturn",radius:.2,distance:16,color:15657130,info:"Saturn is the sixth planet from the sun and is known for its large ring system.",rotationSpeed:.07,orbitSpeed:.007},{name:"Uranus",radius:.15,distance:25.7,color:6724095,info:"Uranus is the seventh planet from the sun and is known for its unique tilt on its axis.",rotationSpeed:.08,orbitSpeed:.006},{name:"Neptune",radius:.15,distance:36.6,color:3394815,info:"Neptune is the eighth planet from the sun and is known for its blue color.",rotationSpeed:.08,orbitSpeed:.005}],g=new wt().load("Texture_planets/Sun-texture.jpg"),_=new dt(y[0].radius,64,64),S=new Rt({map:g}),A=new Ze(_,S);l.add(A);for(var L=1;L<y.length;L++){var x=new dt(y[L].radius,64,64),E=new wt().load("Texture_planets/"+y[L].name+"-texture.jpg"),P=new Rt({map:E}),N=new Ze(x,P);N.position.x=y[L].distance,l.add(N),h.push(N)}var O=new Dr(16777215,1,100);O.position.set(0,0,0),n.add(O),O.intensity=2,O.color.setHex(16777215);var I=new Ir(16777215,.5);n.add(I),i.position.set(10,5,10),i.lookAt(l.children[3]);for(var L=0;L<y.length;L++){var R=new ps(0,0,y[L].distance,y[L].distance,0,2*Math.PI,!1,0),G=R.getPoints(50),Y=new Et().setFromPoints(G),te=new os({color:y[L].color}),X=new mr(Y,te);X.rotation.x=Math.PI/2,l.add(X),f.push(X)}for(var re=[],L=0;L<y.length;L++){var ee=new Et,B=new os({color:y[L].color}),V=new mr(ee,B);l.add(V),re.push(V)}window.addEventListener("resize",()=>{a.width=window.innerWidth,a.height=window.innerHeight,i.updateProjectionMatrix(),i.aspect=a.width/a.height,o.setSize(a.width,a.height)});const K=()=>{o.render(n,i),window.requestAnimationFrame(K)};K();function oe(){requestAnimationFrame(oe);for(var he=u.getDelta(),W=0;W<h.length;W++){var be=h[W],ue=y[W];be.rotation.y+=ue.rotationSpeed*he,be.position.x=ue.distance*Math.cos(ue.orbitSpeed*u.getElapsedTime()*10),be.position.z=ue.distance*Math.sin(ue.orbitSpeed*u.getElapsedTime()*10),M[W].push(h[W].position.clone()),M[W].length>5&&M[W].shift();var Se=re[W].geometry;Se.setFromPoints(M[W])}c.update(),o.setSize(a.width,a.height),o.render(n,i)}oe()}function xs(){window.addEventListener("click",()=>{document.getElementById("bg-music").play()}),zr.addEventListener("click",function(){r(),Ur()}),Nr.addEventListener("click",function(){r(),Br()}),Or.addEventListener("click",function(){r(),xs()});function r(){document.querySelectorAll(".lil-gui").forEach(O=>O.remove()),document.querySelectorAll("button").forEach(O=>{(O.textContent.includes("Full Earth")||O.textContent.includes("Half Earth")||O.textContent.includes("Hidden (click for Full)"))&&O.remove()}),document.querySelectorAll("canvas").forEach(O=>{O.width===256&&O.height===32&&O.remove()});for(let O=e.children.length-1;O>=0;O--){let I=e.children[O];I instanceof Ze&&(I.geometry.dispose(),I.material.dispose(),e.remove(I))}}var e=new Cr,t=new yt(75,window.innerWidth/window.innerHeight,.005,1e3);const n=document.querySelector(".webgl");var i=new fs({canvas:n});i.setPixelRatio(2);const s={width:innerWidth,height:innerHeight};var o=new Fr(t,i.domElement);o.enableZoom=!0,o.enableRotate=!0,o.minDistance=0,o.maxDistance=50,o.rotateSpeed=.5,o.zoomSpeed=.5,o.enableDamping=!0;var a=new wt().load("Texture_planets/Milkyway.jpg"),c=new dt(100,64,64),l=new Rt({map:a});l.side=ht,l.renderOrder=-1;var h=new Ze(c,l);e.add(h);for(var u=[{name:"Earth",radius:.11,color:3381759,info:"Earth is the third planet from the sun and is the only known planet to support life."}],d=0;d<u.length;d++){var m=new dt(u[d].radius,720,360),v=new wt().load("Texture_planets/Earth2-texture.jpg"),p=new wt().load("Texture_planets/Earth-bump-map.jpg"),f=new pi({map:v,displacementMap:p,displacementScale:.015}),M=new Ze(m,f);M.position.set(0,0,0),e.add(M)}let y=document.getElementById("cut-earth-button");y.style.display="block",y.addEventListener("click",function(){r(),S()});var g=M.geometry,_=M.material;function S(){var O=new wt().load("Texture_planets/Milkyway.jpg"),I=new dt(100,64,64),R=new Rt({map:O});R.side=ht,R.renderOrder=-1;var G=new Ze(I,R);e.add(G);const te=[{name:"Earth",radius:.11,color:3381759,info:"Earth is the third planet from the Sun and the only known planet to support life."}][0].radius,X=te*.55,re=new dt(te,180,90),ee=new wt().load("Texture_planets/Earth2-texture.jpg"),B=new wt().load("Texture_planets/Earth-bump-map.jpg"),V=new pi({map:ee,displacementMap:B,displacementScale:.01,transparent:!0,opacity:.4,side:on,depthWrite:!1,blending:vn}),K=new Ze(re,V);e.add(K);const oe=new dt(te,180,90,0,Math.PI,0,Math.PI),he=new wt().load("Texture_planets/Earth2-half-texture.jpg"),W=new wt().load("Texture_planets/Earth-half-bump-map.jpg"),be=new pi({map:he,displacementMap:W,displacementScale:.01,transparent:!0,opacity:.4,side:on,depthWrite:!1,blending:vn}),ue=new Ze(oe,be);ue.visible=!1,e.add(ue),K.renderOrder=0,ue.renderOrder=1;const Se=new dt(X,64,64),me=new vr({color:5592405,roughness:.7,metalness:.4}),ve=new Ze(Se,me);e.add(ve);let $=128,Z,ce;function ye(ie){Z&&e.remove(Z,ce);const w=new pi({color:255,transparent:!0,opacity:.6,side:on,depthWrite:!1}),z=new pi({color:16711680,transparent:!0,opacity:.6,side:on,depthWrite:!1});Z=new po(ie,w,!0,!0),ce=new po(ie,z,!0,!0),Z.scale.setScalar(te),ce.scale.setScalar(te),e.add(Z,ce)}const fe=[];for(let ie=25;ie<=2900;ie+=25)fe.push(ie);const De="SP12RTS_5defquid/",Ae=fe.map(ie=>`SP12RTS..ES.${ie}.eqdst.5.latlon.dat`).map(ie=>fetch(`${De}${ie}`).then(w=>w.ok?w.text():null)),ke=new mo({width:300});ke.domElement.style.cssText=`
    position:absolute;
    top:120px;
    right:20px;
    z-index:100;
    background:rgba(0,0,0,0.6);
    border-radius:8px;
  `;const Le={fastThreshold:.6,slowThreshold:.8,opacity:.6,depthMin:0,depthMax:2900,isolation:.02,blobAmplify:1.2};function C(ie){var Ue,He;const w=$,z=w**3,j=new Float32Array(z),se=new Float32Array(z),de=(Ye,ze,Je)=>Je*w*w+ze*w+Ye;for(let Ye=0;Ye<ie.length-1;Ye++){const ze=fe[Ye],Je=fe[Ye+1];if(Je<Le.depthMin||ze>Le.depthMax)continue;const tt=(Ue=ie[Ye])==null?void 0:Ue.trim().split(`
`),Ht=(He=ie[Ye+1])==null?void 0:He.trim().split(`
`);if(!tt||!Ht)continue;const tn=Math.min(tt.length,Ht.length);for(let ft=0;ft<tn;ft++){const Xt=tt[ft].trim().split(/\s+/),T=Ht[ft].trim().split(/\s+/);if(Xt.length<3||T.length<3)continue;const k=parseFloat(Xt[0])*Math.PI/180;let J=parseFloat(Xt[1]);J>180&&(J-=360),J*=Math.PI/180;const U=parseFloat(Xt[2]),ne=parseFloat(T[2]);for(let Ce=0;Ce<=1;Ce+=.25){const Fe=ze*(1-Ce)+Je*Ce;if(Fe<Le.depthMin||Fe>Le.depthMax)continue;const Ne=U*(1-Ce)+ne*Ce,Be=te*(1-Fe/6371),Xe=Be*Math.cos(k)*Math.cos(J),We=Be*Math.sin(k),qe=Be*Math.cos(k)*Math.sin(J),Ke=Math.floor((Xe/te+1)*.5*(w-1)),ut=Math.floor((We/te+1)*.5*(w-1)),Tt=Math.floor((qe/te+1)*.5*(w-1));if(Ke<1||ut<1||Tt<1||Ke>=w-1||ut>=w-1||Tt>=w-1)continue;const Ft=de(Ke,ut,Tt);Ne>=Le.fastThreshold?j[Ft]=Math.max(j[Ft],Ne*Le.blobAmplify):Ne<=-Le.slowThreshold&&(se[Ft]=Math.max(se[Ft],-Ne*Le.blobAmplify))}}}const Re=Ye=>{let ze=0;for(let Je=0;Je<Ye.length;Je++)Ye[Je]>ze&&(ze=Ye[Je]);if(ze>0)for(let Je=0;Je<Ye.length;Je++)Ye[Je]/=ze};Re(j),Re(se),Z.field=j,ce.field=se,Z.isolation=Le.isolation,ce.isolation=Le.isolation,Z.material.opacity=Le.opacity,ce.material.opacity=Le.opacity,Z.update(),ce.update(),console.log(`✅ Mantle anomalies rendered (${Le.depthMin}-${Le.depthMax} km, res=${w})`)}let b;function H(){clearTimeout(b),b=setTimeout(()=>{Promise.all(Ae).then(C)},250)}ye($),Promise.all(Ae).then(C),ke.add(Le,"fastThreshold",0,2.5,.1).name("Fast dlnVs (+%)").onChange(H),ke.add(Le,"slowThreshold",0,2.5,.1).name("Slow dlnVs (-%)").onChange(H),ke.add(Le,"opacity",.1,1,.05).name("Opacity").onChange(H),ke.add(Le,"depthMin",0,2800,100).name("Min Depth (km)").onChange(H),ke.add(Le,"depthMax",100,2900,100).name("Max Depth (km)").onChange(H),ke.add(Le,"isolation",.001,.05,.001).name("Iso Strength").onChange(H),ke.add(Le,"blobAmplify",.5,3,.1).name("Blob size").onChange(H);function ae(ie,w,z){const j=ie.material.opacity,se=300,de=performance.now();function Re(Ue){const He=Math.min((Ue-de)/se,1);ie.material.opacity=j+(w-j)*He,He<1?requestAnimationFrame(Re):z&&z()}requestAnimationFrame(Re),ie.visible=!0}const le=document.createElement("button");le.textContent="🌍 Full Earth (click for Half)",le.style.cssText=`
    position: absolute;
    top: 420px;
    right: 20px;
    z-index: 101;
    padding: 8px 12px;
    background: rgba(0,0,0,0.7);
    color: white;
    border: 1px solid white;
    border-radius: 6px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s;
  `,le.onmouseenter=()=>le.style.background="rgba(255,255,255,0.2)",le.onmouseleave=()=>le.style.background="rgba(0,0,0,0.7)",document.body.appendChild(le);let pe=0,D=!1;le.addEventListener("click",()=>{D||(D=!0,pe=(pe+1)%3,pe===0?(ae(K,.4,()=>D=!1),ae(ue,0,()=>D=!1),le.textContent="🌍 Full Earth (click for Half)"):pe===1?(ae(K,0,()=>D=!1),ae(ue,.4,()=>D=!1),le.textContent="🌓 Half Earth (click to Hide)"):(ae(K,0,()=>D=!1),ae(ue,0,()=>D=!1),le.textContent="❌ Hidden (click for Full)"))});const Q=document.createElement("canvas");Q.width=256,Q.height=32;const q=Q.getContext("2d"),_e=q.createLinearGradient(0,0,256,0);_e.addColorStop(0,"red"),_e.addColorStop(1,"blue"),q.fillStyle=_e,q.fillRect(0,0,256,32);const we=new Vf(Q),Me=new us(.05,.05*.12),Ee=new Rt({map:we,side:ht,transparent:!0}),Te=new Ze(Me,Ee);Te.rotation.y=-Math.PI/2,Te.rotation.x=-Math.PI,Te.position.set(.1,-.1,0),e.add(Te),new Rp().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",function(ie){var w="Warm",z="Cold",j=new fo(w,{font:ie,size:.003,height:.0015}),se=new fo(z,{font:ie,size:.003,height:.0015}),de=new Rt({color:16777215,side:on}),Re=new Ze(j,de),Ue=new Ze(se,de);Re.position.set(.1,-.1,.04),Re.rotation.y=Math.PI/2,Ue.position.set(.1,-.1,-.03),Ue.rotation.y=Re.rotation.y,e.add(Re),e.add(Ue)});function Oe(){requestAnimationFrame(Oe),o.update(),i.setSize(s.width,s.height),t.aspect=n.offsetWidth/n.offsetHeight,t.updateProjectionMatrix(),i.render(e,t)}Oe()}let A=document.getElementById("exit-clipping-button");A.style.display="block",A.addEventListener("click",function(){r(),L()});function L(){var O=new wt().load("Texture_planets/Milkyway.jpg"),I=new dt(100,64,64),R=new Rt({map:O});R.side=ht,R.renderOrder=-1;var G=new Ze(I,R);e.add(G),M.material=_,M.geometry=g,_=null,g=null,M.material.needsUpdate=!0,M.geometry.needsUpdate=!0,e.add(M),t.lookAt(M)}var x=new Dr(16777215,1,100);x.position.set(0,3,3),e.add(x),x.intensity=.5,x.color.setHex(16777215);var E=new Ir(16777215,.8);e.add(E),t.position.z=5,t.position.set(.25,0,0),t.lookAt(M),window.addEventListener("resize",()=>{s.width=window.innerWidth,s.height=window.innerHeight,t.updateProjectionMatrix(),t.aspect=s.width/s.height,i.setSize(s.width,s.height)});const P=()=>{i.render(e,t),window.requestAnimationFrame(P)};P();function N(){requestAnimationFrame(N),o.update(),i.setSize(s.width,s.height),i.render(e,t)}N()}document.querySelector(".menu-toggle").addEventListener("click",Np);document.querySelectorAll(".content a").forEach(r=>{r.addEventListener("click",function(){var e=this.textContent.trim();Op(e)})});function Np(){var r=document.getElementById("sidebar");r.classList.toggle("open"),r.classList.contains("open")?(document.querySelectorAll("#composition-chart-container, .simulation-time").forEach(e=>{e.style.display="none"}),document.querySelectorAll(".lil-gui, button").forEach(e=>{e.style.zIndex="1"})):(document.querySelectorAll("#composition-chart-container, .simulation-time").forEach(e=>{e.style.display="block",e.style.opacity="1"}),document.querySelectorAll(".lil-gui, button").forEach(e=>{e.style.zIndex="101"}))}function Op(r){document.querySelectorAll("#composition-chart-container, .simulation-time").forEach(n=>{n.style.display="none"});var e=document.getElementById("sidebar"),t=document.getElementById("sidebarContent");document.querySelectorAll(".lil-gui, button").forEach(n=>{n.style.zIndex="1"}),r==="About me"?fetch("files/about_me.html").then(n=>n.text()).then(n=>{t.innerHTML=n}):r==="Research"?fetch("files/research.html").then(n=>n.text()).then(n=>{t.innerHTML=n}):r==="Publications"?fetch("files/publications.html").then(n=>n.text()).then(n=>{t.innerHTML=n}):r==="View my CV"?fetch("files/curriculum.html").then(n=>n.text()).then(n=>{t.innerHTML=n}):r==="Social Networks"?fetch("files/social_networks.html").then(n=>n.text()).then(n=>{t.innerHTML=n}):r==="Model Gallery"&&fetch("files/model_gallery.html").then(n=>n.text()).then(n=>{t.innerHTML=n}),e.classList.add("open")}const or=document.getElementById("bg-music"),ns=document.getElementById("volume-slider");or&&ns&&(or.volume=ns.value,ns.addEventListener("input",()=>{or.volume=ns.value}));
