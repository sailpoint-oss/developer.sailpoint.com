---
id: v1-permissioncollectorsettings-v1
title: PermissioncollectorsettingsV1
pagination_label: PermissioncollectorsettingsV1
sidebar_label: PermissioncollectorsettingsV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PermissioncollectorsettingsV1', 'v1PermissioncollectorsettingsV1']
slug: /tools/sdk/typescript/data_access_security/models/permissioncollectorsettings-v1
tags: ['SDK', 'Software Development Kit', 'PermissioncollectorsettingsV1', 'v1PermissioncollectorsettingsV1']
---

# PermissioncollectorsettingsV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isEnabled** | **(optional)** `boolean` | Indicates whether the feature or configuration is enabled. | [default to false]
**clusterId** | **(optional)** `string` | The identifier of the cluster associated with this configuration, if applicable. | [default to undefined]
**analyzeUniquePermissions** | **(optional)** `boolean` | Indicates whether unique permissions should be analyzed for resources. | [default to false]
**calculateEffectivePermissions** | **(optional)** `boolean` | Indicates whether effective permissions should be calculated. | [default to false]
**calculateRiskiestPermissions** | **(optional)** `boolean` | Indicates whether riskiest permissions should be calculated. | [default to false]
**effectivePermissionsSource** | **(optional)** `string` | Source for effective permissions calculation. | [default to undefined]

