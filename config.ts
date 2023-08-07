import { DeleteProps, InputSettings } from "./Types"

export const svgSettings: InputSettings = {
    deleteXlmns: true,
    deleteIds: true,
    deleteMetadata: true,
    deleteSodipodi: true,
    deleteInkscape: true,
}

const inkscapeRegex: RegExp = new RegExp(/inkscape:.*/)
const sodipodiRegex: RegExp = new RegExp(/sodipodi:.*/)
const oooRegex: RegExp = new RegExp(/ooo:.*/)

export const deleteProps: DeleteProps[] = ['xmlns:dc', 'xmlns:cc', 'xmlns:rdf', 'xmlns:svg', 
'id', 'version', 'inkscape:version', 'inkscape:export-filename', 'inkscape:export-xdpi',
  'inkscape:export-ydpi', 'inkscape:label', 'inkscape:groupmode', 'inkscape:connector-curvature', 'sodipodi:docname', 'xmlns:sodipodi', 'xmlns:inkscape', 'inkscape:showpageshadow',
  'inkscape:pageopacity', 'inkscape:deskcolor', 'inkscape:document-units', 
'inkscape:cx', 'inkscape:cy', 'inkscape:window-x', 'inkscape:window-y', 'inkscape:window-maximized', 'inkscape:zoom', 'showgrid','xlmns:ooo', inkscapeRegex, sodipodiRegex, oooRegex
]
