import { useProducts } from '@/entities/product/model/useProducts'
import { ProductForm } from '@/features/product/create/ui/product-form'
import { ErrorFallback } from '@/shared/ui/error-boundary/fallback'
import { PageLoader } from '@/shared/ui/page-loader'
import styles from './ProductsListPage.module.css'
import { ProductCard } from './components/product-card'

export function ProductsListPage() {
	const { products, isLoading, error } = useProducts()

	if (isLoading) return <PageLoader />
	if (error || !products) return <ErrorFallback error={error} />

	return (
		<section className={styles.wrapper}>
			<div className={styles.main}>
				<ProductForm />
				<div className={styles.list}>
					{products.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	)
}
