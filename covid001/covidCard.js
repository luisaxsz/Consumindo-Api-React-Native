import React from 'react';
import { Text , View , StyleSheet} from 'react-native';
import { Card, Button , Title} from 'react-native-paper';

export const CovidCard = ({ dadosLocal, onNext}) => {
  return (
    <View key={dadosLocal.id}>
        <Card style={styles.card}>
        <Title>Infectados Covid</Title>
        <Card.Content>
            <Text style={styles.estado}>{dadosLocal.state}</Text>
            <Text style={styles.infectados}>{dadosLocal.count}</Text>
        </Card.Content>
        <Card.Actions>
            <Button onPress={onNext}>
                Próximo Estado
            </Button>
        </Card.Actions>
        </Card>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
      margin: 20,
      marginTop: 200,
      padding: 20,
      borderRadius: 20,
      elevation: 3
    },
    estado: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    infectados: {
      fontSize: 18,
      marginBottom: 20,
    },
  });