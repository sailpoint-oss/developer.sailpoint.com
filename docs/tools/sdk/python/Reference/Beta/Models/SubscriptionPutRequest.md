---
id: beta-subscription-put-request
title: SubscriptionPutRequest
pagination_label: SubscriptionPutRequest
sidebar_label: SubscriptionPutRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SubscriptionPutRequest', 'BetaSubscriptionPutRequest'] 
slug: /tools/sdk/python/beta/models/subscription-put-request
tags: ['SDK', 'Software Development Kit', 'SubscriptionPutRequest', 'BetaSubscriptionPutRequest']
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
from sailpoint.beta.models.subscription_put_request import SubscriptionPutRequest

subscription_put_request = SubscriptionPutRequest(
name='Access request subscription',
description='Access requested to site xyz',
type='HTTP',
response_deadline='PT1H',
http_config=sailpoint.beta.models.http_config.Http Config(
                    url = 'https://www.example.com', 
                    http_dispatch_mode = 'SYNC', 
                    http_authentication_type = 'NO_AUTH', 
                    basic_auth_config = sailpoint.beta.models.basic_auth_config.Basic Auth Config(
                        user_name = 'user@example.com', 
                        password = '', ), 
                    bearer_token_auth_config = sailpoint.beta.models.bearer_token_auth_config.Bearer Token Auth Config(
                        bearer_token = '', ), ),
event_bridge_config=sailpoint.beta.models.event_bridge_config.Event Bridge Config(
                    aws_account = '123456789012', 
                    aws_region = 'us-west-1', ),
enabled=True,
filter='$[?($.identityId == "201327fda1c44704ac01181e963d463c")]'
)

```
[[Back to top]](#) 

