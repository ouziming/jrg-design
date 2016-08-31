/**
 * Created by Administrator on 2016/7/25.
 */
window.onload = function(){
        var canvasOut = document.querySelector(".canvas-outside");
        canvasOut.width = 180;
        canvasOut.height = 500;

        var ctxOut = canvasOut.getContext("2d");

        // 自创颜色
        var grad  = ctxOut.createLinearGradient(0,0,0,140);
        grad.addColorStop(0,'rgb(192, 80, 77)');    // 红
        grad.addColorStop(0.5,'rgb(155, 187, 89)'); // 绿
        grad.addColorStop(1,'rgb(128, 100, 162)');  // 紫

        var win  = ctxOut.createLinearGradient(0,150,580,170);
        win.addColorStop(0,'rgba(34,227,156,1) ');
        win.addColorStop(0.5,'rgba(207,136,29,1)');
        win.addColorStop(1,'rgba(251,223,147,1)');

        var blu = ctxOut.createLinearGradient(0,260,300,340);
        blu.addColorStop(0,'rgb(134,227,156)');
        blu.addColorStop(0.5,'rgb(207,136,29)');
        blu.addColorStop(1,'rgb(133,87,148)');

        var yel = ctxOut.createLinearGradient(0,200,300,380);
        yel.addColorStop(0,' rgb(87,97,148)');
        yel.addColorStop(0.5,'rgb(31,186,207)');
        yel.addColorStop(1,'rgb(182,227,34)');


        //第一个圆
        ctxOut.lineWidth = 3;
        ctxOut.strokeStyle = "#ddd";
        ctxOut.beginPath();
        ctxOut.arc(100, 90, 45,  0, 1.4*Math.PI, false );
        ctxOut.fillStyle = grad;
        // ctxOut.closePath();
        ctxOut.fill();
        ctxOut.stroke();

        ctxOut.lineWidth = 3;
        ctxOut.strokeStyle = "#ddd";
        ctxOut.beginPath();
        ctxOut.arc(100, 90, 45, 2*Math.PI, 0, true );
        ctxOut.closePath();
        ctxOut.stroke();



        // 第二个圆
        ctxOut.lineWidth = 3;
        ctxOut.strokeStyle = "#ddd";
        ctxOut.beginPath();
        ctxOut.arc(100, 200, 45, 0, 1.3*Math.PI, false );
        ctxOut.fillStyle = win;
        // ctxOut.closePath();
        ctxOut.fill();
        ctxOut.stroke();

        ctxOut.lineWidth = 3;
        ctxOut.strokeStyle = "#ddd";
        ctxOut.beginPath();
        ctxOut.arc(100, 200,45, 2*Math.PI, 0, true );
        ctxOut.closePath();
        ctxOut.stroke();


        //第三个园
        ctxOut.lineWidth = 3;
        ctxOut.strokeStyle = "#fff";
        ctxOut.beginPath();
        ctxOut.arc(100, 310, 45, 0, 1.1*Math.PI, false );
        ctxOut.fillStyle = blu;
        // ctxOut.closePath();
        ctxOut.fill();
        ctxOut.stroke();

        ctxOut.lineWidth = 3;
        ctxOut.strokeStyle = "#ddd";
        ctxOut.beginPath();
        ctxOut.arc(100, 310, 45, 2*Math.PI, 0, true );
        ctxOut.closePath();
        ctxOut.stroke();

        // 第四个圆
        ctxOut.lineWidth = 3;
        ctxOut.strokeStyle = "#fff";
        ctxOut.beginPath();
        ctxOut.arc(100, 420, 45, 0, 1.2*Math.PI, false );
        ctxOut.fillStyle = yel;
        // ctxOut.closePath();
        ctxOut.fill();
        ctxOut.stroke();

        ctxOut.lineWidth = 3;
        ctxOut.strokeStyle = "#ddd";
        ctxOut.beginPath();
        ctxOut.arc(100, 420, 45, 2*Math.PI, 0, true );
        ctxOut.closePath();
        ctxOut.stroke();


        // ------------------------------

        var canvasIn = document.querySelector(".canvas-inside");
        canvasIn.width = 180;
        canvasIn.height = 500;

        var ctxIn = canvasIn.getContext("2d");

        ctxIn.lineWidth = 3;
        ctxIn.strokeStyle = "#ddd";
        ctxIn.beginPath();
        ctxIn.arc(100, 90, 35, 0, 2*Math.PI, false );
        ctxIn.fillStyle = "#fff";
        ctxIn.closePath();
        ctxIn.fill();
        ctxIn.stroke();

        ctxIn.lineWidth = 3;
        ctxIn.strokeStyle = "#ddd";
        ctxIn.beginPath();
        ctxIn.arc(100, 200, 35, 0, 2*Math.PI, false );
        ctxIn.fillStyle = "#fff";
        ctxIn.closePath();
        ctxIn.fill();
        ctxIn.stroke();

        ctxIn.lineWidth = 3;
        ctxIn.strokeStyle = "#ddd";
        ctxIn.beginPath();
        ctxIn.arc(100, 310, 35, 0, 2*Math.PI, false );
        ctxIn.fillStyle = "#fff";
        ctxIn.closePath();
        ctxIn.fill();
        ctxIn.stroke();

        ctxIn.lineWidth = 3;
        ctxIn.strokeStyle = "#ddd";
        ctxIn.beginPath();
        ctxIn.arc(100,420, 35, 0, 2*Math.PI, false );
        ctxIn.fillStyle = "#fff";
        ctxIn.closePath();
        ctxIn.fill();
        ctxIn.stroke();

}
