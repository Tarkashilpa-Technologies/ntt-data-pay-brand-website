function createFcn(nm) {
  window.freshsales[nm] = function () {
    window.freshsales.push(
      [nm].concat(Array.prototype.slice.call(arguments, 0))
    );
  };
}
(function (url, appToken, formCapture) {
  window.freshsales = window.freshsales || [];
  if (window.freshsales.length == 0) {
    list = "init identify trackPageView trackEvent set".split(" ");
    for (var i = 0; i < list.length; i++) {
      var nm = list[i];
      createFcn(nm);
    }
    var t = document.createElement("script");
    t.async = 1;
    t.src = "//d952cmcgwqsjf.cloudfront.net/assets/analytics.js";
    var ft = document.getElementsByTagName("script")[0];
    ft.parentNode.insertBefore(t, ft);
    freshsales.init(
      "https://nttdatapay.myfreshworks.com/crm/sales",
      "2e01c8cd9f52aab8ebc4e821232d2e960007634e4e705a24e233bf3cd821cd82",
      true
    );
  }
})();
function mycontact(new_contact, email) {
  const identifier = email;
  freshsales.identify(identifier, new_contact);
  document.getElementById("first_name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("email").value = "";
  document.getElementById("tymessage").style.display = "inline-block";
}
