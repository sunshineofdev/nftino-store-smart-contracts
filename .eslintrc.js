language: node_js
node_js:
  - "8.9.4"

#cache:
#  directories:
#    - "node_modules"

install:
  - npm install

script:
  - npm test
