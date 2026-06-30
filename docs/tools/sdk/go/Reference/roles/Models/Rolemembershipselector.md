---
id: v1-rolemembershipselector
title: Rolemembershipselector
pagination_label: Rolemembershipselector
sidebar_label: Rolemembershipselector
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Rolemembershipselector', 'V1Rolemembershipselector'] 
slug: /tools/sdk/go/roles/models/rolemembershipselector
tags: ['SDK', 'Software Development Kit', 'Rolemembershipselector', 'V1Rolemembershipselector']
---

# Rolemembershipselector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**Rolemembershipselectortype**](rolemembershipselectortype) |  | [optional] 
**Criteria** | Pointer to [**NullableRolecriterialevel1**](rolecriterialevel1) |  | [optional] 
**Identities** | Pointer to [**[]Rolemembershipidentity**](rolemembershipidentity) | Defines role membership as being exclusive to the specified Identities, when type is IDENTITY_LIST. | [optional] 

## Methods

### NewRolemembershipselector

`func NewRolemembershipselector() *Rolemembershipselector`

NewRolemembershipselector instantiates a new Rolemembershipselector object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolemembershipselectorWithDefaults

`func NewRolemembershipselectorWithDefaults() *Rolemembershipselector`

NewRolemembershipselectorWithDefaults instantiates a new Rolemembershipselector object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Rolemembershipselector) GetType() Rolemembershipselectortype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Rolemembershipselector) GetTypeOk() (*Rolemembershipselectortype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Rolemembershipselector) SetType(v Rolemembershipselectortype)`

SetType sets Type field to given value.

### HasType

`func (o *Rolemembershipselector) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCriteria

`func (o *Rolemembershipselector) GetCriteria() Rolecriterialevel1`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *Rolemembershipselector) GetCriteriaOk() (*Rolecriterialevel1, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *Rolemembershipselector) SetCriteria(v Rolecriterialevel1)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *Rolemembershipselector) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### SetCriteriaNil

`func (o *Rolemembershipselector) SetCriteriaNil(b bool)`

 SetCriteriaNil sets the value for Criteria to be an explicit nil

### UnsetCriteria
`func (o *Rolemembershipselector) UnsetCriteria()`

UnsetCriteria ensures that no value is present for Criteria, not even an explicit nil
### GetIdentities

`func (o *Rolemembershipselector) GetIdentities() []Rolemembershipidentity`

GetIdentities returns the Identities field if non-nil, zero value otherwise.

### GetIdentitiesOk

`func (o *Rolemembershipselector) GetIdentitiesOk() (*[]Rolemembershipidentity, bool)`

GetIdentitiesOk returns a tuple with the Identities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentities

`func (o *Rolemembershipselector) SetIdentities(v []Rolemembershipidentity)`

SetIdentities sets Identities field to given value.

### HasIdentities

`func (o *Rolemembershipselector) HasIdentities() bool`

HasIdentities returns a boolean if a field has been set.

### SetIdentitiesNil

`func (o *Rolemembershipselector) SetIdentitiesNil(b bool)`

 SetIdentitiesNil sets the value for Identities to be an explicit nil

### UnsetIdentities
`func (o *Rolemembershipselector) UnsetIdentities()`

UnsetIdentities ensures that no value is present for Identities, not even an explicit nil

