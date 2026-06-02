#!/usr/bin/env python3
"""
sync-data.py  —  run from the site root before opening locally.
Bakes the current content.json and skills.json into render.js so
the site works when opened as a local file (file:// protocol).

Usage:
    python3 sync-data.py
"""

import json, sys, os

ROOT = os.path.dirname(os.path.abspath(__file__))

def load_json(name):
    path = os.path.join(ROOT, name)
    with open(path, encoding='utf-8') as f:
        return json.load(f)

def replace_blob(src, marker_start, marker_end, new_data):
    i1 = src.index(marker_start) + len(marker_start)
    i2 = src.index(marker_end, i1)
    return src[:i1] + new_data + src[i2:]

render_path = os.path.join(ROOT, 'render.js')

print('Reading JSON files...')
content = load_json('content.json')
skills  = load_json('skills.json')

content_str = json.dumps(content, separators=(',',':'), ensure_ascii=True)
skills_str  = json.dumps(skills,  separators=(',',':'), ensure_ascii=True)

print('Reading render.js...')
with open(render_path, encoding='utf-8') as f:
    src = f.read()

print('Patching _CONTENT_DATA...')
src = replace_blob(src,
    'const _CONTENT_DATA = ',
    ';\n\n  const _SKILLS_DATA = ',
    content_str)

print('Patching _SKILLS_DATA...')
src = replace_blob(src,
    'const _SKILLS_DATA = ',
    ';\n\n  let _content',
    skills_str)

with open(render_path, 'w', encoding='utf-8') as f:
    f.write(src)

print(f'Done. render.js updated ({len(src):,} bytes).')
print('You can now open index.html locally and everything will render correctly.')
