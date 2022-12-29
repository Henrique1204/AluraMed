import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from './styles';
import pacientes from './pacientes';

import InformacoesUsuario from '../../componentes/InformacoesUsuario';
import CardConsulta from '../../componentes/CardConsulta';
import TelaDeFundo from '../../componentes/TelaDeFundo';

import soniaFoto from '../../assets/sonia.png';

const Principal = ({ navigation }) => {
  return (
    <TelaDeFundo>
      <View style={styles.container}>
        <InformacoesUsuario 
          nome='Olá Sônia'
          detalhes='Mais 4 consultas hoje'
          foto={soniaFoto}
        />

        <Text style={styles.texto}>Hoje</Text>

        <FlatList
          data={pacientes}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Detalhes', item)}>
              <CardConsulta {...item} />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </TelaDeFundo>
  );
};

export default Principal;
