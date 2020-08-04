/* 「すぐ使えるCGI」管理画面用JavaScript */
/* jQuery 1.8.x 以上が必要です。jQuery 2.x では動作確認していません。 */
/* Sugutsukaeru CMS JavaScript for admin pages. */
/* jQuery 1.x (1.8.x or later) required. */

/*
このファイルには、汎用の関数などが定義されています。
テンプレートのデザイン変更に伴い修正しなければならないスクリプトや、日本語メッセージを含むスクリプトは各ファイル内に直接記載しています。
*/

/* Javascript link エラーチェック用
 * 無事設置が終わったら、1.html のメッセージと合わせて
 * 削除して構いません。*/
/* Javascript link error check.
 * Delete 2 lines below after you have once installed this script successfully. */
$("#sugu-if-js-linked").css('display', 'none');
/* ここまで */


/* 一覧画面動作用(admin/1.html) */
function set_param(d,m,s,n){
	document.forms[0].s.value = s;
	document.forms[0].d.value = d;
	document.forms[0].m.value = m;
	document.forms[0].n.value = n;
	if (m == 9 && s == 4){
		return do_conf();
	}
}
function close_subwin(){
	if ("mysubwin" in window){
		mysubwin.close();
	}
	return true;
}

function is_ctrl(pressKey){
        if(pressKey==17){ //ctrl
                return 1;
        } else if (navigator.userAgent.match(/macintosh/i)){
                if (pressKey == 224 && navigator.userAgent.match(/firefox/i)){
                        return 1;
                } else if (pressKey == 91 || pressKey == 93){
                        return 1;
                }
        }
        return 0;
}
function disable_reload(e){
        if(navigator.userAgent.match(/msie/i) && window.event){
                window.event.returnValue=false;
                window.event.keyCode=0
        } else
        if (navigator.userAgent.match(/macintosh/i) || e.preventDefault){
                e.preventDefault();
                e.stopPropagation();
        }
        return false;
}
function catchkeydown(e){
        var pressKey;
        if (eval(e)){
                pressKey=e.keyCode;
        } else {
                pressKey=event.keyCode;
        }
        if(is_ctrl(pressKey)==1){ //ctrl
                if_ctrl=1;
                if(if_r==1){return disable_reload(e);}
        }
        if(pressKey==82){ //r
                if_r=1;
                if(if_ctrl==1){return disable_reload(e);}
        }
        if(pressKey==116){ //f5
                if (navigator.userAgent.match(/safari/i) 
                        && !navigator.userAgent.match(/chrome/i)){
                        window.location="%_myname_%?n=%_n_%&i=%_i_%";
                        return true;
                } else {
                        return disable_reload(e);
                }
        }
}
function catchkeyup(e){
        var pressKey;
        if (eval(e)){
                pressKey=e.keyCode;
        } else {
                pressKey=event.keyCode;
        }
        if(is_ctrl(pressKey)==1){ //ctrl
                if_ctrl=0;
                if(if_r==1){return disable_reload(e);}
        }
        if(pressKey==82){ //r
                if_r=0;
                if(if_ctrl==1){return disable_reload(e);}
        }
        if(pressKey==116){ //f5
                if (navigator.userAgent.match(/safari/i) 
                        && !navigator.userAgent.match(/chrome/i)){
                        window.location="%_myname_%?n=%_n_%&i=%_i_%";
                } else {
                        return disable_reload(e);
                }
        }
}

/* 入力画面動作用(admin/2.html) */
function set_value(MyName, MyItem, IfAppend){
    var FM = document.getElementById('mainform');
    switch(IfAppend){
        case 1: //追記
            eval("FM."+MyName+".value += '"+MyItem+"'");
            break;
        default: //入れ替え（デフォルト）
            eval("FM."+MyName+".value = '"+MyItem+"'");
            break;
    }
}
function show_format(){
	var FmtPart = document.getElementById('inputformat');
	var HideLink = document.getElementById('link2hide');
	var ShowLink = document.getElementById('link2show');
	FmtPart.style.display = 'block';
	HideLink.style.display = 'block';
	ShowLink.style.display = 'none';
}
function hide_format(){
	var FmtPart = document.getElementById('inputformat');
	var HideLink = document.getElementById('link2hide');
	var ShowLink = document.getElementById('link2show');
	FmtPart.style.display = 'none';
	HideLink.style.display = 'none';
	ShowLink.style.display = 'block';
}
function change_order(Me, Dir){
	if (Dir == 'up'){
		$("#file_"+Me).insertBefore($("#file_"+Me).prev(".file-unit"));
	} else {
		if (Dir == 'down'){
			$("#file_"+Me).insertAfter($("#file_"+Me).next(".file-unit"));
		}
	}
}
function set_order(LIST){
	var ListTable = document.getElementById(LIST);
	var ListOfChildId = "";
	if (set_order == null){ return true; }
	if (!$('#'+LIST).children(".file-unit") || $('#'+LIST).children(".file-unit").length == 0){ return true; }

	$('#'+LIST).children(".file-unit").each(function() {
	  	ListOfChildId += $(this).attr("id")+"\n\n";
	});
	var MyForm = document.getElementById("mainform");
	MyForm.file_order.value = ListOfChildId;
	return true;
}
function prepare_order_wo_upload(){
	var MyForm = document.getElementById('mainform');
	set_order('filelist');
	MyForm.t.value = '2';
	MyForm.submit();
}
function goConfonEnter(e){
	if (eval(e)){
		pressKey=e.keyCode;
	} else {
		pressKey=event.keyCode;
	}
	if(pressKey==13){prepare_order_wo_upload();}
}
function prepare_order4upload(){
	var MyForm = document.getElementById('mainform');
	if (MyForm.t.value == ''){
		MyForm.t.value = 1;
	}
	return set_order('filelist');
}
var mainFM = document.getElementById("mainform");
if (mainFM){
	for (i=0; i<=mainFM.elements.length; i++){
		if (mainFM.elements[i] && mainFM.elements[i].type == 'text'){
			mainFM.elements[i].onkeydown = goConfonEnter;
		}
	}
}

/* ライセンス情報画面動作用(admin/5.html) */
function show_form(){
	myBtn = document.getElementById("regbtn");
	if (myBtn != null){
		myBtn.disabled = false;
	}
	myKey = document.getElementById("lkey");
	if (myKey != null){
		myKey.style.display = 'none';
	}
	myLink = document.getElementById("changelink");
	if (myLink != null){
		myLink.style.display = 'none';
	}
	myFld = document.getElementById("regfield");
	if (myFld != null){
		myFld.style.display = 'inline';
	}
}
