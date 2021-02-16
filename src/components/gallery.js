import React, { useState } from 'react';
import GalleryModal from './galleryModal';

const Gallery = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="gallery-background">
            <div className="gallery-shadow">
                <div className="gallery-container">
                    <div className="parent" onClick={() => setIsModalOpen(true)}>
                        <div className="child img1" />
                    </div>
                    <div className="parent" onClick={() => setIsModalOpen(true)}>
                        <div className="child img2" />
                    </div>
                    <div className="parent" onClick={() => setIsModalOpen(true)}>
                        <div className="child img3" />
                    </div>
                    <div className="parent" onClick={() => setIsModalOpen(true)}>
                        <div className="child img4" />
                    </div>
                </div>
                <div className="gallery-btn-box">
                    <span onClick={() => setIsModalOpen(true)} className="btn btn-white btn-animated">Nossos Bolos Decorados</span>
                </div>
            </div>
            <GalleryModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
        </div>
    )
}

export default Gallery;