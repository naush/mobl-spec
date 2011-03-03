mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, elements, callback) {
var root17120 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6529 = $("<span>");
root17120.append(node6529);
var condSubs852 = new mobl.CompSubscription();
subs__.addSub(condSubs852);
var oldValue852;
var renderCond852 = function() {
  var value2770 = value.get();
  if(oldValue852 === value2770) return;
  oldValue852 = value2770;
  var subs__ = condSubs852;
  subs__.unsubscribe();
  node6529.empty();
  if(value2770) {
    var nodes12331 = $("<span>");
    node6529.append(nodes12331);
    subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
      renderControl2461();
    }));
    
    function renderControl2461() {
      subs__.addSub((elements)(function(elements, callback) {
        var root17121 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17121); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12331;
        nodes12331 = node.contents();
        oldNodes.replaceWith(nodes12331);
      }));
    }
    renderControl2461();
    
    
  } else {
    
    var tmp27640 = mobl.ref(null);
    
    
    var tmp27639 = mobl.ref(null);
    
    var nodes12332 = $("<span>");
    node6529.append(nodes12332);
    subs__.addSub((ui.block)(mobl.ref(ui.loadingStyle), tmp27639, tmp27640, function(_, callback) {
      var root17122 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      root17122.append("Loading...");
      
      var tmp27633 = mobl.ref("middle");
      
      
      var tmp27632 = mobl.ref("mobl/ui/generic/loading-large.gif");
      
      
      var tmp27638 = mobl.ref(null);
      
      
      var tmp27637 = mobl.ref(null);
      
      
      var tmp27636 = mobl.ref(null);
      
      
      var tmp27635 = mobl.ref(null);
      
      
      var tmp27634 = mobl.ref(null);
      
      var nodes12333 = $("<span>");
      root17122.append(nodes12333);
      subs__.addSub((ui.image)(tmp27632, tmp27634, tmp27635, tmp27636, tmp27637, tmp27633, tmp27638, function(_, callback) {
        var root17123 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17123); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12333;
        nodes12333 = node.contents();
        oldNodes.replaceWith(nodes12333);
      }));
      callback(root17122); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12332;
      nodes12332 = node.contents();
      oldNodes.replaceWith(nodes12332);
    }));
    
    
  }
};
renderCond852();
subs__.addSub(value.addEventListener('change', function() {
  renderCond852();
}));

callback(root17120); return subs__;

return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
var root17124 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6530 = $("<div>");

var ref5311 = mobl.ref(ui.headerStyle);
if(ref5311.get() !== null) {
  node6530.attr('class', ref5311.get());
  subs__.addSub(ref5311.addEventListener('change', function(_, ref, val) {
    if(ref === ref5311) {
      node6530.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5311.rebind());

var val2799 = onclick.get();
if(val2799 !== null) {
  subs__.addSub(mobl.domBind(node6530, 'tap', val2799));
}


var node6531 = $("<div>");

var ref5310 = mobl.ref(ui.headerContainerStyle);
if(ref5310.get() !== null) {
  node6531.attr('class', ref5310.get());
  subs__.addSub(ref5310.addEventListener('change', function(_, ref, val) {
    if(ref === ref5310) {
      node6531.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5310.rebind());


var node6532 = $("<div>");

var ref5308 = text;
node6532.text(""+ref5308.get());
var ignore1104 = false;
subs__.addSub(ref5308.addEventListener('change', function(_, ref, val) {
  if(ignore1104) return;
  node6532.text(""+val);
}));
subs__.addSub(ref5308.rebind());


var ref5309 = mobl.ref(ui.headerTextStyle);
if(ref5309.get() !== null) {
  node6532.attr('class', ref5309.get());
  subs__.addSub(ref5309.addEventListener('change', function(_, ref, val) {
    if(ref === ref5309) {
      node6532.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5309.rebind());

node6531.append(node6532);
node6530.append(node6531);
var nodes12334 = $("<span>");
node6530.append(nodes12334);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2462();
}));

function renderControl2462() {
  subs__.addSub((elements)(function(elements, callback) {
    var root17125 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17125); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12334;
    nodes12334 = node.contents();
    oldNodes.replaceWith(nodes12334);
  }));
}
renderControl2462();
root17124.append(node6530);
callback(root17124); return subs__;




return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
var root17126 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var sp = $("<span>");

var ref5312 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
if(ref5312.get() !== null) {
  sp.attr('class', ref5312.get());
  subs__.addSub(ref5312.addEventListener('change', function(_, ref, val) {
    if(ref === ref5312) {
      sp.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  subs__.addSub(pushed.addEventListener('change', function() {
    sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
  }));
  subs__.addSub(pushedStyle.addEventListener('change', function() {
    sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
  }));
  subs__.addSub(style.addEventListener('change', function() {
    sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
  }));
  
}
subs__.addSub(ref5312.rebind());

var val2800 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = event.preventDefault();
              var result__ = true;
              pushed.set(result__);
              if(callback && callback.apply) callback(); return;
            };
if(val2800 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdown', val2800));
}

var val2801 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = event.y < 0 || event.y > sp.outerHeight() || event.x < 0 || event.x > sp.outerWidth();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val2801 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdrag', val2801));
}

var val2802 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = pushed.get();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                function after500(result__) {
                  var tmp27701 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onclick.get()(event, after500);if(result__ !== undefined) after500(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val2802 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchup', val2802));
}

var val2803 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = pushed.get();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val2803 !== null) {
  subs__.addSub(mobl.domBind(sp, 'mouseout', val2803));
}

var ref5313 = text;
sp.text(""+ref5313.get());
var ignore1105 = false;
subs__.addSub(ref5313.addEventListener('change', function(_, ref, val) {
  if(ignore1105) return;
  sp.text(""+val);
}));
subs__.addSub(ref5313.rebind());


root17126.append(sp);
callback(root17126); return subs__;

return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root17127 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes12335 = $("<span>");
root17127.append(nodes12335);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root17128 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root17128); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes12335;
  nodes12335 = node.contents();
  oldNodes.replaceWith(nodes12335);
}));
callback(root17127); return subs__;

return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root17129 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes12336 = $("<span>");
root17129.append(nodes12336);
subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root17130 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root17130); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes12336;
  nodes12336 = node.contents();
  oldNodes.replaceWith(nodes12336);
}));
callback(root17129); return subs__;

return subs__;
};

ui.block = function(cssClass, id, onclick, elements, callback) {
var root17131 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6533 = $("<div>");

var ref5314 = id;
if(ref5314.get() !== null) {
  node6533.attr('id', ref5314.get());
  subs__.addSub(ref5314.addEventListener('change', function(_, ref, val) {
    if(ref === ref5314) {
      node6533.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5314.rebind());

var ref5315 = cssClass;
if(ref5315.get() !== null) {
  node6533.attr('class', ref5315.get());
  subs__.addSub(ref5315.addEventListener('change', function(_, ref, val) {
    if(ref === ref5315) {
      node6533.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5315.rebind());

var val2804 = onclick.get();
if(val2804 !== null) {
  subs__.addSub(mobl.domBind(node6533, 'tap', val2804));
}

var nodes12337 = $("<span>");
node6533.append(nodes12337);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2463();
}));

function renderControl2463() {
  subs__.addSub((elements)(function(elements, callback) {
    var root17132 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17132); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12337;
    nodes12337 = node.contents();
    oldNodes.replaceWith(nodes12337);
  }));
}
renderControl2463();
root17131.append(node6533);
callback(root17131); return subs__;


return subs__;
};

ui.span = function(cssClass, id, onclick, elements, callback) {
var root17133 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6534 = $("<span>");

var ref5316 = id;
if(ref5316.get() !== null) {
  node6534.attr('id', ref5316.get());
  subs__.addSub(ref5316.addEventListener('change', function(_, ref, val) {
    if(ref === ref5316) {
      node6534.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5316.rebind());

var ref5317 = cssClass;
if(ref5317.get() !== null) {
  node6534.attr('class', ref5317.get());
  subs__.addSub(ref5317.addEventListener('change', function(_, ref, val) {
    if(ref === ref5317) {
      node6534.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5317.rebind());

var val2805 = onclick.get();
if(val2805 !== null) {
  subs__.addSub(mobl.domBind(node6534, 'tap', val2805));
}

var nodes12338 = $("<span>");
node6534.append(nodes12338);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2464();
}));

function renderControl2464() {
  subs__.addSub((elements)(function(elements, callback) {
    var root17134 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17134); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12338;
    nodes12338 = node.contents();
    oldNodes.replaceWith(nodes12338);
  }));
}
renderControl2464();
root17133.append(node6534);
callback(root17133); return subs__;


return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
var root17135 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6535 = $("<ul>");

var ref5318 = mobl.ref(ui.groupStyle);
if(ref5318.get() !== null) {
  node6535.attr('class', ref5318.get());
  subs__.addSub(ref5318.addEventListener('change', function(_, ref, val) {
    if(ref === ref5318) {
      node6535.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5318.rebind());

var nodes12339 = $("<span>");
node6535.append(nodes12339);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2465();
}));

function renderControl2465() {
  subs__.addSub((elements)(function(elements, callback) {
    var root17136 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17136); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12339;
    nodes12339 = node.contents();
    oldNodes.replaceWith(nodes12339);
  }));
}
renderControl2465();
root17135.append(node6535);
callback(root17135); return subs__;


return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
var root17137 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6536 = $("<img>");

var ref5319 = url;
if(ref5319.get() !== null) {
  node6536.attr('src', ref5319.get());
  subs__.addSub(ref5319.addEventListener('change', function(_, ref, val) {
    if(ref === ref5319) {
      node6536.attr('src', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5319.rebind());

var ref5320 = width;
if(ref5320.get() !== null) {
  node6536.attr('width', ref5320.get());
  subs__.addSub(ref5320.addEventListener('change', function(_, ref, val) {
    if(ref === ref5320) {
      node6536.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5320.rebind());

var ref5321 = height;
if(ref5321.get() !== null) {
  node6536.attr('height', ref5321.get());
  subs__.addSub(ref5321.addEventListener('change', function(_, ref, val) {
    if(ref === ref5321) {
      node6536.attr('height', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5321.rebind());

var ref5322 = style;
if(ref5322.get() !== null) {
  node6536.attr('class', ref5322.get());
  subs__.addSub(ref5322.addEventListener('change', function(_, ref, val) {
    if(ref === ref5322) {
      node6536.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5322.rebind());

var val2806 = onclick.get();
if(val2806 !== null) {
  subs__.addSub(mobl.domBind(node6536, 'tap', val2806));
}

var ref5323 = valign;
if(ref5323.get() !== null) {
  node6536.attr('valign', ref5323.get());
  subs__.addSub(ref5323.addEventListener('change', function(_, ref, val) {
    if(ref === ref5323) {
      node6536.attr('valign', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5323.rebind());

var ref5324 = align;
if(ref5324.get() !== null) {
  node6536.attr('align', ref5324.get());
  subs__.addSub(ref5324.addEventListener('change', function(_, ref, val) {
    if(ref === ref5324) {
      node6536.attr('align', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5324.rebind());

root17137.append(node6536);
callback(root17137); return subs__;

return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
var root17138 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var el = $("<li>");

var ref5325 = mobl.ref(ui.itemStyle);
if(ref5325.get() !== null) {
  el.attr('class', ref5325.get());
  subs__.addSub(ref5325.addEventListener('change', function(_, ref, val) {
    if(ref === ref5325) {
      el.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5325.rebind());

var ref5326 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
if(ref5326.get() !== null) {
  el.attr('class', ref5326.get());
  subs__.addSub(ref5326.addEventListener('change', function(_, ref, val) {
    if(ref === ref5326) {
      el.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  subs__.addSub(onclick.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(hideArrow.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(mobl.ref(ui.itemArrowStyle).addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(pushed.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(pushedStyle.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(style.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  
}
subs__.addSub(ref5326.rebind());

var val2807 = onclick.get() ? function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = true;
                                       pushed.set(result__);
                                       mobl.sleep(100, function(result__) {
                                         var tmp27702 = result__;
                                         function after501(result__) {
                                           var tmp27703 = result__;
                                           
                                         }
                                         var result__ = onclick.get()(event, after501);if(result__ !== undefined) after501(result__);
                                         mobl.sleep(200, function(result__) {
                                           var tmp27704 = result__;
                                           var result__ = false;
                                           pushed.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                                         
                                       });
                                     } : null;
if(val2807 !== null) {
  subs__.addSub(mobl.domBind(el, 'tap', val2807));
}

var nodes12340 = $("<span>");
el.append(nodes12340);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2466();
}));

function renderControl2466() {
  subs__.addSub((elements)(function(elements, callback) {
    var root17139 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17139); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12340;
    nodes12340 = node.contents();
    oldNodes.replaceWith(nodes12340);
  }));
}
renderControl2466();
root17138.append(el);
callback(root17138); return subs__;


return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
var root17140 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6537 = $("<input>");
node6537.attr('type', "checkbox");

var ref5328 = b;
node6537.attr('checked', !!ref5328.get());
subs__.addSub(ref5328.addEventListener('change', function(_, ref, val) {
  if(ref === ref5328) node6537.attr('checked', !!val);
}));
subs__.addSub(mobl.domBind(node6537, 'change', function() {
  b.set(!!node6537.attr('checked'));
}));

var val2809 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              if(callback && callback.apply) callback(); return;
            };
if(val2809 !== null) {
  subs__.addSub(mobl.domBind(node6537, 'tap', val2809));
}

var val2810 = onchange.get();
if(val2810 !== null) {
  subs__.addSub(mobl.domBind(node6537, 'change', val2810));
}

root17140.append(node6537);

root17140.append(" ");

var node6538 = $("<span>");

var ref5327 = label;
node6538.text(""+ref5327.get());
var ignore1106 = false;
subs__.addSub(ref5327.addEventListener('change', function(_, ref, val) {
  if(ignore1106) return;
  node6538.text(""+val);
}));
subs__.addSub(ref5327.rebind());


var val2808 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = !b.get();
              b.set(result__);
              var result__ = onchange.get();
              if(result__) {
                function after502(result__) {
                  var tmp27705 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onchange.get()(null, after502);if(result__ !== undefined) after502(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val2808 !== null) {
  subs__.addSub(mobl.domBind(node6538, 'tap', val2808));
}

root17140.append(node6538);
callback(root17140); return subs__;


return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';

ui.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
var root17141 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6539 = $("<span>");
root17141.append(node6539);
var condSubs853 = new mobl.CompSubscription();
subs__.addSub(condSubs853);
var oldValue853;
var renderCond853 = function() {
  var value2771 = label.get();
  if(oldValue853 === value2771) return;
  oldValue853 = value2771;
  var subs__ = condSubs853;
  subs__.unsubscribe();
  node6539.empty();
  if(value2771) {
    
    var node6540 = $("<span>");
    node6540.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref5332 = label;
    node6540.text(""+ref5332.get());
    var ignore1108 = false;
    subs__.addSub(ref5332.addEventListener('change', function(_, ref, val) {
      if(ignore1108) return;
      node6540.text(""+val);
    }));
    subs__.addSub(ref5332.rebind());
    
    
    node6539.append(node6540);
    
    var node6541 = $("<span>");
    node6541.attr('style', "float: left");
    
    
    var node6542 = $("<input>");
    node6542.attr('type', "text");
    
    var ref5329 = mobl.ref(ui.textFieldStyle);
    if(ref5329.get() !== null) {
      node6542.attr('class', ref5329.get());
      subs__.addSub(ref5329.addEventListener('change', function(_, ref, val) {
        if(ref === ref5329) {
          node6542.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5329.rebind());
    
    var ref5330 = placeholder;
    if(ref5330.get() !== null) {
      node6542.attr('placeholder', ref5330.get());
      subs__.addSub(ref5330.addEventListener('change', function(_, ref, val) {
        if(ref === ref5330) {
          node6542.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5330.rebind());
    
    var ref5331 = s;
    node6542.val(""+ref5331.get());
    var ignore1107 = false;
    subs__.addSub(ref5331.addEventListener('change', function(_, ref, val) {
      if(ignore1107) return;
      node6542.val(""+val);
    }));
    subs__.addSub(ref5331.rebind());
    
    subs__.addSub(mobl.domBind(node6542, 'keyup change', function() {
      ignore1107 = true;
      s.set(mobl.stringTomobl__String(node6542.val()));
      ignore1107 = false;
    }));
    
    
    var val2811 = onchange.get();
    if(val2811 !== null) {
      subs__.addSub(mobl.domBind(node6542, 'change', val2811));
    }
    
    var val2812 = onkeyup.get();
    if(val2812 !== null) {
      subs__.addSub(mobl.domBind(node6542, 'keyup', val2812));
    }
    
    var val2813 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val2813 !== null) {
      subs__.addSub(mobl.domBind(node6542, 'blur', val2813));
    }
    
    node6541.append(node6542);
    node6539.append(node6541);
    
    
    
    
  } else {
    
    var node6543 = $("<input>");
    node6543.attr('type', "text");
    
    var ref5333 = mobl.ref(ui.textFieldStyle);
    if(ref5333.get() !== null) {
      node6543.attr('class', ref5333.get());
      subs__.addSub(ref5333.addEventListener('change', function(_, ref, val) {
        if(ref === ref5333) {
          node6543.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5333.rebind());
    
    var ref5334 = placeholder;
    if(ref5334.get() !== null) {
      node6543.attr('placeholder', ref5334.get());
      subs__.addSub(ref5334.addEventListener('change', function(_, ref, val) {
        if(ref === ref5334) {
          node6543.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5334.rebind());
    
    var ref5335 = s;
    node6543.val(""+ref5335.get());
    var ignore1109 = false;
    subs__.addSub(ref5335.addEventListener('change', function(_, ref, val) {
      if(ignore1109) return;
      node6543.val(""+val);
    }));
    subs__.addSub(ref5335.rebind());
    
    subs__.addSub(mobl.domBind(node6543, 'keyup change', function() {
      ignore1109 = true;
      s.set(mobl.stringTomobl__String(node6543.val()));
      ignore1109 = false;
    }));
    
    
    var val2814 = onchange.get();
    if(val2814 !== null) {
      subs__.addSub(mobl.domBind(node6543, 'change', val2814));
    }
    
    var val2815 = onkeyup.get();
    if(val2815 !== null) {
      subs__.addSub(mobl.domBind(node6543, 'keyup', val2815));
    }
    
    var val2816 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val2816 !== null) {
      subs__.addSub(mobl.domBind(node6543, 'blur', val2816));
    }
    
    node6539.append(node6543);
    
    
  }
};
renderCond853();
subs__.addSub(label.addEventListener('change', function() {
  renderCond853();
}));

callback(root17141); return subs__;

return subs__;
};

ui.numField = function(n, placeholder, label, onchange, elements, callback) {
var root17142 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6544 = $("<span>");
root17142.append(node6544);
var condSubs854 = new mobl.CompSubscription();
subs__.addSub(condSubs854);
var oldValue854;
var renderCond854 = function() {
  var value2772 = label.get();
  if(oldValue854 === value2772) return;
  oldValue854 = value2772;
  var subs__ = condSubs854;
  subs__.unsubscribe();
  node6544.empty();
  if(value2772) {
    
    var node6545 = $("<span>");
    node6545.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref5339 = label;
    node6545.text(""+ref5339.get());
    var ignore1111 = false;
    subs__.addSub(ref5339.addEventListener('change', function(_, ref, val) {
      if(ignore1111) return;
      node6545.text(""+val);
    }));
    subs__.addSub(ref5339.rebind());
    
    
    node6544.append(node6545);
    
    var node6546 = $("<span>");
    node6546.attr('style', "float: left");
    
    
    var node6547 = $("<input>");
    node6547.attr('type', "text");
    
    var ref5336 = mobl.ref(ui.textFieldStyle);
    if(ref5336.get() !== null) {
      node6547.attr('class', ref5336.get());
      subs__.addSub(ref5336.addEventListener('change', function(_, ref, val) {
        if(ref === ref5336) {
          node6547.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5336.rebind());
    
    var ref5337 = placeholder;
    if(ref5337.get() !== null) {
      node6547.attr('placeholder', ref5337.get());
      subs__.addSub(ref5337.addEventListener('change', function(_, ref, val) {
        if(ref === ref5337) {
          node6547.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5337.rebind());
    
    var ref5338 = n;
    node6547.val(""+ref5338.get());
    var ignore1110 = false;
    subs__.addSub(ref5338.addEventListener('change', function(_, ref, val) {
      if(ignore1110) return;
      node6547.val(""+val);
    }));
    subs__.addSub(ref5338.rebind());
    
    subs__.addSub(mobl.domBind(node6547, 'keyup change', function() {
      ignore1110 = true;
      n.set(mobl.stringTomobl__Num(node6547.val()));
      ignore1110 = false;
    }));
    
    
    var val2817 = onchange.get();
    if(val2817 !== null) {
      subs__.addSub(mobl.domBind(node6547, 'change', val2817));
    }
    
    var val2818 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val2818 !== null) {
      subs__.addSub(mobl.domBind(node6547, 'blur', val2818));
    }
    
    node6546.append(node6547);
    node6544.append(node6546);
    
    
    
    
  } else {
    
    var node6548 = $("<input>");
    node6548.attr('type', "text");
    
    var ref5340 = mobl.ref(ui.textFieldStyle);
    if(ref5340.get() !== null) {
      node6548.attr('class', ref5340.get());
      subs__.addSub(ref5340.addEventListener('change', function(_, ref, val) {
        if(ref === ref5340) {
          node6548.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5340.rebind());
    
    var ref5341 = placeholder;
    if(ref5341.get() !== null) {
      node6548.attr('placeholder', ref5341.get());
      subs__.addSub(ref5341.addEventListener('change', function(_, ref, val) {
        if(ref === ref5341) {
          node6548.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5341.rebind());
    
    var ref5342 = n;
    node6548.val(""+ref5342.get());
    var ignore1112 = false;
    subs__.addSub(ref5342.addEventListener('change', function(_, ref, val) {
      if(ignore1112) return;
      node6548.val(""+val);
    }));
    subs__.addSub(ref5342.rebind());
    
    subs__.addSub(mobl.domBind(node6548, 'keyup change', function() {
      ignore1112 = true;
      n.set(mobl.stringTomobl__Num(node6548.val()));
      ignore1112 = false;
    }));
    
    
    var val2819 = onchange.get();
    if(val2819 !== null) {
      subs__.addSub(mobl.domBind(node6548, 'change', val2819));
    }
    
    var val2820 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val2820 !== null) {
      subs__.addSub(mobl.domBind(node6548, 'blur', val2820));
    }
    
    node6544.append(node6548);
    
    
  }
};
renderCond854();
subs__.addSub(label.addEventListener('change', function() {
  renderCond854();
}));

callback(root17142); return subs__;

return subs__;
};

ui.passwordField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
var root17143 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6549 = $("<span>");
root17143.append(node6549);
var condSubs855 = new mobl.CompSubscription();
subs__.addSub(condSubs855);
var oldValue855;
var renderCond855 = function() {
  var value2773 = label.get();
  if(oldValue855 === value2773) return;
  oldValue855 = value2773;
  var subs__ = condSubs855;
  subs__.unsubscribe();
  node6549.empty();
  if(value2773) {
    
    var node6550 = $("<span>");
    node6550.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref5346 = label;
    node6550.text(""+ref5346.get());
    var ignore1114 = false;
    subs__.addSub(ref5346.addEventListener('change', function(_, ref, val) {
      if(ignore1114) return;
      node6550.text(""+val);
    }));
    subs__.addSub(ref5346.rebind());
    
    
    node6549.append(node6550);
    
    var node6551 = $("<span>");
    node6551.attr('style', "float: left");
    
    
    var node6552 = $("<input>");
    node6552.attr('type', "password");
    
    var ref5343 = mobl.ref(ui.textFieldStyle);
    if(ref5343.get() !== null) {
      node6552.attr('class', ref5343.get());
      subs__.addSub(ref5343.addEventListener('change', function(_, ref, val) {
        if(ref === ref5343) {
          node6552.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5343.rebind());
    
    var ref5344 = placeholder;
    if(ref5344.get() !== null) {
      node6552.attr('placeholder', ref5344.get());
      subs__.addSub(ref5344.addEventListener('change', function(_, ref, val) {
        if(ref === ref5344) {
          node6552.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5344.rebind());
    
    var ref5345 = s;
    node6552.val(""+ref5345.get());
    var ignore1113 = false;
    subs__.addSub(ref5345.addEventListener('change', function(_, ref, val) {
      if(ignore1113) return;
      node6552.val(""+val);
    }));
    subs__.addSub(ref5345.rebind());
    
    subs__.addSub(mobl.domBind(node6552, 'keyup change', function() {
      ignore1113 = true;
      s.set(mobl.stringTomobl__String(node6552.val()));
      ignore1113 = false;
    }));
    
    
    var val2821 = onchange.get();
    if(val2821 !== null) {
      subs__.addSub(mobl.domBind(node6552, 'change', val2821));
    }
    
    var val2822 = onkeyup.get();
    if(val2822 !== null) {
      subs__.addSub(mobl.domBind(node6552, 'keyup', val2822));
    }
    
    var val2823 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val2823 !== null) {
      subs__.addSub(mobl.domBind(node6552, 'blur', val2823));
    }
    
    node6551.append(node6552);
    node6549.append(node6551);
    
    
    
    
  } else {
    
    var node6553 = $("<input>");
    node6553.attr('type', "password");
    
    var ref5347 = mobl.ref(ui.textFieldStyle);
    if(ref5347.get() !== null) {
      node6553.attr('class', ref5347.get());
      subs__.addSub(ref5347.addEventListener('change', function(_, ref, val) {
        if(ref === ref5347) {
          node6553.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5347.rebind());
    
    var ref5348 = placeholder;
    if(ref5348.get() !== null) {
      node6553.attr('placeholder', ref5348.get());
      subs__.addSub(ref5348.addEventListener('change', function(_, ref, val) {
        if(ref === ref5348) {
          node6553.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5348.rebind());
    
    var ref5349 = s;
    node6553.val(""+ref5349.get());
    var ignore1115 = false;
    subs__.addSub(ref5349.addEventListener('change', function(_, ref, val) {
      if(ignore1115) return;
      node6553.val(""+val);
    }));
    subs__.addSub(ref5349.rebind());
    
    subs__.addSub(mobl.domBind(node6553, 'keyup change', function() {
      ignore1115 = true;
      s.set(mobl.stringTomobl__String(node6553.val()));
      ignore1115 = false;
    }));
    
    
    var val2824 = onchange.get();
    if(val2824 !== null) {
      subs__.addSub(mobl.domBind(node6553, 'change', val2824));
    }
    
    var val2825 = onkeyup.get();
    if(val2825 !== null) {
      subs__.addSub(mobl.domBind(node6553, 'keyup', val2825));
    }
    
    var val2826 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = ui.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val2826 !== null) {
      subs__.addSub(mobl.domBind(node6553, 'blur', val2826));
    }
    
    node6549.append(node6553);
    
    
  }
};
renderCond855();
subs__.addSub(label.addEventListener('change', function() {
  renderCond855();
}));

callback(root17143); return subs__;

return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
var root17144 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeTabName = mobl.ref(tabs.get().get(0)._1);

var s = mobl.ref("");


var tmp27647 = mobl.ref(null);


var tmp27646 = mobl.ref(null);

var nodes12341 = $("<span>");
root17144.append(nodes12341);
subs__.addSub((ui.block)(mobl.ref(ui.tabbarStyle), tmp27646, tmp27647, function(_, callback) {
  var root17145 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node6554 = mobl.loadingSpan();
  root17145.append(node6554);
  var list1351;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList1351 = function() {
    var subs__ = listSubs__;
    list1351 = tabs.get();
    list1351.list(function(results1963) {
      node6554.empty();
      for(var i1412 = 0; i1412 < results1963.length; i1412++) {
        (function() {
          var iternode1351 = $("<span>");
          node6554.append(iternode1351);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results1963), i1412), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1963), i1412), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1963), i1412), "_3");
          
          var tmp27644 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp27644.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp27644.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
            tmp27644.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
            tmp27644.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
          }));
          
          
          var tmp27643 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTabName.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp27645 = mobl.ref(null);
          
          var nodes12342 = $("<span>");
          iternode1351.append(nodes12342);
          subs__.addSub((ui.span)(tmp27644, tmp27645, tmp27643, function(_, callback) {
            var root17146 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp27642 = mobl.ref(null);
            
            
            var tmp27641 = mobl.ref(null);
            
            var nodes12343 = $("<span>");
            root17146.append(nodes12343);
            subs__.addSub((mobl.label)(tabName, tmp27641, tmp27642, function(_, callback) {
              var root17147 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root17147); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes12343;
              nodes12343 = node.contents();
              oldNodes.replaceWith(nodes12343);
            }));
            callback(root17146); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes12342;
            nodes12342 = node.contents();
            oldNodes.replaceWith(nodes12342);
          }));
          
          var oldNodes = iternode1351;
          iternode1351 = iternode1351.contents();
          oldNodes.replaceWith(iternode1351);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list1351.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1351(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1351(true); }));
    });
  };
  renderList1351();
  
  callback(root17145); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes12341;
  nodes12341 = node.contents();
  oldNodes.replaceWith(nodes12341);
}));

var node6555 = mobl.loadingSpan();
root17144.append(node6555);
var list1352;
var listSubs__ = new mobl.CompSubscription();
subs__.addSub(listSubs__);
var renderList1352 = function() {
  var subs__ = listSubs__;
  list1352 = tabs.get();
  list1352.list(function(results1964) {
    node6555.empty();
    for(var i1413 = 0; i1413 < results1964.length; i1413++) {
      (function() {
        var iternode1352 = $("<span>");
        node6555.append(iternode1352);
        var tabName;var tabIcon;var tabControl;
        tabName = mobl.ref(mobl.ref(mobl.ref(results1964), i1413), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1964), i1413), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1964), i1413), "_3");
        
        var tmp27648 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp27648.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(tabName.addEventListener('change', function() {
          tmp27648.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
          tmp27648.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
          tmp27648.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
        }));
        
        
        var tmp27650 = mobl.ref(null);
        
        
        var tmp27649 = mobl.ref(null);
        
        var nodes12344 = $("<span>");
        iternode1352.append(nodes12344);
        subs__.addSub((ui.block)(tmp27648, tmp27649, tmp27650, function(_, callback) {
          var root17148 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes12345 = $("<span>");
          root17148.append(nodes12345);
          subs__.addSub((mobl.screenContext)(function(_, callback) {
            var root17149 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes12346 = $("<span>");
            root17149.append(nodes12346);
            subs__.addSub(tabControl.addEventListener('change', function() {
              renderControl2467();
            }));
            
            function renderControl2467() {
              subs__.addSub((tabControl.get())(function(elements, callback) {
                var root17150 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root17150); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes12346;
                nodes12346 = node.contents();
                oldNodes.replaceWith(nodes12346);
              }));
            }
            renderControl2467();
            callback(root17149); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes12345;
            nodes12345 = node.contents();
            oldNodes.replaceWith(nodes12345);
          }));
          callback(root17148); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes12344;
          nodes12344 = node.contents();
          oldNodes.replaceWith(nodes12344);
        }));
        
        var oldNodes = iternode1352;
        iternode1352 = iternode1352.contents();
        oldNodes.replaceWith(iternode1352);
        
        
      }());
    }
    mobl.delayedUpdateScrollers();
    subs__.addSub(list1352.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1352(true); }));
    subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1352(true); }));
  });
};
renderList1352();

callback(root17144); return subs__;


return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
var root17151 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6556 = $("<div>");

var ref5353 = mobl.ref(ui.searchboxStyle);
if(ref5353.get() !== null) {
  node6556.attr('class', ref5353.get());
  subs__.addSub(ref5353.addEventListener('change', function(_, ref, val) {
    if(ref === ref5353) {
      node6556.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5353.rebind());


var node6557 = $("<input>");
node6557.attr('type', "text");

var ref5350 = mobl.ref(ui.searchBoxInputStyle);
if(ref5350.get() !== null) {
  node6557.attr('class', ref5350.get());
  subs__.addSub(ref5350.addEventListener('change', function(_, ref, val) {
    if(ref === ref5350) {
      node6557.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5350.rebind());

var ref5351 = placeholder;
if(ref5351.get() !== null) {
  node6557.attr('placeholder', ref5351.get());
  subs__.addSub(ref5351.addEventListener('change', function(_, ref, val) {
    if(ref === ref5351) {
      node6557.attr('placeholder', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5351.rebind());

var ref5352 = s;
node6557.val(""+ref5352.get());
var ignore1116 = false;
subs__.addSub(ref5352.addEventListener('change', function(_, ref, val) {
  if(ignore1116) return;
  node6557.val(""+val);
}));
subs__.addSub(ref5352.rebind());

subs__.addSub(mobl.domBind(node6557, 'keyup change', function() {
  ignore1116 = true;
  s.set(mobl.stringTomobl__String(node6557.val()));
  ignore1116 = false;
}));


var val2827 = onsearch.get();
if(val2827 !== null) {
  subs__.addSub(mobl.domBind(node6557, 'change', val2827));
}

var val2828 = onkeyup.get();
if(val2828 !== null) {
  subs__.addSub(mobl.domBind(node6557, 'keyup', val2828));
}
node6557.attr('autocorrect', "off");
node6557.attr('autocapitalize', "off");
node6557.attr('autocomplete', "off");

node6556.append(node6557);
root17151.append(node6556);
callback(root17151); return subs__;


return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
var root17152 = $("<span>");
var subs__ = new mobl.CompSubscription();

var menu = $("<div>");

var ref5354 = mobl.ref(ui.contextMenuStyle);
if(ref5354.get() !== null) {
  menu.attr('class', ref5354.get());
  subs__.addSub(ref5354.addEventListener('change', function(_, ref, val) {
    if(ref === ref5354) {
      menu.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5354.rebind());

var nodes12347 = $("<span>");
menu.append(nodes12347);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2468();
}));

function renderControl2468() {
  subs__.addSub((elements)(function(elements, callback) {
    var root17153 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17153); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12347;
    nodes12347 = node.contents();
    oldNodes.replaceWith(nodes12347);
  }));
}
renderControl2468();
root17152.append(menu);
var result__ = menu.hide();

var img = $("<img>");
img.attr('src', "mobl/ui/generic/contextmenu.png");
img.attr('style', "float: right;");

var val2829 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = img.parent();
              var target = result__;
              var result__ = target.css("position", "relative");
              var result__ = img.hide();
              var result__ = menu.css("right", "5px");
              var result__ = menu.css("top", "5px");
              var result__ = menu.show();
              mobl.sleep(500, function(result__) {
                var tmp27708 = result__;
                var result__ = mobl.$("body").bind("tap", removeMenu);
                if(callback && callback.apply) callback(); return;
              });
            };
if(val2829 !== null) {
  subs__.addSub(mobl.domBind(img, 'tap', val2829));
}

root17152.append(img);

var removeMenu = function(evt) {
   var __this = this;
  menu.hide();
  img.show();
  mobl.$("body").unbind("tap", removeMenu);
};


callback(root17152); return subs__;



return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
var root17154 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp27700 = mobl.ref(mobl.window.get().innerWidth > 500);
subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
  tmp27700.set(mobl.window.get().innerWidth > 500);
}));


var node6558 = $("<span>");
root17154.append(node6558);
var condSubs856 = new mobl.CompSubscription();
subs__.addSub(condSubs856);
var oldValue856;
var renderCond856 = function() {
  var value2774 = tmp27700.get();
  if(oldValue856 === value2774) return;
  oldValue856 = value2774;
  var subs__ = condSubs856;
  subs__.unsubscribe();
  node6558.empty();
  if(value2774) {
    items.get().one(function(result__) {
      var current = mobl.ref(result__);
      
      var node6559 = $("<div>");
      node6559.attr('width', "100%");
      
      
      var node6560 = $("<div>");
      node6560.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes12349 = $("<span>");
      node6560.append(nodes12349);
      subs__.addSub((ui.group)(function(_, callback) {
        var root17156 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node6562 = mobl.loadingSpan();
        root17156.append(node6562);
        var list1353;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList1353 = function() {
          var subs__ = listSubs__;
          list1353 = items.get();
          list1353.list(function(results1965) {
            node6562.empty();
            for(var i1414 = 0; i1414 < results1965.length; i1414++) {
              (function() {
                var iternode1353 = $("<span>");
                node6562.append(iternode1353);
                var it;
                it = mobl.ref(mobl.ref(results1965), i1414);
                
                var tmp27664 = mobl.ref(it.get() == current.get());
                subs__.addSub(it.addEventListener('change', function() {
                  tmp27664.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp27664.set(it.get() == current.get());
                }));
                
                
                var node6563 = $("<span>");
                iternode1353.append(node6563);
                var condSubs857 = new mobl.CompSubscription();
                subs__.addSub(condSubs857);
                var oldValue857;
                var renderCond857 = function() {
                  var value2775 = tmp27664.get();
                  if(oldValue857 === value2775) return;
                  oldValue857 = value2775;
                  var subs__ = condSubs857;
                  subs__.unsubscribe();
                  node6563.empty();
                  if(value2775) {
                    
                    var tmp27660 = mobl.ref(false);
                    
                    
                    var tmp27659 = mobl.ref(null);
                    
                    
                    var tmp27658 = mobl.ref(null);
                    
                    var nodes12350 = $("<span>");
                    node6563.append(nodes12350);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp27658, tmp27659, tmp27660, function(_, callback) {
                      var root17157 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes12351 = $("<span>");
                      root17157.append(nodes12351);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl2470();
                      }));
                      
                      function renderControl2470() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root17158 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root17158); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes12351;
                          nodes12351 = node.contents();
                          oldNodes.replaceWith(nodes12351);
                        }));
                      }
                      renderControl2470();
                      callback(root17157); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes12350;
                      nodes12350 = node.contents();
                      oldNodes.replaceWith(nodes12350);
                    }));
                    
                    
                  } else {
                    
                    var tmp27662 = mobl.ref(function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = it.get();
                                         current.set(result__);
                                         if(callback && callback.apply) callback(); return;
                                       });
                    
                    
                    var tmp27661 = mobl.ref(true);
                    
                    
                    var tmp27663 = mobl.ref(null);
                    
                    var nodes12352 = $("<span>");
                    node6563.append(nodes12352);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp27662, tmp27663, tmp27661, function(_, callback) {
                      var root17159 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes12353 = $("<span>");
                      root17159.append(nodes12353);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl2471();
                      }));
                      
                      function renderControl2471() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root17160 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root17160); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes12353;
                          nodes12353 = node.contents();
                          oldNodes.replaceWith(nodes12353);
                        }));
                      }
                      renderControl2471();
                      callback(root17159); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes12352;
                      nodes12352 = node.contents();
                      oldNodes.replaceWith(nodes12352);
                    }));
                    
                    
                  }
                };
                renderCond857();
                subs__.addSub(tmp27664.addEventListener('change', function() {
                  renderCond857();
                }));
                
                
                var oldNodes = iternode1353;
                iternode1353 = iternode1353.contents();
                oldNodes.replaceWith(iternode1353);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list1353.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1353(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1353(true); }));
          });
        };
        renderList1353();
        
        callback(root17156); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes12349;
        nodes12349 = node.contents();
        oldNodes.replaceWith(nodes12349);
      }));
      node6559.append(node6560);
      
      var node6561 = $("<div>");
      node6561.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
      
      var nodes12348 = $("<span>");
      node6561.append(nodes12348);
      subs__.addSub(detail.addEventListener('change', function() {
        renderControl2469();
      }));
      
      function renderControl2469() {
        subs__.addSub((detail.get())(current, function(elements, callback) {
          var root17155 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root17155); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12348;
          nodes12348 = node.contents();
          oldNodes.replaceWith(nodes12348);
        }));
      }
      renderControl2469();
      node6559.append(node6561);
      node6558.append(node6559);
      
      
      
      
      
      
    });
  } else {
    var nodes12354 = $("<span>");
    node6558.append(nodes12354);
    subs__.addSub((ui.group)(function(_, callback) {
      var root17161 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node6564 = mobl.loadingSpan();
      root17161.append(node6564);
      var list1354;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList1354 = function() {
        var subs__ = listSubs__;
        list1354 = items.get();
        list1354.list(function(results1966) {
          node6564.empty();
          for(var i1415 = 0; i1415 < results1966.length; i1415++) {
            (function() {
              var iternode1354 = $("<span>");
              node6564.append(iternode1354);
              var it;
              it = mobl.ref(mobl.ref(results1966), i1415);
              
              var tmp27651 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('ui.detailScreen', [it, detail], function(result__) {
                                   var tmp27709 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp27653 = mobl.ref(false);
              
              
              var tmp27652 = mobl.ref(null);
              
              var nodes12355 = $("<span>");
              iternode1354.append(nodes12355);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp27651, tmp27652, tmp27653, function(_, callback) {
                var root17162 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes12356 = $("<span>");
                root17162.append(nodes12356);
                subs__.addSub(masterItem.addEventListener('change', function() {
                  renderControl2472();
                }));
                
                function renderControl2472() {
                  subs__.addSub((masterItem.get())(it, function(elements, callback) {
                    var root17163 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root17163); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes12356;
                    nodes12356 = node.contents();
                    oldNodes.replaceWith(nodes12356);
                  }));
                }
                renderControl2472();
                callback(root17162); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes12355;
                nodes12355 = node.contents();
                oldNodes.replaceWith(nodes12355);
              }));
              
              var oldNodes = iternode1354;
              iternode1354 = iternode1354.contents();
              oldNodes.replaceWith(iternode1354);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list1354.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1354(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1354(true); }));
        });
      };
      renderList1354();
      
      callback(root17161); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12354;
      nodes12354 = node.contents();
      oldNodes.replaceWith(nodes12354);
    }));
    
    
  }
};
renderCond856();
subs__.addSub(tmp27700.addEventListener('change', function() {
  renderCond856();
}));

callback(root17154); return subs__;

return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
var root17164 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp27656 = mobl.ref("Detail");


var tmp27657 = mobl.ref(null);

var nodes12357 = $("<span>");
root17164.append(nodes12357);
subs__.addSub((ui.header)(tmp27656, tmp27657, function(_, callback) {
  var root17165 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp27655 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp27654 = mobl.ref("Back");
  
  var nodes12358 = $("<span>");
  root17165.append(nodes12358);
  subs__.addSub((ui.backButton)(tmp27654, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp27655, function(_, callback) {
    var root17166 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17166); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12358;
    nodes12358 = node.contents();
    oldNodes.replaceWith(nodes12358);
  }));
  callback(root17165); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes12357;
  nodes12357 = node.contents();
  oldNodes.replaceWith(nodes12357);
}));
var nodes12359 = $("<span>");
root17164.append(nodes12359);
subs__.addSub(detail.addEventListener('change', function() {
  renderControl2473();
}));

function renderControl2473() {
  subs__.addSub((detail.get())(it, function(elements, callback) {
    var root17167 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17167); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12359;
    nodes12359 = node.contents();
    oldNodes.replaceWith(nodes12359);
  }));
}
renderControl2473();
callback(root17164); return subs__;


return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
var root17168 = $("<span>");
var subs__ = new mobl.CompSubscription();

var selected = mobl.ref(null);
var nodes12360 = $("<span>");
root17168.append(nodes12360);
subs__.addSub((ui.group)(function(_, callback) {
  var root17169 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node6565 = mobl.loadingSpan();
  root17169.append(node6565);
  var list1355;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList1355 = function() {
    var subs__ = listSubs__;
    list1355 = coll.get();
    list1355.list(function(results1967) {
      node6565.empty();
      for(var i1416 = 0; i1416 < results1967.length; i1416++) {
        (function() {
          var iternode1355 = $("<span>");
          node6565.append(iternode1355);
          var it;
          it = mobl.ref(mobl.ref(results1967), i1416);
          
          var tmp27671 = mobl.ref(it.get() == selected.get());
          subs__.addSub(it.addEventListener('change', function() {
            tmp27671.set(it.get() == selected.get());
          }));
          subs__.addSub(selected.addEventListener('change', function() {
            tmp27671.set(it.get() == selected.get());
          }));
          
          
          var node6566 = $("<span>");
          iternode1355.append(node6566);
          var condSubs858 = new mobl.CompSubscription();
          subs__.addSub(condSubs858);
          var oldValue858;
          var renderCond858 = function() {
            var value2776 = tmp27671.get();
            if(oldValue858 === value2776) return;
            oldValue858 = value2776;
            var subs__ = condSubs858;
            subs__.unsubscribe();
            node6566.empty();
            if(value2776) {
              
              var tmp27667 = mobl.ref(false);
              
              
              var tmp27666 = mobl.ref(null);
              
              
              var tmp27665 = mobl.ref(null);
              
              var nodes12361 = $("<span>");
              node6566.append(nodes12361);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp27665, tmp27666, tmp27667, function(_, callback) {
                var root17170 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes12362 = $("<span>");
                root17170.append(nodes12362);
                subs__.addSub(zoomCtrl.addEventListener('change', function() {
                  renderControl2474();
                }));
                
                function renderControl2474() {
                  subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                    var root17171 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root17171); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes12362;
                    nodes12362 = node.contents();
                    oldNodes.replaceWith(nodes12362);
                  }));
                }
                renderControl2474();
                callback(root17170); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes12361;
                nodes12361 = node.contents();
                oldNodes.replaceWith(nodes12361);
              }));
              
              
            } else {
              
              var tmp27669 = mobl.ref(true);
              
              
              var tmp27668 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   selected.set(result__);
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp27670 = mobl.ref(null);
              
              var nodes12363 = $("<span>");
              node6566.append(nodes12363);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp27668, tmp27670, tmp27669, function(_, callback) {
                var root17172 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes12364 = $("<span>");
                root17172.append(nodes12364);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl2475();
                }));
                
                function renderControl2475() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root17173 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root17173); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes12364;
                    nodes12364 = node.contents();
                    oldNodes.replaceWith(nodes12364);
                  }));
                }
                renderControl2475();
                callback(root17172); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes12363;
                nodes12363 = node.contents();
                oldNodes.replaceWith(nodes12363);
              }));
              
              
            }
          };
          renderCond858();
          subs__.addSub(tmp27671.addEventListener('change', function() {
            renderCond858();
          }));
          
          
          var oldNodes = iternode1355;
          iternode1355 = iternode1355.contents();
          oldNodes.replaceWith(iternode1355);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list1355.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1355(true); }));
      subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1355(true); }));
    });
  };
  renderList1355();
  
  callback(root17169); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes12360;
  nodes12360 = node.contents();
  oldNodes.replaceWith(nodes12360);
}));
callback(root17168); return subs__;

return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
var root17174 = $("<span>");
var subs__ = new mobl.CompSubscription();

var n = mobl.ref(initialItems.get());
coll.get().count(function(result__) {
  var total = mobl.ref(result__);
  var nodes12365 = $("<span>");
  root17174.append(nodes12365);
  subs__.addSub((ui.group)(function(_, callback) {
    var root17175 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp27675 = mobl.ref(coll.get().limit(n.get()));
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp27675.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp27675.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp27675.set(coll.get().limit(n.get()));
    }));
    
    
    var node6567 = mobl.loadingSpan();
    root17175.append(node6567);
    var list1356;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList1356 = function() {
      var subs__ = listSubs__;
      list1356 = tmp27675.get();
      list1356.list(function(results1968) {
        node6567.empty();
        for(var i1417 = 0; i1417 < results1968.length; i1417++) {
          (function() {
            var iternode1356 = $("<span>");
            node6567.append(iternode1356);
            var it;
            it = mobl.ref(mobl.ref(results1968), i1417);
            
            var tmp27672 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp27674 = mobl.ref(false);
            
            
            var tmp27673 = mobl.ref(null);
            
            var nodes12366 = $("<span>");
            iternode1356.append(nodes12366);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp27672, tmp27673, tmp27674, function(_, callback) {
              var root17176 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes12367 = $("<span>");
              root17176.append(nodes12367);
              subs__.addSub(listCtrl.addEventListener('change', function() {
                renderControl2476();
              }));
              
              function renderControl2476() {
                subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                  var root17177 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root17177); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes12367;
                  nodes12367 = node.contents();
                  oldNodes.replaceWith(nodes12367);
                }));
              }
              renderControl2476();
              callback(root17176); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes12366;
              nodes12366 = node.contents();
              oldNodes.replaceWith(nodes12366);
            }));
            
            var oldNodes = iternode1356;
            iternode1356 = iternode1356.contents();
            oldNodes.replaceWith(iternode1356);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list1356.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1356(true); }));
        subs__.addSub(tmp27675.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1356(true); }));
      });
    };
    renderList1356();
    
    
    var tmp27676 = mobl.ref(n.get() < total.get());
    subs__.addSub(n.addEventListener('change', function() {
      tmp27676.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp27676.set(n.get() < total.get());
    }));
    
    
    var node6568 = $("<span>");
    root17175.append(node6568);
    var condSubs859 = new mobl.CompSubscription();
    subs__.addSub(condSubs859);
    var oldValue859;
    var renderCond859 = function() {
      var value2777 = tmp27676.get();
      if(oldValue859 === value2777) return;
      oldValue859 = value2777;
      var subs__ = condSubs859;
      subs__.unsubscribe();
      node6568.empty();
      if(value2777) {
        
        var node6569 = $("<li>");
        
        var ref5355 = mobl.ref(ui.loadMoreStyle);
        if(ref5355.get() !== null) {
          node6569.attr('class', ref5355.get());
          subs__.addSub(ref5355.addEventListener('change', function(_, ref, val) {
            if(ref === ref5355) {
              node6569.attr('class', val);
            } else {
              console.log("Garbage!");
            }
          }));
          
        }
        subs__.addSub(ref5355.rebind());
        
        var val2830 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = n.get() + step.get();
                      n.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val2830 !== null) {
          subs__.addSub(mobl.domBind(node6569, 'tap', val2830));
        }
        
        
        node6569.append("More");
        node6568.append(node6569);
        
        
      } else {
        
      }
    };
    renderCond859();
    subs__.addSub(tmp27676.addEventListener('change', function() {
      renderCond859();
    }));
    
    callback(root17175); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes12365;
    nodes12365 = node.contents();
    oldNodes.replaceWith(nodes12365);
  }));
  callback(root17174); return subs__;
  
});
return subs__;
};

ui.markableList = function(items, elements, callback) {
var root17178 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes12368 = $("<span>");
root17178.append(nodes12368);
subs__.addSub((ui.group)(function(_, callback) {
  var root17179 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node6570 = mobl.loadingSpan();
  root17179.append(node6570);
  var list1357;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList1357 = function() {
    var subs__ = listSubs__;
    list1357 = items.get();
    list1357.list(function(results1969) {
      node6570.empty();
      for(var i1418 = 0; i1418 < results1969.length; i1418++) {
        (function() {
          var iternode1357 = $("<span>");
          node6570.append(iternode1357);
          var checked;var it;
          checked = mobl.ref(mobl.ref(mobl.ref(results1969), i1418), "_1");it = mobl.ref(mobl.ref(mobl.ref(results1969), i1418), "_2");
          
          var tmp27680 = mobl.ref(false);
          
          
          var tmp27679 = mobl.ref(null);
          
          
          var tmp27678 = mobl.ref(null);
          
          var nodes12369 = $("<span>");
          iternode1357.append(nodes12369);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp27678, tmp27679, tmp27680, function(_, callback) {
            var root17180 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp27677 = mobl.ref(null);
            
            var nodes12370 = $("<span>");
            root17180.append(nodes12370);
            subs__.addSub((ui.checkBox)(checked, it, tmp27677, function(_, callback) {
              var root17181 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root17181); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes12370;
              nodes12370 = node.contents();
              oldNodes.replaceWith(nodes12370);
            }));
            callback(root17180); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes12369;
            nodes12369 = node.contents();
            oldNodes.replaceWith(nodes12369);
          }));
          
          var oldNodes = iternode1357;
          iternode1357 = iternode1357.contents();
          oldNodes.replaceWith(iternode1357);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list1357.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1357(true); }));
      subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1357(true); }));
    });
  };
  renderList1357();
  
  callback(root17179); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes12368;
  nodes12368 = node.contents();
  oldNodes.replaceWith(nodes12368);
}));
callback(root17178); return subs__;

return subs__;
};

ui.selectList = function(title, coll, callback, screenCallback) {
var root17182 = $("<div>");
var subs__ = new mobl.CompSubscription();

var items = mobl.ref([]);

var result__ = coll.get();
coll.get().list(function(coll2974) {
  coll2974 = coll2974.reverse();
  function processOne684() {
    var it;
    it = coll2974.pop();
    var result__ = items.get().push(new mobl.Tuple(false, it));
    
    if(coll2974.length > 0) processOne684(); else rest684();
    
  }
  function rest684() {
    
    var tmp27685 = mobl.ref(null);
    
    var nodes12371 = $("<span>");
    root17182.append(nodes12371);
    subs__.addSub((ui.header)(title, tmp27685, function(_, callback) {
      var root17183 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp27681 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = null;
                           if(callback && callback.apply) callback(result__);
                           return;
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp27682 = mobl.ref("Back");
      
      var nodes12372 = $("<span>");
      root17183.append(nodes12372);
      subs__.addSub((ui.backButton)(tmp27682, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp27681, function(_, callback) {
        var root17184 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17184); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12372;
        nodes12372 = node.contents();
        oldNodes.replaceWith(nodes12372);
      }));
      
      var tmp27684 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = [];
                           var selected = result__;
                           var result__ = items.get();
                           items.get().list(function(coll2973) {
                             coll2973 = coll2973.reverse();
                             function processOne683() {
                               var checked;var it;
                               var tmp27711 = coll2973.pop();
                               checked = tmp27711._1;it = tmp27711._2;
                               var result__ = checked;
                               if(result__) {
                                 var result__ = selected.push(it);
                                 
                                 if(coll2973.length > 0) processOne683(); else rest683();
                                 
                               } else {
                                 {
                                   
                                   if(coll2973.length > 0) processOne683(); else rest683();
                                   
                                 }
                               }
                             }
                             function rest683() {
                               var result__ = selected;
                               if(screenCallback) screenCallback(result__);
                               return;
                               if(callback && callback.apply) callback(); return;
                             }
                             if(coll2973.length > 0) processOne683(); else rest683();
                           });
                           
                         });
      
      
      var tmp27683 = mobl.ref("Done");
      
      var nodes12373 = $("<span>");
      root17183.append(nodes12373);
      subs__.addSub((ui.button)(tmp27683, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp27684, function(_, callback) {
        var root17185 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17185); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12373;
        nodes12373 = node.contents();
        oldNodes.replaceWith(nodes12373);
      }));
      callback(root17183); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12371;
      nodes12371 = node.contents();
      oldNodes.replaceWith(nodes12371);
    }));
    var nodes12374 = $("<span>");
    root17182.append(nodes12374);
    subs__.addSub((ui.markableList)(items, function(_, callback) {
      var root17186 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root17186); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes12374;
      nodes12374 = node.contents();
      oldNodes.replaceWith(nodes12374);
    }));
    callback(root17182); return subs__;
    
    
  }
  if(coll2974.length > 0) processOne684(); else rest684();
});

return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
var root17187 = $("<span>");
var subs__ = new mobl.CompSubscription();

var phrase = mobl.ref("");


var tmp27686 = mobl.ref("Search term");


var tmp27688 = mobl.ref(null);


var tmp27687 = mobl.ref(null);

var nodes12375 = $("<span>");
root17187.append(nodes12375);
subs__.addSub((ui.searchBox)(phrase, tmp27686, tmp27687, tmp27688, function(_, callback) {
  var root17188 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root17188); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes12375;
  nodes12375 = node.contents();
  oldNodes.replaceWith(nodes12375);
}));

var tmp27689 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
  tmp27689.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
  tmp27689.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(Ent.addEventListener('change', function() {
  tmp27689.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(phrase.addEventListener('change', function() {
  tmp27689.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(resultLimit.addEventListener('change', function() {
  tmp27689.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));

var nodes12376 = $("<span>");
root17187.append(nodes12376);
subs__.addSub((ui.masterDetail)(tmp27689, masterItem, detailItem, function(_, callback) {
  var root17189 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root17189); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes12376;
  nodes12376 = node.contents();
  oldNodes.replaceWith(nodes12376);
}));
callback(root17187); return subs__;


return subs__;
};
ui.progressStyle = 'ui__progressStyle';
ui.startLoading = function() {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + ui.progressStyle + "'>Loading...</div>");
  
  mobl.$("body").prepend(loading);
};

ui.endLoading = function() {
   var __this = this;
  mobl.$("#progress").remove();
};

(function(__ns) {
__ns.floatBox = function(top, right, bottom, left, elements, callback) {
                  var root928 = $("<span>");
                  var node280 = $("<div style=\"position: absolute;\">");
                  var nodes681 = $("<span>");
                  node280.append(nodes681);
                  mobl.ref(elements).addEventListener('change', function() {
                                                                  renderControl102();
                                                                });
                  function renderControl102 ( ) {
                    (elements)(function(elements, callback) {
                                 var root929 = $("<span>");
                                 callback(root929);
                                 return;
                               }, function(node) {
                                    var oldNodes = nodes681;
                                    nodes681 = node.contents();
                                    oldNodes.replaceWith(nodes681);
                                  });
                  }
                  renderControl102();
                  root928.append(node280);
                  var box = node280;
                  if(top.get() !== null)
                  box.css("top", "" + top.get() + "px");
                  if(right.get() !== null)
                  box.css("right", "" + right.get() + "px");
                  if(bottom.get() !== null)
                  box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                  if(left.get() !== null)
                  box.css("left", "" + left.get() + "px");
                  function updateLocation ( ) {
                    if(top.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + top.get() ) + "px");
                    }
                    if(bottom.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                    }
                  }
                  $(window).bind('scroll', updateLocation);
                  $(window).bind('resize', updateLocation);
                  callback(root928);
                  return;
                };
}(ui));ui.accordionStyle = 'ui__accordionStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.inActiveSectionStyle = 'ui__inActiveSectionStyle';
ui.activeSectionStyle = 'ui__activeSectionStyle';

ui.accordion = function(sections, elements, callback) {
var root17190 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeSection = mobl.ref(sections.get().get(0)._1);

var tmp27699 = mobl.ref(null);


var tmp27698 = mobl.ref(null);

var nodes12377 = $("<span>");
root17190.append(nodes12377);
subs__.addSub((ui.block)(mobl.ref(ui.accordionStyle), tmp27698, tmp27699, function(_, callback) {
  var root17191 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node6571 = mobl.loadingSpan();
  root17191.append(node6571);
  var list1358;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList1358 = function() {
    var subs__ = listSubs__;
    list1358 = sections.get();
    list1358.list(function(results1970) {
      node6571.empty();
      for(var i1419 = 0; i1419 < results1970.length; i1419++) {
        (function() {
          var iternode1358 = $("<span>");
          node6571.append(iternode1358);
          var sectionName;var sectionControl;
          sectionName = mobl.ref(mobl.ref(mobl.ref(results1970), i1419), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results1970), i1419), "_2");
          
          var tmp27693 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp27693.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp27693.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
            tmp27693.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
            tmp27693.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
          }));
          
          
          var tmp27692 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = sectionName.get();
                               activeSection.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp27694 = mobl.ref(null);
          
          var nodes12378 = $("<span>");
          iternode1358.append(nodes12378);
          subs__.addSub((ui.span)(tmp27693, tmp27694, tmp27692, function(_, callback) {
            var root17192 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp27691 = mobl.ref(null);
            
            
            var tmp27690 = mobl.ref(null);
            
            var nodes12379 = $("<span>");
            root17192.append(nodes12379);
            subs__.addSub((mobl.label)(sectionName, tmp27690, tmp27691, function(_, callback) {
              var root17193 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root17193); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes12379;
              nodes12379 = node.contents();
              oldNodes.replaceWith(nodes12379);
            }));
            callback(root17192); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes12378;
            nodes12378 = node.contents();
            oldNodes.replaceWith(nodes12378);
          }));
          
          var tmp27695 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp27695.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp27695.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
            tmp27695.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
            tmp27695.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
          }));
          
          
          var tmp27697 = mobl.ref(null);
          
          
          var tmp27696 = mobl.ref(null);
          
          var nodes12380 = $("<span>");
          iternode1358.append(nodes12380);
          subs__.addSub((ui.block)(tmp27695, tmp27696, tmp27697, function(_, callback) {
            var root17194 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes12381 = $("<span>");
            root17194.append(nodes12381);
            subs__.addSub(sectionControl.addEventListener('change', function() {
              renderControl2477();
            }));
            
            function renderControl2477() {
              subs__.addSub((sectionControl.get())(function(elements, callback) {
                var root17195 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root17195); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes12381;
                nodes12381 = node.contents();
                oldNodes.replaceWith(nodes12381);
              }));
            }
            renderControl2477();
            callback(root17194); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes12380;
            nodes12380 = node.contents();
            oldNodes.replaceWith(nodes12380);
          }));
          
          var oldNodes = iternode1358;
          iternode1358 = iternode1358.contents();
          oldNodes.replaceWith(iternode1358);
          
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list1358.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1358(true); }));
      subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1358(true); }));
    });
  };
  renderList1358();
  
  callback(root17191); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes12377;
  nodes12377 = node.contents();
  oldNodes.replaceWith(nodes12377);
}));
callback(root17190); return subs__;

return subs__;
};
ui.tableStyle = 'ui__tableStyle';
ui.tdStyle = 'ui__tdStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';

ui.table = function(elements, callback) {
var root17196 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6572 = $("<table>");

var ref5356 = mobl.ref(ui.tableStyle);
if(ref5356.get() !== null) {
  node6572.attr('class', ref5356.get());
  subs__.addSub(ref5356.addEventListener('change', function(_, ref, val) {
    if(ref === ref5356) {
      node6572.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5356.rebind());

var nodes12382 = $("<span>");
node6572.append(nodes12382);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2478();
}));

function renderControl2478() {
  subs__.addSub((elements)(function(elements, callback) {
    var root17197 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17197); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12382;
    nodes12382 = node.contents();
    oldNodes.replaceWith(nodes12382);
  }));
}
renderControl2478();
root17196.append(node6572);
callback(root17196); return subs__;


return subs__;
};

ui.row = function(elements, callback) {
var root17198 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6573 = $("<tr>");

var ref5357 = mobl.ref(ui.trStyle);
if(ref5357.get() !== null) {
  node6573.attr('class', ref5357.get());
  subs__.addSub(ref5357.addEventListener('change', function(_, ref, val) {
    if(ref === ref5357) {
      node6573.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5357.rebind());

var nodes12383 = $("<span>");
node6573.append(nodes12383);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2479();
}));

function renderControl2479() {
  subs__.addSub((elements)(function(elements, callback) {
    var root17199 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17199); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12383;
    nodes12383 = node.contents();
    oldNodes.replaceWith(nodes12383);
  }));
}
renderControl2479();
root17198.append(node6573);
callback(root17198); return subs__;


return subs__;
};

ui.cell = function(width, elements, callback) {
var root17200 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6574 = $("<td>");

var ref5358 = width;
if(ref5358.get() !== null) {
  node6574.attr('width', ref5358.get());
  subs__.addSub(ref5358.addEventListener('change', function(_, ref, val) {
    if(ref === ref5358) {
      node6574.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5358.rebind());

var ref5359 = mobl.ref(ui.tdStyle);
if(ref5359.get() !== null) {
  node6574.attr('class', ref5359.get());
  subs__.addSub(ref5359.addEventListener('change', function(_, ref, val) {
    if(ref === ref5359) {
      node6574.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5359.rebind());

var nodes12384 = $("<span>");
node6574.append(nodes12384);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2480();
}));

function renderControl2480() {
  subs__.addSub((elements)(function(elements, callback) {
    var root17201 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17201); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12384;
    nodes12384 = node.contents();
    oldNodes.replaceWith(nodes12384);
  }));
}
renderControl2480();
root17200.append(node6574);
callback(root17200); return subs__;


return subs__;
};

ui.col = function(width, elements, callback) {
var root17202 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6575 = $("<td>");

var ref5360 = width;
if(ref5360.get() !== null) {
  node6575.attr('width', ref5360.get());
  subs__.addSub(ref5360.addEventListener('change', function(_, ref, val) {
    if(ref === ref5360) {
      node6575.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5360.rebind());

var ref5361 = mobl.ref(ui.tdStyle);
if(ref5361.get() !== null) {
  node6575.attr('class', ref5361.get());
  subs__.addSub(ref5361.addEventListener('change', function(_, ref, val) {
    if(ref === ref5361) {
      node6575.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5361.rebind());

var nodes12385 = $("<span>");
node6575.append(nodes12385);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2481();
}));

function renderControl2481() {
  subs__.addSub((elements)(function(elements, callback) {
    var root17203 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17203); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12385;
    nodes12385 = node.contents();
    oldNodes.replaceWith(nodes12385);
  }));
}
renderControl2481();
root17202.append(node6575);
callback(root17202); return subs__;


return subs__;
};

ui.headerCol = function(width, elements, callback) {
var root17204 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6576 = $("<td>");

var ref5362 = width;
if(ref5362.get() !== null) {
  node6576.attr('width', ref5362.get());
  subs__.addSub(ref5362.addEventListener('change', function(_, ref, val) {
    if(ref === ref5362) {
      node6576.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5362.rebind());

var ref5363 = mobl.ref(ui.tdStyle);
if(ref5363.get() !== null) {
  node6576.attr('class', ref5363.get());
  subs__.addSub(ref5363.addEventListener('change', function(_, ref, val) {
    if(ref === ref5363) {
      node6576.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5363.rebind());


var node6577 = $("<strong>");

var nodes12386 = $("<span>");
node6577.append(nodes12386);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2482();
}));

function renderControl2482() {
  subs__.addSub((elements)(function(elements, callback) {
    var root17205 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17205); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12386;
    nodes12386 = node.contents();
    oldNodes.replaceWith(nodes12386);
  }));
}
renderControl2482();
node6576.append(node6577);
root17204.append(node6576);
callback(root17204); return subs__;



return subs__;
};

ui.scroller = function(height, elements, callback) {
var root17206 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6578 = $("<div>");
node6578.attr('class', "scroller");

var nodes12387 = $("<span>");
node6578.append(nodes12387);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2483();
}));

function renderControl2483() {
  subs__.addSub((elements)(function(elements, callback) {
    var root17207 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17207); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12387;
    nodes12387 = node.contents();
    oldNodes.replaceWith(nodes12387);
  }));
}
renderControl2483();
root17206.append(node6578);
var result__ = ui.setupScrollers();
callback(root17206); return subs__;


return subs__;
};
(function(__ns) {
setTimeout(function() {
             scrollTo(0, -1);
           }, 250);
__ns.scrollUp = function() {
                  scrollTo(0, 0);
                };
__ns.setupScrollers = function() {
                        setTimeout(function() {
                                     var allScrollers = $("div.scroller");
                                     for(var i = 0; i < allScrollers.length; i++)
                                     {
                                       var scroller = allScrollers.eq(i);
                                       if(!scroller.data("scroller"))
                                       {
                                         scroller.data("scroller", new TouchScroll(scroller[0],{
                                                                                                 elastic: true
                                                                                               }));
                                       }
                                     }
                                   }, 250);
                      };
setInterval(function() {
              var allScrollers = $("div.scroller");
              for(var i = 0; i < allScrollers.length; i++)
              {
                var scroller = allScrollers.eq(i).data("scroller");
                if(scroller)
                {
                  scroller.setupScroller();
                }
              }
            }, 1000);
}(ui));