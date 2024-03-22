---
id: role-mining-entitlement
title: RoleMiningEntitlement
pagination_label: RoleMiningEntitlement
sidebar_label: RoleMiningEntitlement
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'RoleMiningEntitlement'] 
slug: /tools/sdk/go/beta/models/role-mining-entitlement
tags: ['SDK', 'Software Development Kit', 'RoleMiningEntitlement']
---

# RoleMiningEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementRef** |  Pointer to [**RoleMiningEntitlementRef**](role-mining-entitlement-ref) |  | [optional] 
**Name** |  Pointer to **string** | Name of the entitlement | [optional] 
**ApplicationName** |  Pointer to **string** | Application name of the entitlement | [optional] 
**IdentityCount** |  Pointer to **int32** | The number of identities with this entitlement in a role. | [optional] 
**Popularity** |  Pointer to **float32** | The % popularity of this entitlement in a role. | [optional] 
**PopularityInOrg** |  Pointer to **float32** | The % popularity of this entitlement in the org. | [optional] 
**SourceId** |  Pointer to **string** | The ID of the source/application. | [optional] 
**ActivitySourceState** |  Pointer to **NullableString** | The status of activity data for the source.   Value is complete or notComplete. | [optional] 
**SourceUsagePercent** |  Pointer to **NullableFloat32** | The percentage of identities in the potential role that have usage of the source/application of this entitlement. | [optional] 

## Methods

### NewRoleMiningEntitlement

`func NewRoleMiningEntitlement() *RoleMiningEntitlement`

NewRoleMiningEntitlement instantiates a new RoleMiningEntitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMiningEntitlementWithDefaults

`func NewRoleMiningEntitlementWithDefaults() *RoleMiningEntitlement`

NewRoleMiningEntitlementWithDefaults instantiates a new RoleMiningEntitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlementRef

`func (o *RoleMiningEntitlement) GetEntitlementRef() RoleMiningEntitlementRef`

GetEntitlementRef returns the EntitlementRef field if non-nil, zero value otherwise.

### GetEntitlementRefOk

`func (o *RoleMiningEntitlement) GetEntitlementRefOk() (*RoleMiningEntitlementRef, bool)`

GetEntitlementRefOk returns a tuple with the EntitlementRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementRef

`func (o *RoleMiningEntitlement) SetEntitlementRef(v RoleMiningEntitlementRef)`

SetEntitlementRef sets EntitlementRef field to given value.

### HasEntitlementRef

`func (o *RoleMiningEntitlement) HasEntitlementRef() bool`

HasEntitlementRef returns a boolean if a field has been set.

### GetName

`func (o *RoleMiningEntitlement) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleMiningEntitlement) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleMiningEntitlement) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleMiningEntitlement) HasName() bool`

HasName returns a boolean if a field has been set.

### GetApplicationName

`func (o *RoleMiningEntitlement) GetApplicationName() string`

GetApplicationName returns the ApplicationName field if non-nil, zero value otherwise.

### GetApplicationNameOk

`func (o *RoleMiningEntitlement) GetApplicationNameOk() (*string, bool)`

GetApplicationNameOk returns a tuple with the ApplicationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationName

`func (o *RoleMiningEntitlement) SetApplicationName(v string)`

SetApplicationName sets ApplicationName field to given value.

### HasApplicationName

`func (o *RoleMiningEntitlement) HasApplicationName() bool`

HasApplicationName returns a boolean if a field has been set.

### GetIdentityCount

`func (o *RoleMiningEntitlement) GetIdentityCount() int32`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *RoleMiningEntitlement) GetIdentityCountOk() (*int32, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *RoleMiningEntitlement) SetIdentityCount(v int32)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *RoleMiningEntitlement) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.

### GetPopularity

`func (o *RoleMiningEntitlement) GetPopularity() float32`

GetPopularity returns the Popularity field if non-nil, zero value otherwise.

### GetPopularityOk

`func (o *RoleMiningEntitlement) GetPopularityOk() (*float32, bool)`

GetPopularityOk returns a tuple with the Popularity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPopularity

`func (o *RoleMiningEntitlement) SetPopularity(v float32)`

SetPopularity sets Popularity field to given value.

### HasPopularity

`func (o *RoleMiningEntitlement) HasPopularity() bool`

HasPopularity returns a boolean if a field has been set.

### GetPopularityInOrg

`func (o *RoleMiningEntitlement) GetPopularityInOrg() float32`

GetPopularityInOrg returns the PopularityInOrg field if non-nil, zero value otherwise.

### GetPopularityInOrgOk

`func (o *RoleMiningEntitlement) GetPopularityInOrgOk() (*float32, bool)`

GetPopularityInOrgOk returns a tuple with the PopularityInOrg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPopularityInOrg

`func (o *RoleMiningEntitlement) SetPopularityInOrg(v float32)`

SetPopularityInOrg sets PopularityInOrg field to given value.

### HasPopularityInOrg

`func (o *RoleMiningEntitlement) HasPopularityInOrg() bool`

HasPopularityInOrg returns a boolean if a field has been set.

### GetSourceId

`func (o *RoleMiningEntitlement) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *RoleMiningEntitlement) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *RoleMiningEntitlement) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *RoleMiningEntitlement) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetActivitySourceState

`func (o *RoleMiningEntitlement) GetActivitySourceState() string`

GetActivitySourceState returns the ActivitySourceState field if non-nil, zero value otherwise.

### GetActivitySourceStateOk

`func (o *RoleMiningEntitlement) GetActivitySourceStateOk() (*string, bool)`

GetActivitySourceStateOk returns a tuple with the ActivitySourceState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivitySourceState

`func (o *RoleMiningEntitlement) SetActivitySourceState(v string)`

SetActivitySourceState sets ActivitySourceState field to given value.

### HasActivitySourceState

`func (o *RoleMiningEntitlement) HasActivitySourceState() bool`

HasActivitySourceState returns a boolean if a field has been set.

### SetActivitySourceStateNil

`func (o *RoleMiningEntitlement) SetActivitySourceStateNil(b bool)`

 SetActivitySourceStateNil sets the value for ActivitySourceState to be an explicit nil

### UnsetActivitySourceState
`func (o *RoleMiningEntitlement) UnsetActivitySourceState()`

UnsetActivitySourceState ensures that no value is present for ActivitySourceState, not even an explicit nil
### GetSourceUsagePercent

`func (o *RoleMiningEntitlement) GetSourceUsagePercent() float32`

GetSourceUsagePercent returns the SourceUsagePercent field if non-nil, zero value otherwise.

### GetSourceUsagePercentOk

`func (o *RoleMiningEntitlement) GetSourceUsagePercentOk() (*float32, bool)`

GetSourceUsagePercentOk returns a tuple with the SourceUsagePercent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceUsagePercent

`func (o *RoleMiningEntitlement) SetSourceUsagePercent(v float32)`

SetSourceUsagePercent sets SourceUsagePercent field to given value.

### HasSourceUsagePercent

`func (o *RoleMiningEntitlement) HasSourceUsagePercent() bool`

HasSourceUsagePercent returns a boolean if a field has been set.

### SetSourceUsagePercentNil

`func (o *RoleMiningEntitlement) SetSourceUsagePercentNil(b bool)`

 SetSourceUsagePercentNil sets the value for SourceUsagePercent to be an explicit nil

### UnsetSourceUsagePercent
`func (o *RoleMiningEntitlement) UnsetSourceUsagePercent()`

UnsetSourceUsagePercent ensures that no value is present for SourceUsagePercent, not even an explicit nil

[[Back to top]](#) 


