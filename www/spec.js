mobl.provides('spec');
spec.er = mobl.ref(function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = mobl.add(new models.stars.Star({'name': "Mars"}));
                               if(callback && callback.apply) callback(); return;
                             });
spec.sum = function(a, b) {
   var __this = this;
  a + b;
};


spec.root = function(callback, screenCallback) {
var root22480 = $("<div>");
var subs__ = new mobl.CompSubscription();
var nodes16826 = $("<span>");
root22480.append(nodes16826);
subs__.addSub((mobl.test.testRunner)(function(_, callback) {
  var root22481 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  callback(root22481); return subs__;
  return subs__;
}, function(node) {
  var oldNodes = nodes16826;
  nodes16826 = node.contents();
  oldNodes.replaceWith(nodes16826);
}));
callback(root22480); return subs__;

return subs__;
};
var result__ = mobl.test.testSuite("math", [mobl.test.setUp(function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("round up", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(2, mobl.Math.round(1.5));
                                                     var result__ = mobl.test.assertEqual(2, mobl.Math.round(1.6));
                                                     var result__ = mobl.test.assertEqual(2, mobl.Math.round(1.7));
                                                     var result__ = mobl.test.assertEqual(2, mobl.Math.round(1.8));
                                                     var result__ = mobl.test.assertEqual(2, mobl.Math.round(1.9));
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("round down", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(1, mobl.Math.round(1.4));
                                                     var result__ = mobl.test.assertEqual(1, mobl.Math.round(1.3));
                                                     var result__ = mobl.test.assertEqual(1, mobl.Math.round(1.2));
                                                     var result__ = mobl.test.assertEqual(1, mobl.Math.round(1.1));
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("absolute", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(0, mobl.Math.abs(0));
                                                     var result__ = mobl.test.assertEqual(1, mobl.Math.abs(-1));
                                                     var result__ = mobl.test.assertEqual(1, mobl.Math.abs(1));
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.tearDown(function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     if(callback && callback.apply) callback(); return;
                                                   })]);
var result__ = mobl.test.testSuite("number", [mobl.test.testCase("float comparison", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(true, 0.1 == 0.1);
                                                     var result__ = mobl.test.assertEqual(false, 0.1 == 0.2);
                                                     var result__ = mobl.test.assertEqual(true, 0.1 < 0.2);
                                                     var result__ = mobl.test.assertEqual(false, 0.1 > 0.2);
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("float and integer comparison", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(true, 1 == 1.0);
                                                     var result__ = mobl.test.assertEqual(false, 1 == 2.0);
                                                     var result__ = mobl.test.assertEqual(true, 1 < 2.0);
                                                     var result__ = mobl.test.assertEqual(false, 1 > 2.0);
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("toString", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = 1;
                                                     var num = result__;
                                                     var result__ = mobl.test.assertEqual(true, "1" == num.toString());
                                                     var result__ = mobl.test.assertEqual(false, "2" == num.toString());
                                                     if(callback && callback.apply) callback(); return;
                                                   })]);
var result__ = mobl.test.testSuite("callback", [mobl.test.setUp(function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     models.stars.Star.all().destroyAll(function(result__) {
                                                       var tmp44872 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("click button once", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     mobl.test.click(spec.er.get(), function(result__) {
                                                       var tmp44873 = result__;
                                                       models.stars.Star.all().count(function(result__) {
                                                         var tmp44874 = result__;
                                                         var result__ = tmp44874;
                                                         var count = result__;
                                                         var result__ = mobl.test.assertEqual(1, count);
                                                         if(callback && callback.apply) callback(); return;
                                                       });
                                                     });
                                                   }), mobl.test.testCase("click button twice", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     mobl.test.click(spec.er.get(), function(result__) {
                                                       var tmp44875 = result__;
                                                       mobl.test.click(spec.er.get(), function(result__) {
                                                         var tmp44876 = result__;
                                                         models.stars.Star.all().count(function(result__) {
                                                           var tmp44877 = result__;
                                                           var result__ = tmp44877;
                                                           var count = result__;
                                                           var result__ = mobl.test.assertEqual(2, count);
                                                           if(callback && callback.apply) callback(); return;
                                                         });
                                                       });
                                                     });
                                                   })]);
var result__ = mobl.test.testSuite("collection", [mobl.test.setUp(function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     models.stars.Star.all().destroyAll(function(result__) {
                                                       var tmp44878 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("count", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = [1, 2, 3];
                                                     [1, 2, 3].list(function(coll3876) {
                                                       coll3876 = coll3876.reverse();
                                                       function processOne1274() {
                                                         var number;
                                                         number = coll3876.pop();
                                                         var result__ = mobl.add(new models.stars.Star({'name': "Nova"}));
                                                         models.stars.Star.all().count(function(result__) {
                                                           var tmp44879 = result__;
                                                           var result__ = tmp44879;
                                                           var count = result__;
                                                           var result__ = mobl.test.assertEqual(number, count);
                                                           
                                                           if(coll3876.length > 0) processOne1274(); else rest1274();
                                                           
                                                         });
                                                       }
                                                       function rest1274() {
                                                         if(callback && callback.apply) callback(); return;
                                                       }
                                                       if(coll3876.length > 0) processOne1274(); else rest1274();
                                                     });
                                                     
                                                   }), mobl.test.testCase("all", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.add(new models.stars.Star({'name': "Mars"}));
                                                     var result__ = mobl.add(new models.stars.Star({'name': "Jupiter"}));
                                                     var result__ = mobl.add(new models.stars.Star({'name': "Mercury"}));
                                                     models.stars.Star.all().count(function(result__) {
                                                       var tmp44880 = result__;
                                                       var result__ = tmp44880;
                                                       var count = result__;
                                                       var result__ = mobl.test.assertEqual(3, count);
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("find by", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = new models.stars.Star({'name': "Mars"});
                                                     var mars = result__;
                                                     var result__ = mobl.add(mars);
                                                     models.stars.Star.findBy("name", "Mars", function(result__) {
                                                       var tmp44882 = result__;
                                                       var result__ = mobl.test.assertEqual(mars, tmp44882);
                                                       var tmp44881 = result__;
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   }), mobl.test.testCase("add", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.add(new models.stars.Star({'name': "Mars"}));
                                                     models.stars.Star.all().count(function(result__) {
                                                       var tmp44883 = result__;
                                                       var result__ = tmp44883;
                                                       var count = result__;
                                                       models.stars.Star.all().one(function(result__) {
                                                         var tmp44885 = result__;
                                                         var result__ = tmp44885.name;
                                                         var tmp44884 = result__;
                                                         var result__ = tmp44884;
                                                         var name = result__;
                                                         var result__ = mobl.test.assertEqual(1, count);
                                                         var result__ = mobl.test.assertEqual("Mars", name);
                                                         if(callback && callback.apply) callback(); return;
                                                       });
                                                     });
                                                   }), mobl.test.testCase("remove", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = new models.stars.Star({'name': "Mars"});
                                                     var star = result__;
                                                     var result__ = mobl.add(star);
                                                     models.stars.Star.all().count(function(result__) {
                                                       var tmp44886 = result__;
                                                       var result__ = tmp44886;
                                                       var count = result__;
                                                       var result__ = mobl.test.assertEqual(1, count);
                                                       var result__ = mobl.remove(star);
                                                       models.stars.Star.all().count(function(result__) {
                                                         var tmp44887 = result__;
                                                         var result__ = tmp44887;
                                                         count = result__;
                                                         var result__ = mobl.test.assertEqual(0, count);
                                                         if(callback && callback.apply) callback(); return;
                                                       });
                                                     });
                                                   }), mobl.test.testCase("destroy all", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = new models.stars.Star({'name': "Mars"});
                                                     var star = result__;
                                                     var result__ = mobl.add(star);
                                                     models.stars.Star.all().count(function(result__) {
                                                       var tmp44888 = result__;
                                                       var result__ = tmp44888;
                                                       var count = result__;
                                                       var result__ = mobl.test.assertEqual(1, count);
                                                       models.stars.Star.all().destroyAll(function(result__) {
                                                         var tmp44889 = result__;
                                                         models.stars.Star.all().count(function(result__) {
                                                           var tmp44890 = result__;
                                                           var result__ = tmp44890;
                                                           count = result__;
                                                           var result__ = mobl.test.assertEqual(0, count);
                                                           if(callback && callback.apply) callback(); return;
                                                         });
                                                       });
                                                     });
                                                   })]);
var result__ = mobl.test.testSuite("operators", [mobl.test.testCase("larger than", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(true, 2 > 1);
                                                     var result__ = mobl.test.assertEqual(false, 1 > 1);
                                                     var result__ = mobl.test.assertEqual(false, 0 > 1);
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("less than", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(true, 1 < 2);
                                                     var result__ = mobl.test.assertEqual(false, 1 < 1);
                                                     var result__ = mobl.test.assertEqual(false, 1 < 0);
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("equality", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(true, "Zef" == "Zef");
                                                     var result__ = mobl.test.assertEqual(false, "Zef" == "Fez");
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("inequality", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(false, "Zef" != "Zef");
                                                     var result__ = mobl.test.assertEqual(true, "Zef" != "Fez");
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("addition", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(1, 0 + 1);
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("subtraction", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(1, 1 - 0);
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("multiplication", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(1, 1 * 1);
                                                     var result__ = mobl.test.assertEqual(0, 1 * 0);
                                                     var result__ = mobl.test.assertEqual(1, -1 * -1);
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("division", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(1, 1 / 1);
                                                     var result__ = mobl.test.assertEqual(-1, -1 / 1);
                                                     var result__ = mobl.test.assertEqual(-1, 1 / -1);
                                                     var result__ = mobl.test.assertEqual("Infinity", 1 / 0);
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("modulus", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(0, 4 % 2);
                                                     var result__ = mobl.test.assertEqual(1, 4 % 3);
                                                     var result__ = mobl.test.assertEqual(1, 4 % -3);
                                                     var result__ = mobl.test.assertEqual(-1, -4 % 3);
                                                     if(callback && callback.apply) callback(); return;
                                                   })]);
var result__ = mobl.test.testSuite("assertEqual", [mobl.test.testCase("true", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(true, true);
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("string and number", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual("1", 1);
                                                     var result__ = mobl.test.assertEqual("1", "1");
                                                     var result__ = mobl.test.assertEqual(1, "1");
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("compare nulls", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(null, null);
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("reference", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = "baku";
                                                     var baku = result__;
                                                     var result__ = baku;
                                                     var tapir = result__;
                                                     var result__ = mobl.test.assertEqual(baku, "baku");
                                                     var result__ = mobl.test.assertEqual("baku", tapir);
                                                     var result__ = mobl.test.assertEqual(baku, tapir);
                                                     if(callback && callback.apply) callback(); return;
                                                   }), mobl.test.testCase("evaluate function", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.test.assertEqual(spec.sum(1, 2), spec.sum(2, 1));
                                                     if(callback && callback.apply) callback(); return;
                                                   })]);
var result__ = mobl.test.testSuite("sleep", [mobl.test.testCase("sleep for 2000 ms", function(event, callback) {
                                                     if(event && event.stopPropagation) event.stopPropagation();
                                                     var result__ = mobl.now().getTime();
                                                     var start = result__;
                                                     mobl.sleep(2000, function(result__) {
                                                       var tmp44891 = result__;
                                                       var result__ = mobl.now().getTime() - start;
                                                       var duration = result__;
                                                       var result__ = mobl.test.assertEqual(true, duration >= 2000);
                                                       if(callback && callback.apply) callback(); return;
                                                     });
                                                   })]);
