import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "fs";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="5" fill="#111"/>
  <text
    x="16"
    y="21.5"
    text-anchor="middle"
    fill="white"
    font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
    font-size="10.5"
    font-weight="800"
    letter-spacing="0.5"
  >FRM</text>
</svg>`;

const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 32 } });
const png = Buffer.from(resvg.render().asPng());

// Wrap PNG in ICO container
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: 1 = ICO
header.writeUInt16LE(1, 4); // image count: 1

const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0);           // width
entry.writeUInt8(32, 1);           // height
entry.writeUInt8(0, 2);            // color count (0 = no palette)
entry.writeUInt8(0, 3);            // reserved
entry.writeUInt16LE(1, 4);         // color planes
entry.writeUInt16LE(32, 6);        // bits per pixel
entry.writeUInt32LE(png.length, 8); // image data size
entry.writeUInt32LE(22, 12);       // offset to image data (6 + 16)

const ico = Buffer.concat([header, entry, png]);
writeFileSync("public/favicon.ico", ico);
console.log(`favicon.ico written (${ico.length} bytes)`);
