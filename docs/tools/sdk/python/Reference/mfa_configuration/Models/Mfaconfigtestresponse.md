---
id: mfaconfigtestresponse
title: Mfaconfigtestresponse
pagination_label: Mfaconfigtestresponse
sidebar_label: Mfaconfigtestresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Mfaconfigtestresponse', 'Mfaconfigtestresponse'] 
slug: /tools/sdk/python/mfa-configuration/models/mfaconfigtestresponse
tags: ['SDK', 'Software Development Kit', 'Mfaconfigtestresponse', 'Mfaconfigtestresponse']
---

# Mfaconfigtestresponse

Response model for configuration test of a given MFA method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** |  **Enum** [  'SUCCESS',    'FAILED' ] | The configuration test result. | [optional] [readonly] 
**error** | **str** | The error message to indicate the failure of configuration test. | [optional] [readonly] 
}

## Example

```python
from sailpoint.mfa_configuration.models.mfaconfigtestresponse import Mfaconfigtestresponse

mfaconfigtestresponse = Mfaconfigtestresponse(
state='SUCCESS',
error='MFA Method is disabled.'
)

```
[[Back to top]](#) 

