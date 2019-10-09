import React from 'react'
import Svg, { Circle, Rect, Polygon, Polyline, Path } from 'react-native-svg'

interface Options {
  fill?: string
  height?: number
  width?: number
  min?: number
  max?: number
  stroke?: string
  strokeWidth?: number
}
interface PieOptions extends Omit<Options, 'stroke' | 'strokeWidth' | 'fill'> {
  radius?: number
  innerRadius?: number
  fill?: string[] | Function
}

interface LineProps extends Options {
  data: number[]
}
interface PieProps extends PieOptions {
  data: number | number[]
}
interface BarProps extends Omit<LineProps, 'fill'> {
  fill?: string | string[]
  data: number[]
  padding?: number
}
export function Line ({ data,
  fill = '#c6d9fd',
  height = 16,
  min = 0,
  max,
  stroke = '#4d89f9',
  strokeWidth = 1,
  width = 32
}: LineProps) {
  let content = []
  const values = data.map(d => Math.max(d, 0))
  if (values.length === 1) values.push(values[0])
  const _max = Math.max.apply(Math, typeof max === 'undefined' ? values : values.concat(max))
  const _min = Math.min.apply(Math, typeof min === 'undefined' ? values : values.concat(min))
  const _diff = _max - _min
  const _height = height - strokeWidth

  function xScale (input) {
    return input * (width / (values.length - 1))
  }
  function yScale (input) {
    let y = _height

    if (_diff) {
      y -= ((input - min) / _diff) * _height
    }

    return y + strokeWidth / 2
  }
  const zero = yScale(Math.max(min, 0))
  const coords = [0, zero]

  for (let i = 0; i < values.length; i++) {
    coords.push(
      xScale(i),
      yScale(values[i])
    )
  }
  coords.push(width, zero)

  if (fill) {
    content.push((
      <Polygon
        fill={fill}
        key='polygon'
        points={coords.join(' ')}
      />
    ))
  }
  if (strokeWidth) {
    content.push((
      <Polyline
        fill='none'
        key='polyline'
        points={coords.slice(2, coords.length - 2).join(' ')}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={'square'}
      />
    ))
  }

  return (
    <Svg width={width} height={height}>
      {content}
    </Svg>
  )
}
export function Pie ({ data,
  fill = ['#ff9900', '#fff4dd', '#ffc66e'],
  radius = 8,
  max = 8,
  min = 0,
  width = 30,
  height = 30,
  innerRadius
 }: PieProps) {
  let content = []
  const _current = typeof data === 'number' ? Math.max(data, min) : Math.max(...data)
  let values = typeof data === 'number' ? [_current, Math.max(0, max - _current)] : data
  let length = values.length
  let sum = values.reduce((a, b) => a + b)
  if (!sum) {
    length = 2
    sum = 1
    values = [0, 1]
  }
  const diameter = radius * 2
  const cx = width / 2
  const cy = height / 2
  const _radius = Math.min(cx, cy)
  const pi = Math.PI
  function scale (value, radius) {
    const radians = value / sum * pi * 2 - pi / 2
    return [
      radius * Math.cos(radians) + cx,
      radius * Math.sin(radians) + cy
    ]
  }
  let cumulative = 0
  for (let i = 0; i < length; i++) {
    const value = values[i]
    const portion = value / sum
    if (portion === 0) continue

    if (portion === 1) {
      if (innerRadius) {
        const x2 = cx - 0.01
        const y1 = cy - _radius
        const y2 = cy - innerRadius

        content.push(
          <Path
            fill={fillFn(fill)(value, i)}
            key={`path-${i}`}
            d={[
              'M', cx, y1,
              'A', _radius, _radius, 0, 1, 1, x2, y1,
              'L', x2, y2,
              'A', innerRadius, innerRadius, 0, 1, 0, cx, y2
            ].join(' ')}
          />
        )
      } else {
        content.push(
          <Circle
            fill={fillFn(fill)(value, i)}
            key={`circle-${i}`}
            cx={cx}
            cy={cy}
            r={_radius}
          />
        )
      }
    } else {
      const cumulativePlusValue = cumulative + value

      let d = ['M' as any].concat(
        scale(cumulative, radius),
        'A', radius, radius, 0, portion > 0.5 ? 1 : 0, 1,
        scale(cumulativePlusValue, radius),
        'L'
      )

      if (innerRadius) {
        d = d.concat(
          scale(cumulativePlusValue, innerRadius),
          'A', innerRadius, innerRadius, 0, portion > 0.5 ? 1 : 0, 0,
          scale(cumulative, innerRadius)
        )
      } else {
        d.push(cx, cy)
      }

      cumulative += value

      content.push(
        <Path
          fill={fillFn(fill)(value, i)}
          key={`path-2-${i}`}
          d={d.join(' ')}
        />
      )
    }
  }
  return (
    <Svg width={width || diameter} height={height || diameter}>
      {content}
    </Svg>
  )
}

export function Bar ({ data,
  fill = ['#4D89F9'],
  height = 16,
  min = 0,
  max,
  padding = 0.1,
  width = 32
}: BarProps) {
  let content = []
  const values = data.map(d => Math.max(d, 0))
  if (values.length === 1) values.push(values[0])
  const _max = Math.max.apply(Math, typeof max === 'undefined' ? values : values.concat(max))
  const _min = Math.min.apply(Math, typeof min === 'undefined' ? values : values.concat(min))
  const _diff = _max - _min

  function xScale (input) {
    return input * width / values.length
  }

  function yScale (input) {
    return height - (
      _diff ? ((input - min) / _diff) * height : 1
    )
  }
  for (let i = 0; i < values.length; i++) {
    const x = xScale(i + padding)
    const w = xScale(i + 1 - padding) - x
    const value = values[i]
    const valueY = yScale(value)
    let y1 = valueY
    let y2 = valueY
    let h

    if (!_diff) {
      h = 1
    } else if (value < 0) {
      y1 = yScale(Math.min(_max, 0))
    } else {
      y2 = yScale(Math.max(_min, 0))
    }

    h = y2 - y1

    if (h === 0) {
      h = 1
      if (_max > 0 && _diff) y1--
    }

    content.push(
      <Rect
        fill={fillFn(fill)(value, i)}
        x={x}
        key={`rect-${i}`}
        y={y1}
        width={w}
        height={h}
      />
    )
  }
  return (
    <Svg width={width} height={height}>
      {content}
    </Svg>
  )
}

function fillFn (fill) {
  if (typeof fill === 'function') {
    return fill
  }
  return (_: number, i: number) => fill[i % fill.length]
}
