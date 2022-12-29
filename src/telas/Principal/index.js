import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from './styles';
import pacientes from './pacientes';

import InformacoesUsuario from '../../componentes/InformacoesUsuario';
import CardConsulta from '../../componentes/CardConsulta';
import TelaDeFundo from '../../componentes/TelaDeFundo';

import soniaFoto from '../../assets/sonia.png';
import CardConsultaSkeleton from '../../componentes/CardConsultaSkeleton';

const Principal = ({ navigation }) => {
  const [loading, setLoading] = React.useState(true);

  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => setLoading(false), 1500);

    return () => {
      clearTimeout(timeoutRef.current);
    }
  }, []);

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
            loading ? (
              <CardConsultaSkeleton />
            ) : (
              <TouchableOpacity onPress={() => navigation.navigate('Detalhes', item)}>
                <CardConsulta {...item} />
              </TouchableOpacity>
            )
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </TelaDeFundo>
  );
};

export default Principal;
