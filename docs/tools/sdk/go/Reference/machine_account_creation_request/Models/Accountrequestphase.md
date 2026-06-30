---
id: v1-accountrequestphase
title: Accountrequestphase
pagination_label: Accountrequestphase
sidebar_label: Accountrequestphase
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountrequestphase', 'V1Accountrequestphase'] 
slug: /tools/sdk/go/machineaccountcreationrequest/models/accountrequestphase
tags: ['SDK', 'Software Development Kit', 'Accountrequestphase', 'V1Accountrequestphase']
---

# Accountrequestphase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Enum of account request phase type | [optional] 
**State** | Pointer to [**Accountrequestphasestate**](accountrequestphasestate) |  | [optional] 
**Started** | Pointer to **SailPointTime** | Start date of account request phase. | [optional] [readonly] 
**Finished** | Pointer to **SailPointTime** | Finish date of account request phase. | [optional] [readonly] 

## Methods

### NewAccountrequestphase

`func NewAccountrequestphase() *Accountrequestphase`

NewAccountrequestphase instantiates a new Accountrequestphase object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountrequestphaseWithDefaults

`func NewAccountrequestphaseWithDefaults() *Accountrequestphase`

NewAccountrequestphaseWithDefaults instantiates a new Accountrequestphase object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Accountrequestphase) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accountrequestphase) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accountrequestphase) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accountrequestphase) HasName() bool`

HasName returns a boolean if a field has been set.

### GetState

`func (o *Accountrequestphase) GetState() Accountrequestphasestate`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Accountrequestphase) GetStateOk() (*Accountrequestphasestate, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Accountrequestphase) SetState(v Accountrequestphasestate)`

SetState sets State field to given value.

### HasState

`func (o *Accountrequestphase) HasState() bool`

HasState returns a boolean if a field has been set.

### GetStarted

`func (o *Accountrequestphase) GetStarted() SailPointTime`

GetStarted returns the Started field if non-nil, zero value otherwise.

### GetStartedOk

`func (o *Accountrequestphase) GetStartedOk() (*SailPointTime, bool)`

GetStartedOk returns a tuple with the Started field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStarted

`func (o *Accountrequestphase) SetStarted(v SailPointTime)`

SetStarted sets Started field to given value.

### HasStarted

`func (o *Accountrequestphase) HasStarted() bool`

HasStarted returns a boolean if a field has been set.

### GetFinished

`func (o *Accountrequestphase) GetFinished() SailPointTime`

GetFinished returns the Finished field if non-nil, zero value otherwise.

### GetFinishedOk

`func (o *Accountrequestphase) GetFinishedOk() (*SailPointTime, bool)`

GetFinishedOk returns a tuple with the Finished field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFinished

`func (o *Accountrequestphase) SetFinished(v SailPointTime)`

SetFinished sets Finished field to given value.

### HasFinished

`func (o *Accountrequestphase) HasFinished() bool`

HasFinished returns a boolean if a field has been set.


