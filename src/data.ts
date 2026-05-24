export interface Song {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  audioUrl: string; // 30s preview
}

export const songs: Song[] = [
  {
    id: '1',
    title: 'Forgiveness',
    artist: 'Asake',
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8c/f9/91/8cf991d2-d289-50cf-8a08-0ee7a69079aa/artwork.jpg/600x600bb.jpg',
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/69/36/6a/69366a64-3a52-e547-41ea-2d0ad6fb7789/mzaf_10131303465067310225.plus.aac.p.m4a',
  },
  {
    id: '2',
    title: 'Back Outside',
    artist: 'BNXN',
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b1/01/2f/b1012fc6-2d02-67a6-c102-5adc145747a7/199316555752_cover.jpg/600x600bb.jpg',
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c6/db/75/c6db7560-5806-38d3-852d-09d7b41a543f/mzaf_12902087230640253701.plus.aac.p.m4a',
  },
  {
    id: '3',
    title: '100 Meters',
    artist: 'Joeboy',
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/59/62/14/596214ef-9ee6-33da-23a0-ce7702088391/820200467690.jpg/600x600bb.jpg',
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/80/75/cf/8075cf19-ed4f-52bd-80b1-3b30ccced6ef/mzaf_17518603980824871530.plus.aac.p.m4a',
  },
  {
    id: '4',
    title: 'Colorado',
    artist: 'Johnny Drille, Ayra Star, Young Jonn',
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e9/00/d4/e900d4a4-df45-f863-57da-b9e12cec5bfc/26UMGIM39260.rgb.jpg/600x600bb.jpg',
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/91/e3/40/91e34014-a8b6-6152-3bb1-62a9759b4b50/mzaf_10915820601145486501.plus.aac.p.m4a',
  },
  {
    id: '5',
    title: 'MY HEALER',
    artist: 'Seyi Vibez, OMAH LAY',
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0d/fc/0d/0dfc0d4f-78de-a7a3-1454-cd7918d0c451/0766214740162_Cover.jpg/600x600bb.jpg',
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/49/43/ff/4943ffce-aac9-0917-dea7-f4f7e5007940/mzaf_5263516993183350308.plus.aac.p.m4a',
  },
  {
    id: '6',
    title: 'Last Last',
    artist: 'Burna Boy',
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/df/db/46/dfdb46e2-2a62-73a7-0248-d30f7823f545/075679712061.jpg/600x600bb.jpg',
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/69/36/6a/69366a64-3a52-e547-41ea-2d0ad6fb7789/mzaf_10131303465067310225.plus.aac.p.m4a',
  },
  {
    id: '7',
    title: 'Essence',
    artist: 'Wizkid, Tems',
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/bf/16/be/bf16bee4-e91e-a4b0-dc08-542bc942b083/886448744158.jpg/600x600bb.jpg',
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c6/db/75/c6db7560-5806-38d3-852d-09d7b41a543f/mzaf_12902087230640253701.plus.aac.p.m4a',
  },
  {
    id: '8',
    title: 'Calm Down',
    artist: 'Rema',
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/bd/d2/88/bdd28821-ea1c-5bb3-2e21-0c58e806cbf6/22UMGIM10355.rgb.jpg/600x600bb.jpg',
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/80/75/cf/8075cf19-ed4f-52bd-80b1-3b30ccced6ef/mzaf_17518603980824871530.plus.aac.p.m4a',
  }
];
