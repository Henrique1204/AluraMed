import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const InformacoesUsuario = ({ nome, detalhes, foto }) => {
  return (
    <View style={styles.container}>
      <Image source={foto} style={styles.foto} />

      <View style={styles.informacoes}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.consultas}>{detalhes}</Text>
      </View>
    </View> 
  );
};

export default InformacoesUsuario;
