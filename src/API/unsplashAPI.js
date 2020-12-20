export default class UnsplashAPI {
  _apiBase = 'https://api.unsplash.com/photos/';
  _apiClientId =
    '?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
  getPhotos = async () => {
    const res = await fetch(`${this._apiBase}${this._apiClientId}`);
    if (!res.ok) {
      throw new Error('incorrect server response');
    }

    return await res.json();
  };
}
