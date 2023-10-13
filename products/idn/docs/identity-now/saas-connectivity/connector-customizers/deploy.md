---
id: connectivity-customizers-uploading
title: Build and Upload into Identity Now
pagination_label: Build and Upload
sidebar_label: Build and Upload
sidebar_position: 5
sidebar_class_name: saasConnectivity
keywords: ['connectivity', 'connectors', customizers]
description: Getting started with Connectivity Customizers
slug: /docs/saas-connectivity/customizers/upload
tags: ['Connectivity']
---

# Build and Upload into Identity Now

### initial requirements

Before you can upload a connector customizer, you need to issue the create command to create an empty connector customizer:

```bash
sail conn customizers create my-connector-customizer
```
This will return the customizer id
```bash
+--------------------------------------+-------------------------+---------+
|                  ID                  |          NAME           | VERSION |
+--------------------------------------+-------------------------+---------+
| 7b968fab-0f40-49f0-b13b-8bf529fc0b82 | my-connector-customizer |         |
+--------------------------------------+-------------------------+---------+
```

### Building

Building a connector customizer is similar to building a SaaS Connector, simply execute the command

```bash
npm run pack-zip
```

After the build is complete, you should see a message similar to the following:

```bash
> my-connector-customizer@0.1.0 pack-zip
> spcx package

Connector zip file created under dist folder: my-connector-customizer-0.1.0.zip
```

### Uploading to IdentityNow

To upload to IdentityNow, simply use the upload command:

```bash
sail conn customizers upload -c 7b968fab-0f40-49f0-b13b-8bf529fc0b82 -f .\dist\my-connector-customizer-0.1.0.zip
```
Now the customizer is ready to be used!