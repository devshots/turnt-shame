
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("mail", function(request, response) {
  // response.success("Hello world!");
  var Mandrill = require('mandrill');
  Mandrill.initialize('R3fRLJrc9DjbUISVk0Idwg');
  
  Mandrill.sendEmail({
  message: {
    text: "Hello World!",
    subject: "Using Cloud Code and Mandrill is great!",
    from_email: "parse@cloudcode.com",
    from_name: "Cloud Code",
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
