---
id: v1-rolemetadatabulkupdatebyfilterrequest-v1
title: RolemetadatabulkupdatebyfilterrequestV1
pagination_label: RolemetadatabulkupdatebyfilterrequestV1
sidebar_label: RolemetadatabulkupdatebyfilterrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RolemetadatabulkupdatebyfilterrequestV1', 'v1RolemetadatabulkupdatebyfilterrequestV1']
slug: /tools/sdk/typescript/roles/models/rolemetadatabulkupdatebyfilterrequest-v1
tags: ['SDK', 'Software Development Kit', 'RolemetadatabulkupdatebyfilterrequestV1', 'v1RolemetadatabulkupdatebyfilterrequestV1']
---

# RolemetadatabulkupdatebyfilterrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | `string` | Filtering is supported for the following fields and operators:  **id** : *eq, in*  **name** : *eq, sw*  **created** : *gt, lt, ge, le*  **modified** : *gt, lt, ge, le*  **owner.id** : *eq, in*  **requestable** : *eq* | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. | [default to undefined]
**values** | `Array<RolemetadatabulkupdatebyfilterrequestValuesInnerV1>` | The metadata to be updated, including attribute key and value. | [default to undefined]

