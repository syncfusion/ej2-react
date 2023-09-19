import * as React from 'react';
import { BarcodeGenerator, BarcodeGeneratorModel } from '@syncfusion/ej2-barcode-generator';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents react Barcode Component
 * ```tsx
 * <BarcodeGeneratorComponent></BarcodeGeneratorComponent>
 * ```
 */
export class BarcodeGeneratorComponent extends BarcodeGenerator {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<BarcodeGeneratorModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    private statelessTemplateProps: string[] = null;
    private templateProps: string[] = null;
    private immediateRender: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<BarcodeGeneratorModel & DefaultHtmlAttributes>;
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

applyMixins(BarcodeGeneratorComponent, [ComponentBase, React.Component]);
