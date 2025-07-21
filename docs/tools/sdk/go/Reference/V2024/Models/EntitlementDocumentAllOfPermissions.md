---
id: v2024-entitlement-document-all-of-permissions
title: EntitlementDocumentAllOfPermissions
pagination_label: EntitlementDocumentAllOfPermissions
sidebar_label: EntitlementDocumentAllOfPermissions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementDocumentAllOfPermissions', 'V2024EntitlementDocumentAllOfPermissions'] 
slug: /tools/sdk/go/v2024/models/entitlement-document-all-of-permissions
tags: ['SDK', 'Software Development Kit', 'EntitlementDocumentAllOfPermissions', 'V2024EntitlementDocumentAllOfPermissions']
---

# EntitlementDocumentAllOfPermissions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Target** | Pointer to **string** | The target the permission would grants rights on. | [optional] 
**Rights** | Pointer to **[]string** | All the rights (e.g. actions) that this permission allows on the target | [optional] 

## Methods

### NewEntitlementDocumentAllOfPermissions

`func NewEntitlementDocumentAllOfPermissions() *EntitlementDocumentAllOfPermissions`

NewEntitlementDocumentAllOfPermissions instantiates a new EntitlementDocumentAllOfPermissions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementDocumentAllOfPermissionsWithDefaults

`func NewEntitlementDocumentAllOfPermissionsWithDefaults() *EntitlementDocumentAllOfPermissions`

NewEntitlementDocumentAllOfPermissionsWithDefaults instantiates a new EntitlementDocumentAllOfPermissions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTarget

`func (o *EntitlementDocumentAllOfPermissions) GetTarget() string`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *EntitlementDocumentAllOfPermissions) GetTargetOk() (*string, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *EntitlementDocumentAllOfPermissions) SetTarget(v string)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *EntitlementDocumentAllOfPermissions) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### GetRights

`func (o *EntitlementDocumentAllOfPermissions) GetRights() []string`

GetRights returns the Rights field if non-nil, zero value otherwise.

### GetRightsOk

`func (o *EntitlementDocumentAllOfPermissions) GetRightsOk() (*[]string, bool)`

GetRightsOk returns a tuple with the Rights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRights

`func (o *EntitlementDocumentAllOfPermissions) SetRights(v []string)`

SetRights sets Rights field to given value.

### HasRights

`func (o *EntitlementDocumentAllOfPermissions) HasRights() bool`

HasRights returns a boolean if a field has been set.


