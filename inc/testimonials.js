var testimonies =[
	{
		image: "costumers/001.jpg",
		costumer: "Cipriano Gonzalez",
		date: "06/22/2018",
		quote: "This Dynamic Duo comes to clean without too much notice. They are efficient without compromising an attention to details and being thorough. They are also very dependable and trustworthy!"
	},
	{
		image: "costumers/002.jpg",
		costumer: "Terina McQuade",
		date: "06/29/2018",
		quote: "Val came recommended to us by a friend and we’ve been extremely happy with her and Gus. She is reliable, trustworthy, competent, and flexible. We would not hesitate to refer their services."
	},
	{
		image: "costumers/003.jpg",
		costumer: "Lisa White",
		date: "09/04/2018",
		quote: "Valerie and Gustavo from Fussion Cleaning do a great job cleaning my house. I appreciate that they are flexible and accommodating, and kind to my dog! He gets very excited when they come!"
	},
	{
		image: "costumers/004.jpg",
		costumer: "Rod and Luanne Johnson",
		date: "04/18/2019",
		quote: "Valerie and Gustavo are our biweekly housekeepers par excellence.  They are capable, dependable, efficient, and courteous, and we feel very fortunate to have them with us."
	},
	{
		image: "costumers/005.jpg",
		costumer: "Carol and J. Loux",
		date: "05/10/2019",
		quote: "For almost two years, Valerie and Gustavo have been helping us take care of our home. Their thoroughness, reliability and resourcefulness make them a joy to work with. We highly recommend Fussion Cleaning!"
	}
];
var testimoniesOutput="", i="";
for(i=0; i<testimonies.length; i++){
	 testimoniesOutput=testimoniesOutput+"<div>\n"
										+"	<article>\n"
										+"		<img class=\"float-left\" src=\""+testimonies[i].image+"\" />\n"
										+"		<span class=\"name\">"+testimonies[i].costumer+":</span>\n"
										+"			<blockquote>"+testimonies[i].quote+"</blockquote>\n"
										+"	</article>\n"
										+"</div>\n"
}
//<span class=\"date\">("+testimonies[i].date+")</span>