# Static files

`router.mountFiles(mountPath, targetDir, memoized = true)` serves a directory, and `router.mountFile(mountPath, targetFile, memoized = true)` serves a single file. Both serve on GET, and both are async, so `await` them before serving.

By default (`memoized` true) files are read once, when they are mounted, and held in memory. Each is served with an ETag, and with a gzip-compressed copy for clients that accept it. Pass `false` to read the file on each request instead, which suits files that change while the server runs.

@example static-files.ts

Output:

@output static-files.ts
