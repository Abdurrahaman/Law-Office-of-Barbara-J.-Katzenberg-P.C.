$(function () {
	// Detect Publisher "Edit" view
	if (location.href.indexOf('JSPeditPageContent.do') > 0) {
		// Code here will run when viewing site in Edit View - needed when certain elements break Edit View
		// Example: $('.container-accolades, .container-tagline').remove();
	} else {
		// Code in this section will not run on Publisher edit view

		// Fix link targets (v1.0.2)
		(function(){if($(document.body).hasClass("fl-target-ignore")===!0)return!1;var t=location.protocol+"//"+location.host,a=/\.(?:pdf|docx?|xlsx?|pptx?|xml)(?:\?.*)?$/i,l=/\?.*/i;$("a").each(function(r,o){var i=$(o),e=i.attr("href"),n=o.href;return void 0!==e&&(e=e.replace(l,"")),void 0!==n&&(n=n.replace(l,"")),void 0===e||i.hasClass("fl-target-ignore")===!0||null!==e.match(/^#/)||null!==e.match(/^javascript:/i)||null!==e.match(/^mailto:/i)||0===n.indexOf(t)&&null===n.match(a)?!0:void i.attr("target","_blank")})}());
	}
});