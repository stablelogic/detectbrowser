(function(){
	Info = {
		out: undefined,
		userAgent: undefined,
		init: function(){
			this.out = document.getElementById("sysinfo");
			this.userAgent = navigator.userAgent.toLowerCase();
			return this;
		},
		getClientScreenResolution: function(){
			var resolution = "unknown",
				colorDepth = screen.colorDepth.toString();
			if (colorDepth == 24 || colorDepth == 32){
				colorDepth = 'True Color (24bit)';
			}
			return screen.width.toString() + "x" + screen.height.toString() + ", " + colorDepth;
		},
		getVersion: function(vers){
			for (var key in vers){
				if (vers[key]["regExp"].test(this.userAgent)){
					var result = this.userAgent.match(vers[key]["regExp"]);
					return vers[key]["displayName"]+((result[1])?" "+result[1]:""); /*result[1] - this is version's number*/
				}
			}
		},
		getOSVersion: function(){
			var OS = {
				win7:{
					regExp:/windows nt 6\.1/i,
					displayName:"Windows 7",
					},
				winVista:{
					regExp:/windows nt 6\.0/i,
					displayName:"Windows Vista",
					},
				winXP:{
					regExp:/windows xp|windows nt 5\.1/i,
					displayName:"Windows XP",
					},
				win2K:{
					regExp:/windows 2000|windows nt 5\.0/i,
					displayName:"Windows 2000",
					},
				winNT:{
					regExp:/winnt|windows nt|winnt4.0|windows nt 4.0/i,
					displayName:"Windows NT 4.0",
					},
				winME:{
					regExp:/win 9x 4\.90|windows me/i,
					displayName:"Windows ME",
					},
				win98:{
					regExp:/win98|windows 98/i,
					displayName:"Windows 98",
					},
				win95:{
					regExp:/win95|windows 95/i,
					displayName:"Windows 95",
					},
				winCE:{
					regExp:/windows ce[ ]?([0-9]{1,2}.[0-9]{1,2})?/i,
					displayName:"Windows Mobile",	
					},
				mac86K:{
					regExp:/mac_68000|68K/i,
					displayName:"Macintosh 68000",
					},
				macPPC:{
					regExp:/mac_powerpc|ppc/i,
					displayName:"Macintosh PowerPC",
					},
				macOS:{
					regExp:/mac|macintosh/i,
					displayName:"Macintosh",
					},
				android:{
					regExp:/android.([0-9]{1,2}.[0-9]{1,2})/i,
					displayName:"Android",
					},
				linux:{
					regExp:/linux/i,
					displayName:"Linux",
					},
				ubuntu:{
					regExp:/ubuntu/i,
					displayName:"Ubuntu",
					},
				freeBSD:{
					regExp:/freebsd/i,
					displayName:"FreeBSD",
					},
				openBSD:{
					regExp:/openbsd/i,
					displayName:"OpenBSD",
					},
				irix:{
					regExp:/irix/i,
					displayName:"IRIX",
					},
				os2:{
					regExp:/os\/2/i,
					displayName:"OS/2",
					},
				unix:{
					regExp:/unix|hp-ux/i,
					displayName:"Unix",
					},
				sunOS:{
					regExp:/sunos ([0-9]{1,2}.[0-9]{1,2})?/i,
					displayName:"SunOS",	
					},
				beOS:{
					regExp:/beos r([0-9]{1,2}.[0-9]{1,2})?/i,
					displayName:"BeOS",	
					},
				unknown:{
					regExp:/.*/i,
					displayName:"unknown",
					}
			};
			return this.getVersion(OS);
		},
		getBrowserVersion: function(){
			browser = {
				operaMini:{
					regExp:/opera mini\/([0-9]{1,2}.[0-9]{1,3})?|opera mini/i,
					displayName:"Opera Mini",
					},
				opera:{
					regExp:/opera[\/ ][0-9]{1,2}.[0-9]{1,3}.*version\/([0-9]{1,2}.[0-9]{1,3})|opera .*version\/([0-9]{1,2}.[0-9]{1,3})/i,
					displayName:"Opera",
					},
				operaOther:{
					regExp:/opera[\/ ]([0-9]{1,2}.[0-9]{1,3})?/i,
					displayName:"Opera",
					},	
				iceweasel:{
					regExp:/iceweasel\/([0-9]{1,2}.[0-9]{1,2})/i,
					displayName:"IceWeasel",
					},
				konqueror:{
					regExp:/konqueror\/([0-9]{1,2}.[0-9]{1,3})/i,
					displayName:"Konqueror",
					},
				lynx:{
					regExp:/(lynx)\/([0-9]{1,2}.[0-9]{1,2}.[0-9]{1,2})/i,
					displayName:"Lynx",
					},
				flock:{
					regExp:/flock\/([0-9]{1,2}.[0-9]{1,2}.[0-9]{1,2})/i,
					displayName:"Flock",
					},
				aol:{
					regExp:/america online browser 1.1; rev([0-9]{1,2}.[0-9]{1,2});/i,
					displayName:"AOL Explorer",
					},
				avant:{
					regExp:/avant browser|advanced browser/i,
					displayName:"Avant Browser",
					},
				minimo:{
					regExp:/minimo\/([0-9]{1,2}.[0-9]{1,3})/i,
					displayName:"Minimo",
					},
				amaya:{
					regExp:/amaya\/([0-9]{1,2}.[0-9]{1,3})/i,
					displayName:"Amaya",
					},
				msie:{
					regExp:/msie ([0-9]{1,2}.[0-9]{1,3})/i,
					displayName:"MS Internet Explorer",
					},
				netscape6:{
					regExp:/netscape6\/(6.[0-9]{1,3})/i,
					displayName:"Netscape",
					},
				chrome:{
					regExp:/chrome\/([0-9]{1,2}.[0-9]{1,2})/i,
					displayName:"Google Chrome",
					},
				safari:{
					regExp:/version\/([.0-9]{1,5}).safari/i,
					displayName:"Safari",
					},
				mobileSafari:{
					regExp:/mobile.safari\/([0-9]{1-3}.[0-9]{1-2}(?:.[0-9]{1,2})?)/i,
					displayName:"Mobile Safari",
					},
				playstation:{
					regExp:/playstation ([0-9]{1,3});/i,
					displayName:"PlayStation",
					},
				firefox:{
					regExp:/mozilla.*firefox\/([0-9]{1,2}.[0-9,a-z]{1,6}(?:.[0-9,a-z]{1,6})?)/i,
					displayName:"Mozilla Firefox",
					},
				netscape:{
					regExp:/mozilla\/([0-9]{1,2}.[0-9]{1,3})/i,
					displayName:"Netscape",
					},
				firefox5:{
					regExp:/mozilla\/5.*firefox\/([0-9]{1,2}.[0-9,a-z]{1,6}.[0-9,a-z]{1,6})/i,
					displayName:"Mozilla Firefox",
					},
				netscapeOther:{
					regExp:/mozilla\/5/i,
					displayName:"Netscape",
					},
				w3m:{
					regExp:/w3m/i,
					displayName:"w3m",
					},
				unknown:{
						regExp:/.*/i,
						displayName:"unknown",
					}
			};
			return this.getVersion(browser);
		},
		write: function(){
			var txt="System Information:<br/>";
			txt+=this.getBrowserVersion()+"<br/>";
			txt+=this.getOSVersion()+"<br/>";
			txt+=this.getClientScreenResolution()+"<br/>";
			this.out.innerHTML = txt;
		}
	};
	
	/*onload run this first*/
	getInfo = function(){
		var info = Info.init();
		info.write();
	};

	/* ***** Attach a function to the onload event ****************** */
	if (window.addEventListener) {
		window.addEventListener('load', getInfo, false);
	}
	else if (window.attachEvent) {
		window.attachEvent('onload', getInfo);
	}
})();