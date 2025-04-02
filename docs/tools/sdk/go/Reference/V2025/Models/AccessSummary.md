---
id: access-summary
title: AccessSummary
pagination_label: AccessSummary
sidebar_label: AccessSummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessSummary', 'AccessSummary'] 
slug: /tools/sdk/go//models/access-summary
tags: ['SDK', 'Software Development Kit', 'AccessSummary', 'AccessSummary']
---

# AccessSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Access** | Pointer to [**AccessSummaryAccess**](access-summary-access) |  | [optional] 
**Entitlement** | Pointer to [**NullableReviewableEntitlement**](reviewable-entitlement) |  | [optional] 
**AccessProfile** | Pointer to [**ReviewableAccessProfile**](reviewable-access-profile) |  | [optional] 
**Role** | Pointer to [**NullableReviewableRole**](reviewable-role) |  | [optional] 

## Methods

### NewAccessSummary

`func NewAccessSummary() *AccessSummary`

NewAccessSummary instantiates a new AccessSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessSummaryWithDefaults

`func NewAccessSummaryWithDefaults() *AccessSummary`

NewAccessSummaryWithDefaults instantiates a new AccessSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccess

`func (o *AccessSummary) GetAccess() AccessSummaryAccess`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *AccessSummary) GetAccessOk() (*AccessSummaryAccess, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *AccessSummary) SetAccess(v AccessSummaryAccess)`

SetAccess sets Access field to given value.

### HasAccess

`func (o *AccessSummary) HasAccess() bool`

HasAccess returns a boolean if a field has been set.

### GetEntitlement

`func (o *AccessSummary) GetEntitlement() ReviewableEntitlement`

GetEntitlement returns the Entitlement field if non-nil, zero value otherwise.

### GetEntitlementOk

`func (o *AccessSummary) GetEntitlementOk() (*ReviewableEntitlement, bool)`

GetEntitlementOk returns a tuple with the Entitlement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlement

`func (o *AccessSummary) SetEntitlement(v ReviewableEntitlement)`

SetEntitlement sets Entitlement field to given value.

### HasEntitlement

`func (o *AccessSummary) HasEntitlement() bool`

HasEntitlement returns a boolean if a field has been set.

### SetEntitlementNil

`func (o *AccessSummary) SetEntitlementNil(b bool)`

 SetEntitlementNil sets the value for Entitlement to be an explicit nil

### UnsetEntitlement
`func (o *AccessSummary) UnsetEntitlement()`

UnsetEntitlement ensures that no value is present for Entitlement, not even an explicit nil
### GetAccessProfile

`func (o *AccessSummary) GetAccessProfile() ReviewableAccessProfile`

GetAccessProfile returns the AccessProfile field if non-nil, zero value otherwise.

### GetAccessProfileOk

`func (o *AccessSummary) GetAccessProfileOk() (*ReviewableAccessProfile, bool)`

GetAccessProfileOk returns a tuple with the AccessProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfile

`func (o *AccessSummary) SetAccessProfile(v ReviewableAccessProfile)`

SetAccessProfile sets AccessProfile field to given value.

### HasAccessProfile

`func (o *AccessSummary) HasAccessProfile() bool`

HasAccessProfile returns a boolean if a field has been set.

### GetRole

`func (o *AccessSummary) GetRole() ReviewableRole`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *AccessSummary) GetRoleOk() (*ReviewableRole, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *AccessSummary) SetRole(v ReviewableRole)`

SetRole sets Role field to given value.

### HasRole

`func (o *AccessSummary) HasRole() bool`

HasRole returns a boolean if a field has been set.

### SetRoleNil

`func (o *AccessSummary) SetRoleNil(b bool)`

 SetRoleNil sets the value for Role to be an explicit nil

### UnsetRole
`func (o *AccessSummary) UnsetRole()`

UnsetRole ensures that no value is present for Role, not even an explicit nil

