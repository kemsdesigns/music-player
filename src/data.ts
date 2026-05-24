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
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ca/eb/31/caeb3173-eaf0-0cd5-65ea-585adfe312ba/075679745156.jpg/600x600bb.jpg',
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/42/c0/0f/42c00f8b-fff6-2529-70c3-861c21143c0a/mzaf_2842108628707526245.plus.aac.p.m4a',
  },
  {
    id: '7',
    title: 'Essence',
    artist: 'Wizkid, Tems',
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b0/09/8e/b0098ed0-ef53-f2b5-386a-c8e6181f3c8a/886448775256.jpg/600x600bb.jpg',
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b3/dc/ba/b3dcba73-7f33-9abe-089c-73557a6dcb54/mzaf_16412591162283722395.plus.aac.p.m4a',
  },
  {
    id: '8',
    title: 'Calm Down',
    artist: 'Rema',
    coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ee/f1/dc/eef1dc82-f516-fd0f-581c-3f952a0e2243/22UMGIM92113.rgb.jpg/600x600bb.jpg',
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c3/c7/54/c3c754cd-6680-4818-9182-e08a719d59ba/mzaf_1190051474475595816.plus.aac.p.m4a',
  }
];
