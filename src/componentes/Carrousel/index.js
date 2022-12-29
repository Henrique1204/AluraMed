import React from 'react';
import { View, FlatList, Image } from 'react-native';

import styles from './styles';

const Carrousel = ({ data }) => {
    const [index, setIndex] = React.useState(0);

    const carrouselRef = React.useRef(null);
    const timeoutRef = React.useRef(null);

    const alterarPosicaoIndex = () => {
        const nextIndex = index + 1;

        if (nextIndex < data.length) return setIndex(nextIndex);
    
        setIndex(0);
    };

    React.useEffect(() => {
        carrouselRef?.current?.scrollToIndex({ index });

        timeoutRef.current = setTimeout(alterarPosicaoIndex, 1000);
    
        return () => {
            clearInterval(timeoutRef.current);
        };
    }, [index]);

    return (
        <View style={styles.container}>
            <FlatList
                ref={carrouselRef}
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                <Image
                    source={item.imagem}
                    style={[
                        styles.image,
                        { marginRight: index == data.length - 1 ? 200 : 0 }
                    ]}
                    resizeMode="contain"
                />
                )}
            />
        </View>
    );
};

export default Carrousel;

