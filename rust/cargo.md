# cargo
Rust's package manager

Usage: cargo [+toolchain] [OPTIONS] [COMMAND]  

Some common cargo commands are (see all commands with --list):  
+   build, b ：   Compile the current package  
+    check, c  ：  Analyze the current package and report errors, but don't build object files
+    clean     ：  Remove the target directory
+    doc, d    ：  Build this package's and its dependencies' documentation
+    new       ：  Create a new cargo package, 创建一个新的cargo包
+    init      ：  Create a new cargo package in an existing directory，在一个存在的目录中创建一个cargo包。
+    add       ：  Add dependencies to a manifest file， 增加一个依赖到manifest文件
+    remove    ：  Remove dependencies from a manifest file，移除一个依赖从manifes文件。
+    run, r    ：  Run a binary or example of the local package 执行本地包的一个二进制文件或者样例
+    test, t   ：  Run the tests， 测试
+    bench     ：  Run the benchmarks
+    update    ：  Update dependencies listed in Cargo.lock
+    search    ：  Search registry for crates 查询
+    publish   ：  Package and upload this package to the registry，打包并发布
+    install   ：  Install a Rust binary. Default location is $HOME/.cargo/bin  安装到
+    uninstall ：  Uninstall a Rust binary 下载

See 'cargo help <command>' for more information on a specific command.
