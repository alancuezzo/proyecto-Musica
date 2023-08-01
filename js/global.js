class Cancion {
    constructor(id, title, artist, gender, duration, image, favorite = false) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.gender = gender;
        this.duration = duration;
        this.image = image;
        this.favorite = favorite;
    }
}