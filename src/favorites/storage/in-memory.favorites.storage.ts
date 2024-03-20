// import { Injectable } from '@nestjs/common';
// import { FavoritesStorage } from '../interfaces/favorites-storage.interface';
// import { FavoritesResponse } from '../interfaces/favorites-response.interface';
// import { ArtistsService } from 'src/artists/artists.service';
// import { AlbumsService } from 'src/albums/albums.service';
// import { TracksService } from 'src/tracks/tracks.service';
// import { Album } from 'src/albums/entities/album.entity';
// import { Artist } from 'src/artists/entities/artist.entity';
// import { Track } from 'src/tracks/entities/track.entity';

// @Injectable()
// export class InMemoryFavoritesStorage implements FavoritesStorage {
//   private artistsId: Array<string>;
//   private albumsId: Array<string>;
//   private tracksId: Array<string>;

//   constructor(
//     private readonly artistService: ArtistsService,
//     private readonly albumsService: AlbumsService,
//     private readonly trackService: TracksService,
//   ) {
//     this.artistsId = [];
//     this.albumsId = [];
//     this.tracksId = [];
//   }

//   findAll(): FavoritesResponse {
//     const response: FavoritesResponse = {
//       artists: this.artistsId
//         .map((artistId) => {
//           const artist = this.artistService.findOne(artistId);
//           if (artist) {
//             return artist;
//           }
//         })
//         .filter((item) => !!item) as unknown as Array<Artist>,

//       albums: this.albumsId
//         .map((albumId) => {
//           const album = this.albumsService.findOne(albumId);
//           if (album) {
//             return album;
//           }
//           return false;
//         })
//         .filter((item) => !!item) as unknown as Array<Album>,

//       tracks: this.tracksId
//         .map((trackId) => {
//           const track = this.trackService.findOne(trackId);
//           if (track) {
//             return track;
//           }
//         })
//         .filter((item) => !!item) as unknown as Array<Track>,
//     };

//     return response;
//   }

//   createTrack(trackId: string): boolean {
//     const track = this.trackService.findOne(trackId);
//     const isTrackExist = this.tracksId.includes(trackId);

//     if (!isTrackExist && track) {
//       this.tracksId.push(trackId);
//       return true;
//     }

//     return false;
//   }

//   deleteTrack(trackId: string): boolean {
//     const index = this.tracksId.indexOf(trackId);

//     if (index) {
//       this.tracksId.splice(index, 1);
//       return true;
//     }

//     return false;
//   }

//   createArtist(artistId: string): boolean {
//     const artist = this.artistService.findOne(artistId);
//     const isArtistExist = this.artistsId.includes(artistId);

//     if (!isArtistExist && artist) {
//       this.artistsId.push(artistId);
//       return true;
//     }

//     return false;
//   }

//   deleteArtist(artistId: string): boolean {
//     const index = this.artistsId.indexOf(artistId);

//     if (index) {
//       this.artistsId.splice(index, 1);
//       return true;
//     }

//     return false;
//   }

//   createAlbum(albumId: string): boolean {
//     const album = this.albumsService.findOne(albumId);
//     const isAlbumExist = this.albumsId.includes(albumId);

//     if (!isAlbumExist && album) {
//       this.albumsId.push(albumId);
//       return true;
//     }

//     return false;
//   }

//   deleteAlbum(albumId: string): boolean {
//     const index = this.albumsId.indexOf(albumId);

//     if (index) {
//       this.albumsId.splice(index, 1);
//       return true;
//     }

//     return false;
//   }
// }
