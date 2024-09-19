import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

export default function ImageScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla de imagenes (ImageScreen)</Text>
      <ScrollView>
        <Image source = {{uri: 'https://c4.wallpaperflare.com/wallpaper/983/709/77/digital-art-artwork-women-fantasy-art-wallpaper-preview.jpg'}}
          style={{ width: 300, height: 200, margin: 10 }}
        />
        <Image source = {{uri: 'https://png.pngtree.com/background/20230614/original/pngtree-an-image-of-an-aggressive-monster-hunter-in-the-woods-picture-image_3496699.jpg'}}
          style={{ width: 300, height: 200, margin: 10 }}
        />
        <Image source = {{uri: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/12/mhwi-safijiiva.jpg'}}
          style={{ width: 300, height: 200, margin: 10 }}
        />
        <Image source = {{uri: 'https://assets1.ignimgs.com/2018/01/25/monsterhunterworld-blogroll-1516867463450.jpg'}}
          style={{ width: 300, height: 200, margin: 10 }}
        />
        <Image source = {{uri: 'https://w0.peakpx.com/wallpaper/437/765/HD-wallpaper-video-game-monster-hunter-world-fan-art-nergigante-monster-hunter.jpg'}}
          style={{ width: 300, height: 200, margin: 10 }}
        />
        <Image source = {{uri: 'https://www.thelongdark.com/img/tld-ep3-video-thumbnail.png'}}
          style={{ width: 300, height: 200, margin: 10 }}
        />
      </ScrollView>
    </View>
  );
}