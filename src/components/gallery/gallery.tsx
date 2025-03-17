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
        <div className={styles['gallery-item']} key={imageItem.id}>
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
      ))}
    </div>
  );
}
