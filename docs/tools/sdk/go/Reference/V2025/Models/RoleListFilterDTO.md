---
id: role-list-filter-dto
title: RoleListFilterDTO
pagination_label: RoleListFilterDTO
sidebar_label: RoleListFilterDTO
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleListFilterDTO', 'RoleListFilterDTO'] 
slug: /tools/sdk/go//models/role-list-filter-dto
tags: ['SDK', 'Software Development Kit', 'RoleListFilterDTO', 'RoleListFilterDTO']
---

# RoleListFilterDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | Pointer to **NullableString** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **requestable**: *eq* | [optional] 
**AmmKeyValues** | Pointer to [**[]RoleListFilterDTOAmmKeyValuesInner**](role-list-filter-dto-amm-key-values-inner) |  | [optional] 

## Methods

### NewRoleListFilterDTO

`func NewRoleListFilterDTO() *RoleListFilterDTO`

NewRoleListFilterDTO instantiates a new RoleListFilterDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleListFilterDTOWithDefaults

`func NewRoleListFilterDTOWithDefaults() *RoleListFilterDTO`

NewRoleListFilterDTOWithDefaults instantiates a new RoleListFilterDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFilters

`func (o *RoleListFilterDTO) GetFilters() string`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *RoleListFilterDTO) GetFiltersOk() (*string, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *RoleListFilterDTO) SetFilters(v string)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *RoleListFilterDTO) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### SetFiltersNil

`func (o *RoleListFilterDTO) SetFiltersNil(b bool)`

 SetFiltersNil sets the value for Filters to be an explicit nil

### UnsetFilters
`func (o *RoleListFilterDTO) UnsetFilters()`

UnsetFilters ensures that no value is present for Filters, not even an explicit nil
### GetAmmKeyValues

`func (o *RoleListFilterDTO) GetAmmKeyValues() []RoleListFilterDTOAmmKeyValuesInner`

GetAmmKeyValues returns the AmmKeyValues field if non-nil, zero value otherwise.

### GetAmmKeyValuesOk

`func (o *RoleListFilterDTO) GetAmmKeyValuesOk() (*[]RoleListFilterDTOAmmKeyValuesInner, bool)`

GetAmmKeyValuesOk returns a tuple with the AmmKeyValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmmKeyValues

`func (o *RoleListFilterDTO) SetAmmKeyValues(v []RoleListFilterDTOAmmKeyValuesInner)`

SetAmmKeyValues sets AmmKeyValues field to given value.

### HasAmmKeyValues

`func (o *RoleListFilterDTO) HasAmmKeyValues() bool`

HasAmmKeyValues returns a boolean if a field has been set.

### SetAmmKeyValuesNil

`func (o *RoleListFilterDTO) SetAmmKeyValuesNil(b bool)`

 SetAmmKeyValuesNil sets the value for AmmKeyValues to be an explicit nil

### UnsetAmmKeyValues
`func (o *RoleListFilterDTO) UnsetAmmKeyValues()`

UnsetAmmKeyValues ensures that no value is present for AmmKeyValues, not even an explicit nil

