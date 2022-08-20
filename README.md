# _Howdy_ Docker Image

A tiny js server that says Hello  
Meant to help learning Kubernetes

_Salut_ is the french word for _Howdy_

```sh
docker run --env NAME=Fred -p 8080:8080 jimetevenard/howdy:latest
```

## A Random Color for each instance

The color is randomly determined at server startup.  
It can help figuring out which instance you're hitting in a k8s cluster

## It says hello to `$NAME`

Displaying the value of that env variable.
