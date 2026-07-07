---
id: v1-accessprofilebulkdeleterequest-v1
title: AccessprofilebulkdeleterequestV1
pagination_label: AccessprofilebulkdeleterequestV1
sidebar_label: AccessprofilebulkdeleterequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessprofilebulkdeleterequestV1', 'v1AccessprofilebulkdeleterequestV1']
slug: /tools/sdk/typescript/access_profiles/models/accessprofilebulkdeleterequest-v1
tags: ['SDK', 'Software Development Kit', 'AccessprofilebulkdeleterequestV1', 'v1AccessprofilebulkdeleterequestV1']
---

# AccessprofilebulkdeleterequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessProfileIds** | **(optional)** `Array<string>` | List of IDs of Access Profiles to be deleted. | [default to undefined]
**bestEffortOnly** | **(optional)** `boolean` | If **true**, silently skip over any of the specified Access Profiles if they cannot be deleted because they are in use. If **false**, no deletions will be attempted if any of the Access Profiles are in use. | [default to undefined]

