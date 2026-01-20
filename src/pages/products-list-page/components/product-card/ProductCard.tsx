import type { Product } from '@/entities/product/api/types'
import { useDeleteProduct } from '@/features/product/delete/model/useDeleteProduct'
import { DeleteProductButton } from '@/features/product/delete/ui/delete-product-button'
import { ROUTES } from '@/shared/config/routes'
import { Button } from '@/shared/ui/button'
import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'

export function ProductCard({ product }: { product: Product }) {
	const { mutation: deleteProduct, isLoading } = useDeleteProduct()

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
					{/* <Button
						align='center'
						variant='outlined'
						onClick={() => deleteProduct(product.id)}
						disabled={isLoading}
					>
						Delete
					</Button> */}
					<DeleteProductButton
						productId={product.id}
						isLoading={isLoading}
						onDelete={deleteProduct}
					/>
					<Button align='center' disabled={isLoading}>
						<Link to={ROUTES.productDetails(product.id)}>Go To Product</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}
