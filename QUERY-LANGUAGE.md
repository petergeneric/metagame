# Querying

The Metagame advanced search tab supports a conceptually simple, but powerful, query language.
This is exposed for authors wanting to run general queries (the full system supports quite sophisticated queries, but these are likely too technical for the non-technician).
Metagame also has an experimental natural language query system (whose queries are run against a JIT created SQLite database rather than using this query language).


- `SearchQuery \= (Selector)\* (Tail)?`
- `Selector \=	(SelectorName):(SelectorValue)`
- `SelectorName \= (see below list)`
- `SelectorValue \= \[^ \]+`
- `Tail \= \[0-9\]-\[0-9\]+(,\[0-9\]-\[0-9\]+)\*`
	- Constrains by a list of Leads
- `Tail \= .\*`
	- Applies a substring match to tail of query

## Selectors

- `near:`
	- *Allows constraining resultset to those that are within a set distance from some point(s) of interest*
	- Form: `near:location,\[distance expr\],\[substring\],\[limit\]`
	- Defaults:
		- Distance: 3km
		- Substring: (none)
		- Limit: (none)
	- Examples:
		- near:here (within default dist of current map centre)
		- near:anchor (within default dist of current anchor)
		- near:anchor,1mi (within 1 mile of the current anchor)
		- near:1-1234 (near a lead)
		- near:LI-20 (near a building)
		- near:993488,223292 (near a set EPSG:2263 coordinate)
		- near:LI-20,1mi,bar,10 (the ten nearest bars to LI-20)
- `contains:`
	- *Allows constraining resultset to those whose searchText contains the supplied string. May not currently contain spaces. If multiple values are supplied, they are ORred together*
	- Form: `contains:value,\[value2\]...`
	- Examples:
		- Contains:bar
		- Contains:1-1234
		- contains:Subway,Railway
- `namecontains:`
  - *Like contains, but only applies to the record's caption (the display name)*
- `namestarts:`
  - *Like `namecontains:` but anchors to the start of the value, so it behaves like White Pages searches.
- `is:`
	- *Allows constraining resultset to those leads that have some set of properties. Multiple arguments are ORred together*
	- Form: `is:property,\[property2\],...`
	- Supported Properties:
		- place (ptype \!= person)
		- person (ptype \== person)
		- listed (listype \!= private)
		- unlisted (listype \== private)
        - poi (points of interest)
        - bus - special-case to find only Buses (Bus+Subway in same category)
        - subway - special-case to find only Subway stops  (Bus+Subway in same category)
		- (tag)
			- valid tags can be found in `game-directory.mjs` CATEGORY_DATA. Examples: bakery/bar/restaurant
		- icon.(icon)
			- icon.blank shows all with a generic place icon
- `region:`
	- *Constrains resultset to those leads in a given map neighbourhood (or multiple)*
	- Form: `region:region1,\[region2\],...`
	- Examples:
		- region:LI
		- region:LI,CS
- `fuzzyregion:`
  - *Like region, but the constraint is applied to the regions listed AND the regions directly adjoining them on the map*
    - Examples:
      - fuzzyregion:LI
      - fuzzyregion:here
- `besideregion:`
  - *Like fuzzyregion, but only looks in adjoining regions, not the regions specified themselves
- `limit:`
	- *Limits the resultset to the first n items*
	- Form: `limit:numberOfItemsToSelect`
- `random:`
	- *Selects a number of items at random from the resultset*
	- Form: `random:numberOfItemsToSelect`

## Sorting
 
Adding the following 'constraint' will set up a distance sort to be performed at the end of the search pipeline:

``` 
distance:(anchor name),[max distance],[limit]
```

Properties:
- Anchor Name: see `Referencing Locations` below
- Max Distance: after sorting, the cutoff distance to apply. See `Distances` below
- Limit: the optional result limit

Be aware that `distance:` is intended for sorting resultsets, it's not really intended for constraints (for that, use the `near:` selector). As a result, it's generally recommended that users do not go beyond `distance:(anchor)`.

Since this is deferred to the end of the pipeline, it takes place AFTER any `limit:` or `random:` selectors have been executed. This may be unintuitive.

## Distances
Anywhere that distances are referenced, the parser expects `[amount][unit]` (with no space). Amounts can be floating point (i.e. have a decimal point). The supported units are:
- `m` - meters
- `km` - kilometers
- `ft` - Imperial Feet (for the convenience of users in Liberia, USA, and Myanmar)
- `mi` - Imperial Miles (for the convenience of users in Liberia, USA, and Myanmar)


## Referencing Locations
Selectors use a standard approach for understanding locations. These take the form:
- `here` - the current map centre
- `anchor` - the current anchor (N.B. will fail the search if no anchor is set)
- `1-1234` - a lead value
- `LI-20` - a building value
- `x,y` - an EPSG:2263 coordinate pair
