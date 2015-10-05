$("document").ready(function(){


var sportsData = [
	 {
	 	name: "NBA",
		long_name:"National Basketball Association",
		sport: "Basketball", 
		teams: 30, 
		players: 441, 
		average_salary:4522283, 
		avg_attendance: 17721, 
		top_payer: "Brooklyn Nets"

	}, 

	{
		name: "IPL",
		long_name:"Indian Premier League",
		sport: "Cricket", 
		teams: 9, 
		players: 147, 
		average_salary:4186379, 
		avg_attendance: 23763, 
		top_payer: "Mumbai Indians"
	},

	{
		name: "MLB",
		long_name:"Major League Baseball",
		sport: "Baseball",
		teams: 30, 
		players: 856, 
		average_salary:3932912, 
		avg_attendance: 30514, 
		top_payer: "New York Yankees"

	},

	{
		name: "EPL",
		long_name:"English Premier League",
		sport:"Football",
		teams: 20, 
		players: 500, 
		average_salary:3453779, 
		avg_attendance: 35931, 
		top_payer: "Manchester City"

	},

	{
		name: "NHL",
		long_name:"National Hockey League",
		sport:"Hockey",
		teams: 30, 
		players: 763, 
		average_salary:2424080, 
		avg_attendance: 17455, 
		top_payer: "Chicago Blackhawks"

	}, 

	{
		name: "Bundesliga",
		long_name:"Bundesliga",
		sport:"Football",
		teams: 18, 
		players: 456, 
		average_salary: 2212952, 
		avg_attendance: 41914, 
		top_payer: "Bayern Munich"

	}, 

	{
		name: "Serie A",
		long_name:"Serie A",
		sport:"Football",
		teams: 20, 
		players: 564, 
		average_salary:1995869, 
		avg_attendance: 23300, 
		top_payer: "Juventus"

	}, 	

	{
		name: "NFL",
		long_name:"National Football League",
		sport: "Am. Football",
		teams: 32, 
		players: 1696, 
		average_salary:1955966, 
		avg_attendance: 67591, 
		top_payer: "Minnesota Vikings"

	}, 

	{
		name: "La Liga",
		long_name:"La Liga",
		sport:"Football",
		teams: 20, 
		players: 501, 
		average_salary:1842942, 
		avg_attendance : 29330, 
		top_payer: "Real Madrid"

	}, 

	{
		name: "NPB",
		long_name:"Nippon Professional Baseball",
		sport: "Baseball",
		teams: 12, 
		players: 324, 
		average_salary:604940, 
		avg_attendance: 25518, 
		top_payer: "Yomiuri Giants"

	}

];


var chart = new tauCharts.Chart({
            data: sportsData,
            type: 'scatterplot',
            x: 'avg_attendance',
            y: 'average_salary',
            color: 'sport',
            size: 'players',
            plugins: [
            	tauCharts.api.plugins.get('tooltip')({fields:[ "long_name", "sport", "teams", "players", "average_salary", "avg_attendance", "top_payer"]}), 
            	tauCharts.api.plugins.get('legend')()
            ]
        });
chart.renderTo('#scatterplot');


});


