import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the JupHubCam extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'JupHubCam',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension JupHubCam is activated!');
  }
};

export default extension;
