import type { Product } from '@/entities/product/api/types'
import { ProductCard } from '../product-card'
import styles from './ProductList.module.css'

interface ProductListProps {
	products: Product[]
}

export function ProductList({ products }: ProductListProps) {
	if (products.length === 0)
		return <h3 className={styles.empty}>Products list is empty</h3>

	return (
		<div className={styles.list}>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}
