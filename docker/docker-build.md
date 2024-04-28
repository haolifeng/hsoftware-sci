# docker build命令
## Usage
```
docker build [OPTIONS] PATH | URL | -
```
## Options
|Name, shorthnd | default | description|
|---|---|---|
|--add-host||Add a custom host-to-IP mapping(host:ip)|
|--build-arg||set build-time variables|
|--cache-from ||images to consider as cache sources|
|--cgroup-parent||Optional parent cgroup for the container|
|--compress||compress the build context using gzip|
|--cpu-period||limit the cpu cfs(completely fair scheduler) period|
|--cpu-quota||limit the cpu cfs(completely fair scheduler) quota|
|--cpu-shares, -c ||cpu shares(relative weight)|
|--cpuset-cpus||cpus in which to allow execution(0-3,0,1)|
|--cpuset-mems||mems in which to allow execution(0-3,0,1)|
|--disable-content-trust|true|skip image verification|
|--file, -f|PATH/Dockerfile|name of the dockerfile |
|--force-rm||always remove intermediate containers|
|-iidfile||write the image Id to the file|
|--isolation||container isolation technology|
|--label||set metadata for an image|
|--memroy, -m ||Memory limit|
|--memory-swap||swap limit equal to memory plus swap:-1 to enable unlimited swap|
|--network||set the networking mode for the run instructions during build|
|--no-cache||do not use cache when building the image|
|--platform||set platform if server is multi-platform capable(liunx/amd64, linux/386)|
|--pull||always attempt to pull a newer version of the image|
|--quiet, -q||suppress the build output and print image ID on success|
|--rm|true|remove intermediate containers after a successful build|
|--security-opt||security options|
|--shm-size||size of /dev/shm|
|--squash||squash newly built layers into a single new layer|
|--tag, -t||name and optionally a tag in the name:tag format|
|--target||set the target build stage to build|
|--ulimit||ulimit options|
