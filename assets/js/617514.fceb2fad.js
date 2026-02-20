"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["617514"],{328623(t,e,r){r.d(e,{d:()=>n,t:()=>l});var a=r(482933),n={normal:function(t,e,r,n){var l=t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").style("stroke-width",1).style("stroke-dasharray","1,0");a.AV(l,r[n+"Style"]),r[n+"Class"]&&l.attr("class",r[n+"Class"])},vee:function(t,e,r,n){var l=t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width",1).style("stroke-dasharray","1,0");a.AV(l,r[n+"Style"]),r[n+"Class"]&&l.attr("class",r[n+"Class"])},undirected:function(t,e,r,n){var l=t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 5 L 10 5").style("stroke-width",1).style("stroke-dasharray","1,0");a.AV(l,r[n+"Style"]),r[n+"Class"]&&l.attr("class",r[n+"Class"])}};function l(t){n=t}},241589(t,e,r){r.d(e,{_:()=>i,e:()=>o});var a=r(830756),n=r(746860),l=r(482933),i=function(t,e){var r=e.nodes().filter(function(t){return l.De(e,t)}),i=t.selectAll("g.cluster").data(r,function(t){return t});l.c$(i.exit(),e).style("opacity",0).remove();var o=i.enter().append("g").attr("class","cluster").attr("id",function(t){return e.node(t).id}).style("opacity",0).each(function(t){var r=e.node(t),l=a.Ltv(this);a.Ltv(this).append("rect");var i=l.append("g").attr("class","label");(0,n.Y)(i,r,r.clusterLabelPos)});return i=i.merge(o),(i=l.c$(i,e).style("opacity",1)).selectAll("rect").each(function(t){var r=e.node(t),n=a.Ltv(this);l.AV(n,r.style)}),i};function o(t){i=t}},387383(t,e,r){r.d(e,{V:()=>d,j:()=>o});var a=r(830756),n=r(766520),l=r(746860),i=r(482933);let o=function(t,e){var r,o=t.selectAll("g.edgeLabel").data(e.edges(),function(t){return i.gh(t)}).classed("update",!0);return o.exit().remove(),o.enter().append("g").classed("edgeLabel",!0).style("opacity",0),(o=t.selectAll("g.edgeLabel")).each(function(t){var r=a.Ltv(this);r.select(".label").remove();var i=e.edge(t),o=(0,l.Y)(r,e.edge(t),0).classed("label",!0),d=o.node().getBBox();i.labelId&&o.attr("id",i.labelId),n.A(i,"width")||(i.width=d.width),n.A(i,"height")||(i.height=d.height)}),r=o.exit?o.exit():o.selectAll(null),i.c$(r,e).style("opacity",0).remove(),o};function d(t){o=t}},300158(t,e,r){r.d(e,{I:()=>d,s:()=>s});var a=r(830756),n=r(205664),l=r(847773),i=r(961419),o=r(482933),d=function(t,e,r){var d,s,h,p,u,g,f=t.selectAll("g.edgePath").data(e.edges(),function(t){return o.gh(t)}).classed("update",!0),y=(d=f,s=e,(h=d.enter().append("g").attr("class","edgePath").style("opacity",0)).append("path").attr("class","path").attr("d",function(t){var e=s.edge(t),r=s.node(t.v).elem,a=l.A(e.points.length).map(function(){var t,e;return t=r.getBBox(),{x:(e=r.ownerSVGElement.getScreenCTM().inverse().multiply(r.getScreenCTM()).translate(t.width/2,t.height/2)).e,y:e.f}});return c(e,a)}),h.append("defs"),h);p=f,u=e,g=p.exit(),o.c$(g,u).style("opacity",0).remove();var b=void 0!==f.merge?f.merge(y):f;return o.c$(b,e).style("opacity",1),b.each(function(t){var r=a.Ltv(this),n=e.edge(t);n.elem=this,n.id&&r.attr("id",n.id),o.nh(r,n.class,(r.classed("update")?"update ":"")+"edgePath")}),b.selectAll("path.path").each(function(t){var r=e.edge(t);r.arrowheadId=n.A("arrowhead");var l=a.Ltv(this).attr("marker-end",function(){var t,e;return"url("+(t=location.href,e=r.arrowheadId,t.split("#")[0]+"#"+e)+")"}).style("fill","none");o.c$(l,e).attr("d",function(t){var r,a,n,l,o,d;return r=e,a=t,n=r.edge(a),l=r.node(a.v),o=r.node(a.w),(d=n.points.slice(1,n.points.length-1)).unshift((0,i.O)(l,d[0])),d.push((0,i.O)(o,d[d.length-1])),c(n,d)}),o.AV(l,r.style)}),b.selectAll("defs *").remove(),b.selectAll("defs").each(function(t){var n=e.edge(t);(0,r[n.arrowhead])(a.Ltv(this),n.arrowheadId,n,"arrowhead")}),b};function s(t){d=t}function c(t,e){var r=(a.n8j||a.JWy.line)().x(function(t){return t.x}).y(function(t){return t.y});return(r.curve||r.interpolate)(t.curve),r(e)}},383981(t,e,r){r.d(e,{k:()=>d,q:()=>s});var a=r(830756),n=r(54991),l=r(766520),i=r(746860),o=r(482933),d=function(t,e,r){var d,s=e.nodes().filter(function(t){return!o.De(e,t)}),c=t.selectAll("g.node").data(s,function(t){return t}).classed("update",!0);return c.exit().remove(),c.enter().append("g").attr("class","node").style("opacity",0),(c=t.selectAll("g.node")).each(function(t){var d=e.node(t),s=a.Ltv(this);o.nh(s,d.class,(s.classed("update")?"update ":"")+"node"),s.select("g.label").remove();var c=s.append("g").attr("class","label"),h=(0,i.Y)(c,d),p=r[d.shape],u=n.A(h.node().getBBox(),"width","height");d.elem=this,d.id&&s.attr("id",d.id),d.labelId&&c.attr("id",d.labelId),l.A(d,"width")&&(u.width=d.width),l.A(d,"height")&&(u.height=d.height),u.width+=d.paddingLeft+d.paddingRight,u.height+=d.paddingTop+d.paddingBottom,c.attr("transform","translate("+(d.paddingLeft-d.paddingRight)/2+","+(d.paddingTop-d.paddingBottom)/2+")");var g=a.Ltv(this);g.select(".label-container").remove();var f=p(g,u,d).classed("label-container",!0);o.AV(f,d.style);var y=f.node().getBBox();d.width=y.width,d.height=y.height}),d=c.exit?c.exit():c.selectAll(null),o.c$(d,e).style("opacity",0).remove(),c};function s(t){d=t}},591491(t,e,r){r.d(e,{w:()=>n});var a=r(31465);function n(t,e,r){return(0,a.O)(t,e,e,r)}},31465(t,e,r){r.d(e,{O:()=>a});function a(t,e,r,a){var n=t.x,l=t.y,i=n-a.x,o=l-a.y,d=Math.sqrt(e*e*o*o+r*r*i*i),s=Math.abs(e*r*i/d);a.x<n&&(s=-s);var c=Math.abs(e*r*o/d);return a.y<l&&(c=-c),{x:n+s,y:l+c}}},13181(t,e,r){function a(t,e,r,a){var n,l,i,o,d,s,c,h,p,u,g,f,y;if(n=e.y-t.y,i=t.x-e.x,d=e.x*t.y-t.x*e.y,p=n*r.x+i*r.y+d,u=n*a.x+i*a.y+d,0===p||0===u||!(p*u>0)){if((l=a.y-r.y,o=r.x-a.x,s=a.x*r.y-r.x*a.y,c=l*t.x+o*t.y+s,h=l*e.x+o*e.y+s,!(0!==c&&0!==h&&c*h>0))&&0!=(g=n*o-l*i))return f=Math.abs(g/2),{x:(y=i*s-o*d)<0?(y-f)/g:(y+f)/g,y:(y=l*d-n*s)<0?(y-f)/g:(y+f)/g}}}r.d(e,{U:()=>a})},961419(t,e,r){r.d(e,{O:()=>a});function a(t,e){return t.intersect(e)}},657193(t,e,r){r.d(e,{k:()=>n});var a=r(13181);function n(t,e,r){var n=t.x,l=t.y,i=[],o=1/0,d=1/0;e.forEach(function(t){o=Math.min(o,t.x),d=Math.min(d,t.y)});for(var s=n-t.width/2-o,c=l-t.height/2-d,h=0;h<e.length;h++){var p=e[h],u=e[h<e.length-1?h+1:0],g=(0,a.U)(t,r,{x:s+p.x,y:c+p.y},{x:s+u.x,y:c+u.y});g&&i.push(g)}return i.length?(i.length>1&&i.sort(function(t,e){var a=t.x-r.x,n=t.y-r.y,l=Math.sqrt(a*a+n*n),i=e.x-r.x,o=e.y-r.y,d=Math.sqrt(i*i+o*o);return l<d?-1:+(l!==d)}),i[0]):(console.log("NO INTERSECTION FOUND, RETURN NODE CENTER",t),t)}},484113(t,e,r){r.d(e,{C:()=>a});function a(t,e){var r,a,n=t.x,l=t.y,i=e.x-n,o=e.y-l,d=t.width/2,s=t.height/2;return Math.abs(o)*d>Math.abs(i)*s?(o<0&&(s=-s),r=0===o?0:s*i/o,a=s):(i<0&&(d=-d),r=d,a=0===i?0:d*o/i),{x:n+r,y:l+a}}},10646(t,e,r){r.d(e,{H:()=>n});var a=r(482933);function n(t,e){var r=t.append("foreignObject").attr("width","100000"),n=r.append("xhtml:div");n.attr("xmlns","http://www.w3.org/1999/xhtml");var l=e.label;switch(typeof l){case"function":n.insert(l);break;case"object":n.insert(function(){return l});break;default:n.html(l)}a.AV(n,e.labelStyle),n.style("display","inline-block"),n.style("white-space","nowrap");var i=n.node().getBoundingClientRect();return r.attr("width",i.width).attr("height",i.height),r}},746860(t,e,r){r.d(e,{Y:()=>i});var a=r(10646),n=r(529183),l=r(960452);function i(t,e,r){var i,o=e.label,d=t.append("g");"svg"===e.labelType?(0,n._)(d,e):"string"!=typeof o||"html"===e.labelType?(0,a.H)(d,e):(0,l.B)(d,e);var s=d.node().getBBox();switch(r){case"top":i=-e.height/2;break;case"bottom":i=e.height/2-s.height;break;default:i=-s.height/2}return d.attr("transform","translate("+-s.width/2+","+i+")"),d}},529183(t,e,r){r.d(e,{_:()=>n});var a=r(482933);function n(t,e){return t.node().appendChild(e.label),a.AV(t,e.labelStyle),t}},960452(t,e,r){r.d(e,{B:()=>n});var a=r(482933);function n(t,e){for(var r=t.append("text"),n=(function(t){for(var e,r="",a=!1,n=0;n<t.length;++n)e=t[n],a?("n"===e?r+="\n":r+=e,a=!1):"\\"===e?a=!0:r+=e;return r})(e.label).split("\n"),l=0;l<n.length;l++)r.append("tspan").attr("xml:space","preserve").attr("dy","1em").attr("x","1").text(n[l]);return a.AV(r,e.labelStyle),r}},908844(t,e,r){r.d(e,{T:()=>l});var a=r(830756),n=r(482933);function l(t,e){var r=t.filter(function(){return!a.Ltv(this).classed("update")});function l(t){var r=e.node(t);return"translate("+r.x+","+r.y+")"}r.attr("transform",l),n.c$(t,e).style("opacity",1).attr("transform",l),n.c$(r.selectAll("rect"),e).attr("width",function(t){return e.node(t).width}).attr("height",function(t){return e.node(t).height}).attr("x",function(t){return-e.node(t).width/2}).attr("y",function(t){return-e.node(t).height/2})}},767008(t,e,r){r.d(e,{U:()=>i});var a=r(830756),n=r(766520),l=r(482933);function i(t,e){function r(t){var r=e.edge(t);return n.A(r,"x")?"translate("+r.x+","+r.y+")":""}t.filter(function(){return!a.Ltv(this).classed("update")}).attr("transform",r),l.c$(t,e).style("opacity",1).attr("transform",r)}},2274(t,e,r){r.d(e,{J:()=>l});var a=r(830756),n=r(482933);function l(t,e){function r(t){var r=e.node(t);return"translate("+r.x+","+r.y+")"}t.filter(function(){return!a.Ltv(this).classed("update")}).attr("transform",r),n.c$(t,e).style("opacity",1).attr("transform",r)}},74917(t,e,r){r.d(e,{X:()=>b});var a=r(830756),n=r(766520),l=r(123068),i=r(808058),o=r(948563),d=r(328623),s=r(241589),c=r(387383),h=r(300158),p=r(383981),u=r(908844),g=r(767008),f=r(2274),y=r(654687);function b(){var t=function(t,e){(r=e).nodes().forEach(function(t){var e=r.node(t);n.A(e,"label")||r.children(t).length||(e.label=t),n.A(e,"paddingX")&&l.A(e,{paddingLeft:e.paddingX,paddingRight:e.paddingX}),n.A(e,"paddingY")&&l.A(e,{paddingTop:e.paddingY,paddingBottom:e.paddingY}),n.A(e,"padding")&&l.A(e,{paddingLeft:e.padding,paddingRight:e.padding,paddingTop:e.padding,paddingBottom:e.padding}),l.A(e,v),i.A(["paddingLeft","paddingRight","paddingTop","paddingBottom"],function(t){e[t]=Number(e[t])}),n.A(e,"width")&&(e._prevWidth=e.width),n.A(e,"height")&&(e._prevHeight=e.height)}),r.edges().forEach(function(t){var e=r.edge(t);n.A(e,"label")||(e.label=""),l.A(e,w)});var r,a,b=x(t,"output"),k=x(b,"clusters"),m=x(b,"edgePaths"),A=(0,c.j)(x(b,"edgeLabels"),e),T=(0,p.k)(x(b,"nodes"),e,y.n);(0,o.Zp)(e),(0,f.J)(T,e),(0,g.U)(A,e),(0,h.I)(m,e,d.d);var S=(0,s._)(k,e);(0,u.T)(S,e),a=e,i.A(a.nodes(),function(t){var e=a.node(t);n.A(e,"_prevWidth")?e.width=e._prevWidth:delete e.width,n.A(e,"_prevHeight")?e.height=e._prevHeight:delete e.height,delete e._prevWidth,delete e._prevHeight})};return t.createNodes=function(e){return arguments.length?((0,p.q)(e),t):p.k},t.createClusters=function(e){return arguments.length?((0,s.e)(e),t):s._},t.createEdgeLabels=function(e){return arguments.length?((0,c.V)(e),t):c.j},t.createEdgePaths=function(e){return arguments.length?((0,h.s)(e),t):h.I},t.shapes=function(e){return arguments.length?((0,y.P)(e),t):y.n},t.arrows=function(e){return arguments.length?((0,d.t)(e),t):d.d},t}var v={paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,rx:0,ry:0,shape:"rect"},w={arrowhead:"normal",curve:a.lUB};function x(t,e){var r=t.select("g."+e);return r.empty()&&(r=t.append("g").attr("class",e)),r}},654687(t,e,r){r.d(e,{P:()=>d,n:()=>o});var a=r(591491),n=r(31465),l=r(657193),i=r(484113),o={rect:function(t,e,r){var a=t.insert("rect",":first-child").attr("rx",r.rx).attr("ry",r.ry).attr("x",-e.width/2).attr("y",-e.height/2).attr("width",e.width).attr("height",e.height);return r.intersect=function(t){return(0,i.C)(r,t)},a},ellipse:function(t,e,r){var a=e.width/2,l=e.height/2,i=t.insert("ellipse",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("rx",a).attr("ry",l);return r.intersect=function(t){return(0,n.O)(r,a,l,t)},i},circle:function(t,e,r){var n=Math.max(e.width,e.height)/2,l=t.insert("circle",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("r",n);return r.intersect=function(t){return(0,a.w)(r,n,t)},l},diamond:function(t,e,r){var a=e.width*Math.SQRT2/2,n=e.height*Math.SQRT2/2,i=[{x:0,y:-n},{x:-a,y:0},{x:0,y:n},{x:a,y:0}],o=t.insert("polygon",":first-child").attr("points",i.map(function(t){return t.x+","+t.y}).join(" "));return r.intersect=function(t){return(0,l.k)(r,i,t)},o}};function d(t){o=t}},482933(t,e,r){r.d(e,{AV:()=>s,De:()=>l,c$:()=>h,gh:()=>i,nh:()=>c});var a=r(634963),n=r(389610);function l(t,e){return!!t.children(e).length}function i(t){return d(t.v)+":"+d(t.w)+":"+d(t.name)}var o=/:/g;function d(t){return t?String(t).replace(o,"\\:"):""}function s(t,e){e&&t.attr("style",e)}function c(t,e,r){e&&t.attr("class",e).attr("class",r+" "+t.attr("class"))}function h(t,e){var r=e.graph();if(a.A(r)){var l=r.transition;if(n.A(l))return l(t)}return t}},504761(t,e,r){r.d(e,{XX:()=>a.X});var a=r(74917);r(300697)},375937(t,e,r){r.d(e,{A:()=>l});var a=r(408873),n=r(969047);let l=(t,e)=>a.A.lang.round(n.A.parse(t)[e])},583537(t,e,r){r.d(e,{diagram:()=>f});var a=r(535860),n=r(300697),l=r(830756),i=r(436212),o=r(504761),d=r(482933),s=r(10646),c=r(657193),h=r(484113),p=r(335900);r(974353),r(416750),r(599418),r(948563),r(414075);let u={},g=function(t){for(let e of Object.keys(t))u[e]=t[e]},f={parser:a.p,db:a.f,renderer:p.f,styles:p.a,init:t=>{t.flowchart||(t.flowchart={}),t.flowchart.arrowMarkerAbsolute=t.arrowMarkerAbsolute,g(t.flowchart),a.f.clear(),a.f.setGen("gen-1")}}},335900(t,e,r){r.d(e,{a:()=>f,f:()=>g});var a=r(300697),n=r(830756),l=r(436212),i=r(708995),o=r(10646),d=r(375937),s=r(225582);let c={},h=async function(t,e,r,a,n,i){let d=a.select(`[id="${r}"]`);for(let r of Object.keys(t)){let a,s=t[r],c="default";s.classes.length>0&&(c=s.classes.join(" ")),c+=" flowchart-label";let h=(0,l.k)(s.styles),p=void 0!==s.text?s.text:s.id;if(l.l.info("vertex",s,s.labelType),"markdown"===s.labelType)l.l.info("vertex",s,s.labelType);else if((0,l.m)((0,l.c)().flowchart.htmlLabels)){let t={label:p};(a=(0,o.H)(d,t).node()).parentNode.removeChild(a)}else{let t=n.createElementNS("http://www.w3.org/2000/svg","text");for(let e of(t.setAttribute("style",h.labelStyle.replace("color:","fill:")),p.split(l.e.lineBreakRegex))){let r=n.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),r.setAttribute("dy","1em"),r.setAttribute("x","1"),r.textContent=e,t.appendChild(r)}a=t}let u=0,g="";switch(s.type){case"round":u=5,g="rect";break;case"square":case"group":default:g="rect";break;case"diamond":g="question";break;case"hexagon":g="hexagon";break;case"odd":case"odd_right":g="rect_left_inv_arrow";break;case"lean_right":g="lean_right";break;case"lean_left":g="lean_left";break;case"trapezoid":g="trapezoid";break;case"inv_trapezoid":g="inv_trapezoid";break;case"circle":g="circle";break;case"ellipse":g="ellipse";break;case"stadium":g="stadium";break;case"subroutine":g="subroutine";break;case"cylinder":g="cylinder";break;case"doublecircle":g="doublecircle"}let f=await (0,l.r)(p,(0,l.c)());e.setNode(s.id,{labelStyle:h.labelStyle,shape:g,labelText:f,labelType:s.labelType,rx:u,ry:u,class:c,style:h.style,id:s.id,link:s.link,linkTarget:s.linkTarget,tooltip:i.db.getTooltip(s.id)||"",domId:i.db.lookUpDomId(s.id),haveCallback:s.haveCallback,width:"group"===s.type?500:void 0,dir:s.dir,type:s.type,props:s.props,padding:(0,l.c)().flowchart.padding}),l.l.info("setNode",{labelStyle:h.labelStyle,labelType:s.labelType,shape:g,labelText:f,rx:u,ry:u,class:c,style:h.style,id:s.id,domId:i.db.lookUpDomId(s.id),width:"group"===s.type?500:void 0,type:s.type,dir:s.dir,props:s.props,padding:(0,l.c)().flowchart.padding})}},p=async function(t,e,r){let a,i;l.l.info("abc78 edges = ",t);let o=0,d={};if(void 0!==t.defaultStyle){let e=(0,l.k)(t.defaultStyle);a=e.style,i=e.labelStyle}for(let r of t){o++;let s="L-"+r.start+"-"+r.end;void 0===d[s]?d[s]=0:d[s]++,l.l.info("abc78 new entry",s,d[s]);let h=s+"-"+d[s];l.l.info("abc78 new link id to be used is",s,h,d[s]);let p="LS-"+r.start,u="LE-"+r.end,g={style:"",labelStyle:""};switch(g.minlen=r.length||1,"arrow_open"===r.type?g.arrowhead="none":g.arrowhead="normal",g.arrowTypeStart="arrow_open",g.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":g.arrowTypeStart="arrow_cross";case"arrow_cross":g.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":g.arrowTypeStart="arrow_point";case"arrow_point":g.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":g.arrowTypeStart="arrow_circle";case"arrow_circle":g.arrowTypeEnd="arrow_circle"}let f="",y="";switch(r.stroke){case"normal":f="fill:none;",void 0!==a&&(f=a),void 0!==i&&(y=i),g.thickness="normal",g.pattern="solid";break;case"dotted":g.thickness="normal",g.pattern="dotted",g.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":g.thickness="thick",g.pattern="solid",g.style="stroke-width: 3.5px;fill:none;";break;case"invisible":g.thickness="invisible",g.pattern="solid",g.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){let t=(0,l.k)(r.style);f=t.style,y=t.labelStyle}g.style=g.style+=f,g.labelStyle=g.labelStyle+=y,void 0!==r.interpolate?g.curve=(0,l.n)(r.interpolate,n.lUB):void 0!==t.defaultInterpolate?g.curve=(0,l.n)(t.defaultInterpolate,n.lUB):g.curve=(0,l.n)(c.curve,n.lUB),void 0===r.text?void 0!==r.style&&(g.arrowheadStyle="fill: #333"):(g.arrowheadStyle="fill: #333",g.labelpos="c"),g.labelType=r.labelType,g.label=await (0,l.r)(r.text.replace(l.e.lineBreakRegex,"\n"),(0,l.c)()),void 0===r.style&&(g.style=g.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),g.labelStyle=g.labelStyle.replace("color:","fill:"),g.id=h,g.classes="flowchart-link "+p+" "+u,e.setEdge(r.start,r.end,g,o)}},u=async function(t,e,r,o){let d,s;l.l.info("Drawing flowchart");let c=o.db.getDirection();void 0===c&&(c="TD");let{securityLevel:u,flowchart:g}=(0,l.c)(),f=g.nodeSpacing||50,y=g.rankSpacing||50;"sandbox"===u&&(d=(0,n.Ltv)("#i"+e));let b="sandbox"===u?(0,n.Ltv)(d.nodes()[0].contentDocument.body):(0,n.Ltv)("body"),v="sandbox"===u?d.nodes()[0].contentDocument:document,w=new a.T({multigraph:!0,compound:!0}).setGraph({rankdir:c,nodesep:f,ranksep:y,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),x=o.db.getSubGraphs();l.l.info("Subgraphs - ",x);for(let t=x.length-1;t>=0;t--)s=x[t],l.l.info("Subgraph - ",s),o.db.addVertex(s.id,{text:s.title,type:s.labelType},"group",void 0,s.classes,s.dir);let k=o.db.getVertices(),m=o.db.getEdges();l.l.info("Edges",m);let A=0;for(A=x.length-1;A>=0;A--){s=x[A],(0,n.Ubm)("cluster").append("text");for(let t=0;t<s.nodes.length;t++)l.l.info("Setting up subgraphs",s.nodes[t],s.id),w.setParent(s.nodes[t],s.id)}await h(k,w,e,b,v,o),await p(m,w);let T=b.select(`[id="${e}"]`),S=b.select("#"+e+" g");if(await (0,i.r)(S,w,["point","circle","cross"],"flowchart",e),l.u.insertTitle(T,"flowchartTitleText",g.titleTopMargin,o.db.getDiagramTitle()),(0,l.o)(w,T,g.diagramPadding,g.useMaxWidth),o.db.indexNodes("subGraph"+A),!g.htmlLabels)for(let t of v.querySelectorAll('[id="'+e+'"] .edgeLabel .label')){let e=t.getBBox(),r=v.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}Object.keys(k).forEach(function(t){let r=k[t];if(r.link){let a=(0,n.Ltv)("#"+e+' [id="'+t+'"]');if(a){let t=v.createElementNS("http://www.w3.org/2000/svg","a");t.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),t.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),t.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===u?t.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&t.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);let e=a.insert(function(){return t},":first-child"),n=a.select(".label-container");n&&e.append(function(){return n.node()});let l=a.select(".label");l&&e.append(function(){return l.node()})}}})},g={setConf:function(t){for(let e of Object.keys(t))c[e]=t[e]},addVertices:h,addEdges:p,getClasses:function(t,e){return e.db.getClasses()},draw:u},f=t=>{var e;let r,a,n,l;return`.label {
    font-family: ${t.fontFamily};
    color: ${t.nodeTextColor||t.textColor};
  }
  .cluster-label text {
    fill: ${t.titleColor};
  }
  .cluster-label span,p {
    color: ${t.titleColor};
  }

  .label text,span,p {
    fill: ${t.nodeTextColor||t.textColor};
    color: ${t.nodeTextColor||t.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${t.edgeLabelBackground};
      fill: ${t.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${e=t.edgeLabelBackground,a=(r=d.A)(e,"r"),n=r(e,"g"),l=r(e,"b"),s.A(a,n,l,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${t.clusterBkg};
    stroke: ${t.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  .cluster span,p {
    color: ${t.titleColor};
  }
  /* .cluster div {
    color: ${t.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`}}}]);