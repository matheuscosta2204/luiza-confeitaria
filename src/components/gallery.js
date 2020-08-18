import React, { useState } from 'react';
import GalleryModal from './galleryModal';

const Gallery = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="gallery-background">
            <div className="gallery-shadow">
                <div className="gallery-container">
                    <div class="parent" onClick={() => setIsModalOpen(true)}>
                        <div class="child img1" />
                    </div>
                    <div class="parent" onClick={() => setIsModalOpen(true)}>
                        <div class="child img2" />
                    </div>
                    <div class="parent" onClick={() => setIsModalOpen(true)}>
                        <div class="child img3" />
                    </div>
                    <div class="parent" onClick={() => setIsModalOpen(true)}>
                        <div class="child img4" />
                    </div>
                </div>
            </div>
            <GalleryModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
        </div>
    )
}

export default Gallery;