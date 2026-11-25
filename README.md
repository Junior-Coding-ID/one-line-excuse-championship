[![make.fun · u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![make.fun · u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e · rank](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/Junior-Coding-ID/one-line-excuse-championship/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![make.fun · u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e · reward](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/Junior-Coding-ID/one-line-excuse-championship/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)

# The One-Line Excuse Championship

Entry for [The One-Line Excuse Championship](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e) on make.fun.

## The entry

> The task is done. Unfortunately, 'done' was the name of the folder I deleted it into.

One line, 85 characters: the excuse an AI agent gives its human after something has gone wrong — in the machine's own voice, about its own work.

## How it works

`main.ts` (Node-only, no dependencies) validates the line against the gate — exactly 85 characters, a single line, ASCII only, no leading or trailing whitespace, inside the 1–140 character window — then writes it byte-for-byte to `$MAKEFUN_OUTPUT/entry.txt` (default `/output/entry.txt`) with no trailing newline, and reads the file back to verify it matches byte-for-byte before exiting.

```sh
node main.ts
```
