---
id: v1-roleinsightssummary
title: Roleinsightssummary
pagination_label: Roleinsightssummary
sidebar_label: Roleinsightssummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleinsightssummary', 'V1Roleinsightssummary'] 
slug: /tools/sdk/go/roleinsights/models/roleinsightssummary
tags: ['SDK', 'Software Development Kit', 'Roleinsightssummary', 'V1Roleinsightssummary']
---

# Roleinsightssummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NumberOfUpdates** | Pointer to **int32** | Total number of roles with updates | [optional] 
**LastGenerated** | Pointer to **SailPointTime** | The date-time role insights were last found. | [optional] 
**EntitlementsIncludedInRoles** | Pointer to **int32** | The number of entitlements included in roles (vs free radicals). | [optional] 
**TotalNumberOfEntitlements** | Pointer to **int32** | The total number of entitlements. | [optional] 
**IdentitiesWithAccessViaRoles** | Pointer to **int32** | The number of identities in roles vs. identities with just entitlements and not in roles. | [optional] 
**TotalNumberOfIdentities** | Pointer to **int32** | The total number of identities. | [optional] 

## Methods

### NewRoleinsightssummary

`func NewRoleinsightssummary() *Roleinsightssummary`

NewRoleinsightssummary instantiates a new Roleinsightssummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleinsightssummaryWithDefaults

`func NewRoleinsightssummaryWithDefaults() *Roleinsightssummary`

NewRoleinsightssummaryWithDefaults instantiates a new Roleinsightssummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNumberOfUpdates

`func (o *Roleinsightssummary) GetNumberOfUpdates() int32`

GetNumberOfUpdates returns the NumberOfUpdates field if non-nil, zero value otherwise.

### GetNumberOfUpdatesOk

`func (o *Roleinsightssummary) GetNumberOfUpdatesOk() (*int32, bool)`

GetNumberOfUpdatesOk returns a tuple with the NumberOfUpdates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfUpdates

`func (o *Roleinsightssummary) SetNumberOfUpdates(v int32)`

SetNumberOfUpdates sets NumberOfUpdates field to given value.

### HasNumberOfUpdates

`func (o *Roleinsightssummary) HasNumberOfUpdates() bool`

HasNumberOfUpdates returns a boolean if a field has been set.

### GetLastGenerated

`func (o *Roleinsightssummary) GetLastGenerated() SailPointTime`

GetLastGenerated returns the LastGenerated field if non-nil, zero value otherwise.

### GetLastGeneratedOk

`func (o *Roleinsightssummary) GetLastGeneratedOk() (*SailPointTime, bool)`

GetLastGeneratedOk returns a tuple with the LastGenerated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastGenerated

`func (o *Roleinsightssummary) SetLastGenerated(v SailPointTime)`

SetLastGenerated sets LastGenerated field to given value.

### HasLastGenerated

`func (o *Roleinsightssummary) HasLastGenerated() bool`

HasLastGenerated returns a boolean if a field has been set.

### GetEntitlementsIncludedInRoles

`func (o *Roleinsightssummary) GetEntitlementsIncludedInRoles() int32`

GetEntitlementsIncludedInRoles returns the EntitlementsIncludedInRoles field if non-nil, zero value otherwise.

### GetEntitlementsIncludedInRolesOk

`func (o *Roleinsightssummary) GetEntitlementsIncludedInRolesOk() (*int32, bool)`

GetEntitlementsIncludedInRolesOk returns a tuple with the EntitlementsIncludedInRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementsIncludedInRoles

`func (o *Roleinsightssummary) SetEntitlementsIncludedInRoles(v int32)`

SetEntitlementsIncludedInRoles sets EntitlementsIncludedInRoles field to given value.

### HasEntitlementsIncludedInRoles

`func (o *Roleinsightssummary) HasEntitlementsIncludedInRoles() bool`

HasEntitlementsIncludedInRoles returns a boolean if a field has been set.

### GetTotalNumberOfEntitlements

`func (o *Roleinsightssummary) GetTotalNumberOfEntitlements() int32`

GetTotalNumberOfEntitlements returns the TotalNumberOfEntitlements field if non-nil, zero value otherwise.

### GetTotalNumberOfEntitlementsOk

`func (o *Roleinsightssummary) GetTotalNumberOfEntitlementsOk() (*int32, bool)`

GetTotalNumberOfEntitlementsOk returns a tuple with the TotalNumberOfEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalNumberOfEntitlements

`func (o *Roleinsightssummary) SetTotalNumberOfEntitlements(v int32)`

SetTotalNumberOfEntitlements sets TotalNumberOfEntitlements field to given value.

### HasTotalNumberOfEntitlements

`func (o *Roleinsightssummary) HasTotalNumberOfEntitlements() bool`

HasTotalNumberOfEntitlements returns a boolean if a field has been set.

### GetIdentitiesWithAccessViaRoles

`func (o *Roleinsightssummary) GetIdentitiesWithAccessViaRoles() int32`

GetIdentitiesWithAccessViaRoles returns the IdentitiesWithAccessViaRoles field if non-nil, zero value otherwise.

### GetIdentitiesWithAccessViaRolesOk

`func (o *Roleinsightssummary) GetIdentitiesWithAccessViaRolesOk() (*int32, bool)`

GetIdentitiesWithAccessViaRolesOk returns a tuple with the IdentitiesWithAccessViaRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentitiesWithAccessViaRoles

`func (o *Roleinsightssummary) SetIdentitiesWithAccessViaRoles(v int32)`

SetIdentitiesWithAccessViaRoles sets IdentitiesWithAccessViaRoles field to given value.

### HasIdentitiesWithAccessViaRoles

`func (o *Roleinsightssummary) HasIdentitiesWithAccessViaRoles() bool`

HasIdentitiesWithAccessViaRoles returns a boolean if a field has been set.

### GetTotalNumberOfIdentities

`func (o *Roleinsightssummary) GetTotalNumberOfIdentities() int32`

GetTotalNumberOfIdentities returns the TotalNumberOfIdentities field if non-nil, zero value otherwise.

### GetTotalNumberOfIdentitiesOk

`func (o *Roleinsightssummary) GetTotalNumberOfIdentitiesOk() (*int32, bool)`

GetTotalNumberOfIdentitiesOk returns a tuple with the TotalNumberOfIdentities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalNumberOfIdentities

`func (o *Roleinsightssummary) SetTotalNumberOfIdentities(v int32)`

SetTotalNumberOfIdentities sets TotalNumberOfIdentities field to given value.

### HasTotalNumberOfIdentities

`func (o *Roleinsightssummary) HasTotalNumberOfIdentities() bool`

HasTotalNumberOfIdentities returns a boolean if a field has been set.


