import { parse, stringify } from 'svgson';
import { deleteProps, svgSettings } from './config';
const fs = require('fs');
const fsPromises = require('fs').promises;

//Enter file path here
const inputFilePath: string = './images/Deloitte.svg';

const getSvg = async (file: any) => {
  const svgFileData = await fsPromises.readFile(file);
  let outputData = await svgFileData.toString();
  return outputData;
};

(async (inputFilePath, svgSettings) => {
  const svgData = await getSvg(inputFilePath);
  const formatted = await parse(svgData);
  if (svgSettings.deleteMetadata) {
    const withoutMetadata = formatted.children
      .filter((c) => c.name !== 'metadata')
      .filter((x) => x.name !== 'sodipodi:namedview')
      .filter((y) => y.name !== 'defs');
    formatted.children = withoutMetadata;
  }

  function removeKeyRecursively(obj: any, keysToDelete: any) {
    //if the object array is an array
    if (Array.isArray(obj)) {
      //for each value in the array, rerun the function
      obj.forEach((item) => removeKeyRecursively(item, keysToDelete));
      //else if it's an object or null
    } else if (obj && typeof obj === 'object') {
      //if it has the property keyToDelete
      if (obj.hasOwnProperty(keyToDelete)) {
        //delete it 
        delete obj[keyToDelete];
      }
      //for each value remove the key recursively
      Object.values(obj).forEach((value) =>
        removeKeyRecursively(value, keysToDelete)
      );
    }
  }
  //See config file for more details regarding deleteProps
  for (let props in deleteProps) {
    removeKeyRecursively(formatted, deleteProps[props]);
  }
  const svgString = stringify(formatted);
  //Name output file here
  fs.writeFileSync('Output.svg', svgString);
})(inputFilePath, svgSettings);

