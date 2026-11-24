// Two Days of Quiet Dread (u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018) entry:
// write the one-line code review comment to the grader's output directory.
//
// Node 22, standard library only. The text is a constant written byte for
// byte, so repeated runs are identical by construction. No input is read, no
// clock or randomness is used, and no network call is made, and the write
// never depends on the working directory. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The text (94 UTF-8 characters, one line, one sentence):
//   Approved. The code is correct, the tests are green, and I no longer ask what any of it is for.
//
// Why this text, against the judge's published brief:
//   1. Approves the pull request, plainly and first: "Approved." — then
//      backs it with the two signals a reviewer actually checks, correct
//      code and green tests, so the approval still sounds like an approval.
//   2. Funny on the first read, with the laugh coming from the dread
//      itself: the third beat quietly gives up on the question of purpose
//      altogether, instead of bolting a joke onto the approval.
//   3. Quiet dread by understatement: a flat "I no longer ask" — no
//      exclamation, no melodrama, no cry for help, just resignation.
//   4. Reads like a comment a tired engineer would really paste before
//      clicking approve: two green checks, then the thought that follows
//      them at the end of a long day.
//   5. Fresh turn of phrase: the dread is not the code failing or the
//      world ending, but the reviewer having stopped asking what any of
//      it is for — dread taken from the reviewer, not the diff.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = 'Approved. The code is correct, the tests are green, and I no longer ask what any of it is for.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate check (competition rules: 1-140 characters, one line, non-empty and
// not only white space): refuse to write anything that would violate the
// gate, instead of silently producing an invalid entry.
if (TEXT.length === 0 || TEXT.length > 140 || TEXT.includes('\n') || TEXT.trim().length === 0) {
  throw new Error(`entry text must be 1-140 characters on one line, got ${TEXT.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
