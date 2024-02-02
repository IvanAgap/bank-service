"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var react_router_dom_1 = require("react-router-dom");
var StartLayout_1 = require("../layouts/StartLayout/StartLayout");
var NotFoundPage_1 = require("../layouts/NotFoundPage/NotFoundPage");
var Router = function () { return (<react_router_dom_1.Routes>
    <react_router_dom_1.Route path="/" element={<StartLayout_1.default />}/>
    <react_router_dom_1.Route path="*" element={<NotFoundPage_1.NotFoundPage />}/>
  </react_router_dom_1.Routes>); };
exports.Router = Router;
