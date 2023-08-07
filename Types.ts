export type File = string

export type DeleteProps = 'xmlns:dc' | 'xmlns:cc'| 'xmlns:rdf'| 'xmlns:svg'| 'xmlns:sodipodi'|
'id'| 'version'| 'inkscape:version'| 'inkscape:export-filename'| 'inkscape:export-xdpi'| 'inkscape:export-ydpi'|
  'sodipodi: docname' | 'inkscape:label' | 'inkscape:groupmode' | 'inkscape:connector-curvature' | 'sodipodi:docname' | 'xlmns:sodipodi' | 'xmlns:inkscape' | 'inkscape:showpageshadow' | 'inkscape:pageopacity' | 'inkscape:deskcolor' | 'inkscape:document-units'
  | 'showgrid' | 'inkscape:zoom' | 'inkscape:cx' | 'inkscape:cy' | 'inkscape:window-width' | 'inkscape:window-height' | 'xlmns:ooo' | RegExp
    | 'inkscape:window-x' | 'inkscape:window-y' | 'inkscape:window-maximized' 
  
export type InputSettings = {
    deleteXlmns: boolean,
    deleteIds: boolean,
    deleteInkscape: boolean,
    deleteMetadata: boolean,
    deleteSodipodi: boolean
    }


