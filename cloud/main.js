
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
      text: "Congratulations on your good grades! You have earned 10% discount on your next purchase at the Via-E.com store.  Your discount code is:\n\n " + code + "\n\nRedeem your code at http://www.via-e.com.\n\nKeep up the good work and we look forward to helping you earn more discount codes with your next A-grade papers!\n\nVia E",
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
