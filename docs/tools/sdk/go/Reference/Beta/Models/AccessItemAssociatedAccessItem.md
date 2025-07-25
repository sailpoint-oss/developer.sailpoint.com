---
id: beta-access-item-associated-access-item
title: AccessItemAssociatedAccessItem
pagination_label: AccessItemAssociatedAccessItem
sidebar_label: AccessItemAssociatedAccessItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemAssociatedAccessItem', 'BetaAccessItemAssociatedAccessItem'] 
slug: /tools/sdk/go/beta/models/access-item-associated-access-item
tags: ['SDK', 'Software Development Kit', 'AccessItemAssociatedAccessItem', 'BetaAccessItemAssociatedAccessItem']
---

# AccessItemAssociatedAccessItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the access item id | [optional] 
**AccessType** | Pointer to **string** | the access item type. entitlement in this case | [optional] 
**DisplayName** | Pointer to **string** | the access item display name | [optional] 
**SourceName** | Pointer to **NullableString** | the associated source name if it exists | [optional] 
**Attribute** | **string** | the entitlement attribute | 
**Value** | **string** | the associated value | 
**Type** | **string** | the type of entitlement | 
**Description** | Pointer to **string** | the description for the role | [optional] 
**SourceId** | Pointer to **string** | the id of the source | [optional] 
**Standalone** | **NullableBool** | indicates whether the access profile is standalone | 
**Privileged** | **NullableBool** | indicates whether the entitlement is privileged | 
**CloudGoverned** | **NullableBool** | indicates whether the entitlement is cloud governed | 
**EntitlementCount** | **int32** | the number of entitlements the account will create | 
**AppRefs** | [**[]AccessItemAccessProfileResponseAppRefsInner**](access-item-access-profile-response-app-refs-inner) | the list of app ids associated with the access profile | 
**RemoveDate** | Pointer to **string** | the date the role is no longer assigned to the specified identity | [optional] 
**Revocable** | **bool** | indicates whether the role is revocable | 
**NativeIdentity** | **string** | the native identifier used to uniquely identify an acccount | 
**AppRoleId** | **NullableString** | the app role id | 

## Methods

### NewAccessItemAssociatedAccessItem

`func NewAccessItemAssociatedAccessItem(attribute string, value string, type_ string, standalone NullableBool, privileged NullableBool, cloudGoverned NullableBool, entitlementCount int32, appRefs []AccessItemAccessProfileResponseAppRefsInner, revocable bool, nativeIdentity string, appRoleId NullableString, ) *AccessItemAssociatedAccessItem`

NewAccessItemAssociatedAccessItem instantiates a new AccessItemAssociatedAccessItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemAssociatedAccessItemWithDefaults

`func NewAccessItemAssociatedAccessItemWithDefaults() *AccessItemAssociatedAccessItem`

NewAccessItemAssociatedAccessItemWithDefaults instantiates a new AccessItemAssociatedAccessItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessItemAssociatedAccessItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessItemAssociatedAccessItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessItemAssociatedAccessItem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessItemAssociatedAccessItem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccessType

`func (o *AccessItemAssociatedAccessItem) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *AccessItemAssociatedAccessItem) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *AccessItemAssociatedAccessItem) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.

### HasAccessType

`func (o *AccessItemAssociatedAccessItem) HasAccessType() bool`

HasAccessType returns a boolean if a field has been set.

### GetDisplayName

`func (o *AccessItemAssociatedAccessItem) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AccessItemAssociatedAccessItem) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AccessItemAssociatedAccessItem) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AccessItemAssociatedAccessItem) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSourceName

`func (o *AccessItemAssociatedAccessItem) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *AccessItemAssociatedAccessItem) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *AccessItemAssociatedAccessItem) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *AccessItemAssociatedAccessItem) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### SetSourceNameNil

`func (o *AccessItemAssociatedAccessItem) SetSourceNameNil(b bool)`

 SetSourceNameNil sets the value for SourceName to be an explicit nil

### UnsetSourceName
`func (o *AccessItemAssociatedAccessItem) UnsetSourceName()`

UnsetSourceName ensures that no value is present for SourceName, not even an explicit nil
### GetAttribute

`func (o *AccessItemAssociatedAccessItem) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *AccessItemAssociatedAccessItem) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *AccessItemAssociatedAccessItem) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.


### GetValue

`func (o *AccessItemAssociatedAccessItem) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *AccessItemAssociatedAccessItem) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *AccessItemAssociatedAccessItem) SetValue(v string)`

SetValue sets Value field to given value.


### GetType

`func (o *AccessItemAssociatedAccessItem) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessItemAssociatedAccessItem) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessItemAssociatedAccessItem) SetType(v string)`

SetType sets Type field to given value.


### GetDescription

`func (o *AccessItemAssociatedAccessItem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessItemAssociatedAccessItem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessItemAssociatedAccessItem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessItemAssociatedAccessItem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSourceId

`func (o *AccessItemAssociatedAccessItem) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *AccessItemAssociatedAccessItem) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *AccessItemAssociatedAccessItem) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *AccessItemAssociatedAccessItem) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetStandalone

`func (o *AccessItemAssociatedAccessItem) GetStandalone() bool`

GetStandalone returns the Standalone field if non-nil, zero value otherwise.

### GetStandaloneOk

`func (o *AccessItemAssociatedAccessItem) GetStandaloneOk() (*bool, bool)`

GetStandaloneOk returns a tuple with the Standalone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandalone

`func (o *AccessItemAssociatedAccessItem) SetStandalone(v bool)`

SetStandalone sets Standalone field to given value.


### SetStandaloneNil

`func (o *AccessItemAssociatedAccessItem) SetStandaloneNil(b bool)`

 SetStandaloneNil sets the value for Standalone to be an explicit nil

### UnsetStandalone
`func (o *AccessItemAssociatedAccessItem) UnsetStandalone()`

UnsetStandalone ensures that no value is present for Standalone, not even an explicit nil
### GetPrivileged

`func (o *AccessItemAssociatedAccessItem) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *AccessItemAssociatedAccessItem) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *AccessItemAssociatedAccessItem) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.


### SetPrivilegedNil

`func (o *AccessItemAssociatedAccessItem) SetPrivilegedNil(b bool)`

 SetPrivilegedNil sets the value for Privileged to be an explicit nil

### UnsetPrivileged
`func (o *AccessItemAssociatedAccessItem) UnsetPrivileged()`

UnsetPrivileged ensures that no value is present for Privileged, not even an explicit nil
### GetCloudGoverned

`func (o *AccessItemAssociatedAccessItem) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *AccessItemAssociatedAccessItem) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *AccessItemAssociatedAccessItem) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.


### SetCloudGovernedNil

`func (o *AccessItemAssociatedAccessItem) SetCloudGovernedNil(b bool)`

 SetCloudGovernedNil sets the value for CloudGoverned to be an explicit nil

### UnsetCloudGoverned
`func (o *AccessItemAssociatedAccessItem) UnsetCloudGoverned()`

UnsetCloudGoverned ensures that no value is present for CloudGoverned, not even an explicit nil
### GetEntitlementCount

`func (o *AccessItemAssociatedAccessItem) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *AccessItemAssociatedAccessItem) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *AccessItemAssociatedAccessItem) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.


### GetAppRefs

`func (o *AccessItemAssociatedAccessItem) GetAppRefs() []AccessItemAccessProfileResponseAppRefsInner`

GetAppRefs returns the AppRefs field if non-nil, zero value otherwise.

### GetAppRefsOk

`func (o *AccessItemAssociatedAccessItem) GetAppRefsOk() (*[]AccessItemAccessProfileResponseAppRefsInner, bool)`

GetAppRefsOk returns a tuple with the AppRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppRefs

`func (o *AccessItemAssociatedAccessItem) SetAppRefs(v []AccessItemAccessProfileResponseAppRefsInner)`

SetAppRefs sets AppRefs field to given value.


### GetRemoveDate

`func (o *AccessItemAssociatedAccessItem) GetRemoveDate() string`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *AccessItemAssociatedAccessItem) GetRemoveDateOk() (*string, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *AccessItemAssociatedAccessItem) SetRemoveDate(v string)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *AccessItemAssociatedAccessItem) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### GetRevocable

`func (o *AccessItemAssociatedAccessItem) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *AccessItemAssociatedAccessItem) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *AccessItemAssociatedAccessItem) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.


### GetNativeIdentity

`func (o *AccessItemAssociatedAccessItem) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *AccessItemAssociatedAccessItem) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *AccessItemAssociatedAccessItem) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.


### GetAppRoleId

`func (o *AccessItemAssociatedAccessItem) GetAppRoleId() string`

GetAppRoleId returns the AppRoleId field if non-nil, zero value otherwise.

### GetAppRoleIdOk

`func (o *AccessItemAssociatedAccessItem) GetAppRoleIdOk() (*string, bool)`

GetAppRoleIdOk returns a tuple with the AppRoleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppRoleId

`func (o *AccessItemAssociatedAccessItem) SetAppRoleId(v string)`

SetAppRoleId sets AppRoleId field to given value.


### SetAppRoleIdNil

`func (o *AccessItemAssociatedAccessItem) SetAppRoleIdNil(b bool)`

 SetAppRoleIdNil sets the value for AppRoleId to be an explicit nil

### UnsetAppRoleId
`func (o *AccessItemAssociatedAccessItem) UnsetAppRoleId()`

UnsetAppRoleId ensures that no value is present for AppRoleId, not even an explicit nil

