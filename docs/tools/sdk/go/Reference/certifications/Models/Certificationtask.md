---
id: v1-certificationtask
title: Certificationtask
pagination_label: Certificationtask
sidebar_label: Certificationtask
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Certificationtask', 'V1Certificationtask'] 
slug: /tools/sdk/go/certifications/models/certificationtask
tags: ['SDK', 'Software Development Kit', 'Certificationtask', 'V1Certificationtask']
---

# Certificationtask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the certification task. | [optional] 
**Type** | Pointer to **string** | The type of the certification task. More values may be added in the future. | [optional] 
**TargetType** | Pointer to **string** | The type of item that is being operated on by this task whose ID is stored in the targetId field. | [optional] 
**TargetId** | Pointer to **string** | The ID of the item being operated on by this task. | [optional] 
**Status** | Pointer to **string** | The status of the task. | [optional] 
**Errors** | Pointer to [**[]Errormessagedto**](errormessagedto) | List of error messages | [optional] 
**ReassignmentTrailDTOs** | Pointer to [**[]Reassignmenttraildto**](reassignmenttraildto) | Reassignment trails that lead to self certification identity | [optional] 
**Created** | Pointer to **SailPointTime** | The date and time on which this task was created. | [optional] 

## Methods

### NewCertificationtask

`func NewCertificationtask() *Certificationtask`

NewCertificationtask instantiates a new Certificationtask object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationtaskWithDefaults

`func NewCertificationtaskWithDefaults() *Certificationtask`

NewCertificationtaskWithDefaults instantiates a new Certificationtask object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Certificationtask) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Certificationtask) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Certificationtask) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Certificationtask) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Certificationtask) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Certificationtask) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Certificationtask) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Certificationtask) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTargetType

`func (o *Certificationtask) GetTargetType() string`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *Certificationtask) GetTargetTypeOk() (*string, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *Certificationtask) SetTargetType(v string)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *Certificationtask) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.

### GetTargetId

`func (o *Certificationtask) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *Certificationtask) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *Certificationtask) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.

### HasTargetId

`func (o *Certificationtask) HasTargetId() bool`

HasTargetId returns a boolean if a field has been set.

### GetStatus

`func (o *Certificationtask) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Certificationtask) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Certificationtask) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Certificationtask) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetErrors

`func (o *Certificationtask) GetErrors() []Errormessagedto`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *Certificationtask) GetErrorsOk() (*[]Errormessagedto, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *Certificationtask) SetErrors(v []Errormessagedto)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *Certificationtask) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetReassignmentTrailDTOs

`func (o *Certificationtask) GetReassignmentTrailDTOs() []Reassignmenttraildto`

GetReassignmentTrailDTOs returns the ReassignmentTrailDTOs field if non-nil, zero value otherwise.

### GetReassignmentTrailDTOsOk

`func (o *Certificationtask) GetReassignmentTrailDTOsOk() (*[]Reassignmenttraildto, bool)`

GetReassignmentTrailDTOsOk returns a tuple with the ReassignmentTrailDTOs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentTrailDTOs

`func (o *Certificationtask) SetReassignmentTrailDTOs(v []Reassignmenttraildto)`

SetReassignmentTrailDTOs sets ReassignmentTrailDTOs field to given value.

### HasReassignmentTrailDTOs

`func (o *Certificationtask) HasReassignmentTrailDTOs() bool`

HasReassignmentTrailDTOs returns a boolean if a field has been set.

### GetCreated

`func (o *Certificationtask) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Certificationtask) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Certificationtask) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Certificationtask) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


