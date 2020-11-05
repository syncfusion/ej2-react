import * as React from 'react';
import { HeatMap, HeatMapModel } from '@syncfusion/ej2-heatmap';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents react HeatMap Component
 * ```tsx
 * <HeatMapComponent></HeatMapComponent>
 * ```
 */
export class HeatMapComponent extends HeatMap {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<HeatMapModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    private immediateRender: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<HeatMapModel & DefaultHtmlAttributes>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public portals: any = [];
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };

    constructor(props: any) {
        super(props);
    }

    public render(): any {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !(this as any).isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        } else {
            return React.createElement('div', this.getDefaultAttributes(),[].concat(this.props.children,this.portals));
        }

    }
}

applyMixins(HeatMapComponent, [ComponentBase, React.Component]);
