
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("sendemail", function(request, response) {
  // response.success("Hello world!");
  var Mandrill = require('mandrill');
  Mandrill.initialize('R3fRLJrc9DjbUISVk0Idwg');

  var code = request.params.discountCode;
  var email = request.params.emailAddress;

  Mandrill.sendEmail({
    message: {
      text: "Your 10% discount code is\n\n" + code + "\n\n\nThis code can be redeemed http://www.via-e.com.\n\nCongratualations again and keep up the good work!",
      subject: "Congratulations! Here is your discount code",
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
