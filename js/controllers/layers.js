(function() {

    var app = angular.module('webapp');
    app.controller('LayerController', function($scope) {
        angular.extend($scope, {
            london: {
                lat: 51.505,
                lon: -0.09,
                zoom: 3
            },
            layers: [
                {
                    name: 'OpenStreetMap',
                    source: {
                        type: 'OSM'
                    }
                },
                {
                    active: true,
                    name: 'MapBox Terrain',
                    source: {
                        type: 'TileJSON',
                        url: 'https://api.tiles.mapbox.com/v3/examples.map-i86nkdio.jsonp'
                    }
                },
                {
                    name: 'MapBox Night',
                    source: {
                        type: 'TileJSON',
                        url: 'https://api.tiles.mapbox.com/v3/examples.map-0l53fhk2.jsonp'
                    }
                },
                {
                    name: 'Mapbox Geography',
                    source: {
                        type: 'TileJSON',
                        url: 'http://api.tiles.mapbox.com/v3/mapbox.geography-class.jsonp'
                    }
                }
            ],
            changeLayer: function(layer) {
                $scope.layers.map(function(l) {
                    l.active = (l === layer);
                });
            }
        });
    });

})();