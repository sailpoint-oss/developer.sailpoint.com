---
id: v1-invocationstatus
title: Invocationstatus
pagination_label: Invocationstatus
sidebar_label: Invocationstatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Invocationstatus', 'V1Invocationstatus'] 
slug: /tools/sdk/go/triggers/models/invocationstatus
tags: ['SDK', 'Software Development Kit', 'Invocationstatus', 'V1Invocationstatus']
---

# Invocationstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Invocation ID | 
**TriggerId** | **string** | Trigger ID | 
**SubscriptionName** | **string** | Subscription name | 
**SubscriptionId** | **string** | Subscription ID | 
**Type** | [**Invocationstatustype**](invocationstatustype) |  | 
**Created** | **SailPointTime** | Invocation created timestamp. ISO-8601 in UTC. | 
**Completed** | Pointer to **SailPointTime** | Invocation completed timestamp; empty fields imply invocation is in-flight or not completed. ISO-8601 in UTC. | [optional] 
**StartInvocationInput** | [**Startinvocationinput**](startinvocationinput) |  | 
**CompleteInvocationInput** | Pointer to [**Completeinvocationinput**](completeinvocationinput) |  | [optional] 

## Methods

### NewInvocationstatus

`func NewInvocationstatus(id string, triggerId string, subscriptionName string, subscriptionId string, type_ Invocationstatustype, created SailPointTime, startInvocationInput Startinvocationinput, ) *Invocationstatus`

NewInvocationstatus instantiates a new Invocationstatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvocationstatusWithDefaults

`func NewInvocationstatusWithDefaults() *Invocationstatus`

NewInvocationstatusWithDefaults instantiates a new Invocationstatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Invocationstatus) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Invocationstatus) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Invocationstatus) SetId(v string)`

SetId sets Id field to given value.


### GetTriggerId

`func (o *Invocationstatus) GetTriggerId() string`

GetTriggerId returns the TriggerId field if non-nil, zero value otherwise.

### GetTriggerIdOk

`func (o *Invocationstatus) GetTriggerIdOk() (*string, bool)`

GetTriggerIdOk returns a tuple with the TriggerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTriggerId

`func (o *Invocationstatus) SetTriggerId(v string)`

SetTriggerId sets TriggerId field to given value.


### GetSubscriptionName

`func (o *Invocationstatus) GetSubscriptionName() string`

GetSubscriptionName returns the SubscriptionName field if non-nil, zero value otherwise.

### GetSubscriptionNameOk

`func (o *Invocationstatus) GetSubscriptionNameOk() (*string, bool)`

GetSubscriptionNameOk returns a tuple with the SubscriptionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionName

`func (o *Invocationstatus) SetSubscriptionName(v string)`

SetSubscriptionName sets SubscriptionName field to given value.


### GetSubscriptionId

`func (o *Invocationstatus) GetSubscriptionId() string`

GetSubscriptionId returns the SubscriptionId field if non-nil, zero value otherwise.

### GetSubscriptionIdOk

`func (o *Invocationstatus) GetSubscriptionIdOk() (*string, bool)`

GetSubscriptionIdOk returns a tuple with the SubscriptionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionId

`func (o *Invocationstatus) SetSubscriptionId(v string)`

SetSubscriptionId sets SubscriptionId field to given value.


### GetType

`func (o *Invocationstatus) GetType() Invocationstatustype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Invocationstatus) GetTypeOk() (*Invocationstatustype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Invocationstatus) SetType(v Invocationstatustype)`

SetType sets Type field to given value.


### GetCreated

`func (o *Invocationstatus) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Invocationstatus) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Invocationstatus) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetCompleted

`func (o *Invocationstatus) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Invocationstatus) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Invocationstatus) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Invocationstatus) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetStartInvocationInput

`func (o *Invocationstatus) GetStartInvocationInput() Startinvocationinput`

GetStartInvocationInput returns the StartInvocationInput field if non-nil, zero value otherwise.

### GetStartInvocationInputOk

`func (o *Invocationstatus) GetStartInvocationInputOk() (*Startinvocationinput, bool)`

GetStartInvocationInputOk returns a tuple with the StartInvocationInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartInvocationInput

`func (o *Invocationstatus) SetStartInvocationInput(v Startinvocationinput)`

SetStartInvocationInput sets StartInvocationInput field to given value.


### GetCompleteInvocationInput

`func (o *Invocationstatus) GetCompleteInvocationInput() Completeinvocationinput`

GetCompleteInvocationInput returns the CompleteInvocationInput field if non-nil, zero value otherwise.

### GetCompleteInvocationInputOk

`func (o *Invocationstatus) GetCompleteInvocationInputOk() (*Completeinvocationinput, bool)`

GetCompleteInvocationInputOk returns a tuple with the CompleteInvocationInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleteInvocationInput

`func (o *Invocationstatus) SetCompleteInvocationInput(v Completeinvocationinput)`

SetCompleteInvocationInput sets CompleteInvocationInput field to given value.

### HasCompleteInvocationInput

`func (o *Invocationstatus) HasCompleteInvocationInput() bool`

HasCompleteInvocationInput returns a boolean if a field has been set.


