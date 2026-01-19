var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
"use strict";var WPFormsElementorFrontend=window.WPFormsElementorFrontend||function(o,e,r){var n={forceLoadChoices:!1,init:function(){n.events()},events:function(){e.addEventListener("elementor/popup/show",function(e){e=r("#elementor-popup-modal-"+e.detail.id).find(".wpforms-form");e.length&&n.initFields(e)}),r(o).on("elementor/popup/show",()=>{n.forceLoadChoices=!0,wpforms.loadChoicesJS()}),r(o).on("wpformsBeforeLoadElementChoices",(e,o)=>{r(o).parents('div[data-elementor-type="popup"]').length&&!n.forceLoadChoices&&e.preventDefault()})},initFields:function(e){wpforms.ready(),"undefined"!=typeof wpformsModernFileUpload&&wpformsModernFileUpload.init(),"undefined"!=typeof wpformsRecaptchaLoad&&("recaptcha"===wpformsElementorVars.captcha_provider&&"v3"===wpformsElementorVars.recaptcha_type?"undefined"!=typeof grecaptcha&&grecaptcha.ready(wpformsRecaptchaLoad):wpformsRecaptchaLoad()),"undefined"!=typeof WPFormsRepeaterField&&WPFormsRepeaterField.ready(),r(o).trigger("wpforms_elementor_form_fields_initialized",[e])}};return n}(document,window,jQuery);WPFormsElementorFrontend.init();
}
/*
     FILE ARCHIVED ON 06:31:04 Sep 12, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:30:52 Jan 12, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.574
  exclusion.robots: 0.049
  exclusion.robots.policy: 0.036
  esindex: 0.011
  cdx.remote: 59.247
  LoadShardBlock: 323.922 (3)
  PetaboxLoader3.datanode: 405.355 (4)
  load_resource: 326.906
  PetaboxLoader3.resolve: 244.227
*/