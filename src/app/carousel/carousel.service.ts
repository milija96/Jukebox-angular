import { Carousel } from "./carousel.model";

export class CarouselService{

    private images: Carousel[] = [
        new Carousel('../../../assets/images/first.jpg'),
        new Carousel('../../../assets/images/second.jpg'),
        new Carousel('../../../assets/images/third.jpg'),
    ]
    getImages(){
        return this.images;
    }
}