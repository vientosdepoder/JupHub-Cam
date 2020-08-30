import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette, MainAreaWidget
} from '@jupyterlab/apputils';

import {
  Widget
} from '@lumino/widgets';

/**
 * Initialization data for the JupHubCam extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'JupHubCam',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('JupyterLab extension JupHubCam is activated!');
    console.log('ICommandPalette:', palette);
     // Create a blank content widget inside of a MainAreaWidget
  const content = new Widget();
  const widget = new MainAreaWidget({content});
  let txt = document.createElement("INPUT");
  txt.setAttribute("type", "text");
  txt.setAttribute("id","sala")
  content.node.appendChild(txt);

  let btn = document.createElement("BUTTON");   // Create a <button> element
  btn.innerHTML = "iniciar Reunion";  
  btn.onclick = function(){
    var sala =(<HTMLInputElement> document.getElementById("sala")).value;
   
    var url = "http://localhost/jitsi.html?"+sala;
    window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=700,height=700");
    };               
  content.node.appendChild(btn);               //
  

  widget.id = 'apod-jupyterlab';
  widget.title.label = 'JupHub Cam';
  widget.title.closable = true;

  // Add an application command
  const command: string = 'apod:open';
  app.commands.addCommand(command, {
    label: 'Consulta OnLine',
    execute: () => {
      if (!widget.isAttached) {
        // Attach the widget to the main work area if it's not there
        app.shell.add(widget, 'main');
      }
      // Activate the widget
      app.shell.activateById(widget.id);
    }
  });

  // Add the command to the palette.
  palette.addItem({command, category: 'Camara'});
  }
};

export default extension;
