/// <reference types="react" />
interface Options {
    fill?: string;
    height?: number;
    width?: number;
    min?: number;
    max?: number;
    stroke?: string;
    strokeWidth?: number;
}
interface PieOptions extends Omit<Options, 'stroke' | 'strokeWidth' | 'fill'> {
    radius?: number;
    innerRadius?: number;
    fill?: string[] | Function;
}
interface LineProps extends Options {
    data: number[];
}
interface PieProps extends PieOptions {
    data: number | number[];
}
interface BarProps extends Omit<LineProps, 'fill'> {
    fill?: string | string[];
    data: number[];
    padding?: number;
}
export declare function Line({ data, fill, height, min, max, stroke, strokeWidth, width }: LineProps): JSX.Element;
export declare function Pie({ data, fill, radius, max, min, width, height, innerRadius }: PieProps): JSX.Element;
export declare function Bar({ data, fill, height, min, max, padding, width }: BarProps): JSX.Element;
export {};
