/**
 * Help Topics Registry
 *
 * This module defines the help topics available in the help modal.
 * Each topic is an HTML file imported at build time via Vite's ?raw query.
 */

// Import help topic HTML files
import gettingStartedContent from './getting-started.html?raw';
import whitePagesContent from './white-pages.html?raw';
import yellowPagesContent from './yellow-pages.html?raw';
import reverseDirectoryContent from './reverse-directory.html?raw';
import advancedSearchContent from './advanced-search.html?raw';
import bookmarksContent from './bookmarks.html?raw';
import keyboardShortcutsContent from './keyboard-shortcuts.html?raw';
import mapLegendContent from './map-legend.html?raw';
import nynoirPeoplePropertiesContent from './nynoir-people-properties.html?raw';
import creditsContent from './credits.html?raw';

/**
 * Definition of a single help topic
 */
export interface HelpTopic {
    /** Unique identifier for the topic */
    id: string;
    /** Display title shown in sidebar */
    title: string;
    /** Order in sidebar list (lower = higher in list) */
    order: number;
    /** Keywords for search boosting (beyond content) */
    keywords: string[];
    /** HTML content imported at build time */
    content: string;
    /** Optional world restriction (e.g., 'nynoir'). If omitted, shown for all worlds. */
    world?: string;
}

/**
 * Search document structure for MiniSearch indexing
 */
export interface HelpSearchDocument {
    id: string;
    title: string;
    keywords: string;
    content: string;
}

/**
 * All help topics in display order
 */
export const HELP_TOPICS: HelpTopic[] = [
    {
        id: 'getting-started',
        title: 'Getting Started',
        order: 10,
        keywords: ['introduction', 'basics', 'overview', 'begin', 'tutorial'],
        content: gettingStartedContent,
    },
    {
        id: 'white-pages',
        title: 'White Pages',
        order: 20,
        keywords: ['name', 'person', 'people', 'directory', 'prefix', 'resident'],
        content: whitePagesContent,
    },
    {
        id: 'yellow-pages',
        title: 'Yellow Pages',
        order: 30,
        keywords: ['business', 'category', 'see also', 'advertisement', 'company'],
        content: yellowPagesContent,
    },
    {
        id: 'reverse-directory',
        title: 'Reverse Directory',
        order: 40,
        keywords: ['address', 'location', 'maploc', 'block', 'street', 'lookup'],
        content: reverseDirectoryContent,
    },
    {
        id: 'advanced-search',
        title: 'Advanced Search',
        order: 50,
        keywords: ['query', 'filter', 'constraint', 'syntax', 'near', 'region', 'complex', 'is:', 'near:', 'contains:', 'limit:', 'random:', 'selector'],
        content: advancedSearchContent,
    },
    {
        id: 'bookmarks',
        title: 'Bookmarks & Pins',
        order: 70,
        keywords: ['save', 'anchor', 'pin', 'mark', 'favorite', 'notes', 'label'],
        content: bookmarksContent,
    },
    {
        id: 'keyboard-shortcuts',
        title: 'Keyboard Shortcuts',
        order: 80,
        keywords: ['keys', 'hotkey', 'shortcut', 'ctrl', 'escape', 'keyboard', 'navigation'],
        content: keyboardShortcutsContent,
    },
    {
        id: 'map-legend',
        title: 'Map Legend',
        order: 15,
        keywords: ['legend', 'colors', 'zoning', 'symbols', 'bus', 'subway', 'neighborhood', 'boundary'],
        content: mapLegendContent,
        world: 'nynoir',
    },
    {
        id: 'nynoir-people-properties',
        title: 'People Properties',
        order: 55,
        keywords: ['ethnicity', 'gender', 'male', 'female', 'irish', 'italian', 'german', 'names'],
        content: nynoirPeoplePropertiesContent,
        world: 'nynoir',
    },
    {
        id: 'credits',
        title: 'Credits',
        order: 100,
        keywords: ['credits', 'attribution', 'license', 'libraries', 'artwork', 'icons', 'openlayers', 'copyright'],
        content: creditsContent,
    },
];

/**
 * Get help topics filtered for a specific world
 * @param worldType The world type (e.g., 'nynoir', 'shcd'). If undefined, returns all topics.
 */
export function getTopicsForWorld(worldType?: string): HelpTopic[] {
    return HELP_TOPICS.filter((topic) => !topic.world || topic.world === worldType);
}

/**
 * Extract plain text from HTML for search indexing
 */
export function extractTextFromHTML(html: string): string {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
}
