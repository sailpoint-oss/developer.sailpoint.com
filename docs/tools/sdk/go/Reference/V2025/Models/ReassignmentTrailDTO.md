---
id: v2025-reassignment-trail-dto
title: ReassignmentTrailDTO
pagination_label: ReassignmentTrailDTO
sidebar_label: ReassignmentTrailDTO
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReassignmentTrailDTO', 'V2025ReassignmentTrailDTO'] 
slug: /tools/sdk/go/v2025/models/reassignment-trail-dto
tags: ['SDK', 'Software Development Kit', 'ReassignmentTrailDTO', 'V2025ReassignmentTrailDTO']
---

# ReassignmentTrailDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreviousOwner** | Pointer to **string** | The ID of previous owner identity. | [optional] 
**NewOwner** | Pointer to **string** | The ID of new owner identity. | [optional] 
**ReassignmentType** | Pointer to **string** | The type of reassignment. | [optional] 

## Methods

### NewReassignmentTrailDTO

`func NewReassignmentTrailDTO() *ReassignmentTrailDTO`

NewReassignmentTrailDTO instantiates a new ReassignmentTrailDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReassignmentTrailDTOWithDefaults

`func NewReassignmentTrailDTOWithDefaults() *ReassignmentTrailDTO`

NewReassignmentTrailDTOWithDefaults instantiates a new ReassignmentTrailDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPreviousOwner

`func (o *ReassignmentTrailDTO) GetPreviousOwner() string`

GetPreviousOwner returns the PreviousOwner field if non-nil, zero value otherwise.

### GetPreviousOwnerOk

`func (o *ReassignmentTrailDTO) GetPreviousOwnerOk() (*string, bool)`

GetPreviousOwnerOk returns a tuple with the PreviousOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousOwner

`func (o *ReassignmentTrailDTO) SetPreviousOwner(v string)`

SetPreviousOwner sets PreviousOwner field to given value.

### HasPreviousOwner

`func (o *ReassignmentTrailDTO) HasPreviousOwner() bool`

HasPreviousOwner returns a boolean if a field has been set.

### GetNewOwner

`func (o *ReassignmentTrailDTO) GetNewOwner() string`

GetNewOwner returns the NewOwner field if non-nil, zero value otherwise.

### GetNewOwnerOk

`func (o *ReassignmentTrailDTO) GetNewOwnerOk() (*string, bool)`

GetNewOwnerOk returns a tuple with the NewOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewOwner

`func (o *ReassignmentTrailDTO) SetNewOwner(v string)`

SetNewOwner sets NewOwner field to given value.

### HasNewOwner

`func (o *ReassignmentTrailDTO) HasNewOwner() bool`

HasNewOwner returns a boolean if a field has been set.

### GetReassignmentType

`func (o *ReassignmentTrailDTO) GetReassignmentType() string`

GetReassignmentType returns the ReassignmentType field if non-nil, zero value otherwise.

### GetReassignmentTypeOk

`func (o *ReassignmentTrailDTO) GetReassignmentTypeOk() (*string, bool)`

GetReassignmentTypeOk returns a tuple with the ReassignmentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentType

`func (o *ReassignmentTrailDTO) SetReassignmentType(v string)`

SetReassignmentType sets ReassignmentType field to given value.

### HasReassignmentType

`func (o *ReassignmentTrailDTO) HasReassignmentType() bool`

HasReassignmentType returns a boolean if a field has been set.


