---
id: saas-connectivity
title: SaaS Connectivity
pagination_label: SaaS Connectivity
sidebar_label: SaaS Connectivity
sidebar_position: 4
sidebar_class_name: saasConnectivity
keywords: ['connectivity', 'connectors']
description: SaaS Connectivity is a cloud based connector runtime that makes developing and deploying web service connectors easy.
slug: /docs/saas-connectivity
tags: ['Connectivity']
---

SaaS Connectivity is a cloud based connector runtime that makes developing and deploying web service connectors easier than Connector 1.0 does. However, because the cloud hosts SaaS Connectivity, not a Virtual Appliance (VA), SaaS Connectivity is limited in the types of applications it can connect to. For example, you cannot use SaaS Connectivity to connect to on-prem services that can only communicate within an intranet (no public internet access). This excludes JDBC and Mainframe applications, to name a few.

## What Are Connectors

Connectors are the bridges between the SailPoint Identity Now (IDN) SaaS platform and the source systems that IDN needs to communicate with and aggregate data from. An example of a source system IDN may need to communicate with would be an Oracle HR system or GitHub. In these cases, IDN synchronizes data between systems to ensure account entitlements and state are correct through the organization.

## Why We Are Introducing SaaS Connectivity

The primary driver for indroducing the SaaS Connectivity framework is to allow a way to connect to other cloud based sources in a truly SaaS architecture, without the need to rely on a VA. There are also other benefits that come with the SaaS Connectivity framework:
 - Ability to develop, debug and test custom connectors locally without any dependencies on IdentityNow
 - Features to customize the user interface when configuring the connector that are specific to the source
 - Support for more modern languages and frameworks

## Architecture of SaaS Connectivity

VA connectors always communicate with external sources through the Virtual Appliance (VA) as seen in the diagram below:

![Old Connectivity](./img/old_connectivity_diagram.png)

The new Cloud connectors work differently - they run on the IDN platform instead:

![New Connectivity](./img/new_connectivity_diagram.png)

With both SaaS connectivity and traditional VA connectivity in place, you can have the best of both worlds. Below is a new diagram showing both of them working together to leverage both on-prem and cloud based sources.

![SaaS Connectivity and On Prem](./img/new_connectivity_diagram_both.png)

:::caution Important

Make sure that you implement a form of version control or regular backup process for your connectors.
You cannot recover the source code from IDN because it gets sent to IDN as a compiled and minified JavaScript (JS) bundle that cannot be easily expanded into its original source code structure. 

:::
