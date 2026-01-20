import { productRepo } from '@/entities/product/api/productRepo'
import type { Product } from '@/entities/product/api/types'
import { useAsync } from '@/shared/hooks/useAsync'
import { ErrorFallback } from '@/shared/ui/error-boundary/fallback'
import { PageLoader } from '@/shared/ui/page-loader'
import styles from './ProductsListPage.module.css'
import { ProductCard } from './components/product-card'

export function ProductsListPage() {
	const { data, isLoading, isError, error } = useAsync<{ products: Product[] }>(
		{
			callback: () => productRepo.getProducts(),
			delay: 1500
		}
	)

	if (isLoading) return <PageLoader />
	if (isError || !data) return <ErrorFallback error={error} />

	return (
		<section className={styles.wrapper}>
			<div className={styles.main}>
				<div className={styles.list}>
					{data.products.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	)
}
