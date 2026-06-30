---
id: v1-roleminingsessionscope
title: Roleminingsessionscope
pagination_label: Roleminingsessionscope
sidebar_label: Roleminingsessionscope
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleminingsessionscope', 'V1Roleminingsessionscope'] 
slug: /tools/sdk/go/iairolemining/models/roleminingsessionscope
tags: ['SDK', 'Software Development Kit', 'Roleminingsessionscope', 'V1Roleminingsessionscope']
---

# Roleminingsessionscope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityIds** | Pointer to **[]string** | The list of identities for this role mining session. | [optional] 
**Criteria** | Pointer to **NullableString** | The \"search\" criteria that produces the list of identities for this role mining session. | [optional] 
**AttributeFilterCriteria** | Pointer to **[]map[string]interface{}** | The filter criteria for this role mining session. | [optional] 

## Methods

### NewRoleminingsessionscope

`func NewRoleminingsessionscope() *Roleminingsessionscope`

NewRoleminingsessionscope instantiates a new Roleminingsessionscope object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingsessionscopeWithDefaults

`func NewRoleminingsessionscopeWithDefaults() *Roleminingsessionscope`

NewRoleminingsessionscopeWithDefaults instantiates a new Roleminingsessionscope object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityIds

`func (o *Roleminingsessionscope) GetIdentityIds() []string`

GetIdentityIds returns the IdentityIds field if non-nil, zero value otherwise.

### GetIdentityIdsOk

`func (o *Roleminingsessionscope) GetIdentityIdsOk() (*[]string, bool)`

GetIdentityIdsOk returns a tuple with the IdentityIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityIds

`func (o *Roleminingsessionscope) SetIdentityIds(v []string)`

SetIdentityIds sets IdentityIds field to given value.

### HasIdentityIds

`func (o *Roleminingsessionscope) HasIdentityIds() bool`

HasIdentityIds returns a boolean if a field has been set.

### GetCriteria

`func (o *Roleminingsessionscope) GetCriteria() string`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *Roleminingsessionscope) GetCriteriaOk() (*string, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *Roleminingsessionscope) SetCriteria(v string)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *Roleminingsessionscope) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### SetCriteriaNil

`func (o *Roleminingsessionscope) SetCriteriaNil(b bool)`

 SetCriteriaNil sets the value for Criteria to be an explicit nil

### UnsetCriteria
`func (o *Roleminingsessionscope) UnsetCriteria()`

UnsetCriteria ensures that no value is present for Criteria, not even an explicit nil
### GetAttributeFilterCriteria

`func (o *Roleminingsessionscope) GetAttributeFilterCriteria() []map[string]interface{}`

GetAttributeFilterCriteria returns the AttributeFilterCriteria field if non-nil, zero value otherwise.

### GetAttributeFilterCriteriaOk

`func (o *Roleminingsessionscope) GetAttributeFilterCriteriaOk() (*[]map[string]interface{}, bool)`

GetAttributeFilterCriteriaOk returns a tuple with the AttributeFilterCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeFilterCriteria

`func (o *Roleminingsessionscope) SetAttributeFilterCriteria(v []map[string]interface{})`

SetAttributeFilterCriteria sets AttributeFilterCriteria field to given value.

### HasAttributeFilterCriteria

`func (o *Roleminingsessionscope) HasAttributeFilterCriteria() bool`

HasAttributeFilterCriteria returns a boolean if a field has been set.

### SetAttributeFilterCriteriaNil

`func (o *Roleminingsessionscope) SetAttributeFilterCriteriaNil(b bool)`

 SetAttributeFilterCriteriaNil sets the value for AttributeFilterCriteria to be an explicit nil

### UnsetAttributeFilterCriteria
`func (o *Roleminingsessionscope) UnsetAttributeFilterCriteria()`

UnsetAttributeFilterCriteria ensures that no value is present for AttributeFilterCriteria, not even an explicit nil

