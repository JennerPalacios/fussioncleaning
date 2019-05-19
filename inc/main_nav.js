var nav_menu=""
	+"<nav>\n"
	+"	<ul>\n";
	if(page==="home"){nav_menu=nav_menu+"		<li class=\"here1\"><a href=\"index.html\">home</a></li>\n"}else{nav_menu=nav_menu+"		<li><a href=\"index.html\">home</a></li>\n"}
	if(page==="services"){nav_menu=nav_menu+"		<li class=\"here2\"><a href=\"services.html\">services</a></li>\n"}else{nav_menu=nav_menu+"		<li><a href=\"services.html\">services</a></li>\n"}
	if(page==="estimates"){nav_menu=nav_menu+"		<li class=\"here3\"><a href=\"estimates.html\">estimates</a></li>\n"}else{nav_menu=nav_menu+"		<li><a href=\"estimates.html\">estimates</a></li>\n"}
	if(page==="contact"){nav_menu=nav_menu+"		<li class=\"here4\"><a href=\"contact.html\">contact</a></li>\n"}else{nav_menu=nav_menu+"		<li><a href=\"contact.html\">contact</a></li>\n"}
	if(page==="about"){nav_menu=nav_menu+"		<li class=\"here5\"><a href=\"about.html\">about</a></li>\n"}else{nav_menu=nav_menu+"		<li><a href=\"about.html\">about</a></li>\n"}
	nav_menu=nav_menu+"	</ul>\n"
	+"</nav>";
document.write(nav_menu);