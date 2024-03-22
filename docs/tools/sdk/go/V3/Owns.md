---
id: owns
title: Owns
pagination_label: Owns
sidebar_label: Owns
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Owns'] 
slug: /tools/sdk/go/v3/models/owns
tags: ['SDK', 'Software Development Kit', 'Owns']
---

# Owns

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Sources** |  Pointer to [**[]Reference**](reference) |  | [optional] 
**Entitlements** |  Pointer to [**[]Reference**](reference) |  | [optional] 
**AccessProfiles** |  Pointer to [**[]Reference**](reference) |  | [optional] 
**Roles** |  Pointer to [**[]Reference**](reference) |  | [optional] 
**Apps** |  Pointer to [**[]Reference**](reference) |  | [optional] 
**GovernanceGroups** |  Pointer to [**[]Reference**](reference) |  | [optional] 
**FallbackApprover** |  Pointer to **bool** |  | [optional] 

## Methods

### NewOwns

`func NewOwns() *Owns`

NewOwns instantiates a new Owns object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOwnsWithDefaults

`func NewOwnsWithDefaults() *Owns`

NewOwnsWithDefaults instantiates a new Owns object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSources

`func (o *Owns) GetSources() []Reference`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *Owns) GetSourcesOk() (*[]Reference, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *Owns) SetSources(v []Reference)`

SetSources sets Sources field to given value.

### HasSources

`func (o *Owns) HasSources() bool`

HasSources returns a boolean if a field has been set.

### GetEntitlements

`func (o *Owns) GetEntitlements() []Reference`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *Owns) GetEntitlementsOk() (*[]Reference, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *Owns) SetEntitlements(v []Reference)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *Owns) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### GetAccessProfiles

`func (o *Owns) GetAccessProfiles() []Reference`

GetAccessProfiles returns the AccessProfiles field if non-nil, zero value otherwise.

### GetAccessProfilesOk

`func (o *Owns) GetAccessProfilesOk() (*[]Reference, bool)`

GetAccessProfilesOk returns a tuple with the AccessProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfiles

`func (o *Owns) SetAccessProfiles(v []Reference)`

SetAccessProfiles sets AccessProfiles field to given value.

### HasAccessProfiles

`func (o *Owns) HasAccessProfiles() bool`

HasAccessProfiles returns a boolean if a field has been set.

### GetRoles

`func (o *Owns) GetRoles() []Reference`

GetRoles returns the Roles field if non-nil, zero value otherwise.

### GetRolesOk

`func (o *Owns) GetRolesOk() (*[]Reference, bool)`

GetRolesOk returns a tuple with the Roles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoles

`func (o *Owns) SetRoles(v []Reference)`

SetRoles sets Roles field to given value.

### HasRoles

`func (o *Owns) HasRoles() bool`

HasRoles returns a boolean if a field has been set.

### GetApps

`func (o *Owns) GetApps() []Reference`

GetApps returns the Apps field if non-nil, zero value otherwise.

### GetAppsOk

`func (o *Owns) GetAppsOk() (*[]Reference, bool)`

GetAppsOk returns a tuple with the Apps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApps

`func (o *Owns) SetApps(v []Reference)`

SetApps sets Apps field to given value.

### HasApps

`func (o *Owns) HasApps() bool`

HasApps returns a boolean if a field has been set.

### GetGovernanceGroups

`func (o *Owns) GetGovernanceGroups() []Reference`

GetGovernanceGroups returns the GovernanceGroups field if non-nil, zero value otherwise.

### GetGovernanceGroupsOk

`func (o *Owns) GetGovernanceGroupsOk() (*[]Reference, bool)`

GetGovernanceGroupsOk returns a tuple with the GovernanceGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGovernanceGroups

`func (o *Owns) SetGovernanceGroups(v []Reference)`

SetGovernanceGroups sets GovernanceGroups field to given value.

### HasGovernanceGroups

`func (o *Owns) HasGovernanceGroups() bool`

HasGovernanceGroups returns a boolean if a field has been set.

### GetFallbackApprover

`func (o *Owns) GetFallbackApprover() bool`

GetFallbackApprover returns the FallbackApprover field if non-nil, zero value otherwise.

### GetFallbackApproverOk

`func (o *Owns) GetFallbackApproverOk() (*bool, bool)`

GetFallbackApproverOk returns a tuple with the FallbackApprover field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFallbackApprover

`func (o *Owns) SetFallbackApprover(v bool)`

SetFallbackApprover sets FallbackApprover field to given value.

### HasFallbackApprover

`func (o *Owns) HasFallbackApprover() bool`

HasFallbackApprover returns a boolean if a field has been set.


[[Back to top]](#) 


