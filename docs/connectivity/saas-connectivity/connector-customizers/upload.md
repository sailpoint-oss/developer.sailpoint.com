---
id: connectivity-customizers-uploading
title: Build and Upload into Identity Now
pagination_label: Build and Upload
sidebar_label: Build and Upload
sidebar_position: 5
sidebar_class_name: saasConnectivity
keywords: ['connectivity', 'connectors', customizers]
description: Build and upload connectivity customizers.
slug: /connectivity/saas-connectivity/customizers/upload
tags: ['Connectivity']
---

# Building and uploading to Identity Now

### Initial requirements

Before you can upload a connector customizer, you must issue the create command to create an empty connector customizer:

```bash
sail conn customizers create my-connector-customizer
```

This will return the customizer ID. 

```bash
+--------------------------------------+-------------------------+---------+
|                  ID                  |          NAME           | VERSION |
+--------------------------------------+-------------------------+---------+
| 7b968fab-0f40-49f0-b13b-8bf529fc0b82 | my-connector-customizer |         |
+--------------------------------------+-------------------------+---------+
```

### Build the customizer

Building a connector customizer is similar to building a SaaS Connector. Execute this command:

```bash
npm run pack-zip
```

After the build is complete, you will see a message like this:

```bash
> my-connector-customizer@0.1.0 pack-zip
> spcx package

Connector zip file created under dist folder: my-connector-customizer-0.1.0.zip
```

### Upload to IdentityNow

To upload the customizer to IdentityNow, use the upload command:

```bash
sail conn customizers upload -c 7b968fab-0f40-49f0-b13b-8bf529fc0b82 -f .\dist\my-connector-customizer-0.1.0.zip
```
Now the customizer is ready to be used!