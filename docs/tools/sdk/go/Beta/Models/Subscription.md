---
id: subscription
title: Subscription
pagination_label: Subscription
sidebar_label: Subscription
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Subscription'] 
slug: /tools/sdk/go/beta/models/subscription
tags: ['SDK', 'Software Development Kit', 'Subscription']
---

# Subscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **string** | Subscription ID. | 
**Name** |  **string** | Subscription name. | 
**Description** |  Pointer to **string** | Subscription description. | [optional] 
**TriggerId** |  **string** | ID of trigger subscribed to. | 
**TriggerName** |  **string** | Trigger name of trigger subscribed to. | 
**Type** |  [**SubscriptionType**](subscription-type) |  | 
**ResponseDeadline** |  **string** | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [default to "PT1H"]
**HttpConfig** |  Pointer to [**HttpConfig**](http-config) |  | [optional] 
**EventBridgeConfig** |  Pointer to [**EventBridgeConfig**](event-bridge-config) |  | [optional] 
**Enabled** |  **bool** | Whether subscription should receive real-time trigger invocations or not. Test trigger invocations are always enabled regardless of this option. | [default to true]
**Filter** |  Pointer to **string** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [optional] 

## Methods

### NewSubscription

`func NewSubscription(id string, name string, triggerId string, triggerName string, type_ SubscriptionType, responseDeadline string, enabled bool, ) *Subscription`

NewSubscription instantiates a new Subscription object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubscriptionWithDefaults

`func NewSubscriptionWithDefaults() *Subscription`

NewSubscriptionWithDefaults instantiates a new Subscription object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Subscription) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Subscription) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Subscription) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Subscription) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Subscription) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Subscription) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Subscription) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Subscription) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Subscription) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Subscription) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetTriggerId

`func (o *Subscription) GetTriggerId() string`

GetTriggerId returns the TriggerId field if non-nil, zero value otherwise.

### GetTriggerIdOk

`func (o *Subscription) GetTriggerIdOk() (*string, bool)`

GetTriggerIdOk returns a tuple with the TriggerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTriggerId

`func (o *Subscription) SetTriggerId(v string)`

SetTriggerId sets TriggerId field to given value.


### GetTriggerName

`func (o *Subscription) GetTriggerName() string`

GetTriggerName returns the TriggerName field if non-nil, zero value otherwise.

### GetTriggerNameOk

`func (o *Subscription) GetTriggerNameOk() (*string, bool)`

GetTriggerNameOk returns a tuple with the TriggerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTriggerName

`func (o *Subscription) SetTriggerName(v string)`

SetTriggerName sets TriggerName field to given value.


### GetType

`func (o *Subscription) GetType() SubscriptionType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Subscription) GetTypeOk() (*SubscriptionType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Subscription) SetType(v SubscriptionType)`

SetType sets Type field to given value.


### GetResponseDeadline

`func (o *Subscription) GetResponseDeadline() string`

GetResponseDeadline returns the ResponseDeadline field if non-nil, zero value otherwise.

### GetResponseDeadlineOk

`func (o *Subscription) GetResponseDeadlineOk() (*string, bool)`

GetResponseDeadlineOk returns a tuple with the ResponseDeadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseDeadline

`func (o *Subscription) SetResponseDeadline(v string)`

SetResponseDeadline sets ResponseDeadline field to given value.


### GetHttpConfig

`func (o *Subscription) GetHttpConfig() HttpConfig`

GetHttpConfig returns the HttpConfig field if non-nil, zero value otherwise.

### GetHttpConfigOk

`func (o *Subscription) GetHttpConfigOk() (*HttpConfig, bool)`

GetHttpConfigOk returns a tuple with the HttpConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpConfig

`func (o *Subscription) SetHttpConfig(v HttpConfig)`

SetHttpConfig sets HttpConfig field to given value.

### HasHttpConfig

`func (o *Subscription) HasHttpConfig() bool`

HasHttpConfig returns a boolean if a field has been set.

### GetEventBridgeConfig

`func (o *Subscription) GetEventBridgeConfig() EventBridgeConfig`

GetEventBridgeConfig returns the EventBridgeConfig field if non-nil, zero value otherwise.

### GetEventBridgeConfigOk

`func (o *Subscription) GetEventBridgeConfigOk() (*EventBridgeConfig, bool)`

GetEventBridgeConfigOk returns a tuple with the EventBridgeConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventBridgeConfig

`func (o *Subscription) SetEventBridgeConfig(v EventBridgeConfig)`

SetEventBridgeConfig sets EventBridgeConfig field to given value.

### HasEventBridgeConfig

`func (o *Subscription) HasEventBridgeConfig() bool`

HasEventBridgeConfig returns a boolean if a field has been set.

### GetEnabled

`func (o *Subscription) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Subscription) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Subscription) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.


### GetFilter

`func (o *Subscription) GetFilter() string`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *Subscription) GetFilterOk() (*string, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *Subscription) SetFilter(v string)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *Subscription) HasFilter() bool`

HasFilter returns a boolean if a field has been set.


[[Back to top]](#) 


