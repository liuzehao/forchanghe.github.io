/*2018.1.30 create by liuzehao qq506039293*/
function accAdd(arg1, arg2) {//加法
    var r1, r2, m, c;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
}
function accMul(arg1, arg2) {//解决浮点乘法
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    }
    catch (e) {
    }
    try {
        m += s2.split(".")[1].length;
    }
    catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}
function accSub(arg1, arg2) {//浮点减法
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
function accDiv(arg1, arg2) {//浮点除法
    var t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
    }
    try {
        t2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
    }
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * pow(10, t2 - t1);
    }
}
$(document).ready(function(){		
$("#sum").click(function(){
var ru=1.0903;
var yue=36;
   $("label").each(function(){
      if($(this).hasClass("am-active"))
	  {
	  ru=parseFloat($(this).attr("value"));
	  yue=parseFloat($(this).attr("yue"));
	  }
    });
		var a=accAdd(2,accDiv(parseFloat($("#in").val()),100));//a是中间利差
	var temp=accSub(a,ru);
	var b=parseInt($("#dai").val());//b是贷款额度
	var f=accMul(temp,b);//分期金额精确值
	var c=(Math.ceil(f/100))*100;//c是向上取整后的中间值即总贷款额度
	
	var d=accMul(c,ru)//d是总共的本息额度
	var e=accDiv(d,yue);//e是月供
		$("#a1").html("");
		$("#b1").html("");
		$("#c1").html("");
		$("#d1").html("");
		$("#az").html("公式:");
			$("#a1").html(a+"-"+ru+"="+temp);
			$("#bz").html("分期金额:");
			$("#b1").html(b+"*"+temp+"="+f+"-->"+c);
			$("#cz").html("贷款总金额:");
			$("#c1").html(c+"*"+ru+"="+d);
			$("#dz").html("月供:");
			$("#d1").html(d+"/"+yue+"="+e);	
		
		});
	});
