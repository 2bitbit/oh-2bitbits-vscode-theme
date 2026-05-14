use std::ops::Add;

const B: i32 = 1;
struct A {
    val: i32,
}

impl Add<i32> for A {
    type Output = String;

    fn add(self, other: i32) -> String {
        format!("呼咔哈嚓！{}+{}", self.val, other)
    }
}
fn main() {
    let instance = A { val: 1 };
    let res = instance + B;
    println!("Hello, {}!", res)
}
