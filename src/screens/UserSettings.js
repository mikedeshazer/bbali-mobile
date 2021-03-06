import React, { Component } from 'react';
import { View, Image, TextInput, Text } from 'react-native';
import SubmitButton from '../Components/SubmitButton';
import styles from '../ScreenStyles/UserSettingsStyles';

export default class UserSettings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			phoneNumber: ''
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<Image
					source={require('../assets/profile_placeholder.png')}
					style={styles.profilePic}
				/>
				<Text style={styles.nameTitle}>Name</Text>
				<TextInput
					style={styles.name}
					value={this.state.name}
					name="email"
					onChangeText={text => this.setState({ name: text })}
					underlineColorAndroid="transparent"
					onFocus={this.onFocus}
				/>
				<Text style={styles.emailTitle}>Email</Text>
				<TextInput
					style={styles.email}
					value={this.state.email}
					name="email"
					onChangeText={text => this.setState({ email: text })}
					keyboardType="email-address"
					underlineColorAndroid="transparent"
					onFocus={this.onFocus}
				/>
				<Text style={styles.phoneNumberTitle}>Phone No.</Text>
				<TextInput
					style={styles.phoneNumber}
					name="phoneNumber"
					onChangeText={text => this.setState({ phoneNumber: text })}
					keyboardType="numeric"
					underlineColorAndroid="transparent"
				/>
				<SubmitButton title="CHANGE PASSWORD" position={styles.change} />
				<SubmitButton title="UPDATE" position={styles.submit} />
			</View>
		);
	}
}
