import * as Permissions from 'expo-permissions';
import moment from "moment";

export const AskCameraRollPermissions = async () => {
	const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
	console.log("[Permissions] ASK_CAMERA_ROLL", status)

	if (status !== 'granted') {
	  alert('Hey! You might want to enable permissions for my app, they are good.');
	}
}

export const GetCameraRollPermissions = async () => {
	const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
	console.log("[Permissions] GET_CAMERA_ROLL", status)

	if (status !== 'granted') {
	  AskCameraRollPermissions()
	}
}

// function for displaying feed time
export const DisplayFormatedTime = (date)  => {
	if(date) {
		return moment(date, "YYYY-MM-DD HH:mm:ss Z").fromNow();
	}
}