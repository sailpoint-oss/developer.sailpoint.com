---
id: v2025-patch-service-desk-integration-request
title: PatchServiceDeskIntegrationRequest
pagination_label: PatchServiceDeskIntegrationRequest
sidebar_label: PatchServiceDeskIntegrationRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PatchServiceDeskIntegrationRequest', 'V2025PatchServiceDeskIntegrationRequest'] 
slug: /tools/sdk/python/v2025/models/patch-service-desk-integration-request
tags: ['SDK', 'Software Development Kit', 'PatchServiceDeskIntegrationRequest', 'V2025PatchServiceDeskIntegrationRequest']
---

# PatchServiceDeskIntegrationRequest

A JSONPatch document as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902).  Only `replace` operations are accepted by this endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operations** | [**[]JsonPatchOperation**](json-patch-operation) | Operations to be applied | [optional] 
}

## Example

```python
from sailpoint.v2025.models.patch_service_desk_integration_request import PatchServiceDeskIntegrationRequest

patch_service_desk_integration_request = PatchServiceDeskIntegrationRequest(
operations=[
                    sailpoint.v2025.models.json_patch_operation.JsonPatchOperation(
                        op = 'replace', 
                        path = '/description', 
                        value = New description, )
                    ]
)

```
[[Back to top]](#) 

