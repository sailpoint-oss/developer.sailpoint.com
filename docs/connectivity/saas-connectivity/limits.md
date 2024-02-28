---
id: saas-connectivity-limits
title: Limits
pagination_label: Limits
sidebar_label: Limits
sidebar_position: 6.8
sidebar_class_name: limits
keywords: ['connectivity', 'connectors', 'commands', 'cli']
description: This describes certain limits that are in place when running a SaaS Connector
slug: /connectivity/saas-connectivity/limits
tags: ['Connectivity']
---

Below is a list of limits set in SaaS Connectivity:

- **Max Run Time**
  - The actual run time of a connector is not limited at this time, however a response in the form of `res.send()` must be recieved from a command at least every 3 minutes
  - If you have a long running call, you can use `res.keepAlive()` to send a heartbeat to IdentityNow in between `res.send()` calls to let it know the connector is still running
- **Response Size**
  - The maximum size of a single `res.send()` call is 256 KiB. Not that some metadata is sent along with the call, so the max size of the payload sent will be slightly less than 256 KiB
- **Memory Limits**
  - Each instance of a running SaaS connector is limited to 512 MB
