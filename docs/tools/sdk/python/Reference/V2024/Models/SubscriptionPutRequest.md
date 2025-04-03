---
id: v2024-subscription-put-request
title: SubscriptionPutRequest
pagination_label: SubscriptionPutRequest
sidebar_label: SubscriptionPutRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SubscriptionPutRequest', 'V2024SubscriptionPutRequest'] 
slug: /tools/sdk/python/v2024/models/subscription-put-request
tags: ['SDK', 'Software Development Kit', 'SubscriptionPutRequest', 'V2024SubscriptionPutRequest']
---

# SubscriptionPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Subscription name. | [optional] 
**description** | **str** | Subscription description. | [optional] 
**type** | [**SubscriptionType**](subscription-type) |  | [optional] 
**response_deadline** | **str** | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [optional] [default to 'PT1H']
**http_config** | [**HttpConfig**](http-config) |  | [optional] 
**event_bridge_config** | [**EventBridgeConfig**](event-bridge-config) |  | [optional] 
**enabled** | **bool** | Whether subscription should receive real-time trigger invocations or not.  Test trigger invocations are always enabled regardless of this option. | [optional] [default to True]
**filter** | **str** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.subscription_put_request import SubscriptionPutRequest

subscription_put_request = SubscriptionPutRequest(
name='Access request subscription',
description='Access requested to site xyz',
type='HTTP',
response_deadline='PT1H',
http_config=sailpoint.v2024.models.http_config.HttpConfig(
                    url = 'https://www.example.com', 
                    http_dispatch_mode = 'SYNC', 
                    http_authentication_type = 'NO_AUTH', 
                    basic_auth_config = sailpoint.v2024.models.basic_auth_config.BasicAuthConfig(
                        user_name = 'user@example.com', 
                        password = '', ), 
                    bearer_token_auth_config = sailpoint.v2024.models.bearer_token_auth_config.BearerTokenAuthConfig(
                        bearer_token = '', ), ),
event_bridge_config=sailpoint.v2024.models.event_bridge_config.EventBridgeConfig(
                    aws_account = '123456789012', 
                    aws_region = 'us-west-1', ),
enabled=True,
filter='$[?($.identityId == "201327fda1c44704ac01181e963d463c")]'
)

```
[[Back to top]](#) 

