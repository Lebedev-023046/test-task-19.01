import { useProducts } from '@/entities/product'
import { CreateProductForm } from '@/features/product/create'
import { ErrorFallback } from '@/shared/ui/error-boundary/fallback'
import { PageLoader } from '@/shared/ui/page-loader'
import styles from './ProductsListPage.module.css'
import { ProductList } from './components/product-list'

export function ProductsListPage() {
	const { products, isLoading, error } = useProducts()

	if (isLoading) return <PageLoader />
	if (error || !products) return <ErrorFallback error={error} />

	return (
		<section className={styles.wrapper}>
			<div className={styles.main}>
				<CreateProductForm />
				<ProductList products={products} />
			</div>
		</section>
	)
}
