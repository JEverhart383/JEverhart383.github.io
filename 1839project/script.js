
//2015 
var StartDate2015 = "2015-06-01"; 
var EndDate2015 = "2015-08-31" ; 

//2014 
var StartDate2014 = "2014-06-01"; 
var EndDate2014 = "2014-08-31"; 

//create SVGs 
var svg = dimple.newSvg("#viewsChart", 1200, 500);
var svg2 = dimple.newSvg("#participateChart", 1200, 500);


// define function to write charts with data path and term name as variables

function categoryOverview(catDataPath){

	var svg = dimple.newSvg("#chart3", 1000, 500);
    d3.json(catDataPath, function (data) { 	

      var myChart = new dimple.chart(svg, data); 
      myChart.setBounds(65, 30, 950, 400)
      myChart.addCategoryAxis("x", "term_name");
      myChart.addMeasureAxis("y", "views");
      myChart.addMeasureAxis("z", "views");
      myChart.addSeries("category", dimple.plot.bubble);
      myChart.addLegend(900, 100, 100, 200, "right");
      myChart.draw();
    });
}


function trimData(data, startDate, endDate){

	var trimmedData = []; 

			//adjust start and end dates for 2 week window 
			startDate = new Date(startDate); 
			startDate = new Date(startDate - 1209600000); 

			endDate = new Date(endDate); 
			endDate = new Date(endDate + 1209600000); 

		for (var i = 0; i < data.length; i++){
				if (new Date(data[i].date) >= startDate && new Date(data[i].date) <= endDate){
					trimmedData.push(data[i]); 
				}
			}
	return trimmedData;
}



function calcPercentChange(oldValue, newValue){

	var percentChange = ((newValue - oldValue)/ oldValue) * 100; 

	percentChange = Math.round(percentChange); 

	return percentChange; 
}


function createStats(statsPath){

	d3.json(statsPath, function(data){

		console.log(data); 

		d3.select(".total-courses-2014").text(data.stats2014[0].courses); 
		d3.select(".total-teachers-2014").text(data.stats2014[0].teachers); 
		d3.select(".total-students-2014").text(data.stats2014[0].students);
		d3.select(".total-discussions-2014").text(data.stats2014[0].discussion_topics);
		d3.select(".total-media-2014").text(data.stats2014[0].media_objects);
		d3.select(".total-attachments-2014").text(data.stats2014[0].attachments);
		d3.select(".total-assignments-2014").text(data.stats2014[0].assignments);

		d3.select(".total-courses-2015").text(data.stats2015[0].courses); 
		d3.select(".total-teachers-2015").text(data.stats2015[0].teachers); 
		d3.select(".total-students-2015").text(data.stats2015[0].students);
		d3.select(".total-discussions-2015").text(data.stats2015[0].discussion_topics);
		d3.select(".total-media-2015").text(data.stats2015[0].media_objects);
		d3.select(".total-attachments-2015").text(data.stats2015[0].attachments);
		d3.select(".total-assignments-2015").text(data.stats2015[0].assignments);	



		d3.select(".percent-change-courses").text(calcPercentChange(data.stats2014[0].courses, data.stats2015[0].courses) + " %");
		d3.select(".percent-change-teachers").text(calcPercentChange(data.stats2014[0].teachers, data.stats2015[0].teachers) + " %"); 
		d3.select(".percent-change-students").text(calcPercentChange(data.stats2014[0].students, data.stats2015[0].students) + " %"); 

		d3.select(".percent-change-assignments").text(calcPercentChange(data.stats2014[0].assignments, data.stats2015[0].assignments) + " %" ); 	
		d3.select(".percent-change-attachments").text(calcPercentChange(data.stats2014[0].attachments, data.stats2015[0].attachments) + " %" );
		d3.select(".percent-change-media").text(calcPercentChange(data.stats2014[0].media_objects, data.stats2015[0].media_objects) + " %" );
		d3.select(".percent-change-discussions").text(calcPercentChange(data.stats2014[0].discussion_topics, data.stats2015[0].discussion_topics) + " %" );


	});

}




function createCharts(dataPath){
 
	d3.json(dataPath, function(data){  

			var untrimmed2014 = data.by_date_2014;
			var untrimmed2015 = data.by_date_2015;  

			var trimmed2014 = trimData(untrimmed2014, StartDate2014, EndDate2014); 
			var trimmed2015 = trimData(untrimmed2015, StartDate2015, EndDate2015); 
 
			var viewsArray2014 = []; 
			
			for (var i = 0; i < trimmed2014.length; i ++){
				viewsArray2014.push(trimmed2014[i].views); 
			}

			var totalViews2014 = d3.sum(viewsArray2014);
			var meanViews2014 = Math.round(d3.mean(viewsArray2014) * 100)/100;



			var viewsArray2015 = [];

			for (var i = 0; i < trimmed2015.length; i ++){
				viewsArray2015.push(trimmed2015[i].views); 
			}

			var totalViews2015 = d3.sum(viewsArray2015);
			var meanViews2015 = Math.round(d3.mean(viewsArray2015) * 100)/100;


			var participateArray2014 =[];

			for (var i = 0; i < trimmed2014.length; i ++){
				participateArray2014.push(trimmed2014[i].participations); 
			} 

			totalParticipate2014 = d3.sum(participateArray2014); 
			meanParticipate2014 = Math.round(d3.mean(participateArray2014) * 100)/100;

			var participateArray2015 =[];

			for (var i = 0; i < trimmed2015.length; i ++){
				participateArray2015.push(trimmed2015[i].participations); 
			} 

			totalParticipate2015 = d3.sum(participateArray2015); 
			meanParticipate2015 = Math.round(d3.mean(participateArray2015) * 100)/100; 

			

			d3.select(".total-views-2014").text(totalViews2014.toLocaleString()); 
			d3.select(".mean-views-2014").text(meanViews2014.toLocaleString()); 
			d3.select(".total-participations-2014").text(totalParticipate2014.toLocaleString()); 
			d3.select(".mean-participations-2014").text(meanParticipate2014.toLocaleString()); 


			d3.select(".total-views-2015").text(totalViews2015.toLocaleString()); 
			d3.select(".mean-views-2015").text(meanViews2015.toLocaleString()); 
			d3.select(".total-participations-2015").text(totalParticipate2015.toLocaleString()); 
			d3.select(".mean-participations-2015").text(meanParticipate2015.toLocaleString()); 

			d3.select(".percent-change-total-views").text(calcPercentChange(totalViews2014, totalViews2015) + " %"); 
			d3.select(".percent-change-mean-views").text(calcPercentChange(meanViews2014, meanViews2015) + " %"); 
			d3.select(".percent-change-total-participations").text(calcPercentChange(totalParticipate2014, totalParticipate2015) + " %"); 
			d3.select(".percent-change-mean-participations").text(calcPercentChange(meanParticipate2014, meanParticipate2015)  + " %"); 


			//Use trimmed data to create new array with objects 

			var totalAnalyticsArray = []; 

			for (var i = 0; i < trimmed2014.length; i ++){
				totalAnalyticsArray.push({
					"term" : "2014", 
					"date" : trimmed2014[i].date, 
					"views" : trimmed2014[i].views, 
					"participations" : trimmed2014[i].participations
					}); 
			} 

			for (var i = 0; i < trimmed2015.length; i ++){
				totalAnalyticsArray.push({
					"term" : "2015", 
					"date" : trimmed2015[i].date, 
					"views" : trimmed2015[i].views, 
					"participations" : trimmed2015[i].participations
					}); 
			}

			var myChart = new dimple.chart(svg, totalAnalyticsArray); 
			myChart.setBounds(60,30, 1100, 400); 
			var d = myChart.addTimeAxis("x", "date", "%Y-%m-%d", "%a-%m-%d-%Y"); 
			var y = myChart.addMeasureAxis("y", "views");  
			var s = myChart.addSeries("term" , dimple.plot.line);
			myChart.addLegend(900, 100, 100, 200, "left"); 
			myChart.draw(); 


			var myChart = new dimple.chart(svg2, totalAnalyticsArray); 
			myChart.setBounds(60,30, 1100, 400); 
			var d = myChart.addTimeAxis("x", "date", "%Y-%m-%d", "%a-%m-%d-%Y"); 
			var y = myChart.addMeasureAxis("y", "participations");  
			var s = myChart.addSeries("term" , dimple.plot.line); 
			myChart.addLegend(900, 100, 100, 200, "left");
			myChart.draw();

	});//End JSON function


}//End createCharts 



categoryOverview("data/CategoryTotal.json"); 

createStats("data/stats.json"); 

createCharts('data/analytics.json');  


