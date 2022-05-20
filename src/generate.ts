import { Template } from '@walletpass/pass-js';
import { ApplePass } from '@walletpass/pass-js/dist/interfaces';
import { readFileSync } from 'fs'

export type LocationData = {
  latitude: number
  longitude: number
}

const getLocationRing = ({ locationData, radius = 0.022 }: { locationData: LocationData, radius?: number }): LocationData[] => {
  let locationRing = []
  if (locationData) {
      let numPoints = 5
      for (let i = 0; i < numPoints; i++) {
          const rad = ((Math.PI * 2) / numPoints) * i
          locationRing.push({
              longitude: locationData.longitude + Math.cos(rad) * radius,
              latitude: locationData.latitude + Math.sin(rad) * radius,
          })
      }
  }
  return locationRing;
}

const generatePass = async ({ serialNumber, locationData, fullName }: { serialNumber: string, locationData: LocationData, fullName: string }): Promise<string> => {
  console.log({ serialNumber, locationData })
  const passJson: Partial<ApplePass> = {
    formatVersion: 1,
    passTypeIdentifier: process.env.PASS_TYPE_ID,
    serialNumber,
    teamIdentifier: process.env.TEAM_ID,
    locations: getLocationRing({ locationData }),
    barcodes: [
        {
            message: serialNumber,
            format: 'PKBarcodeFormatQR',
            messageEncoding: 'iso-8859-1',
        },
    ],
    organizationName: 'Fitness SF',
    description: 'Fitness SF',
    foregroundColor: 'rgb(0, 0, 0)',
    backgroundColor: 'rgb(254, 127, 72)',
    logoText: 'Fitness SF',
    eventTicket: {
        primaryFields: [{
          key: 'name',
          label: 'Name',
          value: fullName,
        }],
        auxiliaryFields: [],
        backFields: [],
        secondaryFields: []
    },
  };
  const template = new Template('eventTicket', passJson, undefined, undefined)
  console.log({ env: process.env.CERTIFICATE_TEXT, window })
  template.setCertificate(process.env.CERTIFICATE_TEXT || '', process.env.CERTIFICATE_PASS)
  
  const image: HTMLImageElement = await new Promise(resolve => {
    const img = new Image()
    const fileData = new Blob([readFileSync(__dirname + '/images/fitness-sf-logo.png', null)], {
        type: 'image/png',
    })
    img.src = URL.createObjectURL(fileData)
    img.onload = () => resolve(img)
  })

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!

  const getImageAtSize = async (size: number) => {
    canvas.width = size
    canvas.height = size
    const scale = Math.min(size / image.width, size / image.height)
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(
        image,
        size / 2 - (image.width * scale) / 2,
        size / 2 - (image.height * scale) / 2,
        image.width * scale,
        image.height * scale
    )
    const iconBlob: Blob | null = await new Promise(resolve => canvas.toBlob(resolve))
    const iconBuffer: Uint8Array = await new Promise(resolve => {
        const fr = new FileReader()
        fr.onload = () => resolve(new Uint8Array(fr.result as ArrayBuffer))
        fr.readAsArrayBuffer(iconBlob!)
    })
    return Buffer.from(iconBuffer)
  }

  await template.images.add('icon', await getImageAtSize(29))
  await template.images.add('icon', await getImageAtSize(58), '2x')
  await template.images.add('logo', await getImageAtSize(30))
  await template.images.add('logo', await getImageAtSize(60), '2x')

  const pass = template.createPass({})
  const blob = new Blob([(await pass.asBuffer()).buffer], {
    type: 'application/vnd.apple.pkpass',
  })
  console.log({ pass })
  const url: string = await new Promise(resolve => {
    const fr = new FileReader()
    fr.onload = e => resolve(fr.result as string)
    fr.readAsDataURL(blob)
  });
  console.log({ url })
  return url;
}

export default generatePass;