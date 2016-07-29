
Parse.Cloud.define('hello', function (req, res) {
  res.success('Hi');
});
Parse.Cloud.define("sendPush", function (request, response) {
  Parse.Push.send({
    channels: ["Me"],
    data: {
      alert: "The Giants won against the Mets 2-3."
    }
  }, {
      success: function () {
        // Push was successful
        console.log('Success');
        response.success('Success');
      },
      error: function (error) {
        // Handle error
        console.error(error)
        response.error('error'+error);
      }
    });

});
