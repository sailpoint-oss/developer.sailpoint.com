---
id: v1-managedcluster-v1
title: ManagedclusterV1
pagination_label: ManagedclusterV1
sidebar_label: ManagedclusterV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ManagedclusterV1', 'v1ManagedclusterV1']
slug: /tools/sdk/typescript/managed_clusters/models/managedcluster-v1
tags: ['SDK', 'Software Development Kit', 'ManagedclusterV1', 'v1ManagedclusterV1']
---

# ManagedclusterV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | ManagedCluster ID | [default to undefined]
**name** | **(optional)** `string` | ManagedCluster name | [default to undefined]
**pod** | **(optional)** `string` | ManagedCluster pod | [default to undefined]
**org** | **(optional)** `string` | ManagedCluster org | [default to undefined]
**type** | **(optional)** `ManagedclustertypesV1` |  | [default to undefined]
**configuration** | **(optional)**  | ManagedProcess configuration map | [default to undefined]
**keyPair** | **(optional)** `ManagedclusterkeypairV1` |  | [default to undefined]
**attributes** | **(optional)** `ManagedclusterattributesV1` |  | [default to undefined]
**description** | **(optional)** `string` | ManagedCluster description | [default to 'q']
**redis** | **(optional)** `ManagedclusterredisV1` |  | [default to undefined]
**clientType** | `ManagedclienttypeV1` |  | [default to undefined]
**ccgVersion** | `string` | CCG version used by the ManagedCluster | [default to undefined]
**pinnedConfig** | **(optional)** `boolean` | boolean flag indicating whether or not the cluster configuration is pinned | [default to false]
**logConfiguration** | **(optional)** `ClientlogconfigurationV1` |  | [default to undefined]
**operational** | **(optional)** `boolean` | Whether or not the cluster is operational or not | [default to false]
**status** | **(optional)** `string` | Cluster status | [default to undefined]
**publicKeyCertificate** | **(optional)** `string` | Public key certificate | [default to undefined]
**publicKeyThumbprint** | **(optional)** `string` | Public key thumbprint | [default to undefined]
**publicKey** | **(optional)** `string` | Public key | [default to undefined]
**encryptionConfiguration** | **(optional)** `ManagedclusterencryptionconfigV1` |  | [default to undefined]
**alertKey** | **(optional)** `string` | Key describing any immediate cluster alerts | [default to undefined]
**clientIds** | **(optional)** `Array<string>` | List of clients in a cluster | [default to undefined]
**serviceCount** | **(optional)** `number` | Number of services bound to a cluster | [default to 0]
**ccId** | **(optional)** `string` | CC ID only used in calling CC, will be removed without notice when Migration to CEGS is finished | [default to '0']
**createdAt** | **(optional)** `string` | The date/time this cluster was created | [default to undefined]
**updatedAt** | **(optional)** `string` | The date/time this cluster was last updated | [default to undefined]
**lastReleaseNotifiedAt** | **(optional)** `string` | The date/time this cluster was notified for the last release | [default to undefined]
**updatePreferences** | **(optional)** `ManagedclusterUpdatePreferencesV1` |  | [default to undefined]
**currentInstalledReleaseVersion** | **(optional)** `string` | The current installed release on the Managed cluster | [default to undefined]
**updatePackage** | **(optional)** `string` | New available updates for the Managed cluster | [default to undefined]
**isOutOfDateNotifiedAt** | **(optional)** `string` | The time at which out of date notification was sent for the Managed cluster | [default to undefined]
**consolidatedHealthIndicatorsStatus** | **(optional)** `string` | The consolidated Health Status for the Managed cluster | [default to undefined]

