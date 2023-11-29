'use client';
import { QrScanner } from 'react-qrcode-scanner';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

export default function Home() {
  const [value, setValue] = useState('');

  const handleScan = (value) => {
    setValue(value);
    console.log({ value });
  };

  const handleError = (error) => {
    console.log({ error });
  };

  return (
    <div className='w-screen min-h-screen'>
      <div className='flex justify-center items-center h-20 bg-gray-800 text-white text-2xl'>
        React QR Scanner Demo
      </div>
      <div className='flex  lg:justify-center p-10 gap-10 flex-wrap lg:flex-nowrap'>
        <div className='w-full rounded overflow-hidden min-w-[500px]'>
          <QrScanner onScan={handleScan} onError={handleError} />
        </div>

        <div className='w-full flex flex-col gap-4 items-center'>
          <div className='border border-1 border-gray-300 w-full p-3 rounded'>
            <b>SCANNED VALUE: </b> {value}
          </div>
          <h3>Scan this QR code with your camera to test. The result should show up above.</h3>
          <div>
            Expected value is: <span className='font-medium'>"Test QR Code Value"</span>
          </div>
          <img
            className='w-[250px]'
            src='https://barcode.tec-it.com/barcode.ashx?data=Test+QR+Code+Value&code=QRCode&eclevel=L'
          />

          <a
            href='https://www.npmjs.com/package/react-qrcode-scanner?activeTab=readme'
            target='_blank'
            className='flex  gap-2 p-5 border border-1 bg-slate-200 rounded'
          >
            <img
              src='https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.png'
              className='w-[60px]'
            />
          </a>
        </div>
      </div>

      <div className='flex flex-col items-center '>
        <h1 className='text-2xl'>Get Started</h1>
        <div>Install:</div>
        <div className='p-5 border border-1 border-gray-200 rounded'>npm i react-qrcode-scanner</div>

        <div>Usage:</div>
        

        <SyntaxHighlighter language='javascript' className={'w-1/2'}>
        {`
                
        import React from 'react';
        import {QrScanner} from "react-qrcode-scanner";

        function App() {

          const handleScan = (value) => {
              console.log({value})
          }

          const handleError = (error) => {
              console.log({error})
          }

          return (
            <div className="App">
              <QrScanner
                  onScan={handleScan}
                  onError={handleError}

                  /** Default props
                  onError = (error) => console.log({error}),
                  onScan = (value) => console.log({value}),
                  facingMode = 'environment', // environment|face
                  constraints = null, //device constraints
                  onLoad = (val :{mirrorVideo, streamLabel}) => null,
                  flipHorizontally = false, //flip or reflect the video output based on facing mode
                  style, //section styling can be added here
                  className, //classnames will be added to the section wrapper
                  delay = 800, //delay between each scan
                  resolution = 600, //canvas resolution
                  aspectRatio = '16:9',
                  showViewFinder = true,
                  viewFinder = { //any valid JS-CSS can be added here
                      border: '12px solid rgba(255,255,255,0.3)',
                      position: 'absolute',
                      borderRadius: '5px',
                      width: '250px',
                      height: '250px'
                  }
                  */
              />
            </div>
          );
        }
        `}
        </SyntaxHighlighter>
      </div>

      
    </div>
  );
}
