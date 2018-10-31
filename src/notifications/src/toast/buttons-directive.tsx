import { ComplexBase } from '@syncfusion/ej2-react-base';
import { ButtonModelPropsModel } from '@syncfusion/ej2-notifications';


/**
 * `ButtonDirective` represent a button of the react Toast. 
 * It must be contained in a Toast component(`ToastrComponent`). 
 * ```tsx
 * <ToastComponent> 
 * <ButtonsDirective>
 * <ButtonDirective content='Ok' isPrimary=true></ButtonDirective>
 * <ButtonDirective content='Cancel'></ButtonDirective>
 * <ButtonsDirective>
 * </ToastComponent>
 * ```
 */
export class ButtonModelPropsDirective extends ComplexBase<ButtonModelPropsModel, ButtonModelPropsModel> {
    public static moduleName: string = 'buttonModelProps';
}

export class ButtonModelPropDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'buttons';
    public static moduleName: string = 'buttonModelProp';
}