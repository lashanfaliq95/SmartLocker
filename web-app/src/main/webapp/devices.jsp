
<%@include file="includes/authenticate.jsp" %>
<html>
<head>
    <title>Device List</title>
    <link href="css/bootstrap.min.css" rel="stylesheet"/>
    <link href="css/material-icons.css" rel="stylesheet"/>
    <link href="css/material-dashboard.css" rel="stylesheet"/>
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
          integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
          crossorigin=""/>
    <link href="css/MarkerCluster.css" rel="stylesheet">
    <link href="css/MarkerCluster.Default.css" rel="stylesheet">
    <link href="css/updates.css" rel="stylesheet"/>

</head>
<body>
<div class="wrapper">
    <div class="sidebar" data-color="blue" data-image="images/sidebar-1.jpg">
        <div class="logo">
            <a href="./devices.jsp" class="simple-text">
                <strong>Locker</strong>Portal
            </a>
        </div>
        <div class="sidebar-wrapper">
            <%@ include file="pages/device-page-segments/serachBar.jsp" %>

        </div>
    </div>
    <div class="main-panel">

        <div class="content" style="margin-top:5px ; padding: 0 0">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-plain">
                            <div class="card-header" data-background-color="blue">
                                <%@ include file="pages/device-page-segments/navBar.jsp" %>
                                <table style="width:100%">
                                    <tr>
                                        <th>
                                            <h4 class="title" style="font-size: 30px; padding-left: 10px;">Lockers
                                                enrolled</h4>
                                        </th>
                                        <th style="text-align: center">
                                            <button class="btn btn-white" data-toggle="modal"
                                                    data-target="#newDeviceModal">Add
                                                locker
                                            </button>
                                        </th>
                                    </tr>
                                </table>
                                <%@ include file="pages/device-page-segments/addDevicePopUpModal.jsp" %>
                            </div>
                            <div class="tab-content">
                                <div id="tableview" class="tab-pane fade in active" style>
                                    <%@ include file="pages/device-page-segments/tableTab.jsp" %>
                                </div>
                                <div id="mapView" class="tab-pane fade  ">
                                    <%@ include file="pages/device-page-segments/mapTab.jsp" %>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</body>
<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>
<script src="js/material.min.js" type="text/javascript"></script>
<script src="js/nouislider.min.js" type="text/javascript"></script>
<script src="js/bootstrap-datepicker.js" type="text/javascript"></script>
<script src="js/material-kit.js" type="text/javascript"></script>
<script src="js/bootstrap-notify.js" type="text/javascript"></script>
<script src="js/material-dashboard.js" type="text/javascript"></script>
<script src="js/chartist.min.js"></script>
<script type="text/javascript" src="js/libs/jquery.bootpag.js"></script>
<script src="js/moment.min.js" type="text/javascript"></script>
<script src="js/daterangepicker.js" type="text/javascript"></script>
<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
        integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
        crossorigin=""></script>
<script src="js/leaflet.markercluster.js" type="text/javascript"></script>
<script type="text/javascript">

    var deviceType="smartlocker";

    var typepParameter1="temperature";
    var displayName1="Temperature";
    var units1="&#8451";

    var typeParameter2="humidity";
    var displayName2="Humidity";
    var units2="%";

    var typeParameter3="open";
    var displayName3="Open";
    var units3="";


    document.getElementById("prameter1").innerHTML = displayName1;
    document.getElementById("prameter2").innerHTML = displayName2;
    document.getElementById("prameter3").innerHTML = displayName3;

    //fixed the issue with map not rendering in tabbed view and pop up model
    $("a[href='#mapView']").on('shown.bs.tab', function (e) {
        mymap.invalidateSize();
        //hide the search bar on map view
        $('#hide').hide();
    });

    $('#newDeviceModal').on('show.bs.modal', function () {
        setTimeout(function () {
            map.invalidateSize();
        }, 200);
    });
    $("a[href='#tableview']").on('shown.bs.tab', function (e) {
        //show the search bar on table view
        $('#hide').show();
    });


    $(document).ready(function () {
        getDevices(0, 10);//load first page
        getAllDevices();//add all devices to map
    });


</script>
<script src="pages/device-page-scripts/mapViewJs.js" type="text/javascript"></script>
<script src="pages/device-page-scripts/tableCharts.js" type="text/javascript"></script>
<script src="pages/device-page-scripts/modalMap.js" type="text/javascript"></script>
<script src="pages/device-page-scripts/functions.js" type="text/javascript"></script>
</html>
