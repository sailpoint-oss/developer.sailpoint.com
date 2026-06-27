---
id: v1-rolelistfilterdto
title: Rolelistfilterdto
pagination_label: Rolelistfilterdto
sidebar_label: Rolelistfilterdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Rolelistfilterdto', 'V1Rolelistfilterdto'] 
slug: /tools/sdk/go/roles/models/rolelistfilterdto
tags: ['SDK', 'Software Development Kit', 'Rolelistfilterdto', 'V1Rolelistfilterdto']
---

# Rolelistfilterdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | Pointer to **NullableString** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq* | [optional] 
**AmmKeyValues** | Pointer to [**[]RolelistfilterdtoAmmKeyValuesInner**](rolelistfilterdto-amm-key-values-inner) |  | [optional] 

## Methods

### NewRolelistfilterdto

`func NewRolelistfilterdto() *Rolelistfilterdto`

NewRolelistfilterdto instantiates a new Rolelistfilterdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolelistfilterdtoWithDefaults

`func NewRolelistfilterdtoWithDefaults() *Rolelistfilterdto`

NewRolelistfilterdtoWithDefaults instantiates a new Rolelistfilterdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFilters

`func (o *Rolelistfilterdto) GetFilters() string`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *Rolelistfilterdto) GetFiltersOk() (*string, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *Rolelistfilterdto) SetFilters(v string)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *Rolelistfilterdto) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### SetFiltersNil

`func (o *Rolelistfilterdto) SetFiltersNil(b bool)`

 SetFiltersNil sets the value for Filters to be an explicit nil

### UnsetFilters
`func (o *Rolelistfilterdto) UnsetFilters()`

UnsetFilters ensures that no value is present for Filters, not even an explicit nil
### GetAmmKeyValues

`func (o *Rolelistfilterdto) GetAmmKeyValues() []RolelistfilterdtoAmmKeyValuesInner`

GetAmmKeyValues returns the AmmKeyValues field if non-nil, zero value otherwise.

### GetAmmKeyValuesOk

`func (o *Rolelistfilterdto) GetAmmKeyValuesOk() (*[]RolelistfilterdtoAmmKeyValuesInner, bool)`

GetAmmKeyValuesOk returns a tuple with the AmmKeyValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmmKeyValues

`func (o *Rolelistfilterdto) SetAmmKeyValues(v []RolelistfilterdtoAmmKeyValuesInner)`

SetAmmKeyValues sets AmmKeyValues field to given value.

### HasAmmKeyValues

`func (o *Rolelistfilterdto) HasAmmKeyValues() bool`

HasAmmKeyValues returns a boolean if a field has been set.

### SetAmmKeyValuesNil

`func (o *Rolelistfilterdto) SetAmmKeyValuesNil(b bool)`

 SetAmmKeyValuesNil sets the value for AmmKeyValues to be an explicit nil

### UnsetAmmKeyValues
`func (o *Rolelistfilterdto) UnsetAmmKeyValues()`

UnsetAmmKeyValues ensures that no value is present for AmmKeyValues, not even an explicit nil

