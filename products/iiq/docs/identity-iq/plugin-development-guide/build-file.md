---
id: build-file
title: Build File
pagination_label: Build File
sidebar_label: Build File
sidebar_position: 3
sidebar_class_name: BuildFile
keywords:
  [
    "IdentityIQ",
    "development",
    "developer",
    "portal",
    "plugin",
    "build",
    "docs",
    "documentation",
  ]
description:
  This is the build file section of the plugin development guide for IdentityIQ.
slug: /docs/plugin-development-guide/build-file
tags: ["Plugins"]
---

Apache Ant is a simple, readily available tool that can be used to package
plugins prior to deployment and distribution. To provide build specific values,
the standard is to also include a build.properties file with a simple key-value
pair for all build specific tokens.

```
jdk.home.1.7=/Library/Java/JavaVirtualMachines/jdk1.8.0_66.jdk

iiq.home=/usr/local/apache-tomcat-8.0.30/webapps/identityiq/

pluginName=TodoPlugin

version=2.0.0
```

The above example illustrates how a properties file can be leveraged to allow
multiple developers to use the same build process, despite having dissimilar
build environments. The actual build.xml file is fairly straightforward, and is
responsible for creating the build directory, compiling any java classes,
packaging those compiled classes into a .jar archive, and then archiving in .zip
format the complete plugin. A more detailed explanation is provided for the Todo
plugin build file.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<project name="Todo Plugin" default="package">

  <!-- allow overriding of build properties -->

  <property file="user.build.properties"/>

  <property file="build.properties"/>

  <property name="buildPlugins" location="build"/>
```
