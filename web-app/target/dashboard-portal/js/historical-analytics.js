

analyticsHistory= {

    historicalChartOneLabel: ['0s'],
    historicalChartOneSeries: [0],
    historicalChartTwoLabel: ['0s'],
    historicalChartTwoSeries: [0],
    historicalChartThreeLabel: ['0s'],
    historicalChartThreeSeries: [0],
    historicalChartFourLabel: ['0s'],
    historicalChartFourSeries: [0],
    historicalChartFiveLabel: ['0s'],
    historicalChartFiveSeries: [0],
    historicalChartSixLabel: ['0s'],
    historicalChartSixSeries: [0],
    historicalChartSevenLabel: ['0s'],
    historicalChartSevenSeries: [0],
    historicalChartEightLabel: ['0s'],
    historicalChartEightSeries: [0],
    historicalChartNineLabel: ['0s'],
    historicalChartNineSeries: [0],

    historicalChartOne: {},
    historicalChartTwo: {},
    historicalChartThree: {},
    historicalChartFour: {},
    historicalChartFive : {},
    historicalChartSix:{},
    historicalChartSeven :{},
    historicalChartEight :{},
    historicalChartNine :{},


    initDashboardPageCharts: function () {

        /* ----------==========     Historical Chart One initialization    ==========---------- */
        dataHistoricalChartOne = {
            labels: analyticsHistory.historicalChartOneLabel,
            series: [
                analyticsHistory.historicalChartOneSeries
            ]
        };

        optionsHistoricalChartOne = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            showPoint: true,
            chartPadding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 10
            }
        };

        analyticsHistory.historicalChartOne =
            new Chartist.Line('#HistoricalChartOne', dataHistoricalChartOne, optionsHistoricalChartOne);
        md.startAnimationForLineChart(analyticsHistory.historicalChartOne);

        /* ----------==========     Historical Chart Two initialization    ==========---------- */
        dataHistoricalChartTwo = {
            labels: analyticsHistory.historicalChartTwoLabel,
            series: [
                analyticsHistory.historicalChartTwoSeries
            ]
        };

        optionsHistoricalChartTwo = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            chartPadding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 10
            }
        };

        analyticsHistory.historicalChartTwo =
            new Chartist.Line('#HistoricalChartTwo', dataHistoricalChartTwo, optionsHistoricalChartTwo);
        md.startAnimationForLineChart(analyticsHistory.historicalChartTwo);

        /* ----------==========     Historical Chart Three initialization    ==========---------- */
        dataHistoricalChartThree = {
            labels: analyticsHistory.historicalChartThreeLabel,
            series: [
                analyticsHistory.historicalChartThreeSeries
            ]
        };

        optionsHistoricalChartThree = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            chartPadding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 10
            }
        };

        analyticsHistory.historicalChartThree =
            new Chartist.Line('#HistoricalChartThree', dataHistoricalChartThree, optionsHistoricalChartThree);
        md.startAnimationForLineChart(analyticsHistory.historicalChartThree);


        /* ----------==========     Historical Chart Four initialization    ==========---------- */
        dataHistoricalChartFour = {
            labels: analyticsHistory.historicalChartFourLabel,
            series: [
                analyticsHistory.historicalChartFourSeries
            ]
        };

        optionsHistoricalChartFour = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            chartPadding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 10
            }
        };

        analyticsHistory.historicalChartFour =
            new Chartist.Line('#HistoricalChartFour', dataHistoricalChartFour, optionsHistoricalChartFour);
        md.startAnimationForLineChart(analyticsHistory.historicalChartFour);

        /* ----------==========     Historical Chart Five initialization    ==========---------- */
        dataHistoricalChartFive = {
            labels: analyticsHistory.historicalChartFiveLabel,
            series: [
                analyticsHistory.historicalChartFiveSeries
            ]
        };

        optionsHistoricalChartFive = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            showArea: true,
            chartPadding: {
                top: 20,
                right: 0,
                bottom: 0,
                left: 10
            }
        };

        analyticsHistory.historicalChartFive =
            new Chartist.Line('#HistoricalChartFive', dataHistoricalChartFive, optionsHistoricalChartFive);
        md.startAnimationForLineChart(analyticsHistory.historicalChartFive);
    },

    timeDifference: function (current, previous) {
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = current - previous;

        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' seconds ago';
        } else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' minutes ago';
        } else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hours ago';
        } else if (elapsed < msPerMonth) {
            return  Math.round(elapsed / msPerDay) + ' days ago';
        } else if (elapsed < msPerYear) {
            return  Math.round(elapsed / msPerMonth) + ' months ago';
        } else {
            return  Math.round(elapsed / msPerYear) + ' years ago';
        }
    },

    updateGraphs: function () {
        analyticsHistory.historicalChartOne.update();
        analyticsHistory.historicalChartTwo.update();
        analyticsHistory.historicalChartThree.update();
        analyticsHistory.historicalChartFour.update();
        analyticsHistory.historicalChartFive.update();


    },

    redrawGraphs: function (events) {

        var sumChartOne = 0;
        var sumChartTwo = 0;
        var sumChartThree=0;
        var sumChartFour=0;
        var sumChartFive=0;


        if (events.count > 0) {

            var currentTime = new Date();
            analyticsHistory.historicalChartOneLabel.length = 0;
            analyticsHistory.historicalChartOneSeries.length = 0;
            analyticsHistory.historicalChartTwoLabel.length = 0;
            analyticsHistory.historicalChartTwoSeries.length = 0;
            analyticsHistory.historicalChartThreeLabel.length = 0;
            analyticsHistory.historicalChartThreeSeries.length = 0;
            analyticsHistory.historicalChartFourLabel.length = 0;
            analyticsHistory.historicalChartFourSeries.length = 0;
            analyticsHistory.historicalChartFiveLabel.length = 0;
            analyticsHistory.historicalChartFiveSeries.length = 0;
            analyticsHistory.historicalChartSixLabel.length = 0;
            analyticsHistory.historicalChartSixSeries.length = 0;
            analyticsHistory.historicalChartSevenLabel.length = 0;
            analyticsHistory.historicalChartSevenSeries.length = 0;
            analyticsHistory.historicalChartEightLabel.length = 0;
            analyticsHistory.historicalChartEightSeries.length = 0;
            analyticsHistory.historicalChartNineLabel.length = 0;
            analyticsHistory.historicalChartNineSeries.length = 0;


            for (var i = events.records.length - 1; i >= 0; i--) {
                console.log('point '+i);
                var record= events.records[i];
                var sinceText;
                var dataPoint=record.values;
                var varOne = dataPoint[typeParameter1];
                var varTwo = dataPoint[typeParameter2];
                var varThree=dataPoint[typeParameter3];
                var varFour=dataPoint[typeParameter4];
                var varFive=dataPoint[typeParameter5];


                if (varOne)
                    sumChartOne += varOne;

                if (varTwo)
                    sumChartTwo += varTwo;

                if (varThree)
                    sumChartThree += varThree;

                if(varFour)
                    sumChartFour += varFour;

                if(varFive)
                    sumChartFive +=varFive;





                if (i === 0) {

                    var avgChartOne = sumChartOne / events.records.length;
                    var avgChartTwo = sumChartTwo / events.records.length;
                    var avgChartThree = sumChartThree / events.records.length;
                    var avgChartFour=sumChartFour/events.records.length;
                    var avgChartFive=sumChartFive/events.records.length;



                    $("#historicalChartOneLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgChartOne.toFixed(2) + " </span>average "+displayName1+units1);
                    $("#historicalChartTwoLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgChartTwo.toFixed(2) + " </span> average "+displayName2+units2);
                    $("#historicalChartThreeLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgChartThree.toFixed(2) + " </span> average "+displayName3+units3);
                    $("#historicalChartFourLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgChartFour.toFixed(2) + " </span>average "+displayName4+units4);
                    $("#historicalChartFiveLastUpdated").html("<span class=\"text-success\"><i class=\"fa fa-bolt\"></i> " + avgChartFive.toFixed(2) + " </span>average "+displayName5+units5);

                }
              sinceText=null;
                if(i=== events.records.length - 1 || i===0 || i===Math.floor(events.records.length/2)){
                    sinceText = analyticsHistory.timeDifference(currentTime, new Date(record.timestamp));
                }
                analyticsHistory.historicalChartOneSeries.push(varOne);
                analyticsHistory.historicalChartTwoSeries.push(varTwo);
                analyticsHistory.historicalChartThreeSeries.push(varThree);
                analyticsHistory.historicalChartFourSeries.push(varFour);
                analyticsHistory.historicalChartFiveSeries.push(varFive);


                analyticsHistory.historicalChartOneLabel.push(sinceText);
                analyticsHistory.historicalChartTwoLabel.push(sinceText);
                analyticsHistory.historicalChartThreeLabel.push(sinceText);
                analyticsHistory.historicalChartFourLabel.push(sinceText);
                analyticsHistory.historicalChartFiveLabel.push(sinceText);



                analyticsHistory.historicalChartOne.update();
                analyticsHistory.historicalChartTwo.update();
                analyticsHistory.historicalChartThree.update();
                analyticsHistory.historicalChartFour.update();
                analyticsHistory.historicalChartFive.update();

            }

        } else {
            //if there is no records in this period display no records
                analyticsHistory.historicalChartOneLabel= ['0s'],
                analyticsHistory.historicalChartOneSeries= [0],
                analyticsHistory.historicalChartTwoLabel= ['0s'],
                analyticsHistory.historicalChartTwoSeries= [0],
                analyticsHistory.historicalChartThreeLabel= ['0s'],
                analyticsHistory.historicalChartThreeSeries= [0],
                analyticsHistory.historicalChartFourLabel= ['0s'],
                analyticsHistory.historicalChartFourSeries= [0],
                analyticsHistory.historicalChartFiveLabel= ['0s'],
                analyticsHistory.historicalChartFiveSeries= [0],



            analyticsHistory.historicalChartOne.update({
                labels: analyticsHistory.historicalChartOneLabel,
                series: [
                    analyticsHistory.historicalChartOneSeries
                ]
            });
            analyticsHistory.historicalChartTwo.update({
                labels: analyticsHistory.historicalChartTwoLabel,
                series: [
                    analyticsHistory.historicalChartTwoSeries
                ]
            });
            analyticsHistory.historicalChartThree.update({
                labels: analyticsHistory.historicalChartThreeLabel,
                series: [
                    analyticsHistory.historicalChartThreeSeries
                ]
            });
            analyticsHistory.historicalChartFour.update({
                labels: analyticsHistory.historicalChartFourLabel,
                series: [
                    analyticsHistory.historicalChartFourSeries
                ]
            });
            analyticsHistory.historicalChartFive.update({
                labels: analyticsHistory.historicalChartFiveLabel,
                series: [
                    analyticsHistory.historicalChartFiveSeries
                ]
            });


        }
        chartsLoaded();
    }



};