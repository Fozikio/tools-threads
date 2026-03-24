# @fozikio/tools-threads

> **Built into cortex-engine v1.0.0+**
> These tools are now included in [`@fozikio/cortex-engine`](https://github.com/Fozikio/cortex-engine) core � no separate install needed. This package remains available for use with cortex-engine **v0.x only**. If you're on v1.0.0+, just install `@fozikio/cortex-engine`.


Thread management plugin for cortex-engine. Track ongoing questions, explorations, and work topics as persistent thought threads stored in Firestore.

## Install

```
npm install @fozikio/tools-threads
```

## Tools

| Tool | Description |
|------|-------------|
| `thread_create` | Create a new thought thread with title, body, kind, priority, and tags |
| `thread_update` | Add an update to an existing thread |
| `thread_resolve` | Mark a thread as resolved with a resolution note |
| `threads_list` | List threads, optionally filtered by status, kind, or project |

## Usage

```yaml
# cortex-engine config
plugins:
  - package: "@fozikio/tools-threads"
```

```typescript
import threadsPlugin from "@fozikio/tools-threads";
import { CortexEngine } from "@fozikio/cortex-engine";

const engine = new CortexEngine({
  plugins: [threadsPlugin],
});
```

## Documentation

- **[Wiki](https://github.com/Fozikio/cortex-engine/wiki)** — Guides, architecture, and full tool reference
- **[Plugin Authoring](https://github.com/Fozikio/cortex-engine/wiki/Plugin-Authoring)** — Build your own plugins
- **[Contributing](https://github.com/Fozikio/.github/blob/main/CONTRIBUTING.md)** — How to contribute

## License

MIT
