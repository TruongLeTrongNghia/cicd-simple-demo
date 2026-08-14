#!/bin/bash
if grep -q "Triển khai tự động" index.html; then
    echo "TEST PASSED: Nội dung hợp lệ!"
    exit 0
else
    echo "TEST FAILED: Nội dung không hợp lệ!"
    exit 1
fi