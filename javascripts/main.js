(function tracking(doc) {
  if (doc.location.hostname === 'localhost')
    return;

  var gaJsHost = (("https:" == doc.location.protocol) ? "https://ssl." : "http://www.");
  doc.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
})(document);

try {
  var pageTracker = _gat._getTracker("UA-39978115-1");
  pageTracker._trackPageview();
} catch(err) {}
