/*
* we'll evechaly use the youtube API but for now I'll jus simalte it
*/
var Video = {
	Items:[ "35bQqNrw0sg"],
	video: $('<iframe style =" width: 99%; height :315px;" >'),
	appendLast : function(number){
		var src 
		for(var x = 0; x<= number; x++){
			if( this.Items[this.Items.length-(1+x)] !== undefined){
				src = "https://www.youtube.com/embed/"+this.Items[this.Items.length-(1+x)]
				this.video.attr("src",src);
				$("body").append(this.video);
			}
		}
	},
	/*
	* @pram lastpart is the video Id (the part after the /embed/ in the embed URL) 
	*/
	addVideo: function(lastpart){
		this.Items.push(lastpart)
	}
}