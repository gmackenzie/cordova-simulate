// Copyright (c) Microsoft Corporation. All rights reserved.

module.exports = {
    'Device': {
        'getDeviceInfo': function (success, fail, args) {
            success({
                model: document.getElementById('device-model').value,
                platform: document.getElementById('device-platform').value,
                uuid: document.getElementById('device-uuid').value,
                version: document.getElementById('device-version').value
            });
        }
    }
};
