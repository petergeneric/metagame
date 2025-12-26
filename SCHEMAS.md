# Schema Documentation

> Auto-generated from TypeScript types. Do not edit manually.
> Run `make schemadoc` to regenerate.

## Table of Contents

- [GameWorld](#interface-gameworld)
- [SHCDGameInfo](#interface-shcdgameinfo)
- [SHCDAlly](#interface-shcdally)
- [GameProofOfOwnership](#interface-gameproofofownership)
- [GameRegion](#interface-gameregion)
- [CaseDay](#interface-caseday)
- [CaseLead](#interface-caselead)
- [CaseManifest](#interface-casemanifest)

---

# Interface: GameWorld

## Properties

### aptName

> **aptName**: `string`

The prefix to use for apartments. e.g. 'Apt' for NY Noir, 'Flat' for SHCD

***

### cases

> **cases**: [CaseManifest](#interface-casemanifest)[]

The list of cases available in this world for online play

***

### credits?

> `optional` **credits**: `string`

The credits for the game system

***

### hasReverseDirectory

> **hasReverseDirectory**: `boolean`

Does this game system support reverse directory?

***

### hasWhitePages

> **hasWhitePages**: `boolean`

Does this game system support white pages?

***

### hasYellowPages

> **hasYellowPages**: `boolean`

Does this game system support yellow pages?

***

### iconBaseUrl

> **iconBaseUrl**: `string`

Base URL for icons. Expects "place-(icon name).png" (for map pin) and "square/(icon name).png" (for elsewhere in UI) files currently

***

### iconMappingURL

> **iconMappingURL**: `string`

Mapping file used to compute icons for places.
Should conform to `Record<string, CategoryInfo>` schema

***

### icons

> **icons**: `Record`\<`string`, `string`\>

For special icons, map of iconname to fully qualified URLs to the icon (for bookmark pins)<br />

***

### locationResources

> **locationResources**: `string`[]

URLs where collections of Resources can be found. Should preferably be of size 1, but if greater than 1 the JSONs will be concatenated.
Can point at a .json or a .json.gz file

***

### mapBaseUrl

> **mapBaseUrl**: `string`

The base URL for fetching XYZ map tiles

***

### mapCentre

> **mapCentre**: \[`number`, `number`\]

The map centre coordinates, in the world projection system

***

### mapCentreEPSG3857

> **mapCentreEPSG3857**: \[`number`, `number`\]

The map centre coordinates, in the EPSG:3857 projection system

***

### mapCredit?

> `optional` **mapCredit**: `string`

Map credit information to show in the bottom right

***

### mapExtent

> **mapExtent**: \[`number`, `number`, `number`, `number`\]

An extent (minx,miny,maxx,maxy) of the map in the world projection system

***

### mapExtentEPSG3857

> **mapExtentEPSG3857**: \[`number`, `number`, `number`, `number`\]

An extent (minx,miny,maxx,maxy) of the map in the EPSG:3857 projection system.

***

### mapRotation?

> `optional` **mapRotation**: `number`

The rotation to apply to the map, in degrees.

***

### mapZoom?

> `optional` **mapZoom**: `number`

The default zoom level for the map. Will be 12 if not set

***

### mapZoomMax?

> `optional` **mapZoomMax**: `number`

Max zoom level to permit; defaults to 18. Zooming in fast allows going in deeper than this and then elastically bounces back

***

### mapZoomMin?

> `optional` **mapZoomMin**: `number`

Min zoom level to permit; defaults to 12. Zooming out fast allows coming out wider than this and then elastically bounces back

***

### mapZoomRange

> **mapZoomRange**: \[`number`, `number`\]

The zoom range available in the XYZ map tiles

***

### name

> **name**: `string`

The system name

***

### overworldName

> **overworldName**: `string`

The text to use when referring to the overworld

***

### projection

> **projection**: `"EPSG:3857"` \| `"WGS84"` \| `"EPSG:2263"`

The coordinate projection system all the game datafiles use. WGS84 recommended

***

### proofOfOwnership?

> `optional` **proofOfOwnership**: [GameProofOfOwnership](#interface-gameproofofownership)

If proof of ownership is required for this game, contains the validation details

***

### regions

> **regions**: [GameRegion](#interface-gameregion)[]

The sub-regions of this world

***

### savePrefix

> **savePrefix**: `string`

The prefix that should be used for in-browser saves. Example: "NYN", "SHCD"

***

### shcd?

> `optional` **shcd**: [SHCDGameInfo](#interface-shcdgameinfo)

Additional game information for Sherlock Holmes Consulting Detective

***

### shortName

> **shortName**: `string`

The short version of the system name, for use in e.g. titles

***

### type

> **type**: `string`

***

### yellowPagesAdURL?

> `optional` **yellowPagesAdURL**: `string`

Mapping file that shows visual adverts for particular Places

***

### yellowPagesSeeAlso?

> `optional` **yellowPagesSeeAlso**: `Record`\<`string`, `string`[]\>

If set, this is a mapping of Yellow Pages Categories to related Yellow Pages Categories

---

# Interface: SHCDGameInfo

## Properties

### allies

> **allies**: [SHCDAlly](#interface-shcdally)[]

---

# Interface: SHCDAlly

## Properties

### description

> **description**: `string`

***

### maploc

> **maploc**: `string`

***

### name

> **name**: `string`

---

# Interface: GameProofOfOwnership

## Properties

### prompt

> **prompt**: `string`

A prompt

***

### questions

> **questions**: `Record`\<`string`, `string`\>

A series of questions that the user must correctly answer in order to prove they own the game

---

# Interface: GameRegion

## Properties

### id

> **id**: `string`

The jregion code for this region

***

### name

> **name**: `string`

The normal english name for this region

***

### near

> **near**: `string`[]

A list of Region IDs that touch this region (for use in 'besideregion' and 'fuzzyregion' selectors)

***

### polygon

> **polygon**: `number`[][]

A (closed) GeoJSON polygon representing the region, expressed in the world projection system

---

# Interface: CaseDay

Represents a day in the case timeline

## Properties

### end

> **end**: `string`

The end time for the day (e.g., "15:00")

***

### mustGet

> **mustGet**: `string`[]

An array of markers that must be obtained during this day

***

### name

> **name**: `string`

The name of the day (e.g., "Day 1")

***

### number

> **number**: `number`

The day number; Day 1 = 1

***

### start

> **start**: `string`

The start time for the day (e.g., "10:00")

---

# Interface: CaseLead

Represents a lead in the case

## Properties

### adds?

> `optional` **adds**: `string`[]

Additional items or markers gained from this lead

***

### bookmark?

> `optional` **bookmark**: `boolean`

Whether this lead should be presented in the Bookmarks dropdown

***

### children?

> `optional` **children**: `CaseLead`[]

Child leads

***

### cost?

> `optional` **cost**: `number`

The time cost to follow this lead, if any, in minutes

***

### culture?

> `optional` **culture**: `number`

Culture points gained from this lead, if any

***

### demerit?

> `optional` **demerit**: `number`

Demerit points assigned for following this lead, if any

***

### endOfCase?

> `optional` **endOfCase**: `boolean`

Whether this lead ends the case

***

### endOfDay?

> `optional` **endOfDay**: `number`

The day number this lead ends, if applicable

***

### fromLead?

> `optional` **fromLead**: `string`

For a generated lead, the lead representing the start location (nominally a directory lead with some known map location)

***

### lead

> **lead**: `string`

The unique identifier for the lead

***

### length

> **length**: `number`

The number of pages this lead spans

***

### mustGet?

> `optional` **mustGet**: `string`[]

Marker/Documents that this Lead makes the player aware they must now get

***

### page

> **page**: `number`

The page number where this lead appears

***

### startOfDay?

> `optional` **startOfDay**: `number`

The day number this lead starts, if applicable

***

### title?

> `optional` **title**: `string`

Optional english description of the location; primarily for SHCD where the Case Leads are not named Leads on the Map

---

# Interface: CaseManifest

Represents the full case data structure

## Properties

### allies?

> `optional` **allies**: [SHCDAlly](#interface-shcdally)[]

A list of case-specific allies

***

### author

> **author**: `string`

***

### complete

> **complete**: `boolean`

Whether the manifest has a complete representation of the case. If not, then the user should be in control of granting Markers/Documents and Demerits/Culture, as well as advancing Time

***

### days

> **days**: [CaseDay](#interface-caseday)[]

Array of days in the case

***

### id

> **id**: `string`

The unique id for the case

***

### leads

> **leads**: [CaseLead](#interface-caselead)[]

Array of leads available in the case

***

### manifestUrl?

> `optional` **manifestUrl**: `string`

If set on a case returned as part of the world then this is a URL to the manifest JSON file for the case.

***

### name

> **name**: `string`

The title of the case

***

### pdf\_url

> **pdf\_url**: `string`

URL to the PDF file for the case

***

### system?

> `optional` **system**: `string`

***

### version

> **version**: `string`

The version number of the case

***

### website

> **website**: `string`

***

### welcomeLead

> **welcomeLead**: `string`

The leading text for the welcome message

***

### welcomeTip?

> `optional` **welcomeTip**: `string`

A tip shown to the player at the beginning
