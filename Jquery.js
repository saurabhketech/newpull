$(function() {
    $(".notification").hide();
    $("#pricecol").hide();

    function explode() {
        var btn = '<img src="layer_37.png" height="25%">&emsp;</span><font>Expired pass</font>';
        $(".notification").append(btn);
        $(".notification").show();
    }
    setTimeout(explode, 2000);
    var content = "";
    var price = 0;
    var counter = 0,
        dc = 0,
        wc = 0,
        mc = 0,
        ac = 0;
    var str = "";
    // daily....
    $("#daily").click(function() {
            if (counter == 0) {
                content += 'Daily pass';
                counter++;
                price += 10.00;
                dc = 1;
            } else {
                if (!dc) {
                    content += '+Daily pass';
                    price += 10.00;
                    counter++;
                    dc = 1;
                } else {
                    if (counter > 0) {
                        var sub = content.slice(0, 5);
                        // alert(sub);
                        if (sub == "Daily") {
                            // alert(sub);
                            content = content.replace("Daily pass", "");
                            content = content.replace('+', '');
                        } else {
                            content = content.replace("+Daily pass", "");
                        }
                    } else {
                        content = content.replace("Daily pass", "");
                    }
                    counter--;
                    price -= 10.00;
                    dc = 0;
                }
            }
            if (dc == 1) {
                var button = '<a href="#"  id="daily" style="font-size:13px;color:#4169e1;">REMOVE</a>';
                $("#daily").html(button);
            } else {
                var button = '<a href="#" id="daily">SELECT</a>';
                $("#daily").html(button);
            }
            $("#replace").html(content);
            $("#pricecol").html('Price:' + price + ' dlls');
            $("#pricecol").show();
        })
        // weekly....
    $("#weekly").click(function() {
            if (counter == 0) {
                content += 'Weekly pass';
                counter++;
                price += 20.00;
                wc = 1;
            } else {
                if (!wc) {
                    content += '+Weekly pass';
                    price += 20.00;
                    counter++;
                    wc = 1;
                } else {
                    if (counter > 0) {
                        var sub = content.slice(0, 6)
                        if (sub == "Weekly") {
                            // alert(sub);
                            content = content.replace("Weekly pass", "");
                            content = content.replace('+', '');
                        } else {
                            content = content.replace("+Weekly pass", "");
                        }
                    } else {
                        content = content.replace("Weekly pass", "");
                    }
                    counter--;
                    price -= 20.00;
                    wc = 0;
                }
            }
            if (wc == 1) {
                var button = '<a href="#"  id="weekly" style="font-size:13px;color:#4169e1;" >REMOVE</a>';
                $("#weekly").html(button);
            } else {
                var button = '<a href="#"  id="weekly" >SELECT</a>';
                $("#weekly").html(button);
            }
            $("#replace").html(content);
            $("#pricecol").html('Price:' + price + ' dlls');
            $("#pricecol").show();
        })
        //monthly
    $("#month").click(function() {
            if ((counter == 0)) {
                content += 'Month pass';
                counter++;
                mc = 1;
                price += 50.00;
            } else {
                if (!mc) {
                    content += '+Month pass';
                    price += 50.00;
                    counter++;
                    mc = 1;
                } else {
                    var sub = content.slice(0, 5);
                    if (counter > 0) {
                        if (sub == "Month") {
                            // alert(sub);
                            content = content.replace("Month pass", "");
                            content = content.replace('+', '');
                        } else {
                            content = content.replace("+Month pass", "");
                        }
                    } else {
                        content = content.replace("Month pass", "");
                    }
                    counter--;
                    price -= 50.00;
                    mc = 0;
                }
            }
            if (mc == 1) {
                var button = '<a href="#" id="month" style="font-size:13px;color:#4169e1;">REMOVE</a>';
                $("#month").html(button);
            } else {
                var button = '<a href="#"  id="month" >SELECT</a>';
                $("#month").html(button);
            }
            $("#pricecol").html('Price:' + price + ' dlls');
            $("#pricecol").show();
            $("#replace").html(content);
        })
        // annual
    $("#annual").click(function() {
        if (counter == 0) {
            content += 'Annual pass';
            counter++;
            price += 60.00;
            ac = 1;
        } else {
            if (!ac) {
                content += '+Annual pass';
                price += 60.00;
                counter++;
                ac = 1;
            } else {
                var sub = content.slice(0, 6);
                if (counter > 0) {
                    if (sub == "Annual") {
                        // alert(sub);
                        content = content.replace("Annual pass", "");
                        content = content.replace('+', '');
                    } else {
                        content = content.replace("+Annual pass", "");
                    }
                } else {
                    content = content.replace("Annual pass", "");
                }
                counter--;
                price -= 60.00;
                ac = 0;
            }
        }
        if (ac == 1) {
            var button = '<a href="#"  id="annual" style="font-size:13px;color:#4169e1;">REMOVE</a>';
            $("#annual").html(button);
        } else {
            var button = '<a href="#" id="annual" >SELECT</a>';
            $("#annual").html(button);
        }
        $("#pricecol").html('Price:' + price + ' dlls');
        $("#pricecol").show();
        $("#replace").html(content);
    })
});