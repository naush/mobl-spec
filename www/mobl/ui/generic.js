mobl.provides('mobl.ui.generic');
mobl.ui.generic.loadingStyle = 'mobl__ui__generic__loadingStyle';

mobl.ui.generic.whenLoaded = function(value, elements, callback) {
var root16919 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6422 = $("<span>");
root16919.append(node6422);
var condSubs834 = new mobl.CompSubscription();
subs__.addSub(condSubs834);
var oldValue834;
var renderCond834 = function() {
  var value2742 = value.get();
  if(oldValue834 === value2742) return;
  oldValue834 = value2742;
  var subs__ = condSubs834;
  subs__.unsubscribe();
  node6422.empty();
  if(value2742) {
    var nodes12198 = $("<span>");
    node6422.append(nodes12198);
    subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
      renderControl2415();
    }));
    
    function renderControl2415() {
      subs__.addSub((elements)(function(elements, callback) {
        var root16920 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16920); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12198;
        nodes12198 = node.contents();
        oldNodes.replaceWith(nodes12198);
      }));
    }
    renderControl2415();
    
    
  } else {
    
    var tmp27389 = mobl.ref(null);
    
    
    var tmp27388 = mobl.ref(null);
    
    var nodes12199 = $("<span>");
    node6422.append(nodes12199);
    subs__.addSub((mobl.ui.generic.block)(mobl.ref(mobl.ui.generic.loadingStyle), tmp27388, tmp27389, function(_, callback) {
      var root16921 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      root16921.append("Loading...");
      
      var tmp27382 = mobl.ref("middle");
      
      
      var tmp27381 = mobl.ref("mobl/ui/generic/loading-large.gif");
      
      
      var tmp27387 = mobl.ref(null);
      
      
      var tmp27386 = mobl.ref(null);
      
      
      var tmp27385 = mobl.ref(null);
      
      
      var tmp27384 = mobl.ref(null);
      
      
      var tmp27383 = mobl.ref(null);
      
      var nodes12200 = $("<span>");
      root16921.append(nodes12200);
      subs__.addSub((mobl.ui.generic.image)(tmp27381, tmp27383, tmp27384, tmp27385, tmp27386, tmp27382, tmp27387, function(_, callback) {
        var root16922 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16922); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12200;
        nodes12200 = node.contents();
        oldNodes.replaceWith(nodes12200);
      }));
      callback(root16921); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12199;
      nodes12199 = node.contents();
      oldNodes.replaceWith(nodes12199);
    }));
    
    
  }
};
renderCond834();
subs__.addSub(value.addEventListener('change', function() {
  renderCond834();
}));

callback(root16919); return subs__;

return subs__;
};
mobl.ui.generic.headerStyle = 'mobl__ui__generic__headerStyle';
mobl.ui.generic.headerContainerStyle = 'mobl__ui__generic__headerContainerStyle';
mobl.ui.generic.headerTextStyle = 'mobl__ui__generic__headerTextStyle';

mobl.ui.generic.header = function(text, onclick, elements, callback) {
var root16923 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6423 = $("<div>");

var ref5197 = mobl.ref(mobl.ui.generic.headerStyle);
if(ref5197.get() !== null) {
  node6423.attr('class', ref5197.get());
  subs__.addSub(ref5197.addEventListener('change', function(_, ref, val) {
    if(ref === ref5197) {
      node6423.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5197.rebind());

var val2735 = onclick.get();
if(val2735 !== null) {
  subs__.addSub(mobl.domBind(node6423, 'tap', val2735));
}


var node6424 = $("<div>");

var ref5196 = mobl.ref(mobl.ui.generic.headerContainerStyle);
if(ref5196.get() !== null) {
  node6424.attr('class', ref5196.get());
  subs__.addSub(ref5196.addEventListener('change', function(_, ref, val) {
    if(ref === ref5196) {
      node6424.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5196.rebind());


var node6425 = $("<div>");

var ref5194 = text;
node6425.text(""+ref5194.get());
var ignore1078 = false;
subs__.addSub(ref5194.addEventListener('change', function(_, ref, val) {
  if(ignore1078) return;
  node6425.text(""+val);
}));
subs__.addSub(ref5194.rebind());


var ref5195 = mobl.ref(mobl.ui.generic.headerTextStyle);
if(ref5195.get() !== null) {
  node6425.attr('class', ref5195.get());
  subs__.addSub(ref5195.addEventListener('change', function(_, ref, val) {
    if(ref === ref5195) {
      node6425.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5195.rebind());

node6424.append(node6425);
node6423.append(node6424);
var nodes12201 = $("<span>");
node6423.append(nodes12201);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2416();
}));

function renderControl2416() {
  subs__.addSub((elements)(function(elements, callback) {
    var root16924 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16924); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12201;
    nodes12201 = node.contents();
    oldNodes.replaceWith(nodes12201);
  }));
}
renderControl2416();
root16923.append(node6423);
callback(root16923); return subs__;




return subs__;
};
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';

mobl.ui.generic.button = function(text, style, pushedStyle, onclick, elements, callback) {
var root16925 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var sp = $("<span>");

var ref5198 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
if(ref5198.get() !== null) {
  sp.attr('class', ref5198.get());
  subs__.addSub(ref5198.addEventListener('change', function(_, ref, val) {
    if(ref === ref5198) {
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
subs__.addSub(ref5198.rebind());

var val2736 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = event.preventDefault();
              var result__ = true;
              pushed.set(result__);
              if(callback && callback.apply) callback(); return;
            };
if(val2736 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdown', val2736));
}

var val2737 = function(event, callback) {
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
if(val2737 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchdrag', val2737));
}

var val2738 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = pushed.get();
              if(result__) {
                var result__ = false;
                pushed.set(result__);
                function after492(result__) {
                  var tmp27450 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onclick.get()(event, after492);if(result__ !== undefined) after492(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val2738 !== null) {
  subs__.addSub(mobl.domBind(sp, 'touchup', val2738));
}

var val2739 = function(event, callback) {
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
if(val2739 !== null) {
  subs__.addSub(mobl.domBind(sp, 'mouseout', val2739));
}

var ref5199 = text;
sp.text(""+ref5199.get());
var ignore1079 = false;
subs__.addSub(ref5199.addEventListener('change', function(_, ref, val) {
  if(ignore1079) return;
  sp.text(""+val);
}));
subs__.addSub(ref5199.rebind());


root16925.append(sp);
callback(root16925); return subs__;

return subs__;
};
mobl.ui.generic.sideButtonStyle = 'mobl__ui__generic__sideButtonStyle';
mobl.ui.generic.sideButtonPushedStyle = 'mobl__ui__generic__sideButtonPushedStyle';

mobl.ui.generic.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root16926 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes12202 = $("<span>");
root16926.append(nodes12202);
subs__.addSub((mobl.ui.generic.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root16927 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root16927); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes12202;
  nodes12202 = node.contents();
  oldNodes.replaceWith(nodes12202);
}));
callback(root16926); return subs__;

return subs__;
};
mobl.ui.generic.backButtonStyle = 'mobl__ui__generic__backButtonStyle';
mobl.ui.generic.backButtonPushedStyle = 'mobl__ui__generic__backButtonPushedStyle';
mobl.ui.generic.backButtonStyle = 'mobl__ui__generic__backButtonStyle';
mobl.ui.generic.backButtonPushedStyle = 'mobl__ui__generic__backButtonPushedStyle';

mobl.ui.generic.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
var root16928 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes12203 = $("<span>");
root16928.append(nodes12203);
subs__.addSub((mobl.ui.generic.button)(text, style, pushedStyle, onclick, function(_, callback) {
  var root16929 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root16929); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes12203;
  nodes12203 = node.contents();
  oldNodes.replaceWith(nodes12203);
}));
callback(root16928); return subs__;

return subs__;
};

mobl.ui.generic.block = function(cssClass, id, onclick, elements, callback) {
var root16930 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6426 = $("<div>");

var ref5200 = id;
if(ref5200.get() !== null) {
  node6426.attr('id', ref5200.get());
  subs__.addSub(ref5200.addEventListener('change', function(_, ref, val) {
    if(ref === ref5200) {
      node6426.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5200.rebind());

var ref5201 = cssClass;
if(ref5201.get() !== null) {
  node6426.attr('class', ref5201.get());
  subs__.addSub(ref5201.addEventListener('change', function(_, ref, val) {
    if(ref === ref5201) {
      node6426.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5201.rebind());

var val2740 = onclick.get();
if(val2740 !== null) {
  subs__.addSub(mobl.domBind(node6426, 'tap', val2740));
}

var nodes12204 = $("<span>");
node6426.append(nodes12204);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2417();
}));

function renderControl2417() {
  subs__.addSub((elements)(function(elements, callback) {
    var root16931 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16931); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12204;
    nodes12204 = node.contents();
    oldNodes.replaceWith(nodes12204);
  }));
}
renderControl2417();
root16930.append(node6426);
callback(root16930); return subs__;


return subs__;
};

mobl.ui.generic.span = function(cssClass, id, onclick, elements, callback) {
var root16932 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6427 = $("<span>");

var ref5202 = id;
if(ref5202.get() !== null) {
  node6427.attr('id', ref5202.get());
  subs__.addSub(ref5202.addEventListener('change', function(_, ref, val) {
    if(ref === ref5202) {
      node6427.attr('id', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5202.rebind());

var ref5203 = cssClass;
if(ref5203.get() !== null) {
  node6427.attr('class', ref5203.get());
  subs__.addSub(ref5203.addEventListener('change', function(_, ref, val) {
    if(ref === ref5203) {
      node6427.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5203.rebind());

var val2741 = onclick.get();
if(val2741 !== null) {
  subs__.addSub(mobl.domBind(node6427, 'tap', val2741));
}

var nodes12205 = $("<span>");
node6427.append(nodes12205);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2418();
}));

function renderControl2418() {
  subs__.addSub((elements)(function(elements, callback) {
    var root16933 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16933); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12205;
    nodes12205 = node.contents();
    oldNodes.replaceWith(nodes12205);
  }));
}
renderControl2418();
root16932.append(node6427);
callback(root16932); return subs__;


return subs__;
};
mobl.ui.generic.groupStyle = 'mobl__ui__generic__groupStyle';

mobl.ui.generic.group = function(elements, callback) {
var root16934 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6428 = $("<ul>");

var ref5204 = mobl.ref(mobl.ui.generic.groupStyle);
if(ref5204.get() !== null) {
  node6428.attr('class', ref5204.get());
  subs__.addSub(ref5204.addEventListener('change', function(_, ref, val) {
    if(ref === ref5204) {
      node6428.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5204.rebind());

var nodes12206 = $("<span>");
node6428.append(nodes12206);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2419();
}));

function renderControl2419() {
  subs__.addSub((elements)(function(elements, callback) {
    var root16935 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16935); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12206;
    nodes12206 = node.contents();
    oldNodes.replaceWith(nodes12206);
  }));
}
renderControl2419();
root16934.append(node6428);
callback(root16934); return subs__;


return subs__;
};

mobl.ui.generic.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
var root16936 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6429 = $("<img>");

var ref5205 = url;
if(ref5205.get() !== null) {
  node6429.attr('src', ref5205.get());
  subs__.addSub(ref5205.addEventListener('change', function(_, ref, val) {
    if(ref === ref5205) {
      node6429.attr('src', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5205.rebind());

var ref5206 = width;
if(ref5206.get() !== null) {
  node6429.attr('width', ref5206.get());
  subs__.addSub(ref5206.addEventListener('change', function(_, ref, val) {
    if(ref === ref5206) {
      node6429.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5206.rebind());

var ref5207 = height;
if(ref5207.get() !== null) {
  node6429.attr('height', ref5207.get());
  subs__.addSub(ref5207.addEventListener('change', function(_, ref, val) {
    if(ref === ref5207) {
      node6429.attr('height', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5207.rebind());

var ref5208 = style;
if(ref5208.get() !== null) {
  node6429.attr('class', ref5208.get());
  subs__.addSub(ref5208.addEventListener('change', function(_, ref, val) {
    if(ref === ref5208) {
      node6429.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5208.rebind());

var val2742 = onclick.get();
if(val2742 !== null) {
  subs__.addSub(mobl.domBind(node6429, 'tap', val2742));
}

var ref5209 = valign;
if(ref5209.get() !== null) {
  node6429.attr('valign', ref5209.get());
  subs__.addSub(ref5209.addEventListener('change', function(_, ref, val) {
    if(ref === ref5209) {
      node6429.attr('valign', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5209.rebind());

var ref5210 = align;
if(ref5210.get() !== null) {
  node6429.attr('align', ref5210.get());
  subs__.addSub(ref5210.addEventListener('change', function(_, ref, val) {
    if(ref === ref5210) {
      node6429.attr('align', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5210.rebind());

root16936.append(node6429);
callback(root16936); return subs__;

return subs__;
};
mobl.ui.generic.itemStyle = 'mobl__ui__generic__itemStyle';
mobl.ui.generic.itemPushedStyle = 'mobl__ui__generic__itemPushedStyle';
mobl.ui.generic.itemArrowStyle = 'mobl__ui__generic__itemArrowStyle';

mobl.ui.generic.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
var root16937 = $("<span>");
var subs__ = new mobl.CompSubscription();

var pushed = mobl.ref(false);


var el = $("<li>");

var ref5211 = mobl.ref(mobl.ui.generic.itemStyle);
if(ref5211.get() !== null) {
  el.attr('class', ref5211.get());
  subs__.addSub(ref5211.addEventListener('change', function(_, ref, val) {
    if(ref === ref5211) {
      el.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5211.rebind());

var ref5212 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
if(ref5212.get() !== null) {
  el.attr('class', ref5212.get());
  subs__.addSub(ref5212.addEventListener('change', function(_, ref, val) {
    if(ref === ref5212) {
      el.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  subs__.addSub(onclick.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(hideArrow.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(mobl.ref(mobl.ui.generic.itemArrowStyle).addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(pushed.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(pushedStyle.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  subs__.addSub(style.addEventListener('change', function() {
    el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  }));
  
}
subs__.addSub(ref5212.rebind());

var val2743 = onclick.get() ? function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = true;
                                       pushed.set(result__);
                                       mobl.sleep(100, function(result__) {
                                         var tmp27451 = result__;
                                         function after493(result__) {
                                           var tmp27452 = result__;
                                           
                                         }
                                         var result__ = onclick.get()(event, after493);if(result__ !== undefined) after493(result__);
                                         mobl.sleep(200, function(result__) {
                                           var tmp27453 = result__;
                                           var result__ = false;
                                           pushed.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                                         
                                       });
                                     } : null;
if(val2743 !== null) {
  subs__.addSub(mobl.domBind(el, 'tap', val2743));
}

var nodes12207 = $("<span>");
el.append(nodes12207);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2420();
}));

function renderControl2420() {
  subs__.addSub((elements)(function(elements, callback) {
    var root16938 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16938); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12207;
    nodes12207 = node.contents();
    oldNodes.replaceWith(nodes12207);
  }));
}
renderControl2420();
root16937.append(el);
callback(root16937); return subs__;


return subs__;
};

mobl.ui.generic.checkBox = function(b, label, onchange, elements, callback) {
var root16939 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6430 = $("<input>");
node6430.attr('type', "checkbox");

var ref5214 = b;
node6430.attr('checked', !!ref5214.get());
subs__.addSub(ref5214.addEventListener('change', function(_, ref, val) {
  if(ref === ref5214) node6430.attr('checked', !!val);
}));
subs__.addSub(mobl.domBind(node6430, 'change', function() {
  b.set(!!node6430.attr('checked'));
}));

var val2745 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              if(callback && callback.apply) callback(); return;
            };
if(val2745 !== null) {
  subs__.addSub(mobl.domBind(node6430, 'tap', val2745));
}

var val2746 = onchange.get();
if(val2746 !== null) {
  subs__.addSub(mobl.domBind(node6430, 'change', val2746));
}

root16939.append(node6430);

root16939.append(" ");

var node6431 = $("<span>");

var ref5213 = label;
node6431.text(""+ref5213.get());
var ignore1080 = false;
subs__.addSub(ref5213.addEventListener('change', function(_, ref, val) {
  if(ignore1080) return;
  node6431.text(""+val);
}));
subs__.addSub(ref5213.rebind());


var val2744 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = !b.get();
              b.set(result__);
              var result__ = onchange.get();
              if(result__) {
                function after494(result__) {
                  var tmp27454 = result__;
                  if(callback && callback.apply) callback(); return;
                }
                var result__ = onchange.get()(null, after494);if(result__ !== undefined) after494(result__);
              } else {
                {
                  if(callback && callback.apply) callback(); return;
                }
              }
            };
if(val2744 !== null) {
  subs__.addSub(mobl.domBind(node6431, 'tap', val2744));
}

root16939.append(node6431);
callback(root16939); return subs__;


return subs__;
};
mobl.ui.generic.textFieldStyle = 'mobl__ui__generic__textFieldStyle';

mobl.ui.generic.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
var root16940 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6432 = $("<span>");
root16940.append(node6432);
var condSubs835 = new mobl.CompSubscription();
subs__.addSub(condSubs835);
var oldValue835;
var renderCond835 = function() {
  var value2743 = label.get();
  if(oldValue835 === value2743) return;
  oldValue835 = value2743;
  var subs__ = condSubs835;
  subs__.unsubscribe();
  node6432.empty();
  if(value2743) {
    
    var node6433 = $("<span>");
    node6433.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref5218 = label;
    node6433.text(""+ref5218.get());
    var ignore1082 = false;
    subs__.addSub(ref5218.addEventListener('change', function(_, ref, val) {
      if(ignore1082) return;
      node6433.text(""+val);
    }));
    subs__.addSub(ref5218.rebind());
    
    
    node6432.append(node6433);
    
    var node6434 = $("<span>");
    node6434.attr('style', "float: left");
    
    
    var node6435 = $("<input>");
    node6435.attr('type', "text");
    
    var ref5215 = mobl.ref(mobl.ui.generic.textFieldStyle);
    if(ref5215.get() !== null) {
      node6435.attr('class', ref5215.get());
      subs__.addSub(ref5215.addEventListener('change', function(_, ref, val) {
        if(ref === ref5215) {
          node6435.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5215.rebind());
    
    var ref5216 = placeholder;
    if(ref5216.get() !== null) {
      node6435.attr('placeholder', ref5216.get());
      subs__.addSub(ref5216.addEventListener('change', function(_, ref, val) {
        if(ref === ref5216) {
          node6435.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5216.rebind());
    
    var ref5217 = s;
    node6435.val(""+ref5217.get());
    var ignore1081 = false;
    subs__.addSub(ref5217.addEventListener('change', function(_, ref, val) {
      if(ignore1081) return;
      node6435.val(""+val);
    }));
    subs__.addSub(ref5217.rebind());
    
    subs__.addSub(mobl.domBind(node6435, 'keyup change', function() {
      ignore1081 = true;
      s.set(mobl.stringTomobl__String(node6435.val()));
      ignore1081 = false;
    }));
    
    
    var val2747 = onchange.get();
    if(val2747 !== null) {
      subs__.addSub(mobl.domBind(node6435, 'change', val2747));
    }
    
    var val2748 = onkeyup.get();
    if(val2748 !== null) {
      subs__.addSub(mobl.domBind(node6435, 'keyup', val2748));
    }
    
    var val2749 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = mobl.ui.generic.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val2749 !== null) {
      subs__.addSub(mobl.domBind(node6435, 'blur', val2749));
    }
    
    node6434.append(node6435);
    node6432.append(node6434);
    
    
    
    
  } else {
    
    var node6436 = $("<input>");
    node6436.attr('type', "text");
    
    var ref5219 = mobl.ref(mobl.ui.generic.textFieldStyle);
    if(ref5219.get() !== null) {
      node6436.attr('class', ref5219.get());
      subs__.addSub(ref5219.addEventListener('change', function(_, ref, val) {
        if(ref === ref5219) {
          node6436.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5219.rebind());
    
    var ref5220 = placeholder;
    if(ref5220.get() !== null) {
      node6436.attr('placeholder', ref5220.get());
      subs__.addSub(ref5220.addEventListener('change', function(_, ref, val) {
        if(ref === ref5220) {
          node6436.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5220.rebind());
    
    var ref5221 = s;
    node6436.val(""+ref5221.get());
    var ignore1083 = false;
    subs__.addSub(ref5221.addEventListener('change', function(_, ref, val) {
      if(ignore1083) return;
      node6436.val(""+val);
    }));
    subs__.addSub(ref5221.rebind());
    
    subs__.addSub(mobl.domBind(node6436, 'keyup change', function() {
      ignore1083 = true;
      s.set(mobl.stringTomobl__String(node6436.val()));
      ignore1083 = false;
    }));
    
    
    var val2750 = onchange.get();
    if(val2750 !== null) {
      subs__.addSub(mobl.domBind(node6436, 'change', val2750));
    }
    
    var val2751 = onkeyup.get();
    if(val2751 !== null) {
      subs__.addSub(mobl.domBind(node6436, 'keyup', val2751));
    }
    
    var val2752 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = mobl.ui.generic.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val2752 !== null) {
      subs__.addSub(mobl.domBind(node6436, 'blur', val2752));
    }
    
    node6432.append(node6436);
    
    
  }
};
renderCond835();
subs__.addSub(label.addEventListener('change', function() {
  renderCond835();
}));

callback(root16940); return subs__;

return subs__;
};

mobl.ui.generic.numField = function(n, placeholder, label, onchange, elements, callback) {
var root16941 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6437 = $("<span>");
root16941.append(node6437);
var condSubs836 = new mobl.CompSubscription();
subs__.addSub(condSubs836);
var oldValue836;
var renderCond836 = function() {
  var value2744 = label.get();
  if(oldValue836 === value2744) return;
  oldValue836 = value2744;
  var subs__ = condSubs836;
  subs__.unsubscribe();
  node6437.empty();
  if(value2744) {
    
    var node6438 = $("<span>");
    node6438.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref5225 = label;
    node6438.text(""+ref5225.get());
    var ignore1085 = false;
    subs__.addSub(ref5225.addEventListener('change', function(_, ref, val) {
      if(ignore1085) return;
      node6438.text(""+val);
    }));
    subs__.addSub(ref5225.rebind());
    
    
    node6437.append(node6438);
    
    var node6439 = $("<span>");
    node6439.attr('style', "float: left");
    
    
    var node6440 = $("<input>");
    node6440.attr('type', "text");
    
    var ref5222 = mobl.ref(mobl.ui.generic.textFieldStyle);
    if(ref5222.get() !== null) {
      node6440.attr('class', ref5222.get());
      subs__.addSub(ref5222.addEventListener('change', function(_, ref, val) {
        if(ref === ref5222) {
          node6440.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5222.rebind());
    
    var ref5223 = placeholder;
    if(ref5223.get() !== null) {
      node6440.attr('placeholder', ref5223.get());
      subs__.addSub(ref5223.addEventListener('change', function(_, ref, val) {
        if(ref === ref5223) {
          node6440.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5223.rebind());
    
    var ref5224 = n;
    node6440.val(""+ref5224.get());
    var ignore1084 = false;
    subs__.addSub(ref5224.addEventListener('change', function(_, ref, val) {
      if(ignore1084) return;
      node6440.val(""+val);
    }));
    subs__.addSub(ref5224.rebind());
    
    subs__.addSub(mobl.domBind(node6440, 'keyup change', function() {
      ignore1084 = true;
      n.set(mobl.stringTomobl__Num(node6440.val()));
      ignore1084 = false;
    }));
    
    
    var val2753 = onchange.get();
    if(val2753 !== null) {
      subs__.addSub(mobl.domBind(node6440, 'change', val2753));
    }
    
    var val2754 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = mobl.ui.generic.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val2754 !== null) {
      subs__.addSub(mobl.domBind(node6440, 'blur', val2754));
    }
    
    node6439.append(node6440);
    node6437.append(node6439);
    
    
    
    
  } else {
    
    var node6441 = $("<input>");
    node6441.attr('type', "text");
    
    var ref5226 = mobl.ref(mobl.ui.generic.textFieldStyle);
    if(ref5226.get() !== null) {
      node6441.attr('class', ref5226.get());
      subs__.addSub(ref5226.addEventListener('change', function(_, ref, val) {
        if(ref === ref5226) {
          node6441.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5226.rebind());
    
    var ref5227 = placeholder;
    if(ref5227.get() !== null) {
      node6441.attr('placeholder', ref5227.get());
      subs__.addSub(ref5227.addEventListener('change', function(_, ref, val) {
        if(ref === ref5227) {
          node6441.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5227.rebind());
    
    var ref5228 = n;
    node6441.val(""+ref5228.get());
    var ignore1086 = false;
    subs__.addSub(ref5228.addEventListener('change', function(_, ref, val) {
      if(ignore1086) return;
      node6441.val(""+val);
    }));
    subs__.addSub(ref5228.rebind());
    
    subs__.addSub(mobl.domBind(node6441, 'keyup change', function() {
      ignore1086 = true;
      n.set(mobl.stringTomobl__Num(node6441.val()));
      ignore1086 = false;
    }));
    
    
    var val2755 = onchange.get();
    if(val2755 !== null) {
      subs__.addSub(mobl.domBind(node6441, 'change', val2755));
    }
    
    var val2756 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = mobl.ui.generic.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val2756 !== null) {
      subs__.addSub(mobl.domBind(node6441, 'blur', val2756));
    }
    
    node6437.append(node6441);
    
    
  }
};
renderCond836();
subs__.addSub(label.addEventListener('change', function() {
  renderCond836();
}));

callback(root16941); return subs__;

return subs__;
};

mobl.ui.generic.passwordField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
var root16942 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6442 = $("<span>");
root16942.append(node6442);
var condSubs837 = new mobl.CompSubscription();
subs__.addSub(condSubs837);
var oldValue837;
var renderCond837 = function() {
  var value2745 = label.get();
  if(oldValue837 === value2745) return;
  oldValue837 = value2745;
  var subs__ = condSubs837;
  subs__.unsubscribe();
  node6442.empty();
  if(value2745) {
    
    var node6443 = $("<span>");
    node6443.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
    
    var ref5232 = label;
    node6443.text(""+ref5232.get());
    var ignore1088 = false;
    subs__.addSub(ref5232.addEventListener('change', function(_, ref, val) {
      if(ignore1088) return;
      node6443.text(""+val);
    }));
    subs__.addSub(ref5232.rebind());
    
    
    node6442.append(node6443);
    
    var node6444 = $("<span>");
    node6444.attr('style', "float: left");
    
    
    var node6445 = $("<input>");
    node6445.attr('type', "password");
    
    var ref5229 = mobl.ref(mobl.ui.generic.textFieldStyle);
    if(ref5229.get() !== null) {
      node6445.attr('class', ref5229.get());
      subs__.addSub(ref5229.addEventListener('change', function(_, ref, val) {
        if(ref === ref5229) {
          node6445.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5229.rebind());
    
    var ref5230 = placeholder;
    if(ref5230.get() !== null) {
      node6445.attr('placeholder', ref5230.get());
      subs__.addSub(ref5230.addEventListener('change', function(_, ref, val) {
        if(ref === ref5230) {
          node6445.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5230.rebind());
    
    var ref5231 = s;
    node6445.val(""+ref5231.get());
    var ignore1087 = false;
    subs__.addSub(ref5231.addEventListener('change', function(_, ref, val) {
      if(ignore1087) return;
      node6445.val(""+val);
    }));
    subs__.addSub(ref5231.rebind());
    
    subs__.addSub(mobl.domBind(node6445, 'keyup change', function() {
      ignore1087 = true;
      s.set(mobl.stringTomobl__String(node6445.val()));
      ignore1087 = false;
    }));
    
    
    var val2757 = onchange.get();
    if(val2757 !== null) {
      subs__.addSub(mobl.domBind(node6445, 'change', val2757));
    }
    
    var val2758 = onkeyup.get();
    if(val2758 !== null) {
      subs__.addSub(mobl.domBind(node6445, 'keyup', val2758));
    }
    
    var val2759 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = mobl.ui.generic.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val2759 !== null) {
      subs__.addSub(mobl.domBind(node6445, 'blur', val2759));
    }
    
    node6444.append(node6445);
    node6442.append(node6444);
    
    
    
    
  } else {
    
    var node6446 = $("<input>");
    node6446.attr('type', "password");
    
    var ref5233 = mobl.ref(mobl.ui.generic.textFieldStyle);
    if(ref5233.get() !== null) {
      node6446.attr('class', ref5233.get());
      subs__.addSub(ref5233.addEventListener('change', function(_, ref, val) {
        if(ref === ref5233) {
          node6446.attr('class', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5233.rebind());
    
    var ref5234 = placeholder;
    if(ref5234.get() !== null) {
      node6446.attr('placeholder', ref5234.get());
      subs__.addSub(ref5234.addEventListener('change', function(_, ref, val) {
        if(ref === ref5234) {
          node6446.attr('placeholder', val);
        } else {
          console.log("Garbage!");
        }
      }));
      
    }
    subs__.addSub(ref5234.rebind());
    
    var ref5235 = s;
    node6446.val(""+ref5235.get());
    var ignore1089 = false;
    subs__.addSub(ref5235.addEventListener('change', function(_, ref, val) {
      if(ignore1089) return;
      node6446.val(""+val);
    }));
    subs__.addSub(ref5235.rebind());
    
    subs__.addSub(mobl.domBind(node6446, 'keyup change', function() {
      ignore1089 = true;
      s.set(mobl.stringTomobl__String(node6446.val()));
      ignore1089 = false;
    }));
    
    
    var val2760 = onchange.get();
    if(val2760 !== null) {
      subs__.addSub(mobl.domBind(node6446, 'change', val2760));
    }
    
    var val2761 = onkeyup.get();
    if(val2761 !== null) {
      subs__.addSub(mobl.domBind(node6446, 'keyup', val2761));
    }
    
    var val2762 = function(event, callback) {
                  if(event && event.stopPropagation) event.stopPropagation();
                  var result__ = mobl.ui.generic.scrollUp();
                  if(callback && callback.apply) callback(); return;
                };
    if(val2762 !== null) {
      subs__.addSub(mobl.domBind(node6446, 'blur', val2762));
    }
    
    node6442.append(node6446);
    
    
  }
};
renderCond837();
subs__.addSub(label.addEventListener('change', function() {
  renderCond837();
}));

callback(root16942); return subs__;

return subs__;
};
mobl.ui.generic.tabbarStyle = 'mobl__ui__generic__tabbarStyle';
mobl.ui.generic.inActiveTabButtonStyle = 'mobl__ui__generic__inActiveTabButtonStyle';
mobl.ui.generic.activeTabButtonStyle = 'mobl__ui__generic__activeTabButtonStyle';
mobl.ui.generic.inActiveTabStyle = 'mobl__ui__generic__inActiveTabStyle';
mobl.ui.generic.activeTabStyle = 'mobl__ui__generic__activeTabStyle';

mobl.ui.generic.tabSet = function(tabs, elements, callback) {
var root16943 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeTabName = mobl.ref(tabs.get().get(0)._1);

var s = mobl.ref("");


var tmp27396 = mobl.ref(null);


var tmp27395 = mobl.ref(null);

var nodes12208 = $("<span>");
root16943.append(nodes12208);
subs__.addSub((mobl.ui.generic.block)(mobl.ref(mobl.ui.generic.tabbarStyle), tmp27395, tmp27396, function(_, callback) {
  var root16944 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node6447 = mobl.loadingSpan();
  root16944.append(node6447);
  var list1332;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList1332 = function() {
    var subs__ = listSubs__;
    list1332 = tabs.get();
    list1332.list(function(results1944) {
      node6447.empty();
      for(var i1392 = 0; i1392 < results1944.length; i1392++) {
        (function() {
          var iternode1332 = $("<span>");
          node6447.append(iternode1332);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results1944), i1392), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1944), i1392), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1944), i1392), "_3");
          
          var tmp27393 = mobl.ref(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp27393.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp27393.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.activeTabButtonStyle).addEventListener('change', function() {
            tmp27393.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabButtonStyle).addEventListener('change', function() {
            tmp27393.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
          }));
          
          
          var tmp27392 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTabName.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp27394 = mobl.ref(null);
          
          var nodes12209 = $("<span>");
          iternode1332.append(nodes12209);
          subs__.addSub((mobl.ui.generic.span)(tmp27393, tmp27394, tmp27392, function(_, callback) {
            var root16945 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp27391 = mobl.ref(null);
            
            
            var tmp27390 = mobl.ref(null);
            
            var nodes12210 = $("<span>");
            root16945.append(nodes12210);
            subs__.addSub((mobl.label)(tabName, tmp27390, tmp27391, function(_, callback) {
              var root16946 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16946); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes12210;
              nodes12210 = node.contents();
              oldNodes.replaceWith(nodes12210);
            }));
            callback(root16945); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes12209;
            nodes12209 = node.contents();
            oldNodes.replaceWith(nodes12209);
          }));
          
          var oldNodes = iternode1332;
          iternode1332 = iternode1332.contents();
          oldNodes.replaceWith(iternode1332);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list1332.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1332(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1332(true); }));
    });
  };
  renderList1332();
  
  callback(root16944); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes12208;
  nodes12208 = node.contents();
  oldNodes.replaceWith(nodes12208);
}));

var node6448 = mobl.loadingSpan();
root16943.append(node6448);
var list1333;
var listSubs__ = new mobl.CompSubscription();
subs__.addSub(listSubs__);
var renderList1333 = function() {
  var subs__ = listSubs__;
  list1333 = tabs.get();
  list1333.list(function(results1945) {
    node6448.empty();
    for(var i1393 = 0; i1393 < results1945.length; i1393++) {
      (function() {
        var iternode1333 = $("<span>");
        node6448.append(iternode1333);
        var tabName;var tabIcon;var tabControl;
        tabName = mobl.ref(mobl.ref(mobl.ref(results1945), i1393), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1945), i1393), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1945), i1393), "_3");
        
        var tmp27397 = mobl.ref(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
        subs__.addSub(activeTabName.addEventListener('change', function() {
          tmp27397.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
        }));
        subs__.addSub(tabName.addEventListener('change', function() {
          tmp27397.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(mobl.ui.generic.activeTabStyle).addEventListener('change', function() {
          tmp27397.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
        }));
        subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabStyle).addEventListener('change', function() {
          tmp27397.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
        }));
        
        
        var tmp27399 = mobl.ref(null);
        
        
        var tmp27398 = mobl.ref(null);
        
        var nodes12211 = $("<span>");
        iternode1333.append(nodes12211);
        subs__.addSub((mobl.ui.generic.block)(tmp27397, tmp27398, tmp27399, function(_, callback) {
          var root16947 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes12212 = $("<span>");
          root16947.append(nodes12212);
          subs__.addSub((mobl.screenContext)(function(_, callback) {
            var root16948 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes12213 = $("<span>");
            root16948.append(nodes12213);
            subs__.addSub(tabControl.addEventListener('change', function() {
              renderControl2421();
            }));
            
            function renderControl2421() {
              subs__.addSub((tabControl.get())(function(elements, callback) {
                var root16949 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root16949); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes12213;
                nodes12213 = node.contents();
                oldNodes.replaceWith(nodes12213);
              }));
            }
            renderControl2421();
            callback(root16948); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes12212;
            nodes12212 = node.contents();
            oldNodes.replaceWith(nodes12212);
          }));
          callback(root16947); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes12211;
          nodes12211 = node.contents();
          oldNodes.replaceWith(nodes12211);
        }));
        
        var oldNodes = iternode1333;
        iternode1333 = iternode1333.contents();
        oldNodes.replaceWith(iternode1333);
        
        
      }());
    }
    mobl.delayedUpdateScrollers();
    subs__.addSub(list1333.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1333(true); }));
    subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1333(true); }));
  });
};
renderList1333();

callback(root16943); return subs__;


return subs__;
};
mobl.ui.generic.searchboxStyle = 'mobl__ui__generic__searchboxStyle';
mobl.ui.generic.searchBoxInputStyle = 'mobl__ui__generic__searchBoxInputStyle';

mobl.ui.generic.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
var root16950 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6449 = $("<div>");

var ref5239 = mobl.ref(mobl.ui.generic.searchboxStyle);
if(ref5239.get() !== null) {
  node6449.attr('class', ref5239.get());
  subs__.addSub(ref5239.addEventListener('change', function(_, ref, val) {
    if(ref === ref5239) {
      node6449.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5239.rebind());


var node6450 = $("<input>");
node6450.attr('type', "text");

var ref5236 = mobl.ref(mobl.ui.generic.searchBoxInputStyle);
if(ref5236.get() !== null) {
  node6450.attr('class', ref5236.get());
  subs__.addSub(ref5236.addEventListener('change', function(_, ref, val) {
    if(ref === ref5236) {
      node6450.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5236.rebind());

var ref5237 = placeholder;
if(ref5237.get() !== null) {
  node6450.attr('placeholder', ref5237.get());
  subs__.addSub(ref5237.addEventListener('change', function(_, ref, val) {
    if(ref === ref5237) {
      node6450.attr('placeholder', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5237.rebind());

var ref5238 = s;
node6450.val(""+ref5238.get());
var ignore1090 = false;
subs__.addSub(ref5238.addEventListener('change', function(_, ref, val) {
  if(ignore1090) return;
  node6450.val(""+val);
}));
subs__.addSub(ref5238.rebind());

subs__.addSub(mobl.domBind(node6450, 'keyup change', function() {
  ignore1090 = true;
  s.set(mobl.stringTomobl__String(node6450.val()));
  ignore1090 = false;
}));


var val2763 = onsearch.get();
if(val2763 !== null) {
  subs__.addSub(mobl.domBind(node6450, 'change', val2763));
}

var val2764 = onkeyup.get();
if(val2764 !== null) {
  subs__.addSub(mobl.domBind(node6450, 'keyup', val2764));
}
node6450.attr('autocorrect', "off");
node6450.attr('autocapitalize', "off");
node6450.attr('autocomplete', "off");

node6449.append(node6450);
root16950.append(node6449);
callback(root16950); return subs__;


return subs__;
};
mobl.ui.generic.contextMenuStyle = 'mobl__ui__generic__contextMenuStyle';
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';

mobl.ui.generic.contextMenu = function(elements, callback) {
var root16951 = $("<span>");
var subs__ = new mobl.CompSubscription();

var menu = $("<div>");

var ref5240 = mobl.ref(mobl.ui.generic.contextMenuStyle);
if(ref5240.get() !== null) {
  menu.attr('class', ref5240.get());
  subs__.addSub(ref5240.addEventListener('change', function(_, ref, val) {
    if(ref === ref5240) {
      menu.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5240.rebind());

var nodes12214 = $("<span>");
menu.append(nodes12214);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2422();
}));

function renderControl2422() {
  subs__.addSub((elements)(function(elements, callback) {
    var root16952 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16952); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12214;
    nodes12214 = node.contents();
    oldNodes.replaceWith(nodes12214);
  }));
}
renderControl2422();
root16951.append(menu);
var result__ = menu.hide();

var img = $("<img>");
img.attr('src', "mobl/ui/generic/contextmenu.png");
img.attr('style', "float: right;");

var val2765 = function(event, callback) {
              if(event && event.stopPropagation) event.stopPropagation();
              var result__ = img.parent();
              var target = result__;
              var result__ = target.css("position", "relative");
              var result__ = img.hide();
              var result__ = menu.css("right", "5px");
              var result__ = menu.css("top", "5px");
              var result__ = menu.show();
              mobl.sleep(500, function(result__) {
                var tmp27457 = result__;
                var result__ = mobl.$("body").bind("tap", removeMenu);
                if(callback && callback.apply) callback(); return;
              });
            };
if(val2765 !== null) {
  subs__.addSub(mobl.domBind(img, 'tap', val2765));
}

root16951.append(img);

var removeMenu = function(evt) {
   var __this = this;
  menu.hide();
  img.show();
  mobl.$("body").unbind("tap", removeMenu);
};


callback(root16951); return subs__;



return subs__;
};

mobl.ui.generic.masterDetail = function(items, masterItem, detail, elements, callback) {
var root16953 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp27449 = mobl.ref(mobl.window.get().innerWidth > 500);
subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
  tmp27449.set(mobl.window.get().innerWidth > 500);
}));


var node6451 = $("<span>");
root16953.append(node6451);
var condSubs838 = new mobl.CompSubscription();
subs__.addSub(condSubs838);
var oldValue838;
var renderCond838 = function() {
  var value2746 = tmp27449.get();
  if(oldValue838 === value2746) return;
  oldValue838 = value2746;
  var subs__ = condSubs838;
  subs__.unsubscribe();
  node6451.empty();
  if(value2746) {
    items.get().one(function(result__) {
      var current = mobl.ref(result__);
      
      var node6452 = $("<div>");
      node6452.attr('width', "100%");
      
      
      var node6453 = $("<div>");
      node6453.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes12216 = $("<span>");
      node6453.append(nodes12216);
      subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
        var root16955 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node6455 = mobl.loadingSpan();
        root16955.append(node6455);
        var list1334;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList1334 = function() {
          var subs__ = listSubs__;
          list1334 = items.get();
          list1334.list(function(results1946) {
            node6455.empty();
            for(var i1394 = 0; i1394 < results1946.length; i1394++) {
              (function() {
                var iternode1334 = $("<span>");
                node6455.append(iternode1334);
                var it;
                it = mobl.ref(mobl.ref(results1946), i1394);
                
                var tmp27413 = mobl.ref(it.get() == current.get());
                subs__.addSub(it.addEventListener('change', function() {
                  tmp27413.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp27413.set(it.get() == current.get());
                }));
                
                
                var node6456 = $("<span>");
                iternode1334.append(node6456);
                var condSubs839 = new mobl.CompSubscription();
                subs__.addSub(condSubs839);
                var oldValue839;
                var renderCond839 = function() {
                  var value2747 = tmp27413.get();
                  if(oldValue839 === value2747) return;
                  oldValue839 = value2747;
                  var subs__ = condSubs839;
                  subs__.unsubscribe();
                  node6456.empty();
                  if(value2747) {
                    
                    var tmp27409 = mobl.ref(false);
                    
                    
                    var tmp27408 = mobl.ref(null);
                    
                    
                    var tmp27407 = mobl.ref(null);
                    
                    var nodes12217 = $("<span>");
                    node6456.append(nodes12217);
                    subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.selectedItemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp27407, tmp27408, tmp27409, function(_, callback) {
                      var root16956 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes12218 = $("<span>");
                      root16956.append(nodes12218);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl2424();
                      }));
                      
                      function renderControl2424() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root16957 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root16957); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes12218;
                          nodes12218 = node.contents();
                          oldNodes.replaceWith(nodes12218);
                        }));
                      }
                      renderControl2424();
                      callback(root16956); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes12217;
                      nodes12217 = node.contents();
                      oldNodes.replaceWith(nodes12217);
                    }));
                    
                    
                  } else {
                    
                    var tmp27411 = mobl.ref(function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = it.get();
                                         current.set(result__);
                                         if(callback && callback.apply) callback(); return;
                                       });
                    
                    
                    var tmp27410 = mobl.ref(true);
                    
                    
                    var tmp27412 = mobl.ref(null);
                    
                    var nodes12219 = $("<span>");
                    node6456.append(nodes12219);
                    subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp27411, tmp27412, tmp27410, function(_, callback) {
                      var root16958 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      var nodes12220 = $("<span>");
                      root16958.append(nodes12220);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl2425();
                      }));
                      
                      function renderControl2425() {
                        subs__.addSub((masterItem.get())(it, function(elements, callback) {
                          var root16959 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root16959); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes12220;
                          nodes12220 = node.contents();
                          oldNodes.replaceWith(nodes12220);
                        }));
                      }
                      renderControl2425();
                      callback(root16958); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes12219;
                      nodes12219 = node.contents();
                      oldNodes.replaceWith(nodes12219);
                    }));
                    
                    
                  }
                };
                renderCond839();
                subs__.addSub(tmp27413.addEventListener('change', function() {
                  renderCond839();
                }));
                
                
                var oldNodes = iternode1334;
                iternode1334 = iternode1334.contents();
                oldNodes.replaceWith(iternode1334);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list1334.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1334(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1334(true); }));
          });
        };
        renderList1334();
        
        callback(root16955); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes12216;
        nodes12216 = node.contents();
        oldNodes.replaceWith(nodes12216);
      }));
      node6452.append(node6453);
      
      var node6454 = $("<div>");
      node6454.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
      
      var nodes12215 = $("<span>");
      node6454.append(nodes12215);
      subs__.addSub(detail.addEventListener('change', function() {
        renderControl2423();
      }));
      
      function renderControl2423() {
        subs__.addSub((detail.get())(current, function(elements, callback) {
          var root16954 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root16954); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes12215;
          nodes12215 = node.contents();
          oldNodes.replaceWith(nodes12215);
        }));
      }
      renderControl2423();
      node6452.append(node6454);
      node6451.append(node6452);
      
      
      
      
      
      
    });
  } else {
    var nodes12221 = $("<span>");
    node6451.append(nodes12221);
    subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
      var root16960 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node6457 = mobl.loadingSpan();
      root16960.append(node6457);
      var list1335;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList1335 = function() {
        var subs__ = listSubs__;
        list1335 = items.get();
        list1335.list(function(results1947) {
          node6457.empty();
          for(var i1395 = 0; i1395 < results1947.length; i1395++) {
            (function() {
              var iternode1335 = $("<span>");
              node6457.append(iternode1335);
              var it;
              it = mobl.ref(mobl.ref(results1947), i1395);
              
              var tmp27400 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   mobl.call('mobl.ui.generic.detailScreen', [it, detail], function(result__) {
                                   var tmp27458 = result__;
                                   if(callback && callback.apply) callback(); return;
                                   });
                                 });
              
              
              var tmp27402 = mobl.ref(false);
              
              
              var tmp27401 = mobl.ref(null);
              
              var nodes12222 = $("<span>");
              iternode1335.append(nodes12222);
              subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp27400, tmp27401, tmp27402, function(_, callback) {
                var root16961 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes12223 = $("<span>");
                root16961.append(nodes12223);
                subs__.addSub(masterItem.addEventListener('change', function() {
                  renderControl2426();
                }));
                
                function renderControl2426() {
                  subs__.addSub((masterItem.get())(it, function(elements, callback) {
                    var root16962 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root16962); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes12223;
                    nodes12223 = node.contents();
                    oldNodes.replaceWith(nodes12223);
                  }));
                }
                renderControl2426();
                callback(root16961); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes12222;
                nodes12222 = node.contents();
                oldNodes.replaceWith(nodes12222);
              }));
              
              var oldNodes = iternode1335;
              iternode1335 = iternode1335.contents();
              oldNodes.replaceWith(iternode1335);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list1335.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1335(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1335(true); }));
        });
      };
      renderList1335();
      
      callback(root16960); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12221;
      nodes12221 = node.contents();
      oldNodes.replaceWith(nodes12221);
    }));
    
    
  }
};
renderCond838();
subs__.addSub(tmp27449.addEventListener('change', function() {
  renderCond838();
}));

callback(root16953); return subs__;

return subs__;
};

mobl.ui.generic.detailScreen = function(it, detail, callback, screenCallback) {
var root16963 = $("<div>");
var subs__ = new mobl.CompSubscription();

var tmp27405 = mobl.ref("Detail");


var tmp27406 = mobl.ref(null);

var nodes12224 = $("<span>");
root16963.append(nodes12224);
subs__.addSub((mobl.ui.generic.header)(tmp27405, tmp27406, function(_, callback) {
  var root16964 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp27404 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       if(screenCallback) screenCallback();
                       return;
                       if(callback && callback.apply) callback(); return;
                     });
  
  
  var tmp27403 = mobl.ref("Back");
  
  var nodes12225 = $("<span>");
  root16964.append(nodes12225);
  subs__.addSub((mobl.ui.generic.backButton)(tmp27403, mobl.ref(mobl.ui.generic.backButtonStyle), mobl.ref(mobl.ui.generic.backButtonPushedStyle), tmp27404, function(_, callback) {
    var root16965 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16965); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12225;
    nodes12225 = node.contents();
    oldNodes.replaceWith(nodes12225);
  }));
  callback(root16964); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes12224;
  nodes12224 = node.contents();
  oldNodes.replaceWith(nodes12224);
}));
var nodes12226 = $("<span>");
root16963.append(nodes12226);
subs__.addSub(detail.addEventListener('change', function() {
  renderControl2427();
}));

function renderControl2427() {
  subs__.addSub((detail.get())(it, function(elements, callback) {
    var root16966 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16966); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12226;
    nodes12226 = node.contents();
    oldNodes.replaceWith(nodes12226);
  }));
}
renderControl2427();
callback(root16963); return subs__;


return subs__;
};
mobl.ui.generic.selectedItemStyle = 'mobl__ui__generic__selectedItemStyle';

mobl.ui.generic.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
var root16967 = $("<span>");
var subs__ = new mobl.CompSubscription();

var selected = mobl.ref(null);
var nodes12227 = $("<span>");
root16967.append(nodes12227);
subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
  var root16968 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node6458 = mobl.loadingSpan();
  root16968.append(node6458);
  var list1336;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList1336 = function() {
    var subs__ = listSubs__;
    list1336 = coll.get();
    list1336.list(function(results1948) {
      node6458.empty();
      for(var i1396 = 0; i1396 < results1948.length; i1396++) {
        (function() {
          var iternode1336 = $("<span>");
          node6458.append(iternode1336);
          var it;
          it = mobl.ref(mobl.ref(results1948), i1396);
          
          var tmp27420 = mobl.ref(it.get() == selected.get());
          subs__.addSub(it.addEventListener('change', function() {
            tmp27420.set(it.get() == selected.get());
          }));
          subs__.addSub(selected.addEventListener('change', function() {
            tmp27420.set(it.get() == selected.get());
          }));
          
          
          var node6459 = $("<span>");
          iternode1336.append(node6459);
          var condSubs840 = new mobl.CompSubscription();
          subs__.addSub(condSubs840);
          var oldValue840;
          var renderCond840 = function() {
            var value2748 = tmp27420.get();
            if(oldValue840 === value2748) return;
            oldValue840 = value2748;
            var subs__ = condSubs840;
            subs__.unsubscribe();
            node6459.empty();
            if(value2748) {
              
              var tmp27416 = mobl.ref(false);
              
              
              var tmp27415 = mobl.ref(null);
              
              
              var tmp27414 = mobl.ref(null);
              
              var nodes12228 = $("<span>");
              node6459.append(nodes12228);
              subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp27414, tmp27415, tmp27416, function(_, callback) {
                var root16969 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes12229 = $("<span>");
                root16969.append(nodes12229);
                subs__.addSub(zoomCtrl.addEventListener('change', function() {
                  renderControl2428();
                }));
                
                function renderControl2428() {
                  subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                    var root16970 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root16970); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes12229;
                    nodes12229 = node.contents();
                    oldNodes.replaceWith(nodes12229);
                  }));
                }
                renderControl2428();
                callback(root16969); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes12228;
                nodes12228 = node.contents();
                oldNodes.replaceWith(nodes12228);
              }));
              
              
            } else {
              
              var tmp27418 = mobl.ref(true);
              
              
              var tmp27417 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   selected.set(result__);
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp27419 = mobl.ref(null);
              
              var nodes12230 = $("<span>");
              node6459.append(nodes12230);
              subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp27417, tmp27419, tmp27418, function(_, callback) {
                var root16971 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes12231 = $("<span>");
                root16971.append(nodes12231);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl2429();
                }));
                
                function renderControl2429() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root16972 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root16972); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes12231;
                    nodes12231 = node.contents();
                    oldNodes.replaceWith(nodes12231);
                  }));
                }
                renderControl2429();
                callback(root16971); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes12230;
                nodes12230 = node.contents();
                oldNodes.replaceWith(nodes12230);
              }));
              
              
            }
          };
          renderCond840();
          subs__.addSub(tmp27420.addEventListener('change', function() {
            renderCond840();
          }));
          
          
          var oldNodes = iternode1336;
          iternode1336 = iternode1336.contents();
          oldNodes.replaceWith(iternode1336);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list1336.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1336(true); }));
      subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1336(true); }));
    });
  };
  renderList1336();
  
  callback(root16968); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes12227;
  nodes12227 = node.contents();
  oldNodes.replaceWith(nodes12227);
}));
callback(root16967); return subs__;

return subs__;
};
mobl.ui.generic.loadMoreStyle = 'mobl__ui__generic__loadMoreStyle';

mobl.ui.generic.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
var root16973 = $("<span>");
var subs__ = new mobl.CompSubscription();

var n = mobl.ref(initialItems.get());
coll.get().count(function(result__) {
  var total = mobl.ref(result__);
  var nodes12232 = $("<span>");
  root16973.append(nodes12232);
  subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
    var root16974 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp27424 = mobl.ref(coll.get().limit(n.get()));
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp27424.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp27424.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp27424.set(coll.get().limit(n.get()));
    }));
    
    
    var node6460 = mobl.loadingSpan();
    root16974.append(node6460);
    var list1337;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList1337 = function() {
      var subs__ = listSubs__;
      list1337 = tmp27424.get();
      list1337.list(function(results1949) {
        node6460.empty();
        for(var i1397 = 0; i1397 < results1949.length; i1397++) {
          (function() {
            var iternode1337 = $("<span>");
            node6460.append(iternode1337);
            var it;
            it = mobl.ref(mobl.ref(results1949), i1397);
            
            var tmp27421 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp27423 = mobl.ref(false);
            
            
            var tmp27422 = mobl.ref(null);
            
            var nodes12233 = $("<span>");
            iternode1337.append(nodes12233);
            subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp27421, tmp27422, tmp27423, function(_, callback) {
              var root16975 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes12234 = $("<span>");
              root16975.append(nodes12234);
              subs__.addSub(listCtrl.addEventListener('change', function() {
                renderControl2430();
              }));
              
              function renderControl2430() {
                subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                  var root16976 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root16976); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes12234;
                  nodes12234 = node.contents();
                  oldNodes.replaceWith(nodes12234);
                }));
              }
              renderControl2430();
              callback(root16975); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes12233;
              nodes12233 = node.contents();
              oldNodes.replaceWith(nodes12233);
            }));
            
            var oldNodes = iternode1337;
            iternode1337 = iternode1337.contents();
            oldNodes.replaceWith(iternode1337);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list1337.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1337(true); }));
        subs__.addSub(tmp27424.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1337(true); }));
      });
    };
    renderList1337();
    
    
    var tmp27425 = mobl.ref(n.get() < total.get());
    subs__.addSub(n.addEventListener('change', function() {
      tmp27425.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp27425.set(n.get() < total.get());
    }));
    
    
    var node6461 = $("<span>");
    root16974.append(node6461);
    var condSubs841 = new mobl.CompSubscription();
    subs__.addSub(condSubs841);
    var oldValue841;
    var renderCond841 = function() {
      var value2749 = tmp27425.get();
      if(oldValue841 === value2749) return;
      oldValue841 = value2749;
      var subs__ = condSubs841;
      subs__.unsubscribe();
      node6461.empty();
      if(value2749) {
        
        var node6462 = $("<li>");
        
        var ref5241 = mobl.ref(mobl.ui.generic.loadMoreStyle);
        if(ref5241.get() !== null) {
          node6462.attr('class', ref5241.get());
          subs__.addSub(ref5241.addEventListener('change', function(_, ref, val) {
            if(ref === ref5241) {
              node6462.attr('class', val);
            } else {
              console.log("Garbage!");
            }
          }));
          
        }
        subs__.addSub(ref5241.rebind());
        
        var val2766 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = n.get() + step.get();
                      n.set(result__);
                      if(callback && callback.apply) callback(); return;
                    };
        if(val2766 !== null) {
          subs__.addSub(mobl.domBind(node6462, 'tap', val2766));
        }
        
        
        node6462.append("More");
        node6461.append(node6462);
        
        
      } else {
        
      }
    };
    renderCond841();
    subs__.addSub(tmp27425.addEventListener('change', function() {
      renderCond841();
    }));
    
    callback(root16974); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes12232;
    nodes12232 = node.contents();
    oldNodes.replaceWith(nodes12232);
  }));
  callback(root16973); return subs__;
  
});
return subs__;
};

mobl.ui.generic.markableList = function(items, elements, callback) {
var root16977 = $("<span>");
var subs__ = new mobl.CompSubscription();
var nodes12235 = $("<span>");
root16977.append(nodes12235);
subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
  var root16978 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node6463 = mobl.loadingSpan();
  root16978.append(node6463);
  var list1338;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList1338 = function() {
    var subs__ = listSubs__;
    list1338 = items.get();
    list1338.list(function(results1950) {
      node6463.empty();
      for(var i1398 = 0; i1398 < results1950.length; i1398++) {
        (function() {
          var iternode1338 = $("<span>");
          node6463.append(iternode1338);
          var checked;var it;
          checked = mobl.ref(mobl.ref(mobl.ref(results1950), i1398), "_1");it = mobl.ref(mobl.ref(mobl.ref(results1950), i1398), "_2");
          
          var tmp27429 = mobl.ref(false);
          
          
          var tmp27428 = mobl.ref(null);
          
          
          var tmp27427 = mobl.ref(null);
          
          var nodes12236 = $("<span>");
          iternode1338.append(nodes12236);
          subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp27427, tmp27428, tmp27429, function(_, callback) {
            var root16979 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp27426 = mobl.ref(null);
            
            var nodes12237 = $("<span>");
            root16979.append(nodes12237);
            subs__.addSub((mobl.ui.generic.checkBox)(checked, it, tmp27426, function(_, callback) {
              var root16980 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16980); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes12237;
              nodes12237 = node.contents();
              oldNodes.replaceWith(nodes12237);
            }));
            callback(root16979); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes12236;
            nodes12236 = node.contents();
            oldNodes.replaceWith(nodes12236);
          }));
          
          var oldNodes = iternode1338;
          iternode1338 = iternode1338.contents();
          oldNodes.replaceWith(iternode1338);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list1338.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1338(true); }));
      subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1338(true); }));
    });
  };
  renderList1338();
  
  callback(root16978); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes12235;
  nodes12235 = node.contents();
  oldNodes.replaceWith(nodes12235);
}));
callback(root16977); return subs__;

return subs__;
};

mobl.ui.generic.selectList = function(title, coll, callback, screenCallback) {
var root16981 = $("<div>");
var subs__ = new mobl.CompSubscription();

var items = mobl.ref([]);

var result__ = coll.get();
coll.get().list(function(coll2936) {
  coll2936 = coll2936.reverse();
  function processOne677() {
    var it;
    it = coll2936.pop();
    var result__ = items.get().push(new mobl.Tuple(false, it));
    
    if(coll2936.length > 0) processOne677(); else rest677();
    
  }
  function rest677() {
    
    var tmp27434 = mobl.ref(null);
    
    var nodes12238 = $("<span>");
    root16981.append(nodes12238);
    subs__.addSub((mobl.ui.generic.header)(title, tmp27434, function(_, callback) {
      var root16982 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp27430 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = null;
                           if(callback && callback.apply) callback(result__);
                           return;
                           if(callback && callback.apply) callback(); return;
                         });
      
      
      var tmp27431 = mobl.ref("Back");
      
      var nodes12239 = $("<span>");
      root16982.append(nodes12239);
      subs__.addSub((mobl.ui.generic.backButton)(tmp27431, mobl.ref(mobl.ui.generic.backButtonStyle), mobl.ref(mobl.ui.generic.backButtonPushedStyle), tmp27430, function(_, callback) {
        var root16983 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16983); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12239;
        nodes12239 = node.contents();
        oldNodes.replaceWith(nodes12239);
      }));
      
      var tmp27433 = mobl.ref(function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = [];
                           var selected = result__;
                           var result__ = items.get();
                           items.get().list(function(coll2935) {
                             coll2935 = coll2935.reverse();
                             function processOne676() {
                               var checked;var it;
                               var tmp27460 = coll2935.pop();
                               checked = tmp27460._1;it = tmp27460._2;
                               var result__ = checked;
                               if(result__) {
                                 var result__ = selected.push(it);
                                 
                                 if(coll2935.length > 0) processOne676(); else rest676();
                                 
                               } else {
                                 {
                                   
                                   if(coll2935.length > 0) processOne676(); else rest676();
                                   
                                 }
                               }
                             }
                             function rest676() {
                               var result__ = selected;
                               if(screenCallback) screenCallback(result__);
                               return;
                               if(callback && callback.apply) callback(); return;
                             }
                             if(coll2935.length > 0) processOne676(); else rest676();
                           });
                           
                         });
      
      
      var tmp27432 = mobl.ref("Done");
      
      var nodes12240 = $("<span>");
      root16982.append(nodes12240);
      subs__.addSub((mobl.ui.generic.button)(tmp27432, mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp27433, function(_, callback) {
        var root16984 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16984); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12240;
        nodes12240 = node.contents();
        oldNodes.replaceWith(nodes12240);
      }));
      callback(root16982); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes12238;
      nodes12238 = node.contents();
      oldNodes.replaceWith(nodes12238);
    }));
    var nodes12241 = $("<span>");
    root16981.append(nodes12241);
    subs__.addSub((mobl.ui.generic.markableList)(items, function(_, callback) {
      var root16985 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16985); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes12241;
      nodes12241 = node.contents();
      oldNodes.replaceWith(nodes12241);
    }));
    callback(root16981); return subs__;
    
    
  }
  if(coll2936.length > 0) processOne677(); else rest677();
});

return subs__;
};

mobl.ui.generic.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
var root16986 = $("<span>");
var subs__ = new mobl.CompSubscription();

var phrase = mobl.ref("");


var tmp27435 = mobl.ref("Search term");


var tmp27437 = mobl.ref(null);


var tmp27436 = mobl.ref(null);

var nodes12242 = $("<span>");
root16986.append(nodes12242);
subs__.addSub((mobl.ui.generic.searchBox)(phrase, tmp27435, tmp27436, tmp27437, function(_, callback) {
  var root16987 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root16987); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes12242;
  nodes12242 = node.contents();
  oldNodes.replaceWith(nodes12242);
}));

var tmp27438 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
  tmp27438.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
  tmp27438.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(Ent.addEventListener('change', function() {
  tmp27438.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(phrase.addEventListener('change', function() {
  tmp27438.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));
subs__.addSub(resultLimit.addEventListener('change', function() {
  tmp27438.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
}));

var nodes12243 = $("<span>");
root16986.append(nodes12243);
subs__.addSub((mobl.ui.generic.masterDetail)(tmp27438, masterItem, detailItem, function(_, callback) {
  var root16988 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root16988); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes12243;
  nodes12243 = node.contents();
  oldNodes.replaceWith(nodes12243);
}));
callback(root16986); return subs__;


return subs__;
};
mobl.ui.generic.progressStyle = 'mobl__ui__generic__progressStyle';
mobl.ui.generic.startLoading = function() {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + mobl.ui.generic.progressStyle + "'>Loading...</div>");
  
  mobl.$("body").prepend(loading);
};

mobl.ui.generic.endLoading = function() {
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
}(mobl.ui.generic));mobl.ui.generic.accordionStyle = 'mobl__ui__generic__accordionStyle';
mobl.ui.generic.activeSectionHeaderStyle = 'mobl__ui__generic__activeSectionHeaderStyle';
mobl.ui.generic.inActiveSectionHeaderStyle = 'mobl__ui__generic__inActiveSectionHeaderStyle';
mobl.ui.generic.activeSectionHeaderStyle = 'mobl__ui__generic__activeSectionHeaderStyle';
mobl.ui.generic.inActiveSectionHeaderStyle = 'mobl__ui__generic__inActiveSectionHeaderStyle';
mobl.ui.generic.inActiveSectionStyle = 'mobl__ui__generic__inActiveSectionStyle';
mobl.ui.generic.activeSectionStyle = 'mobl__ui__generic__activeSectionStyle';

mobl.ui.generic.accordion = function(sections, elements, callback) {
var root16989 = $("<span>");
var subs__ = new mobl.CompSubscription();

var activeSection = mobl.ref(sections.get().get(0)._1);

var tmp27448 = mobl.ref(null);


var tmp27447 = mobl.ref(null);

var nodes12244 = $("<span>");
root16989.append(nodes12244);
subs__.addSub((mobl.ui.generic.block)(mobl.ref(mobl.ui.generic.accordionStyle), tmp27447, tmp27448, function(_, callback) {
  var root16990 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node6464 = mobl.loadingSpan();
  root16990.append(node6464);
  var list1339;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList1339 = function() {
    var subs__ = listSubs__;
    list1339 = sections.get();
    list1339.list(function(results1951) {
      node6464.empty();
      for(var i1399 = 0; i1399 < results1951.length; i1399++) {
        (function() {
          var iternode1339 = $("<span>");
          node6464.append(iternode1339);
          var sectionName;var sectionControl;
          sectionName = mobl.ref(mobl.ref(mobl.ref(results1951), i1399), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results1951), i1399), "_2");
          
          var tmp27442 = mobl.ref(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp27442.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp27442.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.activeSectionHeaderStyle).addEventListener('change', function() {
            tmp27442.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.inActiveSectionHeaderStyle).addEventListener('change', function() {
            tmp27442.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
          }));
          
          
          var tmp27441 = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = sectionName.get();
                               activeSection.set(result__);
                               if(callback && callback.apply) callback(); return;
                             });
          
          
          var tmp27443 = mobl.ref(null);
          
          var nodes12245 = $("<span>");
          iternode1339.append(nodes12245);
          subs__.addSub((mobl.ui.generic.span)(tmp27442, tmp27443, tmp27441, function(_, callback) {
            var root16991 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var tmp27440 = mobl.ref(null);
            
            
            var tmp27439 = mobl.ref(null);
            
            var nodes12246 = $("<span>");
            root16991.append(nodes12246);
            subs__.addSub((mobl.label)(sectionName, tmp27439, tmp27440, function(_, callback) {
              var root16992 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16992); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes12246;
              nodes12246 = node.contents();
              oldNodes.replaceWith(nodes12246);
            }));
            callback(root16991); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes12245;
            nodes12245 = node.contents();
            oldNodes.replaceWith(nodes12245);
          }));
          
          var tmp27444 = mobl.ref(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
          subs__.addSub(activeSection.addEventListener('change', function() {
            tmp27444.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
          }));
          subs__.addSub(sectionName.addEventListener('change', function() {
            tmp27444.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.activeSectionStyle).addEventListener('change', function() {
            tmp27444.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.inActiveSectionStyle).addEventListener('change', function() {
            tmp27444.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
          }));
          
          
          var tmp27446 = mobl.ref(null);
          
          
          var tmp27445 = mobl.ref(null);
          
          var nodes12247 = $("<span>");
          iternode1339.append(nodes12247);
          subs__.addSub((mobl.ui.generic.block)(tmp27444, tmp27445, tmp27446, function(_, callback) {
            var root16993 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes12248 = $("<span>");
            root16993.append(nodes12248);
            subs__.addSub(sectionControl.addEventListener('change', function() {
              renderControl2431();
            }));
            
            function renderControl2431() {
              subs__.addSub((sectionControl.get())(function(elements, callback) {
                var root16994 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root16994); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes12248;
                nodes12248 = node.contents();
                oldNodes.replaceWith(nodes12248);
              }));
            }
            renderControl2431();
            callback(root16993); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes12247;
            nodes12247 = node.contents();
            oldNodes.replaceWith(nodes12247);
          }));
          
          var oldNodes = iternode1339;
          iternode1339 = iternode1339.contents();
          oldNodes.replaceWith(iternode1339);
          
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list1339.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1339(true); }));
      subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1339(true); }));
    });
  };
  renderList1339();
  
  callback(root16990); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes12244;
  nodes12244 = node.contents();
  oldNodes.replaceWith(nodes12244);
}));
callback(root16989); return subs__;

return subs__;
};
mobl.ui.generic.tableStyle = 'mobl__ui__generic__tableStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';

mobl.ui.generic.table = function(elements, callback) {
var root16995 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6465 = $("<table>");

var ref5242 = mobl.ref(mobl.ui.generic.tableStyle);
if(ref5242.get() !== null) {
  node6465.attr('class', ref5242.get());
  subs__.addSub(ref5242.addEventListener('change', function(_, ref, val) {
    if(ref === ref5242) {
      node6465.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5242.rebind());

var nodes12249 = $("<span>");
node6465.append(nodes12249);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2432();
}));

function renderControl2432() {
  subs__.addSub((elements)(function(elements, callback) {
    var root16996 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16996); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12249;
    nodes12249 = node.contents();
    oldNodes.replaceWith(nodes12249);
  }));
}
renderControl2432();
root16995.append(node6465);
callback(root16995); return subs__;


return subs__;
};

mobl.ui.generic.row = function(elements, callback) {
var root16997 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6466 = $("<tr>");

var ref5243 = mobl.ref(mobl.ui.generic.trStyle);
if(ref5243.get() !== null) {
  node6466.attr('class', ref5243.get());
  subs__.addSub(ref5243.addEventListener('change', function(_, ref, val) {
    if(ref === ref5243) {
      node6466.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5243.rebind());

var nodes12250 = $("<span>");
node6466.append(nodes12250);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2433();
}));

function renderControl2433() {
  subs__.addSub((elements)(function(elements, callback) {
    var root16998 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16998); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12250;
    nodes12250 = node.contents();
    oldNodes.replaceWith(nodes12250);
  }));
}
renderControl2433();
root16997.append(node6466);
callback(root16997); return subs__;


return subs__;
};

mobl.ui.generic.cell = function(width, elements, callback) {
var root16999 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6467 = $("<td>");

var ref5244 = width;
if(ref5244.get() !== null) {
  node6467.attr('width', ref5244.get());
  subs__.addSub(ref5244.addEventListener('change', function(_, ref, val) {
    if(ref === ref5244) {
      node6467.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5244.rebind());

var ref5245 = mobl.ref(mobl.ui.generic.tdStyle);
if(ref5245.get() !== null) {
  node6467.attr('class', ref5245.get());
  subs__.addSub(ref5245.addEventListener('change', function(_, ref, val) {
    if(ref === ref5245) {
      node6467.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5245.rebind());

var nodes12251 = $("<span>");
node6467.append(nodes12251);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2434();
}));

function renderControl2434() {
  subs__.addSub((elements)(function(elements, callback) {
    var root17000 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17000); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12251;
    nodes12251 = node.contents();
    oldNodes.replaceWith(nodes12251);
  }));
}
renderControl2434();
root16999.append(node6467);
callback(root16999); return subs__;


return subs__;
};

mobl.ui.generic.col = function(width, elements, callback) {
var root17001 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6468 = $("<td>");

var ref5246 = width;
if(ref5246.get() !== null) {
  node6468.attr('width', ref5246.get());
  subs__.addSub(ref5246.addEventListener('change', function(_, ref, val) {
    if(ref === ref5246) {
      node6468.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5246.rebind());

var ref5247 = mobl.ref(mobl.ui.generic.tdStyle);
if(ref5247.get() !== null) {
  node6468.attr('class', ref5247.get());
  subs__.addSub(ref5247.addEventListener('change', function(_, ref, val) {
    if(ref === ref5247) {
      node6468.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5247.rebind());

var nodes12252 = $("<span>");
node6468.append(nodes12252);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2435();
}));

function renderControl2435() {
  subs__.addSub((elements)(function(elements, callback) {
    var root17002 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17002); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12252;
    nodes12252 = node.contents();
    oldNodes.replaceWith(nodes12252);
  }));
}
renderControl2435();
root17001.append(node6468);
callback(root17001); return subs__;


return subs__;
};

mobl.ui.generic.headerCol = function(width, elements, callback) {
var root17003 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6469 = $("<td>");

var ref5248 = width;
if(ref5248.get() !== null) {
  node6469.attr('width', ref5248.get());
  subs__.addSub(ref5248.addEventListener('change', function(_, ref, val) {
    if(ref === ref5248) {
      node6469.attr('width', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5248.rebind());

var ref5249 = mobl.ref(mobl.ui.generic.tdStyle);
if(ref5249.get() !== null) {
  node6469.attr('class', ref5249.get());
  subs__.addSub(ref5249.addEventListener('change', function(_, ref, val) {
    if(ref === ref5249) {
      node6469.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5249.rebind());


var node6470 = $("<strong>");

var nodes12253 = $("<span>");
node6470.append(nodes12253);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2436();
}));

function renderControl2436() {
  subs__.addSub((elements)(function(elements, callback) {
    var root17004 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17004); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12253;
    nodes12253 = node.contents();
    oldNodes.replaceWith(nodes12253);
  }));
}
renderControl2436();
node6469.append(node6470);
root17003.append(node6469);
callback(root17003); return subs__;



return subs__;
};

mobl.ui.generic.scroller = function(height, elements, callback) {
var root17005 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6471 = $("<div>");
node6471.attr('class', "scroller");

var nodes12254 = $("<span>");
node6471.append(nodes12254);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2437();
}));

function renderControl2437() {
  subs__.addSub((elements)(function(elements, callback) {
    var root17006 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root17006); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12254;
    nodes12254 = node.contents();
    oldNodes.replaceWith(nodes12254);
  }));
}
renderControl2437();
root17005.append(node6471);
var result__ = mobl.ui.generic.setupScrollers();
callback(root17005); return subs__;


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
}(mobl.ui.generic));