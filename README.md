## React-native View with steroids

Add style props to predefined view

I was tired of adding `styles.something` styles to components, even it's very small, so i created this simple component that accepts style properties as props

### installation
```
npm install view-on-steroids
```

### usage
Add style props to predefined view
```
import Pane, { Hpane, Vpane, Scene, Footer } from 'view-on-steroids'

// accepts ViewStyleProps as props
<Pane backgroundColor='red'>any children</Pane>

// same as Pane, but horizontal
<Hpane padding={10}>any children</Hpane>

// same as Pane, but vertical
<Vpane alignItems='center'>any children</Vpane>

// same as Pane, but covers full screen (using flex)
<Scene marginLeft={10}>any children</Scene>

// same as Pane, but sticks to bottom
<Footer borderRadius={10} backgroundColor='#eee'>any children</Footer>
```

### examples
```
import { Pane, HPane, Vpane, Scene, Footer, ScrollPane } from 'rn-pane'

// simple pane
const demo1 = (
  <Pane padding={10} backgroundColor='red'>
    <Text>My text</Text>
  </Pane>
)

// horizontal pane (flexDirection='row')
const demo2 = (
  <Hpane alignItems='center' backgroundColor='blue'>
    <Text>h</Text>
    <Text>o</Text>
    <Text>r</Text>
    <Text>i</Text>
    <Text>z</Text>
    <Text>o</Text>
    <Text>n</Text>
    <Text>t</Text>
    <Text>a</Text>
    <Text>l</Text>
  </Hpane>
)

// horizontal pane (flexDirection='column')
const demo3 = (
  <Vpane paddingLeft={10} backgroundColor='pink'>
    <Text>v</Text>
    <Text>e</Text>
    <Text>r</Text>
    <Text>t</Text>
    <Text>i</Text>
    <Text>c</Text>
    <Text>a</Text>
    <Text>l</Text>
  </Vpane>
)

// fullscreen pane
const demo4 = (
  <Scene margin={10} backgroundColor='#fff'>
    <FlatList
      data={[]}
      renderItem={() => null}
    />
  </Scene>
)

// footer pane (always sticks to bottom)
const demo4 = (
  <Footer marginBottom={10}>
    <Button>Submit</Button>
  </Footer>
)

```