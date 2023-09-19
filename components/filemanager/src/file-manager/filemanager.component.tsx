import * as React from 'react';
import { FileManager, FileManagerModel } from '@syncfusion/ej2-filemanager';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 Represents the Essential JS 2 react FileManager Component.
 * ```tsx
 * <FileManagerComponent showThumbnail={false}></FileManagerComponent>
 * ```
 */
export class FileManagerComponent extends FileManager {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<FileManagerModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'toolbarItems': 'toolbarItem'};
    private statelessTemplateProps: string[] = null;
    private templateProps: string[] = null;
    private immediateRender: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<FileManagerModel & DefaultHtmlAttributes>;
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

applyMixins(FileManagerComponent, [ComponentBase, React.Component]);
