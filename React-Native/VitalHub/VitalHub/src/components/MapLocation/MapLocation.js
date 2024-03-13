import { ActivityIndicator, StyleSheet, Text } from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import {
    requestForegroundPermissionsAsync, // Solicita a permissao de localizacao
    getCurrentPositionAsync, // Captura a localizacao atual

    watchPositionAsync, // Captura em tempos a localizacao
    LocationAccuracy // Precisao da captura
} from 'expo-location'

import MapViewDirections from 'react-native-maps-directions'

import { useEffect, useRef, useState } from "react";
import { MapLocationContainer } from "../Container/Style";
import { mapskey } from "../../utils/mapsKey";

export const MapLocation = () => {
    const mapReference = useRef(null)
    const [initialPosition, setInitialPosition] = useState(null)
    const [finalPosition, setPosition] = useState({
        latitude: -23.2447,
        longitude: -46.2640
    })

    async function CapturarLocalizacao(){
        const { granted } = await requestForegroundPermissionsAsync()
        console.log(granted);
    
        if( granted ){
          const currentPosition = await getCurrentPositionAsync()
          console.log(currentPosition);
          await setInitialPosition( currentPosition )
    
          console.log( initialPosition )
        }
      }

      async function RecarregarVisualizacaoMapa(){
        if( mapReference.current && initialPosition )
        {
          await mapReference.current.fitToCoordinates(
            [
              { latitude : initialPosition.coords.latitude, longitude : initialPosition.coords.longitude },
              { latitude : finalPosition.latitude, longitude : finalPosition.longitude }
            ],
            {
              edgePadding : { top : 60, right : 60, bottom : 60, left : 60 },
              animated : true
            }
          )
        }
      }

      useEffect(() => {
        CapturarLocalizacao()
    
        // Capturar localizacao em tempo real
        watchPositionAsync({
          accuracy : LocationAccuracy.High,
          timeInterval : 1000,
          distanceInterval : 1
        }, async (response) => {
          await setInitialPosition( response )
    
          mapReference.current?.animateCamera({
            pitch : 60,
            center : response.coords
          })
        })
      }, [1000])
    
      useEffect(() => {
        RecarregarVisualizacaoMapa()
      }, [initialPosition == null])



    return (
        // container
        <MapLocationContainer>
            {
                initialPosition != null
                    ? (
                        <MapView
                            ref={mapReference}
                            initialRegion={{
                                latitude: initialPosition.coords.latitude,
                                longitude: initialPosition.coords.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005
                            }}
                            provider={PROVIDER_GOOGLE}
                            style={styles.map}
                            // customMapStyle={grayMapStyle}
                        >
                            {/* Criando um marcador no mapa */}
                            <Marker
                                coordinate={{
                                    latitude: initialPosition.coords.latitude,
                                    longitude: initialPosition.coords.longitude
                                }}
                                title='Exemplo de local'
                                description='Qualquer lugar no meu mapa'
                                pinColor='red'
                            />

                            <MapViewDirections
                                origin={
                                    initialPosition.coords
                                }

                                destination={{
                                    latitude: -23.2447,
                                    longitude: -46.2640,
                                    latitudeDelta: 0.005,
                                    longitudeDelta: 0.005
                                }}
                                  apikey={mapskey}

                                strokeWidth={5}
                                strokeColor='pink'
                            />

                            {/* Criando um marcador no mapa */}
                            <Marker
                                coordinate={{
                                    latitude: -23.2447,
                                    longitude: -46.2640,
                                }}
                                title='Outro local'
                                description='Qualquer outro lugar no meu mapa'
                                pinColor='red'
                            />
                        </MapView>
                    ) : (
                        <>
                            <Text>Localização não encontrada</Text>

                            <ActivityIndicator />
                        </>
                    )
            }
        </MapLocationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        flex: 1,
        width: "100%",
    }
});