import { Card, Button } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()

  const quantity = getItemQuantity(id)

  return (
    <Card>
      <Card.Img
        variant='top'
        src={imgUrl}
        height='200px'
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='fs-2'>{name}</span>
          <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
        </Card.Title>
        <div className='mt-auto'>
          {quantity === 0 ? (
            <Button
              className='btn btn-secondary w-100'
              onClick={() => increaseCartQuantity(id)}
            >
              Add to cart
            </Button>
          ) : (
            <>
              <div
                className='d-flex align-items-center flex-column'
                style={{ gap: '0.5rem' }}
              >
                <div
                  className='d-flex align-items-center justify-content-center '
                  style={{ gap: '0.5rem' }}
                >
                  <Button
                    className='btn btn-secondary'
                    onClick={() => decreaseCartQuantity(id)}
                  >
                    -
                  </Button>
                  <span className='fs-4'>{quantity}</span>
                  <Button
                    className='btn btn-secondary'
                    onClick={() => increaseCartQuantity(id)}
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant='danger'
                  size='sm'
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </div>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
