---
id: v2024-subscription-post-request
title: SubscriptionPostRequest
pagination_label: SubscriptionPostRequest
sidebar_label: SubscriptionPostRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SubscriptionPostRequest', 'V2024SubscriptionPostRequest'] 
slug: /tools/sdk/go/v2024/models/subscription-post-request
tags: ['SDK', 'Software Development Kit', 'SubscriptionPostRequest', 'V2024SubscriptionPostRequest']
---

# SubscriptionPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Subscription name. | 
**Description** | Pointer to **string** | Subscription description. | [optional] 
**TriggerId** | **string** | ID of trigger subscribed to. | 
**Type** | [**SubscriptionType**](subscription-type) |  | 
**ResponseDeadline** | Pointer to **string** | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [optional] [default to "PT1H"]
**HttpConfig** | Pointer to [**HttpConfig**](http-config) |  | [optional] 
**EventBridgeConfig** | Pointer to [**EventBridgeConfig**](event-bridge-config) |  | [optional] 
**Enabled** | Pointer to **bool** | Whether subscription should receive real-time trigger invocations or not.  Test trigger invocations are always enabled regardless of this option. | [optional] [default to true]
**Filter** | Pointer to **string** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [optional] 

## Methods

### NewSubscriptionPostRequest

`func NewSubscriptionPostRequest(name string, triggerId string, type_ SubscriptionType, ) *SubscriptionPostRequest`

NewSubscriptionPostRequest instantiates a new SubscriptionPostRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubscriptionPostRequestWithDefaults

`func NewSubscriptionPostRequestWithDefaults() *SubscriptionPostRequest`

NewSubscriptionPostRequestWithDefaults instantiates a new SubscriptionPostRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SubscriptionPostRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SubscriptionPostRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SubscriptionPostRequest) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *SubscriptionPostRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SubscriptionPostRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SubscriptionPostRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SubscriptionPostRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetTriggerId

`func (o *SubscriptionPostRequest) GetTriggerId() string`

GetTriggerId returns the TriggerId field if non-nil, zero value otherwise.

### GetTriggerIdOk

`func (o *SubscriptionPostRequest) GetTriggerIdOk() (*string, bool)`

GetTriggerIdOk returns a tuple with the TriggerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTriggerId

`func (o *SubscriptionPostRequest) SetTriggerId(v string)`

SetTriggerId sets TriggerId field to given value.


### GetType

`func (o *SubscriptionPostRequest) GetType() SubscriptionType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SubscriptionPostRequest) GetTypeOk() (*SubscriptionType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SubscriptionPostRequest) SetType(v SubscriptionType)`

SetType sets Type field to given value.


### GetResponseDeadline

`func (o *SubscriptionPostRequest) GetResponseDeadline() string`

GetResponseDeadline returns the ResponseDeadline field if non-nil, zero value otherwise.

### GetResponseDeadlineOk

`func (o *SubscriptionPostRequest) GetResponseDeadlineOk() (*string, bool)`

GetResponseDeadlineOk returns a tuple with the ResponseDeadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseDeadline

`func (o *SubscriptionPostRequest) SetResponseDeadline(v string)`

SetResponseDeadline sets ResponseDeadline field to given value.

### HasResponseDeadline

`func (o *SubscriptionPostRequest) HasResponseDeadline() bool`

HasResponseDeadline returns a boolean if a field has been set.

### GetHttpConfig

`func (o *SubscriptionPostRequest) GetHttpConfig() HttpConfig`

GetHttpConfig returns the HttpConfig field if non-nil, zero value otherwise.

### GetHttpConfigOk

`func (o *SubscriptionPostRequest) GetHttpConfigOk() (*HttpConfig, bool)`

GetHttpConfigOk returns a tuple with the HttpConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpConfig

`func (o *SubscriptionPostRequest) SetHttpConfig(v HttpConfig)`

SetHttpConfig sets HttpConfig field to given value.

### HasHttpConfig

`func (o *SubscriptionPostRequest) HasHttpConfig() bool`

HasHttpConfig returns a boolean if a field has been set.

### GetEventBridgeConfig

`func (o *SubscriptionPostRequest) GetEventBridgeConfig() EventBridgeConfig`

GetEventBridgeConfig returns the EventBridgeConfig field if non-nil, zero value otherwise.

### GetEventBridgeConfigOk

`func (o *SubscriptionPostRequest) GetEventBridgeConfigOk() (*EventBridgeConfig, bool)`

GetEventBridgeConfigOk returns a tuple with the EventBridgeConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventBridgeConfig

`func (o *SubscriptionPostRequest) SetEventBridgeConfig(v EventBridgeConfig)`

SetEventBridgeConfig sets EventBridgeConfig field to given value.

### HasEventBridgeConfig

`func (o *SubscriptionPostRequest) HasEventBridgeConfig() bool`

HasEventBridgeConfig returns a boolean if a field has been set.

### GetEnabled

`func (o *SubscriptionPostRequest) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *SubscriptionPostRequest) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *SubscriptionPostRequest) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *SubscriptionPostRequest) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetFilter

`func (o *SubscriptionPostRequest) GetFilter() string`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *SubscriptionPostRequest) GetFilterOk() (*string, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *SubscriptionPostRequest) SetFilter(v string)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *SubscriptionPostRequest) HasFilter() bool`

HasFilter returns a boolean if a field has been set.


