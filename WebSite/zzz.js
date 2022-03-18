< script type = "application/javascript" >
    const geoip = (json) => {
            //obtain the countryCode from json output;
            let countryCode = json.country_code3;

            //object with definition of multiple prices;
            let prices = {
                basePrice: {
                    USA: '$100.00 USD',
                    CAN: '$130.00 CAD',
                },
                architectPrice: {
                    USA: '$125.00 USD',
                    CAN: '$160.00 CAD'
                },
                implementationPrice: {
                    USA: '$3,000.00 USD',
                    CAN: '$4,000.00 CAD'
                },
                automationPrice: {
                    USA: '$1,000.00 USD',
                    CAN: '$1,500.00 CAD'
                },
                lifecyclePrice: {
                    USA: '$2,000.00 USD',
                    CAN: '$2,600.00 CAD'
                },
                trainingPrice: {
                    USA: '$200.00 USD',
                    CAN: '$260.00 CAD'
                }
            };

            //set each price based on the country code;
            let priceBase = prices['basePrice'][countryCode];
            let priceArchitect = prices['architectPrice'][countryCode];
            let priceImplementation = prices['implementationPrice'][countryCode];
            let priceAutomation = prices['automationPrice'][countryCode];
            let priceLifecycle = prices['lifecyclePrice'][countryCode];
            let priceTrining = prices['trainingPrice'][countryCode];


            //establish a default value for each price, if no country code is found;
            priceBase == null ? newPrice = '$100 USD' : newPrice = priceBase;
            priceArchitect == null ? newPrice2 = '$125.00 USD' : newPrice2 = priceArchitect;
            priceImplementation == null ? newPrice3 = '$3,000.00 USD' : newPrice3 = priceImplementation;
            priceAutomation == null ? newPrice4 = '$1,000.00 USD' : newPrice4 = priceAutomation;
            priceLifecycle == null ? newPrice5 = '$2,000.00 USD' : newPrice5 = priceLifecycle;
            priceTrining == null ? newPrice6 = '$200.00 USD' : newPrice6 = priceTrining;

            //obtain all element from the DOM for each price value;
            let pricetoUpdate = document.getElementsByClassName('priceUpdate');
            let pricetoUpdate2 = document.getElementsByClassName('priceUpdate2');
            let pricetoUpdate3 = document.getElementsByClassName('priceUpdate3');
            let pricetoUpdate4 = document.getElementsByClassName('priceUpdate4');
            let pricetoUpdate5 = document.getElementsByClassName('priceUpdate5');
            let pricetoUpdate6 = document.getElementsByClassName('priceUpdate6');

            //run through all instances of the price and update it respectively;
            const priceUpdater = (ogPrice, newPrice) => {
                for (let i = 0; i < ogPrice.length; i++) {
                    let str = ogPrice[i].innerHTML;
                    ogPrice[i].innerHTML = newPrice;
                };
            };

            // calling priceUpdater() on each of the prices that need to be updated;
            priceUpdater(pricetoUpdate, newPrice);
            priceUpdater(pricetoUpdate2, newPrice2);
            priceUpdater(pricetoUpdate3, newPrice3);
            priceUpdater(pricetoUpdate4, newPrice4);
            priceUpdater(pricetoUpdate5, newPrice5);
            priceUpdater(pricetoUpdate6, newPrice6);
        } <
        /script>




geoip({ "region": "Ontario", "latitude": "43.6547", "longitude": "-79.3623", "accuracy": 5, "organization_name": "ROGERS-COMMUNICATIONS", "country": "Canada", "ip": "2607:9880:10e0:62:b4ef:9574:d75d:f15e", "organization": "AS812 ROGERS-COMMUNICATIONS", "timezone": "America\/Toronto", "asn": 812, "area_code": "0", "city": "Toronto", "country_code": "CA", "country_code3": "CAN", "continent_code": "NA" })