use std::ops::Add;

const B: i32 = 1;
struct A {
    val: i32,
}
impl A {
    fn new() -> Self {
        A { val: 1 }
    }
    fn inc(&mut self) {
        self.val += 1;
    }
}

impl Add<i32> for A {
    type Output = String;

    fn add(self, other: i32) -> String {
        format!("呼咔哈嚓！{}+{}", self.val, other)
    }
}
fn add(a: &str, b: &str) -> String {
    format!("{a}{b}")
}

fn main() {
    let mut instance = A::new();
    instance.inc();
    let res_1 = instance + B;
    println!("Hello, {}!", res_1);
    let a = "a";
    let b = "b";
    let res_2 = add(a, b);
    println!("Hello, {}!", res_2);
}
