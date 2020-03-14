# api-mock
API Mock test by Coding Ninjas

## This API supports 4 operations


## URL [POST]: /products/create

//request
    product: {
        name: laptop,
        quantity: 10
    }

//response
    data: {
        product: {
            name: laptop,
            quantity: 10
        }
    }

## API to list products
## URL [GET] : /products

data: {
  products: [
   {
     id: 1,
     name: laptop
     quantity: 10
   },
   {
     id: 2,
     name: camera
     quantity: 5
   },
   {
     id: 3,
     name: smartwatch
     quantity: 8
   },
  ]

}

## API to delete products
## URL [DELETE] : /products/:id

// response
data: {
  message: “product deleted”
}


## API to update quantity of a product (can be incremented or decremented)
## URL [POST] : /products/:id/update_quantity/?number=10

// response
data: {
  product: {
     id: 1,
     name: laptop,
     quantity: 20
  },

  message: updated successfully
}


## To use the API simply clone the repo in your local machine and run
### npm i
## then run 
### nmp start