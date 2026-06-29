---
id: applicationdiscoveryresponse-target
title: ApplicationdiscoveryresponseTarget
pagination_label: ApplicationdiscoveryresponseTarget
sidebar_label: ApplicationdiscoveryresponseTarget
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApplicationdiscoveryresponseTarget', 'ApplicationdiscoveryresponseTarget'] 
slug: /tools/sdk/python/application-discovery/models/applicationdiscoveryresponse-target
tags: ['SDK', 'Software Development Kit', 'ApplicationdiscoveryresponseTarget', 'ApplicationdiscoveryresponseTarget']
---

# ApplicationdiscoveryresponseTarget

The target(source) of app discovery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Dtotype**](dtotype) |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.application_discovery.models.applicationdiscoveryresponse_target import ApplicationdiscoveryresponseTarget

applicationdiscoveryresponse_target = ApplicationdiscoveryresponseTarget(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

