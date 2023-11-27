#!/bin/bash

echo "Scaffolding project for Go"

for i in {01..25}
do
  mkdir $i
  touch $i/input.txt
  touch $i/output.txt

  # Instantiate main.go with the specified code using cat
  cat <<EOF >$i/main.go
package main

import "fmt"

func main() {
    fmt.Println("Welcome to 2023/$i")
}
EOF

done