"use strict";
var Messages = (function () {
    function Messages() {
        this.information = "";
        this.warning = "";
        this.error = "";
    }
    Messages.prototype.clear = function () {
        this.error = "";
        this.warning = "";
        this.information = "";
    };
    return Messages;
}());
exports.Messages = Messages;
//# sourceMappingURL=messages.js.map