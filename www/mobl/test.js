mobl.provides('mobl.test');
mobl.test.testSuites = mobl.ref([]);
mobl.test.testCases = mobl.ref([]);
mobl.test.testLogs = mobl.ref(new persistence.LocalQueryCollection([]));
mobl.test.currentCaseResult = mobl.ref(null);
mobl.test.caseSetUp = mobl.ref(null);
mobl.test.caseTearDown = mobl.ref(null);
mobl.test.space = mobl.ref(/\s/g);
mobl.test.underscores = mobl.ref("__");
mobl.test.suiteMode = mobl.ref(false);
mobl.test.currentSuite = mobl.ref("");
mobl.test.suiteButtonSymbol = mobl.ref(">>");
mobl.test.testSuite = function(suite, cases) {
   var __this = this;
  var coll3873 = mobl.test.testCases.get();
  var length336 = coll3873.length;
  for(var i2597 = 0; i2597 < length336; i2597++) {
    var description;var block;
    var tmp44853 = coll3873.get(i2597);
    description = tmp44853._1;block = tmp44853._2;
    if(mobl.test.caseSetUp.get()) {
      mobl.test.testSuites.get().push(new mobl.Tuple(suite, description, mobl.test.caseSetUp.get()));
    } else {
      
    }
    mobl.test.testSuites.get().push(new mobl.Tuple(suite, description, block));
    if(mobl.test.caseTearDown.get()) {
      mobl.test.testSuites.get().push(new mobl.Tuple(suite, description, mobl.test.caseTearDown.get()));
    } else {
      
    }
  }
  mobl.test.testCases.get().length = 0;
  mobl.test.caseSetUp.set(null);
  mobl.test.caseTearDown.set(null);
};

mobl.test.testCase = function(description, tests) {
   var __this = this;
  mobl.test.testCases.get().push(new mobl.Tuple(description, tests));
};

mobl.test.setUp = function(block) {
   var __this = this;
  mobl.test.caseSetUp.set(block);
};

mobl.test.tearDown = function(block) {
   var __this = this;
  mobl.test.caseTearDown.set(block);
};

mobl.test.assertEqual = function(expected, actual) {
   var __this = this;
  if(expected == actual) {
    mobl.test.currentCaseResult.get().results.add(mobl.instantiate(mobl.test.type.TestResult, {'success': true}));
  } else {
    mobl.test.currentCaseResult.get().results.add(mobl.instantiate(mobl.test.type.TestResult, {'success': false, 'message': "Expected: " + expected + " Got: " + actual}));
  }
};

mobl.test.assert = function(value) {
   var __this = this;
  mobl.test.currentCaseResult.get().results.add(mobl.instantiate(mobl.test.type.TestResult, {'success': value}));
};

mobl.test.click = function(er, callback) {
  var __this = this;
  function after1187(result__) {
    var tmp44854 = result__;
    if(callback && callback.apply) callback(); return;
  }
  var result__ = er(null, after1187);if(result__ !== undefined) after1187(result__);
};

mobl.test.find = function(property, value, collection, hollow, callback) {
  var __this = this;
  collection.filter(property, "=", value).one(function(result__) {
    var tmp44855 = result__;
    var result__ = tmp44855;
    var item = result__;
    var result__ = hollow != null && item == null;
    if(result__) {
      var result__ = hollow;
      item = result__;
      var result__ = collection.add(item);
      var result__ = item;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    } else {
      {
        var result__ = item;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      }
    }
  });
};

mobl.test.logTestSuite = function(suite, kase, callback) {
  var __this = this;
  mobl.test.find("description", suite, mobl.test.testLogs.get(), mobl.instantiate(mobl.test.type.TestSuiteResult, {'description': suite, 'cases': new persistence.LocalQueryCollection([])}), function(result__) {
    var tmp44856 = result__;
    var result__ = tmp44856;
    var tsr = result__;
    mobl.test.find("description", kase, tsr.cases, mobl.instantiate(mobl.test.type.TestCaseResult, {'description': kase, 'results': new persistence.LocalQueryCollection([]), 'elapsed': 0}), function(result__) {
      var tmp44857 = result__;
      var result__ = tmp44857;
      mobl.test.currentCaseResult.set(result__);
      if(callback && callback.apply) callback(); return;
    });
  });
};

mobl.test.runAllTests = function(callback) {
  var __this = this;
  mobl.test.testLogs.get().destroyAll(function(result__) {
    var tmp44858 = result__;
    var result__ = mobl.test.testSuites.get();
    mobl.test.testSuites.get().list(function(coll3874) {
      coll3874 = coll3874.reverse();
      function processOne1272() {
        var suite;var kase;var runTests;
        var tmp44861 = coll3874.pop();
        suite = tmp44861._1;kase = tmp44861._2;runTests = tmp44861._3;
        mobl.test.logTestSuite(suite, kase, function(result__) {
          var tmp44859 = result__;
          var result__ = mobl.now().getTime();
          var start = result__;
          function after1188(result__) {
            var tmp44860 = result__;
            var result__ = mobl.now().getTime() - start;
            mobl.test.currentCaseResult.get().elapsed = result__;
            
            if(coll3874.length > 0) processOne1272(); else rest1272();
            
          }
          var result__ = runTests(null, after1188);if(result__ !== undefined) after1188(result__);
        });
      }
      function rest1272() {
        if(callback && callback.apply) callback(); return;
      }
      if(coll3874.length > 0) processOne1272(); else rest1272();
    });
    
  });
};

mobl.test.runSuite = function(name, callback) {
  var __this = this;
  mobl.test.testLogs.get().destroyAll(function(result__) {
    var tmp44862 = result__;
    var result__ = mobl.test.testSuites.get();
    mobl.test.testSuites.get().list(function(coll3875) {
      coll3875 = coll3875.reverse();
      function processOne1273() {
        var suite;var kase;var runTests;
        var tmp44865 = coll3875.pop();
        suite = tmp44865._1;kase = tmp44865._2;runTests = tmp44865._3;
        var result__ = suite == name;
        if(result__) {
          mobl.test.logTestSuite(suite, kase, function(result__) {
            var tmp44863 = result__;
            var result__ = mobl.now().getTime();
            var start = result__;
            function after1189(result__) {
              var tmp44864 = result__;
              var result__ = mobl.now().getTime() - start;
              mobl.test.currentCaseResult.get().elapsed = result__;
              
              if(coll3875.length > 0) processOne1273(); else rest1273();
              
            }
            var result__ = runTests(null, after1189);if(result__ !== undefined) after1189(result__);
          });
        } else {
          {
            
            if(coll3875.length > 0) processOne1273(); else rest1273();
            
          }
        }
      }
      function rest1273() {
        if(callback && callback.apply) callback(); return;
      }
      if(coll3875.length > 0) processOne1273(); else rest1273();
    });
    
  });
};


mobl.test.showTestResults = function(results, elements, callback) {
var root22464 = $("<span>");
var subs__ = new mobl.CompSubscription();

var node8731 = mobl.loadingSpan();
root22464.append(node8731);
var list2261;
var listSubs__ = new mobl.CompSubscription();
subs__.addSub(listSubs__);
var renderList2261 = function() {
  var subs__ = listSubs__;
  list2261 = results.get();
  list2261.list(function(results6958) {
    node8731.empty();
    for(var i2598 = 0; i2598 < results6958.length; i2598++) {
      (function() {
        var iternode2261 = $("<span>");
        node8731.append(iternode2261);
        var result;
        result = mobl.ref(mobl.ref(results6958), i2598);
        
        var tmp44833 = mobl.ref(result.get().success ? mobl.test.style.successItemStyle : mobl.test.style.failureItemStyle);
        subs__.addSub(mobl.ref(result, 'success').addEventListener('change', function() {
          tmp44833.set(result.get().success ? mobl.test.style.successItemStyle : mobl.test.style.failureItemStyle);
        }));
        subs__.addSub(mobl.ref(mobl.test.style.successItemStyle).addEventListener('change', function() {
          tmp44833.set(result.get().success ? mobl.test.style.successItemStyle : mobl.test.style.failureItemStyle);
        }));
        subs__.addSub(mobl.ref(mobl.test.style.failureItemStyle).addEventListener('change', function() {
          tmp44833.set(result.get().success ? mobl.test.style.successItemStyle : mobl.test.style.failureItemStyle);
        }));
        
        
        var tmp44836 = mobl.ref(false);
        
        
        var tmp44835 = mobl.ref(null);
        
        
        var tmp44834 = mobl.ref(null);
        
        var nodes16812 = $("<span>");
        iternode2261.append(nodes16812);
        subs__.addSub((mobl.ui.generic.item)(tmp44833, mobl.ref(mobl.ui.generic.itemPushedStyle), tmp44834, tmp44835, tmp44836, function(_, callback) {
          var root22465 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node8732 = $("<span>");
          root22465.append(node8732);
          var condSubs1410 = new mobl.CompSubscription();
          subs__.addSub(condSubs1410);
          var oldValue1410;
          var renderCond1410 = function() {
            var value11515 = result.get().success;
            if(oldValue1410 === value11515) return;
            oldValue1410 = value11515;
            var subs__ = condSubs1410;
            subs__.unsubscribe();
            node8732.empty();
            if(value11515) {
              
              var tmp44823 = mobl.ref("[OK] ");
              
              
              var tmp44825 = mobl.ref(null);
              
              
              var tmp44824 = mobl.ref(null);
              
              var nodes16813 = $("<span>");
              node8732.append(nodes16813);
              subs__.addSub((mobl.label)(tmp44823, tmp44824, tmp44825, function(_, callback) {
                var root22466 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root22466); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes16813;
                nodes16813 = node.contents();
                oldNodes.replaceWith(nodes16813);
              }));
              
              
            } else {
              
              var tmp44826 = mobl.ref("[FAIL] ");
              
              
              var tmp44828 = mobl.ref(null);
              
              
              var tmp44827 = mobl.ref(null);
              
              var nodes16814 = $("<span>");
              node8732.append(nodes16814);
              subs__.addSub((mobl.label)(tmp44826, tmp44827, tmp44828, function(_, callback) {
                var root22467 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root22467); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes16814;
                nodes16814 = node.contents();
                oldNodes.replaceWith(nodes16814);
              }));
              
              var node8733 = $("<span>");
              node8732.append(node8733);
              var condSubs1411 = new mobl.CompSubscription();
              subs__.addSub(condSubs1411);
              var oldValue1411;
              var renderCond1411 = function() {
                var value11516 = result.get().message;
                if(oldValue1411 === value11516) return;
                oldValue1411 = value11516;
                var subs__ = condSubs1411;
                subs__.unsubscribe();
                node8733.empty();
                if(value11516) {
                  
                  var tmp44832 = mobl.ref(null);
                  
                  
                  var tmp44831 = mobl.ref(null);
                  
                  var nodes16815 = $("<span>");
                  node8733.append(nodes16815);
                  subs__.addSub((mobl.ui.generic.block)(mobl.ref(mobl.test.style.descriptionStyle), tmp44831, tmp44832, function(_, callback) {
                    var root22468 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    
                    var tmp44830 = mobl.ref(null);
                    
                    
                    var tmp44829 = mobl.ref(null);
                    
                    var nodes16816 = $("<span>");
                    root22468.append(nodes16816);
                    subs__.addSub((mobl.label)(mobl.ref(result, 'message'), tmp44829, tmp44830, function(_, callback) {
                      var root22469 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root22469); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes16816;
                      nodes16816 = node.contents();
                      oldNodes.replaceWith(nodes16816);
                    }));
                    callback(root22468); return subs__;
                    
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes16815;
                    nodes16815 = node.contents();
                    oldNodes.replaceWith(nodes16815);
                  }));
                  
                  
                } else {
                  
                }
              };
              renderCond1411();
              subs__.addSub(mobl.ref(result, 'message').addEventListener('change', function() {
                renderCond1411();
              }));
              
              
              
              
            }
          };
          renderCond1410();
          subs__.addSub(mobl.ref(result, 'success').addEventListener('change', function() {
            renderCond1410();
          }));
          
          callback(root22465); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes16812;
          nodes16812 = node.contents();
          oldNodes.replaceWith(nodes16812);
        }));
        
        var oldNodes = iternode2261;
        iternode2261 = iternode2261.contents();
        oldNodes.replaceWith(iternode2261);
        
        
      }());
    }
    mobl.delayedUpdateScrollers();
    subs__.addSub(list2261.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2261(true); }));
    subs__.addSub(results.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2261(true); }));
  });
};
renderList2261();

callback(root22464); return subs__;

return subs__;
};

mobl.test.testRunner = function(elements, callback) {
var root22470 = $("<span>");
var subs__ = new mobl.CompSubscription();

var tmp44839 = mobl.ref("Specifications");


var tmp44840 = mobl.ref(null);

var nodes16817 = $("<span>");
root22470.append(nodes16817);
subs__.addSub((mobl.ui.generic.header)(tmp44839, tmp44840, function(_, callback) {
  var root22471 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp44838 = mobl.ref(function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = mobl.test.suiteMode.get();
                       if(result__) {
                         mobl.test.runSuite(mobl.test.currentSuite.get(), function(result__) {
                           var tmp44866 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       } else {
                         {
                           mobl.test.runAllTests(function(result__) {
                             var tmp44867 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
  
  
  var tmp44837 = mobl.ref("Run");
  
  var nodes16818 = $("<span>");
  root22471.append(nodes16818);
  subs__.addSub((mobl.ui.generic.button)(tmp44837, mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp44838, function(_, callback) {
    var root22472 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root22472); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes16818;
    nodes16818 = node.contents();
    oldNodes.replaceWith(nodes16818);
  }));
  callback(root22471); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes16817;
  nodes16817 = node.contents();
  oldNodes.replaceWith(nodes16817);
}));
var nodes16819 = $("<span>");
root22470.append(nodes16819);
subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
  var root22473 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node8734 = mobl.loadingSpan();
  root22473.append(node8734);
  var list2262;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList2262 = function() {
    var subs__ = listSubs__;
    list2262 = mobl.test.testLogs.get();
    list2262.list(function(results6959) {
      node8734.empty();
      for(var i2599 = 0; i2599 < results6959.length; i2599++) {
        (function() {
          var iternode2262 = $("<span>");
          node8734.append(iternode2262);
          var tsr;
          tsr = mobl.ref(mobl.ref(results6959), i2599);
          
          var cases = mobl.ref(tsr.get().cases);
          
          cases.get().count(function(result__) {
            var count = mobl.ref(result__);
            subs__.addSub(cases.addEventListener('change', function() {
              cases.get().count(function(result__) {
                var tmp44868 = result__;
                var result__ = tmp44868;
                count.set(result__);
                
              });
            }));
            
            
            var tsr_id = mobl.ref(tsr.get().description.replace(mobl.test.space.get(), mobl.test.underscores.get()));
            subs__.addSub(mobl.ref(tsr, 'description').addEventListener('change', function() {
              tsr_id.set(tsr.get().description.replace(mobl.test.space.get(), mobl.test.underscores.get()));
            }));
            subs__.addSub(mobl.test.space.addEventListener('change', function() {
              tsr_id.set(tsr.get().description.replace(mobl.test.space.get(), mobl.test.underscores.get()));
            }));
            subs__.addSub(mobl.test.underscores.addEventListener('change', function() {
              tsr_id.set(tsr.get().description.replace(mobl.test.space.get(), mobl.test.underscores.get()));
            }));
            
            
            var tmp44844 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = mobl.$("#" + tsr_id.get()).slideToggle(null);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp44846 = mobl.ref(false);
            
            
            var tmp44845 = mobl.ref(null);
            
            var nodes16820 = $("<span>");
            iternode2262.append(nodes16820);
            subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.test.style.suiteItemStyle), mobl.ref(mobl.test.style.suiteItemStyle), tmp44844, tmp44845, tmp44846, function(_, callback) {
              var root22474 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp44842 = mobl.ref(null);
              
              
              var tmp44841 = mobl.ref(null);
              
              var nodes16821 = $("<span>");
              root22474.append(nodes16821);
              subs__.addSub((mobl.label)(mobl.ref(tsr, 'description'), tmp44841, tmp44842, function(_, callback) {
                var root22475 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root22475); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes16821;
                nodes16821 = node.contents();
                oldNodes.replaceWith(nodes16821);
              }));
              
              var tmp44843 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = !mobl.test.suiteMode.get();
                                   mobl.test.suiteMode.set(result__);
                                   var result__ = mobl.test.suiteMode.get();
                                   if(result__) {
                                     var result__ = "<<";
                                     mobl.test.suiteButtonSymbol.set(result__);
                                     var result__ = tsr.get().description;
                                     mobl.test.currentSuite.set(result__);
                                     mobl.test.runSuite(tsr.get().description, function(result__) {
                                       var tmp44869 = result__;
                                       if(callback && callback.apply) callback(); return;
                                     });
                                   } else {
                                     {
                                       var result__ = ">>";
                                       mobl.test.suiteButtonSymbol.set(result__);
                                       mobl.test.runAllTests(function(result__) {
                                         var tmp44870 = result__;
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                   }
                                 });
              
              var nodes16822 = $("<span>");
              root22474.append(nodes16822);
              subs__.addSub((mobl.label)(mobl.test.suiteButtonSymbol, mobl.ref(mobl.test.style.suiteButtonStyle), tmp44843, function(_, callback) {
                var root22476 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root22476); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes16822;
                nodes16822 = node.contents();
                oldNodes.replaceWith(nodes16822);
              }));
              callback(root22474); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes16820;
              nodes16820 = node.contents();
              oldNodes.replaceWith(nodes16820);
            }));
            
            var node8735 = $("<div>");
            
            var ref6149 = tsr_id;
            if(ref6149.get() !== null) {
              node8735.attr('id', ref6149.get());
              subs__.addSub(ref6149.addEventListener('change', function(_, ref, val) {
                if(ref === ref6149) {
                  node8735.attr('id', val);
                } else {
                  console.log("Garbage!");
                }
              }));
              
            }
            subs__.addSub(ref6149.rebind());
            
            
            var node8736 = mobl.loadingSpan();
            node8735.append(node8736);
            var list2263;
            var listSubs__ = new mobl.CompSubscription();
            subs__.addSub(listSubs__);
            var renderList2263 = function() {
              var subs__ = listSubs__;
              list2263 = cases.get();
              list2263.list(function(results6960) {
                node8736.empty();
                for(var i2600 = 0; i2600 < results6960.length; i2600++) {
                  (function() {
                    var iternode2263 = $("<span>");
                    node8736.append(iternode2263);
                    var tcr;
                    tcr = mobl.ref(mobl.ref(results6960), i2600);
                    
                    var tcr_id = mobl.ref(tcr.get().description.replace(mobl.test.space.get(), mobl.test.underscores.get()));
                    subs__.addSub(mobl.ref(tcr, 'description').addEventListener('change', function() {
                      tcr_id.set(tcr.get().description.replace(mobl.test.space.get(), mobl.test.underscores.get()));
                    }));
                    subs__.addSub(mobl.test.space.addEventListener('change', function() {
                      tcr_id.set(tcr.get().description.replace(mobl.test.space.get(), mobl.test.underscores.get()));
                    }));
                    subs__.addSub(mobl.test.underscores.addEventListener('change', function() {
                      tcr_id.set(tcr.get().description.replace(mobl.test.space.get(), mobl.test.underscores.get()));
                    }));
                    
                    
                    var tmp44850 = mobl.ref(function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = mobl.$("#" + tcr_id.get()).slideToggle(null);
                                         if(callback && callback.apply) callback(); return;
                                       });
                    
                    
                    var tmp44852 = mobl.ref(false);
                    
                    
                    var tmp44851 = mobl.ref(null);
                    
                    var nodes16823 = $("<span>");
                    iternode2263.append(nodes16823);
                    subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.test.style.caseItemStyle), mobl.ref(mobl.test.style.caseItemStyle), tmp44850, tmp44851, tmp44852, function(_, callback) {
                      var root22477 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      
                      var tmp44847 = mobl.ref(tcr.get().description + " (" + tcr.get().elapsed + " ms)");
                      subs__.addSub(mobl.ref(tcr, 'description').addEventListener('change', function() {
                        tmp44847.set(tcr.get().description + " (" + tcr.get().elapsed + " ms)");
                      }));
                      subs__.addSub(mobl.ref(tcr, 'elapsed').addEventListener('change', function() {
                        tmp44847.set(tcr.get().description + " (" + tcr.get().elapsed + " ms)");
                      }));
                      
                      
                      var tmp44849 = mobl.ref(null);
                      
                      
                      var tmp44848 = mobl.ref(null);
                      
                      var nodes16824 = $("<span>");
                      root22477.append(nodes16824);
                      subs__.addSub((mobl.label)(tmp44847, tmp44848, tmp44849, function(_, callback) {
                        var root22478 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root22478); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes16824;
                        nodes16824 = node.contents();
                        oldNodes.replaceWith(nodes16824);
                      }));
                      callback(root22477); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes16823;
                      nodes16823 = node.contents();
                      oldNodes.replaceWith(nodes16823);
                    }));
                    
                    var node8737 = $("<div>");
                    
                    var ref6148 = tcr_id;
                    if(ref6148.get() !== null) {
                      node8737.attr('id', ref6148.get());
                      subs__.addSub(ref6148.addEventListener('change', function(_, ref, val) {
                        if(ref === ref6148) {
                          node8737.attr('id', val);
                        } else {
                          console.log("Garbage!");
                        }
                      }));
                      
                    }
                    subs__.addSub(ref6148.rebind());
                    
                    var nodes16825 = $("<span>");
                    node8737.append(nodes16825);
                    subs__.addSub((mobl.test.showTestResults)(mobl.ref(tcr, 'results'), function(_, callback) {
                      var root22479 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root22479); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes16825;
                      nodes16825 = node.contents();
                      oldNodes.replaceWith(nodes16825);
                    }));
                    iternode2263.append(node8737);
                    
                    var oldNodes = iternode2263;
                    iternode2263 = iternode2263.contents();
                    oldNodes.replaceWith(iternode2263);
                    
                    
                    
                    
                  }());
                }
                mobl.delayedUpdateScrollers();
                subs__.addSub(list2263.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2263(true); }));
                subs__.addSub(cases.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2263(true); }));
              });
            };
            renderList2263();
            
            iternode2262.append(node8735);
            
            var oldNodes = iternode2262;
            iternode2262 = iternode2262.contents();
            oldNodes.replaceWith(iternode2262);
            
            
            
            
          });
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list2262.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2262(true); }));
      subs__.addSub(mobl.test.testLogs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2262(true); }));
    });
  };
  renderList2262();
  
  callback(root22473); return subs__;
  
  return subs__;
}, function(node) {
  var oldNodes = nodes16819;
  nodes16819 = node.contents();
  oldNodes.replaceWith(nodes16819);
}));
mobl.test.runAllTests(function(result__) {
  var tmp44871 = result__;
  
});
callback(root22470); return subs__;



return subs__;
};
