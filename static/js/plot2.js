// Money_of_the_Future project
// Auhor: Inna Baloyan
// Project Stock data: AAPL("Apple"), MSFT("Microsoft"), Intel("INTC"), IBM("IBM")   
// Plot Volume data for all 4 securities

//////////////////////////////////////////////////////////////////
// Build IBM Plot

var stock3 = "IBM";

function buildPlot3(stock3) {

  // Get stock data by using json in app routes     
  var url3 = `http://127.0.0.1:5000/IBMY`

  console.log( "URL3", url3)

  d3.json(url3).then(function(data3) {

    var name3 = "IBM"; // for the legend on the side of the graph
    var labels3 = data3.title;
    var startDate = "1962-01-31";
    var endDate = "2018-09-30";
    var dates3 = data3.Dates;
    var volume3 = data3.Volume;
    console.log( "Data3", data3)

    var trace3 = {
      type: "scatter",
      mode: "lines",
      name: name3,
      x: dates3,
      y: volume3,
      line: {
        color: "green",
        width: 3
      },
      font: {
        family: 'Arial',
        size: 16,
        color: 'black'
      },
      text: labels3
    };

    var data3 = [trace3];

    var layout = {
      showlegend: true,
      // height: 1200,
      // width: 1200,
      title: "Microsoft, Apple, Intel, IBM Stocks Volume Change over Security Life Span",
      xaxis: {
        title: "Securities Life Span",
        font: {
          family: 'Arial',
          size: 16,
          color: 'black'
        },
        range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        title: "Volume Change",
        autorange: true,
        type: "linear"
      }
    };
  
      // Create new Plot1 with IBM Data
       Plotly.newPlot("plot2", data3, layout);

  });
}
//////////////////////////////////////////////////////////////////
  // Build the plot with the new stock
  buildPlot3("IBM");


// Build MICROSOFT Plot
var stock1 = "MSFT";

function buildPlot1(stock1) {

  // Get stock data by using json in app routes     
  var url1 = `http://127.0.0.1:5000/MSFTY`

  console.log( "URL1", url1)

  d3.json(url1).then(function(data1) {

    // Grab values from the response json object to build the plots
    // var name = data.dataset.name;
    // var stock = data.dataset.dataset_code;
    // var startDate = data.dataset.start_date;
    // var endDate = data.dataset.end_date;
    // var dates = unpack(data.dataset.data, 0);
    // var closingPrices = unpack(data.dataset.data, 1);

    var name1 = "Microsoft"; // for the legend on the side of the graph
    var labels1 = data1.title;
    // var startDate = "1980-12-31";
    // var endDate = "2018-09-30";
    var dates1 = data1.Dates;
    var volume1 = data1.Volume;
    console.log( "Data1", data1)

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: name1,
      x: dates1,
      y: volume1,
      line: {
        color: "#17BECF", // bluish color
        width: 3
      },
      font: {
        family: 'Arial',
        size: 16,
        color: 'black'
      },
      text: labels1
    };

    var data1 = [trace1];
     
    // Update Plot1 with Microsoft Data
       Plotly.addTraces("plot2", data1);

  });
}
//////////////////////////////////////////////////////////////////
  // Build the plot with the new stock
  buildPlot1("MSFT");

// ///////////////////////////////////////////////////////
// Build Apple Plot

var stock2 = "AAPL";

function buildPlot2(stock2) {

  // Get stock data by using json in app routes     
  var url2 = `http://127.0.0.1:5000/applY`

  console.log( "URL2", url2)

  d3.json(url2).then(function(data2) {

    var name2 = "Apple"; // for the legend on the side of the graph
    var labels2 = data2.title;
    // var startDate = "1980-12-31";
    // var endDate = "2018-09-30";
    var dates2 = data2.Dates;
    var volume2 = data2.Volume;
    console.log( "Data2", data2)

    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: name2,
      x: dates2,
      y: volume2,
      line: {
        color: "red",
        width: 2
      },
      font: {
        family: 'Arial',
        size: 16,
        color: 'black'
      },
      text: labels2
    };

    var data2 = [trace2];

       // Update Plot1 with Apple Data
       Plotly.addTraces("plot2", data2);

  });
}

  // Build the plot with the new stock
  buildPlot2("AAPL");

// ///////////////////////////////////////////////////////
// Build Intel Plot

var stock4 = "INTC";

function buildPlot4(stock4) {

  // Get stock data by using json in app routes     
  var url4 = `http://127.0.0.1:5000/IntelY`

  console.log( "URL4", url4)

  d3.json(url4).then(function(data4) {

    var name4 = "Intel"; // for the legend on the side of the graph
    var labels4 = data4.title;
    // var startDate = "1980-12-31";
    // var endDate = "2018-09-30";
    var dates4 = data4.Dates;
    var volume4 = data4.volume;
    // for( var i = 0 ; i < PercentChanges4.length ; i++ ) {
    //   PercentChanges4[i] = PercentChanges4[i] + "%";
    //   console.log ( "PercentChanges4", PercentChanges4)
    // };
    console.log( "Data4", data4)

    var trace4 = {
      type: "scatter",
      mode: "lines",
      name: name4,
      x: dates4,
      y: volume4,
      line: {
        color: "gold",
        width: 2
      },
      font: {
        family: 'Arial',
        size: 16,
        color: 'black'
      },
      text: labels4
    };

    var data4 = [trace4];

      // Update Plot1 with Intel Data
       Plotly.addTraces("plot2", data4);

  });
}

  // Build the plot with the new stock
  buildPlot4("INTC");