export function Gallery() {

    return (
        <div className="gallery w-full mx-auto flex flex-wrap justify-center mb-16">
            <img className="shadow-md shadow-gray-300 galleryImage mb-6 mr-3" src="/gallery/gallery1.png" alt="gallery1" />
            <img className="shadow-md shadow-gray-300 galleryImage mb-6 ml-3" src="/gallery/gallery2.png" alt="gallery2" />
            <img className="shadow-md shadow-gray-300 galleryImage mr-3" src="/gallery/gallery3.png" alt="gallery3" />
            <img className="shadow-md shadow-gray-300 galleryImage ml-3" src="/gallery/gallery4.JPG" alt="gallery4" />
        </div>
    );

}