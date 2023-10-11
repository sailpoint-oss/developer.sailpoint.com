---
id: connectivity-customizers
title: Connectivity Customizers
pagination_label: Connectivity Customizers
sidebar_label: Customizers
sidebar_position: 6.5
sidebar_class_name: saasConnectivity
keywords: ['connectivity', 'connectors', customizers]
description: Connectivity Customizers are cloud based connector customizers that make customizing out of the box SaaS connectors possible.
slug: /docs/saas-connectivity/customizers
tags: ['Connectivity']
---

# Overview

SaaS Connectivity Customizers allow you to customize the out of the box connectors similar to how rules work in VA based connectors. By using a connectivity customizer, you can change the input to a connector prior to the data being injested into the connector, or you can change the output from a connector prior to it being sent to IdentityNow.

## How do they work?

SaaS Connectivity Customizers work by sitting in between IdentityNow and the connector. They intercept calls to the connector from IdentityNow and intercept calls to IdentityNow from the connector. When the call is intercepted, custom code can be called to mutate the data in any way that is necessary to change the connector behavior. The below chart shows an example of this with the ```stdAccountRead``` command implemented with the customizer in place.

<div align="center">

```mermaid
sequenceDiagram
    autonumber
    participant IDN as IdentityNow
    participant CUS as Customizer
    participant CON as SaaS Connector

    IDN->>CUS: StdAccountRead Request
    CUS->>CON: Mutated StdAccountRead Request
    CON->>CUS: StdAccountRead Response
    CUS->>IDN: Mutated StdAccountRead Response

```

</div>