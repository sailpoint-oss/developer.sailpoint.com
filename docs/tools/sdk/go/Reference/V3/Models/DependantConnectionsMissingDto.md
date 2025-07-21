---
id: dependant-connections-missing-dto
title: DependantConnectionsMissingDto
pagination_label: DependantConnectionsMissingDto
sidebar_label: DependantConnectionsMissingDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DependantConnectionsMissingDto', 'DependantConnectionsMissingDto'] 
slug: /tools/sdk/go/v3/models/dependant-connections-missing-dto
tags: ['SDK', 'Software Development Kit', 'DependantConnectionsMissingDto', 'DependantConnectionsMissingDto']
---

# DependantConnectionsMissingDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DependencyType** | Pointer to **string** | The type of dependency type that is missing in the SourceConnections | [optional] 
**Reason** | Pointer to **string** | The reason why this dependency is missing | [optional] 

## Methods

### NewDependantConnectionsMissingDto

`func NewDependantConnectionsMissingDto() *DependantConnectionsMissingDto`

NewDependantConnectionsMissingDto instantiates a new DependantConnectionsMissingDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDependantConnectionsMissingDtoWithDefaults

`func NewDependantConnectionsMissingDtoWithDefaults() *DependantConnectionsMissingDto`

NewDependantConnectionsMissingDtoWithDefaults instantiates a new DependantConnectionsMissingDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDependencyType

`func (o *DependantConnectionsMissingDto) GetDependencyType() string`

GetDependencyType returns the DependencyType field if non-nil, zero value otherwise.

### GetDependencyTypeOk

`func (o *DependantConnectionsMissingDto) GetDependencyTypeOk() (*string, bool)`

GetDependencyTypeOk returns a tuple with the DependencyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDependencyType

`func (o *DependantConnectionsMissingDto) SetDependencyType(v string)`

SetDependencyType sets DependencyType field to given value.

### HasDependencyType

`func (o *DependantConnectionsMissingDto) HasDependencyType() bool`

HasDependencyType returns a boolean if a field has been set.

### GetReason

`func (o *DependantConnectionsMissingDto) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *DependantConnectionsMissingDto) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *DependantConnectionsMissingDto) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *DependantConnectionsMissingDto) HasReason() bool`

HasReason returns a boolean if a field has been set.


