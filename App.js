import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import ChatsListScreen from './ChatsListScreen';
import ChatView from './ChatView';

class App extends Component {
	render() {
		return <ChatView />;
	}
}

export default App;
