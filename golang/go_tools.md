# 工具
## go get
使用该命令可以下载一个单一的包或者用...下载整个子目录里面的每个包。Go语音工具箱的go命令同时即使并下载所依赖的每个包。

```
usage: go get [-d] [-f] [-t] [-u] [-v] [-fix] [build flags] [packages]

Get downloads the packages named by the import paths, along with their
dependencies. It then installs the named packages, like 'go install'.

The -d flag instructs get to stop after downloading the packages; that is,
it instructs get not to install the packages.

The -f flag, valid only when -u is set, forces get -u not to verify that
each package has been checked out from the source control repository
implied by its import path. This can be useful if the source is a local fork
of the original.

The -fix flag instructs get to run the fix tool on the downloaded packages
before resolving dependencies or building the code.

The -t flag instructs get to also download the packages required to build
the tests for the specified packages.

The -u flag instructs get to use the network to update the named packages
and their dependencies. By default, get uses the network to check out
missing packages but does not use it to look for updates to existing packages.

The -v flag enables verbose progress and debug output.

Get also accepts build flags to control the installation. See 'go help build'.

When checking out a new package, get creates the target directory
GOPATH/src/<import-path>. If the GOPATH contains multiple entries,
get uses the first one. For more details see: 'go help gopath'.

When checking out or updating a package, get looks for a branch or tag
that matches the locally installed version of Go. The most important
rule is that if the local installation is running version "go1", get
searches for a branch or tag named "go1". If no such version exists
it retrieves the default branch of the package.

When go get checks out or updates a Git repository,
it also updates any git submodules referenced by the repository.

Get never checks out or updates code stored in vendor directories.

For more about specifying packages, see 'go help packages'.

For more about how 'go get' finds source code to
download, see 'go help importpath'.

This text describes the behavior of get when using GOPATH
to manage source code and dependencies.
If instead the go command is running in module-aware mode,
the details of get's flags and effects change, as does 'go help get'.
See 'go help modules' and 'go help module-get'.

See also: go build, go install, go clean.
```

## go doc
该命令打印包的声明和每个成员的文档注释，然后是整个包的文档

```

go doc log
package log // import "log"

Package log implements a simple logging package. It defines a type, Logger,
with methods for formatting output. It also has a predefined 'standard' Logger
accessible through helper functions Print[f|ln], Fatal[f|ln], and Panic[f|ln],
which are easier to use than creating a Logger manually. That logger writes to
standard error and prints the date and time of each logged message. Every log
message is output on a separate line: if the message being printed does not end
in a newline, the logger will add one. The Fatal functions call os.Exit(1) after
writing the log message. The Panic functions call panic after writing the log
message.

const Ldate = 1 << iota ...
func Fatal(v ...any)
func Fatalf(format string, v ...any)
func Fatalln(v ...any)
func Flags() int
func Output(calldepth int, s string) error
func Panic(v ...any)
func Panicf(format string, v ...any)
func Panicln(v ...any)
func Prefix() string
func Print(v ...any)
func Printf(format string, v ...any)
func Println(v ...any)
func SetFlags(flag int)
func SetOutput(w io.Writer)
func SetPrefix(prefix string)
func Writer() io.Writer
type Logger struct{ ... }
    func Default() *Logger
    func New(out io.Writer, prefix string, flag int) *Logger


```
## go run

```
usage: go run [build flags] [-exec xprog] package [arguments...]

Run compiles and runs the named main Go package.
Typically the package is specified as a list of .go source files from a single
directory, but it may also be an import path, file system path, or pattern
matching a single known package, as in 'go run .' or 'go run my/cmd'.

If the package argument has a version suffix (like @latest or @v1.0.0),
"go run" builds the program in module-aware mode, ignoring the go.mod file in
the current directory or any parent directory, if there is one. This is useful
for running programs without affecting the dependencies of the main module.

If the package argument doesn't have a version suffix, "go run" may run in
module-aware mode or GOPATH mode, depending on the GO111MODULE environment
variable and the presence of a go.mod file. See 'go help modules' for details.
If module-aware mode is enabled, "go run" runs in the context of the main
module.

By default, 'go run' runs the compiled binary directly: 'a.out arguments...'.
If the -exec flag is given, 'go run' invokes the binary using xprog:
        'xprog a.out arguments...'.
If the -exec flag is not given, GOOS or GOARCH is different from the system
default, and a program named go_$GOOS_$GOARCH_exec can be found
on the current search path, 'go run' invokes the binary using that program,
for example 'go_js_wasm_exec a.out arguments...'. This allows execution of
cross-compiled programs when a simulator or other execution method is
available.

By default, 'go run' compiles the binary without generating the information
used by debuggers, to reduce build time. To include debugger information in
the binary, use 'go build'.

The exit status of Run is not the exit status of the compiled binary.

For more about build flags, see 'go help build'.
For more about specifying packages, see 'go help packages'.

See also: go build.
```

## go build
```
usage: go build [-o output ] [build flags] [packages]
Build compiles the packages named by the import paths, along with their dependencies, but does not install the results.  
if the arguments to build are a list of .go files from a single directory, build treats them as a list of source files specifying a single package.   
when compiling packages, build ignoes file the end in '_test.go'.  
when compiling a single main package, build writes the resultsing executable to an output file named after the first source file ('go build ed.go rx.go' writes 'ed' or 'ed.exe') or the source code directory ('go build unix/sam' wirtes 'sam' or 'sam.ext' ). the '.exe' suffix is added when writing a windows executable.  

when compiling multiple packages or a single non-main package, build compiles the packages but discards the resulting object, serving only as a check that the packages can be built. 

the -i flag installs the packages that are dependencies of the target. the -i flag is deprecated. compiled packages are cached automatiacally. 

the build flags are shared by the build, clean, get, install, list , run, and test commands: 

```