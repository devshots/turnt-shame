
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("mail", function(request, response) {
  // response.success("Hello world!");
  var Mandrill = require('mandrill');
  Mandrill.initialize('R3fRLJrc9DjbUISVk0Idwg');
  
  Mandrill.sendEmail({
    message: {
      text: "Your code is <code>\n Please keep this code for the discount",
      subject: "Congratulations! Here is your discount code",
      from_email: "viaeducation@via-e.com",
      from_name: "Via Education",
      to: [
        {
          email: "ethan@devshots.io",
          name: "Ethan Bruning"
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
