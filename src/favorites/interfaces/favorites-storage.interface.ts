import { FavoritesResponse } from './favorites-response.interface';

export interface FavoritesStorage {
  findAll(): FavoritesResponse;
  createTrack(trackId: string): boolean;
  deleteTrack(trackId: string): boolean;
  createArtist(artistId: string): boolean;
  deleteArtist(artistId: string): boolean;
  createAlbum(albumId: string): boolean;
  deleteAlbum(albumId: string): boolean;
}
