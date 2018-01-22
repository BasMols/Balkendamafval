/*! template 2018-01-22 */

"use strict";var ajax=function(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.addEventListener("load",function(){4===r.readyState&&200===r.status?"{}"===r.responseText?n(new Error("Empty object")):t(JSON.parse(r.responseText)):4===r.readyState&&200!==r.status&&n(new Error("something went wrong"))}),r.open("GET",e,!0),r.send()})};