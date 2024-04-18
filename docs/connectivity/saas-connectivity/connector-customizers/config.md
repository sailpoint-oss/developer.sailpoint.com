---
id: connectivity-customizers-config
title: Customizer Config Object
pagination_label: Config Object
sidebar_label: Config Object
sidebar_position: 6.5
sidebar_class_name: saasConnectivity
keywords: ['connectivity', 'connectors', customizers]
description: The config object in a customizer
slug: /connectivity/saas-connectivity/customizers/config
tags: ['Connectivity']
---

# Customizer Config Object

The connector config object holds all the config values that are set in the SaaS connector. These can be used to fetch custom settings added by the user, as well as inspect values from the connector instance itself.

The config object is fetched during initialization of the connector

```typescript
const config: Config = await readConfig();
```

### Example Config Object

Below is an example object model that can be used to type your config. Any values set by the connector itself are added at the top level json.

```typescript
export interface Config {
  beforeProvisioningRule: any;
  cloudCacheUpdate: number;
  cloudDisplayName: string;
  cloudExternalId: string;
  connectionType: string;
  connectorName: string;
  deleteThresholdPercentage: number;
  deltaAggregation: DeltaAggregation;
  deltaAggregationEnabled: boolean;
  formPath: any;
  hasFullAggregationCompleted: boolean;
  healthCheckTimeout: number;
  healthy: boolean;
  idnProxyType: string;
  managementWorkgroup: any;
  managerCorrelationFilter: any;
  since: string;
  'slpt-source-diagnostics': string;
  sourceConnected: boolean;
  sourceDescription: string;
  spConnEnableStatefulCommands: boolean;
  spConnectorInstanceId: string;
  spConnectorSpecId: string;
  status: string;
  supportsDeltaAgg: boolean;
  templateApplication: string;
}

export interface DeltaAggregation {
  'std:account:list': any;
  'std:entitlement:list': any;
}
```
