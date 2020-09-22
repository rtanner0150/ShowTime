jQuery(function(){

    jQuery('#locationBtn').click(function(){
        var location = document.getElementById('location').value;
        jQuery('#temp > p').openWeather({
            key: '836e96487a4baab1678161beb418b855',
            city: location,
            units: 'f',
            placeTarget: '#city > p',
            descriptionTarget: '#desc > p',
            minTemperatureTarget: '#min > p',
            maxTemperatureTarget: '#max > p',
            windSpeedTarget: '#wind > p',
            humidityTarget: '#humid > p',
            sunriseTarget: '#sunrise > p',
            sunsetTarget: '#sunset > p',
            success: function(){
                jQuery('.weatherOuter').show();
                jQuery('.weatherError').hide();
            },
            error: function(){
                jQuery('.weatherError').show();
                jQuery('.weatherOuter').hide();
            }
        })
    });

});//github testing on dev branch
