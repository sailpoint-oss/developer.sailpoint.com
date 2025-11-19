---
id: conflicting-access-criteria-request
title: ConflictingAccessCriteriaRequest
pagination_label: ConflictingAccessCriteriaRequest
sidebar_label: ConflictingAccessCriteriaRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConflictingAccessCriteriaRequest', 'ConflictingAccessCriteriaRequest'] 
slug: /tools/sdk/go/v3/models/conflicting-access-criteria-request
tags: ['SDK', 'Software Development Kit', 'ConflictingAccessCriteriaRequest', 'ConflictingAccessCriteriaRequest']
---

# ConflictingAccessCriteriaRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | Pointer to [**AccessCriteriaRequest**](access-criteria-request) |  | [optional] 
**RightCriteria** | Pointer to [**AccessCriteriaRequest**](access-criteria-request) |  | [optional] 

## Methods

### NewConflictingAccessCriteriaRequest

`func NewConflictingAccessCriteriaRequest() *ConflictingAccessCriteriaRequest`

NewConflictingAccessCriteriaRequest instantiates a new ConflictingAccessCriteriaRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConflictingAccessCriteriaRequestWithDefaults

`func NewConflictingAccessCriteriaRequestWithDefaults() *ConflictingAccessCriteriaRequest`

NewConflictingAccessCriteriaRequestWithDefaults instantiates a new ConflictingAccessCriteriaRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLeftCriteria

`func (o *ConflictingAccessCriteriaRequest) GetLeftCriteria() AccessCriteriaRequest`

GetLeftCriteria returns the LeftCriteria field if non-nil, zero value otherwise.

### GetLeftCriteriaOk

`func (o *ConflictingAccessCriteriaRequest) GetLeftCriteriaOk() (*AccessCriteriaRequest, bool)`

GetLeftCriteriaOk returns a tuple with the LeftCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeftCriteria

`func (o *ConflictingAccessCriteriaRequest) SetLeftCriteria(v AccessCriteriaRequest)`

SetLeftCriteria sets LeftCriteria field to given value.

### HasLeftCriteria

`func (o *ConflictingAccessCriteriaRequest) HasLeftCriteria() bool`

HasLeftCriteria returns a boolean if a field has been set.

### GetRightCriteria

`func (o *ConflictingAccessCriteriaRequest) GetRightCriteria() AccessCriteriaRequest`

GetRightCriteria returns the RightCriteria field if non-nil, zero value otherwise.

### GetRightCriteriaOk

`func (o *ConflictingAccessCriteriaRequest) GetRightCriteriaOk() (*AccessCriteriaRequest, bool)`

GetRightCriteriaOk returns a tuple with the RightCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRightCriteria

`func (o *ConflictingAccessCriteriaRequest) SetRightCriteria(v AccessCriteriaRequest)`

SetRightCriteria sets RightCriteria field to given value.

### HasRightCriteria

`func (o *ConflictingAccessCriteriaRequest) HasRightCriteria() bool`

HasRightCriteria returns a boolean if a field has been set.


