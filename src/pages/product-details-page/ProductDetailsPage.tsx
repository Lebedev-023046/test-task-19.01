import { useProducts } from '@/entities/product/model/useProducts'
import { useDeleteProduct } from '@/features/product/delete/model/useDeleteProduct'
import { DeleteProductButton } from '@/features/product/delete/ui/delete-product-button'
import { EditProductForm } from '@/features/product/edit/ui/edit-product-form'
import { ROUTES } from '@/shared/config/routes'
import { Button } from '@/shared/ui/button'
import { ErrorFallback } from '@/shared/ui/error-boundary/fallback'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './ProductDetailsPage.module.css'
import { ProductCard } from './components/product-card'

export function ProductDetailsPage() {
	const { productId } = useParams()

	const { isOpen, open, close } = useFormUIState()

	const { products } = useProducts()
	const { mutation: deleteProduct, isLoading } = useDeleteProduct()

	const product = products?.find(product => product.id === productId)
	if (!product) return <ErrorFallback error={new Error('Product not found')} />

	// render props так как хотел дать возможность использовать ProductCard без controls
	return (
		<section className={styles.wrapper}>
			<ProductCard
				product={product}
				controls={
					<>
						<Button
							align='center'
							disabled={isLoading || isOpen}
							onClick={open}
						>
							Open Edit Form
						</Button>
						<DeleteProductButton
							productId={product.id}
							isLoading={isLoading}
							redirect={ROUTES.productsList()}
							onDelete={deleteProduct}
						/>
						<Button variant='outlined' align='center' disabled={isLoading}>
							<Link to={ROUTES.productsList()}>Back to Products</Link>
						</Button>
					</>
				}
			/>

			{isOpen && <EditProductForm product={product} onClose={close} />}
		</section>
	)
}

// помещу этот хук тут, так как он нужен только в этом компоненте

const useFormUIState = () => {
	const [isOpen, setIsOpen] = useState(false)

	const open = () => {
		if (!isOpen) setIsOpen(true)
	}
	const close = () => {
		if (isOpen) setIsOpen(false)
	}

	return {
		isOpen,
		open,
		close
	}
}
