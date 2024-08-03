import React from "react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { printPlugin } from '@react-pdf-viewer/print';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';



const PDFViewer = () => {

    const toolbarPluginInstance = toolbarPlugin();
    const fullScreenPluginInstance = fullScreenPlugin();
    const getFilePluginInstance = getFilePlugin();
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const printPluginInstance = printPlugin();
    const zoomPluginInstance = zoomPlugin();
    const { Toolbar } = toolbarPluginInstance;

    return (
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
            {/* Barra de herramientas personalizada */}
            <Toolbar>
                {(props) => {
                    const {
                        Download,
                        EnterFullScreen,
                        GoToNextPage,
                        GoToPreviousPage,
                        Print,
                        ZoomIn,
                        ZoomOut,
                    } = props;
                    return (
                        <div className="flex items-center bg-gray-200 rounded">
                            <div className="px-1">
                                <GoToPreviousPage />
                            </div>
                            <div className="px-1">
                                <GoToNextPage />
                            </div>
                            <div className="px-1">
                                <ZoomOut />
                            </div>
                            <div className="px-1">
                                <ZoomIn />
                            </div>
                            <div className="px-1">
                                <EnterFullScreen />
                            </div>
                            <div className="px-1">
                                <Print />
                            </div>
                            <div className="px-1">
                                <Download />
                            </div>
                        </div>
                    );
                }}
            </Toolbar>

            {/* Visor de PDF */}
            <div className='h-5/6'>
                <Viewer
                    fileUrl="./src/assets/Portafolio.pdf"
                    plugins={[
                        toolbarPluginInstance,
                        fullScreenPluginInstance,
                        getFilePluginInstance,
                        pageNavigationPluginInstance,
                        printPluginInstance,
                        zoomPluginInstance,
                    ]}
                />
            </div>
        </Worker>
    );
};

export default PDFViewer;