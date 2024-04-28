# 环境
## 安装

https://doc.rust-lang.org/book/

https://www.rust-lang.org/zh-CN/learn/get-started

https://rusty.course.rs/about.html

https://www.rustwiki.org.cn/zh-CN/book/ch01-03-hello-cargo.html

https://github.com/rust-lang/book/tree/main/src
https://course.rs/about-book.html


### linux
`
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh 
`
## 设置国内源

在用户目录下创建.cargo目录，在.cargo目录下添加文件config

### linux or macos 
$HOME/.cargo/config

### windows
C:\Users\<User>\ .cargo\config

在config中添加：
```
[source.tuna]
registry = "https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git"

[source.crates-io]
replace-with = 'tuna'
```

## 相关资料

+ https://docs.rs

+ https://doc.rust-lang.org/rust-by-example/crates/lib.html