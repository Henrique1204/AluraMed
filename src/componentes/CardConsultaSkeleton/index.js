import React from 'react';
import { View, Image } from 'react-native';

import styles from '../CardConsulta/styles';

import skeletonGif from '../../assets/shimmer.gif';

const CardConsultaSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pessoaArea}>
        <Image source={skeletonGif} style={[styles.foto, { overlayColor: '#FFF' }]} />

        <View style={styles.informacoes}>
          <Image source={skeletonGif} style={[styles.nome, { width: 200, height: 25 }]} />

          <View style={styles.consultaArea}>
            <Image
              source={skeletonGif}
              style={[
                styles.consultas,
                { width: 100, height: 15, marginTop: 5, marginLeft: 0 },
              ]}
            />
          </View>
        </View>
      </View>

      <View style={styles.informacoesAgendamento}>
      <Image source={skeletonGif} style={[styles.nome, { width: 100, height: 15 }]} />

        <View style={styles.botoesArea}>
          <Image
              source={skeletonGif}
              style={ { width: '100%', height: 50, borderRadius: 10, overlayColor: '#FFF' }}
            />
        </View>
      </View>
    </View>
  );
};

export default CardConsultaSkeleton;
