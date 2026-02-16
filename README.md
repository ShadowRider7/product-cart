1. What is the difference between null and undefined?
   ans: null এবং undefined এর মধ্যে main পার্থক্য হচ্ছে
   undefined - এটা আগে থেকে value ছাড়া declare করা হয়, এর মান ও হয় undefined, function return নাহ করলেও undefined হয়।
   null - এটার জন্যে null একটা value set করতে হয়, এর মান হয় object,debug এর জন্যে ব্যাবহার হয়।

2. What is the use of the map() function in JavaScript? How is it different from forEach()?
   ans: map() function কোন array এর প্রত্যেকটা elements এ যায় তার উপর কোন function চালায় and একই সংখ্যার নতুন একটা array return করে
   forEach() কোন return করে নাহ ,এর type undefined, এটিও প্রত্যেকটা elements এ যায় array এর , কাজ করে but কিছু দেয় নাহ।

3. What is the difference between == and ===?
   ans: == checks only the value not the type
   === checks type and value both

4. What is the significance of async/await in fetching API data?
   ans: it's another type of data fetching, it's better then (.then) messy method , as it's clear structure of synchronous code using await, error handling is also easy here.

5. Explain the concept of Scope in JavaScript (Global, Function, Block).
   ans: Global scope holo { } or function er baire declare kora kono variable jeitah pura PROGRAM er sob jayga theke use kora jabe.
   Function scope holo function er vitore declare kora kono man, oita sudhu oi function er moddhei use kora jabe, er baire nah.
   Block scope mane kono block er space er moddher value, jeitah oi space or block er baire use kora jabe nah.
