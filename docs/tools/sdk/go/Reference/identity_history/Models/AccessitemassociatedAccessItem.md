---
id: v1-accessitemassociated-access-item
title: AccessitemassociatedAccessItem
pagination_label: AccessitemassociatedAccessItem
sidebar_label: AccessitemassociatedAccessItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessitemassociatedAccessItem', 'V1AccessitemassociatedAccessItem'] 
slug: /tools/sdk/go/identityhistory/models/accessitemassociated-access-item
tags: ['SDK', 'Software Development Kit', 'AccessitemassociatedAccessItem', 'V1AccessitemassociatedAccessItem']
---

# AccessitemassociatedAccessItem

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
**AppRefs** | [**[]AccessitemaccessprofileresponseAppRefsInner**](accessitemaccessprofileresponse-app-refs-inner) | the list of app ids associated with the access profile | 
**StartDate** | Pointer to **NullableString** | the date the access profile will be assigned to the specified identity, in case requested with a future start date | [optional] 
**RemoveDate** | Pointer to **string** | the date the role is no longer assigned to the specified identity | [optional] 
**Revocable** | **bool** | indicates whether the role is revocable | 
**NativeIdentity** | **string** | the native identifier used to uniquely identify an acccount | 
**AppRoleId** | **NullableString** | the app role id | 

## Methods

### NewAccessitemassociatedAccessItem

`func NewAccessitemassociatedAccessItem(attribute string, value string, type_ string, standalone NullableBool, privileged NullableBool, cloudGoverned NullableBool, entitlementCount int32, appRefs []AccessitemaccessprofileresponseAppRefsInner, revocable bool, nativeIdentity string, appRoleId NullableString, ) *AccessitemassociatedAccessItem`

NewAccessitemassociatedAccessItem instantiates a new AccessitemassociatedAccessItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessitemassociatedAccessItemWithDefaults

`func NewAccessitemassociatedAccessItemWithDefaults() *AccessitemassociatedAccessItem`

NewAccessitemassociatedAccessItemWithDefaults instantiates a new AccessitemassociatedAccessItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessitemassociatedAccessItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessitemassociatedAccessItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessitemassociatedAccessItem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessitemassociatedAccessItem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccessType

`func (o *AccessitemassociatedAccessItem) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *AccessitemassociatedAccessItem) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *AccessitemassociatedAccessItem) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.

### HasAccessType

`func (o *AccessitemassociatedAccessItem) HasAccessType() bool`

HasAccessType returns a boolean if a field has been set.

### GetDisplayName

`func (o *AccessitemassociatedAccessItem) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AccessitemassociatedAccessItem) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AccessitemassociatedAccessItem) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AccessitemassociatedAccessItem) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSourceName

`func (o *AccessitemassociatedAccessItem) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *AccessitemassociatedAccessItem) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *AccessitemassociatedAccessItem) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *AccessitemassociatedAccessItem) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### SetSourceNameNil

`func (o *AccessitemassociatedAccessItem) SetSourceNameNil(b bool)`

 SetSourceNameNil sets the value for SourceName to be an explicit nil

### UnsetSourceName
`func (o *AccessitemassociatedAccessItem) UnsetSourceName()`

UnsetSourceName ensures that no value is present for SourceName, not even an explicit nil
### GetAttribute

`func (o *AccessitemassociatedAccessItem) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *AccessitemassociatedAccessItem) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *AccessitemassociatedAccessItem) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.


### GetValue

`func (o *AccessitemassociatedAccessItem) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *AccessitemassociatedAccessItem) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *AccessitemassociatedAccessItem) SetValue(v string)`

SetValue sets Value field to given value.


### GetType

`func (o *AccessitemassociatedAccessItem) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessitemassociatedAccessItem) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessitemassociatedAccessItem) SetType(v string)`

SetType sets Type field to given value.


### GetDescription

`func (o *AccessitemassociatedAccessItem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessitemassociatedAccessItem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessitemassociatedAccessItem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessitemassociatedAccessItem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSourceId

`func (o *AccessitemassociatedAccessItem) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *AccessitemassociatedAccessItem) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *AccessitemassociatedAccessItem) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *AccessitemassociatedAccessItem) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetStandalone

`func (o *AccessitemassociatedAccessItem) GetStandalone() bool`

GetStandalone returns the Standalone field if non-nil, zero value otherwise.

### GetStandaloneOk

`func (o *AccessitemassociatedAccessItem) GetStandaloneOk() (*bool, bool)`

GetStandaloneOk returns a tuple with the Standalone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandalone

`func (o *AccessitemassociatedAccessItem) SetStandalone(v bool)`

SetStandalone sets Standalone field to given value.


### SetStandaloneNil

`func (o *AccessitemassociatedAccessItem) SetStandaloneNil(b bool)`

 SetStandaloneNil sets the value for Standalone to be an explicit nil

### UnsetStandalone
`func (o *AccessitemassociatedAccessItem) UnsetStandalone()`

UnsetStandalone ensures that no value is present for Standalone, not even an explicit nil
### GetPrivileged

`func (o *AccessitemassociatedAccessItem) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *AccessitemassociatedAccessItem) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *AccessitemassociatedAccessItem) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.


### SetPrivilegedNil

`func (o *AccessitemassociatedAccessItem) SetPrivilegedNil(b bool)`

 SetPrivilegedNil sets the value for Privileged to be an explicit nil

### UnsetPrivileged
`func (o *AccessitemassociatedAccessItem) UnsetPrivileged()`

UnsetPrivileged ensures that no value is present for Privileged, not even an explicit nil
### GetCloudGoverned

`func (o *AccessitemassociatedAccessItem) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *AccessitemassociatedAccessItem) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *AccessitemassociatedAccessItem) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.


### SetCloudGovernedNil

`func (o *AccessitemassociatedAccessItem) SetCloudGovernedNil(b bool)`

 SetCloudGovernedNil sets the value for CloudGoverned to be an explicit nil

### UnsetCloudGoverned
`func (o *AccessitemassociatedAccessItem) UnsetCloudGoverned()`

UnsetCloudGoverned ensures that no value is present for CloudGoverned, not even an explicit nil
### GetEntitlementCount

`func (o *AccessitemassociatedAccessItem) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *AccessitemassociatedAccessItem) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *AccessitemassociatedAccessItem) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.


### GetAppRefs

`func (o *AccessitemassociatedAccessItem) GetAppRefs() []AccessitemaccessprofileresponseAppRefsInner`

GetAppRefs returns the AppRefs field if non-nil, zero value otherwise.

### GetAppRefsOk

`func (o *AccessitemassociatedAccessItem) GetAppRefsOk() (*[]AccessitemaccessprofileresponseAppRefsInner, bool)`

GetAppRefsOk returns a tuple with the AppRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppRefs

`func (o *AccessitemassociatedAccessItem) SetAppRefs(v []AccessitemaccessprofileresponseAppRefsInner)`

SetAppRefs sets AppRefs field to given value.


### GetStartDate

`func (o *AccessitemassociatedAccessItem) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *AccessitemassociatedAccessItem) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *AccessitemassociatedAccessItem) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *AccessitemassociatedAccessItem) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### SetStartDateNil

`func (o *AccessitemassociatedAccessItem) SetStartDateNil(b bool)`

 SetStartDateNil sets the value for StartDate to be an explicit nil

### UnsetStartDate
`func (o *AccessitemassociatedAccessItem) UnsetStartDate()`

UnsetStartDate ensures that no value is present for StartDate, not even an explicit nil
### GetRemoveDate

`func (o *AccessitemassociatedAccessItem) GetRemoveDate() string`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *AccessitemassociatedAccessItem) GetRemoveDateOk() (*string, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *AccessitemassociatedAccessItem) SetRemoveDate(v string)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *AccessitemassociatedAccessItem) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### GetRevocable

`func (o *AccessitemassociatedAccessItem) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *AccessitemassociatedAccessItem) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *AccessitemassociatedAccessItem) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.


### GetNativeIdentity

`func (o *AccessitemassociatedAccessItem) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *AccessitemassociatedAccessItem) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *AccessitemassociatedAccessItem) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.


### GetAppRoleId

`func (o *AccessitemassociatedAccessItem) GetAppRoleId() string`

GetAppRoleId returns the AppRoleId field if non-nil, zero value otherwise.

### GetAppRoleIdOk

`func (o *AccessitemassociatedAccessItem) GetAppRoleIdOk() (*string, bool)`

GetAppRoleIdOk returns a tuple with the AppRoleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppRoleId

`func (o *AccessitemassociatedAccessItem) SetAppRoleId(v string)`

SetAppRoleId sets AppRoleId field to given value.


### SetAppRoleIdNil

`func (o *AccessitemassociatedAccessItem) SetAppRoleIdNil(b bool)`

 SetAppRoleIdNil sets the value for AppRoleId to be an explicit nil

### UnsetAppRoleId
`func (o *AccessitemassociatedAccessItem) UnsetAppRoleId()`

UnsetAppRoleId ensures that no value is present for AppRoleId, not even an explicit nil

