/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-26 15:13:53
 * @version $Id$
 */

window.onload = function(){
	var inputForm = document.getElementsByTagName('input');
	var username = inputForm[0];//登录输入框
	var pwd1 = inputForm[1];//密码输入框
	var pwd2 = inputForm[2];//确认密码输入框
	var msgs = document.getElementsByTagName('p')
	var username_msg = msgs[0]//用户填写信息提示
	var pwd1_msg = msgs[1]//密码信息提示
	var pwd2_msg = msgs[2]//密码确认信息提示
	var count = document.getElementById('count')
	var _em = document.getElementsByTagName('em')
	var name_length = 0//交互时的字符数目

	function getLength(str){
		return str.replace(/[^\x00-xff]/g, "xx").length//非单字节
	}

	function findstr(str, n){//遍历每次输入的字符，用js的charAt求出对应索引上的字符，字符每相同一次就tmp++
		var tmp = 0
		for (var i=0;i<str.length;i++){
			if(str.charAt(i) == n){
				tmp++
			}
		}
		return tmp
	}


// 用户要求：5-25个字符，汉字[\u4e00-\u9fa5]，字母，数字，下划线

	// var rule = /[^\u4e00-\u9fa5A-Za-z0-9_]/g  //非字母，数字，下划线，汉字


//用户输入框
	username.onfocus = function(){//获取焦点
		username_msg.style.display = "block"
		username_msg.innerHTML = '<i class="iconfont icon-dengpao1"></i>6-25个字符，一个汉字为两个字符，只能是字母、数字、下划线'
	}
	username.onkeyup = function(){//松开键盘
		count.style.visibility = "visible"
		name_length = getLength(this.value)
		// console.log(name_length)
		count.innerHTML = name_length + "个字符"
		if(name_length === 0){
			count.style.visibility = "hidden"
		}

	}
	username.onblur = function(){//失去焦点
		//含有非法字符
		var rule = /[^\u4e00-\u9fa5A-Za-z0-9_]/g
		if(rule.test(this.value)){
			username_msg.innerHTML = '<i class="iconfont icon-cuowu"></i>含有非法字符'
		}
		//不能为空
		else if (this.value === "" || this.value === 0 ) {
			username_msg.innerHTML = '<i class="iconfont icon-cuowutishi"></i>信息不能为空'
		}
		//长度超过25个字符或者长度少于6个字符
		else if (name_length > 25 || name_length < 6 ) {
			username_msg.innerHTML = '<i class="iconfont icon-cuowutishi"></i>长度6-25个字符'
		}
		//OK
		else{
			username_msg.innerHTML = '<i class="iconfont icon-ok"></i>OK！'
		}
	}



//密码输入框
	pwd1.onfocus = function(){//获取焦点
		pwd1_msg.style.display = "block"
		pwd1_msg.innerHTML = '<i class="iconfont icon-dengpao1"></i>6-15个字符，至少包括字母、数字、下划线任意两种'
	}

	pwd1.onkeyup = function(){//松开键盘
		//有输入字符---弱
		if(this.value.length === 0 ){
			pwd2.setAttribute('disabled','disabled')
		}
		if(this.value.length>0){
			_em[0].className = 'active'
		}
		else{
			_em[0].className = ''
		}
		//输入字符大于5---中
		if (this.value.length>5) {/*以5为分界线来控制输入框的强中弱信息提示*/
			_em[1].className = 'active'
			pwd2.removeAttribute('disabled')
			pwd2_msg.style.display = 'block'
		}else{
			_em[1].className = ''
			pwd2.setAttribute('disabled','disabled')
			pwd2_msg.style.display = 'none'
		}
		//输入字符大于10---强
		if (this.value.length>10) {
			_em[2].className = 'active'
		}else{
			_em[2].className = ''
		}
	}

	pwd1.onblur = function(){//失去焦点
		var m = findstr(pwd1.value, pwd1.value[0] )
		//不能为空
		if(this.value === "" || this.value === 0 ){
			pwd1_msg.innerHTML = '<i class="iconfont icon-cuowutishi"></i>信息不能为空'
		}
		//不能用相同的字符
		else if(m === this.value.length){
			pwd1_msg.innerHTML = '<i class="iconfont icon-cuowu"></i>不能用相同的字符'
		}
		//长度为6-15个字符
		else if(this.value.length < 6 || this.value.length > 15){
			pwd1_msg.innerHTML = '<i class="iconfont icon-cuowu"></i>密码应为6-15个字符'
		}
		//不能全部为数字
		else if(!/[^\d]/g.test(this.value)){
			pwd1_msg.innerHTML = '<i class="iconfont icon-cuowu"></i>不能全部为数字'
		}
		//也不能全部为字母
		else if(!/[^a-zA-Z]/g.test(this.value)){
			pwd1_msg.innerHTML = '<i class="iconfont icon-cuowu"></i>不能全部为字母'
		}
		//OK
		else{
			pwd1_msg.innerHTML = '<i class="iconfont icon-ok"></i>OK！'
		}
	}


//密码确认框
	pwd2.onblur = function(){
		if(this.value != pwd1.value){
			pwd2_msg.innerHTML = '<i class="iconfont icon-cuowu"></i>密码输入不一致！'
		}else{
			pwd2_msg.innerHTML = '<i class="iconfont  icon-ok"></i>正确！'
		}
	}
}
