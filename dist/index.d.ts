import React from 'react';
import { ViewStyle } from 'react-native';
interface PaneProps extends ViewStyle {
    children: React.ReactNode;
    safe?: boolean;
}
declare const Pane: React.FC<PaneProps>;
export declare const ScrollPane: React.FC<PaneProps>;
export declare const Hpane: React.FC<PaneProps>;
export declare const Vpane: React.FC<PaneProps>;
export declare const Scene: React.FC<PaneProps>;
export declare const Footer: React.FC<PaneProps>;
export default Pane;
