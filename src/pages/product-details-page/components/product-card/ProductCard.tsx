import type { Product } from '@/entities/product/api/types'
import styles from './ProductCard.module.css'

interface ProductCardProps {
	product: Product
	controls?: React.ReactNode
}

export function ProductCard({ product, controls }: ProductCardProps) {
	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<img className={styles.image} src={product.image} alt='product-image' />
				<div className={styles.content}>
					<h2 className={styles.title}>{product.title}</h2>
					<p className={styles.description}>{product.description}</p>
					<p className={styles.price}>${product.price}</p>
				</div>
			</div>
			{controls && <div className={styles.controls}>{controls}</div>}
		</div>
	)
}
