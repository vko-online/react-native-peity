import React from 'react';
import { ViewStyle, ViewProps } from 'react-native';
interface PaneProps extends ViewStyle, ViewProps {
    children: React.ReactNode;
    safe?: boolean;
}
declare const Pane: React.FC<PaneProps>;
export declare const Hpane: React.FC<PaneProps>;
export declare const Vpane: React.FC<PaneProps>;
export declare const Scene: React.FC<PaneProps>;
export declare const Footer: React.FC<PaneProps>;
export default Pane;
