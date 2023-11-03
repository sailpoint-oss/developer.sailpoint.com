---
id: plugin-build-file
title: Build File
pagination_label: Build File
sidebar_label: Build File
sidebar_position: 3
sidebar_class_name: plugin_developer_guide_build_file
keywords: ['plugin']
description: Plugin Developer Guide Build File in IdentityIQ
slug: /docs/plugin-developer-guide/build-file
tags: ['plugin','guide','identityiq']
---

# The Build File

Apache Ant is a simple, readily available tool that can be used to package plugins prior to deployment and distribution. To provide build specific values, the standard is to also include a `build.properties` file with a simple key-value pair for all build specific tokens.

```text
jdk.home.1.7=/Library/Java/JavaVirtualMachines/jdk1.8.0_66.jdk
iiq.home=/usr/local/apache-tomcat-8.0.30/webapps/identityiq/
pluginName=TodoPlugin
version=2.0.0
```

The above example illustrates how a properties file can be leveraged to allow multiple developers to use the same build process, despite having dissimilar build environments. The actual build.xml file is fairly straightforward, and is responsible for creating the build directory, compiling any java classes, packaging those compiled classes into a .jar archive, and then archiving in .zip format the complete plugin. A more detailed explanation is provided for the Todo plugin build file.


```xml
<?xml version="1.0" encoding="UTF-8"?>
<project name="Todo Plugin" default="package">
  <!-- allow overriding of build properties -->
  <property file="user.build.properties"/>
  <property file="build.properties"/>
  <property name="buildPlugins" location="build"/>
    
  <target name="clean">
        <echo message="Starting clean target"/>
        <delete dir="${buildPlugins}"/>
    </target>

 

  <target name="package">
      <property name="pluginBase" location="." />
      <property name="pluginSrc" location="${pluginBase}/src" />
      <property name="pluginBuild" location="${buildPlugins}/${pluginName}" />
      <property name="pluginLib" location="${pluginBuild}/lib" />
      <property name="pluginClasses" location="${pluginBuild}/classes" />
      <property name="pluginContents" location="${pluginBuild}/contents" />
          
      <mkdir dir="${pluginClasses}" />
          
      <javac srcdir="${pluginSrc}" destdir="${pluginClasses}"
                 includeantruntime="false" target="1.7">
        
          <classpath>
            <pathelement path="${iiq.home}/WEB-INF/classes"/>
            <fileset dir="${iiq.home}/WEB-INF/lib">
            <include name="**/*.jar"/>
            </fileset>
          </classpath>
        
          <compilerarg value="-Xlint:deprecation" />
          <compilerarg value="-Xlint:unchecked" />
      </javac>
          
      <mkdir dir="${pluginLib}" />
      <jar destfile="${pluginLib}/${pluginName}.jar">
          <fileset dir="${pluginClasses}">
            <include name="**/*" />
          </fileset>
      </jar>
          
      <mkdir dir="${pluginContents}" />
      <copy todir="${pluginContents}">
          <fileset dir="${pluginBase}">
              <include name="manifest.xml" />
              <include name="db/**" />
              <include name="import/**" />
              <include name="lib/*.jar" />
              <include name="ui/**" />
          </fileset>
          <fileset dir="${pluginBuild}">
            <include name="lib/*.jar" />
          </fileset>
      </copy>
      <zip encoding="UTF-8" baseDir="${pluginContents}" destfile="${pluginBuild}/dist/${pluginName}.${version}.zip">
      </zip>
  </target>
</project>
```

- Lines 4 and 5 of the build file specify the properties file to use during the build. If the 'user.build.properties' file does not exist, it will cascade down and use the 'build.properties'. This can be leveraged to facilitate a 'standard' build, and a developer specific build.
- Lines 14-19 define the folder structure where the resulting build artifacts will be placed
- Line 21 creates a directory for any compiled java classes to be placed
- Lines 23-33 are responsible for the compilation of java classes. It is necessary to add the out of the box IdentityIQ packages to the classpath for compilation, which is done by utilizing the iiq.home token from the build.properties file.
- Line 35 creates the lib folder, where the jar'd up plugin .class files will be placed
- Line 37-41 are responsible for creating the .jar file
- Line 45-56 copies all other files required for plugin deployment to the build folder
- Line 58-59 creates the archive (.zip) file of the plugin contents, and places it in the /dist folder - this is the archive that can be installed via 'drag and drop' in IdentityIQ


## Java Versions

When developing a plugin, complications can arise when the plugin is built using a different version of java (newer) than what is deployed on the application server(s) hosting IdentityIQ.  To avoid this, it is recommended that the 'javac' argument in the build.xml file is parametrized with the most compatible Java version available. IdentityIQ 7.1 supports both Java 1.7 and 1.8 - so setting the compilation to be 1.7 compatible is a good idea.  To do this, add the property 'target' to the 'javac' directive, and set equal to '1.7', or whatever version is being targeted - an example of this is on line 24 in the above sample.
