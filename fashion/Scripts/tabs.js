var tabs = function(){

  return{
	info : null,
	target : null,
	name : null,
	height : null,
	width : null,
	
	create : function(obj){

		this.target = document.getElementById(obj.target);
		this.info = obj.info;
		this.name = obj.name;
		this.height = obj.height;
		this.width = obj.width;
		
		this.target.style.height = this.height;
		
		for(var i=0;i<this.info.length;i++){
			var tab = document.createElement("div");
			tab.setAttribute('id',this.name+'tab'+i);
			tab.className = 'taboff';
			var html = this.info[i].label;
			if(this.info[i].icon != null) 
			  html += " <div style=';margin:auto;padding-left:5px;display:inline;'><img  style='vertical-align:middle' src='"+this.info[i].icon+"' /></div>"
			tab.innerHTML = html;
			
			var self = this;
			tab.onclick = function(){
				for (var i = 0; i < self.info.length; i++) {
					var tab = document.getElementById(self.name+'tab'+i);
					var content = document.getElementById(self.info[i].content);
					if(tab==this){
						tab.className = "tabon";
						content.style.display = 'block';
					}else{
						content.style.display = 'none';
						tab.className = "taboff";						
					}
				}				
			};
			
			tab.style.height = "22px";
			this.target.appendChild(tab);
			
			var cont = document.getElementById(this.info[i].content);
			cont.style.left = 0;
			cont.style.display = 'none';
			cont.style.width = this.width;
			cont.style.top = (tab.offsetHeight - 1) + 'px';
			cont.style.height = parseInt(this.height) - (tab.offsetHeight - 1) +"px";
		}
		
		document.getElementById(this.name+'tab0').className = "tabon";
		document.getElementById(this.info[0].content).style.display='block';

	}	

  };
}
