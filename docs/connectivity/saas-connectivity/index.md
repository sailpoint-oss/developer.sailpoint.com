---
id: saas-connectivity
title: SaaS Connectivity
pagination_label: SaaS Connectivity
sidebar_label: SaaS Connectivity
sidebar_position: 4
sidebar_class_name: saasConnectivity
keywords: ['connectivity', 'connectors']
description: Cloud-based connectivity without VAs.
slug: /connectivity/saas-connectivity
tags: ['Connectivity']
---

SaaS Connectivity is a cloud based connector runtime that makes developing and deploying web service connectors easier than Connector 1.0 does. However, because the cloud hosts SaaS Connectivity, not a Virtual Appliance (VA), SaaS Connectivity is limited in the types of applications it can connect to. For example, you cannot use SaaS Connectivity to connect to on-prem services that can only communicate within an intranet (no public internet access). This excludes JDBC and Mainframe applications, to name a few.

<div className="text--center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/1WPO7t0j1oc?si=RZjNJYUrDtKLmbvB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>

## What Are Connectors

Connectors are the bridges between the SailPoint Identity Security Cloud (ISC) SaaS platform and the source systems that ISC needs to communicate with and aggregate data from. An example of a source system ISC may need to communicate with would be an Oracle HR system or GitHub. In these cases, ISC synchronizes data between systems to ensure account entitlements and state are correct through the organization.

## Why We Are Introducing SaaS Connectivity

The primary driver for indroducing the SaaS Connectivity framework is to allow a way to connect to other cloud based sources in a truly SaaS architecture, without the need to rely on a VA. There are also other benefits that come with the SaaS Connectivity framework:

- Ability to develop, debug and test custom connectors locally without any dependencies on Identity Security Cloud
- Features to customize the user interface when configuring the connector that are specific to the source
- Support for more modern languages and frameworks

## Architecture of SaaS Connectivity

VA connectors always communicate with external sources through the Virtual Appliance (VA) as seen in the diagram below:

![Old Connectivity](./img/old_connectivity_diagram.png)

The new Cloud connectors work differently - they run on the ISC platform instead:

![New Connectivity](./img/new_connectivity_diagram.png)

With both SaaS connectivity and traditional VA connectivity in place, you can have the best of both worlds. Below is a new diagram showing both of them working together to leverage both on-prem and cloud based sources.

![SaaS Connectivity and On Prem](./img/new_connectivity_diagram_both.png)

## Connectivity Encryption

Any direct connectors that specify a virtual appliance (VA) use [Zero Knowledge Encryption](https://community.sailpoint.com/t5/Lighthouse/Protecting-Sensitive-Data-with-Zero-Knowledge-Encryption/ta-p/79657?attachment-id=452) schemes with an RSA 2048-bit asymmetric key pair: there is a private key on the VA for decryption and a public key in the cloud (as part of the VA cluster) for encryption. You can read more about SailPoint's *Zero Knowledge Encryption* [here](../saas-connectivity/zero-knowledge-encryption.md).

SaaS connectors cannot operate the same way because they do not communicate through VA clusters. Despite this, SaaS connectors can still leverage the asymmetric key pair scheme — the key pair simply resides in the cloud instead of on the VA. The key pair is only accessible to the Connectivity service and is managed to SailPoint standards for credential storage. Whenever you are storing secret data, use the `secret` or `secrettextarea` field types.
