---
id: role-insights-insight
title: RoleInsightsInsight
pagination_label: RoleInsightsInsight
sidebar_label: RoleInsightsInsight
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'RoleInsightsInsight'] 
slug: /tools/sdk/go/beta/models/role-insights-insight
tags: ['SDK', 'Software Development Kit', 'RoleInsightsInsight']
---

# RoleInsightsInsight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **string** | The number of identities in this role with the entitlement. | [optional] 
**IdentitiesWithAccess** |  Pointer to **int32** | The number of identities in this role with the entitlement. | [optional] 
**IdentitiesImpacted** |  Pointer to **int32** | The number of identities in this role that do not have the specified entitlement. | [optional] 
**TotalNumberOfIdentities** |  Pointer to **int32** | The total number of identities. | [optional] 

## Methods

### NewRoleInsightsInsight

`func NewRoleInsightsInsight() *RoleInsightsInsight`

NewRoleInsightsInsight instantiates a new RoleInsightsInsight object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleInsightsInsightWithDefaults

`func NewRoleInsightsInsightWithDefaults() *RoleInsightsInsight`

NewRoleInsightsInsightWithDefaults instantiates a new RoleInsightsInsight object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *RoleInsightsInsight) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoleInsightsInsight) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoleInsightsInsight) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoleInsightsInsight) HasType() bool`

HasType returns a boolean if a field has been set.

### GetIdentitiesWithAccess

`func (o *RoleInsightsInsight) GetIdentitiesWithAccess() int32`

GetIdentitiesWithAccess returns the IdentitiesWithAccess field if non-nil, zero value otherwise.

### GetIdentitiesWithAccessOk

`func (o *RoleInsightsInsight) GetIdentitiesWithAccessOk() (*int32, bool)`

GetIdentitiesWithAccessOk returns a tuple with the IdentitiesWithAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentitiesWithAccess

`func (o *RoleInsightsInsight) SetIdentitiesWithAccess(v int32)`

SetIdentitiesWithAccess sets IdentitiesWithAccess field to given value.

### HasIdentitiesWithAccess

`func (o *RoleInsightsInsight) HasIdentitiesWithAccess() bool`

HasIdentitiesWithAccess returns a boolean if a field has been set.

### GetIdentitiesImpacted

`func (o *RoleInsightsInsight) GetIdentitiesImpacted() int32`

GetIdentitiesImpacted returns the IdentitiesImpacted field if non-nil, zero value otherwise.

### GetIdentitiesImpactedOk

`func (o *RoleInsightsInsight) GetIdentitiesImpactedOk() (*int32, bool)`

GetIdentitiesImpactedOk returns a tuple with the IdentitiesImpacted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentitiesImpacted

`func (o *RoleInsightsInsight) SetIdentitiesImpacted(v int32)`

SetIdentitiesImpacted sets IdentitiesImpacted field to given value.

### HasIdentitiesImpacted

`func (o *RoleInsightsInsight) HasIdentitiesImpacted() bool`

HasIdentitiesImpacted returns a boolean if a field has been set.

### GetTotalNumberOfIdentities

`func (o *RoleInsightsInsight) GetTotalNumberOfIdentities() int32`

GetTotalNumberOfIdentities returns the TotalNumberOfIdentities field if non-nil, zero value otherwise.

### GetTotalNumberOfIdentitiesOk

`func (o *RoleInsightsInsight) GetTotalNumberOfIdentitiesOk() (*int32, bool)`

GetTotalNumberOfIdentitiesOk returns a tuple with the TotalNumberOfIdentities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalNumberOfIdentities

`func (o *RoleInsightsInsight) SetTotalNumberOfIdentities(v int32)`

SetTotalNumberOfIdentities sets TotalNumberOfIdentities field to given value.

### HasTotalNumberOfIdentities

`func (o *RoleInsightsInsight) HasTotalNumberOfIdentities() bool`

HasTotalNumberOfIdentities returns a boolean if a field has been set.


[[Back to top]](#) 


