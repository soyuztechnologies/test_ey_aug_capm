sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ey/anubhav/managepurchaseorder/test/integration/FirstJourney',
		'ey/anubhav/managepurchaseorder/test/integration/pages/POsList',
		'ey/anubhav/managepurchaseorder/test/integration/pages/POsObjectPage',
		'ey/anubhav/managepurchaseorder/test/integration/pages/PurchaseOrderItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PurchaseOrderItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ey/anubhav/managepurchaseorder') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePurchaseOrderItemsObjectPage: PurchaseOrderItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);