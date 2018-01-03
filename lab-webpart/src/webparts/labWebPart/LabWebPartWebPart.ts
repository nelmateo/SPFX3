import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import { Log } from '@microsoft/sp-core-library';

import styles from './LabWebPartWebPart.module.scss';
import * as strings from 'LabWebPartWebPartStrings';

export interface ILabWebPartWebPartProps {
  description: string;
}

export default class LabWebPartWebPart extends BaseClientSideWebPart<ILabWebPartWebPartProps> {

  public render(): void {
    this.context.statusRenderer.clearError(this.domElement);
    this.context.statusRenderer.displayLoadingIndicator(this.domElement, "Loading...");
    Log.verbose('SpFxNuggets', 'Invoking render');
    
    Log.info('SpFxNuggets', 'Service OK', this.context.serviceScope);
    this.context.statusRenderer.clearLoadingIndicator(this.domElement);

    this.domElement.innerHTML = `
      <div class="${ styles.labWebPart }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
              <a href="https://aka.ms/spfx" class="${ styles.button }">
                <span class="${ styles.label }">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
