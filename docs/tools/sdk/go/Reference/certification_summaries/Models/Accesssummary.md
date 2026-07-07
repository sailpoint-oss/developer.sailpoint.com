---
id: v1-accesssummary
title: Accesssummary
pagination_label: Accesssummary
sidebar_label: Accesssummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accesssummary', 'V1Accesssummary'] 
slug: /tools/sdk/go/certificationsummaries/models/accesssummary
tags: ['SDK', 'Software Development Kit', 'Accesssummary', 'V1Accesssummary']
---

# Accesssummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Access** | Pointer to [**AccesssummaryAccess**](accesssummary-access) |  | [optional] 
**Entitlement** | Pointer to [**NullableReviewableentitlement**](reviewableentitlement) |  | [optional] 
**AccessProfile** | Pointer to [**Reviewableaccessprofile**](reviewableaccessprofile) |  | [optional] 
**Role** | Pointer to [**NullableReviewablerole**](reviewablerole) |  | [optional] 

## Methods

### NewAccesssummary

`func NewAccesssummary() *Accesssummary`

NewAccesssummary instantiates a new Accesssummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccesssummaryWithDefaults

`func NewAccesssummaryWithDefaults() *Accesssummary`

NewAccesssummaryWithDefaults instantiates a new Accesssummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccess

`func (o *Accesssummary) GetAccess() AccesssummaryAccess`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *Accesssummary) GetAccessOk() (*AccesssummaryAccess, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *Accesssummary) SetAccess(v AccesssummaryAccess)`

SetAccess sets Access field to given value.

### HasAccess

`func (o *Accesssummary) HasAccess() bool`

HasAccess returns a boolean if a field has been set.

### GetEntitlement

`func (o *Accesssummary) GetEntitlement() Reviewableentitlement`

GetEntitlement returns the Entitlement field if non-nil, zero value otherwise.

### GetEntitlementOk

`func (o *Accesssummary) GetEntitlementOk() (*Reviewableentitlement, bool)`

GetEntitlementOk returns a tuple with the Entitlement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlement

`func (o *Accesssummary) SetEntitlement(v Reviewableentitlement)`

SetEntitlement sets Entitlement field to given value.

### HasEntitlement

`func (o *Accesssummary) HasEntitlement() bool`

HasEntitlement returns a boolean if a field has been set.

### SetEntitlementNil

`func (o *Accesssummary) SetEntitlementNil(b bool)`

 SetEntitlementNil sets the value for Entitlement to be an explicit nil

### UnsetEntitlement
`func (o *Accesssummary) UnsetEntitlement()`

UnsetEntitlement ensures that no value is present for Entitlement, not even an explicit nil
### GetAccessProfile

`func (o *Accesssummary) GetAccessProfile() Reviewableaccessprofile`

GetAccessProfile returns the AccessProfile field if non-nil, zero value otherwise.

### GetAccessProfileOk

`func (o *Accesssummary) GetAccessProfileOk() (*Reviewableaccessprofile, bool)`

GetAccessProfileOk returns a tuple with the AccessProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfile

`func (o *Accesssummary) SetAccessProfile(v Reviewableaccessprofile)`

SetAccessProfile sets AccessProfile field to given value.

### HasAccessProfile

`func (o *Accesssummary) HasAccessProfile() bool`

HasAccessProfile returns a boolean if a field has been set.

### GetRole

`func (o *Accesssummary) GetRole() Reviewablerole`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *Accesssummary) GetRoleOk() (*Reviewablerole, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *Accesssummary) SetRole(v Reviewablerole)`

SetRole sets Role field to given value.

### HasRole

`func (o *Accesssummary) HasRole() bool`

HasRole returns a boolean if a field has been set.

### SetRoleNil

`func (o *Accesssummary) SetRoleNil(b bool)`

 SetRoleNil sets the value for Role to be an explicit nil

### UnsetRole
`func (o *Accesssummary) UnsetRole()`

UnsetRole ensures that no value is present for Role, not even an explicit nil

