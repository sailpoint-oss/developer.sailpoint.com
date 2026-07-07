---
id: v1-accesscriteria
title: Accesscriteria
pagination_label: Accesscriteria
sidebar_label: Accesscriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accesscriteria', 'V1Accesscriteria'] 
slug: /tools/sdk/go/sodpolicies/models/accesscriteria
tags: ['SDK', 'Software Development Kit', 'Accesscriteria', 'V1Accesscriteria']
---

# Accesscriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Business name for the access construct list | [optional] 
**CriteriaList** | Pointer to [**[]AccesscriteriaCriteriaListInner**](accesscriteria-criteria-list-inner) | List of criteria. There is a min of 1 and max of 50 items in the list. | [optional] 

## Methods

### NewAccesscriteria

`func NewAccesscriteria() *Accesscriteria`

NewAccesscriteria instantiates a new Accesscriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccesscriteriaWithDefaults

`func NewAccesscriteriaWithDefaults() *Accesscriteria`

NewAccesscriteriaWithDefaults instantiates a new Accesscriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Accesscriteria) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accesscriteria) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accesscriteria) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accesscriteria) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCriteriaList

`func (o *Accesscriteria) GetCriteriaList() []AccesscriteriaCriteriaListInner`

GetCriteriaList returns the CriteriaList field if non-nil, zero value otherwise.

### GetCriteriaListOk

`func (o *Accesscriteria) GetCriteriaListOk() (*[]AccesscriteriaCriteriaListInner, bool)`

GetCriteriaListOk returns a tuple with the CriteriaList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteriaList

`func (o *Accesscriteria) SetCriteriaList(v []AccesscriteriaCriteriaListInner)`

SetCriteriaList sets CriteriaList field to given value.

### HasCriteriaList

`func (o *Accesscriteria) HasCriteriaList() bool`

HasCriteriaList returns a boolean if a field has been set.


