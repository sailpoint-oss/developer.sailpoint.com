---
id: v1-roleminingentitlement
title: Roleminingentitlement
pagination_label: Roleminingentitlement
sidebar_label: Roleminingentitlement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleminingentitlement', 'V1Roleminingentitlement'] 
slug: /tools/sdk/go/iairolemining/models/roleminingentitlement
tags: ['SDK', 'Software Development Kit', 'Roleminingentitlement', 'V1Roleminingentitlement']
---

# Roleminingentitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementRef** | Pointer to [**Roleminingentitlementref**](roleminingentitlementref) |  | [optional] 
**Name** | Pointer to **string** | Name of the entitlement | [optional] 
**ApplicationName** | Pointer to **string** | Application name of the entitlement | [optional] 
**IdentityCount** | Pointer to **int32** | The number of identities with this entitlement in a role. | [optional] 
**Popularity** | Pointer to **float32** | The % popularity of this entitlement in a role. | [optional] 
**PopularityInOrg** | Pointer to **float32** | The % popularity of this entitlement in the org. | [optional] 
**SourceId** | Pointer to **string** | The ID of the source/application. | [optional] 
**ActivitySourceState** | Pointer to **NullableString** | The status of activity data for the source.   Value is complete or notComplete. | [optional] 
**SourceUsagePercent** | Pointer to **NullableFloat32** | The percentage of identities in the potential role that have usage of the source/application of this entitlement. | [optional] 

## Methods

### NewRoleminingentitlement

`func NewRoleminingentitlement() *Roleminingentitlement`

NewRoleminingentitlement instantiates a new Roleminingentitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingentitlementWithDefaults

`func NewRoleminingentitlementWithDefaults() *Roleminingentitlement`

NewRoleminingentitlementWithDefaults instantiates a new Roleminingentitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitlementRef

`func (o *Roleminingentitlement) GetEntitlementRef() Roleminingentitlementref`

GetEntitlementRef returns the EntitlementRef field if non-nil, zero value otherwise.

### GetEntitlementRefOk

`func (o *Roleminingentitlement) GetEntitlementRefOk() (*Roleminingentitlementref, bool)`

GetEntitlementRefOk returns a tuple with the EntitlementRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementRef

`func (o *Roleminingentitlement) SetEntitlementRef(v Roleminingentitlementref)`

SetEntitlementRef sets EntitlementRef field to given value.

### HasEntitlementRef

`func (o *Roleminingentitlement) HasEntitlementRef() bool`

HasEntitlementRef returns a boolean if a field has been set.

### GetName

`func (o *Roleminingentitlement) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Roleminingentitlement) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Roleminingentitlement) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Roleminingentitlement) HasName() bool`

HasName returns a boolean if a field has been set.

### GetApplicationName

`func (o *Roleminingentitlement) GetApplicationName() string`

GetApplicationName returns the ApplicationName field if non-nil, zero value otherwise.

### GetApplicationNameOk

`func (o *Roleminingentitlement) GetApplicationNameOk() (*string, bool)`

GetApplicationNameOk returns a tuple with the ApplicationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationName

`func (o *Roleminingentitlement) SetApplicationName(v string)`

SetApplicationName sets ApplicationName field to given value.

### HasApplicationName

`func (o *Roleminingentitlement) HasApplicationName() bool`

HasApplicationName returns a boolean if a field has been set.

### GetIdentityCount

`func (o *Roleminingentitlement) GetIdentityCount() int32`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *Roleminingentitlement) GetIdentityCountOk() (*int32, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *Roleminingentitlement) SetIdentityCount(v int32)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *Roleminingentitlement) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.

### GetPopularity

`func (o *Roleminingentitlement) GetPopularity() float32`

GetPopularity returns the Popularity field if non-nil, zero value otherwise.

### GetPopularityOk

`func (o *Roleminingentitlement) GetPopularityOk() (*float32, bool)`

GetPopularityOk returns a tuple with the Popularity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPopularity

`func (o *Roleminingentitlement) SetPopularity(v float32)`

SetPopularity sets Popularity field to given value.

### HasPopularity

`func (o *Roleminingentitlement) HasPopularity() bool`

HasPopularity returns a boolean if a field has been set.

### GetPopularityInOrg

`func (o *Roleminingentitlement) GetPopularityInOrg() float32`

GetPopularityInOrg returns the PopularityInOrg field if non-nil, zero value otherwise.

### GetPopularityInOrgOk

`func (o *Roleminingentitlement) GetPopularityInOrgOk() (*float32, bool)`

GetPopularityInOrgOk returns a tuple with the PopularityInOrg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPopularityInOrg

`func (o *Roleminingentitlement) SetPopularityInOrg(v float32)`

SetPopularityInOrg sets PopularityInOrg field to given value.

### HasPopularityInOrg

`func (o *Roleminingentitlement) HasPopularityInOrg() bool`

HasPopularityInOrg returns a boolean if a field has been set.

### GetSourceId

`func (o *Roleminingentitlement) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Roleminingentitlement) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Roleminingentitlement) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Roleminingentitlement) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetActivitySourceState

`func (o *Roleminingentitlement) GetActivitySourceState() string`

GetActivitySourceState returns the ActivitySourceState field if non-nil, zero value otherwise.

### GetActivitySourceStateOk

`func (o *Roleminingentitlement) GetActivitySourceStateOk() (*string, bool)`

GetActivitySourceStateOk returns a tuple with the ActivitySourceState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivitySourceState

`func (o *Roleminingentitlement) SetActivitySourceState(v string)`

SetActivitySourceState sets ActivitySourceState field to given value.

### HasActivitySourceState

`func (o *Roleminingentitlement) HasActivitySourceState() bool`

HasActivitySourceState returns a boolean if a field has been set.

### SetActivitySourceStateNil

`func (o *Roleminingentitlement) SetActivitySourceStateNil(b bool)`

 SetActivitySourceStateNil sets the value for ActivitySourceState to be an explicit nil

### UnsetActivitySourceState
`func (o *Roleminingentitlement) UnsetActivitySourceState()`

UnsetActivitySourceState ensures that no value is present for ActivitySourceState, not even an explicit nil
### GetSourceUsagePercent

`func (o *Roleminingentitlement) GetSourceUsagePercent() float32`

GetSourceUsagePercent returns the SourceUsagePercent field if non-nil, zero value otherwise.

### GetSourceUsagePercentOk

`func (o *Roleminingentitlement) GetSourceUsagePercentOk() (*float32, bool)`

GetSourceUsagePercentOk returns a tuple with the SourceUsagePercent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceUsagePercent

`func (o *Roleminingentitlement) SetSourceUsagePercent(v float32)`

SetSourceUsagePercent sets SourceUsagePercent field to given value.

### HasSourceUsagePercent

`func (o *Roleminingentitlement) HasSourceUsagePercent() bool`

HasSourceUsagePercent returns a boolean if a field has been set.

### SetSourceUsagePercentNil

`func (o *Roleminingentitlement) SetSourceUsagePercentNil(b bool)`

 SetSourceUsagePercentNil sets the value for SourceUsagePercent to be an explicit nil

### UnsetSourceUsagePercent
`func (o *Roleminingentitlement) UnsetSourceUsagePercent()`

UnsetSourceUsagePercent ensures that no value is present for SourceUsagePercent, not even an explicit nil

