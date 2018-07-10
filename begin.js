
    function begin() {
        $('.start').css('display','none');
        $('.game').css({
            'background-image':'url(./img/2.png)',
            'border':'1px solid black'
        });

        var sum='';
        for (var i=0;i<4;i++) {
			for (var j=0;j<4;j++) {
				var joy='<div class="'+'r'+i+' c'+j+' joy'+' empty"></div>';
				sum +=joy;
			}
        }
        // console.log( sum );
        $('.game').html(sum);
        $('.empty').eq(Tool.getRandom(0,15)).addClass('rank2').removeClass('empty').text(2);
        
        


    }
    
