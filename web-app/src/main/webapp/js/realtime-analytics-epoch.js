
var lineChartData = [];
realtimeAnalytics = {
    initDashboardPageCharts: function (wsEndpoint) {
        /* ----------==========     Realtime Chart One initialization    ==========---------- */




        if (wsEndpoint) {
            connect(wsEndpoint);
        } else {
            updateGraphs();
        }
        var ws;

        // close websocket when page is about to be unloaded
        // fixes broken pipe issue
        window.onbeforeunload = function () {
            disconnect();
        };

        //websocket connection
        function connect(target) {
            if ('WebSocket' in window) {
                ws = new WebSocket(target);
            } else if ('MozWebSocket' in window) {
                console.log('realtime mozsocket');
                ws = new MozWebSocket(target);
            } else {
                console.log('WebSocket is not supported by this browser.');
            }
            if (ws) {

                ws.onmessage = function (event) {
                    console.log('in');
                    var data = event.data;
                    var dataPoint = JSON.parse(data).event.payloadData;
                    var varOne=dataPoint[typeParameter1];
                    var varTwo=dataPoint[typeParameter2];
                    var varThree=dataPoint[typeParameter3];
                    var varFour=dataPoint[typeParameter4];
                    var varFive=dataPoint[typeParameter5];



                    var currentTime = new Date();
                    var sinceText = timeDifference(currentTime, new Date(dataPoint.timeStamp), false) + " ago";
                    updateStatusCards(sinceText,varOne, varTwo, varThree,varFour);


                   // var lastUpdatedText = "<i class=\"material-icons\">access_time</i> updated "+timeDifference(currentTime, lastUpdatedTime)+" ago";

              

                   // updateGraphs();
                };

            }



        }



        function disconnect() {
            if (ws != null) {
                ws.close();
                ws = null;
            }
        }
         function gettimevalue() {
            var dateBuffer = new Date();
            var Time = dateBuffer.getTime();
            return Time;
        }
        function updatechart() {

            var newBarChartData = [{x: d.getTime(), y:getRandomInt(100)}];
            console.log(d.getTime());
            linechart.push(newBarChartData);
            console.log('ds');
        }
    },

    createLiFo : function(arr, length){
        arr.push = function (){
            if (this.length >= length) {
                this.shift();
            }
            return Array.prototype.push.apply(this,arguments);
        };
    },

    calcTimeDiff: function (arr, arrRef) {
        var now = new Date();
        for (var i = 0; i < arr.length; i++) {
            arr[i] = timeDifference(now, arrRef[i], true);
        }
    },


};