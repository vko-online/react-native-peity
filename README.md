## View on steroids

Accept inline style props with view props


Using styles const is annoying, specially for simple task
```
<View style={styles.container} pointerEvents='none'>
  <MyAwesomeComponent />
</View>
const styles = StyleSheet.create({
  container: {
    paddingLeft: 10
  }
})
```

What about this? Easy-Peasy
```
<Pane paddingLeft={10} pointerEvents='none'>pets</Pane>
```

### installation
```
npm install view-on-steroids
```

### usage
Add style and view props to view
```
import Pane, { Hpane, Vpane, Scene, Footer } from 'view-on-steroids'

// accepts ViewStyleProps and ViewProps as props
<Pane backgroundColor='red' pointerEvents='none'>
  children
</Pane>

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
  <Pane padding={10} backgroundColor='red' onTouchStart={() => false>
    <Text>My text</Text>
  </Pane>
)

// horizontal pane (flexDirection='row')
const demo2 = (
  <Hpane alignItems='center' backgroundColor='blue' onTouchStart={() => false>
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

// full screen pane
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