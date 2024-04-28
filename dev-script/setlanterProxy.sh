#!/bin/sh
export no_proxy=localhost,127.0.0.0/8,::1
export https_proxy=http://127.0.0.1:44155/
export http_proxy=http://127.0.0.1:44155/
export all_proxy=socks://127.0.0.1:37221/

