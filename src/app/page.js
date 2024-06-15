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
              />
            </div>
          );
        }
        `}
        </SyntaxHighlighter>

        <div className='p-5 '>

        <table className="w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Prop Name</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Default Value</th>
              <th className="border p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">onError</td>
              <td className="border p-2">Function</td>
              <td className="border p-2">{`(error) => console.log({error})`}</td>
              <td className="border p-2">Callback function that is called when an error occurs during scanning.</td>
            </tr>
            <tr>
              <td className="border p-2">onScan</td>
              <td className="border p-2">Function</td>
              <td className="border p-2">{`(value) => console.log({value})`}</td>
              <td className="border p-2">Callback function that is called when a QR code is successfully scanned.</td>
            </tr>
            <tr>
              <td className="border p-2">facingMode</td>
              <td className="border p-2">String</td>
              <td className="border p-2">'environment'</td>
              <td className="border p-2">The facing mode of the camera. Can be set to 'environment' or 'face'.</td>
            </tr>
            <tr>
              <td className="border p-2">constraints</td>
              <td className="border p-2">Object</td>
              <td className="border p-2">null</td>
              <td className="border p-2">The device constraints for the camera.</td>
            </tr>
            <tr>
              <td className="border p-2">onLoad</td>
              <td className="border p-2">Function</td>
              <td className="border p-2">{`(val: {mirrorVideo, streamLabel}) => null`}</td>
              <td className="border p-2">Callback function that is called when the component is loaded.</td>
            </tr>
            <tr>
              <td className="border p-2">flipHorizontally</td>
              <td className="border p-2">Boolean</td>
              <td className="border p-2">false</td>
              <td className="border p-2">Determines whether the video output should be flipped or reflected based on the facing mode.</td>
            </tr>
            <tr>
              <td className="border p-2">style</td>
              <td className="border p-2">Object</td>
              <td className="border p-2">null</td>
              <td className="border p-2">Additional styling for the section.</td>
            </tr>
            <tr>
              <td className="border p-2">className</td>
              <td className="border p-2">String</td>
              <td className="border p-2">null</td>
              <td className="border p-2">Additional class names for the section wrapper.</td>
            </tr>
            <tr>
              <td className="border p-2">delay</td>
              <td className="border p-2">Number</td>
              <td className="border p-2">800</td>
              <td className="border p-2">The delay between each scan attempt in milliseconds.</td>
            </tr>
            <tr>
              <td className="border p-2">resolution</td>
              <td className="border p-2">Number</td>
              <td className="border p-2">600</td>
              <td className="border p-2">The resolution of the canvas in pixels.</td>
            </tr>
            <tr>
              <td className="border p-2">video</td>
              <td className="border p-2">Object</td>
              <td className="border p-2">{`{ width: '50%', height: '85%' }`}</td>
              <td className="border p-2">Additional CSS styles for the video element.</td>
            </tr>
            <tr>
              <td className="border p-2">showViewFinder</td>
              <td className="border p-2">Boolean</td>
              <td className="border p-2">true</td>
              <td className="border p-2">Determines whether to show the viewfinder.</td>
            </tr>
            <tr>
              <td className="border p-2">viewFinder</td>
              <td className="border p-2">Object</td>
              <td className="border p-2">{`{ border: '12px solid rgba(255,255,255,0.3)', position: 'absolute', borderRadius: '5px', width: '250px', height: '250px' }`}</td>
              <td className="border p-2">Additional CSS styles for the viewfinder element.</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

      
    </div>
  );
}
