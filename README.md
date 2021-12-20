# CS-Product-Card

Este es un paquete de pruebas de despliegues en NPM

### Carlos

## Ejemplo

````
import {ProductCard,
ProductImage,
ProductTitle,
ProductButtons } from 'CS-product-card'
```

```
<ProductCard 
        product={ product }
        initialValues={{
            count:4,
            maxCount:10,

        }}
        >
            {
                ({reset,increaseBy,isMaxCountReached})=>(
                    <>

                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                    </>
                )
            }
    </ProductCard>
```