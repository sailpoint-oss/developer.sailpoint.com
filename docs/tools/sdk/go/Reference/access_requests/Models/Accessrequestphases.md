---
id: v1-accessrequestphases
title: Accessrequestphases
pagination_label: Accessrequestphases
sidebar_label: Accessrequestphases
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestphases', 'V1Accessrequestphases'] 
slug: /tools/sdk/go/accessrequests/models/accessrequestphases
tags: ['SDK', 'Software Development Kit', 'Accessrequestphases', 'V1Accessrequestphases']
---

# Accessrequestphases

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Started** | Pointer to **SailPointTime** | The time that this phase started. | [optional] 
**Finished** | Pointer to **NullableTime** | The time that this phase finished. | [optional] 
**Name** | Pointer to **string** | The name of this phase. | [optional] 
**State** | Pointer to **string** | The state of this phase. | [optional] 
**Result** | Pointer to **NullableString** | The state of this phase. | [optional] 
**PhaseReference** | Pointer to **NullableString** | A reference to another object on the RequestedItemStatus that contains more details about the phase. Note that for the Provisioning phase, this will be empty if there are no manual work items. | [optional] 

## Methods

### NewAccessrequestphases

`func NewAccessrequestphases() *Accessrequestphases`

NewAccessrequestphases instantiates a new Accessrequestphases object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestphasesWithDefaults

`func NewAccessrequestphasesWithDefaults() *Accessrequestphases`

NewAccessrequestphasesWithDefaults instantiates a new Accessrequestphases object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStarted

`func (o *Accessrequestphases) GetStarted() SailPointTime`

GetStarted returns the Started field if non-nil, zero value otherwise.

### GetStartedOk

`func (o *Accessrequestphases) GetStartedOk() (*SailPointTime, bool)`

GetStartedOk returns a tuple with the Started field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStarted

`func (o *Accessrequestphases) SetStarted(v SailPointTime)`

SetStarted sets Started field to given value.

### HasStarted

`func (o *Accessrequestphases) HasStarted() bool`

HasStarted returns a boolean if a field has been set.

### GetFinished

`func (o *Accessrequestphases) GetFinished() SailPointTime`

GetFinished returns the Finished field if non-nil, zero value otherwise.

### GetFinishedOk

`func (o *Accessrequestphases) GetFinishedOk() (*SailPointTime, bool)`

GetFinishedOk returns a tuple with the Finished field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFinished

`func (o *Accessrequestphases) SetFinished(v SailPointTime)`

SetFinished sets Finished field to given value.

### HasFinished

`func (o *Accessrequestphases) HasFinished() bool`

HasFinished returns a boolean if a field has been set.

### SetFinishedNil

`func (o *Accessrequestphases) SetFinishedNil(b bool)`

 SetFinishedNil sets the value for Finished to be an explicit nil

### UnsetFinished
`func (o *Accessrequestphases) UnsetFinished()`

UnsetFinished ensures that no value is present for Finished, not even an explicit nil
### GetName

`func (o *Accessrequestphases) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accessrequestphases) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accessrequestphases) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accessrequestphases) HasName() bool`

HasName returns a boolean if a field has been set.

### GetState

`func (o *Accessrequestphases) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Accessrequestphases) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Accessrequestphases) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *Accessrequestphases) HasState() bool`

HasState returns a boolean if a field has been set.

### GetResult

`func (o *Accessrequestphases) GetResult() string`

GetResult returns the Result field if non-nil, zero value otherwise.

### GetResultOk

`func (o *Accessrequestphases) GetResultOk() (*string, bool)`

GetResultOk returns a tuple with the Result field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResult

`func (o *Accessrequestphases) SetResult(v string)`

SetResult sets Result field to given value.

### HasResult

`func (o *Accessrequestphases) HasResult() bool`

HasResult returns a boolean if a field has been set.

### SetResultNil

`func (o *Accessrequestphases) SetResultNil(b bool)`

 SetResultNil sets the value for Result to be an explicit nil

### UnsetResult
`func (o *Accessrequestphases) UnsetResult()`

UnsetResult ensures that no value is present for Result, not even an explicit nil
### GetPhaseReference

`func (o *Accessrequestphases) GetPhaseReference() string`

GetPhaseReference returns the PhaseReference field if non-nil, zero value otherwise.

### GetPhaseReferenceOk

`func (o *Accessrequestphases) GetPhaseReferenceOk() (*string, bool)`

GetPhaseReferenceOk returns a tuple with the PhaseReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhaseReference

`func (o *Accessrequestphases) SetPhaseReference(v string)`

SetPhaseReference sets PhaseReference field to given value.

### HasPhaseReference

`func (o *Accessrequestphases) HasPhaseReference() bool`

HasPhaseReference returns a boolean if a field has been set.

### SetPhaseReferenceNil

`func (o *Accessrequestphases) SetPhaseReferenceNil(b bool)`

 SetPhaseReferenceNil sets the value for PhaseReference to be an explicit nil

### UnsetPhaseReference
`func (o *Accessrequestphases) UnsetPhaseReference()`

UnsetPhaseReference ensures that no value is present for PhaseReference, not even an explicit nil

