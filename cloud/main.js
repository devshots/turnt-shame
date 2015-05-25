
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("sendemail", function(request, response) {
  // response.success("Hello world!");
  var Mandrill = require('mandrill');
  Mandrill.initialize('BusNpHc2RGc5yYAsSrkIqA');

  var code = request.params.discountCode;
  var email = request.params.emailAddress;

  Mandrill.sendEmail({
    message: {
      text: "Your discount code is: " + code + "This code can be redeemed at http://www.via-e.com.\nCongratulations again and keep up the good work!\nVia E",
      subject: "Congratulations! Here is your discount code to Via E!",
      from_email: "viaeducation@via-e.com",
      from_name: "Via Education",
      to: [
        {
          email: email,
          name: email
        }
      ]
    },
    async: true
  },{
    success: function(httpResponse) {
      console.log(httpResponse);
      response.success("Email sent!");
    },
    error: function(httpResponse) {
      console.error(httpResponse);
      response.error("Uh oh, something went wrong");
    }
  });
});


// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("adminemail", function(request, response) {
  // response.success("Hello world!");
  var Mandrill = require('mandrill');
  Mandrill.initialize('R3fRLJrc9DjbUISVk0Idwg');

  //var email = request.params.emailAddress;

  Mandrill.sendEmail({
    message: {
      text: "All discount codes have been claimed on Via-E mobile app. Upload additional codes to Parse.\nhttp://www.parse.com",
      subject: "ALERT: All Codes have been claimed. Upload additional codes to Parse.",
      from_email: "viaeducation@via-e.com",
      from_name: "Via Education",
      to: [
        {
          email: "viaeducation@via-e.com",
          name: "Via Education"
        }
      ]
    },
    async: true
  },{
    success: function(httpResponse) {
      console.log(httpResponse);
      response.success("Email sent!");
    },
    error: function(httpResponse) {
      console.error(httpResponse);
      response.error("Uh oh, something went wrong");
    }
  });
});
