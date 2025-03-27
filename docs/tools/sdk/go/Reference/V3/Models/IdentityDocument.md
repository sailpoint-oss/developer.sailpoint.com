---
id: identity-document
title: IdentityDocument
pagination_label: IdentityDocument
sidebar_label: IdentityDocument
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityDocument', 'IdentityDocument'] 
slug: /tools/sdk/go/v3/models/identity-document
tags: ['SDK', 'Software Development Kit', 'IdentityDocument', 'IdentityDocument']
---

# IdentityDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the referenced object. | 
**Name** | **string** | The human readable name of the referenced object. | 
**DisplayName** | Pointer to **string** | Identity&#39;s display name. | [optional] 
**FirstName** | Pointer to **string** | Identity&#39;s first name. | [optional] 
**LastName** | Pointer to **string** | Identity&#39;s last name. | [optional] 
**Email** | Pointer to **string** | Identity&#39;s primary email address. | [optional] 
**Created** | Pointer to **NullableTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Modified** | Pointer to **NullableTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Phone** | Pointer to **string** | Identity&#39;s phone number. | [optional] 
**Synced** | Pointer to **string** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the &#x60;synced&#x60; time and the time when the updated data is actually available in the search API.  | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether the identity is inactive. | [optional] [default to false]
**Protected** | Pointer to **bool** | Indicates whether the identity is protected. | [optional] [default to false]
**Status** | Pointer to **string** | Identity&#39;s status in SailPoint. | [optional] 
**EmployeeNumber** | Pointer to **string** | Identity&#39;s employee number. | [optional] 
**Manager** | Pointer to [**NullableIdentityDocumentAllOfManager**](identity-document-all-of-manager) |  | [optional] 
**IsManager** | Pointer to **bool** | Indicates whether the identity is a manager of other identities. | [optional] 
**IdentityProfile** | Pointer to [**IdentityDocumentAllOfIdentityProfile**](identity-document-all-of-identity-profile) |  | [optional] 
**Source** | Pointer to [**IdentityDocumentAllOfSource**](identity-document-all-of-source) |  | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | Map or dictionary of key/value pairs. | [optional] 
**Disabled** | Pointer to **bool** | Indicates whether the identity is disabled. | [optional] [default to false]
**Locked** | Pointer to **bool** | Indicates whether the identity is locked. | [optional] [default to false]
**ProcessingState** | Pointer to **NullableString** | Identity&#39;s processing state. | [optional] 
**ProcessingDetails** | Pointer to [**ProcessingDetails**](processing-details) |  | [optional] 
**Accounts** | Pointer to [**[]BaseAccount**](base-account) | List of accounts associated with the identity. | [optional] 
**AccountCount** | Pointer to **int32** | Number of accounts associated with the identity. | [optional] 
**Apps** | Pointer to [**[]App**](app) | List of applications the identity has access to. | [optional] 
**AppCount** | Pointer to **int32** | Number of applications the identity has access to. | [optional] 
**Access** | Pointer to [**[]IdentityAccess**](identity-access) | List of access items assigned to the identity. | [optional] 
**AccessCount** | Pointer to **int32** | Number of access items assigned to the identity. | [optional] 
**EntitlementCount** | Pointer to **int32** | Number of entitlements assigned to the identity. | [optional] 
**RoleCount** | Pointer to **int32** | Number of roles assigned to the identity. | [optional] 
**AccessProfileCount** | Pointer to **int32** | Number of access profiles assigned to the identity. | [optional] 
**Owns** | Pointer to [**[]Owns**](owns) | Access items the identity owns. | [optional] 
**OwnsCount** | Pointer to **int32** | Number of access items the identity owns. | [optional] 
**Tags** | Pointer to **[]string** | Tags that have been applied to the object. | [optional] 
**TagsCount** | Pointer to **int32** | Number of tags on the identity. | [optional] 
**VisibleSegments** | Pointer to **[]string** | List of segments that the identity is in. | [optional] 
**VisibleSegmentCount** | Pointer to **int32** | Number of segments the identity is in. | [optional] 

## Methods

### NewIdentityDocument

`func NewIdentityDocument(id string, name string, ) *IdentityDocument`

NewIdentityDocument instantiates a new IdentityDocument object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityDocumentWithDefaults

`func NewIdentityDocumentWithDefaults() *IdentityDocument`

NewIdentityDocumentWithDefaults instantiates a new IdentityDocument object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IdentityDocument) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityDocument) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityDocument) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *IdentityDocument) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityDocument) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityDocument) SetName(v string)`

SetName sets Name field to given value.


### GetDisplayName

`func (o *IdentityDocument) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *IdentityDocument) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *IdentityDocument) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *IdentityDocument) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetFirstName

`func (o *IdentityDocument) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *IdentityDocument) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *IdentityDocument) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *IdentityDocument) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetLastName

`func (o *IdentityDocument) GetLastName() string`

GetLastName returns the LastName field if non-nil, zero value otherwise.

### GetLastNameOk

`func (o *IdentityDocument) GetLastNameOk() (*string, bool)`

GetLastNameOk returns a tuple with the LastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastName

`func (o *IdentityDocument) SetLastName(v string)`

SetLastName sets LastName field to given value.

### HasLastName

`func (o *IdentityDocument) HasLastName() bool`

HasLastName returns a boolean if a field has been set.

### GetEmail

`func (o *IdentityDocument) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *IdentityDocument) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *IdentityDocument) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *IdentityDocument) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetCreated

`func (o *IdentityDocument) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *IdentityDocument) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *IdentityDocument) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *IdentityDocument) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *IdentityDocument) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *IdentityDocument) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *IdentityDocument) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *IdentityDocument) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *IdentityDocument) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *IdentityDocument) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *IdentityDocument) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *IdentityDocument) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetPhone

`func (o *IdentityDocument) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *IdentityDocument) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *IdentityDocument) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *IdentityDocument) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetSynced

`func (o *IdentityDocument) GetSynced() string`

GetSynced returns the Synced field if non-nil, zero value otherwise.

### GetSyncedOk

`func (o *IdentityDocument) GetSyncedOk() (*string, bool)`

GetSyncedOk returns a tuple with the Synced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSynced

`func (o *IdentityDocument) SetSynced(v string)`

SetSynced sets Synced field to given value.

### HasSynced

`func (o *IdentityDocument) HasSynced() bool`

HasSynced returns a boolean if a field has been set.

### GetInactive

`func (o *IdentityDocument) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *IdentityDocument) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *IdentityDocument) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *IdentityDocument) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetProtected

`func (o *IdentityDocument) GetProtected() bool`

GetProtected returns the Protected field if non-nil, zero value otherwise.

### GetProtectedOk

`func (o *IdentityDocument) GetProtectedOk() (*bool, bool)`

GetProtectedOk returns a tuple with the Protected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtected

`func (o *IdentityDocument) SetProtected(v bool)`

SetProtected sets Protected field to given value.

### HasProtected

`func (o *IdentityDocument) HasProtected() bool`

HasProtected returns a boolean if a field has been set.

### GetStatus

`func (o *IdentityDocument) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *IdentityDocument) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *IdentityDocument) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *IdentityDocument) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetEmployeeNumber

`func (o *IdentityDocument) GetEmployeeNumber() string`

GetEmployeeNumber returns the EmployeeNumber field if non-nil, zero value otherwise.

### GetEmployeeNumberOk

`func (o *IdentityDocument) GetEmployeeNumberOk() (*string, bool)`

GetEmployeeNumberOk returns a tuple with the EmployeeNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmployeeNumber

`func (o *IdentityDocument) SetEmployeeNumber(v string)`

SetEmployeeNumber sets EmployeeNumber field to given value.

### HasEmployeeNumber

`func (o *IdentityDocument) HasEmployeeNumber() bool`

HasEmployeeNumber returns a boolean if a field has been set.

### GetManager

`func (o *IdentityDocument) GetManager() IdentityDocumentAllOfManager`

GetManager returns the Manager field if non-nil, zero value otherwise.

### GetManagerOk

`func (o *IdentityDocument) GetManagerOk() (*IdentityDocumentAllOfManager, bool)`

GetManagerOk returns a tuple with the Manager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManager

`func (o *IdentityDocument) SetManager(v IdentityDocumentAllOfManager)`

SetManager sets Manager field to given value.

### HasManager

`func (o *IdentityDocument) HasManager() bool`

HasManager returns a boolean if a field has been set.

### SetManagerNil

`func (o *IdentityDocument) SetManagerNil(b bool)`

 SetManagerNil sets the value for Manager to be an explicit nil

### UnsetManager
`func (o *IdentityDocument) UnsetManager()`

UnsetManager ensures that no value is present for Manager, not even an explicit nil
### GetIsManager

`func (o *IdentityDocument) GetIsManager() bool`

GetIsManager returns the IsManager field if non-nil, zero value otherwise.

### GetIsManagerOk

`func (o *IdentityDocument) GetIsManagerOk() (*bool, bool)`

GetIsManagerOk returns a tuple with the IsManager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsManager

`func (o *IdentityDocument) SetIsManager(v bool)`

SetIsManager sets IsManager field to given value.

### HasIsManager

`func (o *IdentityDocument) HasIsManager() bool`

HasIsManager returns a boolean if a field has been set.

### GetIdentityProfile

`func (o *IdentityDocument) GetIdentityProfile() IdentityDocumentAllOfIdentityProfile`

GetIdentityProfile returns the IdentityProfile field if non-nil, zero value otherwise.

### GetIdentityProfileOk

`func (o *IdentityDocument) GetIdentityProfileOk() (*IdentityDocumentAllOfIdentityProfile, bool)`

GetIdentityProfileOk returns a tuple with the IdentityProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityProfile

`func (o *IdentityDocument) SetIdentityProfile(v IdentityDocumentAllOfIdentityProfile)`

SetIdentityProfile sets IdentityProfile field to given value.

### HasIdentityProfile

`func (o *IdentityDocument) HasIdentityProfile() bool`

HasIdentityProfile returns a boolean if a field has been set.

### GetSource

`func (o *IdentityDocument) GetSource() IdentityDocumentAllOfSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *IdentityDocument) GetSourceOk() (*IdentityDocumentAllOfSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *IdentityDocument) SetSource(v IdentityDocumentAllOfSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *IdentityDocument) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetAttributes

`func (o *IdentityDocument) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *IdentityDocument) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *IdentityDocument) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *IdentityDocument) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetDisabled

`func (o *IdentityDocument) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *IdentityDocument) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *IdentityDocument) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *IdentityDocument) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetLocked

`func (o *IdentityDocument) GetLocked() bool`

GetLocked returns the Locked field if non-nil, zero value otherwise.

### GetLockedOk

`func (o *IdentityDocument) GetLockedOk() (*bool, bool)`

GetLockedOk returns a tuple with the Locked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocked

`func (o *IdentityDocument) SetLocked(v bool)`

SetLocked sets Locked field to given value.

### HasLocked

`func (o *IdentityDocument) HasLocked() bool`

HasLocked returns a boolean if a field has been set.

### GetProcessingState

`func (o *IdentityDocument) GetProcessingState() string`

GetProcessingState returns the ProcessingState field if non-nil, zero value otherwise.

### GetProcessingStateOk

`func (o *IdentityDocument) GetProcessingStateOk() (*string, bool)`

GetProcessingStateOk returns a tuple with the ProcessingState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingState

`func (o *IdentityDocument) SetProcessingState(v string)`

SetProcessingState sets ProcessingState field to given value.

### HasProcessingState

`func (o *IdentityDocument) HasProcessingState() bool`

HasProcessingState returns a boolean if a field has been set.

### SetProcessingStateNil

`func (o *IdentityDocument) SetProcessingStateNil(b bool)`

 SetProcessingStateNil sets the value for ProcessingState to be an explicit nil

### UnsetProcessingState
`func (o *IdentityDocument) UnsetProcessingState()`

UnsetProcessingState ensures that no value is present for ProcessingState, not even an explicit nil
### GetProcessingDetails

`func (o *IdentityDocument) GetProcessingDetails() ProcessingDetails`

GetProcessingDetails returns the ProcessingDetails field if non-nil, zero value otherwise.

### GetProcessingDetailsOk

`func (o *IdentityDocument) GetProcessingDetailsOk() (*ProcessingDetails, bool)`

GetProcessingDetailsOk returns a tuple with the ProcessingDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingDetails

`func (o *IdentityDocument) SetProcessingDetails(v ProcessingDetails)`

SetProcessingDetails sets ProcessingDetails field to given value.

### HasProcessingDetails

`func (o *IdentityDocument) HasProcessingDetails() bool`

HasProcessingDetails returns a boolean if a field has been set.

### GetAccounts

`func (o *IdentityDocument) GetAccounts() []BaseAccount`

GetAccounts returns the Accounts field if non-nil, zero value otherwise.

### GetAccountsOk

`func (o *IdentityDocument) GetAccountsOk() (*[]BaseAccount, bool)`

GetAccountsOk returns a tuple with the Accounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccounts

`func (o *IdentityDocument) SetAccounts(v []BaseAccount)`

SetAccounts sets Accounts field to given value.

### HasAccounts

`func (o *IdentityDocument) HasAccounts() bool`

HasAccounts returns a boolean if a field has been set.

### GetAccountCount

`func (o *IdentityDocument) GetAccountCount() int32`

GetAccountCount returns the AccountCount field if non-nil, zero value otherwise.

### GetAccountCountOk

`func (o *IdentityDocument) GetAccountCountOk() (*int32, bool)`

GetAccountCountOk returns a tuple with the AccountCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountCount

`func (o *IdentityDocument) SetAccountCount(v int32)`

SetAccountCount sets AccountCount field to given value.

### HasAccountCount

`func (o *IdentityDocument) HasAccountCount() bool`

HasAccountCount returns a boolean if a field has been set.

### GetApps

`func (o *IdentityDocument) GetApps() []App`

GetApps returns the Apps field if non-nil, zero value otherwise.

### GetAppsOk

`func (o *IdentityDocument) GetAppsOk() (*[]App, bool)`

GetAppsOk returns a tuple with the Apps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApps

`func (o *IdentityDocument) SetApps(v []App)`

SetApps sets Apps field to given value.

### HasApps

`func (o *IdentityDocument) HasApps() bool`

HasApps returns a boolean if a field has been set.

### GetAppCount

`func (o *IdentityDocument) GetAppCount() int32`

GetAppCount returns the AppCount field if non-nil, zero value otherwise.

### GetAppCountOk

`func (o *IdentityDocument) GetAppCountOk() (*int32, bool)`

GetAppCountOk returns a tuple with the AppCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppCount

`func (o *IdentityDocument) SetAppCount(v int32)`

SetAppCount sets AppCount field to given value.

### HasAppCount

`func (o *IdentityDocument) HasAppCount() bool`

HasAppCount returns a boolean if a field has been set.

### GetAccess

`func (o *IdentityDocument) GetAccess() []IdentityAccess`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *IdentityDocument) GetAccessOk() (*[]IdentityAccess, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *IdentityDocument) SetAccess(v []IdentityAccess)`

SetAccess sets Access field to given value.

### HasAccess

`func (o *IdentityDocument) HasAccess() bool`

HasAccess returns a boolean if a field has been set.

### GetAccessCount

`func (o *IdentityDocument) GetAccessCount() int32`

GetAccessCount returns the AccessCount field if non-nil, zero value otherwise.

### GetAccessCountOk

`func (o *IdentityDocument) GetAccessCountOk() (*int32, bool)`

GetAccessCountOk returns a tuple with the AccessCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessCount

`func (o *IdentityDocument) SetAccessCount(v int32)`

SetAccessCount sets AccessCount field to given value.

### HasAccessCount

`func (o *IdentityDocument) HasAccessCount() bool`

HasAccessCount returns a boolean if a field has been set.

### GetEntitlementCount

`func (o *IdentityDocument) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *IdentityDocument) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *IdentityDocument) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *IdentityDocument) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.

### GetRoleCount

`func (o *IdentityDocument) GetRoleCount() int32`

GetRoleCount returns the RoleCount field if non-nil, zero value otherwise.

### GetRoleCountOk

`func (o *IdentityDocument) GetRoleCountOk() (*int32, bool)`

GetRoleCountOk returns a tuple with the RoleCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleCount

`func (o *IdentityDocument) SetRoleCount(v int32)`

SetRoleCount sets RoleCount field to given value.

### HasRoleCount

`func (o *IdentityDocument) HasRoleCount() bool`

HasRoleCount returns a boolean if a field has been set.

### GetAccessProfileCount

`func (o *IdentityDocument) GetAccessProfileCount() int32`

GetAccessProfileCount returns the AccessProfileCount field if non-nil, zero value otherwise.

### GetAccessProfileCountOk

`func (o *IdentityDocument) GetAccessProfileCountOk() (*int32, bool)`

GetAccessProfileCountOk returns a tuple with the AccessProfileCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfileCount

`func (o *IdentityDocument) SetAccessProfileCount(v int32)`

SetAccessProfileCount sets AccessProfileCount field to given value.

### HasAccessProfileCount

`func (o *IdentityDocument) HasAccessProfileCount() bool`

HasAccessProfileCount returns a boolean if a field has been set.

### GetOwns

`func (o *IdentityDocument) GetOwns() []Owns`

GetOwns returns the Owns field if non-nil, zero value otherwise.

### GetOwnsOk

`func (o *IdentityDocument) GetOwnsOk() (*[]Owns, bool)`

GetOwnsOk returns a tuple with the Owns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwns

`func (o *IdentityDocument) SetOwns(v []Owns)`

SetOwns sets Owns field to given value.

### HasOwns

`func (o *IdentityDocument) HasOwns() bool`

HasOwns returns a boolean if a field has been set.

### GetOwnsCount

`func (o *IdentityDocument) GetOwnsCount() int32`

GetOwnsCount returns the OwnsCount field if non-nil, zero value otherwise.

### GetOwnsCountOk

`func (o *IdentityDocument) GetOwnsCountOk() (*int32, bool)`

GetOwnsCountOk returns a tuple with the OwnsCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnsCount

`func (o *IdentityDocument) SetOwnsCount(v int32)`

SetOwnsCount sets OwnsCount field to given value.

### HasOwnsCount

`func (o *IdentityDocument) HasOwnsCount() bool`

HasOwnsCount returns a boolean if a field has been set.

### GetTags

`func (o *IdentityDocument) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *IdentityDocument) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *IdentityDocument) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *IdentityDocument) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetTagsCount

`func (o *IdentityDocument) GetTagsCount() int32`

GetTagsCount returns the TagsCount field if non-nil, zero value otherwise.

### GetTagsCountOk

`func (o *IdentityDocument) GetTagsCountOk() (*int32, bool)`

GetTagsCountOk returns a tuple with the TagsCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTagsCount

`func (o *IdentityDocument) SetTagsCount(v int32)`

SetTagsCount sets TagsCount field to given value.

### HasTagsCount

`func (o *IdentityDocument) HasTagsCount() bool`

HasTagsCount returns a boolean if a field has been set.

### GetVisibleSegments

`func (o *IdentityDocument) GetVisibleSegments() []string`

GetVisibleSegments returns the VisibleSegments field if non-nil, zero value otherwise.

### GetVisibleSegmentsOk

`func (o *IdentityDocument) GetVisibleSegmentsOk() (*[]string, bool)`

GetVisibleSegmentsOk returns a tuple with the VisibleSegments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVisibleSegments

`func (o *IdentityDocument) SetVisibleSegments(v []string)`

SetVisibleSegments sets VisibleSegments field to given value.

### HasVisibleSegments

`func (o *IdentityDocument) HasVisibleSegments() bool`

HasVisibleSegments returns a boolean if a field has been set.

### SetVisibleSegmentsNil

`func (o *IdentityDocument) SetVisibleSegmentsNil(b bool)`

 SetVisibleSegmentsNil sets the value for VisibleSegments to be an explicit nil

### UnsetVisibleSegments
`func (o *IdentityDocument) UnsetVisibleSegments()`

UnsetVisibleSegments ensures that no value is present for VisibleSegments, not even an explicit nil
### GetVisibleSegmentCount

`func (o *IdentityDocument) GetVisibleSegmentCount() int32`

GetVisibleSegmentCount returns the VisibleSegmentCount field if non-nil, zero value otherwise.

### GetVisibleSegmentCountOk

`func (o *IdentityDocument) GetVisibleSegmentCountOk() (*int32, bool)`

GetVisibleSegmentCountOk returns a tuple with the VisibleSegmentCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVisibleSegmentCount

`func (o *IdentityDocument) SetVisibleSegmentCount(v int32)`

SetVisibleSegmentCount sets VisibleSegmentCount field to given value.

### HasVisibleSegmentCount

`func (o *IdentityDocument) HasVisibleSegmentCount() bool`

HasVisibleSegmentCount returns a boolean if a field has been set.


