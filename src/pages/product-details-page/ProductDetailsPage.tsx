import { useProducts } from '@/entities/product/model/useProducts'
import { useDeleteProduct } from '@/features/product/delete/model/useDeleteProduct'
import { ROUTES } from '@/shared/config/routes'
import { Button } from '@/shared/ui/button'
import { ErrorFallback } from '@/shared/ui/error-boundary/fallback'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from './ProductDetailsPage.module.css'

export function ProductDetailsPage() {
	const { productId } = useParams()
	const { products } = useProducts()

	const navigate = useNavigate()

	const { mutation: deleteProduct, isLoading } = useDeleteProduct()

	const product = products?.find(product => product.id === productId)

	if (!product) return <ErrorFallback error={new Error('Product not found')} />

	const handleDelete = async (id: string) => {
		await deleteProduct(id)
		navigate(ROUTES.productsList())
	}

	return (
		<section className={styles.wrapper}>
			<div className={styles.card}>
				<div className={styles.header}>
					<img
						className={styles.image}
						src={product.image}
						alt='product-image'
					/>
					<div className={styles.content}>
						<h2 className={styles.title}>{product.title}</h2>
						<p className={styles.description}>{product.description}</p>
						<p className={styles.price}>${product.price}</p>
					</div>
				</div>
				<div className={styles.controls}>
					<Button align='center' disabled={isLoading}>
						Edit Product
					</Button>
					<Button
						align='center'
						className={styles.delete}
						onClick={() => handleDelete(product.id)}
						disabled={isLoading}
					>
						Delete Product
					</Button>
					<Button variant='outlined' align='center' disabled={isLoading}>
						<Link to={ROUTES.productsList()}>Back to Products</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}
