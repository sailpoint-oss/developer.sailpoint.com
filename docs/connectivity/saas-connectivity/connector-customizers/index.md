---
id: connectivity-customizers
title: Connectivity Customizers
pagination_label: Connectivity Customizers
sidebar_label: Customizers
sidebar_position: 7.1
sidebar_class_name: saasConnectivity
keywords: ['connectivity', 'connectors', customizers]
description: Connectivity customizers can customize out of the box SaaS connectors.
slug: /connectivity/saas-connectivity/customizers
tags: ['Connectivity']
---

# Overview

SaaS Connectivity Customizers are cloud-based connector customizers that make customizing out of the box SaaS connectors possible. The customizers allow you to customize the out of the box connectors in a similar way to how you can use rules to customize VA (virtual appliance) based connectors. By using a customizer, you can change a connector's input before the connector ingests the data, or you can change the connector's output before to the output is sent to Identity Security Cloud.

<div className="text--center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/bYQakKlKilY?si=o9vtqKLvcyGkHVjS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>

## How do they work?

SaaS Connectivity Customizers work by sitting in between Identity Security Cloud and the connector. They intercept calls from Identity Security Cloud to the connector and calls from the connector to Identity Security Cloud. When the customizer intercepts a call, it can call custom code to mutate the data in any way necessary to change the connector behavior.

This chart shows an example of this interception process - the `stdAccountRead` command is implemented with the customizer in place:

<div align="center">

```mermaid
sequenceDiagram
    autonumber
    participant ISC as Identity Security Cloud
    participant CUS as Customizer
    participant CON as SaaS Connector

    ISC->>CUS: StdAccountRead Request
    CUS->>CON: Mutated StdAccountRead Request
    CON->>CUS: StdAccountRead Response
    CUS->>ISC: Mutated StdAccountRead Response

```

</div>

## Limitiations

Customizers can only be used on SaaS Connectors that are built natively on the SaaS Connectivity framework. There are multiple connectors built by SailPoint that run in the SaaS Connectivity infrastructure, but will not support a connector customizer. Below a list is provided of connectors that will support adding customizers to them. Customizers were mainly built for the Webservices and SCIM 2.0 Connectors so a user can add functionality to the generic connector functionality. In the cases where a customizer needs to be added to specific connectors, customers are encouraged to reach out to the ideas portal to request additional functionality. 

### List of SailPoint Connectors using Native SaaS Connectivity

 - [BambooHR](https://documentation.sailpoint.com/connectors/saas/bamboohr/help/)
 - [Ceridian Dayforce HCM](https://documentation.sailpoint.com/connectors/saas/ceridiandayforcehcm/help/)
 - [Cisco Umbrella](https://documentation.sailpoint.com/connectors/saas/cisco_umbrella/help/)
 - [Cloudflare](https://documentation.sailpoint.com/connectors/saas/cloudflare/help/)
 - [CrowdStrike](https://documentation.sailpoint.com/connectors/saas/crowdstrike/help/)
 - [Digicert](https://documentation.sailpoint.com/connectors/saas/digicert/help/)
 - [DocuSign eSignature](https://documentation.sailpoint.com/connectors/saas/docusign/help/)
 - [Elevate Security](https://documentation.sailpoint.com/connectors/saas/elevate_security/help/)
 - [Freshservice](https://documentation.sailpoint.com/connectors/saas/freshservice/help/)
 - [GitHub](https://documentation.sailpoint.com/connectors/saas/github/help/)
 - [LastPass](https://documentation.sailpoint.com/connectors/saas/lastpass/help/)
 - [Lucidchart](https://documentation.sailpoint.com/connectors/saas/lucidchart/help/)
 - [Microsoft Entra](https://documentation.sailpoint.com/connectors/saas/msentraid/help/)
 - [PagerDuty](https://documentation.sailpoint.com/connectors/saas/pagerduty/help/)
 - [PingOne](https://documentation.sailpoint.com/connectors/saas/pingone/help/)
 - [Proofpoint](https://documentation.sailpoint.com/connectors/saas/proofpoint/help/)
 - [Salesforce SaaS](https://documentation.sailpoint.com/connectors/saas/salesforce/help/)
 - [SCIM 2.0 SaaS](https://documentation.sailpoint.com/connectors/saas/scim_2_0/help/)
 - [Smartsheet](https://documentation.sailpoint.com/connectors/saas/smartsheet/help/)
 - [Snowflake SaaS](https://documentation.sailpoint.com/connectors/saas/snowflake/help/)
 - [StrongDM](https://documentation.sailpoint.com/connectors/saas/strongdm/help/)
 - [Sumo Logic](https://documentation.sailpoint.com/connectors/saas/sumologic/help/)
 - [Tableau Online](https://documentation.sailpoint.com/connectors/saas/tableau/help/)
 - [Webservices SaaS](https://documentation.sailpoint.com/connectors/saas/web_services/help/)
 - [Workday SaaS](https://documentation.sailpoint.com/connectors/saas/workday/help/)