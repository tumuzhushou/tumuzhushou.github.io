// 线性内插-单向内插
function linearInterpolation(x0, y0, x1, y1, x) {
    if (x1 === x0) {
        throw new Error("x0 and x1 cannot be the same");
    }
    return y0 + ((x - x0) * (y1 - y0)) / (x1 - x0);
}
// 线性内插-双向内插
function doubleinterpolate(){
		//双内插法计算
		
		
	}
// 计算 μz 值
function interpolate() {
		//读取模板支架高度
		const zhijiaheight = parseFloat(document.getElementById('zhijia_H').value);
		// 检查输入是否有效
		if (isNaN(zhijiaheight)) {
		    alert('请输入有效的模板支架高度数值');
		    return;
		}
		const option = document.getElementById('option_changdi').value;	            
		// 根据选择的选项进行不同的计算
		let muz;
		switch (option) {
		    case 'changdi_A':
			    if (zhijiaheight<=5){
					muz=1.09;					
				}else if(zhijiaheight > 5 && zhijiaheight <= 10){
					muz = linearInterpolation(5, 1.09, 10, 1.28, zhijiaheight);					
				}else if(zhijiaheight > 10 && zhijiaheight <= 15){
					muz = linearInterpolation(10, 1.28, 15, 1.42, zhijiaheight);					
				}else if(zhijiaheight > 15 && zhijiaheight <= 20){
					muz = linearInterpolation(15, 1.42, 20, 1.52, zhijiaheight);					
				}else if(zhijiaheight > 20 && zhijiaheight <= 30){
					muz = linearInterpolation(20, 1.52, 30, 1.67, zhijiaheight);					
				}else if(zhijiaheight > 30 && zhijiaheight <= 40){
					muz = linearInterpolation(30, 1.67, 40, 1.79, zhijiaheight);					
				}else if(zhijiaheight > 40 && zhijiaheight <= 50){
					muz = linearInterpolation(40, 1.79, 50, 1.89, zhijiaheight);					
				}else if(zhijiaheight > 50 && zhijiaheight <= 60){
					muz = linearInterpolation(50, 1.89, 60, 1.97, zhijiaheight);					
				}else if(zhijiaheight > 60 && zhijiaheight <= 70){
					muz = linearInterpolation(60, 1.97, 70, 2.05, zhijiaheight);					
				}else if(zhijiaheight > 70 && zhijiaheight <= 80){
					muz = linearInterpolation(70, 2.05, 80, 2.12, zhijiaheight);					
				}else if(zhijiaheight > 80 && zhijiaheight <= 90){
					muz = linearInterpolation(80, 2.12, 90, 2.18, zhijiaheight);					
				}else if(zhijiaheight > 90 && zhijiaheight <= 100){
					muz = linearInterpolation(90, 2.18, 100, 2.23, zhijiaheight);					
				}else if(zhijiaheight > 100 && zhijiaheight <= 150){
					muz = linearInterpolation(100, 2.23, 150, 2.46, zhijiaheight);					
				}else if(zhijiaheight > 150 && zhijiaheight <= 200){
					muz = linearInterpolation(150, 2.46, 200, 2.64, zhijiaheight);					
				}else if(zhijiaheight > 150 && zhijiaheight <= 200){
					muz = linearInterpolation(200, 2.64, 250, 2.78, zhijiaheight);					
				}else if(zhijiaheight > 250 && zhijiaheight <= 300){
					muz = linearInterpolation(250, 2.78, 300, 2.91, zhijiaheight);					
				}else if(zhijiaheight > 300 && zhijiaheight <= 550){
					muz = linearInterpolation(300, 2.91, 350, 2.91, zhijiaheight);					
				}else{
					muz = 2.91;
				}
				document.getElementById('muz_result').textContent = muz.toFixed(2);
				document.getElementById('result_muz').style.display = 'block';				
		        break;
		    case 'changdi_B':
			    if (zhijiaheight<=10){
					muz=1.00;					
				}else if(zhijiaheight > 10 && zhijiaheight <= 15){
					muz = linearInterpolation(10, 1.00, 15, 1.13, zhijiaheight);					
				}else if(zhijiaheight > 15 && zhijiaheight <= 20){
					muz = linearInterpolation(15, 1.13, 20, 1.23, zhijiaheight);					
				}else if(zhijiaheight > 20 && zhijiaheight <= 30){
					muz = linearInterpolation(20, 1.23, 30, 1.39, zhijiaheight);					
				}else if(zhijiaheight > 30 && zhijiaheight <= 40){
					muz = linearInterpolation(30, 1.39, 40, 1.52, zhijiaheight);					
				}else if(zhijiaheight > 40 && zhijiaheight <= 50){
					muz = linearInterpolation(40, 1.52, 50, 1.62, zhijiaheight);					
				}else if(zhijiaheight > 50 && zhijiaheight <= 60){
					muz = linearInterpolation(50, 1.62, 60, 1.71, zhijiaheight);					
				}else if(zhijiaheight > 60 && zhijiaheight <= 70){
					muz = linearInterpolation(60, 1.71, 70, 1.79, zhijiaheight);					
				}else if(zhijiaheight > 70 && zhijiaheight <= 80){
					muz = linearInterpolation(70, 1.79, 80, 1.87, zhijiaheight);					
				}else if(zhijiaheight > 80 && zhijiaheight <= 90){
					muz = linearInterpolation(80, 1.87, 90, 1.93, zhijiaheight);					
				}else if(zhijiaheight > 90 && zhijiaheight <= 100){
					muz = linearInterpolation(90, 1.93, 100, 2.00, zhijiaheight);					
				}else if(zhijiaheight > 100 && zhijiaheight <= 150){
					muz = linearInterpolation(100, 2.00, 150, 2.25, zhijiaheight);					
				}else if(zhijiaheight > 150 && zhijiaheight <= 200){
					muz = linearInterpolation(150, 2.25, 200, 2.46, zhijiaheight);					
				}else if(zhijiaheight > 150 && zhijiaheight <= 200){
					muz = linearInterpolation(200, 2.46, 250, 2.63, zhijiaheight);					
				}else if(zhijiaheight > 250 && zhijiaheight <= 300){
					muz = linearInterpolation(250, 2.63, 300, 2.77, zhijiaheight);					
				}else if(zhijiaheight > 300 && zhijiaheight <= 350){
					muz = linearInterpolation(300, 2.77, 350, 2.91, zhijiaheight);					
				}else{
					muz = 2.91;
				}
				document.getElementById('muz_result').textContent = muz.toFixed(2);
				document.getElementById('result_muz').style.display = 'block';				
		        break;
		    case 'changdi_C':
				if (zhijiaheight<=15){
					muz=0.65;					
				}else if(zhijiaheight > 15 && zhijiaheight <= 20){
					muz = linearInterpolation(15, 0.65, 20, 0.74, zhijiaheight);					
				}else if(zhijiaheight > 20 && zhijiaheight <= 30){
					muz = linearInterpolation(20, 0.74, 30, 0.88, zhijiaheight);					
				}else if(zhijiaheight > 30 && zhijiaheight <= 40){
					muz = linearInterpolation(30, 0.88, 40, 1.00, zhijiaheight);					
				}else if(zhijiaheight > 40 && zhijiaheight <= 50){
					muz = linearInterpolation(40, 1.00, 50, 1.10, zhijiaheight);					
				}else if(zhijiaheight > 50 && zhijiaheight <= 60){
					muz = linearInterpolation(50, 1.10, 60, 1.20, zhijiaheight);					
				}else if(zhijiaheight > 60 && zhijiaheight <= 70){
					muz = linearInterpolation(60, 1.20, 70, 1.28, zhijiaheight);					
				}else if(zhijiaheight > 70 && zhijiaheight <= 80){
					muz = linearInterpolation(70, 1.28, 80, 1.36, zhijiaheight);					
				}else if(zhijiaheight > 80 && zhijiaheight <= 90){
					muz = linearInterpolation(80, 1.36, 90, 1.43, zhijiaheight);					
				}else if(zhijiaheight > 90 && zhijiaheight <= 100){
					muz = linearInterpolation(90, 1.43, 100, 1.50, zhijiaheight);					
				}else if(zhijiaheight > 100 && zhijiaheight <= 150){
					muz = linearInterpolation(100, 1.50, 150, 1.79, zhijiaheight);					
				}else if(zhijiaheight > 150 && zhijiaheight <= 200){
					muz = linearInterpolation(150, 1.79, 200, 2.03, zhijiaheight);					
				}else if(zhijiaheight > 150 && zhijiaheight <= 200){
					muz = linearInterpolation(200, 2.03, 250, 2.24, zhijiaheight);					
				}else if(zhijiaheight > 250 && zhijiaheight <= 300){
					muz = linearInterpolation(250, 2.24, 300, 2.43, zhijiaheight);					
				}else if(zhijiaheight > 300 && zhijiaheight <= 350){
					muz = linearInterpolation(300, 2.43, 350, 2.60, zhijiaheight);					
				}else if(zhijiaheight > 350 && zhijiaheight <= 400){
					muz = linearInterpolation(350, 2.60, 400, 2.76, zhijiaheight);					
				}else if(zhijiaheight > 400 && zhijiaheight <= 450){
					muz = linearInterpolation(400, 2.76, 450, 2.91, zhijiaheight);					
				}else{
					muz = 2.91;
				}
				document.getElementById('muz_result').textContent = muz.toFixed(2);
				document.getElementById('result_muz').style.display = 'block';				
		        break;
			case 'changdi_D':
				if (zhijiaheight<=30){
					muz=0.51;					
				}else if(zhijiaheight > 30 && zhijiaheight <= 40){
					muz = linearInterpolation(30, 0.51, 40, 0.60, zhijiaheight);					
				}else if(zhijiaheight > 40 && zhijiaheight <= 50){
					muz = linearInterpolation(40, 0.60, 50, 0.69, zhijiaheight);					
				}else if(zhijiaheight > 50 && zhijiaheight <= 60){
					muz = linearInterpolation(50, 0.69, 60, 0.77, zhijiaheight);					
				}else if(zhijiaheight > 60 && zhijiaheight <= 70){
					muz = linearInterpolation(60, 0.77, 70, 0.84, zhijiaheight);					
				}else if(zhijiaheight > 70 && zhijiaheight <= 80){
					muz = linearInterpolation(70, 0.84, 80, 0.91, zhijiaheight);					
				}else if(zhijiaheight > 80 && zhijiaheight <= 90){
					muz = linearInterpolation(80, 0.91, 90, 0.98, zhijiaheight);					
				}else if(zhijiaheight > 90 && zhijiaheight <= 100){
					muz = linearInterpolation(90, 0.98, 100, 1.04, zhijiaheight);					
				}else if(zhijiaheight > 100 && zhijiaheight <= 150){
					muz = linearInterpolation(100, 1.04, 150, 1.33, zhijiaheight);					
				}else if(zhijiaheight > 150 && zhijiaheight <= 200){
					muz = linearInterpolation(150, 1.33, 200, 1.58, zhijiaheight);					
				}else if(zhijiaheight > 150 && zhijiaheight <= 200){
					muz = linearInterpolation(200, 1.58, 250, 1.81, zhijiaheight);					
				}else if(zhijiaheight > 250 && zhijiaheight <= 300){
					muz = linearInterpolation(250, 1.81, 300, 2.02, zhijiaheight);					
				}else if(zhijiaheight > 300 && zhijiaheight <= 350){
					muz = linearInterpolation(300, 2.02, 350, 2.22, zhijiaheight);					
				}else if(zhijiaheight > 350 && zhijiaheight <= 400){
					muz = linearInterpolation(350, 2.22, 400, 2.40, zhijiaheight);					
				}else if(zhijiaheight > 400 && zhijiaheight <= 450){
					muz = linearInterpolation(400, 2.40, 450, 2.58, zhijiaheight);					
				}else if(zhijiaheight > 450 && zhijiaheight <= 500){
					muz = linearInterpolation(450, 2.58, 500, 2.74, zhijiaheight);					
				}else if(zhijiaheight > 500 && zhijiaheight <= 550){
					muz = linearInterpolation(500, 2.74, 550, 2.91, zhijiaheight);					
				}else{
					muz = 2.91;
				}
				document.getElementById('muz_result').textContent = muz.toFixed(2);
				document.getElementById('result_muz').style.display = 'block';				
			    break;
		    default:
		        alert('请选择有效的场地类型');
		        return;
		}            
	}
//远海海面和海岛的建筑物或构筑物风压高度变化系数的修正
function calculate_etaYH(){
	//读取离海岸距离
	const yuanhai_juli = parseFloat(document.getElementById('yuanhai_juli').value);
	// 检查输入是否有效
	if (isNaN(yuanhai_juli)) {
	    alert('请输入有效的离海岸距离数值');
	    return;
	}
	let etayh;
	if (yuanhai_juli < 40){
		etayh = 1.0
	}else if (yuanhai_juli >= 40 && yuanhai_juli < 60 ){
		etayh = linearInterpolation(40, 1.00, 60, 1.10, yuanhai_juli);
	}else if (yuanhai_juli >= 60 && yuanhai_juli < 100 ){
		etayh = linearInterpolation(60, 1.10, 100, 1.20, yuanhai_juli);
	}else{
		etayh=1.2
	}	
	document.getElementById('etayh-result').textContent = etayh.toFixed(2);
	document.getElementById('result_etayh').style.display = 'block';
}
// 双线性内插
// bilinearInterpolation.js
function bilinearInterpolation(x0, y0, x1, y1, z00, z10, z01, z11, x, y) {
    if (x1 === x0 || y1 === y0) {
        throw new Error("x0 and x1, or y0 and y1 cannot be the same");
    }
    const t = (x - x0) / (x1 - x0);
    const s = (y - y0) / (y1 - y0);
    return (1 - t) * (1 - s) * z00 + t * (1 - s) * z10 + (1 - t) * s * z01 + t * s * z11;
}

function calculateBilinearInterpolation() {
    const x0 = parseFloat(document.getElementById('x0').value);
    const y0 = parseFloat(document.getElementById('y0').value);
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const z00 = parseFloat(document.getElementById('z00').value);
    const z10 = parseFloat(document.getElementById('z10').value);
    const z01 = parseFloat(document.getElementById('z01').value);
    const z11 = parseFloat(document.getElementById('z11').value);
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);

    try {
        const interpolatedValue = bilinearInterpolation(x0, y0, x1, y1, z00, z10, z01, z11, x, y);
        document.getElementById('result').textContent = `The interpolated value at ( $ {x}, $ {y}) is  $ {interpolatedValue}`;
    } catch (error) {
        document.getElementById('result').textContent = error.message;
    }
}
// 打开子窗口函数
function CalcWindowtobetaZ() {
      // 打开子窗口（弹窗），可以指定大小
      const childWindow = window.open(
        'fengzhenxishu_sigalwin.html',         // 原子窗口页面（fengzhenxishu.html）
        '计算风振系数',  // 窗口名称（可自定义）
        'width=500,height=400,scrollbars=yes,resizable=yes' // 窗口参数
      );

      if (!childWindow) {
        alert('弹窗被浏览器阻止，请允许弹窗后重试。');
      }
}
// 判断输入为大于0数字的函数
function isValidNumber(value) {
	if (typeof value === 'number' && !isNaN(value) && value > 0) {
		return true;
	}
	return false;
}

function ncalculateFengzhBetaz(fzyz_g, xishu_I10, result_bjfl_Bz, result_gzflR) {
    const fengzh_betaz = 1.0 + 2.0 * fzyz_g * xishu_I10 * result_bjfl_Bz * Math.sqrt(1.0 + Math.pow(result_gzflR, 2));
    return fengzh_betaz;
}



