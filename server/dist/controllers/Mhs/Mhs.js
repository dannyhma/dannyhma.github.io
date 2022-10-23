"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MhsController = void 0;
var CrudController_1 = require("../CrudController");
var dataMhs_json_1 = __importDefault(require("../../resources/dataMhs.json"));
var MhsController = /** @class */ (function (_super) {
    __extends(MhsController, _super);
    function MhsController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MhsController.prototype.read = function (req, res) {
        res.json(dataMhs_json_1.default);
    };
    return MhsController;
}(CrudController_1.CrudController));
exports.MhsController = MhsController;
