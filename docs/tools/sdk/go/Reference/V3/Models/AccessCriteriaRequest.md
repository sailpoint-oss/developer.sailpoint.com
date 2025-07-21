---
id: access-criteria-request
title: AccessCriteriaRequest
pagination_label: AccessCriteriaRequest
sidebar_label: AccessCriteriaRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessCriteriaRequest', 'AccessCriteriaRequest'] 
slug: /tools/sdk/go/v3/models/access-criteria-request
tags: ['SDK', 'Software Development Kit', 'AccessCriteriaRequest', 'AccessCriteriaRequest']
---

# AccessCriteriaRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Business name for the access construct list | [optional] 
**CriteriaList** | Pointer to [**[]AccessCriteriaRequestCriteriaListInner**](access-criteria-request-criteria-list-inner) | List of criteria. There is a min of 1 and max of 50 items in the list. | [optional] 

## Methods

### NewAccessCriteriaRequest

`func NewAccessCriteriaRequest() *AccessCriteriaRequest`

NewAccessCriteriaRequest instantiates a new AccessCriteriaRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessCriteriaRequestWithDefaults

`func NewAccessCriteriaRequestWithDefaults() *AccessCriteriaRequest`

NewAccessCriteriaRequestWithDefaults instantiates a new AccessCriteriaRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AccessCriteriaRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessCriteriaRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessCriteriaRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessCriteriaRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCriteriaList

`func (o *AccessCriteriaRequest) GetCriteriaList() []AccessCriteriaRequestCriteriaListInner`

GetCriteriaList returns the CriteriaList field if non-nil, zero value otherwise.

### GetCriteriaListOk

`func (o *AccessCriteriaRequest) GetCriteriaListOk() (*[]AccessCriteriaRequestCriteriaListInner, bool)`

GetCriteriaListOk returns a tuple with the CriteriaList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaList

`func (o *AccessCriteriaRequest) SetCriteriaList(v []AccessCriteriaRequestCriteriaListInner)`

SetCriteriaList sets CriteriaList field to given value.

### HasCriteriaList

`func (o *AccessCriteriaRequest) HasCriteriaList() bool`

HasCriteriaList returns a boolean if a field has been set.


