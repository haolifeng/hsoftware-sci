# 文件读写
## FileInfo接口
FileInfo接口中定义了File信息相关的方法。  
```
type FileInfo interface {
    Name() string
    Size() int64
    Mode() FileMode
    ModTime() time.Time
    IsDir() bool
    Sys() interface{}
}
```
## 权限
操作权限perm, 除非创建文件时才需要指定，不需要创建新文件可以将其设定为0.虽然go给perm权限设定了很多的常量，但是习惯上可以可以直接使用数字。
说明：这个权限表面文件本身对于用户的权限。同liunx的文件权限。例如600.


## 文件打开模式
这个表明程序中文件的权限，即程序对文件的可操作权限。
```
const (
    O_RDONLY int = syscall.O_RDONLY
    O_WRONLY int = syscall.O_WRONLY
    O_RDWR int = syscall.O_RDWR
    O_APPEND int = syscall.O_APPEND
    O_CREATE int = syscall.O_CREATE
    O_EXCL int = syscall.O_EXCL
    O_SYNC int = syscall.O_SYNC
    O_TRUNC int = syscall.O_TRUNC
)
```

## 文件操作

```
type File
func Create(name string)(file *File, err error)
func Open(name string)(file *File, err error)
func OpenFile(name string, flag int, perm FileMode)(file *File, err error)
func NewFile(fd uintptr, name string) *File
func Pipe() (r *File, w *File, err error)
func (f *File)Name() string
func (f *File)Stat() (fi FileInfo, err error)
func (f *File)Fd() uintptr
func (f *File)Chdir() error
func (f *File)Chmod(mode FileMode) error 
func (f *File)Chown(uid, gid int) error
func (f *File)Close() error
func (f *File)Readdir(n int) (fi []FileInfo, err error)
func (f *File)Readdirnames(n int) (names []string, err error)
func (f *File)Truncate(size int64) error 
func (f *File)Read(b []byte) (n int, err error)
func (f *File)ReadAt(b []byte, off int64) (n int, err error)
func (f *File)ReadFrom(r io.Reader) (n int64, err error)
func (f *File)Write(b []byte) (n int, err error)
func (f *File)WriteAt(b []byte, off int64) (n int, err error)
func (f *File)Seek(offset int64, whence int) (ret int64, err error)
func (f *File)WriteString(s string) (n int, err error)

```

