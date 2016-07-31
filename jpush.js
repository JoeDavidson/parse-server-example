var JPush = require("./node_modules/jpush-sdk/lib/JPush/JPush.js");
var client = JPush.buildClient(' cc7be36373f484312cad2888', ' a9fc827948c9622b6c79b7a9');

var PPushAdapter = exports.PushAdapter = function () {
  function PushAdapter() {
    var pushConfig = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, ParsePushAdapter);

    this.supportsPushTracking = true;

    this.validPushTypes = ['ios', 'android'];
    this.senderMap = {};
    // used in PushController for Dashboard Features
    this.feature = {
      immediatePush: true
    };
    var pushTypes = Object.keys(pushConfig);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    // try {
    //   for (var _iterator = pushTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    //     var pushType = _step.value;

    //     if (this.validPushTypes.indexOf(pushType) < 0) {
    //       throw new _parse2.default.Error(_parse2.default.Error.PUSH_MISCONFIGURED, 'Push to ' + pushTypes + ' is not supported');
    //     }
    //     switch (pushType) {
    //       case 'ios':
    //         this.senderMap[pushType] = new _APNS2.default(pushConfig[pushType]);
    //         break;
    //       case 'android':
    //         this.senderMap[pushType] = new _GCM2.default(pushConfig[pushType]);
    //         break;
    //     }
    //   }
    // } catch (err) {
    //   _didIteratorError = true;
    //   _iteratorError = err;
    // } finally {
    //   try {
    //     if (!_iteratorNormalCompletion && _iterator.return) {
    //       _iterator.return();
    //     }
    //   } finally {
    //     if (_didIteratorError) {
    //       throw _iteratorError;
    //     }
    //   }
    // }
  }

  _createClass(PushAdapter, [ {
    key: 'send',
    value: function send(data, installations) {

    client.push().setPlatform(JPush.ALL)
    .setAudience(JPush.ALL)
    .setNotification('Hi, JPush', JPush.ios('ios alert', 'happy.caf', 5))
    .send(function (err, res) {
        if (err) {
            console.log(err.message);
        } else {
            console.log('Sendno: ' + res.sendno);
            console.log('Msg_id: ' + res.msg_id);
        }
    });



    //   var _this = this;
    //   var deviceMap = (0, _PushAdapterUtils.classifyInstallations)(installations, this.validPushTypes);
    //   var sendPromises = [];
    //   var _loop = function _loop(pushType) {
    //     var sender = _this.senderMap[pushType];
    //     var devices = deviceMap[pushType];
    //     if (Array.isArray(devices) && devices.length > 0) {
    //       if (!sender) {
    //         _npmlog2.default.verbose(LOG_PREFIX, 'Can not find sender for push type ' + pushType + ', ' + data);
    //         var results = devices.map(function (device) {
    //           return Promise.resolve({
    //             device: device,
    //             transmitted: false,
    //             response: { 'error': 'Can not find sender for push type ' + pushType + ', ' + data }
    //           });
    //         });
    //         sendPromises.push(Promise.all(results));
    //       } else {
    //         sendPromises.push(sender.send(data, devices));
    //       }
    //     }
    //   };

    //   for (var pushType in deviceMap) {
    //     _loop(pushType);
    //   }
    //   return Promise.all(sendPromises).then(function (promises) {
    //     // flatten all
    //     return [].concat.apply([], promises);
    //   });
    }
  }]);

  return ParsePushAdapter;
}();

