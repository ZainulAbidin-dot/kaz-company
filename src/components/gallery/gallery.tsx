import { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import styles from './gallery.module.css';

export type ImageItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
};

export function ImageGallery({ imageItems }: { imageItems: ImageItem[] }) {
  return (
    <div className={styles['gallery']}>
      {imageItems.map((imageItem) => (
        <ImageGalleryItem key={imageItem.id} imageItem={imageItem} />
      ))}
    </div>
  );
}

function ImageGalleryItem({ imageItem }: { imageItem: ImageItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <div className={styles['gallery-item']}>
          <img
            src={imageItem.src}
            alt={imageItem.alt}
            className={styles['gallery-item__img']}
          />
          <div className={styles['gallery-item__overlay']}>
            <h3 className={styles['gallery-item__title']}>{imageItem.title}</h3>
            <p className={styles['gallery-item__description']}>
              {imageItem.description}
            </p>
          </div>
          <p className={styles['gallery-item__attribute']}>{imageItem.alt}</p>
        </div>
      </DialogTrigger>
      <DialogContent className="flex !h-[90vh] !max-w-[90vw] flex-col">
        <DialogHeader>
          <DialogTitle>{imageItem.title}</DialogTitle>
          <DialogDescription>{imageItem.description}</DialogDescription>
        </DialogHeader>
        <div className="flex w-full flex-grow items-center justify-center overflow-hidden">
          <img
            src={imageItem.src}
            alt={imageItem.alt}
            className="mx-auto h-full max-h-full w-full max-w-full object-cover object-center"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
