import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Monster from './components/Monster'

interface State {
  monsters: number[]
}

export default class App extends React.Component {
  resources = {
    monsters: [
      null,
      {
        head: require('./assets/monster1_head.png'),
        body: require('./assets/monster1_body.png'),
        feet: require('./assets/monster1_feet.png')
      },
      {
        head: require('./assets/monster2_head.png'),
        body: require('./assets/monster2_body.png'),
        feet: require('./assets/monster2_feet.png')
      },
      {
        head: require('./assets/monster3_head.png'),
        body: require('./assets/monster3_body.png'),
        feet: require('./assets/monster3_feet.png')
      }
    ]
  }

  get matchStatusText (): string {
    return this.state.monsters.reduce(
      (previousValue, currentValue) =>
        [currentValue, 0].includes(previousValue) ? currentValue : -1, 0
    ) === -1 ? 'No match' : `Matched monster ${this.state.monsters[0]}`
  }

  state: State = {
    monsters: [1, 1, 1]
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>{this.matchStatusText}</Text>
        {
          this.state.monsters.map((monster, index) =>
            <Monster key={`${monster}-${index}`} img={this.resources.monsters[monster][(['head', 'body', 'feet'][index])]} />)
        }
        <Button title='New match' onPress={() => this.setState({
          monsters: [...new Uint8Array(3).map(_ => Math.trunc(Math.random() * 3) + 1)]
        })} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
