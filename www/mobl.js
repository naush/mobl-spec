mobl.provides('mobl');
mobl.mergeStyles = function(styles) {
   var __this = this;
  var styleString = styles.join(" ");
  
  return styleString;
};

(function(__ns) {
__ns.isIphone = function() {
                  return !!navigator.userAgent.match(/iPhone/i) || !!navigator.userAgent.match(/iPod/i);
                };
__ns.isIpad = function() {
                return !!navigator.userAgent.match(/iPad/i);
              };
__ns.isAndroid = function() {
                   return !!navigator.userAgent.match(/Android/i);
                 };
__ns.isLandscape = function() {
                     return window.innerHeight < window.innerWidth;
                   };
__ns.isPortrait = function() {
                    return window.innerHeight >= window.innerWidth;
                  };
__ns.isTouchDevice = function() {
                       return 'ontouchstart' in document.documentElement;
                     };
}(mobl));
mobl.label = function(s, style, onclick, elements, callback) {
var root16647 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6273 = $("<span>");

var ref5029 = s;
node6273.text(""+ref5029.get());
var ignore1041 = false;
subs__.addSub(ref5029.addEventListener('change', function(_, ref, val) {
  if(ignore1041) return;
  node6273.text(""+val);
}));
subs__.addSub(ref5029.rebind());


var ref5030 = style;
if(ref5030.get() !== null) {
  node6273.attr('class', ref5030.get());
  subs__.addSub(ref5030.addEventListener('change', function(_, ref, val) {
    if(ref === ref5030) {
      node6273.attr('class', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5030.rebind());

var val2644 = onclick.get();
if(val2644 !== null) {
  subs__.addSub(mobl.domBind(node6273, 'tap', val2644));
}

root16647.append(node6273);
callback(root16647); return subs__;

return subs__;
};

mobl.link = function(url, target, elements, callback) {
var root16648 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6274 = $("<a>");

var ref5031 = url;
if(ref5031.get() !== null) {
  node6274.attr('href', ref5031.get());
  subs__.addSub(ref5031.addEventListener('change', function(_, ref, val) {
    if(ref === ref5031) {
      node6274.attr('href', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5031.rebind());

var ref5032 = target;
if(ref5032.get() !== null) {
  node6274.attr('target', ref5032.get());
  subs__.addSub(ref5032.addEventListener('change', function(_, ref, val) {
    if(ref === ref5032) {
      node6274.attr('target', val);
    } else {
      console.log("Garbage!");
    }
  }));
  
}
subs__.addSub(ref5032.rebind());

var nodes12023 = $("<span>");
node6274.append(nodes12023);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2344();
}));

function renderControl2344() {
  subs__.addSub((elements)(function(elements, callback) {
    var root16649 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16649); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12023;
    nodes12023 = node.contents();
    oldNodes.replaceWith(nodes12023);
  }));
}
renderControl2344();
root16648.append(node6274);
callback(root16648); return subs__;


return subs__;
};

mobl.screenContext = function(elements, callback) {
var root16650 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node6275 = $("<div>");
node6275.attr('class', "screenContext");
node6275.attr('style', "position: relative;");


var node6276 = $("<div>");
node6276.attr('class', "initialElements");

var nodes12024 = $("<span>");
node6276.append(nodes12024);
subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
  renderControl2345();
}));

function renderControl2345() {
  subs__.addSub((elements)(function(elements, callback) {
    var root16651 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root16651); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes12024;
    nodes12024 = node.contents();
    oldNodes.replaceWith(nodes12024);
  }));
}
renderControl2345();
node6275.append(node6276);
root16650.append(node6275);
callback(root16650); return subs__;



return subs__;
};
(function(__ns) {
var argspec = persistence.argspec;
mobl.$ = jQuery;
__ns.sleep = function(time, callback) {
               setTimeout(callback, time);
             };
__ns.Dynamic = {
               };
mobl.repeat = function(time, callback) {
                setInterval(callback, time);
              };
mobl.alert = function(s) {
               alert(s);
             };
mobl.log = function(s, _, callback) {
             console.log(s);
             if(callback)
             callback();
           };
__ns.parseNum = function(s) {
                  return parseInt(s, 10);
                };
__ns.escape = function(s) {
                return escape(s);
              };
__ns.add = function(e) {
             var allEnt = persistence.define(e._type).all();
             allEnt.add(e);
           };
mobl.now = function() {
             return new Date();
           };
mobl.remove = function(e) {
                persistence.remove(e);
                var allEnt = persistence.define(e._type).all();
                allEnt.triggerEvent('remove', allEnt, e);
                allEnt.triggerEvent('change', allEnt, e);
              };
mobl.flushDatabase = function(callback) {
                       persistence.flush(callback);
                     };
mobl.resetDatabase = function(callback) {
                       persistence.reset(function() {
                                           persistence.schemaSync(callback);
                                         });
                     };
mobl.reload = function() {
                persistence.flush(function() {
                                    window.location.reload();
                                  });
              };
mobl.openUrl = function(url) {
                 location = url;
               };
mobl.random = function(max) {
                return Math.round(Math.random() * max);
              };
persistence.QueryCollection.prototype.updates = function() {
                                                  this.triggerEvent('change', this);
                                                };
mobl.DateTime = {
                  parse: function(s) {
                           return new Date(Date.parse(s));
                         },
                  fromTimestamp: function(timestamp) {
                                   return new Date(timestamp);
                                 },
                  create: function(year, month, day, hour, minute, second, ms) {
                            return new Date(year,month,day,hour,minute,second,ms);
                          }
                };
Date.prototype.toDateString = function() {
                                return "" + ( this.getMonth() + 1 ) + "/" + this.getDate() + "/" + this.getFullYear();
                              };
mobl.Math = Math;
mobl.Math.pi = function() {
                 return Math.PI;
               };
mobl.Math.isNaN = function(n) {
                    return isNaN(n);
                  };
mobl.JSON = JSON;
mobl.formatDate = function(date) {
                    var diff = (( (new Date()).getTime() - date.getTime() ) / 1000);
                    var day_diff = Math.floor(diff / 86400);
                    if(isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
                    return;
                    return day_diff === 0 && ( diff < 60 && "just now" || diff < 120 && "1 minute ago" || diff < 3600 && Math.floor(diff / 60) + " minutes ago" || diff < 7200 && "1 hour ago" || diff < 86400 && Math.floor(diff / 3600) + " hours ago" ) || day_diff === 1 && "Yesterday" || day_diff < 7 && day_diff + " days ago" || day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
                  };
mobl.range = function(from, to) {
               var ar = [];
               for(var i = from; i < to; i++)
               {
                 ar.push(i);
               }
               return ar;
             };
mobl.html = function(html, elements, callback) {
              var root192 = $("<span>");
              var node180 = $("<span >");
              var ref108 = html;
              node180.html(html.get().toString());
              var ignore51 = false;
              ref108.addEventListener('change', function(_, ref, val) {
                                                  if(ignore51)
                                                  return;
                                                  if(ref === ref108)
                                                  {
                                                    node180.html(val.toString());
                                                  }
                                                });
              ref108.rebind();
              root192.append(node180);
              callback(root192);
              return;
            };
persistence.entityDecoratorHooks.push(function(Entity) {
                                        Entity.searchPrefix = function(query) {
                                                                return Entity.search(query, true);
                                                              };
                                      });
Array.prototype.list = function(tx, callback) {
                         var args = argspec.getArgs(arguments, [{
                                                                  name: 'tx',
                                                                  optional: true,
                                                                  check: function(obj) {
                                                                           return tx.executeSql;
                                                                         }
                                                                },{
                                                                    name: 'callback',
                                                                    optional: false,
                                                                    check: argspec.isCallback()
                                                                  }]);
                         tx = args.tx;
                         callback = args.callback;
                         var valueCopy = [];
                         for(var i = 0; i < this.length; i++)
                         {
                           valueCopy[i] = this[i];
                         }
                         callback(valueCopy);
                       };
Array.prototype.insert = function(idx, item) {
                           this.splice(idx, 0, item);
                         };
Array.prototype.get = function(idx) {
                        return this[idx];
                      };
Array.prototype.one = function(callback) {
                        if(this.length === 0)
                        {
                          callback(null);
                        }
                        else
                        {
                          callback(this[0]);
                        }
                      };
Array.prototype.contains = function(el) {
                             for(var i = 0; i < this.length; i++)
                             {
                               if(this[i] === el)
                               {
                                 return true;
                               }
                             }
                             return false;
                           };
Array.prototype.remove = function(el) {
                           for(var i = 0; i < this.length; i++)
                           {
                             if(this[i] === el)
                             {
                               this.splice(i, 1);
                               return;
                             }
                           }
                         };
Array.prototype.addEventListener = function() {
                                   };
mobl.dummyMapper = function(data, callback) {
                     callback(data);
                   };
mobl.Map = function() {
             this.data = {
                         };
           };
mobl.Map.prototype.set = function(k, v) {
                           this.data[k] = v;
                         };
mobl.Map.prototype.get = function(k) {
                           return this.data[k];
                         };
mobl.Map.prototype.keys = function() {
                            var keys = [];
                            for(var p in this.data)
                            {
                              if(this.data.hasOwnProperty(p))
                              {
                                keys.push(p);
                              }
                            }
                            return keys;
                          };
mobl.screenStack = [ ];
mobl.innerHeight = false;
setTimeout(function() {
             if(mobl.isAndroid)
             {
               mobl.innerHeight = window.innerHeight;
             }
           }, 200);
function updateScrollers ( ) {
  var scrollwrappers = $("div#scrollwrapper");
  if(scrollwrappers.length > 0)
  {
    var height = mobl.innerHeight?mobl.innerHeight:window.innerHeight;
    height -= $("#footer:visible").height();
    height -= $("#tabbar:visible").height();
    scrollwrappers.height(height);
  }
  var scrollers = $("div#scrollwrapper div#content");
  for(var i = 0; i < scrollers.length; i++)
  {
    var scroller = scrollers.eq(i).data("scroller");
    if(scroller)
    {
      scroller.refresh();
    }
    else
    {
    }
  }
}
mobl.delayedUpdateScrollers = function() {
                                setTimeout(updateScrollers, 200);
                              };
if(!mobl.isAndroid)
{
  $(window).resize(updateScrollers);
}
$(function() {
    setInterval(function() {
                  persistence.flush();
                  if(persistence.saveToLocalStorage)
                  {
                    persistence.saveToLocalStorage();
                  }
                }, 2500);
  });
mobl.postCallHooks = [ ];
mobl.contextStack = [ ];
if(mobl.contextStack.length === 0)
{
  mobl.contextStack.push([{
                            screens: [],
                            dom: null
                          }]);
}
mobl.findDeepestVisibleContext = function() {
                                   var idx = mobl.contextStack.length - 1;
                                   while ( idx >= 0 )
                                   {
                                     var top = mobl.contextStack[idx];
                                     for(var i = 0; i < top.length; i++)
                                     {
                                       if(!top[i].dom)
                                       {
                                         top[i].dom = $("body");
                                       }
                                       if(top[i].dom.is(':visible'))
                                       {
                                         return top[i];
                                       }
                                     }
                                     idx--;
                                   }
                                 };
var TRANSITION_SPEED = 150;
mobl.call = function(screenName, args, callback) {
              var screenFrame = {
                                  name: screenName,
                                  args: args,
                                  callback: callback,
                                  div: screenName.replace(/\./g, '__'),
                                  dom: null
                                };
              var screenContext = mobl.findDeepestVisibleContext();
              screenContext.screens.push(screenFrame);
              var callbackFn = function() {
                                 subs.unsubscribe();
                                 screenContext.screens.pop();
                                 if(screenFrame.dom.find("div.screenContext").length > 0)
                                 {
                                   mobl.contextStack.pop();
                                 }
                                 mobl.delayedUpdateScrollers();
                                 if(screenContext.screens.length > 0)
                                 {
                                   var previousScreen = screenContext.screens[screenContext.screens.length - 1];
                                   previousScreen.dom.show('slide', {
                                                                      direction: 'left'
                                                                    }, TRANSITION_SPEED);
                                   scrollTo(0, previousScreen.pageYOffset);
                                 }
                                 else
                                 {
                                   screenContext.initialElements.show('slide', {
                                                                                 direction: 'left'
                                                                               }, TRANSITION_SPEED);
                                 }
                                 screenFrame.dom.hide('slide', {
                                                                 direction: 'right'
                                                               }, TRANSITION_SPEED, function() {
                                                                                      screenFrame.dom.remove();
                                                                                    });
                                 if(callback)
                                 {
                                   callback.apply(null, arguments);
                                 }
                               };
              var parts = screenName.split('.');
              var current = window;
              for(var i = 0; i < parts.length; i++)
              {
                current = current[parts[i]];
              }
              var screenTemplate = current;
              var subs = screenTemplate.apply(null, args.concat([function(node) {
                                                                   node.attr('id', screenFrame.div);
                                                                   node.css('position', 'absolute').css('top', '0').css('left', '0').css('width', '100%');
                                                                   screenFrame.dom = node;
                                                                   if(screenContext.screens.length > 1)
                                                                   {
                                                                     var previousScreen = screenContext.screens[screenContext.screens.length - 2];
                                                                     previousScreen.pageYOffset = window.pageYOffset;
                                                                     node.hide();
                                                                     node.prependTo(screenContext.dom);
                                                                     node.show('slide', {
                                                                                          direction: 'right'
                                                                                        }, TRANSITION_SPEED);
                                                                     previousScreen.dom.hide('slide', {
                                                                                                        direction: 'left'
                                                                                                      }, TRANSITION_SPEED);
                                                                     scrollTo(0, 0);
                                                                   }
                                                                   else
                                                                   {
                                                                     if(screenContext.dom.selector === 'body')
                                                                     {
                                                                       screenContext.initialElements = screenContext.dom.find("div.initialElements");
                                                                       node.prependTo(screenContext.dom);
                                                                       node.show();
                                                                       screenContext.initialElements.hide();
                                                                     }
                                                                     else
                                                                     {
                                                                       screenContext.initialElements = screenContext.dom.find("div.initialElements");
                                                                       node.hide();
                                                                       node.prependTo(screenContext.dom);
                                                                       node.show('slide', {
                                                                                            direction: 'right'
                                                                                          }, TRANSITION_SPEED);
                                                                       screenContext.initialElements.hide('slide', {
                                                                                                                     direction: 'left'
                                                                                                                   }, TRANSITION_SPEED);
                                                                       scrollTo(0, 0);
                                                                     }
                                                                   }
                                                                   var localScreenContexts = node.find("div.screenContext");
                                                                   if(localScreenContexts.length > 0)
                                                                   {
                                                                     var ar = [];
                                                                     for(var i = 0; i < localScreenContexts.length; i++)
                                                                     {
                                                                       ar.push({
                                                                                 screens: [],
                                                                                 dom: localScreenContexts.eq(i)
                                                                               });
                                                                     }
                                                                     mobl.contextStack.push(ar);
                                                                   }
                                                                   mobl.postCallHooks.forEach(function(fn) {
                                                                                                fn(node);
                                                                                              });
                                                                   $(function() {
                                                                       var scrollers = $("div#scrollwrapper div#content");
                                                                       var i = 0;
                                                                       if(scrollers.length > 0)
                                                                       {
                                                                         for(i = 0; i < scrollers.length; i++)
                                                                         {
                                                                           if(!scrollers.eq(i).data("scroller"))
                                                                           {
                                                                             scrollers.eq(i).data("scroller", new iScroll(scrollers.get(i),'y'));
                                                                           }
                                                                         }
                                                                         mobl.delayedUpdateScrollers();
                                                                       }
                                                                     });
                                                                 },callbackFn]));
            };
mobl.ref = function(e, property) {
             return new mobl.Reference(e,property);
           };
function fromScope ( that , prop ) {
  if(prop)
  {
    return $(that).scope().get(prop);
  }
  else
  {
    return $(that).scope();
  }
}
mobl.stringTomobl__Num = function(s) {
                           return parseFloat(s, 10);
                         };
mobl.stringTomobl__String = function(s) {
                              return s;
                            };
mobl.conditionalDef = function(oldDef, condFn, newDef) {
                        return function() {
                                 if(condFn())
                                 {
                                   return newDef.apply(null, arguments);
                                 }
                                 else
                                 {
                                   return oldDef.apply(null, arguments);
                                 }
                               };
                      };
mobl.stringTomobl__DateTime = function(s) {
                                return new Date(s);
                              };
mobl.encodeUrlObj = function(obj) {
                      var parts = [];
                      for(var k in obj)
                      {
                        if(obj.hasOwnProperty(k))
                        {
                          parts.push(encodeURI(k) + "=" + encodeURI(obj[k]));
                        }
                      }
                      return "?" + parts.join("&");
                    };
function op ( operator , e1 , e2 , callback ) {
  switch(operator) {
    case '+':
      callback(e1 + e2);
      break;
    case '-':
      callback(e1 - e2);
      break;
    case '*':
      callback(e1 * e2);
      break;
    case '/':
      callback(e1 / e2);
      break;
    case '%':
      callback(e1 % e2);
      break;
    }
}
mobl.proxyUrl = function(url, user, password) {
                  if(user && password)
                  {
                    return '/proxy.php?user=' + user + '&pwd=' + password + '&proxy_url=' + encodeURIComponent(url);
                  }
                  else
                  {
                    return '/proxy.php?proxy_url=' + encodeURIComponent(url);
                  }
                };
mobl.remoteCollection = function(uri, datatype, processor) {
                          return {
                                   addEventListener: function() {
                                                     },
                                   list: function(_, callback) {
                                           $.ajax({
                                                    url: mobl.proxyUrl(uri),
                                                    datatype: datatype,
                                                    error: function(_, message, error) {
                                                             console.log(message);
                                                             console.log(error);
                                                             callback([]);
                                                           },
                                                    success: function(data) {
                                                               callback(processor(data));
                                                             }
                                                  });
                                         }
                                 };
                        };
mobl.instantiate = function(sup, props) {
                     var obj = {
                               };
                     for(var p in sup)
                     {
                       if(sup.hasOwnProperty(p))
                       {
                         obj[p] = sup[p];
                       }
                     }
                     for(var p in props)
                     {
                       if(props.hasOwnProperty(p))
                       {
                         obj[p] = props[p];
                       }
                     }
                     return new mobl.ObservableObject(obj);
                   };
mobl.ObservableObject = function(props) {
                          this._data = props;
                          this.subscribers = {
                                             };
                          var that = this;
                          for(var property in props)
                          {
                            if(props.hasOwnProperty(property))
                            {
                              (function() {
                                 var p = property;
                                 that.__defineGetter__(p, function() {
                                                            return that._data[p];
                                                          });
                                 that.__defineSetter__(p, function(val) {
                                                            that._data[p] = val;
                                                            that.triggerEvent('change', that, p, val);
                                                          });
                               }());
                            }
                          }
                        };
mobl.ObservableObject.prototype = new persistence.Observable ( );
mobl.ObservableObject.prototype.toJSON = function() {
                                           var obj = {
                                                     };
                                           for(var p in this._data)
                                           {
                                             if(this._data.hasOwnProperty(p))
                                             {
                                               obj[p] = this._data[p];
                                             }
                                           }
                                           return obj;
                                         };
function log ( s ) {
  console.log(s);
}
mobl.implementInterface = function(sourceModule, targetModule, items) {
                            for(var i = 0; i < items.length; i++)
                            {
                              targetModule[items[i]] = sourceModule[items[i]];
                            }
                          };
(function() {
   function Tuple ( ) {
     for(var i = 0; i < arguments.length; i++)
     {
       this['_' + ( i + 1 )] = arguments[i];
     }
     this.subscribers = {
                        };
     this.length = arguments.length;
   }
   Tuple.prototype = new persistence.Observable ( );
   Tuple.prototype.toJSON = function() {
                              var obj = {
                                        };
                              for(var i = 0; i < this.length; i++)
                              {
                                obj['_' + ( i + 1 )] = this['_' + ( i + 1 )];
                              }
                              return obj;
                            };
   function CompSubscription ( name ) {
     this.subscriptions = [ ];
     this.name = name;
   }
   CompSubscription.prototype.addSub = function(sub) {
                                         if(sub)
                                         {
                                           this.subscriptions.push(sub);
                                         }
                                       };
   CompSubscription.prototype.unsubscribe = function() {
                                              this.subscriptions.forEach(function(sub) {
                                                                           sub.unsubscribe();
                                                                         });
                                              this.subscriptions = [ ];
                                            };
   function DomSubscription ( node , eventType , fn ) {
     this.node = node;
     this.eventType = eventType;
     this.fn = fn;
   }
   DomSubscription.prototype.unsubscribe = function() {
                                             this.node.unbind(this.eventType, this.fn);
                                           };
   mobl.domBind = function(node, eventType, fn) {
                    node.bind(eventType, fn);
                    return new DomSubscription(node,eventType,fn);
                  };
   function Reference ( ref , prop ) {
     this.ref = ref;
     this.prop = prop;
     this.childRefs = [ ];
     if(prop)
     {
       ref.childRefs.push(this);
     }
     this.subscribers = {
                        };
   }
   Reference.prototype = new persistence.Observable ( );
   Reference.prototype.oldAddListener = Reference.prototype.addEventListener;
   Reference.prototype.addEventListener = function(eventType, callback) {
                                            if(eventType === 'change' && this.prop !== undefined && this.ref.get() && this.ref.get().addEventListener)
                                            {
                                              var that = this;
                                              var subs = new CompSubscription();
                                              subs.addSub(this.ref.get().addEventListener('change', function(_, _, prop, value) {
                                                                                                      if(prop === that.prop)
                                                                                                      {
                                                                                                        callback(eventType, that, value);
                                                                                                      }
                                                                                                    }));
                                              subs.addSub(this.oldAddListener(eventType, callback));
                                              return subs;
                                            }
                                            else
                                            {
                                              return this.oldAddListener(eventType, callback);
                                            }
                                          };
   Reference.prototype.addSetListener = function(callback) {
                                          var that = this;
                                          if(this.ref.addEventListener)
                                          {
                                            return this.ref.addEventListener('change', function(_, _, prop, value) {
                                                                                         if(prop === that.prop)
                                                                                         {
                                                                                           callback(eventType, that, value);
                                                                                         }
                                                                                       });
                                          }
                                        };
   Reference.prototype.get = function() {
                               if(this.prop === undefined)
                               {
                                 return this.ref;
                               }
                               if(this.ref.get)
                               {
                                 return this.ref.get()[this.prop];
                               }
                             };
   Reference.prototype.set = function(value) {
                               if(this.prop === undefined)
                               {
                                 this.ref = value;
                                 this.triggerEvent('change', this, value);
                               }
                               else
                               {
                                 this.ref.get()[this.prop] = value;
                                 this.triggerEvent('change', this, value);
                               }
                               for(var i = 0; i < this.childRefs.length; i++)
                               {
                                 var childRef = this.childRefs[i];
                                 childRef.rebind();
                                 childRef.triggerEvent('change', childRef, childRef.get());
                               }
                             };
   Reference.prototype.rebind = function() {
                                  var that = this;
                                  var subs = new mobl.CompSubscription();
                                  if(this.prop !== undefined)
                                  {
                                    if(this.ref.get().addEventListener)
                                    {
                                      subs.addSub(this.ref.get().addEventListener('change', function(_, _, prop, value) {
                                                                                              if(prop === that.prop)
                                                                                              {
                                                                                                that.triggerEvent('change', that, value);
                                                                                              }
                                                                                            }));
                                    }
                                    else
                                    {
                                    }
                                  }
                                  for(var i = 0; i < this.childRefs.length; i++)
                                  {
                                    subs.addSub(this.childRefs[i].rebind(value[this.childRefs[i].prop]));
                                  }
                                  return subs;
                                };
   mobl.Tuple = Tuple;
   mobl.Reference = Reference;
   mobl.CompSubscription = CompSubscription;
 }());
}(mobl));
mobl.Window = {
innerWidth: null,
innerHeight: null
};
mobl.window = mobl.ref(mobl.instantiate(mobl.Window, {}));
(function(__ns) {
__ns.window.get().innerWidth = window.innerWidth;
__ns.window.get().innerHeight = window.innerHeight;
window.onresize = function() {
                    mobl.window.get().innerWidth = window.innerWidth;
                    mobl.window.get().innerHeight = window.innerHeight;
                  };
}(mobl));