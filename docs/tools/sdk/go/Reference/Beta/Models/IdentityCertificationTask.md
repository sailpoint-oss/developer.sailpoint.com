---
id: beta-identity-certification-task
title: IdentityCertificationTask
pagination_label: IdentityCertificationTask
sidebar_label: IdentityCertificationTask
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityCertificationTask', 'BetaIdentityCertificationTask'] 
slug: /tools/sdk/go/beta/models/identity-certification-task
tags: ['SDK', 'Software Development Kit', 'IdentityCertificationTask', 'BetaIdentityCertificationTask']
---

# IdentityCertificationTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The task id | [optional] 
**CertificationId** | Pointer to **string** | The certification id | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**Errors** | Pointer to **[]string** | Any errors executing the task (Optional). | [optional] 

## Methods

### NewIdentityCertificationTask

`func NewIdentityCertificationTask() *IdentityCertificationTask`

NewIdentityCertificationTask instantiates a new IdentityCertificationTask object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityCertificationTaskWithDefaults

`func NewIdentityCertificationTaskWithDefaults() *IdentityCertificationTask`

NewIdentityCertificationTaskWithDefaults instantiates a new IdentityCertificationTask object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IdentityCertificationTask) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityCertificationTask) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityCertificationTask) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityCertificationTask) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCertificationId

`func (o *IdentityCertificationTask) GetCertificationId() string`

GetCertificationId returns the CertificationId field if non-nil, zero value otherwise.

### GetCertificationIdOk

`func (o *IdentityCertificationTask) GetCertificationIdOk() (*string, bool)`

GetCertificationIdOk returns a tuple with the CertificationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationId

`func (o *IdentityCertificationTask) SetCertificationId(v string)`

SetCertificationId sets CertificationId field to given value.

### HasCertificationId

`func (o *IdentityCertificationTask) HasCertificationId() bool`

HasCertificationId returns a boolean if a field has been set.

### GetType

`func (o *IdentityCertificationTask) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentityCertificationTask) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentityCertificationTask) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *IdentityCertificationTask) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStatus

`func (o *IdentityCertificationTask) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *IdentityCertificationTask) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *IdentityCertificationTask) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *IdentityCertificationTask) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetErrors

`func (o *IdentityCertificationTask) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *IdentityCertificationTask) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *IdentityCertificationTask) SetErrors(v []string)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *IdentityCertificationTask) HasErrors() bool`

HasErrors returns a boolean if a field has been set.


