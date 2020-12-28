import React from 'react';
import QRCode from 'qrcode.react';

function QrcodeComponent({ report }) {
  const { name, result, age, address, gender } = report;
  const param = `name=${name}&result=${result}&address=${address}&age=${age}&gender=${gender}`;
  const value = `https://silly-tesla-46cd20.netlify.app/validate/?${param}`;

  const downloadQR = () => {
    const canvas = document.getElementById('123456');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `swab-test-${name}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <QRCode
        id="123456"
        value={value}
        size={290}
        level={'H'}
        includeMargin={true}
      />

      <a onClick={downloadQR}> Download QR </a>
    </>
  );
}

export default QrcodeComponent;
