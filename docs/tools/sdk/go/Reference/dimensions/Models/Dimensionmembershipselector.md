---
id: v1-dimensionmembershipselector
title: Dimensionmembershipselector
pagination_label: Dimensionmembershipselector
sidebar_label: Dimensionmembershipselector
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Dimensionmembershipselector', 'V1Dimensionmembershipselector'] 
slug: /tools/sdk/go/dimensions/models/dimensionmembershipselector
tags: ['SDK', 'Software Development Kit', 'Dimensionmembershipselector', 'V1Dimensionmembershipselector']
---

# Dimensionmembershipselector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**Dimensionmembershipselectortype**](dimensionmembershipselectortype) |  | [optional] 
**Criteria** | Pointer to [**NullableDimensioncriterialevel1**](dimensioncriterialevel1) |  | [optional] 

## Methods

### NewDimensionmembershipselector

`func NewDimensionmembershipselector() *Dimensionmembershipselector`

NewDimensionmembershipselector instantiates a new Dimensionmembershipselector object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensionmembershipselectorWithDefaults

`func NewDimensionmembershipselectorWithDefaults() *Dimensionmembershipselector`

NewDimensionmembershipselectorWithDefaults instantiates a new Dimensionmembershipselector object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Dimensionmembershipselector) GetType() Dimensionmembershipselectortype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Dimensionmembershipselector) GetTypeOk() (*Dimensionmembershipselectortype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Dimensionmembershipselector) SetType(v Dimensionmembershipselectortype)`

SetType sets Type field to given value.

### HasType

`func (o *Dimensionmembershipselector) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCriteria

`func (o *Dimensionmembershipselector) GetCriteria() Dimensioncriterialevel1`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *Dimensionmembershipselector) GetCriteriaOk() (*Dimensioncriterialevel1, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *Dimensionmembershipselector) SetCriteria(v Dimensioncriterialevel1)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *Dimensionmembershipselector) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### SetCriteriaNil

`func (o *Dimensionmembershipselector) SetCriteriaNil(b bool)`

 SetCriteriaNil sets the value for Criteria to be an explicit nil

### UnsetCriteria
`func (o *Dimensionmembershipselector) UnsetCriteria()`

UnsetCriteria ensures that no value is present for Criteria, not even an explicit nil

