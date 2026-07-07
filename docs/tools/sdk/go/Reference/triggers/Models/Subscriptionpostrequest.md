---
id: v1-subscriptionpostrequest
title: Subscriptionpostrequest
pagination_label: Subscriptionpostrequest
sidebar_label: Subscriptionpostrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Subscriptionpostrequest', 'V1Subscriptionpostrequest'] 
slug: /tools/sdk/go/triggers/models/subscriptionpostrequest
tags: ['SDK', 'Software Development Kit', 'Subscriptionpostrequest', 'V1Subscriptionpostrequest']
---

# Subscriptionpostrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Subscription name. | 
**Description** | Pointer to **string** | Subscription description. | [optional] 
**TriggerId** | **string** | ID of trigger subscribed to. | 
**Type** | [**Subscriptiontype**](subscriptiontype) |  | 
**ResponseDeadline** | Pointer to **string** | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [optional] [default to "PT1H"]
**HttpConfig** | Pointer to [**Httpconfig**](httpconfig) |  | [optional] 
**EventBridgeConfig** | Pointer to [**Eventbridgeconfig**](eventbridgeconfig) |  | [optional] 
**Enabled** | Pointer to **bool** | Whether subscription should receive real-time trigger invocations or not.  Test trigger invocations are always enabled regardless of this option. | [optional] [default to true]
**Filter** | Pointer to **string** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [optional] 

## Methods

### NewSubscriptionpostrequest

`func NewSubscriptionpostrequest(name string, triggerId string, type_ Subscriptiontype, ) *Subscriptionpostrequest`

NewSubscriptionpostrequest instantiates a new Subscriptionpostrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubscriptionpostrequestWithDefaults

`func NewSubscriptionpostrequestWithDefaults() *Subscriptionpostrequest`

NewSubscriptionpostrequestWithDefaults instantiates a new Subscriptionpostrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Subscriptionpostrequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Subscriptionpostrequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Subscriptionpostrequest) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Subscriptionpostrequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Subscriptionpostrequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Subscriptionpostrequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Subscriptionpostrequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetTriggerId

`func (o *Subscriptionpostrequest) GetTriggerId() string`

GetTriggerId returns the TriggerId field if non-nil, zero value otherwise.

### GetTriggerIdOk

`func (o *Subscriptionpostrequest) GetTriggerIdOk() (*string, bool)`

GetTriggerIdOk returns a tuple with the TriggerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTriggerId

`func (o *Subscriptionpostrequest) SetTriggerId(v string)`

SetTriggerId sets TriggerId field to given value.


### GetType

`func (o *Subscriptionpostrequest) GetType() Subscriptiontype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Subscriptionpostrequest) GetTypeOk() (*Subscriptiontype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Subscriptionpostrequest) SetType(v Subscriptiontype)`

SetType sets Type field to given value.


### GetResponseDeadline

`func (o *Subscriptionpostrequest) GetResponseDeadline() string`

GetResponseDeadline returns the ResponseDeadline field if non-nil, zero value otherwise.

### GetResponseDeadlineOk

`func (o *Subscriptionpostrequest) GetResponseDeadlineOk() (*string, bool)`

GetResponseDeadlineOk returns a tuple with the ResponseDeadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseDeadline

`func (o *Subscriptionpostrequest) SetResponseDeadline(v string)`

SetResponseDeadline sets ResponseDeadline field to given value.

### HasResponseDeadline

`func (o *Subscriptionpostrequest) HasResponseDeadline() bool`

HasResponseDeadline returns a boolean if a field has been set.

### GetHttpConfig

`func (o *Subscriptionpostrequest) GetHttpConfig() Httpconfig`

GetHttpConfig returns the HttpConfig field if non-nil, zero value otherwise.

### GetHttpConfigOk

`func (o *Subscriptionpostrequest) GetHttpConfigOk() (*Httpconfig, bool)`

GetHttpConfigOk returns a tuple with the HttpConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpConfig

`func (o *Subscriptionpostrequest) SetHttpConfig(v Httpconfig)`

SetHttpConfig sets HttpConfig field to given value.

### HasHttpConfig

`func (o *Subscriptionpostrequest) HasHttpConfig() bool`

HasHttpConfig returns a boolean if a field has been set.

### GetEventBridgeConfig

`func (o *Subscriptionpostrequest) GetEventBridgeConfig() Eventbridgeconfig`

GetEventBridgeConfig returns the EventBridgeConfig field if non-nil, zero value otherwise.

### GetEventBridgeConfigOk

`func (o *Subscriptionpostrequest) GetEventBridgeConfigOk() (*Eventbridgeconfig, bool)`

GetEventBridgeConfigOk returns a tuple with the EventBridgeConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventBridgeConfig

`func (o *Subscriptionpostrequest) SetEventBridgeConfig(v Eventbridgeconfig)`

SetEventBridgeConfig sets EventBridgeConfig field to given value.

### HasEventBridgeConfig

`func (o *Subscriptionpostrequest) HasEventBridgeConfig() bool`

HasEventBridgeConfig returns a boolean if a field has been set.

### GetEnabled

`func (o *Subscriptionpostrequest) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Subscriptionpostrequest) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Subscriptionpostrequest) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Subscriptionpostrequest) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetFilter

`func (o *Subscriptionpostrequest) GetFilter() string`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *Subscriptionpostrequest) GetFilterOk() (*string, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *Subscriptionpostrequest) SetFilter(v string)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *Subscriptionpostrequest) HasFilter() bool`

HasFilter returns a boolean if a field has been set.


