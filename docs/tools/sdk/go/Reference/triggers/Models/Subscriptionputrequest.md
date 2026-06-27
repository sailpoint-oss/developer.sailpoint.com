---
id: v1-subscriptionputrequest
title: Subscriptionputrequest
pagination_label: Subscriptionputrequest
sidebar_label: Subscriptionputrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Subscriptionputrequest', 'V1Subscriptionputrequest'] 
slug: /tools/sdk/go/triggers/models/subscriptionputrequest
tags: ['SDK', 'Software Development Kit', 'Subscriptionputrequest', 'V1Subscriptionputrequest']
---

# Subscriptionputrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Subscription name. | [optional] 
**Description** | Pointer to **string** | Subscription description. | [optional] 
**Type** | Pointer to [**Subscriptiontype**](subscriptiontype) |  | [optional] 
**ResponseDeadline** | Pointer to **string** | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [optional] [default to "PT1H"]
**HttpConfig** | Pointer to [**Httpconfig**](httpconfig) |  | [optional] 
**EventBridgeConfig** | Pointer to [**Eventbridgeconfig**](eventbridgeconfig) |  | [optional] 
**Enabled** | Pointer to **bool** | Whether subscription should receive real-time trigger invocations or not.  Test trigger invocations are always enabled regardless of this option. | [optional] [default to true]
**Filter** | Pointer to **string** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [optional] 

## Methods

### NewSubscriptionputrequest

`func NewSubscriptionputrequest() *Subscriptionputrequest`

NewSubscriptionputrequest instantiates a new Subscriptionputrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubscriptionputrequestWithDefaults

`func NewSubscriptionputrequestWithDefaults() *Subscriptionputrequest`

NewSubscriptionputrequestWithDefaults instantiates a new Subscriptionputrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Subscriptionputrequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Subscriptionputrequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Subscriptionputrequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Subscriptionputrequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Subscriptionputrequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Subscriptionputrequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Subscriptionputrequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Subscriptionputrequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *Subscriptionputrequest) GetType() Subscriptiontype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Subscriptionputrequest) GetTypeOk() (*Subscriptiontype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Subscriptionputrequest) SetType(v Subscriptiontype)`

SetType sets Type field to given value.

### HasType

`func (o *Subscriptionputrequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetResponseDeadline

`func (o *Subscriptionputrequest) GetResponseDeadline() string`

GetResponseDeadline returns the ResponseDeadline field if non-nil, zero value otherwise.

### GetResponseDeadlineOk

`func (o *Subscriptionputrequest) GetResponseDeadlineOk() (*string, bool)`

GetResponseDeadlineOk returns a tuple with the ResponseDeadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseDeadline

`func (o *Subscriptionputrequest) SetResponseDeadline(v string)`

SetResponseDeadline sets ResponseDeadline field to given value.

### HasResponseDeadline

`func (o *Subscriptionputrequest) HasResponseDeadline() bool`

HasResponseDeadline returns a boolean if a field has been set.

### GetHttpConfig

`func (o *Subscriptionputrequest) GetHttpConfig() Httpconfig`

GetHttpConfig returns the HttpConfig field if non-nil, zero value otherwise.

### GetHttpConfigOk

`func (o *Subscriptionputrequest) GetHttpConfigOk() (*Httpconfig, bool)`

GetHttpConfigOk returns a tuple with the HttpConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpConfig

`func (o *Subscriptionputrequest) SetHttpConfig(v Httpconfig)`

SetHttpConfig sets HttpConfig field to given value.

### HasHttpConfig

`func (o *Subscriptionputrequest) HasHttpConfig() bool`

HasHttpConfig returns a boolean if a field has been set.

### GetEventBridgeConfig

`func (o *Subscriptionputrequest) GetEventBridgeConfig() Eventbridgeconfig`

GetEventBridgeConfig returns the EventBridgeConfig field if non-nil, zero value otherwise.

### GetEventBridgeConfigOk

`func (o *Subscriptionputrequest) GetEventBridgeConfigOk() (*Eventbridgeconfig, bool)`

GetEventBridgeConfigOk returns a tuple with the EventBridgeConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventBridgeConfig

`func (o *Subscriptionputrequest) SetEventBridgeConfig(v Eventbridgeconfig)`

SetEventBridgeConfig sets EventBridgeConfig field to given value.

### HasEventBridgeConfig

`func (o *Subscriptionputrequest) HasEventBridgeConfig() bool`

HasEventBridgeConfig returns a boolean if a field has been set.

### GetEnabled

`func (o *Subscriptionputrequest) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Subscriptionputrequest) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Subscriptionputrequest) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Subscriptionputrequest) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetFilter

`func (o *Subscriptionputrequest) GetFilter() string`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *Subscriptionputrequest) GetFilterOk() (*string, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *Subscriptionputrequest) SetFilter(v string)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *Subscriptionputrequest) HasFilter() bool`

HasFilter returns a boolean if a field has been set.


