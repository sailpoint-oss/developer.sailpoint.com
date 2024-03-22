---
id: role-insights-summary
title: RoleInsightsSummary
pagination_label: RoleInsightsSummary
sidebar_label: RoleInsightsSummary
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'RoleInsightsSummary'] 
slug: /tools/sdk/go/beta/models/role-insights-summary
tags: ['SDK', 'Software Development Kit', 'RoleInsightsSummary']
---

# RoleInsightsSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NumberOfUpdates** |  Pointer to **int32** | Total number of roles with updates | [optional] 
**LastGenerated** |  Pointer to **time.Time** | The date-time role insights were last found. | [optional] 
**EntitlementsIncludedInRoles** |  Pointer to **int32** | The number of entitlements included in roles (vs free radicals). | [optional] 
**TotalNumberOfEntitlements** |  Pointer to **int32** | The total number of entitlements. | [optional] 
**IdentitiesWithAccessViaRoles** |  Pointer to **int32** | The number of identities in roles vs. identities with just entitlements and not in roles. | [optional] 
**TotalNumberOfIdentities** |  Pointer to **int32** | The total number of identities. | [optional] 

## Methods

### NewRoleInsightsSummary

`func NewRoleInsightsSummary() *RoleInsightsSummary`

NewRoleInsightsSummary instantiates a new RoleInsightsSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleInsightsSummaryWithDefaults

`func NewRoleInsightsSummaryWithDefaults() *RoleInsightsSummary`

NewRoleInsightsSummaryWithDefaults instantiates a new RoleInsightsSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNumberOfUpdates

`func (o *RoleInsightsSummary) GetNumberOfUpdates() int32`

GetNumberOfUpdates returns the NumberOfUpdates field if non-nil, zero value otherwise.

### GetNumberOfUpdatesOk

`func (o *RoleInsightsSummary) GetNumberOfUpdatesOk() (*int32, bool)`

GetNumberOfUpdatesOk returns a tuple with the NumberOfUpdates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfUpdates

`func (o *RoleInsightsSummary) SetNumberOfUpdates(v int32)`

SetNumberOfUpdates sets NumberOfUpdates field to given value.

### HasNumberOfUpdates

`func (o *RoleInsightsSummary) HasNumberOfUpdates() bool`

HasNumberOfUpdates returns a boolean if a field has been set.

### GetLastGenerated

`func (o *RoleInsightsSummary) GetLastGenerated() time.Time`

GetLastGenerated returns the LastGenerated field if non-nil, zero value otherwise.

### GetLastGeneratedOk

`func (o *RoleInsightsSummary) GetLastGeneratedOk() (*time.Time, bool)`

GetLastGeneratedOk returns a tuple with the LastGenerated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastGenerated

`func (o *RoleInsightsSummary) SetLastGenerated(v time.Time)`

SetLastGenerated sets LastGenerated field to given value.

### HasLastGenerated

`func (o *RoleInsightsSummary) HasLastGenerated() bool`

HasLastGenerated returns a boolean if a field has been set.

### GetEntitlementsIncludedInRoles

`func (o *RoleInsightsSummary) GetEntitlementsIncludedInRoles() int32`

GetEntitlementsIncludedInRoles returns the EntitlementsIncludedInRoles field if non-nil, zero value otherwise.

### GetEntitlementsIncludedInRolesOk

`func (o *RoleInsightsSummary) GetEntitlementsIncludedInRolesOk() (*int32, bool)`

GetEntitlementsIncludedInRolesOk returns a tuple with the EntitlementsIncludedInRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementsIncludedInRoles

`func (o *RoleInsightsSummary) SetEntitlementsIncludedInRoles(v int32)`

SetEntitlementsIncludedInRoles sets EntitlementsIncludedInRoles field to given value.

### HasEntitlementsIncludedInRoles

`func (o *RoleInsightsSummary) HasEntitlementsIncludedInRoles() bool`

HasEntitlementsIncludedInRoles returns a boolean if a field has been set.

### GetTotalNumberOfEntitlements

`func (o *RoleInsightsSummary) GetTotalNumberOfEntitlements() int32`

GetTotalNumberOfEntitlements returns the TotalNumberOfEntitlements field if non-nil, zero value otherwise.

### GetTotalNumberOfEntitlementsOk

`func (o *RoleInsightsSummary) GetTotalNumberOfEntitlementsOk() (*int32, bool)`

GetTotalNumberOfEntitlementsOk returns a tuple with the TotalNumberOfEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalNumberOfEntitlements

`func (o *RoleInsightsSummary) SetTotalNumberOfEntitlements(v int32)`

SetTotalNumberOfEntitlements sets TotalNumberOfEntitlements field to given value.

### HasTotalNumberOfEntitlements

`func (o *RoleInsightsSummary) HasTotalNumberOfEntitlements() bool`

HasTotalNumberOfEntitlements returns a boolean if a field has been set.

### GetIdentitiesWithAccessViaRoles

`func (o *RoleInsightsSummary) GetIdentitiesWithAccessViaRoles() int32`

GetIdentitiesWithAccessViaRoles returns the IdentitiesWithAccessViaRoles field if non-nil, zero value otherwise.

### GetIdentitiesWithAccessViaRolesOk

`func (o *RoleInsightsSummary) GetIdentitiesWithAccessViaRolesOk() (*int32, bool)`

GetIdentitiesWithAccessViaRolesOk returns a tuple with the IdentitiesWithAccessViaRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentitiesWithAccessViaRoles

`func (o *RoleInsightsSummary) SetIdentitiesWithAccessViaRoles(v int32)`

SetIdentitiesWithAccessViaRoles sets IdentitiesWithAccessViaRoles field to given value.

### HasIdentitiesWithAccessViaRoles

`func (o *RoleInsightsSummary) HasIdentitiesWithAccessViaRoles() bool`

HasIdentitiesWithAccessViaRoles returns a boolean if a field has been set.

### GetTotalNumberOfIdentities

`func (o *RoleInsightsSummary) GetTotalNumberOfIdentities() int32`

GetTotalNumberOfIdentities returns the TotalNumberOfIdentities field if non-nil, zero value otherwise.

### GetTotalNumberOfIdentitiesOk

`func (o *RoleInsightsSummary) GetTotalNumberOfIdentitiesOk() (*int32, bool)`

GetTotalNumberOfIdentitiesOk returns a tuple with the TotalNumberOfIdentities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalNumberOfIdentities

`func (o *RoleInsightsSummary) SetTotalNumberOfIdentities(v int32)`

SetTotalNumberOfIdentities sets TotalNumberOfIdentities field to given value.

### HasTotalNumberOfIdentities

`func (o *RoleInsightsSummary) HasTotalNumberOfIdentities() bool`

HasTotalNumberOfIdentities returns a boolean if a field has been set.


[[Back to top]](#) 


