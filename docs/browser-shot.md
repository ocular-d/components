---
title: Browser Shot
description: Image as browser screen-shot
meta:
  - name: "og:description"
    content: A Banner component
  - name: keywords
    content: A banner component.
tags:
  - Banner

---

<Header/>

---

## Usage

```markdown
<BrowserShot url="https://component.ocular-d.tech/" :link="false" caption="Screenshot of a VuePress site.">

<img src="/example-image.png" alt="Screenshot of a VuePress site" />
</BrowserShot>
```

By changing `:link="false"` to `:link="true` the image becomes a link.

```markdown
<BrowserShot url="https://component.ocular-d.tech/" :link="false" caption="Screenshot of a VuePress site.">

<img src="/example-image.png" alt="Screenshot of a VuePress site" />
</BrowserShot>
```


## Example

<BrowserShot url="https://component.ocular-d.tech/" :link="false" caption="Screenshot of a VuePress site.">

<img src="/example-image.png" alt="Screenshot of a VuePress site" />
</BrowserShot>