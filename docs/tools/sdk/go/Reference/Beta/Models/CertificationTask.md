---
id: beta-certification-task
title: CertificationTask
pagination_label: CertificationTask
sidebar_label: CertificationTask
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CertificationTask', 'BetaCertificationTask'] 
slug: /tools/sdk/go/beta/models/certification-task
tags: ['SDK', 'Software Development Kit', 'CertificationTask', 'BetaCertificationTask']
---

# CertificationTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the certification task. | [optional] 
**Type** | Pointer to **string** | The type of the certification task. More values may be added in the future. | [optional] 
**TargetType** | Pointer to **string** | The type of item that is being operated on by this task whose ID is stored in the targetId field. | [optional] 
**TargetId** | Pointer to **string** | The ID of the item being operated on by this task. | [optional] 
**Status** | Pointer to **string** | The status of the task. | [optional] 
**Errors** | Pointer to [**[]ErrorMessageDto**](error-message-dto) |  | [optional] 
**Created** | Pointer to **SailPointTime** | The date and time on which this task was created. | [optional] 

## Methods

### NewCertificationTask

`func NewCertificationTask() *CertificationTask`

NewCertificationTask instantiates a new CertificationTask object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationTaskWithDefaults

`func NewCertificationTaskWithDefaults() *CertificationTask`

NewCertificationTaskWithDefaults instantiates a new CertificationTask object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CertificationTask) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CertificationTask) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CertificationTask) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CertificationTask) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *CertificationTask) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CertificationTask) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CertificationTask) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CertificationTask) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTargetType

`func (o *CertificationTask) GetTargetType() string`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *CertificationTask) GetTargetTypeOk() (*string, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *CertificationTask) SetTargetType(v string)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *CertificationTask) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.

### GetTargetId

`func (o *CertificationTask) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *CertificationTask) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *CertificationTask) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.

### HasTargetId

`func (o *CertificationTask) HasTargetId() bool`

HasTargetId returns a boolean if a field has been set.

### GetStatus

`func (o *CertificationTask) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CertificationTask) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CertificationTask) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CertificationTask) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetErrors

`func (o *CertificationTask) GetErrors() []ErrorMessageDto`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *CertificationTask) GetErrorsOk() (*[]ErrorMessageDto, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *CertificationTask) SetErrors(v []ErrorMessageDto)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *CertificationTask) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetCreated

`func (o *CertificationTask) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CertificationTask) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CertificationTask) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *CertificationTask) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


