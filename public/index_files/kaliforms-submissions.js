var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){jQuery(document).ready((function(){jQuery("#delete-kaliform-submission").on("click",(function(e){e.preventDefault();var t={submissionId:jQuery(e.target).data("submission-id"),formId:jQuery(e.target).data("form-id"),hash:jQuery(e.target).data("hash"),nonce:KaliFormsObject.ajax_nonce};jQuery.ajax({type:"POST",data:{action:"kaliforms_delete_submission",args:t},dataType:"json",url:KaliFormsObject.ajaxurl,complete:function(e){"ok"===e.responseText?(alert("Submission deleted"),window.location=KaliFormsObject.frontendUrl):alert("Something went wrong")}})}))}))}]);
}
/*
     FILE ARCHIVED ON 03:32:37 Sep 10, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:24:58 Jan 12, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.185 (2)
  exclusion.robots: 0.048 (2)
  exclusion.robots.policy: 0.029 (2)
  esindex: 0.021 (2)
  cdx.remote: 159.907 (2)
  LoadShardBlock: 994.051 (6)
  PetaboxLoader3.datanode: 823.483 (8)
  load_resource: 186.496 (2)
  PetaboxLoader3.resolve: 185.777 (2)
*/