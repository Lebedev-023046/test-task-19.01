import type { Product } from '@/entities/product/api/types'
import { Button } from '@/shared/ui/button'
import styles from './ProductCard.module.css'

export function ProductCard({ product }: { product: Product }) {
	return (
		<div className={styles.wrapper}>
			<img src={product.image} alt='product-image' />
			<div className={styles.content}>
				<div className={styles.header}>
					<h2 className={styles.title}>{product.title}</h2>
					<p className={styles.price}>${product.price}</p>
				</div>
				<div className={styles.main}>
					<p className={styles.description}>{product.description}</p>
				</div>
				<div className={styles.footer}>
					<Button align='center' variant='outlined'>
						Delete
					</Button>
					<Button align='center'>Go To Product</Button>
				</div>
			</div>
		</div>
	)
}
