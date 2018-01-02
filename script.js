//There are 4 albums divs in my website. Within each div, there are audio files with ids named love, young, dark, and wings named after the albums (divs) they are which is located in the HTML. 
function young(){ 
	//The function of "young" happens when the user clicks on the image of the album Young Forever.  
	//The 3 audio files that were not clicked on, will pause their audio sounds when the young album is clicked because I specifically stated that the element that has these ids's in the HTML will pause their audio. 
	document.getElementById("love").pause();
	document.getElementById("wings").pause();
	document.getElementById("dark").pause();
	//Then, the audio file with the id of young(the album that I clicked on) will start play their most popular song on that album when I specifically got the young element's id of "young" from the HTML and made that audio sound play.
    document.getElementById("young").play();
}
function dark(){
	document.getElementById("love").pause();
	document.getElementById("young").pause();
	document.getElementById("wings").pause();
	document.getElementById("dark").play();
}
function love(){
	document.getElementById("dark").pause();
	document.getElementById("young").pause();
	document.getElementById("wings").pause();
    document.getElementById("love").play();
}
function wings(){
	document.getElementById("dark").pause();
	document.getElementById("young").pause();
	document.getElementById("love").pause();
    document.getElementById("wings").play();
}
//The 4 albums also have an effect when you hover over it. The div of the albums have the function "opacity" when mouse is over it in the HTML. This will make the element that was hovered on add the CSS class "opacity" and will change the appearance of the album.
function opacity(elem){
	elem.classList.add("opacity");
}	
//This function is in the divs of the 4 albums on "onmouseover" in the HTML. When the user hovers out of the div of the album, it will take out the class "opacity" from the HTML making the image of the album go back to the orginial picture. 
function regular(elem){
	elem.classList.remove("opacity");
}	

//This is the javascript for the 7 members
//This function "picture" is in the HTML divs of the 7 members on "onmouseout." When the user hovers out of the divs of the 7 boys, it will remove the HTML text. 
function picture(elem){
	elem.innerHTML="";
}
//The function "jinfacts" is only in the jin picture div with the id of "jin". When the user hovers over this div, the div is going to remove the CSS class "jin" which is the picture of jin in the HTML. It is also going to add text in that div.
function jinfacts(){
	document.getElementById("jin").classList.remove("jin");
	document.getElementById("jin").innerHTML = "Kim Seok Jin also known as Jin was born on december 4, 1992. He loves strawberries but not strawberry flavored things, Disney Princesses and Super Mario. He is also the worst dancer in the group.";
}
//The function "jinpicture" is for the div with the picture of jin. The jin div has the id of "jin" in the HTML. This function will find the element by the id in the HTML and add the CSS class "jin" to that div making it change from text to a picture of him because of the cascade effect.
function jinpicture(){
	document.getElementById("jin").classList.add("jin");
}
function rapmonfacts(){
	document.getElementById("rapmon").classList.remove("rapmon");
	document.getElementById("rapmon").innerHTML = "Kim Nam-Joon also known as Rap Monster is the leader of the group. He learned English by watching the show Friends and has composed or produced atleast 120 songs.";
}
function rapmonpicture(){
	document.getElementById("rapmon").classList.add("rapmon");
} 
function jhopefacts(){
	document.getElementById("jhope").classList.remove("jhope");
	document.getElementById("jhope").innerHTML = "Jung Ho-seok also known as J-Hope was born Febraury 18, 1994. He is the mood maker, dance leader and the energy vitamin of the group. He also hates snakes and has a dog named Mickey.";
}
function jhopepicture(){
	document.getElementById("jhope").classList.add("jhope");
}	 
function jiminfacts(){
	document.getElementById("jimin").classList.remove("jimin");
	document.getElementById("jimin").innerHTML = "Park Jimin was born October 13, 1995 and is the shortest member of the group. His stage name was suppose to be Baby J or Young Kid and he was the last member to join BTS.";
}
function jiminpicture(){
	document.getElementById("jimin").classList.add("jimin");
}
function jkfacts(){
	document.getElementById("jk").classList.remove("jk");
	document.getElementById("jk").innerHTML = "Jeon Jongkook was born September 1, 1997 and is the maknae (youngest) in BTS.  He has a black belt in Taekwondo and his favorite times of the day is resting time, free time and eating time.";
}
function jkpicture(){
	document.getElementById("jk").classList.add("jk");
}	 
function vfacts(){
	document.getElementById("v").classList.remove("v");
	document.getElementById("v").innerHTML = "Kim Taehyung also known as V was born December 30, 1995 with the zodiac sign is Capricorn. He loves bubbles, his favorite number is 10, he can speak Japanese and is the pickest eater of the group.";
}
function vpicture(){
	document.getElementById("v").classList.add("v");
}
function sugafacts(){
	document.getElementById("suga").classList.remove("suga");
	document.getElementById("suga").innerHTML = "Min Yoon Gi also known as Suga was born March 9, 1993. He got that stage name because he is sweet as sugar. He loves basketball and is known for being like a granpa because he likes to whine.";
}
function sugapicture(){
	document.getElementById("suga").classList.add("suga");
}	 
