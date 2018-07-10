
    function render(direc){
    	var win=false;
       	var lose=false;
    	//direc 移动方向 0上 1下，2左，3右。
    	var arrow=direc%2==0?true:false;
    	var tmp=new Array();
        if(direc<2){
			// 上下
        	for(var i=0;i<4;i++){
        		tmp[i]=new Array();
        		$('.c'+i).each(function(j){
        			tmp[i][j]=parseInt($(this).text());
        		})
        		// 第i列的第j个数字
        		//console.log(tmp);
        	}
		}
        else{
			// 左右
        	for(var i=0;i<4;i++){
        		tmp[i]=new Array();
        		$('.r'+i).each(function(j){
        			tmp[i][j]=parseInt($(this).text());
        		})
        		// 第i行的第j个数字
        		//console.log(tmp[i]);
        	}
        }

    	for(var i=0;i<4;i++){
			// 上左
    		if(arrow){
            	for(var p=0;p<4;p++){
        			//console.log(tmp[p]);
        			if(isNaN(tmp[i][p])){
        				//console.log("p");
        				for(var q=p+1;q<4;q++){
        					if(isNaN(tmp[i][q])){
        						continue;
        					}
        					tmp[i][p]=tmp[i][q];tmp[i][q]=0/0;break;
        				}
        			}
        		}
            	for(var tp=1;tp<4;tp++){
            		if(tmp[i][tp]==tmp[i][tp-1]){
            			tmp[i][tp-1]+=tmp[i][tp];
            			//胜利判定
            			if(tmp[i][tp-1]==2048) win=true;
            			for(var tq=tp+1;tq<4;tq++){
            				tmp[i][tq-1]=tmp[i][tq];
            			}
            			tmp[i][3]=0/0;
            			break;
            		}
            	}
			}
			// 下右
            else{
            	for(var p=3;p>=0;p--){
        			//console.log(tmp[p]);
        			if(isNaN(tmp[i][p])){
        				//console.log("p");
        				for(var q=p-1;q>=0;q--){
        					if(isNaN(tmp[i][q])){
        						continue;
        					}
        					tmp[i][p]=tmp[i][q];tmp[i][q]=0/0;break;
        				}
        			}
        		}
            	for(var tp=2;tp>=0;tp--){
            		if(tmp[i][tp]==tmp[i][tp+1]){
            			tmp[i][tp+1]+=tmp[i][tp];
            			//胜利判定
            			if(tmp[i][tp+1]==2048) win=true;
            			for(var tq=tp-1;tq>=0;tq--){
            				tmp[i][tq+1]=tmp[i][tq];
            			}
            			tmp[i][0]=0/0;
            			break;
            		}
            	}
            }
    	}
        //console.log(tmp);
        if(direc<2){
        	for(var i=0;i<4;i++){
        		//tmp[i]=new Array();
        		$('.c'+i).each(function(j){
        			//tmp[i][j]=parseInt($(this).text());
        			$(this).text(tmp[i][j]);
        			$(this).removeClass('empty rank2 rank4 rank8 rank16 rank32 rank64 rank128 rank256 rank512 rank1024 rank2048');
        			if(isNaN(tmp[i][j])){
        				$(this).text('');
        				$(this).addClass('empty');
        			}
        			else{
        				$(this).addClass('rank'+tmp[i][j]);
        			}
        		})
        		
        		//console.log(tmp[i]);
        	}
        }
        else{
        	for(var i=0;i<4;i++){
        		//tmp[i]=new Array();
        		$('.r'+i).each(function(j){
        			//tmp[i][j]=parseInt($(this).text());
        			$(this).text(tmp[i][j]);
        			$(this).removeClass('empty rank2 rank4 rank8 rank16 rank32 rank64 rank128 rank256 rank512 rank1024 rank2048');
        			if(isNaN(tmp[i][j])){
        				$(this).text('');
        				$(this).addClass('empty');
        			}
        			else{
        				$(this).addClass('rank'+tmp[i][j]);
        			}
        		})
        		
        		//console.log(tmp[i]);
        	}
        }
        //胜利判定
        if(win==true){
        	//#todo 显示胜利画面
        	console.log("win");
        	alert("you win");
        }
        var length=$('.empty').length;
        //失败判定
        if(length==0){
        	lose=true;
        	for(var i=0;i<3;i++){
        		for(var j=0;j<4;j++){
        			if(tmp[i+1][j]==tmp[i][j]){lose=false;break;}
        			if(tmp[i][j+1]==tmp[i][j]){lose=false;break;}
        		}
        		if(lose==false) break;
        	}
        }
        if(lose==true){
        	//#todo 显示失败画面
        	console.log("lose");
        	alert("you lose");
        }
		var newblock=Tool.getRandom(1,2)*2;
        $('.empty').eq(Tool.getRandom(0,length)).addClass('rank'+newblock).removeClass('empty').text(newblock);
    };
    
