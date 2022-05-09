import { Asset } from 'expo-asset';

const images: { [key: string]: any } = {
  logo_sm: require('../../assets/icon.png'),
  // logo_lg: require('../../assets/images/logo-lg.png'),
};

// image preloading
export const imageAssets = Object.keys(images).map((key) =>
  Asset.fromModule(images[key]).downloadAsync(),
);

export default images;
