---
id: v2024-list-identity-access-items200-response-inner
title: ListIdentityAccessItems200ResponseInner
pagination_label: ListIdentityAccessItems200ResponseInner
sidebar_label: ListIdentityAccessItems200ResponseInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListIdentityAccessItems200ResponseInner', 'V2024ListIdentityAccessItems200ResponseInner'] 
slug: /tools/sdk/go/v2024/models/list-identity-access-items200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListIdentityAccessItems200ResponseInner', 'V2024ListIdentityAccessItems200ResponseInner']
---

# ListIdentityAccessItems200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessType** | Pointer to **string** | the access item type. role in this case | [optional] 
**Id** | Pointer to **string** | the access item id | [optional] 
**Name** | Pointer to **string** | the access profile name | [optional] 
**SourceName** | Pointer to **string** | the associated source name if it exists | [optional] 
**SourceId** | Pointer to **string** | the id of the source | [optional] 
**Description** | Pointer to **string** | the description for the role | [optional] 
**DisplayName** | Pointer to **string** | the role display name | [optional] 
**EntitlementCount** | Pointer to **string** | the number of entitlements the account will create | [optional] 
**AppDisplayName** | Pointer to **string** | the name of | [optional] 
**RemoveDate** | Pointer to **string** | the date the role is no longer assigned to the specified identity | [optional] 
**Standalone** | **bool** | indicates whether the entitlement is standalone | 
**Revocable** | **bool** | indicates whether the role is revocable | 
**NativeIdentity** | Pointer to **string** | the native identifier used to uniquely identify an acccount | [optional] 
**AppRoleId** | Pointer to **string** | the app role id | [optional] 
**Attribute** | Pointer to **string** | the entitlement attribute | [optional] 
**Value** | Pointer to **string** | the associated value | [optional] 
**EntitlementType** | Pointer to **string** | the type of entitlement | [optional] 
**Privileged** | **bool** | indicates whether the entitlement is privileged | 
**CloudGoverned** | **bool** | indicates whether the entitlement is cloud governed | 

## Methods

### NewListIdentityAccessItems200ResponseInner

`func NewListIdentityAccessItems200ResponseInner(standalone bool, revocable bool, privileged bool, cloudGoverned bool, ) *ListIdentityAccessItems200ResponseInner`

NewListIdentityAccessItems200ResponseInner instantiates a new ListIdentityAccessItems200ResponseInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListIdentityAccessItems200ResponseInnerWithDefaults

`func NewListIdentityAccessItems200ResponseInnerWithDefaults() *ListIdentityAccessItems200ResponseInner`

NewListIdentityAccessItems200ResponseInnerWithDefaults instantiates a new ListIdentityAccessItems200ResponseInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessType

`func (o *ListIdentityAccessItems200ResponseInner) GetAccessType() string`

GetAccessType returns the AccessType field if non-nil, zero value otherwise.

### GetAccessTypeOk

`func (o *ListIdentityAccessItems200ResponseInner) GetAccessTypeOk() (*string, bool)`

GetAccessTypeOk returns a tuple with the AccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessType

`func (o *ListIdentityAccessItems200ResponseInner) SetAccessType(v string)`

SetAccessType sets AccessType field to given value.

### HasAccessType

`func (o *ListIdentityAccessItems200ResponseInner) HasAccessType() bool`

HasAccessType returns a boolean if a field has been set.

### GetId

`func (o *ListIdentityAccessItems200ResponseInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ListIdentityAccessItems200ResponseInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ListIdentityAccessItems200ResponseInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ListIdentityAccessItems200ResponseInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ListIdentityAccessItems200ResponseInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ListIdentityAccessItems200ResponseInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ListIdentityAccessItems200ResponseInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ListIdentityAccessItems200ResponseInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSourceName

`func (o *ListIdentityAccessItems200ResponseInner) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *ListIdentityAccessItems200ResponseInner) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *ListIdentityAccessItems200ResponseInner) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *ListIdentityAccessItems200ResponseInner) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetSourceId

`func (o *ListIdentityAccessItems200ResponseInner) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *ListIdentityAccessItems200ResponseInner) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *ListIdentityAccessItems200ResponseInner) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *ListIdentityAccessItems200ResponseInner) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetDescription

`func (o *ListIdentityAccessItems200ResponseInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ListIdentityAccessItems200ResponseInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ListIdentityAccessItems200ResponseInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ListIdentityAccessItems200ResponseInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayName

`func (o *ListIdentityAccessItems200ResponseInner) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *ListIdentityAccessItems200ResponseInner) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *ListIdentityAccessItems200ResponseInner) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *ListIdentityAccessItems200ResponseInner) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetEntitlementCount

`func (o *ListIdentityAccessItems200ResponseInner) GetEntitlementCount() string`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *ListIdentityAccessItems200ResponseInner) GetEntitlementCountOk() (*string, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *ListIdentityAccessItems200ResponseInner) SetEntitlementCount(v string)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *ListIdentityAccessItems200ResponseInner) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.

### GetAppDisplayName

`func (o *ListIdentityAccessItems200ResponseInner) GetAppDisplayName() string`

GetAppDisplayName returns the AppDisplayName field if non-nil, zero value otherwise.

### GetAppDisplayNameOk

`func (o *ListIdentityAccessItems200ResponseInner) GetAppDisplayNameOk() (*string, bool)`

GetAppDisplayNameOk returns a tuple with the AppDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppDisplayName

`func (o *ListIdentityAccessItems200ResponseInner) SetAppDisplayName(v string)`

SetAppDisplayName sets AppDisplayName field to given value.

### HasAppDisplayName

`func (o *ListIdentityAccessItems200ResponseInner) HasAppDisplayName() bool`

HasAppDisplayName returns a boolean if a field has been set.

### GetRemoveDate

`func (o *ListIdentityAccessItems200ResponseInner) GetRemoveDate() string`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *ListIdentityAccessItems200ResponseInner) GetRemoveDateOk() (*string, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *ListIdentityAccessItems200ResponseInner) SetRemoveDate(v string)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *ListIdentityAccessItems200ResponseInner) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### GetStandalone

`func (o *ListIdentityAccessItems200ResponseInner) GetStandalone() bool`

GetStandalone returns the Standalone field if non-nil, zero value otherwise.

### GetStandaloneOk

`func (o *ListIdentityAccessItems200ResponseInner) GetStandaloneOk() (*bool, bool)`

GetStandaloneOk returns a tuple with the Standalone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandalone

`func (o *ListIdentityAccessItems200ResponseInner) SetStandalone(v bool)`

SetStandalone sets Standalone field to given value.


### GetRevocable

`func (o *ListIdentityAccessItems200ResponseInner) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *ListIdentityAccessItems200ResponseInner) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *ListIdentityAccessItems200ResponseInner) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.


### GetNativeIdentity

`func (o *ListIdentityAccessItems200ResponseInner) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *ListIdentityAccessItems200ResponseInner) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *ListIdentityAccessItems200ResponseInner) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *ListIdentityAccessItems200ResponseInner) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetAppRoleId

`func (o *ListIdentityAccessItems200ResponseInner) GetAppRoleId() string`

GetAppRoleId returns the AppRoleId field if non-nil, zero value otherwise.

### GetAppRoleIdOk

`func (o *ListIdentityAccessItems200ResponseInner) GetAppRoleIdOk() (*string, bool)`

GetAppRoleIdOk returns a tuple with the AppRoleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppRoleId

`func (o *ListIdentityAccessItems200ResponseInner) SetAppRoleId(v string)`

SetAppRoleId sets AppRoleId field to given value.

### HasAppRoleId

`func (o *ListIdentityAccessItems200ResponseInner) HasAppRoleId() bool`

HasAppRoleId returns a boolean if a field has been set.

### GetAttribute

`func (o *ListIdentityAccessItems200ResponseInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *ListIdentityAccessItems200ResponseInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *ListIdentityAccessItems200ResponseInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *ListIdentityAccessItems200ResponseInner) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *ListIdentityAccessItems200ResponseInner) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ListIdentityAccessItems200ResponseInner) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ListIdentityAccessItems200ResponseInner) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *ListIdentityAccessItems200ResponseInner) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetEntitlementType

`func (o *ListIdentityAccessItems200ResponseInner) GetEntitlementType() string`

GetEntitlementType returns the EntitlementType field if non-nil, zero value otherwise.

### GetEntitlementTypeOk

`func (o *ListIdentityAccessItems200ResponseInner) GetEntitlementTypeOk() (*string, bool)`

GetEntitlementTypeOk returns a tuple with the EntitlementType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementType

`func (o *ListIdentityAccessItems200ResponseInner) SetEntitlementType(v string)`

SetEntitlementType sets EntitlementType field to given value.

### HasEntitlementType

`func (o *ListIdentityAccessItems200ResponseInner) HasEntitlementType() bool`

HasEntitlementType returns a boolean if a field has been set.

### GetPrivileged

`func (o *ListIdentityAccessItems200ResponseInner) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *ListIdentityAccessItems200ResponseInner) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *ListIdentityAccessItems200ResponseInner) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.


### GetCloudGoverned

`func (o *ListIdentityAccessItems200ResponseInner) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *ListIdentityAccessItems200ResponseInner) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *ListIdentityAccessItems200ResponseInner) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.



