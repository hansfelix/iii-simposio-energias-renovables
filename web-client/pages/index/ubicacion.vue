<template>
  <GmapMap
    :center="{lat:-12.120447, lng:-77.031215}"
    :zoom="15.8"
    :options="mapOptions"
    map-type-id="terrain"
    style="width: 100%; height: 55vh"
    id="bloque-ubicacion"
  >
    <gmap-info-window
      :options="infoWindowOptions"
      :position="{lat:-12.12005, lng:-77.031100}"
      :opened="infoWindowOpened"
      @closeclick="infoWindowOpened=false"
    />

    <GmapMarker
      :position="{lat:-12.12040, lng:-77.031100}"
      :clickable="true"
      :draggable="false"
      @click="infoWindowOpened = !infoWindowOpened"
    />
  </GmapMap>
</template>

<script>
export default {
  data() {
    return {
      infoWindowOpened: true,
      infoWindowOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        },
        content: `
          <div id="content">
            <div id="siteNotice">
            </div>
            <div id="bodyContent" class="row mx-0">
                <div class="col-auto px-0"> 
                    <img src="/logos/escudo-solo-udep.png" style="width: 50px;" />
                </div>
                <div class="col"> 
                    <h6 id="firstHeading" class="firstHeading">Universidad de Piura <br> Sede Lima</h6>
                    <div>Calle Mártir José Olaya 162, Miraflores</div>
                </div>
            </div>
          </div>`
      },
      mapOptions: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false,
        styles: [
          {
            featureType: "all",
            elementType: "all",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#444444"
              }
            ]
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [
              {
                color: "#f2f2f2"
              }
            ]
          },
          {
            featureType: "landscape.man_made",
            elementType: "all",
            stylers: [
              {
                visibility: "simplified"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              },
              {
                color: "#cee9de"
              },
              {
                saturation: "2"
              },
              {
                weight: "0.80"
              }
            ]
          },
          {
            featureType: "poi.attraction",
            elementType: "geometry.fill",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "all",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "labels.text",
            stylers: [
              {
                color: "#acbfb8"
              },
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [
              {
                saturation: -100
              },
              {
                lightness: 45
              }
            ]
          },

          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                visibility: "on"
              },
              {
                color: "#f5d6d6"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "labels.icon",
            stylers: [
              {
                hue: "#ff0000"
              },
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "road.highway.controlled_access",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "on"
              },
              {
                hue: "#0064ff"
              },
              {
                gamma: "1.44"
              },
              {
                lightness: "-3"
              },
              {
                weight: "1.69"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "all",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "road.local",
            elementType: "all",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "road.local",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "simplified"
              },
              {
                weight: "0.31"
              },
              {
                gamma: "1.43"
              },
              {
                lightness: "-5"
              },
              {
                saturation: "-22"
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "transit.line",
            elementType: "all",
            stylers: [
              {
                visibility: "on"
              },
              {
                hue: "#ff0000"
              }
            ]
          },
          {
            featureType: "transit.station.bus",
            elementType: "all",
            stylers: [
              {
                visibility: "on"
              },
              {
                hue: "#00d1ff"
              }
            ]
          },
          {
            featureType: "transit.station.bus",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "simplified"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              {
                color: "#46bcec"
              },
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [
              {
                weight: "1.61"
              },
              {
                color: "#cde2e5"
              },
              {
                visibility: "on"
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>