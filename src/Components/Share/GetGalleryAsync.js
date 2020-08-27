import * as Permissions from "expo-permissions"
import { CameraRoll } from "react-native"

export default async index => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (status !== "granted") {
    alert("failed to get library asset, please enable and restart demo");
    return;
  }
  const { edges } = await CameraRoll.getPhotos({ first: index + 1, assetType: "Photos"});
  const assets = edges.map(({ node: { image } }) => image.uri);
  return assets[Math.min(assets.length - 1, index)];
};