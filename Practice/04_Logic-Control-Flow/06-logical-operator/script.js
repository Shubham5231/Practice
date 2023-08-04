console.log(10 < 20 && 30 > 15 && 40 > 30); //true
console.log(10 > 20 || 30 < 15); //false

// && - will return first falsy valur or the last value.

let a;

a = 10 && 20; // it retrun 20
a = 10 && 20 && 30; // it retrun 30
a = 10 && 0 && 30; // it return 0
a = 10 && '' && 0 && 30; // it rertun ntg
console.log(a);

const posts = ['post one', 'post two'];
posts.length > 0 && console.log(posts[0]);

// || - will retrun the first truthy valur or the last value

let b;
b = 10 || 20; // it retrun frist truthy value which means 10
b = 0 || 20; // it rertun last value bcoz 0 is falsy value
b = 0 || null || '' || undefined; // it retrun last value bcoz undefind is falsy value.
console.log(b);

//??-nullish operator - return the right side operand when the left null or undfiend.

let c;
c = 10 ?? 20; //it return left side means 10 will print
c = null ?? 20; // it retrun right side bcoz left side is null.
console.log(c);
