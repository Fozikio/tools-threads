/**
 * @fozikio/tools-threads — thread management plugin for cortex-engine.
 *
 * Provides 4 tools: thread_create, thread_update, thread_resolve, threads_list.
 * Uses the generic CortexStore API (put/get/update/query) on the 'threads_v2' collection.
 */

import type { ToolPlugin } from 'cortex-engine';
import { threadCreateTool } from './tools/thread-create.js';
import { threadUpdateTool } from './tools/thread-update.js';
import { threadResolveTool } from './tools/thread-resolve.js';
import { threadsListTool } from './tools/threads-list.js';

const plugin: ToolPlugin = {
  name: '@fozikio/tools-threads',
  tools: [
    threadCreateTool,
    threadUpdateTool,
    threadResolveTool,
    threadsListTool,
  ],
};

export default plugin;

// Named re-exports for direct use
export { threadCreateTool } from './tools/thread-create.js';
export { threadUpdateTool } from './tools/thread-update.js';
export { threadResolveTool } from './tools/thread-resolve.js';
export { threadsListTool } from './tools/threads-list.js';
