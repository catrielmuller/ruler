/*
Copyright (c) 2019 Daybrush
name: @scena/ruler
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/ruler.git
version: 0.7.0
*/
import { ref, Properties } from 'framework-utils';
import { createPortal, createElement, Component, render } from 'react-simple-compat';
import ReactRuler, { PROPERTIES as PROPERTIES$1, METHODS as METHODS$1 } from 'react-compat-ruler';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var PROPERTIES = PROPERTIES$1;
var METHODS = METHODS$1;

var InnerRuler =
/*#__PURE__*/
function (_super) {
  __extends(InnerRuler, _super);

  function InnerRuler(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {};
    _this.state = _this.props;
    return _this;
  }

  var __proto = InnerRuler.prototype;

  __proto.render = function () {
    var _a = this.state,
        parentElement = _a.parentElement,
        state = __rest(_a, ["parentElement"]);

    return createPortal(createElement(ReactRuler, __assign({
      ref: ref(this, "ruler")
    }, state)), parentElement);
  };

  return InnerRuler;
}(Component);

/**
 * A Ruler component that can draw grids and scroll infinitely.
 * @sort 1
 * @implements Ruler.RulerInterface
 */

var Ruler =
/*#__PURE__*/
function () {
  /**
   * @param - container
   * @param {$ts:Partial<Ruler.RulerProps>} options - options
   */
  function Ruler(parentElement, options) {
    if (options === void 0) {
      options = {};
    }

    this.tempElement = document.createElement("div");
    render(createElement(InnerRuler, __assign({
      ref: ref(this, "innerRuler")
    }, options, {
      parentElement: parentElement
    })), this.tempElement);
  }

  var __proto = Ruler.prototype;

  __proto.scroll = function (scrollPos) {
    this.getRuler().scroll(scrollPos);
  };

  __proto.resize = function () {
    this.getRuler().resize();
  };
  /**
   * Remove Ruler
   */


  __proto.destroy = function () {
    render(null, this.tempElement);
    this.tempElement = null;
    this.innerRuler = null;
  };

  __proto.getRuler = function () {
    return this.innerRuler.ruler;
  };

  Ruler = __decorate([Properties(PROPERTIES, function (prototype, property) {
    Object.defineProperty(prototype, property, {
      get: function () {
        return this.getRuler().props[property];
      },
      set: function (value) {
        var _a;

        this.innerRuler.setState((_a = {}, _a[property] = value, _a));
      },
      enumerable: true,
      configurable: true
    });
  })], Ruler);
  return Ruler;
}();

export default Ruler;
export { METHODS, PROPERTIES };
//# sourceMappingURL=ruler.esm.js.map