import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, withRepeat } from 'react-native-reanimated';

import styles from './styles';

import TelaDeFundo from '../../componentes/TelaDeFundo';
import InformacoesUsuario from '../../componentes/InformacoesUsuario';

import mapa from '../../assets/mapa.png';

const Detalhes = (props) => {
  const [animado, setAnimado] = React.useState(false);

  const timeoutRef = React.useRef(null);

  const dados = props.route.params;

  const rotacao = useSharedValue(0);
  const angulo = -30;

  const estiloAnimado = useAnimatedStyle(() => ({
    transform: [{ rotate: withSpring(`${rotacao.value}deg`) }],
  }));

  const rotacionar = () => {
    setAnimado(false);

    rotacao.value = withRepeat(withTiming(angulo, { duration: 200 }), 6, true);

    timeoutRef.current = setTimeout(() => setAnimado(true), 6 * 200);
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return (
    <TelaDeFundo>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <InformacoesUsuario
          nome={dados.nome}
          detalhes="Cliente desde 2018"
          foto={dados.foto}
        />
          <View style={styles.detalhesMedia}>
            <View style={styles.media}>
              <Text style={styles.subtitulo}>Tempo médio de cada consulta</Text>

              <View style={[styles.circulo, { borderColor: '#FFB050' }]}>
                <Text style={styles.circuloTexto}>52 min</Text>
              </View>
            </View>

            <View style={styles.media}>
              <Text style={styles.subtitulo}>Número de consultas</Text>

              <View style={styles.circulo}>
                <Text style={styles.circuloTexto}>22</Text>
              </View>
            </View>
          </View>

          <Text style={styles.subtitulo}>Anotações sobre a paciente</Text>
          <Text style={styles.detalhes}>{dados.sobre}</Text>

          <Text style={styles.subtitulo}>Endereço</Text>
          <Image style={styles.imagemMapa} source={mapa} />

          <Text>{dados.endereco}</Text>

          <TouchableOpacity 
            style={styles.botao}
            onPress={rotacionar}
          >
            <Text style={styles.botaoTexto}>Notificar consulta</Text>
              <Animated.View style={[styles.icone, estiloAnimado]}>
                <Icon
                  name={`notifications${!animado ? '-none' : ''}`} 
                  size={20} 
                  color="#FFF"
                />
              </Animated.View>
          </TouchableOpacity>
      </ScrollView>
    </TelaDeFundo>
  )
};

export default Detalhes;
