---
id: beta-subscription-put-request
title: SubscriptionPutRequest
pagination_label: SubscriptionPutRequest
sidebar_label: SubscriptionPutRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SubscriptionPutRequest', 'BetaSubscriptionPutRequest'] 
slug: /tools/sdk/go/beta/models/subscription-put-request
tags: ['SDK', 'Software Development Kit', 'SubscriptionPutRequest', 'BetaSubscriptionPutRequest']
---

# SubscriptionPutRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Subscription name. | [optional] 
**Description** | Pointer to **string** | Subscription description. | [optional] 
**Type** | Pointer to [**SubscriptionType**](subscription-type) |  | [optional] 
**ResponseDeadline** | Pointer to **string** | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [optional] [default to "PT1H"]
**HttpConfig** | Pointer to [**HttpConfig**](http-config) |  | [optional] 
**EventBridgeConfig** | Pointer to [**EventBridgeConfig**](event-bridge-config) |  | [optional] 
**Enabled** | Pointer to **bool** | Whether subscription should receive real-time trigger invocations or not.  Test trigger invocations are always enabled regardless of this option. | [optional] [default to true]
**Filter** | Pointer to **string** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [optional] 

## Methods

### NewSubscriptionPutRequest

`func NewSubscriptionPutRequest() *SubscriptionPutRequest`

NewSubscriptionPutRequest instantiates a new SubscriptionPutRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubscriptionPutRequestWithDefaults

`func NewSubscriptionPutRequestWithDefaults() *SubscriptionPutRequest`

NewSubscriptionPutRequestWithDefaults instantiates a new SubscriptionPutRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SubscriptionPutRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SubscriptionPutRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SubscriptionPutRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SubscriptionPutRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *SubscriptionPutRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SubscriptionPutRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SubscriptionPutRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SubscriptionPutRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *SubscriptionPutRequest) GetType() SubscriptionType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SubscriptionPutRequest) GetTypeOk() (*SubscriptionType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SubscriptionPutRequest) SetType(v SubscriptionType)`

SetType sets Type field to given value.

### HasType

`func (o *SubscriptionPutRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetResponseDeadline

`func (o *SubscriptionPutRequest) GetResponseDeadline() string`

GetResponseDeadline returns the ResponseDeadline field if non-nil, zero value otherwise.

### GetResponseDeadlineOk

`func (o *SubscriptionPutRequest) GetResponseDeadlineOk() (*string, bool)`

GetResponseDeadlineOk returns a tuple with the ResponseDeadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseDeadline

`func (o *SubscriptionPutRequest) SetResponseDeadline(v string)`

SetResponseDeadline sets ResponseDeadline field to given value.

### HasResponseDeadline

`func (o *SubscriptionPutRequest) HasResponseDeadline() bool`

HasResponseDeadline returns a boolean if a field has been set.

### GetHttpConfig

`func (o *SubscriptionPutRequest) GetHttpConfig() HttpConfig`

GetHttpConfig returns the HttpConfig field if non-nil, zero value otherwise.

### GetHttpConfigOk

`func (o *SubscriptionPutRequest) GetHttpConfigOk() (*HttpConfig, bool)`

GetHttpConfigOk returns a tuple with the HttpConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpConfig

`func (o *SubscriptionPutRequest) SetHttpConfig(v HttpConfig)`

SetHttpConfig sets HttpConfig field to given value.

### HasHttpConfig

`func (o *SubscriptionPutRequest) HasHttpConfig() bool`

HasHttpConfig returns a boolean if a field has been set.

### GetEventBridgeConfig

`func (o *SubscriptionPutRequest) GetEventBridgeConfig() EventBridgeConfig`

GetEventBridgeConfig returns the EventBridgeConfig field if non-nil, zero value otherwise.

### GetEventBridgeConfigOk

`func (o *SubscriptionPutRequest) GetEventBridgeConfigOk() (*EventBridgeConfig, bool)`

GetEventBridgeConfigOk returns a tuple with the EventBridgeConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventBridgeConfig

`func (o *SubscriptionPutRequest) SetEventBridgeConfig(v EventBridgeConfig)`

SetEventBridgeConfig sets EventBridgeConfig field to given value.

### HasEventBridgeConfig

`func (o *SubscriptionPutRequest) HasEventBridgeConfig() bool`

HasEventBridgeConfig returns a boolean if a field has been set.

### GetEnabled

`func (o *SubscriptionPutRequest) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *SubscriptionPutRequest) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *SubscriptionPutRequest) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *SubscriptionPutRequest) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetFilter

`func (o *SubscriptionPutRequest) GetFilter() string`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *SubscriptionPutRequest) GetFilterOk() (*string, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *SubscriptionPutRequest) SetFilter(v string)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *SubscriptionPutRequest) HasFilter() bool`

HasFilter returns a boolean if a field has been set.


