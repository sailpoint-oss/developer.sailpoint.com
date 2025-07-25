---
id: v2024-list-identity-snapshot-access-items200-response-inner
title: ListIdentitySnapshotAccessItems200ResponseInner
pagination_label: ListIdentitySnapshotAccessItems200ResponseInner
sidebar_label: ListIdentitySnapshotAccessItems200ResponseInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListIdentitySnapshotAccessItems200ResponseInner', 'V2024ListIdentitySnapshotAccessItems200ResponseInner'] 
slug: /tools/sdk/go/v2024/models/list-identity-snapshot-access-items200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListIdentitySnapshotAccessItems200ResponseInner', 'V2024ListIdentitySnapshotAccessItems200ResponseInner']
---

# ListIdentitySnapshotAccessItems200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the access item id | [optional] 
**AccessType** | Pointer to **string** | the access item type. role in this case | [optional] 
**DisplayName** | Pointer to **string** | the role display name | [optional] 
**SourceName** | Pointer to **NullableString** | the associated source name if it exists | [optional] 
**EntitlementCount** | **int32** | the number of entitlements the account will create | 
**Description** | Pointer to **string** | the description for the role | [optional] 
**SourceId** | Pointer to **string** | the id of the source | [optional] 
**AppRefs** | [**[]AccessItemAccessProfileResponseAppRefsInner**](access-item-access-profile-response-app-refs-inner) | the list of app ids associated with the access profile | 
**RemoveDate** | Pointer to **string** | the date the role is no longer assigned to the specified identity | [optional] 
**Standalone** | **NullableBool** | indicates whether the entitlement is standalone | 
**Revocable** | **bool** | indicates whether the role is revocable | 
**NativeIdentity** | **string** | the native identifier used to uniquely identify an acccount | 
**AppRoleId** | **NullableString** | the app role id | 
**Attribute** | **string** | the entitlement attribute | 
**Value** | **string** | the associated value | 
**Type** | **string** | the type of entitlement | 
**Privileged** | **NullableBool** | indicates whether the entitlement is privileged | 
**CloudGoverned** | **NullableBool** | indicates whether the entitlement is cloud governed | 

## Methods

### NewListIdentitySnapshotAccessItems200ResponseInner

`func NewListIdentitySnapshotAccessItems200ResponseInner(entitlementCount int32, appRefs []AccessItemAccessProfileResponseAppRefsInner, standalone NullableBool, revocable bool, nativeIdentity string, appRoleId NullableString, attribute string, value string, type_ string, privileged NullableBool, cloudGoverned NullableBool, ) *ListIdentitySnapshotAccessItems200ResponseInner`

NewListIdentitySnapshotAccessItems200ResponseInner instantiates a new ListIdentitySnapshotAccessItems200ResponseInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListIdentitySnapshotAccessItems200ResponseInnerWithDefaults

`func NewListIdentitySnapshotAccessItems200ResponseInnerWithDefaults() *ListIdentitySnapshotAccessItems200ResponseInner`

NewListIdentitySnapshotAccessItems200ResponseInnerWithDefaults instantiates a new ListIdentitySnapshotAccessItems200ResponseInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccessType

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.

### HasAccessType

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) HasAccessType() bool`

HasAccessType returns a boolean if a field has been set.

### GetDisplayName

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSourceName

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### SetSourceNameNil

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetSourceNameNil(b bool)`

 SetSourceNameNil sets the value for SourceName to be an explicit nil

### UnsetSourceName
`func (o *ListIdentitySnapshotAccessItems200ResponseInner) UnsetSourceName()`

UnsetSourceName ensures that no value is present for SourceName, not even an explicit nil
### GetEntitlementCount

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.


### GetDescription

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSourceId

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetAppRefs

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetAppRefs() []AccessItemAccessProfileResponseAppRefsInner`

GetAppRefs returns the AppRefs field if non-nil, zero value otherwise.

### GetAppRefsOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetAppRefsOk() (*[]AccessItemAccessProfileResponseAppRefsInner, bool)`

GetAppRefsOk returns a tuple with the AppRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppRefs

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetAppRefs(v []AccessItemAccessProfileResponseAppRefsInner)`

SetAppRefs sets AppRefs field to given value.


### GetRemoveDate

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetRemoveDate() string`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetRemoveDateOk() (*string, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetRemoveDate(v string)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### GetStandalone

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetStandalone() bool`

GetStandalone returns the Standalone field if non-nil, zero value otherwise.

### GetStandaloneOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetStandaloneOk() (*bool, bool)`

GetStandaloneOk returns a tuple with the Standalone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandalone

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetStandalone(v bool)`

SetStandalone sets Standalone field to given value.


### SetStandaloneNil

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetStandaloneNil(b bool)`

 SetStandaloneNil sets the value for Standalone to be an explicit nil

### UnsetStandalone
`func (o *ListIdentitySnapshotAccessItems200ResponseInner) UnsetStandalone()`

UnsetStandalone ensures that no value is present for Standalone, not even an explicit nil
### GetRevocable

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.


### GetNativeIdentity

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.


### GetAppRoleId

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetAppRoleId() string`

GetAppRoleId returns the AppRoleId field if non-nil, zero value otherwise.

### GetAppRoleIdOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetAppRoleIdOk() (*string, bool)`

GetAppRoleIdOk returns a tuple with the AppRoleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppRoleId

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetAppRoleId(v string)`

SetAppRoleId sets AppRoleId field to given value.


### SetAppRoleIdNil

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetAppRoleIdNil(b bool)`

 SetAppRoleIdNil sets the value for AppRoleId to be an explicit nil

### UnsetAppRoleId
`func (o *ListIdentitySnapshotAccessItems200ResponseInner) UnsetAppRoleId()`

UnsetAppRoleId ensures that no value is present for AppRoleId, not even an explicit nil
### GetAttribute

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.


### GetValue

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetValue(v string)`

SetValue sets Value field to given value.


### GetType

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetType(v string)`

SetType sets Type field to given value.


### GetPrivileged

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.


### SetPrivilegedNil

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetPrivilegedNil(b bool)`

 SetPrivilegedNil sets the value for Privileged to be an explicit nil

### UnsetPrivileged
`func (o *ListIdentitySnapshotAccessItems200ResponseInner) UnsetPrivileged()`

UnsetPrivileged ensures that no value is present for Privileged, not even an explicit nil
### GetCloudGoverned

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.


### SetCloudGovernedNil

`func (o *ListIdentitySnapshotAccessItems200ResponseInner) SetCloudGovernedNil(b bool)`

 SetCloudGovernedNil sets the value for CloudGoverned to be an explicit nil

### UnsetCloudGoverned
`func (o *ListIdentitySnapshotAccessItems200ResponseInner) UnsetCloudGoverned()`

UnsetCloudGoverned ensures that no value is present for CloudGoverned, not even an explicit nil

