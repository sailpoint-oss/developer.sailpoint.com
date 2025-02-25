---
id: beta-configuration-item-request
title: ConfigurationItemRequest
pagination_label: ConfigurationItemRequest
sidebar_label: ConfigurationItemRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConfigurationItemRequest', 'BetaConfigurationItemRequest'] 
slug: /tools/sdk/python/beta/models/configuration-item-request
tags: ['SDK', 'Software Development Kit', 'ConfigurationItemRequest', 'BetaConfigurationItemRequest']
---

# ConfigurationItemRequest

The request body for creation or update of a Reassignment Configuration for a single identity and work type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reassigned_from_id** | **str** | The identity id to reassign an item from | [optional] 
**reassigned_to_id** | **str** | The identity id to reassign an item to | [optional] 
**config_type** | [**ConfigTypeEnum**](config-type-enum) |  | [optional] 
**start_date** | **datetime** | The date from which to start reassigning work items | [optional] 
**end_date** | **datetime** | The date from which to stop reassigning work items.  If this is an null string it indicates a permanent reassignment. | [optional] 
}

## Example

```python
from sailpoint.beta.models.configuration_item_request import ConfigurationItemRequest

configuration_item_request = ConfigurationItemRequest(
reassigned_from_id='2c91808781a71ddb0181b9090b5c504e',
reassigned_to_id='2c91808781a71ddb0181b9090b53504a',
config_type='ACCESS_REQUESTS',
start_date='2022-07-21T11:13:12.345Z',
end_date='2022-07-30T17:00Z'
)

```
[[Back to top]](#) 

