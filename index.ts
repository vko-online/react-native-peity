interface Demo {
  title: string
}

interface Own {
  open: boolean
}

interface Prop extends Demo, Own {
}

function test (prop: Prop) {
  const val = prop as Demo
  console.log('val', val)
}

test({ title: 'hola', open: false })
